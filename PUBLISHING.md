# เผยแพร่ dsh-ui-thai บน npm

## ข้อกำหนด

แพ็กเกจใช้ชื่อ `dsh-ui-thai` บน npm ผู้เผยแพร่ต้องล็อกอินด้วยบัญชีที่มีสิทธิ์ในแพ็กเกจ และใช้เวอร์ชันที่ยังไม่เคยเผยแพร่ ตรวจสถานะ registry จริงทุกครั้งก่อนประกาศรุ่น

GitHub และ npm ใช้บัญชีแยกกัน การล็อกอิน GitHub ไม่ได้ให้สิทธิ์เผยแพร่ npm

## 1. ล็อกอินด้วยบัญชีของคุณ

ติดตั้ง Node.js 24 ขึ้นไป แล้วเปิด Terminal หรือ PowerShell บนเครื่องของคุณ

```sh
npm login --registry=https://registry.npmjs.org
npm whoami --registry=https://registry.npmjs.org
```

ดำเนินการยืนยันผ่านเว็บไซต์ของ npm และเปิดใช้ 2FA ตามข้อกำหนดของ npm อย่าส่งรหัสผ่าน OTP หรือ access token ในแชต หากให้เอเจนต์ทำต่อ ให้แจ้งเพียงว่าล็อกอินสำเร็จแล้ว

## 2. เตรียม checkout

สำหรับเครื่องใหม่

```sh
git clone https://github.com/FILM6912/dsh-ui-thai.git
cd dsh-ui-thai
```

หากมี checkout อยู่แล้ว ให้อัปเดตให้ตรงกับ branch `main` ที่ตรวจสอบก่อนเผยแพร่ อย่าใช้โฟลเดอร์แพ็กเกจชื่อเดิมที่ยังเชื่อมโยงกับโปรไฟล์ DSH โดยไม่ทำตามขั้นตอนย้ายใน [README](<README.md>)

ตรวจชื่อและเวอร์ชันจาก [package.json](<package.json>) และตรวจว่าชื่อ/เวอร์ชันนี้ยังไม่ถูกใช้

```sh
npm view dsh-ui-thai name version --registry=https://registry.npmjs.org
```

E404 อาจหมายถึงแพ็กเกจยังไม่ถูกสร้าง แต่ npm จะตัดสินความพร้อมของชื่อและสิทธิ์จริงตอนเผยแพร่ หากพบแพ็กเกจที่เป็นของผู้อื่น ให้หยุด อย่าพยายามเขียนทับ

## 3. ทดสอบและตรวจไฟล์

```sh
npm run build
npm test
npm run check
npm pack
node tools/verify-package.mjs dsh-ui-thai-1.0.0.tgz
npm publish --dry-run --access public --registry=https://registry.npmjs.org
```

ไม่ต้องติดตั้ง dependency สำหรับการทดสอบนี้ `prepublishOnly` จะตรวจว่าไฟล์ที่สร้างไว้ตรงกับซอร์ส ทดสอบและตรวจ syntax ก่อนเผยแพร่ โดยไม่สร้างทับไฟล์ให้เอง

ตรวจว่า tarball มีไฟล์ client, Host entry, YAML patch, locale, icon และประกาศสัญญาอนุญาตครบ ไม่มีไฟล์ลับหรือข้อมูลจากเครื่องผู้พัฒนา การทำ dry run ไม่ได้ยืนยันสิทธิ์เผยแพร่หรือจองชื่อ

## 4. เผยแพร่

เมื่อยืนยันชื่อ เวอร์ชัน และเนื้อหาที่จะเปิดเผยแล้ว

```sh
npm publish --access public --registry=https://registry.npmjs.org
```

หาก npm ต้องยืนยัน OTP ให้ทำใน Terminal ของคุณโดยตรง ห้ามปิด 2FA เพื่อหลีกเลี่ยงขั้นตอนนี้ เวอร์ชันที่เผยแพร่แล้วเขียนทับไม่ได้ เมื่อเปลี่ยนเนื้อหาหลังเผยแพร่ต้องเพิ่มเวอร์ชันใหม่

## 5. ตรวจผลก่อนประกาศว่าติดตั้งได้

```sh
npm view dsh-ui-thai name version dist.integrity --registry=https://registry.npmjs.org
dsh plugin --profile desktop add dsh-ui-thai
```

ใช้โปรไฟล์ทดสอบที่ไม่มีแพ็กเกจชื่อเดิม หรือถอน `@local/dsh-thai` ก่อน เลือก **Settings → General → Language → ไทย** แล้วตรวจผลจริง รายงานตามตรงหากการติดตั้งต้องเริ่มใหม่หรือมีข้อผิดพลาด

หลังตรวจ registry สำเร็จ จึงประกาศรุ่นและอัปเดต GitHub อย่ารายงานว่าเผยแพร่สำเร็จก่อนแพ็กเกจปรากฏจริง
