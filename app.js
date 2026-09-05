// State Management
let casesData = [];
let presetsData = [];
let selectedCategory = 'preset';
let searchQuery = '';

// Selected Cases in Fine Basket
let fineBasket = new Map();

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Force clear old localstorage cache to ensure no broken state exists
  localStorage.removeItem('fivem_pd_cases_v4');
  localStorage.removeItem('fivem_pd_presets_v1');
  localStorage.removeItem('fivem_pd_cases_v5');
  localStorage.removeItem('fivem_pd_presets_v2');

  loadData();
  setupEventListeners();
  renderCategories();
  renderCases();
  updateSummary();
});

// Load Cases & Presets from LocalStorage or Defaults
function loadData() {
  // 1. Load cases: Always ensure default cases are present
  const savedCases = localStorage.getItem('fivem_pd_cases_v6');
  if (savedCases) {
    try {
      casesData = JSON.parse(savedCases);
      if (window.DEFAULT_CASES) {
        window.DEFAULT_CASES.forEach(defCase => {
          if (!casesData.some(c => c.id === defCase.id || c.name === defCase.name)) {
            casesData.push({ ...defCase, starred: false });
          }
        });
      }
    } catch (e) {
      casesData = window.DEFAULT_CASES.map(c => ({ ...c, starred: false }));
    }
  } else {
    casesData = window.DEFAULT_CASES.map(c => ({ ...c, starred: false }));
  }

  // 2. Load presets: Always construct from window.DEFAULT_PRESETS directly
  presetsData = window.DEFAULT_PRESETS ? JSON.parse(JSON.stringify(window.DEFAULT_PRESETS)) : [];
  
  const savedCustomPresets = localStorage.getItem('fivem_pd_presets_v6');
  if (savedCustomPresets) {
    try {
      const customs = JSON.parse(savedCustomPresets);
      customs.forEach(cP => {
        if (!presetsData.some(p => p.id === cP.id)) {
          presetsData.push(cP);
        }
      });
    } catch (e) {}
  }

  saveData();
}

function saveData() {
  localStorage.setItem('fivem_pd_cases_v6', JSON.stringify(casesData));
  localStorage.setItem('fivem_pd_presets_v6', JSON.stringify(presetsData));
}

function toggleStar(id, e) {
  if (e) e.stopPropagation();
  const c = casesData.find(item => item.id === id);
  if (c) {
    c.starred = !c.starred;
    saveData();
    renderCases();
  }
}

// Apply Quick Case Presets
function applyPreset(presetId) {
  let p = presetsData.find(item => item.id === presetId);
  if (!p && window.DEFAULT_PRESETS) {
    p = window.DEFAULT_PRESETS.find(item => item.id === presetId);
  }
  if (!p) return;

  let addedCount = 0;
  (p.caseIds || []).forEach(target => {
    // Search case by exact ID, or name match
    let caseObj = casesData.find(c => c.id === target || c.name === target);
    
    // Fuzzy matching fallbacks
    if (!caseObj) {
      if (target === 'case-weap-1') caseObj = casesData.find(c => c.name.includes('อาวุธมีปืน'));
      else if (target === 'case-red-9') caseObj = casesData.find(c => c.name === 'อุ้มห่อ');
      else if (target === 'case-red-7') caseObj = casesData.find(c => c.name === 'สมรู้อุ้มห่อ');
      else if (target === 'case-gen-1') caseObj = casesData.find(c => c.name.includes('ขัดขวางเจ้าหน้าที่'));
      else if (target === 'case-red-2') caseObj = casesData.find(c => c.name.includes('ต่อสู้เจ้าหน้าที่'));
      else if (target === 'case-gen-11') caseObj = casesData.find(c => c.name.includes('ทะเลาะวิวาท'));
    }

    if (caseObj) {
      const cur = fineBasket.get(caseObj.id) || 0;
      fineBasket.set(caseObj.id, cur + 1);
      addedCount++;
    }
  });

  renderCases();
  updateSummary();
  showToast(`เลือก ${p.name} เรียบร้อย (${addedCount} คดี)`);
}

let fineMultiplier = 1;
let jailMultiplier = 1;
let customFineOverride = null;
let customJailOverride = null;

// Calculate Black Money Jail Time according to exact police rates
function calculateBlackMoneyRates(amount) {
  if (!amount || amount <= 0) return { fine: 0, jail: 0 };

  // ค่าปรับ: ขั้นต่ำ 500 KKD (พก 1 - 500 ปรับ 500 KKD, เกิน 500 ปรับตามยอด 1:1)
  const fine = Math.max(500, amount);
  let jail = 0;

  if (amount >= 1 && amount <= 1999) {
    jail = 5;
  } else if (amount >= 2000 && amount <= 9999) {
    jail = 30;
  } else if (amount >= 10000) {
    // 10,000 -> 40 นาที, เพิ่ม 10 นาทีทุกๆ 10,000 ไปเรื่อยๆ
    const tensOfThousands = Math.floor(amount / 10000);
    jail = 40 + (tensOfThousands - 1) * 10;
  }

  return { fine, jail };
}

