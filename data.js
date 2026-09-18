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
          <h3> ตัวอักษรหนา ขนาดใหญ่ </h3>

          <strong> ตัวอักษรหนา ขนาดปกติ </strong>

          <ol class="guide-list">
          <li>TEXT</li>
          <li>TEXT</li>
          <li>TEXT</li>
          <li>TEXT</li>
          <li>TEXT</li>
          </ol>

            <li>ตัวอักษร ขนาดปกติ</li>
          <div class="guide-callout alert-warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
              <strong>คำเตือน:</strong> TEXT! TEXT! TEXT! TEXT! TEXT! TEXT!
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "section-general",
    category: "Gameplay",
    items: [
      {
        id: "basic-knowledge",
        title: "การทำคดีเบื้องต้น",
        subtitle: "คำแนะการทำคดี",
        content: `
          <h3> แนวทางการปฏิบัติงานคดีพิเศษ (งานดำ)</h3>

          <h3> เคสพื้นฐาน (งานดำทั่วไป) </h3>
          <p>เหตุการณ์: มีการยิงสวนเจ้าหน้าที่ (ต้นเคสงานดำ)</p>
          <p>ข้อหาหลัก: ทำร้ายเจ้าหน้าที่ (🔴 แดง) / มีอาวุธ(ปืน)</p>


          <h3> เคสมีพื้นที่ & มีกฎหมาย </h3>

          <li><strong> ขับรถอุ้มห่อ (180 นาที) </strong></li>
          อุ้มห่อ  |  (คดีแดง🔴)  120 นาที
          <p>อาวุธปืน-ไม่มีปืน  |  (คดีอาวุธ🔫)  60 นาที / มีอาวุธ(ปืน)</p>

          <li><strong> นั่งรถคันเดียวกับอุ้มห่อ (120 นาที) </strong></li>
          สมรู้อุ้มห่อ  |  (คดีแดง🔴)  60 นาที
          <p>อาวุธปืน-ไม่มีปืน  |  (คดีอาวุธ🔫)  60 นาที</p>

          <li><strong> ต่อสู้ช่วยเคสอุ้มห่อ (กี้) (120 นาที) </strong></li>
          ขัดขวางเจ้าหน้าที่ (สตอรี่)  |  (คดีทั่วไป⚪️)  60 นาที
          <p>ต่อสู้เจ้าหน้าทื่  |  (คดีแดง🔴)  60 นาที</p>


          <h3> คนโดนห่อคนโดนห่อ </h3>

          <li><strong> คนโดนห่อ </strong></li>
          <p>ทะเลาะวิวาท  |  (คดีทั่วไป⚪️)  10 นาที</p>


          <h3> คดี ห่อพื้นที่ ไร้กฏหมาย </h3>

          <li><strong> กักศพ </strong></li>
          <p>ผู้ต้องหา ต้องกดเรียกเคส  ( หมอเอากลับโรงบาล )   คนอุ้ม หรือ กักศพ</p>

          <li><strong> คนโดนห่อ </strong></li>
          <p>คนโดนห่อ   ชุบตื่นล๊อกมือ กลับมาทำคดีสน.</p>

          <li><strong> ตร.ชนะ ในเขตบ้าน </strong></li>
          <p>เปิดวงแดง 10 วิ (F11)  ไม่ออกวง   ( ยิงล๊อก ทำให้สลบ ) เอามารวม</p>


          <ol class="guide-list">
          </ol>
          
          <div class="guide-callout alert-info">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>หมายเหตุสำคัญ:</strong>
              <p>ในกรณีที่เข้าสู่สถานะ Bleed Out ท่านจะต้องรอจนออกมาก่อนถึงจะเริ่มนับเวลาพ้นระยะสายตาเป็นเวลา 30 นาที และหลังจากนั้นถึงจะทำการกด ออกจาก Server ได้ (ในกรณีที่หลุดออกจากเซิร์ฟเวอร์จะต้องแจ้งและกลับเข้ามาทันที มิฉะนั้นจะโดนโทษ ใบแดง และบังคับเข้าตู้ทันที ในการแจ้งเรื่องจะต้องมีหลักฐานชัดเจน)</p>
            </div>
          </div>
        `
      }
    ]
  }
];

