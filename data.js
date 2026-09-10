window.DEFAULT_CASES = [
  // คดีทั่วไป
  { id: "case-gen-1", name: "ขัดขวางเจ้าหน้าที่ (สตอรี่)", category: "general", fine: 10000, jail: 60, evidence: [] },
  { id: "case-gen-2", name: "ขัดขวางเจ้าหน้าที่", category: "general", fine: 5000, jail: 30, evidence: [] },
  { id: "case-gen-3", name: "ขับรถโดยประมาท", category: "general", fine: 1000, jail: 0, evidence: [] },
  { id: "case-gen-4", name: "ขับรถสวนเลน", category: "general", fine: 300, jail: 0, evidence: [] },
  { id: "case-gen-5", name: "แข่งรถผิดกฎหมาย", category: "general", fine: 5000, jail: 30, evidence: [] },
  { id: "case-gen-6", name: "งัดบ้าน (จับได้คนเดียว)", category: "general", fine: 10000, jail: 60, evidence: [] },
  { id: "case-gen-6b", name: "งัดบ้าน", category: "general", fine: 5000, jail: 30, evidence: [] },
  { id: "case-gen-6c", name: "งัดธนาคาร (เล็ก)", category: "general", fine: 10000, jail: 30, evidence: [] },
  { id: "case-gen-7", name: "จอดรถในที่ห้ามจอด", category: "general", fine: 300, jail: 0, evidence: [] },
  { id: "case-gen-8", name: "จอดรถบนทางเท้า", category: "general", fine: 300, jail: 0, evidence: [] },
  { id: "case-gen-9", name: "ชนแล้วหนี (ทุกกรณี)", category: "general", fine: 1000, jail: 60, evidence: [] },
  { id: "case-gen-10", name: "ทะเลาะวิวาท (ประชาชน)", category: "general", fine: 1000, jail: 60, evidence: [] },
  { id: "case-gen-11", name: "ทะเลาะวิวาท (แก๊ง)", category: "general", fine: 1000, jail: 10, evidence: [] },
  { id: "case-gen-12", name: "ทำรถผู้อื่นเกิดความเสียหาย", category: "general", fine: 2000, jail: 10, evidence: [] },
  { id: "case-gen-13", name: "ทำรถผู้อื่นเสียหาย", category: "general", fine: 2000, jail: 10, evidence: [] },
  { id: "case-gen-14", name: "ทำลายหลักฐาน", category: "general", fine: 5000, jail: 30, evidence: [] },
  { id: "case-gen-15", name: "ฝ่าไฟแดง", category: "general", fine: 200, jail: 0, evidence: [] },
  { id: "case-gen-16", name: "พื้นที่สุ่มเสี่ยง", category: "general", fine: 2000, jail: 30, evidence: [] },
  { id: "case-gen-17", name: "ไม่แสดงบัตรประชาชน", category: "general", fine: 300, jail: 5, evidence: [] },
  { id: "case-gen-18", name: "ใส่หน้ากาก", category: "general", fine: 2000, jail: 0, evidence: [] },
  { id: "case-gen-19", name: "แสดงอาวุธในที่สาธารณะ", category: "general", fine: 500, jail: 30, evidence: [] },
  { id: "case-gen-20", name: "ใส่เครื่องแบบเจ้าหน้าที่", category: "general", fine: 10000, jail: 30, evidence: [] },
  { id: "case-gen-21", name: "หมิ่นประมาท (ประชาชน)", category: "general", fine: 2000, jail: 30, evidence: [] },
  { id: "case-gen-22", name: "ขโมยรถผู้เล่นอื่น", category: "general", fine: 2000, jail: 60, evidence: [] },

  // คดีผิดกฎหมาย
  { id: "case-ill-1", name: "Body Bag", category: "illegal", fine: 5000, jail: 0, evidence: [] },
  { id: "case-ill-2", name: "Lockpick", category: "illegal", fine: 5000, jail: 0, evidence: [] },
  { id: "case-ill-3", name: "กัญชงอัดแท่ง", category: "illegal", fine: 700, jail: 30, evidence: [] },
  { id: "case-ill-4", name: "เงินดำ", category: "illegal", fine: 2000, jail: 30, evidence: [] },
  { id: "case-ill-5", name: "ปูน", category: "illegal", fine: 1000, jail: 5, evidence: [] },
  { id: "case-ill-6", name: "ยา 4x100", category: "illegal", fine: 1000, jail: 30, evidence: [] },
  { id: "case-ill-7", name: "ยา Nae Nae/Good Good", category: "illegal", fine: 7500, jail: 30, evidence: [] },
  { id: "case-ill-8", name: "Signal Cut Off", category: "illegal", fine: 5000, jail: 0, evidence: [] },
  { id: "case-ill-9", name: "กัญชงแปรรูป", category: "illegal", fine: 100, jail: 5, evidence: [] },
  { id: "case-ill-10", name: "น้ำมะขามป้อม", category: "illegal", fine: 300, jail: 15, evidence: [] },
  { id: "case-ill-11", name: "ใบกัญชง", category: "illegal", fine: 300, jail: 10, evidence: [] },
  { id: "case-ill-12", name: "ปูนก้อน", category: "illegal", fine: 10000, jail: 50, evidence: [] },
  { id: "case-ill-13", name: "ยา Odd Odd", category: "illegal", fine: 10000, jail: 30, evidence: [] },

  // คดีอาวุธ
  { id: "case-weap-1", name: "อาวุธมีปืน", category: "weapon", fine: 30000, jail: 60, evidence: [] },
  { id: "case-weap-2", name: "อาวุธไม่มีปืน", category: "weapon", fine: 20000, jail: 60, evidence: [] },

  // คดีแดง
  { id: "case-red-1", name: "กักศพ", category: "red", fine: 10000, jail: 60, evidence: [] },
  { id: "case-red-2", name: "ต่อสู้เจ้าหน้าที่", category: "red", fine: 10000, jail: 60, evidence: [] },
  { id: "case-red-3", name: "ทำร้ายร่างกายเจ้าหน้าที่", category: "red", fine: 10000, jail: 60, evidence: [] },
  { id: "case-red-4", name: "บุกรุกสถานที่ราชการ/แหกคุก", category: "red", fine: 20000, jail: 60, evidence: [] },
  { id: "case-red-5", name: "ปล้น", category: "red", fine: 500000, jail: 60, evidence: [] },
  { id: "case-red-6", name: "สมรู้อุ้มไม่ห่อ", category: "red", fine: 5000, jail: 30, evidence: [] },
  { id: "case-red-7", name: "สมรู้อุ้มห่อ", category: "red", fine: 10000, jail: 60, evidence: [] },
  { id: "case-red-8", name: "อุ้มไม่ห่อ", category: "red", fine: 10000, jail: 60, evidence: [] },
  { id: "case-red-9", name: "อุ้มห่อ", category: "red", fine: 20000, jail: 120, evidence: [] },
  { id: "case-red-10", name: "อุ้มห่อหมดเวลาคามือ", category: "red", fine: 150000, jail: 360, evidence: [] },
  { id: "case-red-11", name: "ก่อเหตุบริเวณ สน./รพ.", category: "red", fine: 30000, jail: 180, evidence: [] },
  { id: "case-red-12", name: "ขโมยรถตำรวจ", category: "red", fine: 100000, jail: 60, evidence: [] },
  { id: "case-red-13", name: "เคลื่อนศพเจ้าหน้าที่", category: "red", fine: 100000, jail: 180, evidence: [] },
  { id: "case-red-14", name: "จี้ตำรวจเป็นตัวประกัน", category: "red", fine: 30000, jail: 360, evidence: [] },
  { id: "case-red-15", name: "ดูหมิ่นเจ้าหน้าที่", category: "red", fine: 100000, jail: 180, evidence: [] },
  { id: "case-red-16", name: "ทำร้ายร่างกายเจ้าหน้าที่จนสลบ", category: "red", fine: 50000, jail: 240, evidence: [] },
  { id: "case-red-17", name: "ไม่มาตามหมายเรียก", category: "red", fine: 10000, jail: 120, evidence: [] },
  { id: "case-red-18", name: "สมรู้เอ๋อคามือ", category: "red", fine: 75000, jail: 180, evidence: [] },
  { id: "case-red-19", name: "หลบหนีหลังการจับกุม", category: "red", fine: 20000, jail: 180, evidence: [] }
];