function onBlackMoneyInputChange(val) {
  const amount = parseFloat(val) || 0;
  const rates = calculateBlackMoneyRates(amount);
  const fineText = document.getElementById('bmCalcFineText');
  const jailText = document.getElementById('bmCalcJailText');
  if (fineText) fineText.textContent = `$${rates.fine.toLocaleString()} KKD`;
  if (jailText) jailText.textContent = `${rates.jail.toLocaleString()} นาที`;
}

function applyBlackMoneyCalculations() {
  const input = document.getElementById('blackMoneyAmountInput');
  const amount = parseFloat(input?.value || '0') || 0;
  if (amount <= 0) {
    showToast('กรุณากรอกจำนวนเงินดำที่ถูกต้อง');
    return;
  }
  const rates = calculateBlackMoneyRates(amount);

  let bmCase = casesData.find(c => c.name === 'เงินดำ');
  if (!bmCase) {
    bmCase = { id: 'case-ill-4', name: 'เงินดำ', category: 'illegal', fine: rates.fine, jail: rates.jail };
    casesData.push(bmCase);
  } else {
    bmCase.fine = rates.fine;
    bmCase.jail = rates.jail;
  }

  fineBasket.set(bmCase.id, 1);

  saveData();
  renderCases();
  updateSummary();

  const modal = document.getElementById('blackMoneyModal');
  if (modal) modal.classList.remove('active');
  showToast(`คำนวณเงินดำ $${amount.toLocaleString()} ➔ จำคุก ${rates.jail} นาที เรียบร้อย`);
}

// Event Listeners Setup
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCases();
    });
  }

  // Editable Fine & Jail inputs
  const totalFineInput = document.getElementById('totalFineInput');
  const totalJailInput = document.getElementById('totalJailInput');

  if (totalFineInput) {
    totalFineInput.addEventListener('input', (e) => {
      customFineOverride = parseFloat(e.target.value) || 0;
    });
  }

  if (totalJailInput) {
    totalJailInput.addEventListener('input', (e) => {
      customJailOverride = parseFloat(e.target.value) || 0;
    });
  }

  // Multipliers x1 x2 x3 0
  const multiBtns = document.querySelectorAll('.nui-multi-btn');
  multiBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const val = parseInt(btn.dataset.val);

      document.querySelectorAll(`.nui-multi-btn[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (type === 'fine') fineMultiplier = val;
      if (type === 'jail') jailMultiplier = val;

      updateSummary();
    });
  });

  // Action Buttons
  document.getElementById('clearFineBtn')?.addEventListener('click', clearFineBasket);
  document.getElementById('copySummaryBtn')?.addEventListener('click', copySummaryToClipboard);
  document.getElementById('manageCasesBtn')?.addEventListener('click', openManageModal);
  document.getElementById('settingsBtn')?.addEventListener('click', openSettingsModal);
  document.getElementById('addCaseBtn')?.addEventListener('click', openAddCaseModal);

  // Modals
  document.getElementById('closeManageModal')?.addEventListener('click', closeManageModal);
  document.getElementById('closeCaseModal')?.addEventListener('click', closeCaseModal);
  document.getElementById('cancelCaseModal')?.addEventListener('click', closeCaseModal);
  document.getElementById('caseForm')?.addEventListener('submit', handleSaveCase);

  // Settings Modal Listeners
  document.getElementById('closeSettingsModal')?.addEventListener('click', closeSettingsModal);
  document.getElementById('doneSettingsBtn')?.addEventListener('click', closeSettingsModal);
  document.getElementById('resetSystemBtn')?.addEventListener('click', resetToDefaultData);

  // Export / Import
  document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
  document.getElementById('importDataBtn')?.addEventListener('click', () => {
    document.getElementById('importFileInput')?.click();
  });
  document.getElementById('importFileInput')?.addEventListener('change', importData);
}

// Render Categories Tabs
function renderCategories() {
  const container = document.getElementById('categoryTabs');
  if (!container) return;

  container.innerHTML = '';

  window.DEFAULT_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-tab ${cat.id === selectedCategory ? 'active' : ''}`;
    btn.textContent = cat.name;
    btn.addEventListener('click', () => {
      selectedCategory = cat.id;
      document.querySelectorAll('#categoryTabs .cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCases();
    });
    container.appendChild(btn);
  });
}

// Apply Quick Case Presets
function applyPreset(presetId) {
  let p = presetsData.find(item => item.id === presetId);
  if (!p && window.DEFAULT_PRESETS) {
    p = window.DEFAULT_PRESETS.find(item => item.id === presetId);
  }
  if (!p) {
    console.error('Preset not found:', presetId);
    return;
  }

  let addedCount = 0;
  (p.caseIds || []).forEach(targetIdOrName => {
    // Search case by exact ID first, then by name
    let caseObj = casesData.find(c => c.id === targetIdOrName) || casesData.find(c => c.name === targetIdOrName);

    // Fallbacks if ID mismatch
    if (!caseObj) {
      if (targetIdOrName === 'case-weap-1') caseObj = casesData.find(c => c.name === 'อาวุธมีปืน');
      else if (targetIdOrName === 'case-red-9') caseObj = casesData.find(c => c.name === 'อุ้มห่อ');
      else if (targetIdOrName === 'case-red-7') caseObj = casesData.find(c => c.name === 'สมรู้อุ้มห่อ');
      else if (targetIdOrName === 'case-gen-1') caseObj = casesData.find(c => c.name === 'ขัดขวางเจ้าหน้าที่ (สตอรี่)');
      else if (targetIdOrName === 'case-red-2') caseObj = casesData.find(c => c.name === 'ต่อสู้เจ้าหน้าที่');
      else if (targetIdOrName === 'case-gen-11') caseObj = casesData.find(c => c.name === 'ทะเลาะวิวาท (แก๊ง)');
    }

    if (caseObj) {
      const currentCount = fineBasket.get(caseObj.id) || 0;
      fineBasket.set(caseObj.id, currentCount + 1);
      addedCount++;
    }
  });

  renderCases();
  updateSummary();
  showToast(`เลือก ${p.name} เรียบร้อย`);
}