window.DEFAULT_CATEGORIES = [
  { id: "preset", name: "พรีเซ็ตคดี" },
  { id: "general", name: "คดีทั่วไป" },
  { id: "illegal", name: "คดีผิดกฎหมาย" },
  { id: "weapon", name: "คดีอาวุธ" },
  { id: "red", name: "คดีแดง" }
];

window.DEFAULT_PRESETS = [
  {
    id: "preset-1",
    name: "พรีเซ็ต อุ้มห่อ : ขับรถอุ้มห่อ",
    caseIds: ["case-weap-1", "case-red-9"]
  },
  {
    id: "preset-2",
    name: "พรีเซ็ต อุ้มห่อ : นั่งรถคันเดียวกับอุ้มห่อ",
    caseIds: ["case-red-7", "case-weap-1"]
  },
  {
    id: "preset-3",
    name: "พรีเซ็ต อุ้มห่อ : ต่อสู้ช่วยเคสอุ้มห่อ (กี้)",
    caseIds: ["case-gen-1", "case-red-2"]
  },
  {
    id: "preset-4",
    name: "พรีเซ็ต คนโดนห่อ : ขับรถอุ้มห่อ",
    caseIds: ["case-gen-11"]
  }
];

window.DEFAULT_GUIDEBOOK = [
  {
    id: "section-info",
    category: "ข้อมูลที่ต้องรู้",
    items: [
      {
        id: "terms-of-service",
        title: "Terms Of Service",
        subtitle: "ข้อกำหนดและเงื่อนไขการใช้งานเซิร์ฟเวอร์",
        content: `
          <h3>ข้อกำหนดการให้บริการ (Terms Of Service)</h3>
          <p>ยินดีต้อนรับสู่เซิร์ฟเวอร์ KKPD 101 ก่อนการเข้าเล่น ขอให้ผู้เล่นทุกคนทำความเข้าใจและปฏิบัติตามข้อกำหนดต่อไปนี้อย่างเคร่งครัด:</p>
          <ol class="guide-list">
            <li>การเข้าเล่นในเซิร์ฟเวอร์ ถือว่าผู้เล่นยอมรับกฎระเบียบ กติกา และบทลงโทษทั้งหมดของเซิร์ฟเวอร์โดยไม่มีข้อยกเว้น</li>
            <li>ห้ามใช้โปรแกรมช่วยเล่น โปรแกรมโกง บอท หรือ Exploits ทุกประเภท หากตรวจพบจะถูกแบนถาวรและขึ้นแบล็กลิสต์ในเครือทั้งหมด</li>
            <li>ห้ามซื้อขายทรัพย์สินในเกมด้วยเงินจริง (RMT) โดยไม่ได้รับอนุญาตจากทีมงานอย่างเป็นทางการ</li>
            <li>ทีมงานขอสงวนสิทธิ์ในการเปลี่ยนแปลง แก้ไข ปรับปรุงกฎระเบียบตามความเหมาะสมเพื่อความสมดุลของสังคมเมือง</li>
            <li>การตัดสินของทีมงาน ADMIN ถือเป็นที่สิ้นสุดในทุกกรณี</li>
          </ol>
          <div class="guide-callout alert-warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
              <strong>คำเตือน:</strong> การละเมิดข้อกำหนดอาจส่งผลให้ถูกระงับการใช้งานบัญชีหรือแบนเครื่องถาวร (HWID Ban)
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "section-general",
    category: "กฎการเล่นทั่วไป",
    items: [
      {
        id: "basic-knowledge",
        title: "ความรู้พื้นฐาน",
        subtitle: "คำแนะนำในการเล่น",
        content: `
          <h3>คำแนะนำในการเล่น</h3>
          <ol class="guide-list">
            <li>ผู้เล่นจะต้องเล่น แต่งตัวตามบทบาท หรืออาชีพของตัวเอง</li>
            <li>ผู้เล่นจะต้องเล่นโดยอยู่บนพื้นฐานมารยาททางสังคม</li>
            <li>ผู้เล่นจะต้องไม่รบกวนทางเสียง สร้างความรำคาญใดๆ แก่ผู้อื่น</li>
            <li>ผู้เล่นทุกคนจะต้องมีอุปกรณ์ที่ใช้ในการสื่อสารที่พร้อมใช้งานอยู่เสมอ ไมโครโฟน และหูฟัง</li>
            <li>ผู้เล่นทุกคนต้องรู้กฎเซิร์ฟเวอร์ อ้างว่าไม่รู้ไม่ได้</li>
            <li>ผู้เล่นจะต้องยอมรับกฎระเบียบ และยอมรับโทษจากการกระทำที่เป็นการละเมิดกฎ</li>
            <li>บริเวณ Landmark เป็น Safe Zone เว้นแต่จะเป็นคู่อริ หรือเหตุการณ์ต่อเนื่องมาเท่านั้น ถึงจะสามารถ ทำร้าย ปล้น ฆ่าได้</li>
            <li>การตัดสินของ ADMIN ถือเป็นที่สิ้นสุด โดยจะไม่มีการเรียกร้องใดๆ ภายหลัง</li>
            <li>ทุกวันที่ 28 ของทุกเดือน ใครที่มีเงินในตัวติดลบเกิน 500K จะถือว่า Fail Roleplay (หมายเหตุ: ถ้ามีการเคลื่อนไหวในการจ่าย ทีมงานจะพิจารณาเป็นเคสๆ)</li>
            <li>การแจ้งใบ สามารถแจ้งได้ตลอดเวลา ในขณะที่มีสตอรี่อยู่ ในกรณีที่จบสตอรี่แล้ว สามารถแจ้งย้อนหลังได้ 48 ชม. หากเกินจากนั้นไม่สามารถแจ้งได้ (ในกรณีจะแจ้งและอยู่ในช่วงเก็บหลักฐาน ให้มาติดต่อ Admin ไว้ก่อน) <em>หมายเหตุ: ครอบคลุมถึงการแจ้งใบทั่วไปด้วย ไม่ใช่เฉพาะการแจ้งใบในสตอรี่แก๊งเท่านั้น</em></li>
            <li>กรณีที่ Admin ประกาศตามตัว ผู้เล่นจะต้องเข้ามารายงานตัวภายใน 24 ชม. (หากมีเหตุฉุกเฉินที่ไม่สามารถเข้ามาติดต่อ Admin ได้ ให้ทักติดต่อส่วนตัวแจ้ง Admin ที่ประกาศเรียก)</li>
            <li>การแบน หมายถึง การห้ามบุคคลที่โดนแบน เข้าเล่นภายในเซิร์ฟเวอร์ในเครือแบบไม่จำกัดกาล รวมทั้งบัญชีใหม่ที่เป็นผู้เล่นคนเดียวกัน (ครอบคลุมเซิร์ฟเวอร์ในเครือ KKPD 101 ทั้งหมด)</li>
            <li>พื้นที่เรดโซน (กุญแจสีแดง) หรือพื้นที่สีแดงตามที่แสดงบนแผนที่ พื้นที่ดังกล่าว ไม่ถือว่าเป็นเซฟโซน แต่ยังคงอยู่ภายใต้บังคับของกฎหมายเมือง และเจ้าหน้าที่ตำรวจสามารถเข้าปฏิบัติงานหรือบังคับใช้กฎหมายได้ตามปกติ</li>
            <li>ห้ามใช้ตัวละครเริ่มต้น เสื้อขาว หัวโล้น รองเท้าตารางขาวดำ ปรับ 100,000 KKD</li>
            <li>ในกรณีที่มีเรื่องราวสตอรี่ติดตัวอยู่ (ทั้งสองฝ่ายรับรู้หรือมีเหตุการณ์ก่อนหน้า) จะต้องทำการหนีให้พ้นระยะสายตาเป็นเวลา 30 นาที จึงจะสามารถทำการกด ออกจาก Server ได้</li>
          </ol>
          <div class="guide-callout alert-info">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>หมายเหตุสำคัญ:</strong>
              <p>ในกรณีที่เข้าสู่สถานะ Bleed Out ท่านจะต้องรอจนออกมาก่อนถึงจะเริ่มนับเวลาพ้นระยะสายตาเป็นเวลา 30 นาที และหลังจากนั้นถึงจะทำการกด ออกจาก Server ได้ (ในกรณีที่หลุดออกจากเซิร์ฟเวอร์จะต้องแจ้งและกลับเข้ามาทันที มิฉะนั้นจะโดนโทษ ใบแดง และบังคับเข้าตู้ทันที ในการแจ้งเรื่องจะต้องมีหลักฐานชัดเจน)</p>
            </div>
          </div>
        `
      },
      {
        id: "roleplay-rules",
        title: "กฎ RolePlay พื้นฐาน",
        subtitle: "หลักการเล่นสมบทบาทที่ดี",
        content: `
          <h3>กฎ RolePlay พื้นฐาน</h3>
          <p>การเล่นในระบบ RolePlay ต้องคำนึงถึงความเป็นจริงและบทบาทที่ได้รับมอบหมาย:</p>
          <ul class="guide-list">
            <li><strong>Value of Life (รักตัวกลัวตาย):</strong> ต้องเห็นคุณค่าของชีวิตตัวละคร เมื่อถูกอาวุธปืนหรือมีดจ่อ ต้องแสดงท่าทีเกรงกลัวและปฏิบัติตาม ไม่ทำพฤติกรรมฮีโร่เกินจริง</li>
            <li><strong>No Metagaming:</strong> ห้ามนำข้อมูลนอกเกม (Discord, สตรีม, แชท) มาใช้ในการเล่นในเกมเด็ดขาด</li>
            <li><strong>No Powergaming:</strong> ห้ามกระทำการที่ฝืนความเป็นจริงทางกายภาพ หรือบังคับบทบาทผู้อื่นโดยที่อีกฝ่ายไม่มีโอกาสโต้ตอบ</li>
            <li><strong>No New Life Rule (NLR):</strong> เมื่อผู้เล่นเสียชีวิตและจำความไม่ได้ ห้ามกลับไปยังจุดเกิดเหตุหรือกลับไปล้างแค้นจนกว่าสตอรี่จะเริ่มต้นใหม่</li>
          </ul>
        `
      },
      {
        id: "prohibited-actions",
        title: "ห้ามทำเด็ดขาด",
        subtitle: "การกระทำที่มีบทลงโทษขั้นรุนแรง",
        content: `
          <h3>ข้อห้ามเด็ดขาดและบทลงโทษ</h3>
          <ul class="guide-list">
            <li><strong>ห้าม RDM / VDM:</strong> ห้ามฆ่าหรือทำร้ายผู้อื่นโดยไม่มีบทบาทและไม่มีเหตุผลรองรับ และห้ามใช้ยานพาหนะพุ่งชนผู้เล่นอื่นโดยเจตนา</li>
            <li><strong>ห้าม Combat Log:</strong> ห้ามกดออกจากเกมขณะมีสตอรี่ กำลังโดนจับกุม โดนปล้น หรืออยู่ในช่วงเวลาหนีระยะสายตา 30 นาที</li>
            <li><strong>ห้ามใช้คำพูด Toxicity / Racism:</strong> ห้ามเหยียดเพศ เชื้อชาติ ศาสนา หรือด่าทอบุพการีและบุคลิกภายนอกของผู้เล่นจริง</li>
            <li><strong>ห้ามบั๊กอนิเมชั่น:</strong> ห้ามบั๊กสไลด์ ยกเลิกอนิเมชั่น หรือปั๊มยาผิดธรรมชาติ</li>
          </ul>
        `
      },
      {
        id: "activities-rules",
        title: "กิจกรรม",
        subtitle: "กฎและข้อบังคับในการเข้าร่วมกิจกรรมเมือง",
        content: `
          <h3>กฎกิจกรรมของเมือง</h3>
          <p>ข้อกำหนดสำหรับผู้เล่นและแก๊งในการเข้าร่วมกิจกรรมต่างๆ ภายในเมือง:</p>
          <ul class="guide-list">
            <li>ห้ามนำสตอรี่ส่วนตัวเข้ามาขัดขวางหรือก่อกวนกิจกรรมทางการของเมือง</li>
            <li>ในพื้นที่กิจกรรมพิเศษ จะถือเป็นเขตปลอดอาวุธ เว้นแต่จะมีประกาศระบุเป็นอย่างอื่น</li>
            <li>ปฏิบัติตามคำสั่งของทีมงานผู้ดูแลกิจกรรมอย่างเคร่งครัด</li>
          </ul>
        `
      },
      {
        id: "bleedout-rules",
        title: "การอุ้มผู้ Bleed Out",
        subtitle: "ข้อปฏิบัติต่อผู้บาดเจ็บขั้นวิกฤต",
        content: `
          <h3>ระเบียบการอุ้มผู้เล่น Bleed Out</h3>
          <ul class="guide-list">
            <li>เมื่อพบผู้เล่น Bleed Out ต้องให้เกียรติบทบาทหน่วยแพทย์ในการรักษา</li>
            <li>ห้ามอุ้มซ่อน หรืออุ้มทิ้งน้ำเพื่อเจตนาตัดสตอรี่หรือหลบเลี่ยงการถูกแพทย์รักษา</li>
            <li>การอุ้มผู้บาดเจ็บต้องทำด้วยความระมัดระวังและอยู่ในขอบเขตของสตอรี่</li>
          </ul>
        `
      },
      {
        id: "safe-zone",
        title: "Safe Zone",
        subtitle: "พื้นที่ปลอดภัยและข้อห้าม",
        content: `
          <h3>พื้นที่ปลอดภัย (Safe Zone)</h3>
          <p>พื้นที่ที่กำหนดให้เป็น Safe Zone ได้แก่:</p>
          <ul class="guide-list">
            <li>โรงพยาบาล และบริเวณโดยรอบ 50 เมตร</li>
            <li>สถานีตำรวจ และบริเวณรอบที่ทำการรัฐบาล</li>
            <li>จุดเกิด จุดทำบัตรประชาชน และจุดกิจกรรมสำหรับผู้เล่นใหม่</li>
          </ul>
          <div class="guide-callout alert-warning">
            <i class="fa-solid fa-shield"></i>
            <div>
              <strong>ข้อห้ามใน Safe Zone:</strong> ห้ามชักอาวุธ ปล้น ทำร้ายร่างกาย หรือขับรถชนผู้เล่นในเขตพื้นที่ปลอดภัยโดยเด็ดขาด ยกเว้นเป็นเหตุการณ์ต่อเนื่องตามกฎสตอรี่
            </div>
          </div>
        `
      },
      {
        id: "new-player-card",
        title: "บัตร New Player",
        subtitle: "สิทธิประโยชน์และการคุ้มครองผู้เล่นใหม่",
        content: `
          <h3>บัตร New Player (ผู้เล่นใหม่)</h3>
          <p>ผู้เล่นที่มีบัตร New Player จะได้รับความคุ้มครองพิเศษจากระบบ:</p>
          <ul class="guide-list">
            <li>ห้ามผู้เล่นอื่นปล้น ชิงทรัพย์ หรือดึงเข้าสตอรี่รุนแรงแก่ผู้ถือบัตร New Player</li>
            <li>ผู้ถือบัตร New Player จะต้องไม่กระทำการยั่วยุ หรือก่อคดีผิดกฎหมายร้ายแรง หากกระทำจะถือว่าสละสิทธิ์การคุ้มครองทันที</li>
          </ul>
        `
      },
      {
        id: "whats-up-cement",
        title: "What's up / Cement",
        subtitle: "กฎพื้นที่งานและเศรษฐกิจ",
        content: `
          <h3>กฎพื้นที่งาน What's up และ Cement</h3>
          <p>ระเบียบการทำงานและการใช้พื้นที่ร่วมกันในจุดงานพื้นฐานของเมือง:</p>
          <ul class="guide-list">
            <li>ห้ามจอดรถขวางทางเข้าออกจุดรับ-ส่งของงาน</li>
            <li>ห้ามก่อความไม่สงบหรือตั้งแก๊งคุมพื้นที่เก็บส่วยในจุดทำงานสาธารณะ</li>
          </ul>
        `
      },
      {
        id: "gang-mc-rules",
        title: "Gang & MC",
        subtitle: "ระเบียบและข้อบังคับกลุ่มอิทธิพล / แก๊ง / มอเตอร์ไซค์คลับ",
        content: `
          <h3>ระเบียบ Gang และ MC</h3>
          <ul class="guide-list">
            <li>การทำสตอรี่ระหว่างแก๊งต้องมีการแจ้งใบสตอรี่ถูกต้องตามเกณฑ์</li>
            <li>จำนวนสมาชิกในการปะทะสตอรี่ต้องไม่เกินโควต้าที่เมืองกำหนด</li>
            <li>การแต่งกายต้องมีสัญลักษณ์แก๊งหรือเสื้อคลับที่ชัดเจนในการปะทะ</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "section-medical",
    category: "Medical",
    items: [
      {
        id: "hospital-rules",
        title: "กฎของโรงพยาบาล",
        subtitle: "ข้อปฏิบัติเมื่อมาใช้บริการทางการแพทย์",
        content: `
          <h3>กฎของโรงพยาบาล</h3>
          <ul class="guide-list">
            <li>ให้เกียรติและปฏิบัติตามคำแนะนำของแพทย์และพยาบาลอย่างสุภาพ</li>
            <li>ห้ามก่อความไม่สงบ ส่งเสียงดังรบกวน หรือพกพาอาวุธเข้ามาในบริเวณห้องฉุกเฉิน</li>
            <li>ห้ามปล้นหรือทำร้ายบุคลากรทางการแพทย์ขณะปฏิบัติหน้าที่โดยเด็ดขาด</li>
          </ul>
        `
      },
      {
        id: "contact-medical",
        title: "ติดต่อ Medical Center",
        subtitle: "ช่องทางและการแจ้งขอความช่วยเหลือฉุกเฉิน",
        content: `
          <h3>ช่องทางการติดต่อ Medical Center</h3>
          <p>เมื่อเกิดอุบัติเหตุหรือมีผู้ได้รับบาดเจ็บ สามารถแจ้งเหตุได้ทาง:</p>
          <ul class="guide-list">
            <li>กดแจ้งเหตุฉุกเฉินผ่านระบบโทรศัพท์ในเกม (EMS Dispatch)</li>
            <li>แจ้งพิกัดและรายละเอียดอาการของผู้บาดเจ็บให้ชัดเจน เพื่อให้แพทย์เข้าช่วยเหลือได้ทันเวลา</li>
          </ul>
        `
      },
      {
        id: "hospital-zone",
        title: "เขตโรงพยาบาล",
        subtitle: "ขอบเขตพื้นที่ปลอดภัยและการจอดรถ",
        content: `
          <h3>ขอบเขตและระเบียบเขตโรงพยาบาล</h3>
          <ul class="guide-list">
            <li>ห้ามจอดรถขวางช่องทางเข้าออกรถพยาบาลฉุกเฉิน (Ambulance Bay)</li>
            <li>เขตโรงพยาบาลเป็นพื้นที่ Safe Zone 100% ห้ามก่อเหตุใดๆ ทั้งสิ้น</li>
          </ul>
        `
      },
      {
        id: "medical-fee",
        title: "อัตราค่ารักษา",
        subtitle: "ตารางค่าบริการทางการแพทย์และเวชภัณฑ์",
        content: `
          <h3>อัตราค่ารักษาพยาบาล</h3>
          <ul class="guide-list">
            <li>ชุบชีวิตผู้เล่นบาดเจ็บทั่วไป: ค่าบริการตามมาตรฐานเมือง</li>
            <li>การรักษาในห้องฉุกเฉิน / บริการเคลื่อนย้าย: คิดตามระยะทางและประเภทเคส</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "section-police",
    category: "Police / ข้อบังคับตำรวจ KKPD",
    items: [
      {
        id: "police-fines-rules",
        title: "กฎหมายและอัตราโทษ",
        subtitle: "หลักเกณฑ์การตั้งข้อหาและปรับจำคุก",
        content: `
          <h3>หลักเกณฑ์การตั้งข้อหาและอัตราโทษ KKPD 101</h3>
          <p>เจ้าหน้าที่ตำรวจจะยึดหลักเกณฑ์และอัตราค่าปรับ/จำคุกตามที่กำหนดไว้ในระบบคำนวณคดี:</p>
          <ul class="guide-list">
            <li><strong>การรวมคดี:</strong> หากผู้ต้องหากระทำผิดหลายกรรมหลายวาระ จะนับรวมอัตราค่าปรับและเวลาจำคุกตามรายการข้อหาจริง</li>
            <li><strong>สิทธิ์การขอลดหย่อน:</strong> ผู้ต้องหาที่ให้ความร่วมมือ สารภาพ หรือมอบตัว อาจได้รับการพิจารณาลดหย่อนโทษตามดุลยพินิจของร้อยเวรเจ้าของคดี</li>
          </ul>
        `
      },
      {
        id: "black-money-procedure",
        title: "การตรวจค้นและยึดของกลางเงินดำ",
        subtitle: "ระเบียบการคิดค่าปรับและเวลาจำคุกจากเงินดำ",
        content: `
          <h3>ระเบียบการคำนวณคดีเงินดำ</h3>
          <p>การครอบครองเงินดำผิดกฎหมาย มีเกณฑ์การคำนวณดังนี้:</p>
          <ul class="guide-list">
            <li><strong>ค่าปรับ:</strong> ปรับขั้นต่ำ 500 KKD (หากพก 1 - 500 ปรับ 500 KKD, หากเกิน 500 ปรับเท่ากับยอดเงินดำจริง 1:1)</li>
            <li><strong>เวลาจำคุก:</strong>
              <ul>
                <li>1 - 1,999 เงินดำ ➔ จำคุก 5 นาที</li>
                <li>2,000 - 9,999 เงินดำ ➔ จำคุก 30 นาที</li>
                <li>10,000 เงินดำขึ้นไป ➔ เริ่มต้นที่ 40 นาที และ +10 นาทีทุกๆ 10,000 เงินดำ ต่อเนื่องไม่มีเพดานตัน</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        id: "unjail-rules",
        title: "ระเบียบการใช้บัตร UnJail",
        subtitle: "การหักลบเวลาจำคุกด้วยบัตรลดโทษ",
        content: `
          <h3>ระเบียบการใช้บัตร UnJail</h3>
          <ul class="guide-list">
            <li>บัตร UnJail แต่ละประเภทจะลดเวลาจำคุกได้ตามหน้าบัตร (10 นาที, 30 นาที, 60 นาที)</li>
            <li>ระบบจะคำนวณบัตรใบใหญ่ที่สุดก่อน เพื่อให้ผู้ต้องหาใช้จำนวนบัตรน้อยที่สุดและคุ้มค่าที่สุด</li>
            <li>หากผู้ต้องหาระบุจำนวนบัตรที่ตนเองมี ระบบจะคำนวณตามขีดจำกัดจริง และแจ้งเวลาจำคุกที่เหลืออยู่</li>
          </ul>
        `
      }
    ]
  }
];