// Render Cases List
function renderCases() {
  const container = document.getElementById('caseList');
  container.innerHTML = '';

  // Render Preset Cards view if "พรีเซ็ตคดี" tab is selected
  if (selectedCategory === 'preset') {
    if (presetsData.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">
        <i class="fa-solid fa-bolt" style="font-size: 2rem; margin-bottom: 10px; color: var(--primary-gold);"></i><br>ยังไม่มีรายการพรีเซ็ต<br><small>กดปุ่ม "จัดการคดี / เพิ่มข้อหา" เพื่อเพิ่มพรีเซ็ตใหม่ได้</small>
      </div>`;
      return;
    }

    presetsData.forEach(p => {
      const caseNames = (p.caseIds || []).map(id => {
        const found = casesData.find(c => c.id === id || c.name === id);
        return found ? found.name : id;
      }).filter(Boolean).join(' + ');

      const card = document.createElement('div');
      card.className = 'case-card';
      card.style.borderLeft = '4px solid var(--primary-gold)';
      card.style.cursor = 'pointer';
      card.onclick = (e) => {
        applyPreset(p.id);
      };

      card.innerHTML = `
        <div class="case-info">
          <div class="case-name">
            <i class="fa-solid fa-bolt" style="color: var(--primary-gold);"></i>
            <span style="font-weight: bold; color: var(--primary-gold);">${escapeHtml(p.name)}</span>
          </div>
          <div class="case-meta">
            <span style="color: var(--text-muted);">รวมคดี: ${escapeHtml(caseNames || 'ไม่มีคดีในรายการ')}</span>
          </div>
        </div>
        <div class="case-action">
          <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem;" onclick="event.stopPropagation(); applyPreset('${p.id}')">
            <i class="fa-solid fa-check"></i> เลือกพรีเซ็ตนี้
          </button>
        </div>
      `;

      container.appendChild(card);
    });
    return;
  }

  // Filter cases by Category & Search Query
  let filtered = casesData.filter(c => {
    if (c.category !== selectedCategory) return false;
    if (!searchQuery) return true;
    return c.name.toLowerCase().includes(searchQuery);
  });

  // Sort: Starred cases come first!
  filtered.sort((a, b) => {
    const isAStarred = a.starred ? 1 : 0;
    const isBStarred = b.starred ? 1 : 0;
    return isBStarred - isAStarred;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">
      <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 10px;"></i><br>ไม่พบรายการคดีในหมวดหมู่นี้
    </div>`;
    return;
  }

  filtered.forEach(c => {
    const currentCount = fineBasket.get(c.id) || 0;
    const isStarred = !!c.starred;

    const card = document.createElement('div');
    card.className = 'case-card';
    card.dataset.category = c.category || 'general';

    card.innerHTML = `
      <div class="case-info">
        <div class="case-name">
          <button class="star-btn ${isStarred ? 'active' : ''}" data-id="${c.id}" title="ติดดาวคดี">
            <i class="${isStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
          </button>
          <span>${escapeHtml(c.name)}</span>
        </div>
        <div class="case-meta">
          <span>ค่าปรับ <strong>${c.fine.toLocaleString()} KKD</strong></span>
          <span>จำคุก <strong>${c.jail} นาที</strong></span>
        </div>
      </div>
      <div class="case-action">
        <div class="count-control">
          ${currentCount > 0 ? `<button class="add-btn-small" onclick="decreaseCase('${c.id}')"><i class="fa-solid fa-minus"></i></button>` : ''}
          <span class="count-num-box">${currentCount}</span>
          <button class="add-btn-small" onclick="increaseCase('${c.id}')"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    `;

    // Attach event listener directly to star button
    const starBtn = card.querySelector('.star-btn');
    if (starBtn) {
      starBtn.addEventListener('click', (ev) => {
        toggleStar(c.id, ev);
      });
    }

    container.appendChild(card);
  });
}

// Basket Management
function increaseCase(id) {
  const current = fineBasket.get(id) || 0;
  fineBasket.set(id, current + 1);
  renderCases();
  updateSummary();
}

function decreaseCase(id) {
  const current = fineBasket.get(id) || 0;
  if (current > 1) {
    fineBasket.set(id, current - 1);
  } else {
    fineBasket.delete(id);
  }
  renderCases();
  updateSummary();
}

function removeCaseFromBasket(id) {
  fineBasket.delete(id);
  renderCases();
  updateSummary();
}

function clearFineBasket() {
  fineBasket.clear();
  renderCases();
  updateSummary();
  showToast('ล้างรายการข้อหาทั้งหมดเรียบร้อย');
}



let maxCards = {
  c60: null, // null means AUTO / unlimited
  c30: null,
  c10: null
};

function adjustMaxCard(type, delta) {
  if (maxCards[type] === null) {
    maxCards[type] = delta > 0 ? delta : 0;
  } else {
    maxCards[type] = Math.max(0, maxCards[type] + delta);
  }
  updateMaxCardDisplay();
  updateSummary();
}

function resetMaxCards() {
  maxCards = { c60: null, c30: null, c10: null };
  updateMaxCardDisplay();
  updateSummary();
}

function updateMaxCardDisplay() {
  document.getElementById('has10mVal').textContent = maxCards.c10 === null ? 'AUTO' : maxCards.c10 + ' ใบ';
  document.getElementById('has30mVal').textContent = maxCards.c30 === null ? 'AUTO' : maxCards.c30 + ' ใบ';
  document.getElementById('has60mVal').textContent = maxCards.c60 === null ? 'AUTO' : maxCards.c60 + ' ใบ';
}

// Calculate UnJail Cards taking into account max available cards per type
function calculateUnJailCards(totalMinutes) {
  if (!totalMinutes || totalMinutes <= 0) {
    return { c60: 0, c30: 0, c10: 0 };
  }

  let mins = totalMinutes;
  let c60 = 0, c30 = 0, c10 = 0;

  // 1. Calculate 60m cards (bounded by maxCards.c60 if set)
  let needed60 = Math.floor(mins / 60);
  if (maxCards.c60 !== null) {
    c60 = Math.min(needed60, maxCards.c60);
  } else {
    c60 = needed60;
  }
  mins -= c60 * 60;

  // 2. Calculate 30m cards (bounded by maxCards.c30 if set)
  let needed30 = Math.floor(mins / 30);
  if (maxCards.c30 !== null) {
    c30 = Math.min(needed30, maxCards.c30);
  } else {
    c30 = needed30;
  }
  mins -= c30 * 30;

  // 3. Calculate 10m cards (bounded by maxCards.c10 if set)
  if (mins > 0) {
    let needed10 = Math.ceil(mins / 10);
    if (maxCards.c10 !== null) {
      c10 = Math.min(needed10, maxCards.c10);
      mins -= c10 * 10;

      // Overflow handling: If 10m cards are exhausted, spill back to 30m or 60m if possible
      if (mins > 0) {
        if (maxCards.c30 === null || c30 < maxCards.c30) {
          c30 += Math.ceil(mins / 30);
        } else if (maxCards.c60 === null || c60 < maxCards.c60) {
          c60 += Math.ceil(mins / 60);
        }
      }
    } else {
      c10 = needed10;
    }
  }

  return { c60, c30, c10 };
}


// Update Summary Right Panel
function updateSummary() {
  const container = document.getElementById('selectedCasesGrid');
  const emptyMessage = document.getElementById('emptySelectedMsg');

  let totalFine = 0;
  let totalJail = 0;

  container.innerHTML = '';

  if (fineBasket.size === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';

    fineBasket.forEach((count, id) => {
      const caseItem = casesData.find(c => c.id === id);
      if (!caseItem) return;

      totalFine += caseItem.fine * count;
      totalJail += caseItem.jail * count;

      const chip = document.createElement('div');
      chip.className = 'selected-case-chip';
      chip.innerHTML = `
        <span>${escapeHtml(caseItem.name)} (${count})</span>
        <i class="fa-solid fa-xmark chip-remove" onclick="removeCaseFromBasket('${caseItem.id}')"></i>
      `;
      container.appendChild(chip);
    });
  }

  const finalFine = totalFine * fineMultiplier;
  const finalJail = totalJail * jailMultiplier;

  const totalFineVal = document.getElementById('totalFineVal');
  const totalJailVal = document.getElementById('totalJailVal');

  if (totalFineVal) totalFineVal.textContent = finalFine.toLocaleString();
  if (totalJailVal) totalJailVal.textContent = finalJail.toLocaleString();

  // Calculate UnJail Cards taking into account max limits
  const cards = calculateUnJailCards(finalJail);
  if (document.getElementById('unjail10Count')) document.getElementById('unjail10Count').textContent = cards.c10 + ' ใบ';
  if (document.getElementById('unjail30Count')) document.getElementById('unjail30Count').textContent = cards.c30 + ' ใบ';
  if (document.getElementById('unjail60Count')) document.getElementById('unjail60Count').textContent = cards.c60 + ' ใบ';

  // Calculate Remaining Jail Time after deducted cards
  const remainingJailBox = document.getElementById('remainingJailBox');
  const remainingJailVal = document.getElementById('remainingJailVal');

  const hasCustomCards = (maxCards.c60 !== null && maxCards.c60 > 0) ||
    (maxCards.c30 !== null && maxCards.c30 > 0) ||
    (maxCards.c10 !== null && maxCards.c10 > 0);

  if (hasCustomCards && finalJail > 0) {
    const deductedTime = (cards.c60 * 60) + (cards.c30 * 30) + (cards.c10 * 10);
    const remainingTime = Math.max(0, finalJail - deductedTime);

    if (remainingJailBox) remainingJailBox.style.display = 'block';
    if (remainingJailVal) remainingJailVal.textContent = `${remainingTime.toLocaleString()} นาที (ลดไป ${deductedTime} นาที)`;
  } else {
    if (remainingJailBox) remainingJailBox.style.display = 'none';
  }

  // Live Preview Text Update
  const previewElement = document.getElementById('discordLogPreviewText');
  if (previewElement) {
    if (fineBasket.size === 0) {
      previewElement.textContent = '- ยังไม่ได้เลือกรายการข้อหา -';
    } else {
      let textList = [];
      fineBasket.forEach((count, id) => {
        const c = casesData.find(item => item.id === id);
        if (c) {
          const fineVal = (c.fine * count * fineMultiplier).toLocaleString();
          const jailVal = (c.jail * count * jailMultiplier).toLocaleString();
          textList.push(`- ${c.name}${count > 1 ? ` (x${count})` : ''} : ${fineVal} KKD : ${jailVal} นาที`);
        }
      });

      let cardTextArr = [];
      if (cards.c10 > 0) cardTextArr.push(`10m: ${cards.c10} ใบ`);
      if (cards.c30 > 0) cardTextArr.push(`30m: ${cards.c30} ใบ`);
      if (cards.c60 > 0) cardTextArr.push(`60m: ${cards.c60} ใบ`);
      const cardSummary = cardTextArr.length > 0 ? cardTextArr.join(' | ') : 'ไม่ต้องใช้บัตร';

      const deductedTime = (cards.c60 * 60) + (cards.c30 * 30) + (cards.c10 * 10);
      const remainingTime = Math.max(0, finalJail - deductedTime);
      const remainingText = hasCustomCards ? `\n⏳ เวลาจำคุกคงเหลือ : ${remainingTime.toLocaleString()} นาที` : '';

      previewElement.textContent = `📋 **รายการข้อหา**
${textList.join('\n')}

💰 ค่าปรับ : ${finalFine.toLocaleString()} KKD
⏱️ เวลาจำคุก : ${finalJail.toLocaleString()} นาที
🎟️ บัตร UnJail ที่ใช้ : ${cardSummary}${remainingText}`;
    }
  }
}

// Copy Summary to Clipboard
function copySummaryToClipboard() {
  if (fineBasket.size === 0) {
    showToast('กรุณาเลือกข้อหาคดีก่อนคัดลอก');
    return;
  }

  let textList = [];
  let totalFine = 0;
  let totalJail = 0;

  fineBasket.forEach((count, id) => {
    const c = casesData.find(item => item.id === id);
    if (c) {
      const fineVal = (c.fine * count * fineMultiplier).toLocaleString();
      const jailVal = (c.jail * count * jailMultiplier).toLocaleString();
      textList.push(`- ${c.name}${count > 1 ? ` (x${count})` : ''} : ${fineVal} KKD : ${jailVal} นาที`);
      totalFine += c.fine * count;
      totalJail += c.jail * count;
    }
  });

  const finalFine = totalFine * fineMultiplier;
  const finalJail = totalJail * jailMultiplier;

  const cards = calculateUnJailCards(finalJail);
  let cardTextArr = [];
  if (cards.c10 > 0) cardTextArr.push(`10m: ${cards.c10} ใบ`);
  if (cards.c30 > 0) cardTextArr.push(`30m: ${cards.c30} ใบ`);
  if (cards.c60 > 0) cardTextArr.push(`60m: ${cards.c60} ใบ`);

  const cardSummary = cardTextArr.length > 0 ? cardTextArr.join(' | ') : 'ไม่ต้องใช้บัตร';

  const deductedTime = (cards.c60 * 60) + (cards.c30 * 30) + (cards.c10 * 10);
  const remainingTime = Math.max(0, finalJail - deductedTime);

  const hasCustomCards = (maxCards.c60 !== null && maxCards.c60 > 0) ||
    (maxCards.c30 !== null && maxCards.c30 > 0) ||
    (maxCards.c10 !== null && maxCards.c10 > 0);

  const remainingText = hasCustomCards ? `\n⏳ เวลาจำคุกคงเหลือ: ${remainingTime.toLocaleString()} นาที` : '';

  const summaryText = `📋 **รายการข้อหา**
${textList.join('\n')}

💰 ค่าปรับ : ${finalFine.toLocaleString()} KKD
⏱️ เวลาจำคุก : ${finalJail.toLocaleString()} นาที
🎟️ บัตร UnJail ที่ใช้ : ${cardSummary}${remainingText}`;

  navigator.clipboard.writeText(summaryText).then(() => {
    showToast('คัดลอกรายละเอียดคดีเรียบร้อยแล้ว!');
  }).catch(err => {
    console.error('Failed to copy', err);
    showToast('เกิดข้อผิดพลาดในการคัดลอก');
  });
}

// Manage Cases Modal Logic
function openManageModal() {
  const modal = document.getElementById('manageModal');
  modal.classList.add('active');
  renderManageTable();
}

function closeManageModal() {
  document.getElementById('manageModal').classList.remove('active');
}

// Settings Modal Logic
function openSettingsModal() {
  document.getElementById('settingsModal')?.classList.add('active');
}

function closeSettingsModal() {
  document.getElementById('settingsModal')?.classList.remove('active');
}

function resetToDefaultData() {
  if (confirm('คุณต้องการรีเซ็ตรายการข้อหาและพรีเซ็ตทั้งหมดกลับเป็นค่ามาตรฐานเริ่มต้นใช่หรือไม่? (ข้อมูลที่เคยแก้ไขจะถูกแทนที่)')) {
    localStorage.removeItem('fivem_pd_cases_v6');
    localStorage.removeItem('fivem_pd_presets_v6');
    casesData = window.DEFAULT_CASES ? window.DEFAULT_CASES.map(c => ({ ...c, starred: false })) : [];
    presetsData = window.DEFAULT_PRESETS ? JSON.parse(JSON.stringify(window.DEFAULT_PRESETS)) : [];
    saveData();
    renderCases();
    renderManageTable();
    updateSummary();
    closeSettingsModal();
    showToast('รีเซ็ตข้อมูลระบบกลับเป็นค่าเริ่มต้นเรียบร้อยแล้ว');
  }
}

function renderManageTable() {
  const container = document.getElementById('manageTableBody');
  container.innerHTML = '';

  // 1. Render Presets section first
  if (presetsData.length > 0) {
    const presetHeaderRow = document.createElement('tr');
    presetHeaderRow.innerHTML = `<td colspan="5" style="padding: 10px; background: rgba(229, 193, 88, 0.1); color: var(--primary-gold); font-weight: bold;"><i class="fa-solid fa-bolt"></i> รายการพรีเซ็ตคดีความ</td>`;
    container.appendChild(presetHeaderRow);

    presetsData.forEach(p => {
      const caseNames = (p.caseIds || []).map(id => {
        const found = casesData.find(c => c.id === id);
        return found ? found.name : null;
      }).filter(Boolean).join(', ');

      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid var(--border-color)';
      row.innerHTML = `
        <td style="padding: 10px; font-weight: bold; color: var(--primary-gold);">${escapeHtml(p.name)}</td>
        <td style="padding: 10px; color: var(--text-muted); font-size: 0.8rem;" colspan="3">รวม: ${escapeHtml(caseNames || '-')}</td>
        <td style="padding: 10px 12px; white-space: nowrap; text-align: right;">
          <div style="display: inline-flex; gap: 6px; align-items: center;">
            <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="editPreset('${p.id}')"><i class="fa-solid fa-pen-to-square"></i> แก้ไข</button>
            <button class="btn-secondary btn-danger" style="padding: 5px 10px; font-size: 0.8rem;" onclick="deletePreset('${p.id}')"><i class="fa-solid fa-trash"></i> ลบ</button>
          </div>
        </td>
      `;
      container.appendChild(row);
    });
  }

  // 2. Render Cases section
  const casesHeaderRow = document.createElement('tr');
  casesHeaderRow.innerHTML = `<td colspan="5" style="padding: 10px; background: rgba(255,255,255,0.05); color: #FFF; font-weight: bold; margin-top: 10px;"><i class="fa-solid fa-gavel"></i> รายการข้อหาคดีความทั้งหมด</td>`;
  container.appendChild(casesHeaderRow);

  casesData.forEach(c => {
    const row = document.createElement('tr');
    row.style.borderBottom = '1px solid var(--border-color)';
    row.innerHTML = `
      <td style="padding: 10px;">${escapeHtml(c.name)}</td>
      <td style="padding: 10px; color: var(--text-muted); font-size: 0.8rem;">${c.category}</td>
      <td style="padding: 10px; color: var(--primary-gold);">$${c.fine.toLocaleString()}</td>
      <td style="padding: 10px; color: #38bdf8;">${c.jail} นาที</td>
      <td style="padding: 10px 12px; white-space: nowrap; text-align: right;">
        <div style="display: inline-flex; gap: 6px; align-items: center;">
          <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="editCase('${c.id}')"><i class="fa-solid fa-pen-to-square"></i> แก้ไข</button>
          <button class="btn-secondary btn-danger" style="padding: 5px 10px; font-size: 0.8rem;" onclick="deleteCase('${c.id}')"><i class="fa-solid fa-trash"></i> ลบ</button>
        </div>
      </td>
    `;
    container.appendChild(row);
  });
}

// Preset CRUD Functions
let currentCheckedPresetCaseIds = new Set();

function openAddPresetModal() {
  document.getElementById('presetForm').reset();
  document.getElementById('presetIdInput').value = '';
  if (document.getElementById('presetSearchInput')) document.getElementById('presetSearchInput').value = '';
  document.getElementById('presetModalTitle').textContent = 'เพิ่มพรีเซ็ตคดีใหม่';

  currentCheckedPresetCaseIds = new Set();
  renderPresetCasesChecklist('', currentCheckedPresetCaseIds);
  document.getElementById('presetModal').classList.add('active');
}

function editPreset(id) {
  const p = presetsData.find(item => item.id === id);
  if (!p) return;

  document.getElementById('presetIdInput').value = p.id;
  document.getElementById('presetNameInput').value = p.name;
  if (document.getElementById('presetSearchInput')) document.getElementById('presetSearchInput').value = '';
  document.getElementById('presetModalTitle').textContent = 'แก้ไขพรีเซ็ตคดี';

  currentCheckedPresetCaseIds = new Set(p.caseIds || []);
  renderPresetCasesChecklist('', currentCheckedPresetCaseIds);
  document.getElementById('presetModal').classList.add('active');
}

function closePresetModal() {
  document.getElementById('presetModal').classList.remove('active');
}

function filterPresetChecklist(query) {
  renderPresetCasesChecklist(query, currentCheckedPresetCaseIds);
}

function renderPresetCasesChecklist(query = '', checkedSet = new Set()) {
  const container = document.getElementById('presetCasesChecklist');
  if (!container) return;

  container.innerHTML = '';
  const q = query.trim().toLowerCase();

  const filtered = casesData.filter(c => {
    if (!q) return true;
    return c.name.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 12px; font-size: 0.8rem;">ไม่พบข้อหาที่ค้นหา</div>`;
    return;
  }

  filtered.forEach(c => {
    const isChecked = checkedSet.has(c.id);
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '8px';
    label.style.fontSize = '0.82rem';
    label.style.cursor = 'pointer';

    label.innerHTML = `
      <input type="checkbox" class="preset-case-cb" value="${c.id}" ${isChecked ? 'checked' : ''} style="accent-color: var(--primary-gold);">
      <span>${escapeHtml(c.name)} <small style="color: var(--text-muted);">($${c.fine.toLocaleString()} | ${c.jail}m)</small></span>
    `;

    const cb = label.querySelector('.preset-case-cb');
    if (cb) {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          checkedSet.add(c.id);
        } else {
          checkedSet.delete(c.id);
        }
      });
    }

    container.appendChild(label);
  });
}

function handleSavePreset(e) {
  e.preventDefault();
  const id = document.getElementById('presetIdInput').value;
  const name = document.getElementById('presetNameInput').value.trim();

  const selectedCaseIds = Array.from(currentCheckedPresetCaseIds);

  if (selectedCaseIds.length === 0) {
    showToast('กรุณาเลือกคดีความอย่างน้อย 1 คดีสำหรับพรีเซ็ต');
    return;
  }

  if (id) {
    const index = presetsData.findIndex(item => item.id === id);
    if (index !== -1) {
      presetsData[index] = { id, name, caseIds: selectedCaseIds };
    }
  } else {
    const newId = 'preset-' + Date.now();
    presetsData.push({ id: newId, name, caseIds: selectedCaseIds });
  }

  saveData();
  renderCases();
  renderManageTable();
  closePresetModal();
  showToast('บันทึกข้อมูลพรีเซ็ตเรียบร้อยแล้ว');
}

function deletePreset(id) {
  if (confirm('คุณต้องการลบพรีเซ็ตนี้ใช่หรือไม่?')) {
    presetsData = presetsData.filter(item => item.id !== id);
    saveData();
    renderCases();
    renderManageTable();
    showToast('ลบพรีเซ็ตเรียบร้อยแล้ว');
  }
}

// Add/Edit Case Form Modal
function openAddCaseModal() {
  document.getElementById('caseForm').reset();
  document.getElementById('caseIdInput').value = '';
  document.getElementById('caseModalTitle').textContent = 'เพิ่มคดีความใหม่';
  document.getElementById('caseModal').classList.add('active');
}

function editCase(id) {
  const c = casesData.find(item => item.id === id);
  if (!c) return;

  document.getElementById('caseIdInput').value = c.id;
  document.getElementById('caseNameInput').value = c.name;
  document.getElementById('caseCatSelect').value = c.category || 'general';
  document.getElementById('caseFineInput').value = c.fine;
  document.getElementById('caseJailInput').value = c.jail;
  document.getElementById('caseEvidenceInput').value = c.evidence ? c.evidence.join(', ') : '';

  document.getElementById('caseModalTitle').textContent = 'แก้ไขคดีความ';
  document.getElementById('caseModal').classList.add('active');
}

function closeCaseModal() {
  document.getElementById('caseModal').classList.remove('active');
}

function handleSaveCase(e) {
  e.preventDefault();
  const id = document.getElementById('caseIdInput').value;
  const name = document.getElementById('caseNameInput').value.trim();
  const category = document.getElementById('caseCatSelect').value;
  const fine = parseInt(document.getElementById('caseFineInput').value) || 0;
  const jail = parseInt(document.getElementById('caseJailInput').value) || 0;
  const evidenceRaw = document.getElementById('caseEvidenceInput').value;

  const evidence = evidenceRaw.split(',').map(s => s.trim()).filter(s => s.length > 0);

  if (id) {
    // Edit existing
    const index = casesData.findIndex(item => item.id === id);
    if (index !== -1) {
      casesData[index] = { id, name, category, fine, jail, evidence };
    }
  } else {
    // Add new
    const newId = 'case-' + Date.now();
    casesData.push({ id: newId, name, category, fine, jail, evidence });
  }

  saveData();
  renderCases();
  renderManageTable();
  updateSummary();
  closeCaseModal();
  showToast('บันทึกข้อมูลคดีเรียบร้อย');
}

function deleteCase(id) {
  if (confirm('คุณต้องการลบคดีนี้ใช่หรือไม่?')) {
    casesData = casesData.filter(item => item.id !== id);
    fineBasket.delete(id);
    saveData();
    renderCases();
    renderManageTable();
    updateSummary();
    showToast('ลบคดีเรียบร้อย');
  }
}

// Export/Import JSON Data
function exportData() {
  const payload = {
    version: 6,
    exportedAt: new Date().toISOString(),
    cases: casesData,
    presets: presetsData
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `kkpd101_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('ส่งออกไฟล์ข้อมูลคดีและพรีเซ็ตเรียบร้อยแล้ว');
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data && data.cases && Array.isArray(data.cases)) {
        casesData = data.cases;
        if (Array.isArray(data.presets)) {
          presetsData = data.presets;
        }
        saveData();
        renderCases();
        renderManageTable();
        updateSummary();
        closeSettingsModal();
        showToast('นำเข้าข้อมูลคดีและพรีเซ็ตสำเร็จแล้ว!');
      } else if (Array.isArray(data)) {
        // Old format backward compatibility (array of cases)
        casesData = data;
        saveData();
        renderCases();
        renderManageTable();
        updateSummary();
        closeSettingsModal();
        showToast('นำเข้าข้อมูลคดีสำเร็จแล้ว!');
      } else {
        alert('รูปแบบไฟล์ JSON ไม่ถูกต้อง');
      }
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการอ่านไฟล์ JSON');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-gold);"></i> ${escapeHtml(message)}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Utility Function
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
