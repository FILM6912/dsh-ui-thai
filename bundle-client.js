/* Generated unified DSH UI Thai + voice client. See NOTICE and vendor/dsh-voice/LICENSE. */
(() => {
/* Generated Thai dictionary bundle. Codex-derived strings are translated and
 * reformatted from dsh-codex-connect 0.2.0-alpha.15, Copyright 2026 Yan-Zero
 * and Frank Song, Apache-2.0. See NOTICE and licenses/Apache-2.0.txt.
 * Plugin Hub-derived strings: Copyright (c) 2026 dshplugin, MIT.
 * See licenses/DSH-Plugin-Hub-MIT.txt.
 * Other portions are MIT; see LICENSE.
 */
const languageModule = {
  id: 'dsh-ui-thai',
  factory() {
    const dictionaries = {
  "account.notifications": {
    "close": "ปิด"
  },
  "actionCards": {
    "collapseBrief": "แสดงน้อยลง",
    "dismiss": "ไว้ภายหลัง",
    "dismissed": "ปิดแล้ว",
    "expandBrief": "แสดงเพิ่มเติม",
    "replaced": "แทนที่แล้ว",
    "row.error": "ไม่ได้แสดง",
    "row.inspect": "ตรวจสอบการเรียก",
    "row.ok": "เสนอแล้ว",
    "row.preparing": "กำลังเตรียมการ์ด",
    "row.running": "กำลังเสนอ",
    "row.stopped": "ถูกขัดจังหวะ",
    "row.title": "การ์ดการดำเนินการ",
    "transport": "ยืนยันผลไม่ได้ เชื่อมต่อใหม่แล้วตรวจสอบการ์ดก่อนลองอีกครั้ง",
    "unavailable": "การดำเนินการนี้ไม่พร้อมใช้งาน ตรวจสอบปลั๊กอินในหน้าปลั๊กอิน"
  },
  "agent-team": {
    "blocked": "ติดขัดเพราะรอสิ่งที่ต้องทำก่อน",
    "command.done": "เสร็จแล้ว",
    "command.failed": "ล้มเหลว",
    "command.failedReason": "ล้มเหลว: {reason}",
    "command.running": "กำลังทำงาน",
    "command.title": "การทำงานเป็นทีมของเอเจนต์",
    "disable.cancel": "ยกเลิก",
    "disable.close": "ปิด",
    "disable.confirm": "ปิดใช้งาน",
    "disable.description": "การปิดระหว่างการสนทนาจะหยุดใช้เครื่องมืองานร่วมกันและคำแนะนำการประสานงานของทีม",
    "disable.title": "ปิดการทำงานเป็นทีมของเอเจนต์หรือไม่?",
    "disable.warning": "การปิดอาจกระทบการใช้แคชซ้ำ เพิ่มการใช้โทเคนและค่าใช้จ่ายในขั้นต่อไป และส่งผลต่อการทำงานร่วมกันในงานปัจจุบัน",
    "empty": "ยังไม่มีงานร่วมกัน สร้างงานผ่านการสนทนาได้",
    "failure": "ระเบียนงานที่บันทึกไว้ไม่ถูกต้อง: {message}",
    "loading": "กำลังโหลดกระดานงาน…",
    "mode.description": "ประสานงานและติดตามความคืบหน้าระหว่างเอเจนต์ผ่านกระดานงานร่วมกัน เพื่อผลลัพธ์ที่ดีขึ้นในงานซับซ้อน โดยใช้โทเคนมากขึ้นตามไปด้วย",
    "mode.failed": "ยืนยันไม่ได้ว่าบันทึกการตั้งค่าการทำงานเป็นทีมแล้ว ลองอีกครั้ง: {message}",
    "mode.infoLabel": "เกี่ยวกับการทำงานเป็นทีมของเอเจนต์",
    "mode.label": "เปิดการทำงานเป็นทีมของเอเจนต์",
    "owner": "ผู้รับผิดชอบ",
    "progress.active": "กำลังดำเนินการ {count} รายการ",
    "progress.completed": "เสร็จแล้ว {count} รายการ",
    "progress.pending": "รอดำเนินการ {count} รายการ",
    "status.completed": "เสร็จแล้ว",
    "status.in_progress": "กำลังดำเนินการ",
    "status.pending": "รอดำเนินการ",
    "tasks": "งานร่วมกัน",
    "trigger": "กระดานงาน",
    "unavailable": "กระดานงานไม่พร้อมใช้งาน",
    "unowned": "ยังไม่มีผู้รับผิดชอบ"
  },
  "approval": {
    "allow": "อนุญาต",
    "allowAlways": "อนุญาตเสมอ",
    "allowOnce": "อนุญาตครั้งเดียว",
    "detail.aria": "รายละเอียดการอนุมัติ",
    "escalation": "เครื่องมือ {toolName} ขอเรียกใช้ด้วยสิทธิ์ที่สูงขึ้น",
    "reject": "ปฏิเสธ",
    "waiting": "กำลังรอการอนุมัติ"
  },
  "chat": {
    "chat.deepDiving": "กำลังคิดเชิงลึก",
    "chat.deepDivingFor": "กำลังคิดเชิงลึกมาแล้ว {duration} ···",
    "chat.historyStart": "จุดเริ่มต้นของการสนทนา",
    "chat.loadError": "โหลดประวัติไม่สำเร็จ: {message} ({code})",
    "chat.loadOlder": "โหลดรายการก่อนหน้า",
    "chat.loadingHistory": "กำลังโหลดประวัติ…",
    "chat.loadingOlder": "กำลังโหลดรายการก่อนหน้า",
    "chat.processingOlder": "กำลังประมวลผล",
    "chat.retryOlder": "ลองโหลดอีกครั้ง",
    "chat.toBottom": "กลับไปด้านล่างสุด",
    "chat.turnNavigation.jump": "ไปยังรอบที่ {turn}",
    "chat.turnNavigation.jumpLoad": "โหลดและไปยังรอบที่ {turn}",
    "chat.turnNavigation.label": "การนำทางระหว่างรอบ",
    "chat.turnNavigation.turn": "รอบที่ {turn}",
    "clock.md": "{m}/{d}",
    "clock.ymd": "{y}-{m}-{d}",
    "command.done": "เสร็จแล้ว",
    "command.failed": "คำสั่งไม่สำเร็จ",
    "command.running": "กำลังดำเนินการ…",
    "command.title": "คำสั่ง",
    "duration.compactMinutes": "{minutes}น{seconds}วิ",
    "duration.compactSeconds": "{seconds}วิ",
    "duration.hourUnit": "ชม ",
    "duration.milliseconds": "{milliseconds}มิลลิวินาที",
    "duration.minuteUnit": "น ",
    "duration.secondUnit": "วิ",
    "fileOpen.title": "เปิดไฟล์ไม่ได้",
    "fileOpen.unknown": "เปิดไฟล์นี้ไม่ได้",
    "image.close": "ปิดตัวอย่างรูปภาพ",
    "image.dialog": "ตัวอย่างรูปภาพ",
    "image.failed": "ไม่สามารถแสดงตัวอย่างรูปภาพได้",
    "image.loading": "กำลังโหลดรูปภาพ…",
    "image.open": "ดูรูปภาพเต็ม",
    "json.truncated": "… ตัดทอนแล้ว มีทั้งหมด {total} อักขระ",
    "message.branch": "แยกเป็นการสนทนาใหม่",
    "message.branchUnavailable": "ใช้ได้เฉพาะข้อความสุดท้ายของรอบที่เสร็จสิ้นแล้ว",
    "message.compaction": "ย่อบริบทแล้ว",
    "message.compaction.commandTitle": "compact",
    "message.compaction.completed": "ย่อประวัติ {items} รายการแล้ว (~{tokens} โทเคน)",
    "message.compaction.expand": "ดูสรุปการย่อบริบท",
    "message.compaction.running": "กำลังย่อบริบท…",
    "message.compaction.unavailable": "ไม่มีสรุปการย่อบริบท",
    "message.context.catalog.more": "… อีก {count} รายการ",
    "message.context.catalog.replaced": "แค็ตตาล็อกทดแทน",
    "message.context.instructions.added": "เพิ่มแล้ว",
    "message.context.instructions.loaded": "โหลดแล้ว",
    "message.context.instructions.removed": "นำออกแล้ว",
    "message.context.instructions.updated": "อัปเดตแล้ว",
    "message.context.recall.counts": "เก็บไว้ {retained} รายการ · ละไว้ {omitted} รายการ",
    "message.context.recall.truncated": "ตัดทอนแล้ว",
    "message.context.relay.from": "จากเซสชัน {session}",
    "message.context.snapshot.supersedes": "ใช้แทนสแนปช็อตก่อนหน้า",
    "message.contextInjection": "การแทรกบริบท",
    "message.contextRecall": "การเรียกคืนข้อมูลเซสชัน",
    "message.continuation.requested": "ขอให้สร้างคำตอบต่อแล้ว",
    "message.extraBlock": "บล็อกเนื้อหาเพิ่มเติม",
    "message.failure.accountSignInRequired": "เข้าสู่ระบบ DeepSeek และตรวจสอบว่าปลายทางของคำขอรองรับการยืนยันตัวตนด้วยบัญชี",
    "message.failure.accountSignedOut": "หยุดเนื่องจากคุณออกจากระบบ DeepSeek",
    "message.failure.auth": "คีย์ API ไม่ถูกต้อง",
    "message.failure.interrupted": "โพรเซส DSH สิ้นสุดก่อนรอบนี้จะเสร็จสิ้น (เช่น ถูกบังคับหยุด ขัดข้อง หรือหมดเวลาระหว่างปิดระบบ) จึงปิดรอบนี้เมื่อ DSH เริ่มทำงานใหม่ ไม่ทราบผลลัพธ์ของการเรียกใช้เครื่องมือที่ยังไม่เสร็จสิ้น",
    "message.failure.quota": "ใช้โควตาคำขอหมดแล้ว",
    "message.maxTokens": "ถึงขีดจำกัดโทเคนขาออกแล้ว",
    "message.maxTokens.hint": "คำตอบถูกตัด แต่เนื้อหาก่อนหน้ายังคงอยู่ในการสนทนา ส่งข้อความ \"ดำเนินการต่อ\" เพื่อให้โมเดลตอบต่อ",
    "message.referenceSeparator": ", ",
    "message.referenceSummary": "เซสชันที่อ้างอิง · {labels}",
    "message.retry.active": "กำลังส่งคำขอไปยังโมเดลอีกครั้ง",
    "message.retry.cancelled": "ยกเลิกการส่งคำขอไปยังโมเดลซ้ำแล้ว",
    "message.retry.delay": "ระยะเวลาก่อนลองอีกครั้ง: ",
    "message.retry.failure": "สาเหตุที่ไม่สำเร็จ: ",
    "message.retry.scheduled": "กำลังรอส่งคำขอไปยังโมเดลอีกครั้ง",
    "message.retry.started": "ส่งคำขอไปยังโมเดลอีกครั้งแล้ว",
    "message.retry.status": "{label} ({retry}/{maximum}) · {seconds}วิ",
    "message.stepProcess.code": "กำลังรันโค้ด",
    "message.stepProcess.comma": ", ",
    "message.stepProcess.commands": "กำลังเรียกใช้คำสั่ง",
    "message.stepProcess.done.code": "รันโค้ดแล้ว",
    "message.stepProcess.done.commands": "เรียกใช้คำสั่งแล้ว",
    "message.stepProcess.done.context": "แทรกบริบทแล้ว",
    "message.stepProcess.done.edit": "แก้ไขไฟล์แล้ว",
    "message.stepProcess.done.plan": "อัปเดตแผนแล้ว",
    "message.stepProcess.done.questions": "ถามคำถามแล้ว",
    "message.stepProcess.done.read": "อ่านไฟล์แล้ว",
    "message.stepProcess.done.readImage": "อ่านรูปภาพแล้ว",
    "message.stepProcess.done.search": "ค้นหาโค้ดแล้ว",
    "message.stepProcess.done.subagents": "ประสานงานเอเจนต์ย่อยแล้ว",
    "message.stepProcess.done.thinking": "วิเคราะห์เสร็จแล้ว",
    "message.stepProcess.done.tools": "เรียกใช้เครื่องมือแล้ว",
    "message.stepProcess.done.webFetch": "เข้าชมหน้าเว็บแล้ว",
    "message.stepProcess.done.webSearch": "ค้นหาบนเว็บแล้ว",
    "message.stepProcess.done.write": "เขียนไฟล์แล้ว",
    "message.stepProcess.edit": "กำลังแก้ไขไฟล์",
    "message.stepProcess.joinTwo": "{first} และ {second}",
    "message.stepProcess.more": "{title} และอื่น ๆ",
    "message.stepProcess.plan": "กำลังอัปเดตแผน",
    "message.stepProcess.prepare.code": "กำลังเตรียมรันโค้ด",
    "message.stepProcess.prepare.commands": "กำลังเตรียมเรียกใช้คำสั่ง",
    "message.stepProcess.prepare.edit": "กำลังเตรียมแก้ไขไฟล์",
    "message.stepProcess.prepare.plan": "กำลังเตรียมอัปเดตแผน",
    "message.stepProcess.prepare.questions": "กำลังเตรียมคำถาม",
    "message.stepProcess.prepare.read": "กำลังเตรียมอ่านไฟล์",
    "message.stepProcess.prepare.readImage": "กำลังเตรียมอ่านรูปภาพ",
    "message.stepProcess.prepare.search": "กำลังเตรียมค้นหาโค้ด",
    "message.stepProcess.prepare.subagents": "กำลังเตรียมประสานงานเอเจนต์ย่อย",
    "message.stepProcess.prepare.tools": "กำลังเตรียมเรียกใช้เครื่องมือ",
    "message.stepProcess.prepare.webFetch": "กำลังเตรียมเข้าชมหน้าเว็บ",
    "message.stepProcess.prepare.webSearch": "กำลังเตรียมค้นหาบนเว็บ",
    "message.stepProcess.prepare.write": "กำลังเตรียมเขียนไฟล์",
    "message.stepProcess.questions": "กำลังรอให้คุณดำเนินการ",
    "message.stepProcess.read": "กำลังอ่านไฟล์",
    "message.stepProcess.readImage": "กำลังอ่านรูปภาพ",
    "message.stepProcess.search": "กำลังค้นหาโค้ด",
    "message.stepProcess.sharedPrefix": "",
    "message.stepProcess.subagents": "กำลังประสานงานเอเจนต์ย่อย",
    "message.stepProcess.thinking": "กำลังวิเคราะห์คำขอ",
    "message.stepProcess.tools": "กำลังเรียกใช้เครื่องมือ",
    "message.stepProcess.webFetch": "กำลังเข้าชมหน้าเว็บ",
    "message.stepProcess.webSearch": "กำลังค้นหาบนเว็บ",
    "message.stepProcess.write": "กำลังเขียนไฟล์",
    "message.stopped": "หยุดแล้ว",
    "message.systemPrompt": "พรอมป์ต์ระบบ",
    "message.systemPromptUpdate": "การอัปเดตพรอมป์ต์ระบบ",
    "message.taskStopped": "หยุดงานแล้ว",
    "message.think": "คิด",
    "message.tokensPerSecond": "{tps} โทเคน/วิ",
    "message.toolAdded": "เพิ่มเครื่องมือแล้ว: {name}",
    "message.toolRemoved": "นำเครื่องมือออกแล้ว: {name}",
    "message.toolsAdded": "เพิ่มแล้ว: {names}",
    "message.toolsAddedCount": "เพิ่มแล้ว {count} รายการ",
    "message.toolsChanged": "เพิ่มแล้ว {added} รายการ นำออกแล้ว {removed} รายการ",
    "message.toolsRemoved": "นำออกแล้ว: {names}",
    "message.toolsRemovedCount": "นำออกแล้ว {count} รายการ",
    "message.toolsUpdated": "อัปเดตเครื่องมือแล้ว",
    "message.trigger.agent": "ได้รับข้อความงาน",
    "message.trigger.explanation": "การแจ้งเตือนนี้ทำให้เกิดคำตอบนี้",
    "message.trigger.github": "ได้รับเหตุการณ์จาก GitHub",
    "message.trigger.goal": "กำลังดำเนินการตามเป้าหมายต่อ",
    "message.trigger.job": "อัปเดตงานเบื้องหลังแล้ว",
    "message.trigger.plugin": "อัปเดตสถานะปลั๊กอินแล้ว",
    "message.trigger.request": "ได้รับคำขอให้ดำเนินการ",
    "message.trigger.schedule": "งานอัตโนมัติ",
    "message.trigger.subagent": "อัปเดตสถานะงานย่อยแล้ว",
    "message.trigger.subagent.aborted": "เอเจนต์ย่อยหยุดทำงานแล้ว",
    "message.trigger.subagent.completed": "เอเจนต์ย่อยทำงานเสร็จแล้ว",
    "message.trigger.subagent.error": "เอเจนต์ย่อยทำงานไม่สำเร็จ",
    "message.trigger.subagent.maxTokens": "เอเจนต์ย่อยใช้โทเคนครบขีดจำกัดแล้ว",
    "message.trigger.subagent.refusal": "เอเจนต์ย่อยปฏิเสธงาน",
    "message.trigger.subagent.unknown": "เอเจนต์ย่อยสิ้นสุดการทำงานโดยไม่คาดคิด",
    "message.trigger.team": "ได้รับข้อความจากทีม",
    "message.trigger.webhook": "ได้รับเหตุการณ์จากภายนอก",
    "message.turnError": "รอบนี้ไม่สำเร็จ",
    "message.turnProcess.failed": "ไม่สำเร็จ",
    "message.turnProcess.messages.one": "{count} ข้อความ",
    "message.turnProcess.messages.other": "{count} ข้อความ",
    "message.turnProcess.separator": " · ",
    "message.turnProcess.subagents.one": "เอเจนต์ย่อย {count} ตัว",
    "message.turnProcess.subagents.other": "เอเจนต์ย่อย {count} ตัว",
    "message.turnProcess.thoughtForAWhile": "ใช้เวลาคิดสักครู่",
    "message.turnProcess.took": "เสร็จใน ",
    "message.turnProcess.toolCalls.one": "เรียกใช้เครื่องมือ {count} ครั้ง",
    "message.turnProcess.toolCalls.other": "เรียกใช้เครื่องมือ {count} ครั้ง",
    "message.turnProcess.worked": "เสร็จแล้ว",
    "message.turnUsage.cacheHit": "พบในแคช",
    "message.turnUsage.cacheRead": "ข้อมูลขาเข้าจากแคช",
    "message.turnUsage.cacheWrite": "การเขียนแคช",
    "message.turnUsage.consumed": "ใช้ไป {total}",
    "message.turnUsage.count": "{count} โทเคน",
    "message.turnUsage.input": "ข้อมูลขาเข้าที่ไม่ได้อยู่ในแคช",
    "message.turnUsage.model": "ผู้ให้บริการ / โมเดล",
    "message.turnUsage.output": "ข้อมูลขาออก",
    "message.turnUsage.reasoning": " (การให้เหตุผล {tokens} โทเคน)",
    "message.turnUsage.title": "การใช้งานในรอบนี้",
    "message.unknownBlock": "บล็อกเนื้อหาที่ไม่รู้จัก",
    "message.unknownSurface": "เหตุการณ์ส่วนติดต่อที่ไม่รู้จัก: {type}",
    "number.groupSeparator": ",",
    "row.failed": "ไม่สำเร็จ",
    "row.running": "กำลังดำเนินการ",
    "settings.collapse.completion": "เมื่อเสร็จสิ้น",
    "settings.collapse.description": "เลือกว่าจะยุบรายละเอียดการทำงานโดยอัตโนมัติเมื่อใด",
    "settings.collapse.nextInput": "เมื่อมีข้อความถัดไป",
    "settings.collapse.title": "เวลาที่จะยุบรายละเอียดการทำงาน",
    "settings.foldedReplies.all": "ทุกคำตอบ",
    "settings.foldedReplies.description": "เลือกคำตอบของผู้ช่วยที่ยังคงแสดงเมื่อยุบรายละเอียดการทำงาน",
    "settings.foldedReplies.final": "เฉพาะคำตอบสุดท้าย",
    "settings.foldedReplies.title": "คำตอบหลังยุบรายละเอียด",
    "settings.links.description": "เลือกตำแหน่งที่ต้องการเปิดลิงก์เว็บ",
    "settings.links.newTab": "เบราว์เซอร์เริ่มต้น",
    "settings.links.sidebar": "แถบด้านข้างในแอป",
    "settings.links.title": "เปิดลิงก์ในแชตด้วย",
    "settings.performance.compact": "กระชับ",
    "settings.performance.description": "เลือกปริมาณข้อมูลประสิทธิภาพและการใช้งานที่ต้องการแสดง",
    "settings.performance.detailed": "ละเอียด",
    "settings.performance.title": "ประสิทธิภาพและการใช้งาน",
    "settings.transcript.compact": "กระชับ",
    "settings.transcript.description": "เลือกระดับรายละเอียดที่จะแสดงสำหรับการเรียกใช้เครื่องมือ",
    "settings.transcript.detailed": "ละเอียด",
    "settings.transcript.standard": "มาตรฐาน",
    "settings.transcript.title": "รายละเอียดการทำงาน",
    "settings.transcript.verbose": "ละเอียดทั้งหมด",
    "stats.cacheHit": "พบในแคช {percent}%",
    "stats.counts": "{turns} รอบ {steps} ขั้นตอน",
    "stats.dialog.llmTime": "เวลาของ LLM",
    "stats.dialog.speed": "โทเคนต่อวินาที (TPS)",
    "stats.dialog.title": "สถิติเซสชัน",
    "stats.dialog.toolTime": "เวลาของเครื่องมือ",
    "stats.dialog.ttft": "เวลาเฉลี่ยจนถึงโทเคนแรก (TTFT)",
    "stats.dialog.usageTitle": "การใช้โทเคน",
    "view.chat": "แชต"
  },
  "command": {
    "description.compact": "ย่อประวัติการสนทนาเก่า",
    "description.export": "ดาวน์โหลดบันทึกเซสชันนี้เป็นไฟล์ ZIP",
    "description.feedback": "บันทึกข้อเสนอแนะเกี่ยวกับเซสชันนี้",
    "description.goal": "ตั้งหรือดูเป้าหมายของงานที่ใช้เวลานาน",
    "description.permission": "เปลี่ยนชุดสิทธิ์ (โหมดแซนด์บ็อกซ์ + นโยบายอนุมัติ)",
    "description.plan": "เข้าหรือออกจากโหมดวางแผน",
    "label.compact": "ย่อบริบท",
    "label.export": "ส่งออก",
    "label.feedback": "ข้อเสนอแนะ",
    "label.goal": "เป้าหมาย",
    "label.permission": "สิทธิ์",
    "label.plan": "แผน",
    "listbox.aria": "รายการที่ตรงกับ /{command}",
    "notice.attachmentsUnsupported": "/{command} ไม่รับไฟล์แนบ โปรดนำออกก่อน",
    "overlay.aria": "ตัวเลือก /{command}",
    "search.aria": "กรองตัวเลือก",
    "search.placeholder": "ค้นหา…",
    "section.add": "เพิ่ม",
    "section.commands": "คำสั่ง",
    "status.applying": "กำลังนำไปใช้…",
    "status.empty": "ไม่มีตัวเลือก",
    "status.loading": "กำลังโหลดตัวเลือก…",
    "token.compact": "compact",
    "token.export": "export",
    "token.feedback": "feedback",
    "token.goal": "goal",
    "token.permission": "permission",
    "token.plan": "plan"
  },
  "common": {
    "back": "ย้อนกลับ",
    "brand.localBuild": "DSH รุ่นสร้างในเครื่อง",
    "cancel": "ยกเลิก",
    "close": "ปิด",
    "codeBlock.title": "บล็อกโค้ด",
    "codeBlock.unwrap": "ไม่ตัดบรรทัด",
    "codeBlock.wrap": "ตัดบรรทัด",
    "collapse": "ยุบ",
    "copied": "คัดลอกแล้ว",
    "copy": "คัดลอก",
    "copy.compactJson": "คัดลอก JSON แบบย่อ",
    "copy.failed": "คัดลอกไม่สำเร็จ",
    "copy.json": "คัดลอก JSON",
    "copy.optionsHint": "{action}; คลิกขวาเพื่อดูตัวเลือกการคัดลอก",
    "copy.path": "คัดลอกเส้นทางพร็อพเพอร์ตี",
    "copy.prettyJson": "คัดลอก JSON แบบจัดรูปแบบ",
    "copy.value": "คัดลอกค่า",
    "delete": "ลบ",
    "edit": "แก้ไข",
    "expand": "ขยาย",
    "json.label": "JSON",
    "load.failed": "โหลดไม่สำเร็จ",
    "loading": "กำลังโหลด…",
    "markdown.footnotes": "เชิงอรรถ",
    "markdown.truncatedCharacters": "… ตัดทอนที่ {total} อักขระ",
    "more": "เพิ่มเติม",
    "next": "ถัดไป",
    "none": "ไม่มี",
    "number.million": "{value}M",
    "number.thousand": "{value}K",
    "ok": "ตกลง",
    "previous": "ก่อนหน้า",
    "retry": "ลองอีกครั้ง",
    "save": "บันทึก",
    "search": "ค้นหา",
    "skip": "ข้าม",
    "submit": "ส่ง",
    "submitting": "กำลังส่ง…",
    "truncated": "ตัดทอนแล้ว",
    "unknown": "ไม่ทราบ",
    "workspace.defaultName": "พื้นที่ทำงานเริ่มต้น"
  },
  "contextMenu": {
    "back": "ย้อนกลับ",
    "failed": "ดำเนินการไม่สำเร็จ โปรดลองอีกครั้ง"
  },
  "conversation": {
    "ask.answered": "ตอบแล้ว {answered}/{total}",
    "ask.cancelled": "ยกเลิกแล้ว",
    "ask.cancelledDetail": "ชุดคำถามนี้ถูกยกเลิกก่อนส่งคำตอบ",
    "ask.closed": "ปิดแล้ว",
    "ask.closedDetail": "คำถามนี้ปิดแล้ว ผลอยู่ในการสนทนาด้านล่าง",
    "ask.interrupted": "ถูกขัดจังหวะ",
    "ask.interruptedDetail": "ชุดคำถามนี้ถูกขัดจังหวะก่อนส่งคำตอบ",
    "ask.pending": "ดำเนินการต่อแล้ว ยังตอบได้",
    "ask.pendingDetail": "ยังตอบคำถามที่รออยู่เหล่านี้ได้จากช่องเขียนข้อความ",
    "ask.reopen": "ตอบ",
    "ask.review": "ดูคำตอบ",
    "ask.rowTitle": "ถามคำถาม",
    "ask.skipped": "ไม่ได้ตอบ",
    "ask.waiting": "กำลังรอ",
    "attachment.directoryDesktopOnly": "เพิ่มโฟลเดอร์ได้เฉพาะในแอปเดสก์ท็อป ในเบราว์เซอร์ให้เพิ่มทีละไฟล์",
    "attachment.dropBlocked": "ยังเพิ่มไฟล์และภาพไม่ได้ในขณะนี้",
    "attachment.dropDesc": "จำกัดภาพสูงสุด {count} ภาพ ภาพละ {size}",
    "attachment.dropTitle": "ลากไฟล์หรือภาพมาที่นี่เพื่อเพิ่ม",
    "attachment.pathUnavailable": "อ่านเส้นทางโฟลเดอร์ไม่ได้ โปรดลองลากมาอีกครั้ง",
    "attachment.pathUnsupported": "เส้นทางมีอักขระที่การอ้างอิงไม่รองรับ เปลี่ยนชื่อแล้วลองอีกครั้ง",
    "attachment.pending": "ไฟล์แนบรอส่ง",
    "attachment.scrollLeft": "เลื่อนไฟล์แนบไปทางซ้าย",
    "attachment.scrollRight": "เลื่อนไฟล์แนบไปทางขวา",
    "bash.failed": "ล้มเหลว",
    "bash.running": "กำลังทำงาน",
    "bash.stopped": "หยุดแล้ว",
    "command.attachmentsUnsupported": "/{command} ไม่รับไฟล์แนบ โปรดนำออกก่อน",
    "context.aria": "ใช้บริบทแล้ว {percent}",
    "context.messages": "ข้อความ",
    "context.system": "พรอมป์ต์ระบบ",
    "context.tools": "คำจำกัดความเครื่องมือ",
    "context.used": "ของบริบทถูกใช้แล้ว",
    "detail.agent.reply": "คำตอบของเอเจนต์",
    "detail.agents.count": "เอเจนต์ {count} ตัว",
    "detail.days": "{count} วัน",
    "detail.empty": "ไม่มีผลลัพธ์",
    "detail.event.neighbors": "เหตุการณ์ใกล้เคียง",
    "detail.field.agent": "ID เอเจนต์",
    "detail.field.agentDescription": "คำอธิบายงานของเอเจนต์",
    "detail.field.agentName": "ชื่อเอเจนต์",
    "detail.field.agents": "เอเจนต์ที่เริ่มแล้ว",
    "detail.field.availability": "ความพร้อมใช้งาน",
    "detail.field.bestMatch": "ตรงกันมากที่สุด",
    "detail.field.callId": "ID การเรียก",
    "detail.field.content": "เนื้อหา",
    "detail.field.context": "บริบท",
    "detail.field.currentPackage": "แพ็กเกจปัจจุบัน",
    "detail.field.data": "ข้อมูล",
    "detail.field.dependencies": "สิ่งที่ต้องใช้ร่วม",
    "detail.field.diagnostics": "ข้อมูลวินิจฉัย",
    "detail.field.exitCode": "รหัสออก",
    "detail.field.id": "ID",
    "detail.field.inputSchema": "สคีมาอินพุต",
    "detail.field.job": "ID งาน",
    "detail.field.latestRun": "การทำงานล่าสุด",
    "detail.field.message": "ข้อความ",
    "detail.field.messageId": "ID ข้อความ",
    "detail.field.methods": "เมธอด",
    "detail.field.model": "โมเดล",
    "detail.field.nextPackage": "แพ็กเกจถัดไป",
    "detail.field.outputSchema": "สคีมาเอาต์พุต",
    "detail.field.owner": "ผู้รับผิดชอบ",
    "detail.field.packages": "แพ็กเกจ",
    "detail.field.parent": "ต้นทาง",
    "detail.field.pid": "ID กระบวนการ",
    "detail.field.platform": "แพลตฟอร์ม",
    "detail.field.previousStatus": "สถานะก่อนหน้า",
    "detail.field.processGroup": "กลุ่มกระบวนการ",
    "detail.field.props": "พร็อป",
    "detail.field.provider": "ผู้ให้บริการ",
    "detail.field.ready": "พร้อม",
    "detail.field.registrations": "การลงทะเบียน",
    "detail.field.result": "ผลลัพธ์",
    "detail.field.revision": "ฉบับแก้ไข",
    "detail.field.role": "บทบาท",
    "detail.field.root": "ราก",
    "detail.field.seq": "ลำดับเหตุการณ์",
    "detail.field.signal": "สัญญาณ",
    "detail.field.source": "แหล่งที่มา",
    "detail.field.step": "ขั้นตอน",
    "detail.field.surface": "สถานะระเบียน",
    "detail.field.target": "เหตุการณ์เป้าหมาย",
    "detail.field.task": "งาน",
    "detail.field.time": "เวลา",
    "detail.field.turn": "รอบสนทนา",
    "detail.field.type": "ประเภท",
    "detail.field.warnings": "คำเตือน",
    "detail.field.writeScopes": "ขอบเขตการเขียน",
    "detail.goal.active": "กำลังดำเนินการ",
    "detail.goal.blocked": "ติดขัด",
    "detail.goal.complete": "เสร็จแล้ว",
    "detail.goal.disarmed": "รอให้ดำเนินการต่อ",
    "detail.goal.empty": "ไม่มีเป้าหมาย",
    "detail.goal.paused": "พักไว้",
    "detail.goal.reason": "อุปสรรค",
    "detail.goal.rounds": "รอบ",
    "detail.hours": "{count} ชม.",
    "detail.jobs.count": "งานเบื้องหลัง {count} งาน",
    "detail.location": "บรรทัด {line} คอลัมน์ {column}",
    "detail.locations.count": "ตำแหน่ง {count} แห่ง",
    "detail.matches.capped": "ถึงขีดจำกัดผลลัพธ์แล้ว จำกัดการค้นหาให้แคบลงเพื่อดูเพิ่ม",
    "detail.matches.count": "ตรงกัน {count} รายการ",
    "detail.minutes": "{count} นาที",
    "detail.models.title": "โมเดลที่พร้อมใช้งาน",
    "detail.moreInInspect": "ดูได้อีก {count} รายการในตัวตรวจสอบ",
    "detail.no": "ไม่ใช่",
    "detail.none": "ไม่มี",
    "detail.output.lines": "บรรทัด {begin}–{end} จาก {total}",
    "detail.output.truncated": "ผลลัพธ์ถูกตัดทอน",
    "detail.plugins.count": "ปลั๊กอินแบบไดนามิก {count} รายการ",
    "detail.providers.count": "ผู้ให้บริการตรวจสอบ {count} ราย",
    "detail.ralph.limit": "ถึงขีดจำกัดรอบแล้ว",
    "detail.ralph.reportedBlocker": "ผู้ปฏิบัติงานรายงานอุปสรรค",
    "detail.ralph.reportedComplete": "ผู้ปฏิบัติงานรายงานว่าเสร็จแล้ว",
    "detail.receipt.alreadyFinished": "เสร็จไปแล้ว",
    "detail.receipt.cancel": "ขอยกเลิกแล้ว",
    "detail.receipt.closed": "ปิดแล้ว",
    "detail.receipt.closing": "กำลังปิด",
    "detail.receipt.delivered": "ส่งข้อความแล้ว",
    "detail.receipt.interrupt": "ขอขัดจังหวะแล้ว",
    "detail.receipt.signal": "ส่งสัญญาณแล้ว",
    "detail.receipt.started": "เริ่มแล้ว",
    "detail.recordedResult": "ผลลัพธ์ที่บันทึกไว้",
    "detail.report.nextSteps": "งานที่เหลือ",
    "detail.schedule.active": "เปิดใช้งาน",
    "detail.schedule.count": "งานอัตโนมัติ {count} งาน",
    "detail.schedule.cron": "Cron {expression} ({zone})",
    "detail.schedule.custom": "กำหนดเอง",
    "detail.schedule.daily": "ทุกวันเวลา {time} ({zone})",
    "detail.schedule.deleted": "ลบแล้ว",
    "detail.schedule.empty": "ไม่มีงานอัตโนมัติ",
    "detail.schedule.ended": "สิ้นสุดแล้ว",
    "detail.schedule.every": "ทุก {interval}",
    "detail.schedule.frequency": "ทำซ้ำ",
    "detail.schedule.once": "ครั้งเดียว",
    "detail.schedule.overdue": "เลยเวลาแล้ว รอให้เซสชันทำงานต่อ",
    "detail.schedule.paused": "พักไว้",
    "detail.schedule.scheduled": "ตั้งเวลาแล้ว",
    "detail.schedule.weekly": "ทุกสัปดาห์ในวัน {days} เวลา {time} ({zone})",
    "detail.schedule.when": "กำหนดเวลา",
    "detail.seconds": "{count} วินาที",
    "detail.state": "สถานะ",
    "detail.status.accepted": "ยอมรับแล้ว",
    "detail.status.completed": "เสร็จแล้ว",
    "detail.status.corrupt": "เสียหาย",
    "detail.status.deleted": "ลบแล้ว",
    "detail.status.exited": "ออกแล้ว",
    "detail.status.failed": "ล้มเหลว",
    "detail.status.idle": "ว่าง",
    "detail.status.inactive": "ไม่ทำงาน",
    "detail.status.killed": "ยกเลิกแล้ว",
    "detail.status.provisioning": "กำลังจัดเตรียม",
    "detail.status.queued": "เข้าคิวแล้ว",
    "detail.status.ready": "พร้อม",
    "detail.status.running": "กำลังทำงาน",
    "detail.status.unavailable": "ไม่พร้อมใช้งาน",
    "detail.status.unsupported": "ไม่รองรับ",
    "detail.tasks.count": "งานทีม {count} งาน",
    "detail.tasks.nextPage": "มีงานเพิ่มเติม เคอร์เซอร์ถัดไปคือ {cursor}",
    "detail.terminals.count": "เทอร์มินัล {count} รายการ",
    "detail.todo.completed": "เสร็จแล้ว",
    "detail.todo.empty": "รายการที่ต้องทำว่างอยู่",
    "detail.todo.in_progress": "กำลังดำเนินการ",
    "detail.todo.pending": "รอดำเนินการ",
    "detail.trace.ancestors": "เซสชันต้นตระกูล",
    "detail.trace.derived": "เหตุการณ์ที่สืบเนื่อง",
    "detail.trace.descendants": "เซสชันลูกหลาน",
    "detail.trace.replacedBy": "แทนที่โดย",
    "detail.trace.replacementChain": "ลำดับการแทนที่",
    "detail.trace.replaces": "เหตุการณ์ที่ถูกแทนที่",
    "detail.trace.sources": "เหตุการณ์ต้นทาง",
    "detail.wait.ended": "สิ้นสุดการรอ",
    "detail.wait.noProgress": "ไม่มีเอเจนต์ย่อยที่กำลังทำงาน",
    "detail.wait.timeout": "หมดเวลารอ",
    "detail.wait.title": "ผลการรอ",
    "detail.weekday.1": "จ.",
    "detail.weekday.2": "อ.",
    "detail.weekday.3": "พ.",
    "detail.weekday.4": "พฤ.",
    "detail.weekday.5": "ศ.",
    "detail.weekday.6": "ส.",
    "detail.weekday.7": "อา.",
    "detail.weekday.join": ", ",
    "detail.workflow.script": "สคริปต์เวิร์กโฟลว์",
    "detail.yes": "ใช่",
    "details.running": "กำลังทำงาน…",
    "diff.collapseAria": "ยุบผลต่าง",
    "diff.expandAria": "ขยายผลต่างอีก {count} บรรทัด",
    "diff.expandRest": "… อีก {count} บรรทัด",
    "error.sessionInUse": "เซสชันนี้ถูกใช้อยู่ อาจเป็น DSH อีกอินสแตนซ์หนึ่งที่กำลังทำงาน (เช่น dsh web หรือแอปเดสก์ท็อป) ปิดอินสแตนซ์ DSH อื่นแล้วลองอีกครั้ง",
    "file.label": "ไฟล์",
    "file.notStaged": "ไฟล์ยังอัปโหลดไม่เสร็จ เพิ่มไฟล์ใหม่แล้วลองอีกครั้ง",
    "file.pending": "ไฟล์รอส่ง",
    "file.remove": "นำไฟล์ {name} ออก",
    "file.retry": "ลองอัปโหลด {name} อีกครั้ง",
    "file.sessionUnavailable": "เซสชันไม่พร้อมใช้งาน จึงอัปโหลดไฟล์ไม่ได้",
    "file.stillUploading": "ไฟล์ยังอัปโหลดอยู่ โปรดรอให้เสร็จก่อนส่ง",
    "file.uploadFailed": "อัปโหลดไม่สำเร็จ คลิกเพื่อลองอีกครั้ง",
    "file.uploading": "กำลังอัปโหลด…",
    "header.more": "การดำเนินการเพิ่มเติม",
    "hero.chooseWorkspace": "เลือกพื้นที่ทำงาน",
    "hero.headline": "สำรวจสิ่งที่ยังไม่รู้",
    "hero.preview": "ดูตัวอย่าง",
    "hint.goal": "อธิบายเป้าหมายของงานที่ใช้เวลานาน",
    "hint.goal.active": "เป้าหมายกำลังดำเนินการ ใช้ edit / pause / resume / clear",
    "hint.plan": "อธิบายงานเพื่อสร้างแผน",
    "image.closePreview": "ปิดตัวอย่างภาพต้นฉบับ",
    "image.dimensionTooLarge": "แต่ละด้านของภาพต้องไม่เกิน {size}px ลดขนาดแล้วลองอีกครั้ง",
    "image.fileTooLarge": "แต่ละภาพต้องเล็กกว่า {size}",
    "image.label": "ภาพ",
    "image.loadFailed": "โหลดภาพไม่สำเร็จ คลิกเพื่อลองอีกครั้ง",
    "image.loading": "กำลังโหลดภาพ…",
    "image.modelUnsupported": "โมเดลปัจจุบันไม่รองรับภาพ โปรดเปลี่ยนเป็นโมเดลที่รองรับ",
    "image.openOriginal": "ดูต้นฉบับ",
    "image.openOriginalLabel": "{label}, คลิกเพื่อดูต้นฉบับ",
    "image.original": "ภาพต้นฉบับ",
    "image.pending": "ภาพรอส่ง",
    "image.preview": "ตัวอย่างภาพต้นฉบับ",
    "image.remove": "นำภาพ {name} ออก",
    "image.sendFailed": "ส่งภาพไม่สำเร็จ ({reason}) เพิ่มภาพใหม่แล้วลองอีกครั้ง",
    "image.tooMany": "แต่ละข้อความแนบภาพได้สูงสุด {count} ภาพ",
    "image.tooManyPixels": "ความละเอียดภาพสูงเกินไป บีบอัดแล้วลองอีกครั้ง",
    "image.totalTooLarge": "ภาพมีขนาดรวมเกิน {size} นำบางภาพออกแล้วลองอีกครั้ง",
    "image.unsupportedType": "รองรับเฉพาะภาพ PNG, JPG, WebP และ GIF",
    "input.commands": "เพิ่มไฟล์หรือเรียกคำสั่ง",
    "input.continue": "สร้างคำตอบต่อ",
    "input.file": "ไฟล์",
    "input.send": "ส่งข้อความ",
    "input.send.queue": "เข้าคิวข้อความ",
    "input.send.steer": "แทรกข้อความ",
    "input.sending": "กำลังส่งข้อความ",
    "input.stop": "หยุดสร้างคำตอบ",
    "placeholder.default": "ส่งข้อความหรือสั่งงาน, / คำสั่ง, @ ไฟล์หรือเซสชัน",
    "placeholder.hero": "อธิบายสิ่งที่ต้องการสร้าง, / คำสั่ง, @ ไฟล์หรือเซสชัน",
    "placeholder.plan": "อธิบายงานเพื่อสร้างแผน",
    "placeholder.steerQueue": "Cmd/Ctrl+Enter แทรกข้อความทั้งหมดที่เข้าคิวไว้",
    "placeholder.unavailable": "เซสชันไม่พร้อมใช้งาน",
    "placeholder.workspace": "เลือกพื้นที่ทำงานเพื่อเริ่มต้น",
    "queue.cancelEdit": "ยกเลิกการแก้ไข",
    "queue.count": "ข้อความเข้าคิว {n} ข้อความ",
    "queue.edit": "แก้ไขข้อความที่เข้าคิว",
    "queue.edit.unsupported": "มีเนื้อหาที่ไม่ใช่ข้อความ ยังไม่รองรับการแก้ไข",
    "queue.editFailed": "แก้ไขไม่สำเร็จ ข้อความนี้อาจเริ่มส่งแล้ว",
    "queue.file": "ไฟล์ที่เข้าคิว {name}",
    "queue.image": "ภาพในข้อความที่เข้าคิว",
    "queue.remove": "นำข้อความที่เข้าคิวออก",
    "queue.removeFailed": "นำออกไม่สำเร็จ ข้อความนี้อาจเริ่มส่งแล้ว",
    "queue.save": "บันทึกข้อความที่เข้าคิว",
    "queue.sending": "กำลังส่ง…",
    "queue.steer": "แทรกข้อความที่เข้าคิว",
    "queue.steer.unavailable": "แทรกข้อความได้เฉพาะขณะเอเจนต์กำลังทำงาน",
    "queue.steerFailed": "แทรกข้อความไม่สำเร็จ โปรดลองอีกครั้ง",
    "quote.remove": "นำข้อความอ้างอิงออก",
    "read.collapseAria": "ยุบเนื้อหา",
    "read.expandAria": "ขยายอีก {count} บรรทัด",
    "read.expandRest": "… อีก {count} บรรทัด",
    "read.window": "แสดง {shown} จาก {total} บรรทัด",
    "row.commandArguments": "อาร์กิวเมนต์คำสั่ง",
    "row.failed": "ล้มเหลว",
    "row.imageSize": "{width}x{height}px, {bytes} ไบต์",
    "row.imageSizeDownscaled": "{width}x{height}px (ลดขนาดจาก {originalWidth}x{originalHeight}px), {bytes} ไบต์",
    "row.input": "เข้า",
    "row.inspect": "ตรวจสอบ",
    "row.output": "ออก",
    "row.preparing": "กำลังเตรียมเรียกเครื่องมือ",
    "row.running": "กำลังทำงาน",
    "row.stopped": "หยุดแล้ว",
    "search.collapseAria": "ยุบผลลัพธ์",
    "search.expandAria": "ขยายผลลัพธ์อีก {count} บรรทัด",
    "search.expandRest": "… อีก {count} บรรทัด",
    "search.matches": "ตรงกัน {shown} รายการ · {files} ไฟล์",
    "search.matches.truncated": "แสดง {shown} จาก {total} รายการที่ตรงกัน · {files} ไฟล์",
    "search.noResults": "ไม่มีผลลัพธ์",
    "search.paths": "{shown} เส้นทาง",
    "search.paths.truncated": "แสดง {shown} จาก {total} เส้นทาง",
    "session.hierarchy": "ลำดับชั้นเซสชัน",
    "session.moreViews": "มุมมองการสนทนาเพิ่มเติม",
    "settings.enter.description": "การทำงานของ Enter และปุ่มส่งขณะเอเจนต์ทำงานอยู่ โดย Cmd/Ctrl+Enter ใช้อีกวิธีหนึ่ง",
    "settings.enter.queue": "เข้าคิว",
    "settings.enter.steer": "แทรกข้อความ",
    "settings.enter.title": "วิธีส่งขณะกำลังทำงาน",
    "shortcut.complementary": "ใช้การเข้าคิว / แทรกข้อความอีกแบบหนึ่ง",
    "shortcut.mention": "เปิดเมนูอ้างอิง",
    "shortcut.newline": "ขึ้นบรรทัดใหม่",
    "shortcut.slash": "เปิดเมนูคำสั่ง",
    "terminal.collapseAria": "ยุบผลลัพธ์",
    "terminal.commandLine": "บรรทัดคำสั่ง {n}",
    "terminal.done": "เสร็จแล้ว",
    "terminal.exitCode": "รหัสออก {code}",
    "terminal.expandAria": "ขยายผลลัพธ์ที่เหลือ {n} บรรทัด",
    "terminal.expandRest": "… อีก {n} บรรทัด",
    "terminal.failed": "ล้มเหลว",
    "terminal.noExitCode": "ไม่มีรหัสออก",
    "terminal.noOutput": "ไม่มีผลลัพธ์",
    "terminal.running": "กำลังทำงาน",
    "terminal.sendInput": "(ส่งอินพุต)",
    "terminal.session": "เทอร์มินัล {sessionId}",
    "terminal.signal": "สัญญาณ {signal}",
    "todo.completed": "เสร็จแล้ว {done}/{total}",
    "todo.diff.added": "เพิ่ม {count} รายการ",
    "todo.diff.addedItem": "เพิ่มแล้ว",
    "todo.diff.compare": "การเปลี่ยนแปลงจากรายการก่อนหน้า",
    "todo.diff.initial": "รายการเริ่มต้น",
    "todo.diff.movedItem": "เรียงลำดับใหม่",
    "todo.diff.noChanges": "รายการไม่มีการเปลี่ยนแปลง",
    "todo.diff.removed": "นำออก {count} รายการ",
    "todo.diff.removedItem": "นำออกแล้ว",
    "todo.diff.unavailable": "รายการก่อนหน้าไม่พร้อมใช้งาน",
    "todo.diff.unchanged": "ไม่เปลี่ยนแปลง {count} รายการ",
    "todo.diff.updated": "อัปเดต {count} รายการ",
    "todo.diff.updatedItem": "เปลี่ยนสถานะ",
    "todo.progress.active": "กำลังดำเนินการ {active} รายการ",
    "todo.progress.done": "เสร็จแล้ว {done} รายการ",
    "todo.progress.pending": "รอดำเนินการ {pending} รายการ",
    "todo.rowTitle": "อัปเดตรายการที่ต้องทำ",
    "todo.status.completed": "เสร็จแล้ว",
    "todo.status.inProgress": "กำลังดำเนินการ",
    "todo.status.pending": "รอดำเนินการ",
    "todo.title": "รายการที่ต้องทำ",
    "tool.autoReviewNotExecuted": "ไม่ได้เรียกเครื่องมือ เหตุผล: {reason}",
    "tool.autoReviewReasonFallback": "การตรวจทานอัตโนมัติไม่อนุญาตการดำเนินการนี้",
    "tool.autoReviewRejected": "การตรวจทานอัตโนมัติปฏิเสธ",
    "tool.preparing.content": "{kilobytes}KB",
    "tool.title.applyPatch": "แก้ไข",
    "tool.title.bash": "Bash",
    "tool.title.closeTerminal": "ปิดเทอร์มินัล",
    "tool.title.code": "โค้ด",
    "tool.title.createGoal": "สร้างเป้าหมาย",
    "tool.title.createSchedule": "สร้างงานอัตโนมัติ",
    "tool.title.createTeamTask": "สร้างงานทีม",
    "tool.title.deleteSchedule": "ลบงานอัตโนมัติ",
    "tool.title.edit": "แก้ไข",
    "tool.title.editSchedule": "แก้ไขงานอัตโนมัติ",
    "tool.title.findDefinition": "ค้นหาคำจำกัดความ",
    "tool.title.findImplementation": "ค้นหาการนำไปใช้",
    "tool.title.findReferences": "ค้นหาจุดอ้างอิง",
    "tool.title.generic": "เรียกเครื่องมือ",
    "tool.title.getGoal": "ดูเป้าหมาย",
    "tool.title.getTeamTask": "อ่านงานทีม",
    "tool.title.glob": "Glob",
    "tool.title.grep": "Grep",
    "tool.title.hoverSymbol": "ตรวจสอบสัญลักษณ์",
    "tool.title.inspect": "สอบถามสภาพแวดล้อม Cordis",
    "tool.title.inspectPlugins": "ตรวจสอบปลั๊กอิน",
    "tool.title.inspectProviders": "ตรวจสอบผู้ให้บริการ",
    "tool.title.interruptAgent": "ขัดจังหวะเอเจนต์",
    "tool.title.killJob": "ยกเลิกงานเบื้องหลัง",
    "tool.title.listAgents": "แสดงรายการเอเจนต์ย่อย",
    "tool.title.listJobs": "แสดงรายการงานเบื้องหลัง",
    "tool.title.listModels": "แสดงรายการโมเดล",
    "tool.title.listSchedules": "แสดงรายการงานอัตโนมัติ",
    "tool.title.listTeamTasks": "แสดงรายการงานทีม",
    "tool.title.listTerminals": "แสดงรายการเทอร์มินัล",
    "tool.title.lsp": "สอบถามสัญลักษณ์โค้ด",
    "tool.title.officeConvert": "แปลงเอกสาร",
    "tool.title.officeRecalculate": "คำนวณเวิร์กบุ๊กใหม่",
    "tool.title.officeRender": "เรนเดอร์เอกสาร",
    "tool.title.openTerminal": "เปิดเทอร์มินัล",
    "tool.title.pwsh": "Pwsh",
    "tool.title.queryRuntime": "สอบถามรันไทม์",
    "tool.title.ralph": "เรียกใช้ลูป ralph",
    "tool.title.read": "อ่าน",
    "tool.title.readEvent": "อ่านเหตุการณ์",
    "tool.title.readImage": "อ่านภาพ",
    "tool.title.readJob": "อ่านผลลัพธ์งาน",
    "tool.title.readTerminal": "อ่านเทอร์มินัล",
    "tool.title.removeCordis": "นำปลั๊กอิน Cordis ออก",
    "tool.title.runCordis": "เรียกใช้ปลั๊กอิน Cordis",
    "tool.title.search": "ค้นหา",
    "tool.title.searchEvents": "ค้นหาเหตุการณ์",
    "tool.title.searchSessions": "ค้นหาเซสชัน",
    "tool.title.sendMessage": "ส่งข้อความ",
    "tool.title.signalTerminal": "ส่งสัญญาณไปยังเทอร์มินัล",
    "tool.title.spawnTeammate": "สร้างสมาชิกทีม",
    "tool.title.stopCordis": "หยุดปลั๊กอิน Cordis",
    "tool.title.subagent": "สร้างเอเจนต์ย่อย",
    "tool.title.subagentFork": "แยกเอเจนต์ย่อย",
    "tool.title.traceEvent": "ติดตามเหตุการณ์",
    "tool.title.traceSession": "ติดตามเซสชัน",
    "tool.title.updateGoal": "อัปเดตเป้าหมาย",
    "tool.title.updateSchedule": "อัปเดตงานอัตโนมัติ",
    "tool.title.updateTeamTask": "อัปเดตงานทีม",
    "tool.title.viewSchedule": "ดูงานอัตโนมัติ",
    "tool.title.waitAgent": "กำลังรอข้อความ…",
    "tool.title.webFetch": "ดึงข้อมูล",
    "tool.title.webSearch": "ค้นหา",
    "tool.title.workflow": "เรียกใช้เวิร์กโฟลว์",
    "tool.title.write": "เขียน",
    "web.contentTruncated": "เนื้อหาถูกตัดทอน",
    "web.http": "HTTP",
    "web.noResults": "ไม่พบผลลัพธ์",
    "web.sourcesTruncated": "รายการแหล่งข้อมูลถูกตัดทอน"
  },
  "cordis": {
    "a11y.defining": "กำลังกำหนดปลั๊กอิน",
    "a11y.failed": "กำหนดไม่สำเร็จ",
    "a11y.preparing": "กำลังเตรียมเรียกเครื่องมือ Cordis",
    "a11y.stopped": "การกำหนดถูกขัดจังหวะ",
    "action.approve": "อนุญาต",
    "action.approveOnce": "อนุญาตเฉพาะเวอร์ชันนี้",
    "action.approvePlugin": "อนุญาตเวอร์ชันในอนาคตของปลั๊กอินนี้",
    "action.decline": "ปฏิเสธ",
    "action.inspect": "ตรวจสอบ",
    "action.remove": "นำออก",
    "action.retry": "ลองอีกครั้ง",
    "action.rollback": "ย้อนกลับเวอร์ชัน",
    "action.run": "เรียกใช้",
    "action.stop": "หยุด",
    "body.clientCode": "ไคลเอนต์",
    "body.copied": "คัดลอกแล้ว",
    "body.copy": "คัดลอก",
    "body.hostCode": "โฮสต์",
    "body.output": "ผลลัพธ์",
    "body.source": "ซอร์สปลั๊กอิน",
    "panel.approvals.aria": "การอนุมัติ Cordis",
    "panel.current": "ปัจจุบัน: {packageId}",
    "panel.empty": "ยังไม่ได้กำหนดปลั๊กอิน",
    "panel.group.current": "เซสชันนี้",
    "panel.group.others": "เซสชันอื่น",
    "panel.hint": "ปุ่มควบคุมอยู่ในแผง Cordis เหนือการตั้งค่า",
    "panel.loading": "กำลังอ่าน…",
    "panel.next": "ถัดไป: {packageId}",
    "panel.plugins.aria": "ปลั๊กอิน Cordis",
    "panel.readFailed": "อ่านรายการปลั๊กอินไม่สำเร็จ: {message}",
    "panel.runningCount": "กำลังทำงาน {count} รายการ",
    "panel.title": "ปลั๊กอิน Cordis",
    "panel.trigger": "ปลั๊กอิน Cordis",
    "panel.version": "เวอร์ชัน",
    "purpose.missing": "(ไม่ได้ระบุวัตถุประสงค์)",
    "render.failedAbdicated": "เรนเดอร์ใน {slot} ไม่สำเร็จ คืนค่า UI เริ่มต้นแล้ว:",
    "render.failedHeld": "เรนเดอร์ใน {slot} ไม่สำเร็จ:",
    "row.defineTitle": "ลงทะเบียนปลั๊กอิน Cordis",
    "row.removeTitle": "นำปลั๊กอิน Cordis ออก",
    "row.runTitle": "เรียกใช้ปลั๊กอิน Cordis",
    "row.stopTitle": "หยุดปลั๊กอิน Cordis",
    "row.updateTitle": "อัปเดตปลั๊กอิน Cordis",
    "run.removed": "แพ็กเกจนี้ไม่มีอยู่แล้ว",
    "run.superseded": "มีการ์ดการทำงานที่ใหม่กว่าอยู่ด้านล่าง",
    "status.awaitingApproval": "รอการอนุมัติ",
    "status.clientPending": "ไคลเอนต์พร้อมเปิดใช้งาน",
    "status.failed": "เรียกใช้ไม่สำเร็จ",
    "status.idle": "พร้อม",
    "status.removed": "นำออกแล้ว",
    "status.running": "กำลังทำงาน",
    "status.superseded": "มีการทำงานที่ใหม่กว่า"
  },
  "creationRecommendations": {
    "access-denied": "การเชื่อมต่อนี้เปลี่ยนปลั๊กอินไม่ได้",
    "applicationCancelled": "ยกเลิกการเปลี่ยนแปลงล่าสุดแล้ว",
    "applicationFailed": "ใช้การเปลี่ยนแปลงล่าสุดไม่สำเร็จ ตรวจสอบหน้าปลั๊กอิน",
    "cancel": "ยกเลิกการสร้าง",
    "cancelled": "ยกเลิกแล้ว",
    "cancelling": "กำลังยกเลิก…",
    "closing": "ปลั๊กอินสร้างหน้ากำลังหยุด ลองอีกครั้งหลังโหลดใหม่",
    "collapseContent": "ยุบเนื้อหา",
    "create": "สร้าง",
    "creating": "กำลังสร้างในเบื้องหลัง",
    "creationBackground": "คลิกสร้างเพื่อเริ่มทำงานเบื้องหลัง คุณยังสนทนาที่นี่ต่อได้",
    "creationCost": "การสร้างอาจใช้เวลาและโทเคนจำนวนมาก",
    "creationInfo": "วิธีสร้างและการใช้โทเคน",
    "creationMethod": "โหมดผู้สร้างจะสร้างหน้าใหม่ที่คุณนำออกได้ทุกเมื่อ",
    "custom": "เขียนเอง",
    "customHint": "อธิบายตำแหน่งที่ต้องการ",
    "customLabel": "ควรปรากฏที่ไหน?",
    "customPlaceholder": "เช่น รายการในแถบด้านซ้ายที่เปิดปฏิทินเต็มหน้า",
    "dismiss": "ไว้ภายหลัง",
    "dismissed": "ปิดแล้ว",
    "expandContent": "ดูเนื้อหาทั้งหมด",
    "failed": "สร้างไม่สำเร็จ โปรดลองอีกครั้ง",
    "heading": "หน้าที่ปรับให้เหมาะกับคุณ",
    "initialContent": "เริ่มต้นด้วย",
    "installed": "ติดตั้งแล้ว",
    "installing": "กำลังติดตั้ง…",
    "interrupted": "การสร้างถูกขัดจังหวะ โปรดลองอีกครั้ง",
    "invalid-location": "เลือกตำแหน่งหรืออธิบายไม่เกิน 1,000 อักขระ",
    "kept": "เก็บไว้แล้ว",
    "location": "เพิ่มไปยัง",
    "not-live-root": "เปิดการสนทนาต้นฉบับเพื่อใช้การ์ดนี้",
    "overridden": "การตั้งค่าอื่นทับการเปลี่ยนแปลงนี้อยู่",
    "page": "แท็บเซสชัน",
    "pageHint": "เปิดข้างแท็บแชตและเส้นทางการทำงาน",
    "read-only": "เซสชันนี้อ่านได้อย่างเดียว เปลี่ยนชุดสิทธิ์เพื่อสร้างหน้า",
    "removed": "นำออกแล้ว",
    "replaced": "แทนที่แล้ว",
    "restart-required": "บันทึกการเปลี่ยนแปลงแล้ว เริ่ม DSH ใหม่เพื่อใช้การเปลี่ยนแปลง",
    "restore": "กู้คืน",
    "restoring": "กำลังกู้คืน…",
    "retry": "สร้างอีกครั้ง",
    "sidebar-left": "หน้าส่วนกลาง",
    "sidebar-leftHint": "เปิดจากแถบด้านซ้าย",
    "sidebar-right": "แถบด้านขวา",
    "sidebar-rightHint": "ดูข้างการสนทนานี้",
    "source-missing": "ไฟล์ของหน้าไม่มีอยู่แล้ว ขอข้อเสนอใหม่",
    "sourceRetained": "การเลิกทำจะเก็บไฟล์ซอร์สไว้ในโฟลเดอร์ .dsh-created-plugins/ ของพื้นที่ทำงานเดิม",
    "starting": "กำลังเริ่ม…",
    "transport": "ยืนยันผลไม่ได้ เชื่อมต่อใหม่และตรวจสอบการ์ดก่อนลองอีกครั้ง",
    "unavailable": "การดำเนินการนี้ไม่พร้อมใช้งาน ตรวจสอบปลั๊กอินในหน้าปลั๊กอิน",
    "unconfirmed": "ยังยืนยันผลไม่ได้ ลองอีกครั้งเพื่อตรวจสอบ",
    "undo": "เลิกทำ",
    "unknown": "คำแนะนำนี้ไม่พร้อมใช้งานแล้ว"
  },
  "deliverables": {
    "changes.added": "+{count}",
    "changes.all": "ทั้ง {count} ไฟล์",
    "changes.binary": "ไบนารี",
    "changes.collapse": "ยุบ",
    "changes.collapseAria": "ยุบไฟล์ที่เปลี่ยนแปลง",
    "changes.deleted": "-{count}",
    "changes.expandAria": "แสดงไฟล์ที่เปลี่ยนแปลงทั้ง {count} ไฟล์",
    "changes.openReview": "ตรวจทานการเปลี่ยนแปลงของรอบนี้ในแถบด้านข้าง",
    "changes.oversized": "ใหญ่เกินไป",
    "changes.singleTitle": "แก้ไข {name}",
    "changes.title": "แก้ไข {count} ไฟล์",
    "changes.viewDiff": "ดูการเปลี่ยนแปลงใน {name}",
    "diff.binary": "ไฟล์ไบนารี แสดงการเปลี่ยนแปลงไม่ได้",
    "diff.coarse": "การเปรียบเทียบบรรทัดหมดเวลา แสดงเป็นการแทนที่ทั้งไฟล์",
    "diff.created": "สร้างในรอบนี้",
    "diff.deleted": "ลบในรอบนี้",
    "diff.error": "อ่านการเปลี่ยนแปลงไม่ได้",
    "diff.loading": "กำลังอ่านการเปลี่ยนแปลง…",
    "diff.missing": "เนื้อหาการเปลี่ยนแปลงของรอบนี้ไม่พร้อมใช้งานแล้ว",
    "diff.oversized": "ไฟล์ใหญ่เกินไป แสดงการเปลี่ยนแปลงไม่ได้",
    "diff.truncated": "แสดง {count} บรรทัดแรก",
    "diff.unchanged": "ทั้งสองด้านมีบรรทัดเหมือนกัน",
    "presented.all": "ทั้ง {count} ไฟล์",
    "presented.collapse": "ยุบ",
    "presented.collapseAria": "ยุบไฟล์ที่ส่งมอบ",
    "presented.directoryError": "เปิดโฟลเดอร์ที่เก็บไฟล์ไม่ได้ โปรดลองอีกครั้ง",
    "presented.directoryOpening": "กำลังเปิดโฟลเดอร์ที่เก็บไฟล์…",
    "presented.error": "เปิดไม่ได้ คลิกเพื่อลองอีกครั้ง",
    "presented.expandAria": "แสดงไฟล์ที่ส่งมอบทั้ง {count} ไฟล์",
    "presented.file": "ไฟล์",
    "presented.hostError": "อ่านข้อมูลเดสก์ท็อปของโฮสต์ไม่ได้",
    "presented.nativeUnavailable": "ไฟล์นี้ไม่มีเส้นทางโฮสต์ที่ใช้งานได้ ดูตัวอย่างในแถบด้านข้างได้",
    "presented.opening": "กำลังเปิด…",
    "presented.preview": "ดูตัวอย่างในแถบด้านข้าง",
    "presented.previewButton": "เปิด {name} ในแถบด้านข้าง",
    "presented.previewCard": "ดูตัวอย่าง {name} ในแถบด้านข้าง",
    "presented.retry": "ลองอีกครั้ง",
    "presented.revealError": "แสดงในตัวจัดการไฟล์ไม่ได้ โปรดลองอีกครั้ง",
    "presented.revealing": "กำลังแสดงในตัวจัดการไฟล์…",
    "presented.unavailable": "โฮสต์นี้ไม่มีเดสก์ท็อปสำหรับเปิดไฟล์หรือโฟลเดอร์ด้วยแอปภายนอก แต่ยังดูตัวอย่างในแถบด้านข้างได้",
    "review.nowrap": "ปิดการตัดบรรทัด",
    "review.openFile": "เปิดทั้งไฟล์ในแถบด้านข้าง",
    "review.openFileAria": "เปิด {name} ในแถบด้านข้าง",
    "review.selectFile": "เลือกไฟล์ที่จะตรวจทาน",
    "review.split": "เปลี่ยนเป็นมุมมองแยก",
    "review.splitAria": "มุมมองแยก",
    "review.title": "ตรวจทาน · รอบ {turn}",
    "review.unified": "เปลี่ยนเป็นมุมมองรวม",
    "review.wrap": "เปิดการตัดบรรทัด",
    "review.wrapAria": "การตัดบรรทัด",
    "row.error": "ส่งมอบไม่สำเร็จ",
    "row.inspect": "ตรวจสอบการเรียก",
    "row.ok": "ส่งมอบแล้ว",
    "row.preparing": "กำลังเตรียมไฟล์ส่งมอบ",
    "row.running": "กำลังส่งมอบ",
    "row.stopped": "ถูกขัดจังหวะ",
    "row.title": "ส่งมอบไฟล์"
  },
  "directory-browser": {
    "browser.cancel": "ยกเลิก",
    "browser.create": "สร้าง",
    "browser.createIn": "โฟลเดอร์ใหม่ใน \"{name}\"",
    "browser.editPath": "แก้ไขพาธ",
    "browser.folderName": "ชื่อโฟลเดอร์",
    "browser.home": "โฟลเดอร์หลัก",
    "browser.loading": "กำลังโหลด…",
    "browser.newFolder": "โฟลเดอร์ใหม่",
    "browser.open": "เปิด",
    "browser.showHidden": "แสดงไฟล์ที่ซ่อน",
    "browser.title": "เลือกไดเรกทอรีพื้นที่ทำงาน",
    "browser.truncated": "มีโฟลเดอร์มากเกินกว่าจะแสดงทั้งหมด จึงแสดงเฉพาะส่วนแรก",
    "browser.untitledFolder": "โฟลเดอร์ไม่มีชื่อ"
  },
  "documentHtml": {
    "failed": "แสดงตัวอย่างเอกสาร HTML นี้ไม่ได้",
    "frame": "ตัวอย่างเอกสาร HTML",
    "loading": "กำลังแสดงเอกสาร...",
    "title": "HTML"
  },
  "documentMarkdown": {
    "code.copied": "คัดลอกแล้ว",
    "code.copy": "คัดลอก",
    "footnotes": "เชิงอรรถ",
    "viewer.label": "Markdown"
  },
  "dsh-plugin": {
    "aboutDesc": "รู้จัก DSH Plugin Hub เรียกดูปลั๊กอินบนเว็บไซต์ หรือรายงานปัญหาบน GitHub",
    "aboutEmpty": "ยังไม่ได้เผยแพร่เนื้อหา โปรดติดตาม",
    "aboutTitle": "ติดตามเรา",
    "aboutUpdated": "อัปเดตเมื่อ",
    "actionInstall": "ติดตั้ง",
    "actionUninstall": "ถอนการติดตั้ง",
    "actionUpdate": "อัปเดต",
    "ad": "DSH Plugin Hub: รวม {total} ปลั๊กอิน ตรวจสอบโดยผู้ดูแลแล้ว {verified} รายการ อัปเดตทุกวัน",
    "adBadge": "แนะนำ",
    "all": "ทั้งหมด",
    "author": "ผู้พัฒนา",
    "browseAll": "ดูปลั๊กอินทั้งหมด {n} รายการ",
    "bundleDeselectedHint": "หมายเหตุ: ตลาดปลั๊กอินถูกยกเลิกการเลือกในรายการบันเดิลของโปรไฟล์นี้ จึงจะไม่ปรากฏหลังเริ่มแอปหลักใหม่ โปรดเลือก dsh-plugin อีกครั้งที่ ตั้งค่า → ปลั๊กอิน",
    "cancel": "ยกเลิก",
    "cancelTask": "ยกเลิกงาน",
    "cancelUninstall": "ยกเลิกการถอนการติดตั้ง",
    "cancelling": "กำลังยกเลิก…",
    "catalogLatest": "ล่าสุดในรายการ",
    "category.agent": "ทักษะและเอเจนต์",
    "category.dev": "การพัฒนาและการดูแลระบบ",
    "category.fun": "ความบันเทิง",
    "category.integration": "การผสานและการเชื่อมต่อ",
    "category.interface": "หน้าจอและประสบการณ์ใช้งาน",
    "category.knowledge": "ข้อมูลและความรู้",
    "category.memory": "ความจำและบริบท",
    "category.model": "โมเดลและการให้เหตุผล",
    "category.session": "เซสชันและข้อความ",
    "category.tools": "เครื่องมือและความสามารถ",
    "category.workflow": "เวิร์กโฟลว์และระบบอัตโนมัติ",
    "categoryShort.agent": "เอเจนต์",
    "categoryShort.dev": "การพัฒนา",
    "categoryShort.fun": "บันเทิง",
    "categoryShort.integration": "การเชื่อมต่อ",
    "categoryShort.interface": "หน้าจอ",
    "categoryShort.knowledge": "ความรู้",
    "categoryShort.memory": "ความจำ",
    "categoryShort.model": "โมเดล",
    "categoryShort.session": "เซสชัน",
    "categoryShort.tools": "เครื่องมือ",
    "categoryShort.workflow": "เวิร์กโฟลว์",
    "channelDisabledHint": "ช่องทางติดตั้งนี้ถูกปิดไว้ เปิดได้ที่ ตั้งค่า → ความปลอดภัยและความเชื่อถือ",
    "cliOnlyHint": "ต้องติดตั้งปลั๊กอินนี้ในเทอร์มินัล dsh เพราะหน้าเว็บรันขั้นตอนบิลด์หรือประกอบไฟล์ที่จำเป็นไม่ได้ คัดลอกคำสั่งด้านบนไปรันในเทอร์มินัล",
    "close": "ปิด",
    "confirmCancel": "ยกเลิก",
    "confirmCommand": "คำสั่ง",
    "confirmDesc": "ก่อนติดตั้ง โปรดอ่านซอร์สโค้ดในที่เก็บโค้ดของปลั๊กอินอย่างรอบคอบ และตรวจว่าคุณเชื่อถือได้",
    "confirmPlugin": "ปลั๊กอิน",
    "confirmSource": "แหล่งที่มา",
    "confirmTitle": "ยืนยันการติดตั้ง",
    "confirmUpdateTitle": "ยืนยันการอัปเดต",
    "copyCmdLabel": "คัดลอก",
    "copyInstallCommand": "คัดลอกคำสั่งติดตั้ง",
    "copyPath": "คัดลอกพาธ",
    "copyUninstallCommand": "คัดลอกคำสั่งถอนการติดตั้ง",
    "customLabel": "ติดตั้งเอง",
    "customViewDesc": "ติดตั้งแพ็กเกจ npm ที่อยู่นอกรายการด้วยตนเอง เมื่อติดตั้งเสร็จจะปรากฏใน “ติดตั้งแล้ว” พร้อมป้าย “ติดตั้งเอง”",
    "dataFrom": "ข้อมูลจาก api.dsh-plugin.org · คัดสรรทุกวัน",
    "daysAgo": "อัปเดต {days} วันก่อน",
    "detail": "เปิดรายละเอียด",
    "detailCatalog": "ดูรายละเอียด",
    "detailCategory": "หมวดหมู่",
    "detailStats": "สถิติที่เก็บโค้ด",
    "detailTitle": "รายละเอียดปลั๊กอิน",
    "diagCatalog": "เว็บไซต์รายการปลั๊กอิน",
    "diagCatalogTarget": "ตลาดปลั๊กอิน",
    "diagChecking": "กำลังตรวจสอบ…",
    "diagFailRevocation": "การตรวจใบรับรองถูกบล็อก",
    "diagFailRevocationHint": "curl ของระบบดึงข้อมูลเพิกถอนใบรับรองไม่ได้ (CRL/OCSP ที่ Windows Schannel ต้องใช้) จึงยุติการเชื่อมต่อ TLS ไม่ได้หมายความว่าเครือข่ายล่ม และ npm/git อาจยังใช้งานได้ curl 7.70+ ตรวจแบบพยายามเท่าที่ทำได้ หรือเปลี่ยนไปใช้เครือข่ายที่เข้าถึงบริการตรวจเพิกถอนใบรับรองได้",
    "diagGithub": "GitHub",
    "diagHeadHint": "{n} ช่องทาง คลิกแต่ละแถวเพื่อตรวจเฉพาะช่องทางนั้นอีกครั้ง",
    "diagIdle": "ยังไม่ตรวจสอบ",
    "diagNpm": "npm registry",
    "diagNpmUnset": "ไม่ได้กำหนด (ใช้การตั้งค่า npm ในเครื่อง)",
    "diagOk": "ปกติ",
    "diagProxy": "HTTP พร็อกซี",
    "diagRecheck": "คลิกเพื่อตรวจช่องทางนี้อีกครั้ง",
    "diagRunAll": "เริ่มตรวจสอบ",
    "diagSummaryFail": "บางช่องทางเชื่อมต่อไม่ได้ คลิกแถวนั้นเพื่อตรวจอีกครั้ง",
    "diagSummaryOk": "เชื่อมต่อได้ทุกช่องทาง",
    "diagSummaryRunning": "กำลังตรวจสอบช่องทาง…",
    "done": "เสร็จสิ้น",
    "doneBtn": "เสร็จสิ้น",
    "empty": "ยังไม่มีปลั๊กอินในหมวดนี้",
    "errCopied": "คัดลอกข้อผิดพลาดแล้ว",
    "errorClose": "รับทราบ",
    "errorCopy": "คัดลอกข้อผิดพลาด",
    "errorPlugin": "ปลั๊กอิน",
    "errorTitle": "ดำเนินการไม่สำเร็จ",
    "errorTitleInstall": "ติดตั้งไม่สำเร็จ",
    "errorTitleUninstall": "ถอนการติดตั้งไม่สำเร็จ",
    "errorTitleUpdate": "อัปเดตไม่สำเร็จ",
    "exampleHint": "โปรเจกต์ตัวอย่างที่มากับ DeepSeek Harness ไม่ใช่ปลั๊กอิน dsh จากตลาด แอปหลักไม่โหลดรายการนี้และไม่ต้องเริ่มใหม่",
    "exampleLabel": "โปรเจกต์ตัวอย่างที่มากับ DeepSeek Harness",
    "failAccessDeniedHint": "Windows ปฏิเสธการเขียนไฟล์ของ pnpm ในโปรไฟล์ (os error 5, “Access is denied”; ใน Node คือ EPERM / EACCES) อาจมีโปรเซสอื่นใช้ไฟล์ ไฟล์เป็นแบบอ่านอย่างเดียว สิทธิ์โฟลเดอร์จำกัด หรือโปรแกรมป้องกันไวรัสบล็อก เป็นปัญหาระบบไฟล์ในเครื่องเช่นเดียวกับไฟล์ถูกล็อก (os error 32) จึงติดตั้งปลั๊กอินใดในโฟลเดอร์นี้ไม่ได้ ไม่ใช่ปัญหาของปลั๊กอิน ออกจาก DeepSeek Harness ให้หมด บน Windows ตรวจตัวจัดการงานว่าโปรเซสจบแล้ว หากจำเป็นให้ปิดการป้องกันไวรัสแบบเรียลไทม์เพียงชั่วคราว แล้วลองใหม่ หากยังล้มเหลว ให้ตรวจว่าโฟลเดอร์โปรไฟล์หรือไฟล์เป็นแบบอ่านอย่างเดียวหรือไม่ และรันด้วยสิทธิ์ผู้ดูแลระบบ",
    "failBuildToolchainHint": "ปลั๊กอินพึ่งพาโมดูลเนทีฟที่ต้องคอมไพล์ในเครื่อง แต่ไม่มีชุดเครื่องมือบิลด์ที่ใช้ได้ โปรดติดตั้งแล้วลองใหม่: Windows ใช้ Visual Studio Build Tools พร้อม “Desktop development with C++”; macOS รัน xcode-select --install; Linux ติดตั้ง build-essential, python3 และ make หากยังล้มเหลวหลังติดตั้งเครื่องมือแล้ว ให้แจ้งผู้พัฒนาและขอแพ็กเกจที่บิลด์ไว้แล้ว",
    "failCopy": "คัดลอกบันทึกทั้งหมด",
    "failDesktopCliFallbackHint": "ตัวติดตั้งหาสคริปต์เริ่มต้น CLI ที่มากับแอปเดสก์ท็อปไม่พบ จึงใช้ dsh จากบรรทัดคำสั่งแทนแล้วถูกปฏิเสธ เป็นข้อผิดพลาดของศูนย์ปลั๊กอิน ไม่ใช่สภาพแวดล้อมของคุณ ใช้ปุ่มด้านล่างส่งบันทึกทั้งหมดให้เราแก้การตรวจหาพาธ",
    "failDshMissingHint": "ไม่พบคำสั่ง dsh ใน PATH จึงรันตัวติดตั้งไม่ได้ โปรดตรวจว่า DeepSeek Harness ติดตั้งถูกต้องและเพิ่ม dsh ใน PATH แล้ว หรือติดตั้งใหม่ จากนั้นลองอีกครั้ง ไม่ใช่ปัญหาของปลั๊กอิน",
    "failDshTooOldHint": "ปลั๊กอิน “{pkg}” ต้องการ DSH {floor} ขึ้นไป แต่แอปหลักนี้ใช้ {current} จึงติดตั้งไม่ได้หรือโหลดได้ไม่ถูกต้อง ไม่ใช่ปัญหาของปลั๊กอินหรือการวินิจฉัยผิดของตลาด โปรดอัปเกรด DeepSeek Harness เป็น {floor} ขึ้นไป แล้วลองจากศูนย์ปลั๊กอินอีกครั้ง หากยังล้มเหลวหลังอัปเกรด ให้ส่งข้อผิดพลาดใหม่ให้เรา",
    "failFileLockedHint": "pnpm แทนที่ไฟล์ในโปรไฟล์ไม่ได้ เพราะโปรแกรมอื่นใช้งานอยู่ (Windows: os error 32, “the process cannot access the file because it is being used by another process”) มักเป็น DeepSeek Harness หรือการสแกนไวรัสแบบเรียลไทม์ ไม่ใช่ปัญหาของปลั๊กอิน ให้ออกจาก DeepSeek Harness ให้หมด บน Windows ตรวจในตัวจัดการงานว่าโปรเซสจบแล้ว หากจำเป็นต้องปิดการป้องกันไวรัสแบบเรียลไทม์ ให้ปิดเพียงชั่วคราว แล้วลองใหม่",
    "failFsUnavailableHint": "pnpm เขียนไฟล์ลงดิสก์ในเครื่องไม่ได้ ปลั๊กอินใดที่ติดตั้งในโฟลเดอร์เดียวกันก็จะล้มเหลว ไม่ใช่ปัญหาของปลั๊กอิน ตรวจตามรหัส: ① พื้นที่เต็ม (ENOSPC / no space left on device, Windows: os error 112) ให้เพิ่มพื้นที่ว่างในไดรฟ์ที่เก็บโปรไฟล์แล้วลองใหม่ ② ดิสก์อ่านอย่างเดียวหรือป้องกันการเขียน (EROFS / read-only file system, Windows: os error 19) ตรวจว่าไดรฟ์เขียนได้ รวมถึงดิสก์ภายนอก USB และพาร์ทิชันที่เมานต์แบบอ่านอย่างเดียว หากจำเป็นให้ย้ายโฟลเดอร์ปลั๊กอินไปตำแหน่งที่เขียนได้ในไดรฟ์ระบบ ③ ใช้แฮนเดิลไฟล์จนหมด (EMFILE / ENFILE / too many open files) ปิดโปรแกรมที่เปิดไฟล์จำนวนมาก แล้วเริ่ม DeepSeek Harness ใหม่ก่อนลองอีกครั้ง",
    "failGitMissingHint": "ไม่พบคำสั่ง git (ยังไม่ได้ติดตั้ง Git หรือไม่มีใน PATH) จึงติดตั้งปลั๊กอินจาก GitHub ไม่ได้ โปรดติดตั้ง Git เช่นจาก git-scm.com/downloads หรือเพิ่ม git ใน PATH แล้วเริ่ม DSH ใหม่ก่อนลองอีกครั้ง ไม่ใช่ปัญหาของปลั๊กอิน",
    "failHostCliSpawnHint": "DSH เริ่มตัวเองเพื่อทำงานนี้ไม่ได้ (ระบบแจ้งว่าไม่พบไฟล์ปฏิบัติการ) อาจย้ายโฟลเดอร์ติดตั้ง DSH อยู่ระหว่างอัปเดต หรือยังไม่มีโฟลเดอร์โปรไฟล์ ลองเริ่ม DSH ใหม่ หากยังเกิดซ้ำ ให้ติดตั้ง DSH ใหม่ ไม่ใช่ปัญหาของปลั๊กอิน ปลั๊กอินอื่นก็จะล้มเหลวเช่นกัน",
    "failHostIncompatibleHint": "① ขอให้ผู้พัฒนาเพิ่มเวอร์ชัน dsh ที่รองรับแล้วเผยแพร่รุ่นใหม่ (ปุ่มด้านล่าง)\n② อนุญาตข้อยกเว้นสำหรับเวอร์ชันที่ระบุเท่านั้นในตัวจัดการปลั๊กอินของแอปเดสก์ท็อป (แอปหลักจะแจ้งความเสี่ยงที่แอปอาจล่มหรือข้อมูลสูญหาย)",
    "failHostIncompatibleKind": "ปลั๊กอินไม่รองรับเวอร์ชัน DSH ที่ใช้อยู่",
    "failHostIncompatibleReason": "DSH ปัจจุบัน ({version}) ไม่อยู่ในรายการเวอร์ชันที่ปลั๊กอินรองรับ แอปหลักจึงปฏิเสธก่อนติดตั้ง และยังไม่ได้ติดตั้งอะไร",
    "failHubIssueBig": "แจ้งศูนย์ปลั๊กอินให้ตรวจสอบ",
    "failHubIssueHint": "ระบบจัดประเภทปัญหานี้ว่าเกิดจากสภาพแวดล้อมหรือศูนย์ปลั๊กอิน ไม่ใช่ผู้พัฒนาปลั๊กอิน เปิดรายงานปัญหาในที่เก็บโค้ดของศูนย์ปลั๊กอิน พร้อมบันทึกข้อผิดพลาดที่กรอกไว้ให้",
    "failHubStateHint": "รายการปลั๊กอินเก่าหรือไม่ตรงกับสถานะจริง เป้าหมายที่จะ{action}อาจมีอยู่แล้ว (ใช้อัปเดตหากต้องการอัปเกรด) ถูกนำออกจากรายการที่ติดตั้งแล้ว หรืออยู่ในคิวแล้ว ไม่ใช่ปัญหาของปลั๊กอิน โปรดรีเฟรชหน้าแล้วลองอีกครั้ง",
    "failIgnoredBuild": "ปลั๊กอินหรือแพ็กเกจที่พึ่งพาต้องรันสคริปต์บิลด์ระหว่างติดตั้ง แต่ pnpm บล็อกไว้ตามรายการอนุญาต allowBuilds จึงทำงานไม่สำเร็จ เช่น โมดูลเนทีฟ node-pty หรือสคริปต์ prepare เมื่อติดตั้งผ่าน git ตัวติดตั้งอนุญาตคีย์นั้นและลองใหม่อัตโนมัติแล้วหนึ่งครั้ง หากยังล้มเหลว แสดงว่าตัวบิลด์มีปัญหาจนผู้ใช้ติดตั้งไม่ได้ ลองรันคำสั่งในเทอร์มินัลเพื่อดูข้อผิดพลาดทั้งหมด แล้วแจ้งผู้พัฒนาให้ส่งไฟล์ที่บิลด์แล้ว แพ็กเกจ npm ที่ครบถ้วน หรือ .tgz ที่บิลด์แล้ว",
    "failIssueBig": "รายงานข้อผิดพลาดบน GitHub เพื่อช่วยพัฒนาโอเพนซอร์ส",
    "failIssueHint": "เปิดรายงานปัญหาในที่เก็บโค้ดของผู้พัฒนา พร้อมบันทึกข้อผิดพลาดและลิงก์รายการปลั๊กอินที่กรอกไว้ให้",
    "failKind_accessDenied": "ไม่มีสิทธิ์เขียนข้อมูล",
    "failKind_buildToolchainMissing": "ไม่มีชุดเครื่องมือบิลด์เนทีฟ",
    "failKind_dshMissing": "ไม่ได้ติดตั้ง dsh ในเครื่อง",
    "failKind_dshTooOld": "DSH เก่ากว่าเวอร์ชันที่ปลั๊กอินต้องการ",
    "failKind_fileLocked": "ไฟล์ถูกโปรแกรมอื่นใช้งานอยู่",
    "failKind_fsUnavailable": "เขียนข้อมูลลงดิสก์ไม่ได้",
    "failKind_gitMissing": "ไม่ได้ติดตั้ง git ในเครื่อง",
    "failKind_hostCliSpawn": "เริ่มโฮสต์ DSH ไม่ได้",
    "failKind_hostIncompatible": "ปลั๊กอินไม่รองรับ DSH เวอร์ชันที่ใช้อยู่ ({version})",
    "failKind_hub": "ข้อผิดพลาดที่ไม่ทราบสาเหตุ",
    "failKind_hubState": "สถานะศูนย์ปลั๊กอินไม่ตรงกัน",
    "failKind_localEnv": "สภาพแวดล้อมในเครื่องมีปัญหา",
    "failKind_network": "เชื่อมต่อเครือข่ายไม่สำเร็จ",
    "failKind_nodeEngine": "Node / pnpm ในเครื่องต่ำกว่าเวอร์ชันที่ต้องการ",
    "failKind_npmMissing": "ไม่ได้ติดตั้ง npm ในเครื่อง",
    "failKind_npmTooOld": "npm ในเครื่องเก่าเกินไป",
    "failKind_originRejected": "บริการในเครื่องปฏิเสธแหล่งที่มาของคำขอ",
    "failKind_pluginMissingDep": "ยังไม่ได้เผยแพร่แพ็กเกจที่ปลั๊กอินพึ่งพา",
    "failKind_pluginPrepare": "ชุดไฟล์ที่เผยแพร่ของปลั๊กอินไม่ครบ",
    "failKind_pnpmIgnoredBuild": "สคริปต์บิลด์ถูก pnpm บล็อก",
    "failKind_pnpmLinkedDirMissing": "รายการพึ่งพาในเครื่องชี้ไปยังโฟลเดอร์ที่หายไป",
    "failKind_pnpmMissing": "ไม่ได้ติดตั้ง pnpm ในเครื่อง",
    "failKind_pnpmMissingDep": "ไม่มีแพ็กเกจที่พึ่งพาบน registry",
    "failKind_pnpmModulesMismatch": "โฟลเดอร์แพ็กเกจที่พึ่งพาไม่ตรงกับการตั้งค่า pnpm ปัจจุบัน",
    "failKind_pnpmPolicy": "ถูกบล็อกโดยนโยบายความปลอดภัยซัพพลายเชนของ pnpm",
    "failKind_pnpmStore": "เวอร์ชัน pnpm store ไม่ตรงกัน",
    "failKind_pnpmUnusedPatch": "มีรายการแพตช์เก่าค้างในโปรไฟล์",
    "failKind_pnpmWorkspace": "การตรวจโฟลเดอร์ราก workspace บล็อกการติดตั้ง",
    "failKind_profileBadAllowBuilds": "แยกวิเคราะห์รายการ allowBuilds ในโปรไฟล์ไม่ได้",
    "failKind_profileBundleMissing": "แพ็กเกจที่โปรไฟล์พึ่งพาติดตั้งไม่ครบ",
    "failKind_profileExclusive": "โปรไฟล์นี้จัดการได้เฉพาะในแอปเดสก์ท็อป",
    "failKind_profileLocalBuild": "บิลด์ปลั๊กอินในเครื่องที่มีอยู่ในโปรไฟล์ไม่สำเร็จ",
    "failKind_profileLock": "โปรไฟล์ถูกล็อกโดยโปรเซสอื่น",
    "failKind_profileState": "ข้อมูล pnpm ของโปรไฟล์ไม่ตรงกับเครื่องนี้",
    "failKind_profileYamlCorrupted": "การตั้งค่า YAML ของโปรไฟล์เสียหาย",
    "failKind_registryAuth": "npm registry ปฏิเสธการเข้าถึง",
    "failKind_registryVersionStale": "ยังไม่มีเวอร์ชันนี้บน registry ที่ใช้อยู่",
    "failKind_timeout": "การดำเนินการหมดเวลา",
    "failKind_tlsTrust": "ตรวจสอบใบรับรอง HTTPS ไม่ผ่าน",
    "failLinkedDirTarget": "ไม่พบโฟลเดอร์ในเครื่อง: {path}",
    "failLocalEnvHint": "บันทึกยืนยันได้เพียงว่าไม่มีหลักฐานปัญหาฝั่งปลั๊กอิน สัญญาณชี้ไปที่สภาพแวดล้อมในเครื่อง เช่น รหัสผิดพลาดของระบบ การตรวจใบรับรอง/พร็อกซี หรือไฟล์ตั้งค่าเสียหาย แต่ยังระบุประเภทแน่นอนไม่ได้ ปลั๊กอินอื่นจะล้มเหลวเช่นกัน ตรวจตามลำดับ: ① กด “เริ่มตรวจสอบ” ด้านล่าง ② ตรวจว่า ~/.dsh/profiles/<profile> เขียนได้ ดิสก์มีพื้นที่ และโปรแกรมป้องกันไวรัสไม่บล็อก ③ หากใช้พร็อกซีหรือมิเรอร์องค์กร ลองสลับเป็นแหล่งทางการ https://registry.npmjs.org ชั่วคราว ④ ออกจาก DeepSeek Harness ให้หมดแล้วลองใหม่ หากยังล้มเหลวและแน่ใจว่าสภาพแวดล้อมปกติ ให้ใช้ลิงก์ด้านล่างรายงาน พร้อมบันทึกทั้งหมดที่คัดลอกจากการแจ้งเตือนของศูนย์ปลั๊กอิน",
    "failMisjudgeHint": "หากปลั๊กอินนี้ติดตั้งได้ตามปกติ แต่ศูนย์ปลั๊กอินวินิจฉัยผิดตามข้อความด้านบน โปรดแจ้งศูนย์ปลั๊กอิน เพราะผลวินิจฉัยนี้มาจากตลาดเอง และต้องอาศัยรายงานของคุณเพื่อพบการตรวจจับผิด",
    "failMisjudgeLink": "ปลั๊กอินติดตั้งได้แต่ถูกบล็อก? แจ้งศูนย์ปลั๊กอิน",
    "failNetworkHint": "ตรวจพบว่าเครือข่ายเชื่อมต่อไม่ได้ก่อน{action}: เข้าถึงแหล่งติดตั้งไม่ได้ (ออฟไลน์, DNS ล้มเหลว, ไฟร์วอลล์บล็อก หรือพร็อกซีตั้งค่าผิด) ไม่ใช่ปัญหาของปลั๊กอิน โปรดตรวจเครือข่าย ยืนยัน HTTP พร็อกซีในตั้งค่า แล้วตรวจการเชื่อมต่อใน “ตรวจสอบระบบ” ก่อนลองใหม่",
    "failNetworkRegistryHint": "npm/pnpm registry ของคุณตั้งเป็น {host} แต่ดาวน์โหลดแพ็กเกจจากที่นั่นไม่ได้ มักเป็นมิเรอร์ภายในหรือส่วนตัวที่ยังไม่มีแพ็กเกจนี้ หรือต้องยืนยันตัวตนในเครือข่ายภายใน เปลี่ยน registry เป็น https://registry.npmjs.org หรือยืนยันว่าแหล่งเดิมให้ดาวน์โหลดแพ็กเกจนี้ได้ แล้วลองใหม่",
    "failNetworkRunDiag": "ตรวจสอบเครือข่าย",
    "failNetworkTarget": "เข้าถึง {url} ไม่ได้ การเชื่อมต่อเครือข่ายขัดข้อง",
    "failNodeEngineHint": "ปลั๊กอินหรือแพ็กเกจที่พึ่งพาต้องการ Node / pnpm รุ่นใหม่กว่า (ERR_PNPM_UNSUPPORTED_ENGINE / EBADENGINE) pnpm จึงปฏิเสธการติดตั้ง ไม่ใช่ปัญหาของปลั๊กอิน ให้อัปเกรด Node ตามที่กำหนดด้วย nvm / fnm หรือติดตั้ง Node.js รุ่นใหม่ ตรวจว่า node -v และ pnpm -v ตรงข้อกำหนด แล้วลองอีกครั้ง",
    "failNpmMissingHint": "ไม่พบคำสั่ง npm (ยังไม่ได้ติดตั้งหรือไม่มีใน PATH) จึงติดตั้งแบบส่วนกลางไม่ได้ โปรดติดตั้ง Node.js ที่มาพร้อม npm ตรวจว่ามี npm ใน PATH แล้วลองอีกครั้ง ไม่ใช่ปัญหาของปลั๊กอิน",
    "failNpmTooLow": "npm ในเครื่องอาจเก่าเกินไป: npm ล้มเหลวภายในขณะวิเคราะห์แพ็กเกจที่ปลั๊กอินพึ่งพา (เป็นข้อบกพร่องที่ทราบของ npm ไม่ใช่ปลั๊กอิน) อัปเกรด npm แล้วลองใหม่: npm install -g npm@latest",
    "failNpmTooLowV": "npm ในเครื่องเก่าเกินไป (v{v}): npm ล้มเหลวภายในขณะวิเคราะห์แพ็กเกจที่ปลั๊กอินพึ่งพา (เป็นข้อบกพร่องที่ทราบของ npm ไม่ใช่ปลั๊กอิน) อัปเกรด npm แล้วลองใหม่: npm install -g npm@latest",
    "failOriginRejectedHint": "คำขอติดตั้งไม่ผ่านการตรวจแหล่งที่มาของตลาดปลั๊กอินและถูกบริการในเครื่องปฏิเสธ จึงยังไม่เริ่มติดตั้ง ไม่เกี่ยวกับตัวปลั๊กอิน มักเกิดจากเปิดหน้าตลาดด้วยที่อยู่ที่ไม่ใช่เครื่องนี้ เช่น IP ใน LAN หรือระบบไม่รู้จักแหล่งที่มาของหน้าแอปหลัก ให้เปิดตลาดผ่าน localhost แล้วลองใหม่ สำหรับแอปเดสก์ท็อป ให้เริ่มแอปหลักใหม่ หากยังล้มเหลว แสดงว่า dsh-plugin รุ่นนี้ไม่เข้ากับแอปหลัก ให้อัปเกรดด้วย dsh plugin --profile {profile} add dsh-plugin@latest แล้วเริ่มแอปหลักใหม่อีกครั้ง",
    "failPackagingHint": "ปลั๊กอินนี้ยังไม่รองรับวิธีติดตั้งเริ่มต้นอย่างเป็นทางการ ชุดไฟล์จาก git ขาดไฟล์ที่จำเป็น (จุดเข้าจาก `main` / `exports` จุดเข้าที่แพตช์เมานต์ด้วยชื่อแพ็กเกจ หรือแพตช์ที่ระบุใน `dsh.bundle.patch`) โปรดเปิด Issue ในที่เก็บโค้ดของผู้พัฒนา ขอให้รวมไฟล์ที่บิลด์แล้วใน git จัดเตรียม `.tgz` ที่บิลด์แล้ว (`releases/download/<tag>/<asset>.tgz`) หรือเผยแพร่แพ็กเกจ npm ที่ครบถ้วน",
    "failPluginMissingDepHint": "แพ็กเกจที่ปลั๊กอินนี้พึ่งพาไม่มีบน npm registry ทางการ อาจถูกลบหรือไม่เคยเผยแพร่ เป็นปัญหาฝั่งผู้พัฒนาปลั๊กอิน ไม่ใช่สภาพแวดล้อมของคุณ โปรดแจ้งในที่เก็บโค้ดให้ผู้พัฒนาแก้รายการพึ่งพาหรือรวมแพ็กเกจนั้นมากับปลั๊กอิน",
    "failPluginMissingDepTarget": "ไม่มี {pkg} บน npm registry ทางการ",
    "failPnpmLinkedDirMissingHint": "pnpm ไม่พบโฟลเดอร์ต้นทางที่ต้องใช้ติดตั้ง (ERR_PNPM_LINKED_PKG_DIR_NOT_FOUND): โปรไฟล์มีรายการพึ่งพาในเครื่องแบบ link: / file: เช่นจาก `dsh plugin add <local path>` แต่โฟลเดอร์ถูกย้ายหรือลบ ทุกครั้งที่วิเคราะห์รายการพึ่งพาจึงติดขัดและติดตั้งปลั๊กอินใดไม่ได้ ไม่ใช่ปัญหาของปลั๊กอิน ลบรายการพึ่งพานั้นจาก package.json ใน ~/.dsh/profiles/<profile> พร้อมรายการใน pnpm-lock.yaml หรือตัวล็อกไฟล์ หรือคืนโฟลเดอร์กลับพาธเดิม แล้วลองใหม่",
    "failPnpmMissingDepHint": "pnpm ไม่พบแพ็กเกจบน npm registry (ERR_PNPM_FETCH_404): โปรไฟล์มีรายการพึ่งพาแพ็กเกจที่ไม่ได้เผยแพร่ ทุกครั้งที่วิเคราะห์รายการพึ่งพาจึงติดขัดและติดตั้งปลั๊กอินใดไม่ได้ ไม่ใช่ปัญหาของปลั๊กอิน ลบรายการนั้นจาก package.json ใน ~/.dsh/profiles/<profile> พร้อมรายการที่เกี่ยวข้องใน pnpm-lock.yaml หรือตัวล็อกไฟล์ แล้วลองใหม่",
    "failPnpmMissingDepTarget": "ไม่พบ {pkg} บน npm registry (404)",
    "failPnpmMissingHint": "พบ dsh แต่ไม่พบ pnpm ซึ่ง dsh ใช้จัดการปลั๊กอินในโปรไฟล์ โปรดติดตั้ง pnpm เช่น npm install -g pnpm ตรวจว่ามีใน PATH แล้วลองอีกครั้ง ไม่ใช่ปัญหาของปลั๊กอิน",
    "failPnpmModulesMismatchHint": "โฟลเดอร์ modules ไม่ตรงกับการตั้งค่าปัจจุบัน (`ERR_PNPM_*_DIFF` เช่น virtual-store-dir-max-length, public-hoist-pattern, กฎ hoisting, node-linker) เพราะ node_modules ในโปรไฟล์สร้างด้วยการตั้งค่าอื่น มักเกิดหลังแก้ .npmrc เปลี่ยนเวอร์ชันหลักของ pnpm หรือ pnpm ในแอปเดสก์ท็อปต่างจากใน PATH pnpm จึงปฏิเสธทั้งการติดตั้งและถอนการติดตั้ง ไม่ใช่ปัญหาของปลั๊กอิน แก้ได้อย่างใดอย่างหนึ่งใน ~/.dsh/profiles/<profile>: ① รัน pnpm install เพื่อสร้าง modules ใหม่ตามค่าปัจจุบัน ② ลบ node_modules เพื่อให้สร้างใหม่ในการติดตั้งหรือถอนการติดตั้งครั้งถัดไป ③ ทำค่าที่กำหนดใน .npmrc ให้ตรงกัน หรือลบค่าที่กำหนดเองเพื่อกลับไปใช้ค่าเริ่มต้น",
    "failPnpmPolicyHint": "นโยบายความปลอดภัยซัพพลายเชนของ pnpm บล็อกตัวติดตั้ง ปลั๊กอินอื่นก็จะติดขัดเช่นกัน ไม่ใช่ปัญหาของปลั๊กอิน แยกเป็น ① “Minimum release age” (ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION): แพ็กเกจเผยแพร่ยังไม่ครบ 24 ชั่วโมง pnpm 11 จึงปฏิเสธเพื่อความปลอดภัย ให้รอครบ 24 ชั่วโมงแล้วลองใหม่ หรือเพิ่ม minimumReleaseAge: 0 ใน pnpm-workspace.yaml เพื่อยกเว้น ซึ่งจะลดการป้องกัน ② “untrusted origin” (ERR_PNPM_UNTRUSTED_ORIGIN): เครื่องไม่เชื่อถือแหล่งของแพ็กเกจที่พึ่งพา มักมาจากการติดตั้งด้วย github: หรือ npm registry ที่ไม่ใช่แหล่งทางการและบันทึกไว้ในล็อกไฟล์ ลบ node_modules และ pnpm-lock.yaml ในโฟลเดอร์โปรไฟล์แล้วติดตั้งใหม่ ดูผลทั้งหมดในบันทึกระบบหรือ ~/.dsh/profiles/<profile>/hub.log",
    "failPnpmReleaseAgeHint": "นโยบายความปลอดภัยซัพพลายเชนของ pnpm บล็อกตัวติดตั้ง ทุกปลั๊กอินในโปรไฟล์นี้จะติดขัดเช่นกัน ไม่ใช่ปัญหาของปลั๊กอิน แพ็กเกจเผยแพร่ยังไม่ครบ 24 ชั่วโมง และ pnpm 11 ปฏิเสธแพ็กเกจใหม่เพื่อความปลอดภัย จึงบล็อกทั้งติดตั้งและถอนการติดตั้งชั่วคราว ลองใหม่หลัง {time} (ครบ 24 ชั่วโมงนับจากเผยแพร่) หากจำเป็นต้องติดตั้งทันที เพิ่ม minimumReleaseAge: 0 ใน pnpm-workspace.yaml ภายใน ~/.dsh/profiles/<profile> เพื่อยกเว้นได้ แต่จะลดการป้องกันซัพพลายเชนของทั้งโปรไฟล์",
    "failPnpmStoreHint": "pnpm แจ้งตำแหน่ง store ไม่ตรงกัน (ERR_PNPM_UNEXPECTED_STORE): โปรไฟล์นี้เคยสร้างด้วย pnpm คนละเวอร์ชันหลัก และ pnpm ปัจจุบันไม่ยอมใช้ซ้ำ จึงติดตั้งปลั๊กอินใดลงโปรไฟล์นี้ไม่ได้ ลบ node_modules และ pnpm-lock.yaml ในโฟลเดอร์โปรไฟล์ แล้วติดตั้งใหม่ ดูผลทั้งหมดในบันทึกระบบหรือ ~/.dsh/profiles/<profile>/hub.log ไม่ใช่ปัญหาของปลั๊กอิน",
    "failPnpmTarballIntegrityHint": "pnpm แจ้ง ERR_PNPM_MISSING_TARBALL_INTEGRITY: รายการ tarball ในล็อกไฟล์ไม่มีค่า checksum สำหรับตรวจแพ็กเกจที่ดาวน์โหลด อ่านบันทึกทั้งหมด ออกจาก DeepSeek Harness ให้หมด แล้วตรวจและสำรอง package.json, pnpm-lock.yaml และ pnpm-workspace.yaml ของโปรไฟล์นี้ เมื่อยืนยันแหล่งที่มาของแพ็กเกจที่พึ่งพาแล้ว ให้เปลี่ยนชื่อ pnpm-lock.yaml เก็บไว้ จากนั้นใช้ตัวติดตั้ง DSH เดิมติดตั้งปลั๊กอินรุ่นที่เข้ากับแอปหลักเพื่อสร้างล็อกไฟล์ใหม่ กระบวนการนี้จะวิเคราะห์แพ็กเกจที่พึ่งพาของโปรไฟล์ใหม่ โปรดเทียบเวอร์ชันเก่าและใหม่ และเปิดการตรวจความครบถ้วนไว้เสมอ",
    "failPnpmTarballMismatchHint": "pnpm แจ้ง ERR_PNPM_TARBALL_INTEGRITY: แพ็กเกจที่ติดตั้งจากสาขา GitHub เช่น github:owner/repo#main มีการเปลี่ยนแปลงต้นทาง เนื้อหา tarball จึงไม่ตรง checksum ใน pnpm-lock.yaml และทำให้ทุกการติดตั้งในโปรไฟล์หยุด วิธีแก้: เปิด ~/.dsh/profiles/<profile>/pnpm-lock.yaml แล้วลบรายการแพ็กเกจ GitHub นั้น หรือเปลี่ยนชื่อล็อกไฟล์ทั้งไฟล์เป็นสำรองหากไม่แน่ใจ จากนั้นติดตั้งใหม่ ระยะยาวควรตรึงไว้ที่ commit (github:owner/repo#<commit>) เพื่อให้การอัปเดตสาขาไม่เปลี่ยน checksum",
    "failPnpmUnusedPatchHint": "pnpm แจ้งว่ามีแพตช์ที่ไม่ได้ใช้ (ERR_PNPM_UNUSED_PATCH): โปรไฟล์ยังมีแพตช์สำหรับ dsh-plugin รุ่นเก่า เช่น dsh-plugin@1.4.2 แต่ครั้งนี้ได้เวอร์ชันอื่น จึงยุติการติดตั้งทั้งหมดเพื่อความปลอดภัย ไม่ใช่ปัญหาของปลั๊กอิน ลบรายการแพตช์ dsh-plugin นั้นจาก pnpm-workspace.yaml (pnpm 11+) หรือ pnpm.patchedDependencies ใน package.json (pnpm 10) ภายใน ~/.dsh/profiles/<profile> แล้วลองใหม่",
    "failPnpmWorkspaceHint": "pnpm ปฏิเสธการเพิ่มแพ็กเกจที่โฟลเดอร์ราก workspace (ERR_PNPM_ADDING_TO_ROOT): โฟลเดอร์โปรไฟล์ถูกมองเป็นราก workspace แต่คำสั่งไม่ได้ระบุว่าจะทำงานที่ราก จึงติดตั้งปลั๊กอินใดไม่ได้ ไม่ใช่ปัญหาของปลั๊กอิน เพิ่ม `ignore-workspace-root-check=true` ใน `.npmrc` ของ ~/.dsh/profiles/<profile> แล้วลองใหม่ หรืออัปเกรด DeepSeek Harness แล้วลองอีกครั้ง",
    "failPrepareHint": "สคริปต์บิลด์ของปลั๊กอินทำงานไม่สำเร็จระหว่างติดตั้ง (แพ็กเกจ npm ที่เผยแพร่ไม่ครบ) เป็นปัญหาการจัดแพ็กเกจของปลั๊กอิน โปรดแจ้งในที่เก็บโค้ดของผู้พัฒนา",
    "failProfileBadAllowBuildsHint": "pnpm หยุดก่อนวิเคราะห์แพ็กเกจที่พึ่งพา: allowBuilds ใน pnpm-workspace.yaml ของโปรไฟล์มีกฎ “package@version” ที่ส่วนเวอร์ชันเป็น URL หรือพาธในเครื่อง เช่น Invalid versions union. Found: \"xxx@https\" pnpm ต้องการคู่ “package@version” ที่ระบุเวอร์ชันแน่นอน จึงติดตั้งปลั๊กอินใดในโปรไฟล์นี้ไม่ได้ ไม่เกี่ยวกับปลั๊กอินที่กำลังติดตั้งและไม่ควรแจ้งผู้พัฒนาปลั๊กอินนั้น เปิด ~/.dsh/profiles/<profile>/pnpm-workspace.yaml แล้วลบคีย์ที่มี https://, git หรือ file: หรือใช้เฉพาะชื่อแพ็กเกจ เช่น `dsh-purge: true` แล้วลองใหม่ ตั้งแต่รุ่น 2.3.9 ศูนย์ปลั๊กอินจะแก้คีย์ลักษณะนี้อัตโนมัติก่อนติดตั้ง",
    "failProfileBundleMissingHint": "แอปหลักหาแพ็กเกจที่โปรไฟล์พึ่งพา “{pkg}” ไม่พบขณะเริ่มจัดการปลั๊กอิน แสดงว่าติดตั้งรายการพึ่งพาไม่ครบ อาจลบ node_modules การติดตั้งก่อนหน้าถูกขัดจังหวะ หรืออัปเดตแอปเดสก์ท็อปไม่ครบ ไม่เกี่ยวกับปลั๊กอินที่กำลังติดตั้ง ปลั๊กอินอื่นก็จะล้มเหลว วิธีแก้: ① ให้แอปหลักติดตั้งรายการพึ่งพาของโปรไฟล์อีกครั้ง โดยเปิดศูนย์ปลั๊กอินใหม่ในแอปเดสก์ท็อป หรือรัน `dsh plugin --profile {profile} install` โปรไฟล์ที่เดสก์ท็อปจัดการต้องทำจากในแอป ไม่อนุญาต CLI ภายนอก ② หากยังผิดพลาดเหมือนเดิม ตัวแอปอาจติดตั้งไม่ครบ ให้ติดตั้งใหม่หรืออัปเกรด DeepSeek Harness Desktop",
    "failProfileExclusiveHint": "โปรไฟล์ “{profile}” จัดการได้เฉพาะในแอปเดสก์ท็อป dsh จากบรรทัดคำสั่งไม่มีสิทธิ์ติดตั้ง ไม่ใช่ปัญหาของปลั๊กอิน ให้ติดตั้งจาก ตั้งค่า → ศูนย์ปลั๊กอิน ภายใน DeepSeek Harness Desktop หรือใช้โปรไฟล์ที่เดสก์ท็อปไม่ได้จัดการ เช่น web หากพบข้อความนี้ในแอปเดสก์ท็อป ให้เปิดการแจ้งเตือนของศูนย์ปลั๊กอิน เลือกรายการที่ล้มเหลว แล้วกด “คัดลอก” เพื่อส่งบันทึกทั้งหมดให้เรา",
    "failProfileExclusiveHintNoProfile": "โปรไฟล์ปัจจุบันจัดการได้เฉพาะในแอปเดสก์ท็อป dsh จากบรรทัดคำสั่งไม่มีสิทธิ์ติดตั้ง ไม่ใช่ปัญหาของปลั๊กอิน ให้ติดตั้งจาก ตั้งค่า → ศูนย์ปลั๊กอิน ภายใน DeepSeek Harness Desktop หรือใช้โปรไฟล์ที่เดสก์ท็อปไม่ได้จัดการ เช่น web หากพบข้อความนี้ในแอปเดสก์ท็อป ให้เปิดการแจ้งเตือนของศูนย์ปลั๊กอิน เลือกรายการที่ล้มเหลว แล้วกด “คัดลอก” เพื่อส่งบันทึกทั้งหมดให้เรา",
    "failProfileLocalBuildHint": "pnpm ปฏิเสธสคริปต์บิลด์ของแพ็กเกจในเครื่องที่อยู่ในโปรไฟล์แล้ว ปลั๊กอินดังกล่าวใช้ file: / link: ชี้โฟลเดอร์ในเครื่อง แต่ postinstall หรือสคริปต์บิลด์รันไม่ได้ pnpm ตรวจแพ็กเกจที่พึ่งพาทั้งโปรไฟล์ใหม่ทุกครั้งที่ add ทำให้ทุกการติดตั้งล้มเหลว ไม่เกี่ยวกับปลั๊กอินที่กำลังติดตั้งและไม่ควรแจ้งผู้พัฒนาปลั๊กอินนั้น เปิด package.json ใน ~/.dsh/profiles/<profile> หา dependencies ที่ขึ้นต้นด้วย file: หรือ link: แล้วนำออกชั่วคราว หรือแก้สคริปต์ที่หายไปในโฟลเดอร์นั้น จากนั้นลองใหม่ ชื่อหลัง “Ignored build scripts” ในข้อผิดพลาด pnpm บอกแพ็กเกจที่มีปัญหา",
    "failProfileLockHint": "DSH หมดเวลารอล็อกไฟล์ขณะเขียนรายการปลั๊กอิน มักเกิดจาก DSH อีกโปรเซสหรืองานติดตั้งอื่นกำลังเขียนโปรไฟล์เดียวกัน หรือโปรเซสก่อนหน้าทิ้งล็อกไว้ ปิดหน้าต่าง dsh หรือคำสั่งอื่นที่กำลังทำงานแล้วลองใหม่ หากยังเกิดซ้ำ ให้เริ่ม DSH ใหม่ ไม่ใช่ปัญหาของปลั๊กอิน และไม่จำเป็นต้อง{action}ซ้ำ",
    "failProfileStateHint": "ข้อมูลโปรไฟล์ไม่ตรงกับสภาพแวดล้อม pnpm ปัจจุบัน เช่น ERR_PNPM_OUTDATED_LOCKFILE / ERR_PNPM_NO_IMPORTER_MANIFEST_FOUND / ERR_PNPM_BAD_PM_VERSION / ERR_PNPM_PATCH_NOT_APPLIED โดย pnpm-lock.yaml, package.json หรือประกาศแพตช์ไม่สอดคล้องกับเวอร์ชัน pnpm จึงหยุดก่อนติดตั้งทุกปลั๊กอิน ไม่ใช่ปัญหาของตัวปลั๊กอิน ลบ pnpm-lock.yaml ใน ~/.dsh/profiles/<profile> แล้วลองใหม่เพื่อให้ pnpm สร้างจากรายการแพ็กเกจที่พึ่งพา หากผิดที่ packageManager ให้แก้ฟิลด์ใน package.json ให้ตรงกับเวอร์ชันหลักของ pnpm ปัจจุบันหรือลบฟิลด์นั้น หากยังไม่สำเร็จ ให้สร้างชุดแพ็กเกจที่พึ่งพาของโปรไฟล์ใหม่",
    "failProfileYamlHint": "pnpm พบ YAML เสียหาย (duplicated mapping key): pnpm-workspace.yaml หรือ pnpm-lock.yaml ในโปรไฟล์มีคีย์ซ้ำ อาจมาจากการแก้เอง ข้อขัดแย้งจากการผสานไฟล์ หรือเครื่องมือเขียนซ้ำ ระบบหยุดตั้งแต่แยกวิเคราะห์และยังไม่ได้ติดตั้งอะไร ทุกปลั๊กอินจึงล้มเหลวเหมือนกัน ไม่ใช่ปัญหาของปลั๊กอิน เปิด ~/.dsh/profiles/<profile>/ แล้วลบบรรทัดหรือส่วนที่ซ้ำ หากไม่แน่ใจว่าจะแก้ไฟล์ใด ให้ลบ pnpm-lock.yaml และ node_modules หากจำเป็น เพื่อให้ pnpm สร้างใหม่ แล้วลองอีกครั้ง",
    "failReason_accessDenied": "ระบบไม่อนุญาตให้ pnpm เขียนไฟล์ในโปรไฟล์",
    "failReason_buildToolchainMissing": "แพ็กเกจที่ปลั๊กอินพึ่งพาต้องคอมไพล์ในเครื่อง แต่ไม่พบคอมไพเลอร์ที่ใช้ได้",
    "failReason_dshMissing": "ตัวติดตั้งต้องเรียก dsh แต่ไม่พบในเครื่อง",
    "failReason_dshTooOld": "ปลั๊กอินกำหนด DSH ขั้นต่ำใหม่กว่าเวอร์ชันแอปหลักที่คุณใช้อยู่",
    "failReason_fileLocked": "pnpm แทนที่ไฟล์ในโปรไฟล์ไม่ได้ เพราะโปรแกรมอื่นใช้งานไฟล์นั้นอยู่",
    "failReason_fsUnavailable": "ดิสก์เต็ม เป็นแบบอ่านอย่างเดียว หรือใช้แฮนเดิลไฟล์จนหมด",
    "failReason_gitMissing": "แพ็กเกจที่พึ่งพาต้องใช้ git แต่ไม่พบ git",
    "failReason_hostCliSpawn": "จุดเข้าของโฮสต์ที่ระบุเริ่มทำงานไม่ได้ จึงยังไม่ได้รันคำสั่งติดตั้ง",
    "failReason_hostIncompatible": "รายการความเข้ากันได้ของปลั๊กอินไม่รวมเวอร์ชัน DSH ที่คุณใช้อยู่",
    "failReason_hub": "ยังระบุข้อผิดพลาดนี้ไม่ได้ คุณส่งรายงานให้เราได้ในคลิกเดียว",
    "failReason_hubState": "สถานะติดตั้งที่บันทึกในเครื่องไม่ตรงกับสถานะจริง การดำเนินการนี้จึงไม่มีผล",
    "failReason_localEnv": "ข้อผิดพลาดชี้ไปที่สภาพแวดล้อมในเครื่อง เช่น รหัสผิดพลาดระบบ ใบรับรอง/พร็อกซี หรือการตั้งค่าในเครื่อง ไม่พบสาเหตุฝั่งปลั๊กอิน",
    "failReason_network": "ระหว่างติดตั้งเข้าถึง npm registry หรือพร็อกซีไม่ได้ คำขอจึงไม่เสร็จสมบูรณ์",
    "failReason_nodeEngine": "ปลั๊กอินหรือแพ็กเกจที่พึ่งพาต้องการ Node / pnpm รุ่นใหม่กว่า pnpm จึงปฏิเสธการติดตั้ง",
    "failReason_npmMissing": "ขั้นตอนติดตั้งต้องใช้ npm แต่ไม่พบ npm",
    "failReason_npmTooOld": "npm ที่ติดตั้งวิเคราะห์โครงสร้างแพ็กเกจที่พึ่งพาของแพ็กเกจนี้ไม่ได้ จึงหยุดทำงาน",
    "failReason_originRejected": "คำขอยังไม่เข้าสู่ขั้นตอนติดตั้ง เพราะบริการในเครื่องปฏิเสธแหล่งที่มา",
    "failReason_pluginMissingDep": "แพ็กเกจที่ปลั๊กอินพึ่งพาไม่มีบน npm registry ทางการ",
    "failReason_pluginPrepare": "แพ็กเกจที่เผยแพร่ขาดไฟล์ หรือสคริปต์บิลด์ล้มเหลว",
    "failReason_pnpmIgnoredBuild": "ปลั๊กอินหรือแพ็กเกจที่พึ่งพามีสคริปต์บิลด์ที่ pnpm บล็อกโดยค่าเริ่มต้น สคริปต์นั้นไม่จำเป็นต้องเป็นโมดูลเนทีฟ",
    "failReason_pnpmLinkedDirMissing": "รายการพึ่งพาแบบ link/file ชี้โฟลเดอร์ที่ไม่มีอยู่แล้ว pnpm จึงติดขัดที่รายการนี้",
    "failReason_pnpmMissing": "ตัวติดตั้งใช้ pnpm เพิ่มปลั๊กอิน แต่ไม่พบ pnpm",
    "failReason_pnpmMissingDep": "โปรไฟล์มีรายการพึ่งพาแพ็กเกจที่ไม่ได้เผยแพร่ pnpm จึงติดขัดที่รายการนี้ทุกครั้ง",
    "failReason_pnpmModulesMismatch": "node_modules สร้างด้วยการตั้งค่า pnpm อื่น (hoisting / ความยาว virtual store) pnpm จึงไม่ยอมใช้ซ้ำ",
    "failReason_pnpmPolicy": "เวอร์ชันนี้เผยแพร่ยังไม่ครบเวลาขั้นต่ำ หรือไม่ผ่านการตรวจความครบถ้วนหรือความเชื่อถือ",
    "failReason_pnpmStore": "แพ็กเกจที่พึ่งพาในโปรไฟล์สร้างด้วย pnpm คนละเวอร์ชันหลัก ซึ่ง pnpm ปัจจุบันไม่ยอมรับ",
    "failReason_pnpmUnusedPatch": "โปรไฟล์ยังมีแพตช์ของ dsh-plugin รุ่นเก่า pnpm จึงยุติการติดตั้งเพื่อความปลอดภัย",
    "failReason_pnpmWorkspace": "โปรไฟล์ถูกมองเป็นโฟลเดอร์ราก workspace แต่ไม่ได้ระบุว่าจะทำงานที่ราก pnpm จึงยุติการติดตั้ง",
    "failReason_profileBadAllowBuilds": "allowBuilds ใน pnpm-workspace.yaml มีรายการ “package@URL / พาธในเครื่อง” ซึ่ง pnpm แยกวิเคราะห์ไม่ได้ จึงหยุดก่อนเริ่มติดตั้ง ไม่เกี่ยวกับปลั๊กอินที่กำลังติดตั้ง",
    "failReason_profileBundleMissing": "แอปหลักไม่พบบันเดิลที่โปรไฟล์ระบุ จึงล้มเหลวก่อนเริ่มติดตั้ง",
    "failReason_profileExclusive": "dsh CLI ไม่มีสิทธิ์จัดการโปรไฟล์เดสก์ท็อป แอปหลักจึงปฏิเสธก่อนติดตั้ง",
    "failReason_profileLocalBuild": "pnpm ตรวจทั้งโปรไฟล์ใหม่ทุกครั้งที่ติดตั้ง ปัญหานี้มาจากสคริปต์บิลด์ของแพ็กเกจในเครื่อง (file:/link:) ที่มีอยู่แล้ว ไม่ใช่ปลั๊กอินที่กำลังติดตั้ง",
    "failReason_profileLock": "โปรเซส dsh อื่นกำลังใช้โปรไฟล์นี้",
    "failReason_profileState": "ล็อกไฟล์ / package.json / เวอร์ชัน packageManager ของโปรไฟล์ไม่ตรงกับ pnpm ปัจจุบัน จึงหยุดก่อนเริ่มติดตั้ง",
    "failReason_profileYamlCorrupted": "ไฟล์ YAML ในโปรไฟล์มีคีย์ซ้ำ pnpm จึงหยุดตั้งแต่แยกวิเคราะห์",
    "failReason_registryAuth": "registry ตอบ 401/403: ต้องยืนยันตัวตน หรือไม่อนุญาตเครือข่ายปัจจุบัน",
    "failReason_registryVersionStale": "registry ที่ใช้ติดตั้งจริงยังไม่ซิงก์เวอร์ชันนี้ ลองภายหลัง เปลี่ยนเป็นแหล่งทางการที่ ตั้งค่า → มิเรอร์ npm หรือติดตั้งเวอร์ชันก่อนหน้าไปก่อน",
    "failReason_timeout": "การติดตั้งเกินเวลาที่กำหนดและถูกยุติ",
    "failReason_tlsTrust": "มีโปรแกรมในเครื่องแทนที่ใบรับรอง HTTPS และ Node / pnpm ไม่เชื่อถือใบรับรองรากของโปรแกรมนั้น",
    "failRegistryAuthHint": "ตัวติดตั้งถูก npm registry ปฏิเสธ (HTTP 401/403) เพราะต้องยืนยันตัวตนหรือไม่อนุญาตเครือข่าย/IP ปัจจุบัน หากใช้แหล่งขององค์กรหรือส่วนตัว ให้ตั้งค่าการยืนยันตัวตนก่อน เช่น npm login หรือเขียน //{host}/:_authToken=… ใน ~/.npmrc หากไม่ต้องใช้แหล่งส่วนตัว ให้เปลี่ยนเป็นแหล่งทางการ https://registry.npmjs.org หรือมิเรอร์สาธารณะในตั้งค่าของศูนย์ปลั๊กอิน แล้วลองใหม่ ไม่ใช่ปัญหาของปลั๊กอิน",
    "failRegistryAuthHintNoHost": "ตัวติดตั้งถูก npm registry ปฏิเสธ (HTTP 401/403) เพราะต้องยืนยันตัวตนหรือไม่อนุญาตเครือข่าย/IP ปัจจุบัน หากใช้แหล่งขององค์กรหรือส่วนตัว ให้ตั้งค่าการยืนยันตัวตนก่อน เช่น npm login หรือเขียน //<registry>/:_authToken=… ใน ~/.npmrc หากไม่ต้องใช้แหล่งส่วนตัว ให้เปลี่ยนเป็นแหล่งทางการ https://registry.npmjs.org หรือมิเรอร์สาธารณะในตั้งค่าของศูนย์ปลั๊กอิน แล้วลองใหม่ ไม่ใช่ปัญหาของปลั๊กอิน",
    "failRegistryMirrorLagHint": "pnpm แจ้งไม่พบแพ็กเกจ (ERR_PNPM_FETCH_404): แพ็กเกจมีบน npm registry ทางการ แต่ registry หรือมิเรอร์ npm/pnpm ที่เครื่องใช้ยังไม่ซิงก์ เปลี่ยนกลับไปใช้ https://registry.npmjs.org หรือมิเรอร์ที่มีแพ็กเกจแล้วลองใหม่ ไม่ใช่ปัญหาของปลั๊กอิน",
    "failRegistryVersionStaleHint": "pnpm ไม่พบเวอร์ชันที่ตรงกัน (ERR_PNPM_NO_MATCHING_VERSION): registry ที่ใช้ติดตั้งจริงไม่มีเวอร์ชันนี้ มักเกิดจาก npmRegistry ในศูนย์ปลั๊กอินต่างจากแหล่งใน ~/.npmrc หรือแหล่งทางการเผยแพร่แล้วแต่มิเรอร์ยังไม่ซิงก์ ซึ่งอาจใช้หลายนาทีถึงหลายชั่วโมง หรือพิมพ์เวอร์ชันผิด ไม่ใช่ปัญหาของปลั๊กอิน ปรับ npmRegistry กับ ~/.npmrc ให้ตรงกัน หรือระบุแหล่งทางการ https://registry.npmjs.org สำหรับการติดตั้งครั้งนี้ หรือใช้แพ็กเกจออฟไลน์แล้วลองใหม่ หากเพิ่งเผยแพร่ ให้รอมิเรอร์ซิงก์ก่อน",
    "failTimeoutHint": "การดำเนินการเกินเวลาที่เครื่องกำหนดและถูกหยุด แต่อาจมีผลแล้ว (ตัวติดตั้งจะตรวจรายการที่ติดตั้งอีกครั้งหลังหมดเวลา) รีเฟรชหน้าเพื่อตรวจสถานะ หากยังไม่มีผล ให้รันคำสั่งที่เกี่ยวข้องในเทอร์มินัลเพื่อดูผลทั้งหมด ไม่ใช่ปัญหาของปลั๊กอิน",
    "failTlsTrustHint": "ตรวจใบรับรอง TLS ไม่ผ่านขณะเข้าถึง npm registry (`ERR_PNPM_META_FETCH_FAIL` / unable to verify the first certificate) มีการแทนที่ใบรับรอง HTTPS เช่น ระบบตรวจ SSL ขององค์กร โปรแกรมป้องกันไวรัส พร็อกซีดีบัก Fiddler / Charles หรือการถอดรหัส HTTPS ของพร็อกซีในเครื่อง แต่ Node / pnpm ไม่เชื่อถือใบรับรองราก ไม่ใช่ปัญหาของปลั๊กอิน ทุกปลั๊กอินจะล้มเหลวเช่นกัน ให้ทำตามลำดับ: ① หากองค์กรตรวจ SSL ให้ขอใบรับรองราก (.cer / .pem) จากฝ่าย IT และตั้งตัวแปร NODE_EXTRA_CA_CERTS ให้ชี้ไฟล์นั้น ② Node ≥ 22.15 ตั้ง NODE_OPTIONS=--use-system-ca เพื่อเชื่อถือคลังใบรับรองระบบได้ ③ หากพร็อกซีในเครื่องถอดรหัส HTTPS ให้เพิ่ม registry.npmjs.org ในรายการเชื่อมต่อตรงที่ไม่ผ่าน MITM ④ อาจเปลี่ยนไปใช้มิเรอร์สาธารณะ เช่น https://registry.npmmirror.com ชั่วคราวแล้วลองใหม่ ไม่แนะนำให้ปิด strict-ssl เพราะจะยกเลิกการตรวจทั้งหมดและเสี่ยงต่อการโจมตีแบบคนกลาง",
    "failUnclassifiedHint": "{action}ไม่สำเร็จ และระบุสาเหตุอัตโนมัติไม่ได้ โดยทั่วไปไม่ใช่ตัวปลั๊กอิน แต่อาจเกี่ยวกับสภาพแวดล้อมในเครื่องหรือศูนย์ปลั๊กอิน โปรดส่งข้อผิดพลาดให้ผู้ดูแลศูนย์ปลั๊กอินตรวจสอบ",
    "failed": "โหลดข้อมูลปลั๊กอินไม่สำเร็จ",
    "failedCopyHint": "ติดตั้งไม่สำเร็จ คัดลอกคำสั่งด้านบนไปรันเองในเทอร์มินัล dsh สคริปต์บิลด์โมดูลเนทีฟอาจต้องอนุมัติด้วยตนเอง เช่น pnpm approve-builds",
    "failedDescNoProxy": "โหลดรายการปลั๊กอินไม่ได้ (ข้อมูลหลาย MB) การโหลดครั้งแรกอาจหมดเวลาหากเครือข่ายช้า ลองอีกครั้งหรือกด “บังคับรีเฟรช” เพื่อข้ามแคชในเครื่องและดาวน์โหลดใหม่ เมื่อโหลดสำเร็จจะเก็บแคชไว้ 1 ชั่วโมง หากยังไม่สำเร็จ ให้ตรวจสอบเครือข่าย",
    "failedDescProxy": "โหลดรายการปลั๊กอินไม่ได้ (ข้อมูลหลาย MB) เครือข่ายที่ช้า หรือ HTTP พร็อกซีในการตั้งค่าที่เข้าถึงไม่ได้หรือไม่เสถียร อาจทำให้การโหลดครั้งแรกหมดเวลา ลองอีกครั้งหรือกด “บังคับรีเฟรช” เพื่อข้ามแคช เมื่อโหลดสำเร็จจะเก็บแคชไว้ 1 ชั่วโมง",
    "filterByLabel": "แหล่งที่มา",
    "filterResults": "ผลลัพธ์: {n} ปลั๊กอิน",
    "followUs": "ติดตามเรา",
    "forceReload": "บังคับรีเฟรช",
    "forceReloadHint": "ข้ามรายการที่เก็บในแคชแล้วดาวน์โหลดใหม่จากเซิร์ฟเวอร์ ใช้เมื่อแคชผิดปกติหรือเครือข่ายช้า",
    "fork": "ฟอร์ก",
    "githubHint": "ดูซอร์สโค้ดบน GitHub",
    "globalNpmHint": "ติดตั้งเครื่องมือ CLI แบบส่วนกลาง (npm install -g) จึงไม่แสดงใน “ติดตั้งแล้ว” และไม่ต้องเริ่มแอปหลักใหม่",
    "goToSettings": "ไปที่ตั้งค่า",
    "helpModalTitle": "รูปแบบคำสั่งที่รองรับ",
    "hubCurrentTitle": "เวอร์ชันปัจจุบัน",
    "hubInstall": "ศูนย์ปลั๊กอิน",
    "hubInstallHint": "จากรายการในศูนย์ปลั๊กอิน",
    "hubPendingDesc": "รุ่นล่าสุดเผยแพร่แล้ว แต่ยังไม่พ้นช่วง 24 ชั่วโมงที่ pnpm จะเลือกเวอร์ชันเก่าแทนโดยไม่แจ้ง จึงยังไม่เสนอให้อัปเดต ปุ่มอัปเดตจะปรากฏที่นี่ภายหลัง",
    "hubUpdateDesc": "คลิกด้านล่างเพื่ออัปเดต แล้วเริ่มแอปหลักใหม่เพื่อให้มีผล",
    "hubUpdateHint": "มี DSH Plugin Hub รุ่นใหม่ คลิกเพื่อดูรายการเปลี่ยนแปลงและอัปเดต",
    "hubUpdateLater": "ภายหลัง",
    "hubUpdateNotes": "มีอะไรใหม่",
    "hubUpdatePublished": "เผยแพร่เมื่อ",
    "hubUpdateTitle": "มี DSH Plugin Hub รุ่นใหม่",
    "hubVersionStateAvailable": "มีอัปเดต",
    "hubVersionStateLatest": "เป็นรุ่นล่าสุดแล้ว",
    "hubVersionStatePending": "รอครบ 24 ชม.",
    "ignoreUpdateConfirm": "ข้าม",
    "ignoreUpdateConfirmDetail": "จะไม่แจ้งเตือนเวอร์ชันนี้อีก และจะแจ้งเตือนอีกครั้งเมื่อมีเวอร์ชันถัดไป",
    "ignoreUpdateConfirmTitle": "ข้ามอัปเดตนี้หรือไม่?",
    "ignoreUpdateRun": "ข้ามอัปเดตนี้",
    "install": "ติดตั้ง",
    "installChannelNpm": "แพ็กเกจ npm",
    "installCliBtn": "ติดตั้ง",
    "installDetail": "รายละเอียดการติดตั้ง",
    "installDone": "ติดตั้งแล้ว",
    "installEntryLine": "ช่องทางเริ่มติดตั้ง: {c}",
    "installFail": "ติดตั้งไม่สำเร็จ ให้คัดลอกคำสั่งไปใช้แทน",
    "installHelp": "วิธีใช้",
    "installNow": "ติดตั้ง",
    "installPath": "พาธที่ติดตั้ง",
    "installResultDesc": "",
    "installResultTitle": "ติดตั้งปลั๊กอินสำเร็จ",
    "installed": "ติดตั้งแล้ว",
    "installedAtLabel": "ติดตั้งเมื่อ",
    "installedEmpty": "ยังไม่ได้ติดตั้งปลั๊กอิน",
    "installedEmptyDesc": "ไปที่ “ติดตั้งเอง” เพื่อเพิ่มแพ็กเกจ npm ด้วยตนเอง",
    "installedFilterCatalog": "จากรายการปลั๊กอิน",
    "installedSearch": "ค้นหาปลั๊กอินที่ติดตั้งแล้ว…",
    "installedVersionLabel": "เวอร์ชันที่ติดตั้ง",
    "installing": "กำลังติดตั้ง…",
    "lastUpdatedLabel": "อัปเดตล่าสุด",
    "loading": "กำลังโหลดข้อมูลปลั๊กอิน…",
    "logCatAll": "ทุกประเภท",
    "logCatDiagnostics": "ตรวจสอบ",
    "logCatInstall": "ติดตั้ง",
    "logCatSettings": "ตั้งค่า",
    "logCatSystem": "ระบบ",
    "logCatUninstall": "ถอนการติดตั้ง",
    "logCatUpdate": "อัปเดต",
    "logClearAll": "ล้างบันทึกทั้งหมด",
    "logClearAllTip": "ลบบันทึกทุกรายการ",
    "logClearConfirmDesc": "บันทึกทั้งหมดจะถูกลบและกู้คืนไม่ได้",
    "logClearConfirmTitle": "ล้างบันทึกทั้งหมดหรือไม่?",
    "logClearFailed": "ล้างไม่สำเร็จ โปรดลองอีกครั้ง",
    "logClearing": "กำลังล้าง…",
    "logCount": "{n} รายการ",
    "logEmptyFilter": "ไม่พบบันทึกที่ตรงกัน",
    "logLoadMore": "โหลดเพิ่มเติม",
    "logLvAll": "ทุกระดับ",
    "logLvDebug": "ดีบัก",
    "logLvError": "ข้อผิดพลาด",
    "logLvInfo": "ข้อมูล",
    "logLvSuccess": "สำเร็จ",
    "logLvWarn": "คำเตือน",
    "logModalTitle": "ตัวดูบันทึก",
    "logNoMore": "โหลดครบแล้ว · ทั้งหมด {n} รายการ",
    "logOpenFile": "แสดงไฟล์",
    "logOpenFileFail": "เปิดไม่ได้ โปรดค้นหาไฟล์ด้วยตนเอง",
    "logOpenFileTip": "แสดงไฟล์บันทึกในตัวจัดการไฟล์ของระบบ",
    "logPathBrowse": "เลือกโฟลเดอร์…",
    "logPathBrowseFail": "ใช้ตัวเลือกโฟลเดอร์ไม่ได้ โปรดป้อนพาธเอง",
    "logPathChange": "เปลี่ยน",
    "logPathLabel": "ไฟล์บันทึก",
    "logPathPlaceholder": "เว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "logPathReset": "คืนค่าเริ่มต้น",
    "logPathResetHint": "ช่องนี้แสดงตำแหน่งที่ใช้อยู่",
    "logPathSave": "บันทึก",
    "logPathSaveFail": "บันทึกไม่ได้: ตำแหน่งนี้เขียนข้อมูลไม่ได้",
    "logPathSaved": "บันทึกแล้ว รายการใหม่จะเขียนลงตำแหน่งนี้",
    "logPathSaving": "กำลังบันทึก…",
    "logPathSettingDesc": "ค่าเริ่มต้นเก็บในโฟลเดอร์การตั้งค่าของแอปหลัก ระบุโฟลเดอร์หรือพาธไฟล์ .log เพื่อเก็บที่อื่น",
    "logPathSettingTitle": "ตำแหน่งบันทึก",
    "logSearchPlaceholder": "ค้นหาเหตุการณ์หรือข้อความ…",
    "logViewerDesc": "ดูบันทึกในเครื่องผ่านหน้าต่างภายใน กรองตามประเภทและระดับเพื่อหาปัญหาความเข้ากันได้ระหว่างติดตั้ง ถอนการติดตั้ง หรืออัปเดต",
    "logViewerOpen": "เปิดตัวดูบันทึก",
    "logsEmpty": "ยังไม่มีบันทึก",
    "logsExport": "ส่งออกบันทึก",
    "logsHeadHint": "บันทึกการติดตั้ง ถอนการติดตั้ง เปลี่ยนการตั้งค่า และผลตรวจสอบ เก็บ 2,000 รายการล่าสุด",
    "logsLoadFail": "อ่านบันทึกไม่สำเร็จ โปรดลองอีกครั้งภายหลัง",
    "logsLoading": "กำลังอ่านบันทึก…",
    "logsRefresh": "รีเฟรชบันทึก",
    "manualInstall": "ติดตั้งด้วยตนเอง",
    "manualInstallHint": "ไม่ได้มาจากรายการปลั๊กอิน ติดตั้งผ่านบรรทัดคำสั่ง",
    "manualInstallOnlyHint": "ต้องติดตั้งปลั๊กอินนี้ด้วยตนเองในเทอร์มินัล dsh การติดตั้งคลิกเดียวบนเว็บทำขั้นตอนบิลด์และประกอบไฟล์แทนไม่ได้ คัดลอกคำสั่งด้านบนไปรัน (Windows ใช้ Git Bash หรือ PowerShell, macOS/Linux ใช้เทอร์มินัล) ดูขั้นตอนทั้งหมดในที่เก็บโค้ดของผู้พัฒนา",
    "mirrorNone": "ไม่ได้กำหนด (ใช้การตั้งค่า npm ในเครื่อง)",
    "mirrorNpmmirror": "Alibaba npmmirror",
    "mirrorOfficial": "แหล่งทางการ registry.npmjs.org",
    "mirrorTencent": "มิเรอร์ Tencent Cloud",
    "mirrorTsinghua": "มิเรอร์ Tsinghua TUNA",
    "monthsAgo": "อัปเดต {months} เดือนก่อน",
    "more": "อีก {n} ปลั๊กอินบนเว็บไซต์",
    "nav": "ศูนย์ปลั๊กอิน",
    "noResult": "ไม่พบปลั๊กอินที่ตรงกับการค้นหา",
    "noResultDesc": "ลองคำค้นอื่น หรือเรียกดูปลั๊กอินทั้งหมดบนเว็บไซต์",
    "notifications": "การแจ้งเตือน",
    "notificationsClear": "ล้างการแจ้งเตือน",
    "notificationsClearConfirmDesc": "การแจ้งเตือนทั้งหมดจะถูกลบและกู้คืนไม่ได้",
    "notificationsClearConfirmTitle": "ล้างการแจ้งเตือนทั้งหมดหรือไม่?",
    "notificationsDesc": "บันทึกการแจ้งเตือนติดตั้ง ถอนการติดตั้ง และอัปเดตทุกรายการไว้ที่นี่ แม้พลาดข้อความแจ้งก็กลับมาตรวจได้เสมอ",
    "notificationsEmpty": "ยังไม่มีการแจ้งเตือน",
    "notificationsHint": "ดูการแจ้งเตือนติดตั้ง ถอนการติดตั้ง และอัปเดต",
    "npmInstallExample": "คำสั่งที่รองรับ: npm install lodash, npm i lodash, pnpm add @scope/pkg",
    "npmInstallExample2": "ติดตั้ง CLI แบบส่วนกลาง: npm install -g @scope/cli หรือพิมพ์ชื่อแพ็กเกจ เช่น lodash",
    "npmInstallHelp": "lodash หรือ @scope/pkg\tพิมพ์ชื่อแพ็กเกจได้เลย\nnpm install lodash\nnpm i lodash\npnpm add @scope/pkg\npnpm i @scope/pkg\nnpm install -g @scope/cli\tติดตั้ง CLI แบบส่วนกลาง ไม่แสดงใน “ติดตั้งแล้ว”",
    "npmInstallInvalid": "ป้อนชื่อแพ็กเกจ npm (เช่น lodash, @scope/pkg) หรือคำสั่งติดตั้ง (เช่น npm install lodash, npm i lodash, pnpm add @scope/pkg, npm install -g @scope/cli) ไม่รองรับ URL ซอร์สโค้ด GitHub ให้ใช้ชื่อแพ็กเกจ npm ของปลั๊กอินแทน",
    "npmInstallLabel": "แพ็กเกจ npm / คำสั่ง",
    "npmInstallPlaceholder": "npm install <pkg> หรือชื่อแพ็กเกจ",
    "openFolder": "แสดงในโฟลเดอร์",
    "openFolderFail": "เปิดโฟลเดอร์ไม่ได้ ให้คัดลอกพาธแล้วเปิดเอง",
    "openHint": "เปิด dsh-plugin.org",
    "packageName": "แพ็กเกจ",
    "pluginsTotal": "ผลลัพธ์: {n} ปลั๊กอิน",
    "proxyCheckChecking": "กำลังทดสอบที่อยู่พร็อกซีนี้…",
    "proxyCheckFail": "เชื่อมต่อไม่ได้ แต่ยังบันทึกได้ โปรดตรวจว่าพร็อกซีกำลังทำงาน และที่อยู่กับพอร์ตถูกต้อง",
    "proxyCheckOk": "เชื่อมต่อได้ การติดตั้งและคำขอรายการปลั๊กอินจะผ่านพร็อกซีนี้",
    "proxyCheckRevocation": "ตรวจการเพิกถอนใบรับรองไม่ได้ (Windows Schannel ดึง CRL/OCSP ไม่สำเร็จ) จึงยุติการเชื่อมต่อ TLS เป็นปัญหา TLS ในเครื่อง ไม่ใช่ที่อยู่พร็อกซีผิด",
    "queuedHint": "เข้าคิวแล้ว จะเริ่มอัตโนมัติเมื่องานก่อนหน้าเสร็จ คุณปิดหน้าต่างนี้ได้",
    "queuedTitle": "เข้าคิวติดตั้งแล้ว…",
    "queuedUninstallTitle": "เข้าคิวถอนการติดตั้งแล้ว…",
    "queuedUpdateTitle": "เข้าคิวอัปเดตแล้ว…",
    "reloadHint": "โหลดปลั๊กอินแล้ว เมื่อปิดหน้าต่างนี้ หน้าจะรีเฟรชอัตโนมัติ",
    "removeNotification": "ลบการแจ้งเตือนนี้",
    "removeNotificationConfirmDesc": "การแจ้งเตือนนี้จะถูกลบและกู้คืนไม่ได้",
    "removeNotificationConfirmTitle": "ลบการแจ้งเตือนนี้หรือไม่?",
    "reportIssue": "รายงานปัญหาในที่เก็บโค้ดของปลั๊กอิน",
    "requestTimeout": "คำขอหมดเวลา: อาจเข้าถึง GitHub ไม่ได้หรือเครือข่ายไม่เสถียร โปรดลองอีกครั้งภายหลัง",
    "restart": "เริ่มใหม่",
    "restartHint": "การเริ่มใหม่จะขัดจังหวะงานติดตั้งหรือถอนการติดตั้งที่กำลังทำอยู่ และความคืบหน้าจะสูญหาย ปลั๊กอินบางประเภท เช่น ตลาดปลั๊กอินหรือบันเดิลระดับบน จะมีผลหลังเริ่มใหม่เท่านั้น",
    "restartNow": "เริ่มใหม่ตอนนี้",
    "restartPendingHint": "ติดตั้งแล้ว มีผลหลังเริ่มใหม่",
    "restartPendingHintUninstall": "ถอนการติดตั้งแล้ว จะนำออกสมบูรณ์หลังเริ่มใหม่",
    "restarting": "กำลังเริ่มใหม่…",
    "retry": "ลองอีกครั้ง",
    "revealFolder": "แสดงใน Finder",
    "search": "ค้นหาปลั๊กอินจากชื่อ คำอธิบาย หรือแท็ก…",
    "sectionInProgress": "กำลังดำเนินการ",
    "sectionPendingRestart": "รอเริ่มใหม่",
    "settingsCheckOnStart": "ตรวจอัปเดตเมื่อเปิด",
    "settingsCheckOnStartDesc": "ตรวจเวอร์ชันใหม่ของปลั๊กอินที่ติดตั้งเมื่อเปิดศูนย์ปลั๊กอิน และแจ้งเตือนเมื่อพบอัปเดต",
    "settingsDiagFail": "เชื่อมต่อไม่ได้",
    "settingsDiagnostics": "ตรวจสอบระบบ",
    "settingsDiagnosticsDesc": "ตรวจการเชื่อมต่อช่องทางติดตั้ง: npm registry, GitHub และเว็บไซต์รายการปลั๊กอิน",
    "settingsEnableNpm": "เปิดการติดตั้ง npm",
    "settingsEnableNpmDesc": "อนุญาตให้ติดตั้งแพ็กเกจ npm ผ่านบรรทัดคำสั่ง เมื่อปิดจะปฏิเสธการติดตั้งโดยป้อนชื่อแพ็กเกจ",
    "settingsEnvCopy": "คัดลอก",
    "settingsEnvSnapshot": "เวอร์ชันระบบ",
    "settingsEnvSnapshotDesc": "คัดลอกเวอร์ชันแอปหลักและข้อมูลระบบเพื่อแนบรายงานปัญหา",
    "settingsLogs": "บันทึกระบบ",
    "settingsLogsDesc": "บันทึกการติดตั้ง ถอนการติดตั้ง เปลี่ยนการตั้งค่า และผลตรวจสอบในเครื่อง ส่งออกบันทึกทั้งหมดเพื่อวิเคราะห์ปัญหาได้",
    "settingsMirror": "มิเรอร์ npm",
    "settingsMirrorDesc": "ค่าเริ่มต้นใช้การตั้งค่า npm ในเครื่อง หากช้าสามารถเลือกมิเรอร์ได้",
    "settingsProxy": "HTTP พร็อกซี",
    "settingsProxyDesc": "ส่งคำขอ npm, git และรายการปลั๊กอินผ่านพร็อกซีนี้ เว้นว่างเพื่อเชื่อมต่อโดยตรง",
    "settingsRegistryFallback": "เปลี่ยนมิเรอร์เมื่อเชื่อมต่อล้มเหลว",
    "settingsRegistryFallbackDesc": "เมื่อ registry สาธารณะหมดเวลาหรือถูกบล็อก จะลองมิเรอร์ถัดไป (สูงสุด 3 แห่ง) ไม่เปลี่ยน registry ที่กำหนดเองหรือภายในองค์กร เพื่อไม่ให้ชื่อแพ็กเกจส่วนตัวรั่วไหล",
    "settingsReset": "คืนค่าเริ่มต้น",
    "settingsResetConfirm": "ยืนยันคืนค่าเริ่มต้น",
    "settingsResetConfirmDetail": "คืนค่าการตั้งค่าทั้งหมดหรือไม่? นโยบายอัปเดต มิเรอร์ npm พร็อกซี และข้อจำกัดความปลอดภัยจะกลับเป็นค่าเริ่มต้นทั้งหมด",
    "settingsResetDesc": "คืนค่านโยบายอัปเดต มิเรอร์ npm พร็อกซี และข้อจำกัดความปลอดภัยเป็นค่าเริ่มต้นพร้อมกัน",
    "settingsResetDetail": "คืนค่านโยบายอัปเดต มิเรอร์ npm พร็อกซี และข้อจำกัดความปลอดภัยเป็นค่าเริ่มต้น",
    "settingsResetRun": "คืนค่าเริ่มต้น",
    "settingsSecurity": "ความปลอดภัยและความเชื่อถือ",
    "settingsSecurityDesc": "ควบคุมการติดตั้งแพ็กเกจ npm ผ่านบรรทัดคำสั่ง",
    "settingsUpdate": "การตั้งค่าอัปเดต",
    "settingsUpdateDesc": "การตรวจอัปเดตและช่องทางเครือข่ายที่ใช้ติดตั้ง",
    "sortAria": "ลำดับการเรียงปลั๊กอิน",
    "sortByLabel": "เรียงตาม",
    "sortForks": "จำนวนฟอร์ก",
    "sortInstalledAt": "ล่าสุด",
    "sortName": "ชื่อ",
    "sortNewest": "เพิ่มล่าสุด",
    "sortStars": "จำนวนดาว",
    "sortUpdated": "อัปเดตล่าสุด",
    "statusInactive": "ยังไม่ทำงาน (แอปหลักโหลดไม่สำเร็จ อาจไม่ใช่ปลั๊กอิน dsh ที่ถูกต้อง)",
    "statusLabel": "สถานะ",
    "statusPending": "รอเริ่มใหม่",
    "statusRunning": "กำลังทำงาน",
    "tagline": "DSH Plugin Hub: ตลาดปลั๊กอินฟรีสำหรับ DeepSeek Harness ที่ตรวจสอบโดยผู้ดูแล",
    "title": "DSH Plugin Hub",
    "toastCopied": "คัดลอกคำสั่งติดตั้งแล้ว วางในเทอร์มินัล dsh ได้เลย",
    "toastInstalledLive": "ติดตั้งแล้ว และทำงานทันที",
    "toastInstalledReload": "ติดตั้งแล้ว กำลังรีเฟรชหน้าอัตโนมัติ…",
    "toastRestartDesktop": "ในแอปเดสก์ท็อป แอปเป็นผู้จัดการโฮสต์ โปรดเลือกออกจากเมนูแอปหรือถาดระบบแล้วเปิดใหม่ การเปลี่ยนแปลงจะมีผลหลังจากนั้น",
    "today": "อัปเดตวันนี้",
    "toggleLangHint": "เปลี่ยนภาษา",
    "uninstall": "ถอนการติดตั้ง",
    "uninstallConfirm": "ยืนยันถอนการติดตั้ง",
    "uninstallDesc": "ปลั๊กอินจะถูกนำออกจากสภาพแวดล้อมนี้",
    "uninstallDone": "ถอนการติดตั้งแล้ว",
    "uninstallFail": "ถอนการติดตั้งไม่สำเร็จ โปรดลองอีกครั้ง",
    "uninstallResultDesc": "นำปลั๊กอินออกจากสภาพแวดล้อมนี้แล้ว",
    "uninstallResultTitle": "ถอนการติดตั้งแล้ว",
    "uninstallTitle": "ยืนยันถอนการติดตั้งหรือไม่?",
    "uninstalling": "กำลังถอนการติดตั้ง…",
    "update": "อัปเดต",
    "updateAvailable": "มีอัปเดต",
    "updateAvailableHint": "ตรวจพบอัปเดต: ที่เก็บโค้ดที่มีรุ่นเผยแพร่จะเทียบแท็ก ส่วนที่ไม่มีจะเทียบเวลาส่งโค้ดล่าสุด",
    "updateDone": "อัปเดตแล้ว",
    "updateNoticeGo": "อัปเดต",
    "updateNoticeTitle": "มีอัปเดต",
    "updateNow": "อัปเดต",
    "updatePending": "อัปเดตได้หลัง {time}",
    "updatePendingHint": "รุ่นใหม่เผยแพร่ยังไม่ครบ 24 ชั่วโมง จึงถูกระงับชั่วคราวโดยนโยบายความปลอดภัยซัพพลายเชนของ pnpm",
    "updateResultDesc": "อัปเดตปลั๊กอินเป็นเวอร์ชันล่าสุดแล้ว",
    "updateResultTitle": "อัปเดตแล้ว",
    "updating": "กำลังอัปเดต…",
    "verified": "ตรวจสอบแล้ว",
    "version": "เวอร์ชัน",
    "versionHint": "ดูข้อมูลเวอร์ชันและรายการเปลี่ยนแปลง",
    "versionUpHint": "มีอัปเดต v{from} → v{to} กด “อัปเดต” เพื่อติดตั้งทับเวอร์ชันเดิม",
    "viewCustom": "ติดตั้งเอง",
    "viewCustomHint": "ติดตั้งแพ็กเกจ npm ด้วยตนเอง",
    "viewInstalled": "ติดตั้งแล้ว",
    "viewInstalledHint": "จัดการปลั๊กอินที่ติดตั้งแล้ว",
    "viewMarket": "ตลาดปลั๊กอิน",
    "viewMarketHint": "เรียกดูและค้นหาปลั๊กอิน",
    "viewSettings": "ตั้งค่า",
    "viewSettingsHint": "แหล่งดาวน์โหลดและการตั้งค่า",
    "yearsAgo": "อัปเดต {years} ปีก่อน"
  },
  "entryCustomization": {
    "create": "สร้างปลั๊กอินของคุณ",
    "createPrompt.conversation": "สร้างปลั๊กอินมุมมองการสนทนา DSH",
    "createPrompt.rightbar": "สร้างปลั๊กอิน DSH ที่มีรายการในแถบด้านขวา",
    "createPrompt.sidebar": "สร้างปลั๊กอิน DSH ที่มีรายการในแถบด้านซ้าย",
    "install": "ดูปลั๊กอินอื่น",
    "pin": "ปักหมุด {name} ในแถบด้านข้าง",
    "pinTooltip": "ปักหมุดในแถบด้านซ้าย"
  },
  "feedback": {
    "action.dislike": "คำตอบที่ไม่ดี",
    "action.dislikeActive": "ลบคะแนน",
    "action.like": "คำตอบที่ดี",
    "action.likeActive": "ลบคะแนน",
    "category.instruction-following": "การเข้าใจและทำตามคำสั่ง",
    "category.other": "อื่น ๆ",
    "category.product-interaction": "คุณสมบัติและการโต้ตอบของผลิตภัณฑ์",
    "category.resource-cost": "การใช้ทรัพยากรและค่าใช้จ่าย",
    "category.security-privacy-permission": "ความปลอดภัย ความเป็นส่วนตัว และสิทธิ์",
    "category.service-stability": "ความเสถียรและความเร็ว",
    "category.task-result": "ผลลัพธ์ของงาน",
    "dialog.categories": "หมวดข้อเสนอแนะ",
    "dialog.detail": "รายละเอียดข้อเสนอแนะ",
    "dialog.hint": "เพิ่มรายละเอียดเพื่อช่วยเราปรับปรุง การส่งจะรวมบันทึกการสนทนาปัจจุบันด้วย",
    "dialog.title": "ส่งข้อเสนอแนะ",
    "error.conflict": "ข้อเสนอแนะนี้เปลี่ยนจากที่อื่น กำลังแสดงสถานะล่าสุด",
    "error.generic": "บันทึกข้อเสนอแนะไม่ได้",
    "error.load": "โหลดข้อเสนอแนะไม่ได้",
    "error.noteTooLarge": "คำอธิบายยาวเกินไป ย่อให้สั้นแล้วส่งอีกครั้ง",
    "toast.recorded": "ขอบคุณสำหรับข้อเสนอแนะ"
  },
  "fileActions": {
    "menu.copied": "คัดลอกแล้ว",
    "menu.copyFailed": "คัดลอกไม่ได้ ตรวจสอบว่าเนื้อหาพร้อมใช้งานแล้วลองอีกครั้ง",
    "menu.copyImage": "คัดลอกภาพ",
    "menu.download": "ดาวน์โหลด",
    "menu.downloadStarted": "เริ่มดาวน์โหลดแล้ว",
    "menu.downloaded": "ดาวน์โหลดเสร็จแล้ว",
    "menu.finder": "แสดงใน Finder",
    "menu.reveal": "แสดงในโฟลเดอร์",
    "menu.saveAs": "บันทึกเป็น…",
    "menu.saveFailed": "บันทึกไม่ได้ ตรวจสอบต้นทางและปลายทางแล้วลองอีกครั้ง",
    "menu.saved": "บันทึกแล้ว",
    "path.revealError": "แสดงตำแหน่งไฟล์ไม่ได้ โปรดลองอีกครั้ง"
  },
  "fileDrag": {
    "failed": "ลากไม่สำเร็จ โปรดลองอีกครั้ง"
  },
  "goal": {
    "action.cancel": "ยกเลิกการแก้ไข",
    "action.clear": "ล้างเป้าหมาย",
    "action.edit": "แก้ไขเป้าหมาย",
    "action.pause": "พักเป้าหมาย",
    "action.resume": "ดำเนินเป้าหมายต่อ",
    "action.save": "บันทึกเป้าหมาย",
    "commandInput.aria": "ช่องคำสั่ง",
    "objective.aria": "วัตถุประสงค์ของเป้าหมาย",
    "phase.active": "เป้าหมายที่กำลังดำเนินการ",
    "phase.active.disarmed": "เป้าหมายที่ยังไม่ทำงาน",
    "phase.blocked": "เป้าหมายที่ติดขัด",
    "phase.paused": "เป้าหมายที่พักไว้"
  },
  "job": {
    "count.idle.one": "งานเบื้องหลัง {count} งาน",
    "count.idle.other": "งานเบื้องหลัง {count} งาน",
    "duration.hours": "{hours} ชม. {minutes} นาที",
    "duration.minutes": "{minutes} นาที {seconds} วิ.",
    "duration.seconds": "{seconds} วิ.",
    "duration.title.done": "ใช้เวลา {duration}",
    "duration.title.live": "ทำงานมาแล้ว {duration}",
    "kill.confirm": "คลิกอีกครั้งเพื่อยืนยัน",
    "kill.confirmAction": "ยืนยันการหยุด",
    "kill.failed": "หยุดไม่สำเร็จ",
    "kill.stop": "หยุดงาน {label}",
    "list.aria": "งานเบื้องหลัง",
    "output.error": "สตรีมผลลัพธ์สดถูกขัดจังหวะ: {error}",
    "output.gap": "… ผลลัพธ์ก่อนหน้าถูกละทิ้ง …",
    "row.collapseAria": "ซ่อนผลลัพธ์สดของ {label}",
    "row.expandAria": "แสดงผลลัพธ์สดของ {label}",
    "section.clear": "ล้าง",
    "section.live": "กำลังทำงาน",
    "section.settledCount": "เสร็จแล้ว {count}",
    "status.completed": "เสร็จแล้ว",
    "status.failed": "ล้มเหลว",
    "status.killed": "ยกเลิกแล้ว",
    "status.running": "กำลังทำงาน",
    "status.stopping": "กำลังหยุด",
    "terminal.collapse": "ยุบ",
    "terminal.collapseAria": "ยุบผลลัพธ์",
    "terminal.commandLine": "บรรทัดคำสั่ง {n}",
    "terminal.copied": "คัดลอกแล้ว",
    "terminal.copy": "คัดลอก",
    "terminal.done": "เสร็จแล้ว",
    "terminal.exitCode": "รหัสออก {code}",
    "terminal.expand": "แสดงอีก {n} บรรทัด",
    "terminal.expandAria": "ขยายผลลัพธ์ที่ยุบไว้ {n} บรรทัด",
    "terminal.failed": "ล้มเหลว",
    "terminal.noExitCode": "ไม่มีรหัสออก",
    "terminal.noOutput": "(ไม่มีผลลัพธ์)",
    "terminal.running": "กำลังทำงาน",
    "terminal.signal": "สัญญาณ {signal}"
  },
  "model": {
    "action.reload": "โหลดใหม่",
    "command.description": "เลือกโมเดลสำหรับการสนทนานี้",
    "command.label": "โมเดล",
    "effort.providerDefault": "ค่าเริ่มต้น",
    "empty.efforts": "โมเดลนี้ไม่มีระดับการใช้เหตุผลให้เลือก",
    "empty.models": "ไม่มีโมเดลที่พร้อมใช้งาน",
    "error.action": "ดำเนินการกับโมเดลไม่สำเร็จ: {message}",
    "error.sessionInUse": "เซสชันนี้ถูกใช้อยู่ อาจเป็น DSH อีกอินสแตนซ์หนึ่งที่กำลังทำงาน (เช่น dsh web หรือแอปเดสก์ท็อป) ปิดอินสแตนซ์ DSH อื่นแล้วลองอีกครั้ง",
    "menu.aria": "โมเดลและระดับการใช้เหตุผล",
    "menu.effort": "ระดับการใช้เหตุผล",
    "menu.model": "โมเดล",
    "option.loadError": "โหลดรายการไม่สำเร็จ: {message}",
    "provider.account": "บัญชี DeepSeek",
    "search.clear": "ล้างการค้นหา",
    "search.empty": "ไม่มีโมเดลที่ตรงกัน",
    "search.placeholder": "ค้นหาโมเดล…",
    "status.loading": "กำลังรีเฟรชรายการโมเดล…",
    "trigger.aria": "เลือกโมเดล ปัจจุบันคือ {model}",
    "trigger.ariaEffort": "เลือกโมเดล ปัจจุบันคือ {model} ระดับการใช้เหตุผล {effort}",
    "trigger.fallback": "เลือกโมเดล",
    "trigger.loading": "กำลังโหลดโมเดล…",
    "trigger.selectAria": "เลือกโมเดล",
    "warning.groupLoad": "โหลด {name} ไม่สำเร็จ: {message}"
  },
  "open-in-app": {
    "app.androidstudio": "Android Studio",
    "app.cursor": "Cursor",
    "app.explorer": "File Explorer",
    "app.filemanager": "ไฟล์",
    "app.finder": "Finder",
    "app.fork": "Fork",
    "app.ghostty": "Ghostty",
    "app.gitbash": "Git Bash",
    "app.github": "GitHub Desktop",
    "app.gitkraken": "GitKraken",
    "app.gnometerminal": "GNOME Terminal",
    "app.goland": "GoLand",
    "app.intellij": "IntelliJ IDEA",
    "app.iterm": "iTerm2",
    "app.kitty": "kitty",
    "app.konsole": "Konsole",
    "app.phpstorm": "PhpStorm",
    "app.pycharm": "PyCharm",
    "app.rider": "Rider",
    "app.rustrover": "RustRover",
    "app.smartgit": "SmartGit",
    "app.sourcetree": "Sourcetree",
    "app.sublimemerge": "Sublime Merge",
    "app.sublimetext": "Sublime Text",
    "app.terminal": "เทอร์มินัล",
    "app.tower": "Tower",
    "app.vscode": "VS Code",
    "app.vscodeinsiders": "VS Code Insiders",
    "app.warp": "Warp",
    "app.webstorm": "WebStorm",
    "app.windowsterminal": "Windows Terminal",
    "app.windsurf": "Windsurf",
    "app.xcode": "Xcode",
    "app.zed": "Zed",
    "menu.copied": "คัดลอกแล้ว",
    "menu.copyDirectoryPath": "คัดลอกเส้นทางโฟลเดอร์",
    "menu.copyFailed": "คัดลอกไม่ได้ ตรวจสอบว่าเนื้อหาพร้อมใช้งานแล้วลองอีกครั้ง",
    "menu.copyLink": "คัดลอกที่อยู่ลิงก์",
    "menu.copyPath": "คัดลอกเส้นทางไฟล์",
    "menu.defaultApp": "เปิดในแอปเริ่มต้น",
    "menu.external": "เปิดในเบราว์เซอร์ภายนอก",
    "menu.finder": "แสดงใน Finder",
    "menu.openIn": "เปิดด้วย",
    "menu.openInFloat": "เปิดในแผงลอย",
    "menu.openInSidebar": "เปิดในแถบด้านข้าง",
    "menu.reveal": "แสดงในโฟลเดอร์",
    "open.title": "เปิดใน {app}",
    "open.tooltip": "เปิดในเครื่อง",
    "path.appDefault": "{app} (ค่าเริ่มต้น)",
    "path.appsError": "โหลดแอปไม่ได้",
    "path.more": "วิธีเปิดเพิ่มเติม",
    "path.open": "เปิด",
    "path.openError": "เปิดไม่ได้ โปรดลองอีกครั้ง",
    "path.opened": "เปิดบนอุปกรณ์อื่นแล้ว",
    "path.reveal": "แสดงตำแหน่งไฟล์",
    "path.revealError": "แสดงตำแหน่งไฟล์ไม่ได้ โปรดลองอีกครั้ง",
    "path.revealed": "แสดงตำแหน่งไฟล์บนอุปกรณ์อื่นแล้ว",
    "shortcut.busy": "กำลังเปิดพื้นที่ทำงาน",
    "shortcut.unavailable": "พื้นที่ทำงานปัจจุบันหรือแอปในเครื่องไม่พร้อมใช้งาน"
  },
  "permission.access": {
    "auto.badge": "ทดลอง",
    "auto.confirm.acknowledge": "ฉันเข้าใจความเสี่ยงเหล่านี้และต้องการดำเนินการต่อ",
    "auto.confirm.description": "การตรวจทานอัตโนมัติทำงานโดยไม่มีแซนด์บ็อกซ์ ก่อนการเรียกเครื่องมือเนทีฟและการเรียกภายใน PTC ทุกครั้ง โมเดลเดียวกับเอเจนต์ปัจจุบันจะตรวจทานว่าควรอนุญาตหรือไม่ คุณจะเป็นผู้อนุมัติหรือปฏิเสธแต่ละการเรียกที่โมเดลไม่อนุญาต ฟีเจอร์นี้อยู่ระหว่างทดลอง อาจอนุญาตหรือปฏิเสธผิดพลาด และใช้โทเค็นเพิ่ม",
    "auto.confirm.enable": "เปิดการตรวจทานอัตโนมัติ",
    "auto.confirm.title": "เปิดการตรวจทานอัตโนมัติ (ทดลอง)?",
    "auto.description": "ทำงานโดยไม่มีแซนด์บ็อกซ์ หลังโมเดลเดียวกันตรวจทานการเรียกเครื่องมือเนทีฟและการเรียกภายใน PTC ทุกครั้ง ฟีเจอร์นี้อยู่ระหว่างทดลอง",
    "auto.label": "ตรวจทานอัตโนมัติ",
    "close": "ปิด",
    "confirm.acknowledge": "ฉันเข้าใจความเสี่ยงและต้องการดำเนินการต่อ",
    "confirm.cancel": "ยกเลิก",
    "confirm.description": "การเข้าถึงเต็มรูปแบบช่วยลดขั้นตอนยืนยันและให้เอเจนต์ดำเนินการได้โดยตรงมากขึ้น รวมถึงการดำเนินการที่อ่อนไหว การเปลี่ยนไฟล์ หรือคำสั่งภายนอก ใช้เฉพาะเมื่อคุณไว้วางใจงานปัจจุบันเท่านั้น",
    "confirm.enable": "เปิดการเข้าถึงเต็มรูปแบบ",
    "confirm.title": "เปิดการเข้าถึงเต็มรูปแบบ?",
    "mode": "โหมดการเข้าถึง ปัจจุบัน: {name}",
    "preset.fullAccess": "เข้าถึงเต็มรูปแบบ",
    "preset.readOnly": "อ่านอย่างเดียว",
    "preset.workspaceWrite": "เขียนในพื้นที่ทำงาน"
  },
  "plan": {
    "chip.exitFailed": "ออกจากโหมดวางแผนไม่สำเร็จ",
    "chip.label": "แผน",
    "chip.on.aria": "เปิดโหมดวางแผนอยู่ กดเพื่อปิด",
    "chip.on.title": "เปิดโหมดวางแผนอยู่ คลิกเพื่อปิด (/plan off)",
    "preview.action": "เปิด",
    "preview.document": "แผน · Markdown",
    "preview.expired": "ตัวอย่างแผนชั่วคราวนี้หมดอายุแล้ว เปิดอีกครั้งจากการ์ดรอตรวจทาน",
    "preview.failed": "โหลดแผนไม่ได้",
    "preview.full": "ดูแผนทั้งหมด",
    "preview.invalidAddress": "ที่อยู่แผนไม่ถูกต้อง",
    "preview.loading": "กำลังโหลดแผน…",
    "preview.notFound": "ไม่พบแผนนี้",
    "preview.open": "เปิดแผนในแถบด้านข้าง",
    "preview.openNamed": "เปิดแผน: {title}",
    "preview.title": "แผน",
    "preview.unavailable": "ตัวอย่างแผนไม่พร้อมใช้งาน"
  },
  "pluginManager": {
    "addPlugin": "เพิ่มปลั๊กอิน",
    "applyingChange": "กำลังใช้การเปลี่ยนแปลงกับ {name}",
    "backToList": "กลับไปที่ปลั๊กอิน",
    "backToPackage": "กลับไปที่ {name}",
    "basicTitle": "การตั้งค่าปลั๊กอินในตัว",
    "bundlesTitle": "ปลั๊กอินที่ติดตั้ง",
    "cancel": "ยกเลิก",
    "chooseAddMethod": "เลือกวิธีเพิ่มปลั๊กอิน",
    "close": "ปิด",
    "configureRow": "ตั้งค่า {name}",
    "confirmUninstall": "ถอนการติดตั้ง",
    "confirmUninstallDescription": "ความสามารถที่ปลั๊กอินนี้ให้จะหายไปเมื่อถอนการติดตั้ง",
    "confirmUninstallTitle": "ถอนการติดตั้ง \"{name}\" หรือไม่?",
    "crumbRoot": "ปลั๊กอิน",
    "detailFailed": "อ่านรายละเอียดไม่ได้",
    "detailFootnotes": "เชิงอรรถ",
    "detailInvalid": "ปลั๊กอินระบุไฟล์รายละเอียดไม่ถูกต้อง",
    "detailLoading": "กำลังอ่านรายละเอียด",
    "detailNetwork": "เชื่อมต่อแหล่งรายละเอียดไม่ได้",
    "detailTitle": "รายละเอียด",
    "detailTooLarge": "รายละเอียดเกินขีดจำกัดขนาด จึงไม่ได้โหลด",
    "empty": "ยังไม่ได้ติดตั้งปลั๊กอิน",
    "enableToggle": "เปิดใช้งาน {name}",
    "error": "อ่านปลั๊กอินทั้งหมดไม่ได้ อาจเกิดจากปัญหาเครือข่าย",
    "extensionsTitle": "ปลั๊กอินทดลอง",
    "failedDisable": "ปิดใช้งานไม่ได้: {reason}",
    "failedEnable": "เปิดใช้งานไม่ได้: {reason}",
    "failedRowDisable": "ปิดส่วนประกอบไม่ได้: {reason}",
    "failedRowEnable": "เปิดส่วนประกอบไม่ได้: {reason}",
    "failedUninstall": "ถอนการติดตั้งไม่ได้: {reason}",
    "infoDescription": "ตั้งค่าปลั๊กอินทางการ ติดตั้งหรือจัดการปลั๊กอินอื่นได้ที่นี่ ดูรายการปลั๊กอินในตัวและสถานะการทำงานได้ที่ การตั้งค่า → ปลั๊กอินในตัว",
    "infoLabel": "เกี่ยวกับปลั๊กอิน",
    "installApplying": "กำลังใช้การตั้งค่า โปรดรอ…",
    "installApplyingCancellationError": "ยังยืนยันการยกเลิกไม่ได้ กำลังใช้การติดตั้ง โปรดรอผล {reason}",
    "installApprovalCaution": "อนุญาตเฉพาะแพ็กเกจที่ไว้ใจ",
    "installApprovalConsequence": "เมื่ออนุญาต สคริปต์จะทำงานที่นี่ด้วยสิทธิ์ของคุณ และสิทธิ์อนุญาตจะบันทึกในโปรไฟล์นี้",
    "installApprovalDescription": "แพ็กเกจเหล่านี้มีสคริปต์ติดตั้งที่ pnpm ยังไม่ได้เรียกใช้",
    "installApprovalTitle": "สคริปต์ติดตั้งต้องได้รับอนุญาต",
    "installApproveAndRetry": "อนุญาตสคริปต์เหล่านี้แล้วลองอีกครั้ง",
    "installAttempt": "{previous} ให้แพ็กเกจไม่ได้ กำลังลองผ่าน {registry} (รีจิสทรี {index} จาก {total})",
    "installAttemptBadge": "ครั้งที่ {index} · {registry}",
    "installAwaitingAcceptance": "กำลังรอโฮสต์ยอมรับการติดตั้ง จะลองยกเลิกอัตโนมัติหลังได้รับการยืนยัน",
    "installBackgroundApplying": "กำลังใช้การติดตั้งและยกเลิกไม่ได้ ดูความคืบหน้าการติดตั้ง",
    "installBackgroundDone": "ติดตั้งเสร็จแล้ว ดูรายละเอียดการติดตั้ง",
    "installBackgroundFailed": "ติดตั้งไม่สำเร็จ ดูรายละเอียดการติดตั้ง",
    "installBackgroundUnconfirmed": "ยังยืนยันสถานะการติดตั้งไม่ได้ ดูรายละเอียดในการติดตั้ง",
    "installBackgroundUnknown": "ผลการติดตั้งไม่พร้อมใช้งาน ตรวจสอบรายการปลั๊กอิน",
    "installBundledDescription": "เปิดใช้งานได้โดยไม่ต้องดาวน์โหลดอีกชุด",
    "installBundledTitle": "ปลั๊กอินนี้มากับ DSH",
    "installCancel": "ยกเลิกการติดตั้ง",
    "installCancelAndEdit": "ยกเลิกการติดตั้งและกลับไปแก้ไข",
    "installCancelUnconfirmed": "ยังยืนยันไม่ได้ว่าหยุดติดตั้งแล้ว ลองยกเลิกอีกครั้งหรือรอผลการติดตั้ง {reason}",
    "installCancelled": "ยกเลิกการติดตั้งแล้ว ปลั๊กอินไม่ได้เปิดใช้งาน และไฟล์ที่ดาวน์โหลดอาจยังอยู่",
    "installCancelledShort": "ยกเลิกแล้ว",
    "installCancelling": "กำลังหยุดการติดตั้ง…",
    "installChangeRegistry": "เปลี่ยนรีจิสทรี",
    "installChecking": "กำลังตรวจสอบ…",
    "installClose": "เสร็จแล้ว",
    "installCloseCancels": "ยกเลิกการติดตั้งและปิด",
    "installConfirmedRefused": "ติดตั้งปลั๊กอินนี้ไม่ได้",
    "installConfirmedTitle": "ติดตั้งปลั๊กอิน",
    "installDescription": "ป้อนชื่อแพ็กเกจปลั๊กอิน ที่อยู่ที่เก็บ GitHub หรือเส้นทางไดเรกทอรีในเครื่อง",
    "installDetailsHide": "ซ่อนรายละเอียดการติดตั้ง",
    "installDetailsNoOutput": "ไม่มีผลลัพธ์เทอร์มินัลจากการติดตั้งนี้ส่งมาถึงหน้ารายละเอียด",
    "installDetailsShow": "แสดงรายละเอียดการติดตั้ง",
    "installDoneApproved": "อนุญาตสคริปต์ติดตั้งสำหรับ {names} แล้ว",
    "installDoneNothing": "ติดตั้งเสร็จโดยไม่มีแพ็กเกจที่ต้องใช้ร่วมใหม่",
    "installDoneOtherVersion": "ตามนโยบายความปลอดภัยซัพพลายเชนของ pnpm (minimumReleaseAge) เวอร์ชันที่เผยแพร่ใหม่กว่าอายุขั้นต่ำจะไม่ถูกติดตั้งอัตโนมัติ การติดตั้งนี้จึงใช้ {installed} แทนเวอร์ชันล่าสุด {version} เวอร์ชันที่เพิ่งเผยแพร่ยังไม่พ้นช่วงรอและอาจมีโค้ดอันตรายหรือข้อบกพร่องที่ยังไม่พบ หากต้องการ {version} ให้ถอนเวอร์ชันปัจจุบันแล้วติดตั้ง {exact} เพื่อระบุเวอร์ชันนั้น",
    "installDoneRestart": "ติดตั้งแล้ว เริ่ม DSH ใหม่เพื่อโหลด {reason}",
    "installEdit": "แก้ไข",
    "installEditAria": "กลับไปแก้ไข",
    "installEnableNow": "เปิดใช้งานตอนนี้",
    "installExisting": "ติดตั้งปลั๊กอินจากภายนอก",
    "installExistingDescription": "รองรับแพ็กเกจ npm ที่เก็บ Git และไดเรกทอรีในเครื่อง",
    "installFailedEnabling": "ติดตั้งเสร็จแล้ว แต่เปิดใช้งานปลั๊กอินไม่สำเร็จ",
    "installFailedTitle": "ติดตั้งปลั๊กอินไม่ได้",
    "installFailureBuildBlocked": "สคริปต์ติดตั้งของแพ็กเกจที่ต้องใช้ร่วมต้องได้รับอนุญาตก่อนติดตั้งต่อ",
    "installFailureBuildBlockedManual": "pnpm บล็อกสคริปต์ติดตั้ง อนุญาตภายใต้ allowBuilds ใน pnpm-workspace.yaml แล้วลองอีกครั้ง",
    "installFailureDiskFull": "ดิสก์เต็ม การติดตั้งหยุดแล้ว",
    "installFailureGeneric": "คำสั่งติดตั้งล้มเหลว ดูเหตุผลในรายละเอียด",
    "installFailureIntegrity": "แพ็กเกจที่ดาวน์โหลดไม่ผ่านการตรวจความสมบูรณ์",
    "installFailureNetwork": "เชื่อมต่อเครือข่ายไม่สำเร็จ",
    "installFailureNetworkAll": "เชื่อมต่อรีจิสทรีไม่ได้ทั้งหมด (ลองแล้ว: {registries}) ตรวจสอบเครือข่ายหรือพร็อกซี หรือเปลี่ยนรีจิสทรีแล้วลองอีกครั้ง",
    "installFailureNetworkHost": "เชื่อมต่อ {host} ไม่ได้ ที่อยู่ GitHub หรือลิงก์ .tgz ไม่ได้ดาวน์โหลดผ่านรีจิสทรี เครื่องนี้ต้องเข้าถึงโดยตรงหรือผ่านพร็อกซี หากปลั๊กอินเผยแพร่บน npm ด้วย ให้ป้อนชื่อแพ็กเกจแทน",
    "installFailureNoMatchingVersion": "ไม่มีเวอร์ชันที่ตรงกับคำขอ",
    "installFailureNotFound": "ไม่พบปลั๊กอินนี้",
    "installFailurePermission": "ไม่มีสิทธิ์เขียน จึงติดตั้งปลั๊กอินไม่ได้",
    "installFailurePnpmMissing": "ไม่พบ pnpm จึงติดตั้งไม่ได้",
    "installFailureTimeout": "การติดตั้งหมดเวลา",
    "installGitTemplateHint": "แทนที่ด้วยที่อยู่ที่เก็บ Git จริง",
    "installGithubFailedDescription": "ลองแหล่งติดตั้งอื่น",
    "installGithubFailedTitle": "เข้าถึง GitHub ไม่ได้",
    "installGithubTimeoutTitle": "การเชื่อมต่อ GitHub หมดเวลา",
    "installGuideExampleLabel": "ตัวอย่าง: ",
    "installGuideFill": "ใช้ตัวอย่าง",
    "installGuideFillAria": "ใช้ตัวอย่าง {example}",
    "installGuideHide": "ซ่อนคู่มือ",
    "installGuideIdExample": "dsh-plugin-whale-pet",
    "installGuideIdHint": "ชื่อแพ็กเกจปลั๊กอินคือชื่อแพ็กเกจ npm (เช่น dsh-xxx หรือ @author/plugin) ซึ่งเป็นส่วนหลัง dsh plugin add หรือ pnpm add ในคำสั่งติดตั้งของ README ปลั๊กอินชุมชน",
    "installGuideIdTitle": "ป้อนชื่อแพ็กเกจ npm ของปลั๊กอิน",
    "installGuideSafety": "ติดตั้งเฉพาะปลั๊กอินที่ไว้ใจ ปลั๊กอินทำงานด้วยสิทธิ์ของคุณและอาจทำให้ DeepSeek Harness เสียหายหรือข้อมูลรั่วไหล",
    "installGuideToggle": "คู่มือติดตั้งและตัวอย่าง",
    "installLocation": "ติดตั้งใน {dir}",
    "installLogPath": "บันทึกทั้งหมด: {path}",
    "installPackageLabel": "ชื่อแพ็กเกจปลั๊กอิน",
    "installPathTemplateHint": "แทนที่ด้วยเส้นทางไดเรกทอรีปลั๊กอินในเครื่องจริง",
    "installProblemInstalled": "ติดตั้งปลั๊กอินนี้แล้ว หากต้องการอัปเกรด ให้ถอนแล้วติดตั้งอีกครั้ง",
    "installProblemInvalid": "นี่ไม่ใช่ชื่อแพ็กเกจหรือที่อยู่ที่ติดตั้งได้: {reason}",
    "installProblemNetwork": "เชื่อมต่อรีจิสทรีปลั๊กอินไม่ได้ ตรวจสอบเครือข่ายแล้วลองอีกครั้ง",
    "installProblemNetworkAll": "เชื่อมต่อรีจิสทรีไม่ได้ทั้งหมด (ลองแล้ว: {registries}) ตรวจสอบเครือข่ายหรือพร็อกซี หรือเปลี่ยนรีจิสทรี",
    "installProblemNotBundle": "แพ็กเกจนี้ไม่ได้ประกาศบันเดิล จึงติดตั้งเป็นปลั๊กอินไม่ได้: {reason}",
    "installProblemNotFound": "ไม่พบปลั๊กอินนี้",
    "installProblemNotPackage": "ไม่มีเส้นทางนี้หรือไม่ใช่แพ็กเกจปลั๊กอินที่ถูกต้อง",
    "installProblemShipped": "ปลั๊กอินนี้มากับ DSH และจะอัปเดตเมื่ออัปเกรด DSH",
    "installProblemUnknown": "ค้นหาข้อมูลปลั๊กอินไม่ได้: {reason}",
    "installReconcile": "ตรวจสอบสถานะการติดตั้ง",
    "installResultUnconfirmed": "ยังไม่ได้รับผลการติดตั้ง ตรวจสอบสถานะการติดตั้ง {reason}",
    "installRetry": "ลองอีกครั้ง",
    "installRun": "ติดตั้ง",
    "installSpecLabel": "ชื่อแพ็กเกจหรือที่อยู่",
    "installSpecPlaceholder": "เช่น dsh-plugin-whale-pet",
    "installStarting": "กำลังเตรียมติดตั้ง…",
    "installSubjectGit": "ที่เก็บ Git",
    "installSubjectPath": "ไดเรกทอรีในเครื่อง",
    "installSubjectTarball": "ทาร์บอล",
    "installTitle": "เพิ่มปลั๊กอิน",
    "installTryAnotherWay": "ลองวิธีอื่น",
    "installUnconfirmedTitle": "ยังยืนยันสถานะการติดตั้งไม่ได้",
    "installUnknownDescription": "โฮสต์ไม่มีการติดตั้งที่กำลังทำงานด้วย ID คำขอนี้ ตรวจสอบรายการปลั๊กอินก่อนลองอีกครั้ง",
    "installUnknownTitle": "ผลการติดตั้งไม่พร้อมใช้งาน",
    "installUpgradeNotice": "ปลั๊กอินทางการแบบติดตั้งตามต้องการจะแสดงอัปเดตเมื่อเวอร์ชันต่างจาก DSH หากต้องการอัปเดตปลั๊กอินอื่น ให้ถอนแล้วติดตั้งใหม่",
    "installUseGithubMirror": "ใช้มิเรอร์จีนแผ่นดินใหญ่",
    "installVersion": "เวอร์ชัน {version}",
    "installViewTask": "ดูการติดตั้ง",
    "installedTab": "ติดตั้งแล้ว",
    "installedTitle": "ติดตั้งแล้ว",
    "installingTitle": "กำลังติดตั้งปลั๊กอิน…",
    "intro": "ติดตั้ง เปิดใช้งาน และตั้งค่าปลั๊กอิน",
    "loading": "กำลังอ่านปลั๊กอิน…",
    "metadataError": "ข้อมูลเมตาแพ็กเกจผิดพลาด: {error}",
    "moreAction": "เพิ่มเติม",
    "moreTitle": "ปลั๊กอินทดลอง",
    "openDetail": "ดู {name}",
    "overriddenNotice": "บันทึก {name} แล้ว แต่การตั้งค่าที่สำคัญกว่าทับอยู่ จึงยังไม่มีผล",
    "panel": "ปลั๊กอิน",
    "partOff": "ปิด",
    "partToggle": "เปิดส่วนประกอบ {name}",
    "partsCountFailed": "ล้มเหลว {count}",
    "partsCountOff": "ปิด {count}",
    "partsCountRunning": "กำลังทำงาน {count}",
    "partsCountTotal": "รวม {count}",
    "partsEmpty": "ชุดปลั๊กอินนี้ไม่มีส่วนประกอบ",
    "partsFilter": "กรองส่วนประกอบ",
    "partsFilterEmpty": "ไม่มีส่วนประกอบที่ตรงกัน",
    "partsLabel": "ส่วนประกอบ",
    "reasonAlreadyInstalled": "ติดตั้งแพ็กเกจนี้แล้ว ถอนก่อนติดตั้งเวอร์ชันอื่น",
    "reasonAmbiguousInstall": "ระบุแพ็กเกจที่ติดตั้งจากการเปลี่ยนรายการแพ็กเกจที่ต้องใช้ร่วมไม่ได้",
    "reasonBundleInUse": "การตั้งค่าอื่นยังใช้ส่วนประกอบของบันเดิลนี้ ปิดส่วนประกอบเหล่านั้นก่อน",
    "reasonIncompatibleInstall": "ติดตั้งปลั๊กอินเวอร์ชันที่เข้ากันกับ DSH นี้",
    "reasonIncompatibleInstalled": "ถอนแล้วติดตั้งเวอร์ชันที่เข้ากันกับ DSH นี้",
    "reasonIncompatibleVersion": "{plugin} ไม่เข้ากันกับ DSH {runtime} (ต้องการ {requirements}) การเรียกใช้อาจทำให้แอปล่มหรือข้อมูลสูญหาย",
    "reasonIncompatibleVersionUnnamed": "ปลั๊กอินนี้ไม่เข้ากันกับ DSH เวอร์ชันที่กำลังทำงาน การเรียกใช้อาจทำให้แอปล่มหรือข้อมูลสูญหาย",
    "reasonInvalidSpec": "ป้อนชื่อแพ็กเกจหรือที่อยู่ที่ถูกต้อง",
    "reasonLabel": "เหตุผล",
    "reasonManagementRequired": "การจัดการปลั๊กอินต้องใช้สิ่งนี้ จึงปิดหรือถอนการติดตั้งไม่ได้",
    "reasonNotBundle": "แพ็กเกจนี้ไม่ได้ประกาศบันเดิล จึงจัดการเป็นปลั๊กอินไม่ได้",
    "reasonNotRemovable": "แพ็กเกจนี้ไม่ได้เป็นของโปรไฟล์ หรือการจัดการปลั๊กอินต้องใช้",
    "reasonOperationError": "โฮสต์รายงานข้อผิดพลาด",
    "reasonStaleApproval": "รายการสคริปต์รออนุมัติเปลี่ยนแล้ว ติดตั้งอีกครั้งเพื่อรีเฟรช",
    "reasonStopProfile": "โปรไฟล์นี้ทำงานโดยไม่มี HMR หยุดแล้วถอนแพ็กเกจด้วย dsh plugin",
    "reasonUnaddressable": "แพตช์โปรไฟล์ระบุรายการนี้แบบไม่ซ้ำไม่ได้",
    "reasonUnexpectedPackage": "แหล่งปลั๊กอินติดตั้งแพ็กเกจหรือเวอร์ชันอื่นจากที่ขอ ย้อนการติดตั้งแล้ว โปรดแจ้งผู้เผยแพร่ปลั๊กอินหรือผู้ดูแลดัชนี",
    "reasonUnknownPlugin": "ไม่มีปลั๊กอินนี้",
    "reasonUnsupportedPlatform": "ปลั๊กอินนี้ไม่รองรับระบบปฏิบัติการที่ใช้ DSH",
    "refresh": "รีเฟรช",
    "refreshError": "รีเฟรชไม่สำเร็จ โปรดลองอีกครั้ง",
    "registryCustom": "ที่อยู่กำหนดเอง",
    "registryCustomHint": "ป้อนที่อยู่รีจิสทรี npm ภายในหรือส่วนตัวที่ขึ้นต้นด้วย http:// หรือ https:// หากต้องเข้าสู่ระบบ ให้เก็บข้อมูลรับรองไว้ใน ~/.npmrc บนเครื่องนี้",
    "registryCustomInvalid": "ป้อนที่อยู่ที่ขึ้นต้นด้วย http:// หรือ https://",
    "registryCustomPlaceholder": "https://npm.example.com/",
    "registryDefault": "รีจิสทรีเริ่มต้น",
    "registryLegend": "รีจิสทรี npm ที่ดาวน์โหลดปลั๊กอิน",
    "registryListSeparator": ", ",
    "registryNpmmirror": "มิเรอร์จีนแผ่นดินใหญ่",
    "registryOfficial": "รีจิสทรี npm ทางการ",
    "registryToggle": "รีจิสทรี",
    "restartNotice": "เริ่ม DSH ใหม่เพื่อใช้การเปลี่ยนแปลง {reason}",
    "restartReasonHostModule": "การเปลี่ยนแปลงกระทบโมดูลที่ DSH โหลดเอง",
    "restartReasonModuleComparison": "DSH เปรียบเทียบปลั๊กอินที่โหลดกับไฟล์ไม่ได้",
    "restartReasonNoHmr": "โปรไฟล์นี้ใช้การเปลี่ยนแปลงเฉพาะตอนเริ่มต้น",
    "restartReasonPackageMoved": "แพ็กเกจที่ติดตั้งชี้ไปยังไดเรกทอรีอื่นแล้ว หรือการเปลี่ยนแปลงแทนที่แพ็กเกจที่ DSH จัดให้ ถอนการติดตั้งก่อนติดตั้งจากตำแหน่งอื่น",
    "restartReasonUnmanagedPlugin": "การเปลี่ยนแปลงกระทบปลั๊กอินที่ทำงานอยู่นอกรายการปลั๊กอิน",
    "retry": "ลองอีกครั้ง",
    "rowPhaseActive": "กำลังทำงาน",
    "rowPhaseFailed": "มีปัญหา",
    "rowPhaseLoading": "กำลังโหลด",
    "rowPhasePending": "รอสิ่งที่ต้องใช้ร่วม",
    "rowPhaseUnloading": "กำลังนำออกจากหน่วยความจำ",
    "rowStateIdle": "ไม่ทำงาน",
    "sentenceSeparator": " ",
    "sourceBuiltIn": "ในตัว",
    "sourceNotInstalled": "ยังไม่ติดตั้ง",
    "sourceSpec": "แหล่งโค้ด",
    "sourceTargetSpec": "แหล่งสำหรับ DSH นี้",
    "sourceTargetVersion": "เวอร์ชันสำหรับ DSH นี้",
    "sourceTitle": "แหล่งที่มา",
    "sourceVersion": "เวอร์ชันปัจจุบัน",
    "statusBeta": "ทดลอง",
    "statusMissingFiles": "แพ็กเกจไม่พร้อมใช้งาน",
    "statusNotInstalled": "ยังไม่ติดตั้ง",
    "statusNotRunning": "ไม่ทำงาน",
    "statusProblem": "มีปัญหา",
    "statusUpdateAvailable": "มีอัปเดต",
    "tabsLabel": "มุมมองปลั๊กอิน",
    "terminalCollapse": "ยุบ",
    "terminalCollapseAria": "ยุบผลลัพธ์",
    "terminalCommandLine": "บรรทัดคำสั่ง {n}",
    "terminalCopied": "คัดลอกแล้ว",
    "terminalCopy": "คัดลอก",
    "terminalDone": "เสร็จแล้ว",
    "terminalExitCode": "รหัสออก {code}",
    "terminalExpand": "… อีก {n} บรรทัด",
    "terminalExpandAria": "ขยายผลลัพธ์ที่เหลือ {n} บรรทัด",
    "terminalFailed": "ล้มเหลว",
    "terminalNoExitCode": "ไม่มีรหัสออก",
    "terminalNoOutput": "ไม่มีผลลัพธ์",
    "terminalRunning": "กำลังทำงาน",
    "terminalSignal": "สัญญาณ {signal}",
    "title": "ปลั๊กอิน",
    "unavailable": "การติดตั้งนี้ไม่มีโปรไฟล์ที่จัดการได้ จึงติดตั้งหรือสลับปลั๊กอินที่นี่ไม่ได้",
    "uninstall": "ถอนการติดตั้ง",
    "uninstallLabel": "ถอนการติดตั้ง {name}",
    "update": "อัปเดต",
    "updateBroken": "อัปเดตไม่สำเร็จ ปลั๊กอินไม่ได้ติดตั้งอยู่",
    "updateBrokenDetail": "ติดตั้ง {to} ไม่สำเร็จ และติดตั้ง {from} กลับไม่สำเร็จด้วย ติดตั้ง {name} อีกครั้งจากเพิ่มปลั๊กอิน",
    "updateDescription": "อัปเดตจะแทนที่ {from} ด้วย {to} ปลั๊กอินอาจหยุดชั่วครู่ หากติดตั้งไม่สำเร็จจะเก็บ {from} ไว้หรือติดตั้งอีกครั้ง",
    "updateDone": "อัปเดตเป็น {version} แล้ว",
    "updateDoneDetail": "เวอร์ชันใหม่กำลังทำงาน",
    "updateFinish": "เสร็จแล้ว",
    "updateKept": "อัปเดตเป็น {version} ไม่ได้",
    "updateKeptDetail": "ยังไม่ได้นำ {from} ออกและยังใช้งานอยู่ {reason}",
    "updateLabel": "อัปเดต {name}",
    "updateLost": "ไม่ทราบผลอัปเดต",
    "updateLostDetail": "การเชื่อมต่อ DSH ถูกขัดจังหวะ: {reason} รีเฟรชรายการปลั๊กอินเพื่อดูเวอร์ชันที่ติดตั้ง",
    "updateOutput": "แสดงผลลัพธ์การติดตั้ง",
    "updateRefused": "อัปเดตเป็น {version} ไม่ได้",
    "updateRemoveFailed": "นำ {version} ออกไม่ได้",
    "updateRestart": "ติดตั้ง {version} แล้ว จะมีผลหลังเริ่มใหม่",
    "updateRestored": "อัปเดตไม่สำเร็จ กู้คืน {version} แล้ว",
    "updateRestoredDetail": "ติดตั้ง {to} ไม่สำเร็จ ติดตั้ง {from} กลับแล้ว",
    "updateRunning": "กำลังอัปเดต",
    "updateSource": "ติดตั้งจาก",
    "updateStepChecking": "ตรวจสอบ {version}",
    "updateStepInstalling": "ติดตั้ง {version} จาก {source}",
    "updateStepRemoving": "หยุดและนำ {version} ออก",
    "updateStepRestoring": "ติดตั้ง {version} อีกครั้ง",
    "updateTitle": "อัปเดต {name}",
    "updatesAvailable": "มีอัปเดต: {count}",
    "updatesFailed": "ตรวจสอบปลั๊กอินบางรายการไม่ได้",
    "updatesNone": "ปลั๊กอินทั้งหมดเป็นเวอร์ชันล่าสุดแล้ว",
    "versionTag": "v{version}",
    "versionsAvailable": "มีอัปเดตเป็น {version}",
    "versionsBlocked": "เวอร์ชันใหม่กว่าต้องอัปเดต DSH",
    "versionsBlockedDetail": "{version} ต้องการ {peers} แต่ DSH นี้คือ {runtime}",
    "versionsCheckedAt": "ตรวจสอบล่าสุดเวลา {time}",
    "versionsCheckedAtLabel": "ตรวจสอบเมื่อ",
    "versionsChecking": "กำลังตรวจหาอัปเดต",
    "versionsCollapse": "ยุบ",
    "versionsDeprecatedTag": "เลิกแนะนำ",
    "versionsDetails": "รายละเอียด",
    "versionsFailedNetwork": "เชื่อมต่อรีจิสทรีไม่ได้",
    "versionsFailedOther": "ตรวจหาอัปเดตไม่ได้",
    "versionsFallbackHint": "เชื่อมต่อ {registry} ไม่ได้ รายการนี้มาจากรีจิสทรีสำรอง",
    "versionsFallbackTag": "สำรอง",
    "versionsInstalledTag": "ติดตั้งแล้ว",
    "versionsLatest": "เป็นเวอร์ชันล่าสุดแล้ว",
    "versionsNeedsDsh": "ต้องการ {peers}",
    "versionsNewerCount": "ใหม่กว่า {count} รุ่น",
    "versionsNoneInstallable": "ไม่มีเวอร์ชันใหม่กว่าที่ติดตั้งได้โดยตรง",
    "versionsNoneInstallableDetail": "เวอร์ชันใหม่กว่าเลิกแนะนำ เป็นรุ่นก่อนเผยแพร่ หรือไม่ประกาศบันเดิล ขยายเพื่อดู",
    "versionsNotBundle": "เวอร์ชันนี้ไม่ประกาศบันเดิล จึงติดตั้งไม่ได้",
    "versionsOmitted": "ไม่ได้แสดงอีก {count} เวอร์ชันที่ใหม่กว่าเวอร์ชันติดตั้ง",
    "versionsPrereleaseTag": "ก่อนเผยแพร่",
    "versionsPrimaryTag": "ลำดับแรก",
    "versionsProblemNetwork": "เชื่อมต่อไม่ได้",
    "versionsProblemNotFound": "ไม่พบ",
    "versionsProblemUnknown": "ล้มเหลว",
    "versionsPublished": "เผยแพร่ {date}",
    "versionsRecheck": "ตรวจสอบอีกครั้ง",
    "versionsRegistry": "รีจิสทรี",
    "versionsShowPrerelease": "แสดงรุ่นก่อนเผยแพร่",
    "versionsTitle": "เวอร์ชัน",
    "versionsUpdateLabel": "อัปเดตเป็น {version}"
  },
  "pluginMarket": {
    "addFirstSource": "เพิ่มแหล่งดัชนี",
    "addSource": "เพิ่ม",
    "allCategories": "ทั้งหมด",
    "backToList": "ค้นพบ",
    "cancel": "ยกเลิก",
    "categoriesLabel": "หมวดหมู่",
    "close": "ปิด",
    "confirmTitle": "ติดตั้ง \"{name}\" หรือไม่?",
    "detailDenied": "เข้าถึงที่เก็บรายละเอียดไม่ได้ ตรวจสอบข้อมูลรับรอง Git",
    "detailFailed": "อ่านรายละเอียดไม่ได้",
    "detailGitUnavailable": "รายละเอียดอยู่ในที่เก็บที่ต้องอ่านด้วย Git แต่เรียก Git ไม่ได้ ติดตั้ง Git แล้วลองอีกครั้ง",
    "detailInvalid": "ปลั๊กอินระบุไฟล์รายละเอียดไม่ถูกต้อง",
    "detailLoading": "กำลังอ่านรายละเอียด",
    "detailNetwork": "เชื่อมต่อแหล่งรายละเอียดไม่ได้",
    "detailTitle": "รายละเอียด",
    "detailTooLarge": "รายละเอียดหรือที่เก็บเกินขีดจำกัดขนาด จึงไม่ได้โหลด",
    "emptyDescription": "เพิ่มดัชนีปลั๊กอินเพื่อเรียกดูและติดตั้งปลั๊กอินที่นี่",
    "emptyIndex": "ดัชนีนี้ไม่มีปลั๊กอิน",
    "emptyTitle": "ยังไม่มีดัชนีปลั๊กอิน",
    "entryMeta": "{version} · {date}",
    "entryMetaAuthor": "{version} · {author} · {date}",
    "exempted": "เวอร์ชันนี้ไม่เข้ากันกับ DSH ที่กำลังทำงาน แต่คุณตั้งข้อยกเว้นความเข้ากันได้ไว้",
    "factAuthor": "ผู้สร้าง",
    "factCategory": "หมวดหมู่",
    "factCommit": "คอมมิต",
    "factDirectory": "ไดเรกทอรี",
    "factHomepage": "หน้าแรก",
    "factLabels": "ป้ายกำกับ",
    "factMarket": "ดัชนีปลั๊กอิน",
    "factPackage": "แพ็กเกจ",
    "factPublished": "เผยแพร่เมื่อ",
    "factRegistry": "รีจิสทรี",
    "factRepository": "ที่เก็บ",
    "factSource": "แหล่งที่มา",
    "factSourceCode": "ซอร์สโค้ด",
    "filter": "ป้ายกำกับ",
    "filterCount": "ป้ายกำกับ · {count}",
    "footnotes": "เชิงอรรถ",
    "incompatible": "เวอร์ชันนี้ไม่เข้ากันกับ DSH {runtime} ที่กำลังทำงาน ต้องการ DSH {range}",
    "install": "ติดตั้ง",
    "installTitle": "ติดตั้ง {name}",
    "installTrust": "ปลั๊กอินทำงานบนเครื่องนี้ด้วยสิทธิ์ของคุณ ตรวจสอบให้แน่ใจว่าไว้ใจแหล่งที่มา",
    "installVersionTitle": "ติดตั้ง {name} {version}",
    "loading": "กำลังอ่านดัชนี",
    "manageSources": "จัดการแหล่งดัชนี…",
    "marketMenu": "สลับดัชนีปลั๊กอิน ปัจจุบันคือ {market}",
    "noCompatibleVersion": "ไม่มีเวอร์ชันที่เข้ากันกับ DSH {runtime}",
    "noMatches": "ไม่มีปลั๊กอินที่ตรงกัน",
    "openEntry": "ดู {name}",
    "openInstalled": "ดู {name} ในแท็บติดตั้งแล้ว",
    "readChanged": "ดัชนีนี้เปลี่ยนขณะโหลด",
    "readFailed": "อ่านดัชนีนี้ไม่ได้",
    "readInvalid": "รูปแบบดัชนีนี้ไม่ถูกต้อง",
    "refresh": "รีเฟรช",
    "removeSource": "นำออก",
    "removeSourceNamed": "นำ {url} ออก",
    "retry": "ลองอีกครั้ง",
    "search": "ค้นหาปลั๊กอิน",
    "showMore": "แสดงเพิ่มเติม",
    "sortBy": "เรียง: {sort}",
    "sortDefault": "ลำดับเริ่มต้น",
    "sortPublished": "วันที่เผยแพร่",
    "sortRelevance": "ตรงกันมากที่สุด",
    "sourceDuplicate": "เพิ่มแหล่งดัชนีนี้แล้ว",
    "sourceFailed": "บันทึกแหล่งดัชนีไม่ได้",
    "sourceInvalid": "ใช้ที่อยู่ http หรือ https ที่ไม่มีชื่อผู้ใช้ รหัสผ่าน หรือส่วน #",
    "sourcePlaceholder": "https://example.com/index.json",
    "sourceUnavailable": "บันทึกแหล่งดัชนีที่นี่ไม่ได้",
    "sourceUrl": "URL ดัชนี",
    "sourcesDescription": "ดัชนีปลั๊กอินเผยแพร่เป็น URL ของไฟล์ดัชนีหนึ่งไฟล์ หน้าค้นพบใช้เรียกดูดัชนีที่ระบุไว้ที่นี่",
    "sourcesFailed": "อ่านแหล่งดัชนีไม่ได้",
    "sourcesLabel": "แหล่งดัชนีที่เพิ่มแล้ว",
    "sourcesTitle": "แหล่งดัชนี",
    "sourcesTrust": "ดัชนีมาจากบุคคลภายนอก เพิ่มเฉพาะแหล่งที่ไว้ใจ เพราะปลั๊กอินจะทำงานด้วยสิทธิ์ของคุณเมื่อติดตั้ง",
    "statusInstalled": "ติดตั้งแล้ว",
    "statusProvided": "จัดให้โดย DSH",
    "statusUpdate": "มีอัปเดต",
    "switchToAscending": "เรียงจากน้อยไปมาก",
    "switchToDescending": "เรียงจากมากไปน้อย",
    "title": "ค้นพบ",
    "update": "อัปเดต",
    "updateTitle": "อัปเดต {name} เป็น {version}",
    "versionDefault": "แนะนำ",
    "versionExempted": "มีข้อยกเว้น",
    "versionIncompatible": "ไม่เข้ากัน",
    "versionInstalled": "ติดตั้งแล้ว",
    "versionPrerelease": "ก่อนเผยแพร่",
    "versionsLabel": "เวอร์ชันของ {name}",
    "versionsTitle": "เวอร์ชัน"
  },
  "pluginRecommendations": {
    "access-denied": "คุณไม่มีสิทธิ์เปลี่ยนโปรไฟล์นี้",
    "already-enabled": "เลือกในหน้าปลั๊กอินแล้ว เปิดรายละเอียดเพื่อตรวจสถานะการทำงาน",
    "closing": "บริการกำลังโหลดใหม่ โปรดลองอีกครั้งสักครู่",
    "detailsFor": "ดูรายละเอียด: {title}",
    "dismiss": "ไว้ภายหลัง",
    "dismissed": "ปิดแล้ว",
    "enable": "เปิดใช้งาน",
    "enabled": "เปิดใช้งานแล้ว",
    "failed": "เปิดไม่ได้ ลองอีกครั้งหรือตรวจหน้าปลั๊กอิน",
    "heading": "ปลั๊กอินแนะนำ",
    "lookup-failed": "โหลดรายละเอียดปลั๊กอินนี้ไม่ได้ โปรดลองอีกครั้ง",
    "management-error": "เปิดปลั๊กอินไม่ได้ เปิดรายละเอียดเพื่อตรวจข้อผิดพลาดแล้วลองอีกครั้ง",
    "not-live-root": "ใช้คำแนะนำนี้ในการสนทนาต้นฉบับ",
    "official": "ทางการ",
    "replaced": "แทนที่แล้ว",
    "restart-required": "บันทึกแล้ว เริ่ม DSH ใหม่เพื่อใช้การเปลี่ยนแปลง",
    "retry": "ลองเปิดใช้งานอีกครั้ง",
    "retryLookup": "ลองอีกครั้ง",
    "scope": "ใช้ได้ในการสนทนาทั้งหมดเมื่อเปิดใช้งาน",
    "transport": "ยืนยันผลไม่ได้ รีเฟรชแล้วลองอีกครั้ง",
    "unavailable": "ยังเปิดปลั๊กอินนี้ไม่ได้ ตรวจหน้าปลั๊กอิน",
    "unconfirmed": "ยืนยันไม่ได้ว่าเปิดปลั๊กอินแล้ว ลองอีกครั้งเพื่อตรวจสอบ",
    "unknown": "คำแนะนำนี้ไม่พร้อมใช้งาน เปิดการสนทนาใหม่",
    "version-error": "ปลั๊กอินนี้ไม่เข้ากันกับ DSH เวอร์ชันนี้ อัปเดต DSH แล้วลองอีกครั้ง",
    "working": "กำลังทำงาน…"
  },
  "question": {
    "action.next": "ถัดไป",
    "action.skip": "ข้าม",
    "custom.placeholder": "พิมพ์คำตอบของคุณ",
    "error.incomplete": "โปรดตอบคำถามนี้ให้ครบก่อน",
    "error.resubmit": "คำตอบมาไม่ทันก่อนงานดำเนินต่อ โปรดส่งอีกครั้ง",
    "error.unanswered": "โปรดเลือกตัวเลือกหรือป้อนคำตอบเอง",
    "error.unavailable": "ยังส่งไม่ได้ โปรดลองอีกครั้งสักครู่",
    "nav.cancel": "ปิดคำถามทั้งหมด",
    "nav.close": "ปิดแผง เปิดอีกครั้งได้จากการเรียกเครื่องมือ",
    "nav.maximize": "ขยายการ์ดคำถาม",
    "nav.minimize": "ยุบการ์ดคำถาม",
    "nav.next": "คำถามถัดไป",
    "nav.prev": "คำถามก่อนหน้า",
    "option.recommended": "แนะนำ",
    "plan.approve": "อนุมัติ",
    "plan.decline": "ปฏิเสธ",
    "plan.discuss": "ขอแก้ไข",
    "plan.header": "ตรวจทานแผน",
    "reply.answerLabel": "คำตอบ: ",
    "reply.label": "คำถามและคำตอบ",
    "reply.skipped": "ข้ามแล้ว",
    "review.skipped": "ข้ามคำถามนี้แล้ว",
    "review.status": "ตอบแล้ว",
    "status.sent": "ส่งคำตอบแล้ว แต่ปิดแผงไม่ได้",
    "text.collapse": "ยุบ",
    "text.expand": "ขยาย",
    "wait.continued": "งานดำเนินต่อแล้ว คุณยังตอบได้",
    "wait.countdown": "ดำเนินการต่อใน {seconds} วิ.",
    "wait.held": "รอจนกว่าคุณจะตอบ",
    "wait.paused": "พักไว้ · เหลือ {seconds} วิ.",
    "wait.takeTime": "ขอเวลาตอบ"
  },
  "reference": {
    "candidate.noCwd": "(ไม่มีไดเรกทอรีทำงาน)",
    "crumb.root": "พื้นที่ทำงาน",
    "fileOpen.close": "ปิด",
    "fileOpen.failed": "เปิด “{path}” ไม่ได้ ลองอีกครั้งหรือปิดข้อความนี้",
    "fileOpen.retry": "ลองอีกครั้ง",
    "fileOpen.title": "เปิดไฟล์ไม่ได้",
    "section.files": "ไฟล์และโฟลเดอร์",
    "section.sessions": "เซสชัน",
    "section.subagents": "เอเจนต์ย่อย",
    "time.days": "{n} วัน",
    "time.hours": "{n} ชม.",
    "time.minutes": "{n} นาที",
    "time.months": "{n} เดือน",
    "time.now": "ตอนนี้",
    "time.years": "{n} ปี"
  },
  "schedule.catalog": {
    "cron.day.both": "วันที่ {days} ของทุกเดือน หรือวัน{weekdays}{months}",
    "cron.day.bothStarred": "วันที่ {days} ของทุกเดือน และวัน{weekdays}{months}",
    "cron.day.every": "ทุกวัน{months}",
    "cron.day.monthDays": "วันที่ {days} ของทุกเดือน{months}",
    "cron.day.weekdays": "{weekdays}{months}",
    "cron.hours.list": "{hours}",
    "cron.hours.range": "{from}–{to}",
    "cron.list.join": ", ",
    "cron.months": " ในเดือน{months}",
    "cron.part.join": " ",
    "cron.time.at": "เวลา {times}",
    "cron.time.everyHour": "ทุกชั่วโมง",
    "cron.time.everyMinute": "ทุกนาที",
    "cron.time.everyMinutes": "ทุก {step} นาที",
    "cron.time.everyNHours": "ทุก {count} ชั่วโมง",
    "cron.time.hourlyAt": "ทุกชั่วโมง ในนาทีที่ {minutes}",
    "cron.time.hoursAt": "นาทีที่ {minutes} ของชั่วโมง {hours}",
    "cron.time.hoursEveryMinute": "ทุกนาที ในช่วงชั่วโมง {hours}",
    "cron.time.hoursEveryMinutes": "ทุก {step} นาที ในช่วงชั่วโมง {hours}",
    "cron.time.joinedEveryHour": "ทุกชั่วโมง",
    "cron.time.joinedEveryMinute": "ทุกนาที",
    "cron.time.joinedEveryMinutes": "ทุก {step} นาที",
    "cron.time.joinedEveryNHours": "ทุก {count} ชั่วโมง",
    "cron.time.joinedHourlyAt": "ทุกชั่วโมง ในนาทีที่ {minutes}",
    "cron.weekday.name": "{weekday}",
    "cron.weekday.range": "{from}–{to}",
    "delete.action": "ลบ",
    "delete.label": "ลบงานอัตโนมัติ: {title}",
    "delete.pending": "กำลังลบ…",
    "frequency.cron": "กำหนดเอง ({timeZone})",
    "frequency.cronLocal": "กำหนดเอง",
    "frequency.cronRule": "{rule} ({timeZone})",
    "frequency.daily": "ทุกวัน เวลา {time} ({timeZone})",
    "frequency.dailyLocal": "ทุกวัน เวลา {time}",
    "frequency.every": "ทุก {value} {unit}",
    "frequency.hostCustom": "กำหนดเอง",
    "frequency.hostDailyInterval": "ทุก {interval} วัน เวลา {time}",
    "frequency.hostMonthly": "ทุกเดือน วันที่ {days} เวลา {time} หรือวันสิ้นเดือน",
    "frequency.hostMonthlyInterval": "ทุก {interval} เดือน วันที่ {days} เวลา {time} หรือวันสิ้นเดือน",
    "frequency.hostWeeklyInterval": "ทุก {interval} สัปดาห์ ในวัน{weekdays} เวลา {time}",
    "frequency.hostZone": "{rule} ({timeZone})",
    "frequency.once": "ครั้งเดียว",
    "frequency.weekday.1": "จ.",
    "frequency.weekday.2": "อ.",
    "frequency.weekday.3": "พ.",
    "frequency.weekday.4": "พฤ.",
    "frequency.weekday.5": "ศ.",
    "frequency.weekday.6": "ส.",
    "frequency.weekday.7": "อา.",
    "frequency.weekday.join": ", ",
    "frequency.weekly": "ทุกสัปดาห์ ในวัน{weekdays} เวลา {time} ({timeZone})",
    "frequency.weeklyLocal": "ทุกสัปดาห์ ในวัน{weekdays} เวลา {time}",
    "hover.more": "อีก {count} รายการ",
    "list.aria": "งานอัตโนมัติที่เปิดใช้งาน",
    "list.error": "โหลดงานอัตโนมัติไม่ได้",
    "list.loading": "กำลังโหลดงานอัตโนมัติ…",
    "list.nextRun": "ทำงานครั้งถัดไป",
    "list.open": "เปิดรายละเอียดงานอัตโนมัติ: {title}",
    "list.retry": "ลองอีกครั้ง",
    "mark.aria": "งานอัตโนมัติ {count} งาน",
    "relative.future": "อีก {value} {unit}",
    "relative.now": "ถึงเวลาทำงานแล้ว",
    "relative.overdue": "เลยกำหนดมา {value} {unit}",
    "time.locale": "th",
    "time.utcPrefix": "UTC",
    "trigger.label": "งานอัตโนมัติ",
    "trigger.one": "งานอัตโนมัติ {count} งาน",
    "trigger.other": "งานอัตโนมัติ {count} งาน",
    "unit.day.one": "วัน",
    "unit.day.other": "วัน",
    "unit.hour.one": "ชั่วโมง",
    "unit.hour.other": "ชั่วโมง",
    "unit.minute.one": "นาที",
    "unit.minute.other": "นาที",
    "unit.second.one": "วินาที",
    "unit.second.other": "วินาที"
  },
  "schedule.manager": {
    "card.deleted": "ลบแล้ว",
    "card.open": "เปิด",
    "card.openLabel": "เปิดรายละเอียดงาน: {title}",
    "clear.action": "ล้างงานที่สิ้นสุดแล้วทั้งหมด",
    "clear.close": "ปิดการยืนยันการล้าง",
    "clear.confirm": "ล้างงาน",
    "clear.description": "งานเหล่านี้และบันทึกการส่งคำสั่งจะถูกลบอย่างถาวร งานที่เปิดใช้งานหรือพักอยู่ เซสชันต้นทาง และข้อความในคิวจะไม่ได้รับผลกระทบ",
    "clear.pending": "กำลังล้าง…",
    "clear.title": "ล้างงานที่สิ้นสุดแล้ว ({count}) งานหรือไม่?",
    "cron.day.both": "วันที่ {days} ของทุกเดือน หรือวัน{weekdays}{months}",
    "cron.day.bothStarred": "วันที่ {days} ของทุกเดือน และวัน{weekdays}{months}",
    "cron.day.every": "ทุกวัน{months}",
    "cron.day.monthDays": "วันที่ {days} ของทุกเดือน{months}",
    "cron.day.weekdays": "{weekdays}{months}",
    "cron.hours.list": "{hours}",
    "cron.hours.range": "{from}–{to}",
    "cron.list.join": ", ",
    "cron.months": " ในเดือน{months}",
    "cron.part.join": " ",
    "cron.time.at": "เวลา {times}",
    "cron.time.everyHour": "ทุกชั่วโมง",
    "cron.time.everyMinute": "ทุกนาที",
    "cron.time.everyMinutes": "ทุก {step} นาที",
    "cron.time.everyNHours": "ทุก {count} ชั่วโมง",
    "cron.time.hourlyAt": "ทุกชั่วโมง ในนาทีที่ {minutes}",
    "cron.time.hoursAt": "นาทีที่ {minutes} ของชั่วโมง {hours}",
    "cron.time.hoursEveryMinute": "ทุกนาที ในช่วงชั่วโมง {hours}",
    "cron.time.hoursEveryMinutes": "ทุก {step} นาที ในช่วงชั่วโมง {hours}",
    "cron.time.joinedEveryHour": "ทุกชั่วโมง",
    "cron.time.joinedEveryMinute": "ทุกนาที",
    "cron.time.joinedEveryMinutes": "ทุก {step} นาที",
    "cron.time.joinedEveryNHours": "ทุก {count} ชั่วโมง",
    "cron.time.joinedHourlyAt": "ทุกชั่วโมง ในนาทีที่ {minutes}",
    "cron.weekday.name": "{weekday}",
    "cron.weekday.range": "{from}–{to}",
    "delete.action": "ลบงาน",
    "delete.cancel": "ยกเลิก",
    "delete.close": "ปิดการยืนยันการลบ",
    "delete.confirm": "ยืนยันการลบ",
    "delete.description": "หยุดการเรียกทำงานและลบงานนี้พร้อมบันทึกการส่งคำสั่ง เซสชันต้นทางและข้อความจะยังอยู่ ข้อความที่อยู่ในคิวจะไม่ถูกถอน",
    "delete.pending": "กำลังลบ…",
    "delete.title": "ลบงานนี้หรือไม่?",
    "delivery.collapse": "ย่อ",
    "delivery.cursorError": "บันทึกมีการอัปเดต",
    "delivery.empty": "ไม่มีบันทึกการส่งคำสั่ง",
    "delivery.error": "โหลดบันทึกการส่งคำสั่งไม่ได้",
    "delivery.expand": "ขยาย",
    "delivery.label": "บันทึกการส่งคำสั่งที่เก็บไว้",
    "delivery.loadMore": "โหลดเพิ่มเติม",
    "delivery.loading": "กำลังโหลดบันทึกการส่งคำสั่ง…",
    "delivery.notFound": "งานนี้ไม่พร้อมใช้งานแล้ว",
    "delivery.pruned": "บันทึกการส่งคำสั่งก่อนหน้านี้ถูกล้างแล้ว",
    "delivery.refresh": "รีเฟรช",
    "delivery.retention": "กฎการเก็บรักษา",
    "delivery.retentionBounds": "แต่ละงานเก็บบันทึกการส่งคำสั่งได้สูงสุด {records} รายการ ภายใน {days} วันที่ผ่านมา",
    "delivery.retentionExplanation": "เมื่อบันทึกรายการใหม่ ระบบจะล้างรายการเก่าที่เกินข้อจำกัดเหล่านี้โดยอัตโนมัติ การล้างบันทึกไม่ทำให้งานหยุด",
    "delivery.retry": "ลองอีกครั้ง",
    "detail.close": "ปิดรายละเอียด",
    "detail.instruction": "คำสั่งของงานอัตโนมัติ",
    "detail.instructionPlaceholder": "อธิบายงานและผลลัพธ์ที่ต้องการ\nเช่น สรุปรายการอ่านของฉันพร้อมลิงก์แหล่งข้อมูล",
    "detail.label": "รายละเอียดงาน",
    "detail.missing": "งานไม่พร้อมใช้งาน อาจถูกลบไปแล้ว",
    "detail.more": "การดำเนินการกับงานอัตโนมัติ",
    "detail.name": "ชื่องานอัตโนมัติ",
    "detail.namePlaceholder": "เช่น สรุปบทความประจำวัน",
    "detail.nextRun": "ทำงานครั้งถัดไป",
    "detail.openSession": "เซสชันที่เชื่อมโยง: เปิดเซสชันที่เชื่อมโยง",
    "detail.openSessionTitle": "เซสชันที่เชื่อมโยง {title}: เปิดเซสชันที่เชื่อมโยง",
    "detail.records": "บันทึก",
    "detail.rule": "กฎ",
    "detail.session": "เซสชันที่เชื่อมโยง",
    "detail.sessionArchived": "เซสชันที่เชื่อมโยงถูกเก็บถาวรแล้ว",
    "detail.sessionLoading": "กำลังโหลดข้อมูลเซสชันที่เชื่อมโยง",
    "detail.sessionUnavailable": "เซสชันที่เชื่อมโยงไม่พร้อมใช้งาน",
    "detail.tabs": "มุมมองรายละเอียดงาน",
    "empty.action": "งานอัตโนมัติใหม่",
    "frequency.cron": "กำหนดเอง ({timeZone})",
    "frequency.cronLocal": "กำหนดเอง",
    "frequency.cronRule": "{rule} ({timeZone})",
    "frequency.daily": "ทุกวัน เวลา {time} ({timeZone})",
    "frequency.dailyLocal": "ทุกวัน เวลา {time}",
    "frequency.every": "ทุก {value} {unit}",
    "frequency.hostCustom": "กำหนดเอง",
    "frequency.hostDailyInterval": "ทุก {interval} วัน เวลา {time}",
    "frequency.hostMonthly": "ทุกเดือน วันที่ {days} เวลา {time} หรือวันสิ้นเดือน",
    "frequency.hostMonthlyInterval": "ทุก {interval} เดือน วันที่ {days} เวลา {time} หรือวันสิ้นเดือน",
    "frequency.hostWeeklyInterval": "ทุก {interval} สัปดาห์ ในวัน{weekdays} เวลา {time}",
    "frequency.hostZone": "{rule} ({timeZone})",
    "frequency.once": "ครั้งเดียว",
    "frequency.weekday.1": "จ.",
    "frequency.weekday.2": "อ.",
    "frequency.weekday.3": "พ.",
    "frequency.weekday.4": "พฤ.",
    "frequency.weekday.5": "ศ.",
    "frequency.weekday.6": "ส.",
    "frequency.weekday.7": "อา.",
    "frequency.weekday.join": ", ",
    "frequency.weekly": "ทุกสัปดาห์ ในวัน{weekdays} เวลา {time} ({timeZone})",
    "frequency.weeklyLocal": "ทุกสัปดาห์ ในวัน{weekdays} เวลา {time}",
    "host.chatCreate": "สร้างในเซสชัน",
    "host.closeCreate": "ปิดแบบฟอร์มสร้างงาน",
    "host.conflict": "งานนี้ถูกแก้ไขจากที่อื่น ตรวจสอบค่าล่าสุดร่วมกับการแก้ไขของคุณ หรือทิ้งการแก้ไข",
    "host.create": "สร้าง",
    "host.createError": "สร้างงานไม่ได้ ข้อมูลที่กรอกยังอยู่ โปรดลองอีกครั้ง",
    "host.createMethod": "เลือกวิธีสร้าง",
    "host.createPrompt": "โปรดสร้างงานอัตโนมัติตามข้อกำหนด",
    "host.creating": "กำลังสร้าง…",
    "host.currentConversation": "เซสชันที่เชื่อมโยงอยู่",
    "host.customRule": "กำหนดเอง",
    "host.defaultProject": "พื้นที่ทำงานเริ่มต้น",
    "host.executionActive": "งานนี้อยู่ในคิวหรือกำลังทำงาน จัดการได้ในเซสชัน",
    "host.executionPending": "งานนี้อยู่ในคิว กำลังทำงาน หรือเพิ่งส่งคำสั่งไป โปรดลองอีกครั้งภายหลัง",
    "host.frequency.advanced": "กำหนดเอง",
    "host.frequency.monthly": "ทุกเดือน",
    "host.interval": "ช่วงเวลา",
    "host.invalidRule": "ตรวจสอบกฎและเขตเวลา",
    "host.latestConversation": "เซสชันที่ทำงานครั้งล่าสุด",
    "host.limitsError": "โหลดข้อจำกัดช่วงเวลาระหว่างการทำงานไม่ได้ โปรดลองอีกครั้งก่อนบันทึก",
    "host.limitsLoading": "กำลังโหลดข้อจำกัดช่วงเวลาระหว่างการทำงาน",
    "host.manualCreate": "สร้างด้วยตนเอง",
    "host.monthDay": "วันที่ของเดือน",
    "host.newSessionInterval": "ช่วงเวลาขั้นต่ำระหว่างการทำงาน: {interval}",
    "host.notFuture": "เลือกกำหนดการในอนาคต โปรดแก้เวลาของงานก่อนดำเนินการต่อ",
    "host.openDeliverySession": "เปิดเซสชัน",
    "host.pause": "พัก",
    "host.project": "พื้นที่ทำงานที่เชื่อมโยง",
    "host.reapply": "ตรวจสอบร่วมกับการแก้ไขของฉัน",
    "host.resume": "ดำเนินการต่อ",
    "host.run": "ทำงานตอนนี้",
    "host.runAfterInterval": "ยังไม่พ้นช่วงเวลาขั้นต่ำระหว่างการทำงาน จะทำงานทันทีได้เมื่อ {time}",
    "host.runError": "เพิ่มงานเข้าคิวไม่ได้ โปรดลองอีกครั้ง",
    "host.saveError": "บันทึกไม่ได้ การแก้ไขของคุณยังอยู่ โปรดลองอีกครั้ง",
    "host.sessionAfterFirstRun": "รอสร้าง",
    "host.target": "ทำงานใน",
    "host.targetNew": "สร้างเซสชันใหม่ทุกครั้งที่ทำงาน",
    "host.targetNewHelp": "สร้างเซสชันแยกสำหรับการทำงานแต่ละครั้ง",
    "host.targetNewOnce": "สร้างเซสชันแล้วใช้ซ้ำ",
    "host.targetNewOnceHelp": "สร้างเมื่อทำงานครั้งแรก แล้วใช้เซสชันเดิมต่อไป",
    "host.ungrouped": "ไม่ได้จัดกลุ่ม",
    "list.empty": "ยังไม่มีงาน งานที่สร้างในเซสชันของคุณจะปรากฏที่นี่",
    "list.emptyActive": "ไม่มีงานอัตโนมัติที่เปิดใช้งาน",
    "list.emptyInactive": "ไม่มีงานอัตโนมัติที่สิ้นสุดแล้ว",
    "list.emptyPaused": "ไม่มีงานอัตโนมัติที่พักอยู่",
    "list.error": "โหลดงานไม่ได้",
    "list.label": "รายการงาน",
    "list.loading": "กำลังโหลดงาน…",
    "list.more": "การดำเนินการอื่นกับงาน",
    "list.nextPrefix": "กำหนดทำงานครั้งถัดไป: ",
    "list.noMatches": "ไม่พบงานที่ตรงกัน",
    "list.retry": "ลองอีกครั้ง",
    "new.action": "ใหม่",
    "panel": "งานอัตโนมัติ",
    "relative.future": "อีก {value} {unit}",
    "relative.now": "ถึงเวลาทำงานแล้ว",
    "relative.overdue": "เลยกำหนดมา {value} {unit}",
    "rule.cancel": "ทิ้งการแก้ไข",
    "rule.daily": "ทุกวัน",
    "rule.everyHours": "ทุก N ชั่วโมง",
    "rule.everyMinutes": "ทุก N นาที",
    "rule.invalid": "แก้ไขกฎที่กำหนดเอง เลือกตัวเลือกการทำซ้ำอื่น หรือขอให้เอเจนต์แก้ไขให้",
    "rule.invalidInterval": "กรอกช่วงเวลาเป็นจำนวนเต็มตั้งแต่ 1 ขึ้นไป",
    "rule.invalidMonthDay": "กรอกวันที่ของเดือนตั้งแต่ 1 ถึง 31",
    "rule.invalidTime": "เลือกวันที่และเวลาที่ถูกต้องในเขตเวลาที่เลือก",
    "rule.invalidTitle": "ใช้ชื่องานที่ยาว 1–120 ตัวอักษร",
    "rule.invalidZone": "เลือกเขตเวลาที่ถูกต้อง",
    "rule.once": "ครั้งเดียว",
    "rule.repeat": "ทำซ้ำ",
    "rule.requiredWeekday": "เลือกอย่างน้อยหนึ่งวันในสัปดาห์",
    "rule.save": "บันทึกการแก้ไข",
    "rule.saving": "กำลังบันทึก…",
    "rule.title": "เวลาทำงาน",
    "rule.tooComplex": "กฎนี้ทำงานถี่หรือซับซ้อนเกินไป เลือกตัวเลือกการทำซ้ำ หรือขอให้เอเจนต์ปรับให้ง่ายขึ้น",
    "rule.unsaved": "มีการแก้ไขที่ยังไม่บันทึก",
    "rule.weekday": "วันในสัปดาห์",
    "rule.weekdayOption": "วันในสัปดาห์ {weekday}",
    "rule.weekdays": "วันจันทร์ถึงวันศุกร์",
    "rule.weekly": "ทุกสัปดาห์",
    "rule.zone.system": " (ระบบ)",
    "search.clear": "ล้างการค้นหา",
    "search.label": "ค้นหางาน",
    "search.placeholder": "ค้นหางานอัตโนมัติ",
    "status.active": "เปิดใช้งาน",
    "status.ended": "สิ้นสุดแล้ว",
    "status.paused": "พักอยู่",
    "statusFilter.all": "ทั้งหมด",
    "statusFilter.label": "สถานะงาน",
    "time.locale": "th",
    "time.utcPrefix": "UTC",
    "timing.date": "วันที่",
    "timing.hour": "ชั่วโมง",
    "timing.intervalDecrease": "ลดช่วงเวลา",
    "timing.intervalIncrease": "เพิ่มช่วงเวลา",
    "timing.minute": "นาที",
    "timing.nextMonth": "เดือนถัดไป",
    "timing.prevMonth": "เดือนก่อนหน้า",
    "timing.second": "วินาที",
    "timing.time": "เวลา",
    "timing.zone": "เขตเวลา",
    "timing.zoneNoResults": "ไม่พบเขตเวลาที่ตรงกัน",
    "timing.zoneSearch": "ค้นหาด้วยส่วนต่างจาก UTC รหัส IANA หรือเมือง",
    "title": "งานอัตโนมัติ",
    "toast.clearFailed": "ล้างงานไม่ได้",
    "toast.cleared.one": "ล้างงานที่สิ้นสุดแล้ว {count} งาน",
    "toast.cleared.other": "ล้างงานที่สิ้นสุดแล้ว {count} งาน",
    "toast.clearedNone": "ไม่มีงานที่สิ้นสุดแล้วให้ล้าง",
    "toast.deleteFailed": "ลบงานไม่ได้",
    "toast.deleted": "ลบงานแล้ว",
    "unit.day.one": "วัน",
    "unit.day.other": "วัน",
    "unit.hour.one": "ชั่วโมง",
    "unit.hour.other": "ชั่วโมง",
    "unit.minute.one": "นาที",
    "unit.minute.other": "นาที",
    "unit.second.one": "วินาที",
    "unit.second.other": "วินาที"
  },
  "secretMask": {
    "secret.hide": "ซ่อนข้อมูลลับ",
    "secret.reveal": "แสดงข้อมูลลับ"
  },
  "session-log-deepseek": {
    "description": "ช่วยปรับปรุงโมเดลและผลิตภัณฑ์ DeepSeek",
    "failed": "บันทึกค่ากำหนดไม่ได้",
    "saved": "บันทึกค่ากำหนดแล้ว",
    "title": "อัปโหลดบันทึกเซสชันเมื่อใช้ API โมเดลทางการ"
  },
  "settings": {
    "close": "ปิด",
    "connection.connected": "เชื่อมต่อแล้ว",
    "connection.connecting": "กำลังเชื่อมต่อใหม่",
    "connection.error": "ขาดการเชื่อมต่อ",
    "connection.reconnect": "ขาดการเชื่อมต่อ เชื่อมต่อใหม่ตอนนี้",
    "connection.restart": "กำลังเชื่อมต่อใหม่ ลองเชื่อมต่อใหม่ตอนนี้",
    "desktop.channel.description": "รุ่นเสถียรเหมาะกับการใช้งานประจำวัน รุ่นพัฒนาให้ลองฟีเจอร์ใหม่ก่อน แต่อาจไม่เสถียร",
    "desktop.channel.details": "ดูรายละเอียด",
    "desktop.channel.error": "ใช้การตั้งค่าอัปเดตไม่ได้ เปิดตัวแสดงสถานะอัปเดตของแอปเดสก์ท็อปเพื่อดูรายละเอียด",
    "desktop.channel.nightly": "รุ่นพัฒนา",
    "desktop.channel.readError": "อ่านช่องทางอัปเดตไม่ได้ เริ่มแอปใหม่",
    "desktop.channel.result.applied": "เปลี่ยนช่องทางอัปเดตแล้ว",
    "desktop.channel.result.apply": "บันทึกการตั้งค่าผิดพลาด",
    "desktop.channel.result.configuration": "ไฟล์การตั้งค่าผิดพลาด พักการอัปเดตไว้",
    "desktop.channel.result.format": "บันทึกไม่ได้: ไฟล์การตั้งค่าไม่ถูกต้อง",
    "desktop.channel.result.permission": "บันทึกไม่ได้: ไม่ได้รับสิทธิ์",
    "desktop.channel.result.save": "บันทึกไม่ได้",
    "desktop.channel.result.uncertain": "บันทึกการตั้งค่าผิดพลาด",
    "desktop.channel.stable": "รุ่นเสถียร",
    "desktop.channel.title": "ช่องทางอัปเดต",
    "desktop.channel.unavailable": "การตั้งค่าไม่พร้อมใช้งาน",
    "desktop.update.available": "อัปเดต",
    "desktop.update.checkFailed": "ตรวจสอบอัปเดตไม่ได้ โปรดลองอีกครั้งภายหลัง",
    "desktop.update.checkNetworkFailed": "ตรวจสอบอัปเดตไม่ได้ ตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง",
    "desktop.update.checking": "กำลังตรวจสอบอัปเดต…",
    "desktop.update.configuration.channel": "พักการอัปเดตไว้: ช่องทางต้องเป็น nightly หรือ stable",
    "desktop.update.configuration.cleanup": "พักการอัปเดตไว้: ละทิ้งอัปเดตก่อนหน้าไม่ได้ โปรดเริ่มแอปใหม่",
    "desktop.update.configuration.format": "พักการอัปเดตไว้: ไฟล์การตั้งค่าไม่ถูกต้อง",
    "desktop.update.configuration.read": "พักการอัปเดตไว้: อ่านไฟล์การตั้งค่าไม่ได้",
    "desktop.update.configurationFailed": "ใช้การตั้งค่าอัปเดตไม่ได้ เปิดตัวแสดงสถานะอัปเดตของแอปเดสก์ท็อปเพื่อดูรายละเอียด",
    "desktop.update.downloadBusyFailed": "ไฟล์อัปเดตกำลังถูกใช้งาน ปิดโปรแกรมที่ใช้ไฟล์นั้นแล้วลองอีกครั้ง",
    "desktop.update.downloadDetail": "กำลังดาวน์โหลดอัปเดต: {percent}%\nเวอร์ชันเป้าหมาย: {version}",
    "desktop.update.downloadFailed": "ดาวน์โหลดอัปเดตไม่ได้ โปรดลองอีกครั้ง",
    "desktop.update.downloadNetworkFailed": "ดาวน์โหลดอัปเดตไม่ได้ ตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง",
    "desktop.update.downloadPermissionFailed": "เขียนไฟล์อัปเดตไม่ได้ ตรวจสอบสิทธิ์ของโฟลเดอร์แล้วลองอีกครั้ง",
    "desktop.update.downloadSpaceFailed": "พื้นที่ดิสก์ไม่พอสำหรับดาวน์โหลดอัปเดต เพิ่มพื้นที่ว่างแล้วลองอีกครั้ง",
    "desktop.update.fullscreenTimeout": "ออกจากโหมดเต็มหน้าจอไม่ได้ ออกจากโหมดเต็มหน้าจอแล้วลองอัปเดตอีกครั้ง",
    "desktop.update.installFailed": "ติดตั้งอัปเดตไม่ได้ โปรดลองอีกครั้งภายหลัง",
    "desktop.update.installNetworkFailed": "ติดตั้งอัปเดตไม่ได้ ตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง",
    "desktop.update.installing": "กำลังเตรียมเริ่มใหม่…",
    "desktop.update.progress": "{percent}%",
    "desktop.update.ready": "ติดตั้งและเริ่มใหม่",
    "desktop.update.retry": "ลองอัปเดตอีกครั้ง",
    "desktop.update.stopFailed": "หยุดงานอย่างปลอดภัยไม่ได้ ยังไม่ได้ติดตั้งอัปเดต โปรดลองอีกครั้งภายหลัง",
    "desktop.update.tasksChanged": "มีงานใหม่เริ่มแล้ว ยืนยันอีกครั้งเพื่อหยุดงานและอัปเดต",
    "desktop.update.tasksUnavailable": "สถานะงานไม่พร้อมใช้งาน ลองอัปเดตอีกครั้งเมื่อพื้นที่ทำงานพร้อม",
    "desktop.update.verifying": "กำลังตรวจสอบไฟล์อัปเดต…",
    "desktop.update.versionDetail": "{label}: {version}",
    "developerTools.description": "แสดงลำดับการทำงาน ความต่างของโค้ด และพรีเซ็ตเอเจนต์ทั้งหมด",
    "developerTools.error": "บันทึกไม่ได้ โปรดลองอีกครั้ง",
    "developerTools.title": "แสดงมุมมองเขียนโค้ด",
    "general.currentVersion": "เวอร์ชันปัจจุบัน: {version}",
    "general.nav": "ทั่วไป",
    "hostRelease.description": "เวอร์ชันบริการเปลี่ยนแล้ว หน้านี้พักการอัปเดตสดไว้ โหลดหน้าใหม่เพื่อใช้เวอร์ชันใหม่",
    "hostRelease.later": "ไว้ก่อน",
    "hostRelease.page": "หน้าเว็บ",
    "hostRelease.reload": "โหลดหน้าใหม่เพื่อใช้เวอร์ชันใหม่",
    "hostRelease.service": "บริการ",
    "hostRelease.title": "เวอร์ชันบริการเปลี่ยนแล้ว",
    "hostRelease.unknown": "ไม่ทราบ",
    "openDocument": "เปิดไฟล์การตั้งค่า",
    "openDocument.error": "เปิดไฟล์การตั้งค่าไม่ได้",
    "shortcut.open": "เปิดการตั้งค่า",
    "title": "การตั้งค่า",
    "trigger": "การตั้งค่า"
  },
  "settings.account": {
    "accountInfo": "ข้อมูลบัญชีเพิ่มเติม",
    "addApiKey": "เพิ่มคีย์ API",
    "backToHarness": "กลับไปที่ DeepSeek Harness",
    "balance": "ยอดคงเหลือจากการเติมเงิน",
    "balanceSignedOut": "ลงชื่อเข้าใช้เพื่อดู",
    "balanceUnavailable": "ดูบนแพลตฟอร์ม",
    "bonusBalance": "ยอดคงเหลือที่ได้รับฟรี",
    "browserDescription": " แล้วเปิดในเบราว์เซอร์เพื่อลงชื่อเข้าใช้ให้เสร็จ",
    "browserPrompt": "หน้าเว็บไม่เปิดโดยอัตโนมัติ? ",
    "browserTitle": "กำลังรอการลงชื่อเข้าใช้",
    "cancel": "ยกเลิก",
    "close": "ปิด",
    "completing": "กำลังดำเนินการลงชื่อเข้าใช้ให้เสร็จ…",
    "contactUs": "ข้อเสนอแนะ",
    "copiedLink": "คัดลอกลิงก์แล้ว",
    "copyFailed": "คัดลอกไม่สำเร็จ",
    "copyLink": "คัดลอกลิงก์ลงชื่อเข้าใช้",
    "expired": "การลงชื่อเข้าใช้หมดอายุแล้ว ลองอีกครั้ง",
    "failed": "ดำเนินการไม่สำเร็จ ลองอีกครั้ง",
    "failureTitle": "ลงชื่อเข้าใช้ไม่ได้",
    "initializing": "กำลังเริ่มลงชื่อเข้าใช้…",
    "loading": "กำลังโหลด…",
    "loginDescription": "ลงชื่อเข้าใช้บัญชี DeepSeek หรือเพิ่มคีย์ API เพื่อเริ่มใช้งาน โครงการและไฟล์ของคุณจัดเก็บไว้บนเครื่อง",
    "loginTitle": "เริ่มต้นใช้งาน",
    "menu": "เมนูบัญชี",
    "modelSignInRequired": "โมเดลไม่พร้อมใช้งาน โปรดลงชื่อเข้าใช้แล้วลองอีกครั้ง",
    "more": "เพิ่มเติม",
    "nav": "บัญชี",
    "noResponse": "เกิดข้อผิดพลาด โปรดตรวจสอบการเชื่อมต่อเครือข่ายแล้วลองอีกครั้ง",
    "onboardingArtworkLocale": "en",
    "onboardingBack": "ย้อนกลับ",
    "onboardingBrand": "DeepSeek Harness",
    "onboardingCompact": "เฉพาะผลลัพธ์",
    "onboardingCompactDescription": "ดูเฉพาะผลลัพธ์ในหน้าจอที่เรียบง่ายสะอาดตา",
    "onboardingContinue": "ดำเนินการต่อ",
    "onboardingCredit": "เติมเครดิต",
    "onboardingCreditDescription": "DeepSeek Harness คิดค่าเครดิตตามโทเค็นที่โมเดลและเครื่องมือใช้ เติมเครดิตล่วงหน้าเพื่อให้งานดำเนินต่อได้ไม่สะดุด ยอดคงเหลือจะถูกใช้เฉพาะขณะที่เอเจนต์กำลังทำงานเท่านั้น",
    "onboardingDetailed": "รายละเอียดทั้งหมด",
    "onboardingDetailedDescription": "ดูกระบวนการทั้งหมดเพื่อให้แก้บั๊กและแก้ปัญหาได้ง่ายขึ้น",
    "onboardingDevelopment": "เขียนโค้ดและพัฒนาซอฟต์แวร์",
    "onboardingDevelopmentDescription": "แก้ไขโค้ด แก้บั๊ก รันคำสั่ง จัดการไฟล์โครงการ และอื่น ๆ",
    "onboardingEnter": "เปิดแอป",
    "onboardingFundedTopUp": "เติมเครดิต",
    "onboardingGoTopUp": "เติมเครดิต",
    "onboardingIntroduction": "DeepSeek Harness ทำงานในโฟลเดอร์บนเครื่องและใช้เครื่องมืออ่านและเขียนไฟล์ในคอมพิวเตอร์ของคุณ ช่วยค้นคว้าและจัดระเบียบข้อมูล สร้างเอกสารและสเปรดชีต เขียนโค้ด แก้ปัญหา และอื่น ๆ ได้",
    "onboardingKeepSetting": "ตั้งค่าต่อ",
    "onboardingLater": "ถัดไป",
    "onboardingLoading": "กำลังโหลดการตั้งค่า…",
    "onboardingNoCreditDescription": "DeepSeek Harness เริ่มงานใหม่ไม่ได้หากไม่มีเครดิต คุณเติมภายหลังได้ใน การตั้งค่า → บัญชี",
    "onboardingNoCreditTitle": "ข้ามการเติมเครดิต?",
    "onboardingOffice": "งานสำนักงานและงานสร้างสรรค์",
    "onboardingOfficeDescription": "แก้ไขเอกสาร จัดระเบียบข้อมูล สร้างงานนำเสนอ และอื่น ๆ",
    "onboardingProcess": "คุณต้องการเห็นรายละเอียดมากแค่ไหน?",
    "onboardingProcessDescription": "ตัวเลือกนี้เปลี่ยนเฉพาะการแสดงความคืบหน้า ไม่กระทบความสามารถของ DeepSeek Harness",
    "onboardingPurposeDescription": "เราจะปรับส่วนติดต่อผู้ใช้และเครื่องมือให้เหมาะกับวิธีทำงานของคุณ",
    "onboardingPurposePrefix": "คุณต้องการให้",
    "onboardingPurposeSuffix": "ช่วยเรื่องอะไร?",
    "onboardingRetry": "ลองอีกครั้ง",
    "onboardingSaveFailed": "บันทึกการตั้งค่าไม่ได้ ลองอีกครั้ง",
    "onboardingSkip": "ข้าม",
    "onboardingSkipDescription": "คุณเปลี่ยนวิธีแสดงความคืบหน้า ประสิทธิภาพ และการใช้งาน หรือเปิดเครื่องมือเขียนโค้ดได้ทุกเมื่อใน การตั้งค่า → ทั่วไป",
    "onboardingSkipTitle": "ข้ามการตั้งค่า?",
    "onboardingStandard": "รายละเอียดสำคัญ",
    "onboardingStandardDescription": "เน้นผลลัพธ์ โดยแสดงเฉพาะขั้นตอนและการดำเนินการที่สำคัญที่สุด",
    "onboardingStart": "เริ่มต้นใช้งาน",
    "onboardingTopUp": "เติมเครดิต",
    "onboardingUnderstood": "เข้าใจแล้ว",
    "onboardingWelcome": "ยินดีต้อนรับสู่",
    "open": "เปิดเบราว์เซอร์",
    "platformFailed": "ดำเนินการไม่สำเร็จ ลองอีกครั้ง",
    "platformRetry": "ลองอีกครั้ง",
    "profileUnavailable": "รายละเอียดบัญชียังไม่พร้อมใช้งาน",
    "quotaDescription": "DeepSeek Harness เริ่มงานใหม่ด้วยบัญชีนี้ไม่ได้เมื่อไม่มียอดคงเหลือ ต้องการเติมเงินหรือไม่? คุณเติมภายหลังได้ใน การตั้งค่า → บัญชี",
    "quotaTitle": "ไม่มียอดคงเหลือให้ใช้",
    "quotaTopUp": "เติมเงิน",
    "retry": "ลงชื่อเข้าใช้อีกครั้ง",
    "sessionExpired": "คุณออกจากบัญชีแล้ว โปรดลงชื่อเข้าใช้อีกครั้ง",
    "settings": "การตั้งค่า",
    "settingsSignedOutDescription": "ลงชื่อเข้าใช้ DeepSeek Harness เพื่อรับคีย์ API เฉพาะของคุณ",
    "settingsSignedOutTitle": "คุณยังไม่ได้ลงชื่อเข้าใช้ DeepSeek Harness",
    "signIn": "ลงชื่อเข้าใช้",
    "signInDescription": "ใช้บัญชี DeepSeek ของคุณเพื่อเริ่มใช้งาน",
    "signOut": "ลงชื่อออก",
    "signOutDescription": "การลงชื่อออกจะไม่ลบข้อมูลใด ๆ คุณลงชื่อเข้าใช้บัญชีนี้อีกครั้งได้",
    "signOutRunningDescription": "มีงานกำลังทำอยู่ การลงชื่อออกจะขัดจังหวะงานเหล่านั้น ลงชื่อออกตอนนี้หรือไม่?",
    "signOutUnknownDescription": "ตรวจสอบงานที่กำลังทำอยู่ไม่ได้ การลงชื่อออกอาจขัดจังหวะงานที่ใช้บัญชีนี้ ลงชื่อออกตอนนี้หรือไม่?",
    "signedIn": "ลงชื่อเข้าใช้ DeepSeek แล้ว",
    "signedOut": "ยังไม่ได้ลงชื่อเข้าใช้",
    "timeoutDescription": "ลงชื่อเข้าใช้อีกครั้งเพื่อดำเนินการต่อ",
    "timeoutTitle": "หมดเวลาลงชื่อเข้าใช้",
    "topUp": "เติมเงิน",
    "usage": "ดูการใช้งาน",
    "waiting": "ดำเนินการต่อในเบราว์เซอร์"
  },
  "settings.agentLoop": {
    "description": "ควบคุมวิธีที่เอเจนต์ส่งคำขอเรียกเครื่องมือ",
    "invalidNumber": "ป้อนตัวเลข หรือเว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "maxParallel": "การเรียกเครื่องมือพร้อมกัน",
    "maxParallelHint": "จำนวนสูงสุดของการเรียกที่ทำพร้อมกันได้อย่างปลอดภัยภายในขั้นตอนเดียว",
    "overridden": "ถูกกำหนดทับ",
    "readOnly": "ระบบที่ติดตั้งนี้จัดเก็บการตั้งค่าแบบอ่านอย่างเดียว",
    "reset": "คืนค่าเริ่มต้น",
    "save": "บันทึก",
    "saveFailed": "ระบบที่ติดตั้งไม่ยอมรับค่าเหล่านี้ จึงเก็บค่าไว้ให้คุณแก้ไข",
    "saving": "กำลังบันทึก…",
    "title": "วงรอบเอเจนต์",
    "unavailable": "ปลั๊กอินนี้ยังไม่โหลด จึงยังตั้งค่าไม่ได้"
  },
  "settings.agentPreset": {
    "brokenBadge": "โหลดไม่สำเร็จ",
    "builtInGroup": "มีมาให้",
    "close": "ปิด",
    "createPlugin": "ให้เอเจนต์สร้างปลั๊กอิน",
    "createPluginChecking": "กำลังตรวจสอบว่าโหมดผู้สร้างพร้อมใช้งานหรือไม่",
    "createPluginDescription": "เข้าสู่โหมดผู้สร้างและสร้างปลั๊กอิน DSH ของคุณเอง",
    "createPluginMissing": "การตั้งค่านี้ไม่มีโหมดผู้สร้าง",
    "createPluginUnavailable": "ไม่พร้อมใช้งานชั่วคราว เปิดเมนูนี้อีกครั้งเพื่อลองใหม่",
    "creatorDraft": "ให้เอเจนต์ช่วยฉันสร้างพรีเซ็ต",
    "customGroup": "กำหนดเอง",
    "guideCopied": "คัดลอกแล้ว",
    "guideCopy": "คัดลอก",
    "guideCordisExplanation": "### สิ่งที่คุณสร้างได้\n\nโหมดผู้สร้างมีเครื่องมืองานมาตรฐานและเพิ่มการตรวจสอบรันไทม์ โหมดมาตรฐานและโหมดผู้สร้างใช้คำแนะนำ dsh-doc ร่วมกันในการพัฒนาปลั๊กอินและพรีเซ็ต เอเจนต์สามารถสร้างปลั๊กอินที่เพิ่มความสามารถหรือส่วนติดต่อผู้ใช้ หรือพรีเซ็ตที่รวมเครื่องมือและพรอมป์ต์สำหรับงานเฉพาะ\n\n### ปลั๊กอินและโหมด\n\nปลั๊กอินเพิ่มความสามารถให้ DSH เช่น เครื่องมือ การเชื่อมต่อบริการ หรือรายการในส่วนติดต่อผู้ใช้ โหมดคือพรีเซ็ตเอเจนต์ที่เลือกเครื่องมือและกำหนดวิธีทำงานของเอเจนต์ในงานหนึ่ง ๆ พรีเซ็ตแบบกำหนดเองสามารถรวมปลั๊กอินไว้ได้\n\n### ผลลัพธ์มีผลอย่างไร\n\nขอให้เอเจนต์ติดตั้งและตรวจสอบผลลัพธ์ ไม่ใช่แค่สร้างซอร์สโค้ด ปลั๊กอินอาจโหลดได้ทันทีหรือต้องเริ่มใหม่ ขึ้นอยู่กับสิ่งที่เปลี่ยนแปลง พรีเซ็ตที่สร้างใหม่จะเลือกใช้ได้เมื่อเริ่มงานใหม่",
    "guideCordisIntro": "เลือกโหมดผู้สร้างสำหรับงานใหม่ อธิบายความสามารถที่ต้องการ ตำแหน่งที่ควรแสดง และวิธีที่จะใช้ตรวจสอบ",
    "guideCordisUsage": "### เพิ่มส่วนติดต่อผู้ใช้\n\n> สร้างปลั๊กอิน DSH ที่เพิ่มรายการบันทึกโครงการในแถบด้านข้าง ให้ฉันเรียกดูไฟล์ Markdown ในพื้นที่ทำงานนี้และดูตัวอย่างบันทึกที่เลือก ติดตั้งและตรวจสอบว่าหน้าเปิดได้\n\nผลลัพธ์ที่คาดหวัง: ปลั๊กอินที่ติดตั้งแล้วพร้อมรายการและหน้าดูตัวอย่างที่ใช้งานได้ รวมถึงขั้นตอนเปิดใช้งานที่ยังเหลืออยู่\n\n### เพิ่มเครื่องมือ\n\n> สร้างปลั๊กอินพร้อมเครื่องมือที่อ่านรายงานการทดสอบของโครงการนี้และสรุปการทดสอบที่ล้มเหลว ลงทะเบียนและตรวจสอบด้วยรายงานตัวอย่าง\n\nผลลัพธ์ที่คาดหวัง: ปลั๊กอินพร้อมเครื่องมือที่เรียกใช้ได้และการเรียกตัวอย่างที่ตรวจสอบแล้ว\n\n### สร้างโหมดของฉันเอง\n\n> สร้างโหมด “ตรวจทานโค้ด” โดยอิงจากโหมดมาตรฐาน ให้เน้นบั๊กที่อาจเกิดขึ้นและช่องว่างในการทดสอบ อ้างอิงเส้นทางไฟล์และบรรทัด และถามก่อนแก้ไขไฟล์ บันทึกเป็นพรีเซ็ตที่เลือกใช้ได้\n\nผลลัพธ์ที่คาดหวัง: พรีเซ็ตแบบกำหนดเองสำหรับงานใหม่ คำแนะนำการตรวจทานเหล่านี้ชี้แนวทางให้เอเจนต์ ส่วนการตั้งค่าสิทธิ์กำหนดว่าเอเจนต์ทำสิ่งใดได้บ้าง",
    "guideExampleTask": "ตัวอย่างงาน",
    "guideFootnotes": "เชิงอรรถ",
    "guideMinimalExplanation": "### สิ่งที่มีให้\n\nเครื่องมือเชลล์ที่คงสถานะหนึ่งตัว read_image และพรอมป์ต์ระบบแบบตายตัว การอ่านภาพต้องใช้โมเดลที่รองรับภาพ ประวัติเก่าจะถูกย่อโดยอัตโนมัติเมื่อพื้นที่บริบทใกล้เต็ม ใช้ /compact ขณะที่เอเจนต์ว่างเพื่อย่อด้วยตนเอง พรีเซ็ตที่มีมาให้นี้ไม่โหลดทักษะ การวางแผน หรือบริบทรันไทม์มาตรฐาน\n\n### ควรเลือกเมื่อใด\n\nใช้เป็นฐานในการทดลองและเปรียบเทียบ โหมดนี้ยังอ่านไฟล์และรันสคริปต์ผ่านคำสั่งเชลล์ได้ แต่มีวิธีในตัวสำหรับจัดการงานระยะยาวน้อยกว่า การมีเครื่องมือน้อยลงไม่ได้แปลว่าผู้เริ่มต้นจะใช้ง่ายขึ้นเสมอไป",
    "guideMinimalIntro": "เลือกโหมดมินิมอลสำหรับงานใหม่ หากต้องการเปรียบเทียบ ให้ใช้โมเดล สิทธิ์ ข้อมูลนำเข้า และสถานะเริ่มต้นของพื้นที่ทำงานเหมือนกันในการรันแต่ละครั้ง",
    "guideMinimalUsage": "### เปรียบเทียบประสิทธิภาพในการแก้บั๊กเล็กน้อย\n\n> รันการทดสอบของโครงการนี้ หาสาเหตุที่ล้มเหลว และแก้ไขให้น้อยที่สุด รันการทดสอบที่เกี่ยวข้องอีกครั้งและรายงานผล\n\nรันงานเดียวกันแยกในโหมดมาตรฐานและโหมดมินิมอล โดยเริ่มจากสถานะเดียวกัน เปรียบเทียบความสำเร็จของงาน การเรียกเครื่องมือ และการเปลี่ยนแปลงที่เกิดขึ้น โหมดมินิมอลทำงานผ่านคำสั่งเทอร์มินัล",
    "guidePtcExplanation": "### วิธีเรียกเครื่องมือ\n\nPTC ย่อมาจาก Programmatic Tool Calling ในพรีเซ็ตที่มีมาให้นี้ เอเจนต์ใช้ run_code เพื่อเขียนโปรแกรม TypeScript ที่เรียกเครื่องมือผ่าน SDK ที่สร้างขึ้น โปรแกรมใช้ลูป เงื่อนไข การจัดการข้อผิดพลาด และการเรียกพร้อมกันได้ตามความเหมาะสม\n\n### สิ่งที่โมเดลได้รับ\n\nผลลัพธ์จากเครื่องมือจะส่งถึงโปรแกรมก่อน ซึ่งสามารถกรองและรวมผลลัพธ์ได้ โมเดลจะได้รับสิ่งที่โปรแกรมพิมพ์หรือส่งคืน ส่วนผลลัพธ์ที่เป็นภาพจะแนบแยกต่างหาก การเรียกเครื่องมือที่ซ้อนอยู่ยังคงถูกบันทึกและอยู่ภายใต้สิทธิ์การใช้เครื่องมือ\n\n### เปรียบเทียบกับโหมดมาตรฐาน\n\nทั้งสองโหมดทำงานเขียนโค้ดและงานแบบเป็นชุดได้ โหมดมาตรฐานเปิดให้เรียกเครื่องมือแต่ละรายการโดยตรง ส่วน PTC จัดระเบียบการเรียกเครื่องมือไว้ในโค้ด พรีเซ็ต PTC ปัจจุบันปิดเครื่องมือเวิร์กโฟลว์และการจัดการปลั๊กอินไว้ ความเร็วและการใช้โทเค็นขึ้นอยู่กับงานและวิธีที่โปรแกรมจัดการผลลัพธ์",
    "guidePtcIntro": "เลือกโหมด PTC เมื่อเริ่มงานใหม่ ระบุไฟล์นำเข้า กฎการประมวลผล และรูปแบบผลลัพธ์ เอเจนต์จะเขียนโค้ดให้",
    "guidePtcUsage": "### ตรวจสอบชุดไฟล์การตั้งค่า\n\n> ตรวจสอบไฟล์ JSON ทั้งหมดใน configs/ ระบุฟิลด์ที่จำเป็นแต่ขาดหายและค่าที่ไม่ถูกต้องตาม schema.json บันทึก CSV โดยให้แต่ละแถวเป็นหนึ่งปัญหา รวมไฟล์ที่อ่านไม่ได้ไว้ในรายงานและตรวจสอบไฟล์ที่เหลือต่อ อย่าเปลี่ยนแปลงไฟล์ต้นฉบับ\n\nผลลัพธ์ที่คาดหวัง: สรุปปัญหาและรายงาน CSV โปรแกรมสามารถตรวจสอบแบบเดิมซ้ำ จัดการความล้มเหลวแต่ละรายการ และรวบรวมผลลัพธ์ได้\n\n### สรุปบันทึกข้อผิดพลาด\n\n> วิเคราะห์ไฟล์บันทึกใน logs/ จัดกลุ่มข้อผิดพลาดตามบริการและประเภทข้อผิดพลาด แสดงสิบกลุ่มที่พบบ่อยที่สุดพร้อมตัวอย่างจากแต่ละกลุ่ม บันทึกจำนวนทั้งหมดลงใน CSV\n\nผลลัพธ์ที่คาดหวัง: กลุ่มข้อผิดพลาดที่พบบ่อยที่สุดและตารางจำนวนครบถ้วน โปรแกรมสามารถรวบรวมข้อมูลระหว่างทางก่อนส่งสรุปถึงโมเดล",
    "guideSections": "หัวข้อในคู่มือ",
    "guideStandardExplanation": "### วิธีทำงาน\n\nเอเจนต์เรียกใช้เครื่องมือโดยตรงเพื่ออ่านและแก้ไขไฟล์ ค้นหา และรันคำสั่งเทอร์มินัล มีทักษะ การวางแผน เป้าหมาย เอเจนต์ย่อย เวิร์กโฟลว์ การจัดการปลั๊กอิน และการย่อบริบทให้ใช้\n\nสำหรับคำถามเกี่ยวกับ DSH และงานปลั๊กอินหรือพรีเซ็ตที่คุณร้องขอ ทักษะ dsh-doc จะนำเอเจนต์ไปยังเอกสารและซอร์สโค้ดที่ติดตั้งไว้ คำแนะนำของทักษะนี้จะโหลดเฉพาะเมื่อร้องขอหรือเกี่ยวข้องเท่านั้น การโหลดทักษะไม่เปลี่ยนแปลงไฟล์ เครื่องมือ หรือโปรไฟล์\n\n### ควรเลือกเมื่อใด\n\nเริ่มที่โหมดนี้สำหรับงานเขียนโค้ด จัดการไฟล์ และค้นคว้าทั่วไป โหมดมาตรฐานยังเขียนสคริปต์และประมวลผลไฟล์เป็นชุดได้ด้วย PTC เปลี่ยนวิธีจัดระเบียบการเรียกเครื่องมือ แต่ไม่จำเป็นสำหรับงานแบบเป็นชุด",
    "guideStandardIntro": "เลือกโหมดมาตรฐานเมื่อเริ่มงานใหม่ อธิบายสิ่งที่ต้องการทำ ระบุไฟล์ที่เกี่ยวข้อง และบอกวิธีตรวจสอบผลลัพธ์",
    "guideStandardUsage": "### แก้บั๊ก\n\n> หาสาเหตุที่การส่งฟอร์มค้นหาสองครั้งทำให้ผลลัพธ์หายไป แก้ไขและรันการทดสอบที่เกี่ยวข้อง อธิบายสาเหตุและสิ่งที่เปลี่ยนแปลง\n\nผลลัพธ์ที่คาดหวัง: การแก้ไขโค้ด ผลการทดสอบที่เกี่ยวข้อง และคำอธิบายสาเหตุ\n\n### จัดระเบียบบันทึกโครงการ\n\n> อ่านบันทึก Markdown ในโครงการนี้ สรุปข้อสรุปที่ตกลงกันแล้วและคำถามที่ยังค้างอยู่ พร้อมลิงก์ไปยังไฟล์ต้นทาง\n\nผลลัพธ์ที่คาดหวัง: สรุปพร้อมแหล่งอ้างอิงที่ตรวจสอบเทียบกับบันทึกต้นฉบับได้",
    "headerHint": "พรีเซ็ตเอเจนต์ที่เลือกไว้เมื่อเริ่มงานนี้",
    "howToUse": "วิธีใช้",
    "inUse": "ค่าเริ่มต้นสำหรับงานใหม่",
    "modeExplanation": "รายละเอียดโหมด",
    "nav": "พรีเซ็ตเอเจนต์",
    "noDescription": "ไม่มีคำอธิบาย",
    "presetCordisDescription": "ปรับแต่ง DSH ผ่านการสนทนา ให้เอเจนต์เขียนปลั๊กอินเพิ่มฟีเจอร์หรือส่วนติดต่อผู้ใช้ หรือรวมเครื่องมือและพรอมป์ต์เพื่อสร้างโหมดของคุณเอง",
    "presetCordisName": "โหมดผู้สร้าง",
    "presetMinimalDescription": "เอเจนต์ใช้เทอร์มินัลและการอ่านภาพ พร้อมการย่อบริบท เหมาะสำหรับทดสอบและเปรียบเทียบประสิทธิภาพพื้นฐาน",
    "presetMinimalName": "โหมดมินิมอล",
    "presetPtcDescription": "มีความสามารถทั้งหมดของโหมดมาตรฐาน เหมาะกับงานที่เรียกเครื่องมือเป็นชุด แล้วกรอง จัดระเบียบ ตัดรายการซ้ำ นับ หรือสรุปผลลัพธ์มากกว่า",
    "presetPtcName": "โหมด PTC",
    "presetStandardDescription": "ทำงานกับโค้ด ไฟล์ และข้อมูล เหมาะกับงานส่วนใหญ่ พร้อมการค้นหา แก้ไข คำสั่งเทอร์มินัล และเครื่องมืออื่นตามต้องการ",
    "presetStandardName": "โหมดมาตรฐาน",
    "seatHint": "เลือกพรีเซ็ตเอเจนต์สำหรับงานใหม่ของคุณ",
    "sectionIntro": "เลือกเครื่องมือและวิธีทำงานของเอเจนต์ ใช้โหมดมาตรฐานสำหรับงานทั่วไป หรือโหมดผู้สร้างเพื่อเพิ่มความสามารถให้ DSH",
    "setDefault": "ตั้งเป็นค่าเริ่มต้นสำหรับงานใหม่",
    "standardUnavailable": "โหมดมาตรฐานไม่พร้อมใช้งาน กู้คืนโหมดนี้หรือเลือกโหมดอื่นที่พร้อมใช้งาน",
    "switchRefused": "ไม่สามารถเปลี่ยนเป็น {name}: {reason}",
    "view": "ดูการตั้งค่า"
  },
  "settings.locale": {
    "language.title": "ภาษา"
  },
  "settings.models": {
    "accountSignedIn": "ลงชื่อเข้าใช้แล้ว",
    "add": "เพิ่มผู้ให้บริการโมเดล",
    "addCatalog": "ผู้ให้บริการโมเดลภายนอก",
    "addCatalogExhausted": "ตั้งค่าผู้ให้บริการทั้งหมดในรายการแล้ว",
    "addCatalogHint": "เลือก OpenAI, Anthropic, Kimi หรือผู้ให้บริการอื่นจากรายการในตัว แล้วกรอกคีย์ API",
    "addCustom": "API โมเดลที่กำหนดเอง",
    "addCustomHint": "เชื่อมต่อรีเลย์ เซิร์ฟเวอร์ที่โฮสต์เอง หรือปลายทางที่เข้ากันได้กับ OpenAI, Anthropic หรือ Gemini โดยระบุ URL หลัก โปรโตคอล และโมเดล",
    "addCustomUnavailable": "ไม่มีโปรโตคอล API ให้เลือกกำหนด",
    "addMode": "วิธีเพิ่ม",
    "addModel": "เพิ่มโมเดล",
    "advancedHint": "ฟิลด์อื่นอยู่ใน cordis.patch.yml ให้แก้ไขส่วนนั้นโดยตรง",
    "apply": "นำไปใช้",
    "applying": "กำลังนำไปใช้…",
    "authHelp": "รายละเอียดการยืนยันตัวตน",
    "baseUrl": "URL หลัก",
    "baseUrlConfigured": "ปลายทางที่ผู้ให้บริการตั้งค่าไว้",
    "baseUrlDefault": "ไม่มีปลายทางเริ่มต้น",
    "baseUrlEnvironment": "การตั้งค่าปลายทางของผู้ให้บริการ: {env}",
    "baseUrlPlaceholder": "{url}",
    "cancel": "ยกเลิก",
    "close": "ปิด",
    "conflict": "มีผู้อื่นเปลี่ยนการตั้งค่าระหว่างที่เปิดการ์ดนี้อยู่ ปิดแล้วเปิดอีกครั้งเพื่อแก้ไขค่าปัจจุบัน",
    "contextWindow": "ขนาดบริบท",
    "contextWindowPlaceholder": "ใช้ค่าเริ่มต้นของผู้ให้บริการ",
    "create": "สร้างผู้ให้บริการ",
    "creating": "กำลังสร้าง…",
    "credentialConfigured": "ตั้งค่าคีย์ API แล้ว",
    "credentialMissing": "ไม่มีคีย์ API",
    "customAnthropicBaseUrlPlaceholder": "https://gateway.example",
    "customApi": "โปรโตคอล API",
    "customApiUnset": "ยังไม่ได้เลือก",
    "customBaseUrlInvalid": "กรอก URL แบบ HTTP หรือ HTTPS ที่ถูกต้อง",
    "customBaseUrlPlaceholder": "https://gateway.example/v1",
    "customDisplayName": "ชื่อที่แสดง",
    "customGeminiBaseUrlPlaceholder": "https://gateway.example/v1beta",
    "customNeedsBaseUrl": "ผู้ให้บริการที่กำหนดเองต้องมี URL หลัก",
    "customNeedsModels": "ผู้ให้บริการที่กำหนดเองต้องมีอย่างน้อยหนึ่งโมเดล",
    "customRoute": "รหัสผู้ให้บริการ",
    "customRouteHint": "รหัสตัวพิมพ์เล็กที่ขึ้นต้นด้วยตัวอักษร ใช้ระบุผู้ให้บริการนี้ในคำขอและเป็นชื่อข้อมูลรับรอง โดยต้องไม่ซ้ำกับผู้ให้บริการอื่น",
    "customRouteInvalid": "ขึ้นต้นด้วยตัวอักษรอังกฤษพิมพ์เล็ก ตามด้วยตัวอักษรอังกฤษพิมพ์เล็ก ตัวเลข หรือขีดกลาง",
    "customRouteTaken": "มีผู้ให้บริการใช้รหัสนี้อยู่แล้ว",
    "customTag": "กำหนดเอง",
    "customized": "การตั้งค่าที่ปรับแต่ง",
    "deepSeekAccount": "บัญชี DeepSeek",
    "deepSeekBaseUrl": "https://api.deepseek.com/anthropic (ค่าเริ่มต้นใช้ DEEPSEEK_BASE_URL)",
    "deepSeekEndpointHint": "ใช้ปลายทาง API ที่เข้ากันได้กับ Anthropic Messages",
    "deleteConfirm": "ลบ {provider}",
    "deleteDescription": "การลบ {provider} จะนำการตั้งค่าออก ข้อมูลรับรองที่ใช้อยู่จะยังคงเก็บไว้เนื่องจากจัดการแยกต่างหาก",
    "deleteDescriptionWithCredential": "การลบ {provider} จะนำการตั้งค่าและคีย์ API ที่บันทึกไว้ออก",
    "deleteTitle": "ลบ {provider} หรือไม่?",
    "deleting": "กำลังลบ {provider}…",
    "edit": "แก้ไข",
    "editProvider": "แก้ไข {provider}",
    "fetchAdopt": "อัปเดตรายการ",
    "fetchDescription": "โมเดลเหล่านี้มีให้ใช้จากผู้ให้บริการนี้ โมเดลที่ทำเครื่องหมายไว้จะเป็นรายการที่ใช้",
    "fetchDeselectAll": "ยกเลิกเลือกทั้งหมด",
    "fetchEmpty": "ผู้ให้บริการไม่ได้ส่งรายการโมเดล โปรดเพิ่มเอง",
    "fetchKeepOne": "เลือกไว้อย่างน้อยหนึ่งโมเดล",
    "fetchModels": "ดึงรายการโมเดลที่ใช้ได้",
    "fetchNeedsBaseUrl": "กรอก URL หลักก่อน แล้วจึงดึงรายการ",
    "fetchNoMatches": "ไม่พบโมเดลที่ตรงกัน",
    "fetchSearch": "ค้นหาโมเดล",
    "fetchSelectAll": "เลือกทั้งหมด",
    "fetchTitle": "เลือกโมเดล",
    "fetching": "กำลังสอบถามผู้ให้บริการ…",
    "intro": "กรอกคีย์ API เพื่อใช้โมเดลจากผู้ให้บริการต่อไปนี้",
    "keyBlank": "กรอกคีย์ API หรือเว้นว่างเพื่อใช้คีย์ที่บันทึกไว้",
    "keyBlankNew": "กรอกคีย์ API หรือเว้นว่างหากผู้ให้บริการนี้ยืนยันตัวตนด้วยวิธีอื่น",
    "keyFallbackDetected": "พบตัวแปรสภาพแวดล้อม ({hint})",
    "keyFallbackDetectedHidden": "พบตัวแปรสภาพแวดล้อม",
    "keyFallbackMissing": "ไม่พบตัวแปรสภาพแวดล้อม กรอกคีย์ API หรือตั้งค่า {hint} ในสภาพแวดล้อม",
    "keyFallbackUnchecked": "ยังไม่ได้ยืนยันสถานะข้อมูลรับรองจากสภาพแวดล้อม",
    "keyHelp": "ใช้ข้อมูลรับรองที่บันทึกไว้ก่อน แหล่งสำรองจากสภาพแวดล้อมตามลำดับคือ {env} โดยอ่านจากสภาพแวดล้อมที่ใช้เปิดแอป ตามด้วย $cwd/.env แล้วจึง $DSH_HOME/.env",
    "keyHide": "ซ่อนข้อมูลลับ",
    "keyIllegalCharacters": "รูปแบบคีย์ API ไม่ถูกต้อง โปรดตรวจสอบ",
    "keyInput": "คีย์ API",
    "keyPlaceholder": "กรอกคีย์ API",
    "keyPlaceholderFallback": "เว้นว่างเพื่อยืนยันตัวตนด้วยตัวแปรสภาพแวดล้อม ({hint})",
    "keyRemoveApplied": "ล้างคีย์แล้ว กดนำไปใช้อีกครั้งเพื่อบันทึกการตั้งค่าให้เสร็จ การลบนี้เลิกทำไม่ได้",
    "keyRemovePending": "กดนำไปใช้เพื่อล้างคีย์ API ที่บันทึกไว้ และใช้การยืนยันตัวตนจากสภาพแวดล้อม",
    "keyRemovePendingEnvironment": "กดนำไปใช้เพื่อล้างคีย์ API ที่บันทึกไว้ โดยจะใช้การยืนยันตัวตนจากสภาพแวดล้อม ({hint})",
    "keyReplacePending": "กดนำไปใช้เพื่อแทนที่คีย์ API ที่บันทึกไว้",
    "keyRequired": "กรอกคีย์ API เพื่อดำเนินการต่อ",
    "keyReveal": "แสดงข้อมูลลับ",
    "keySaved": "ใช้คีย์ API เดิมที่บันทึกไว้",
    "loadFailed": "โหลดรายการผู้ให้บริการไม่สำเร็จ",
    "maxTokens": "โทเคนขาออกสูงสุด",
    "maxTokensPlaceholder": "ใช้ค่าเริ่มต้นของผู้ให้บริการ",
    "model": "โมเดล",
    "modelAdvanced": "ตัวเลือกโมเดล",
    "modelCapacityInvalid": "ความจุต้องเป็นตัวเลข โดยอาจลงท้ายด้วย K หรือ M",
    "modelContextInvalid": "ขนาดบริบทต้องเป็นจำนวนบวก เช่น 131072, 256K หรือ 1M",
    "modelDuplicate": "รหัสโมเดลแต่ละรหัสต้องไม่ซ้ำกัน",
    "modelId": "รหัสโมเดล",
    "modelIdDuplicate": "รหัสโมเดลต้องไม่ซ้ำกัน",
    "modelIdRequired": "ต้องระบุรหัสโมเดล",
    "modelInputImage": "รูปภาพ",
    "modelInputText": "ข้อความ",
    "modelInputTypes": "ประเภทข้อมูลขาเข้า",
    "modelMaxTokensInvalid": "โทเคนขาออกสูงสุดต้องเป็นจำนวนบวก เช่น 8192, 64K หรือ 1M",
    "modelName": "ชื่อที่แสดง",
    "modelNameInvalid": "ชื่อที่แสดงต้องไม่ว่าง",
    "modelNamePlaceholder": "ใช้รหัสโมเดลเมื่อเว้นว่าง",
    "modelReasoning": "ระดับการใช้เหตุผล",
    "modelReasoningAdd": "เพิ่มระดับ",
    "modelReasoningHelp": "เกี่ยวกับระดับการใช้เหตุผล",
    "modelReasoningHelpText": "ค่าที่ส่งให้ API จะอยู่ในฟิลด์ระดับการใช้เหตุผลของคำขอ เช่น reasoning_effort ของ OpenAI ค่าเริ่มต้นคือชื่อระดับ หากเอกสาร API ของผู้ให้บริการระบุค่าอื่น ให้ใช้ตามเอกสาร ตัวเลือกปิดจะปิดการใช้เหตุผลและไม่ต้องระบุค่า แต่หากมีค่าอยู่ในการตั้งค่าแล้ว ค่านั้นจะยังถูกเก็บไว้และส่งไป",
    "modelReasoningLevel": "ระดับ",
    "modelReasoningLevelsOnly": "โปรโตคอล API นี้รองรับเฉพาะระดับ minimal, low, medium และ high โดยใช้ชื่อระดับเป็นค่าที่ส่งให้ API โปรดเปลี่ยนหรือลบระดับอื่น",
    "modelReasoningNeedsLevel": "เพิ่มอย่างน้อยหนึ่งระดับนอกเหนือจากปิด หรือปิดการกำหนดระดับการใช้เหตุผล",
    "modelReasoningOffValuePlaceholder": "ปิดการใช้เหตุผล",
    "modelReasoningRemove": "ลบระดับ",
    "modelReasoningValue": "ค่าที่ส่งให้ API",
    "modelReasoningValueRequired": "ทุกระดับนอกเหนือจากปิดต้องมีค่าที่ส่งให้ API และค่าต้องไม่ว่าง",
    "models": "โมเดล",
    "modelsCustomized": "รายการโมเดลที่ปรับแต่ง",
    "modelsEmpty": "จะไม่มีโมเดลแสดงในตัวเลือก แต่ยังส่งรหัสที่ไม่อยู่ในรายการได้โดยตรง",
    "modelsInherited": "ใช้ค่าเริ่มต้นของอะแดปเตอร์",
    "nav": "โมเดล",
    "onboardingDescription": "ตั้งค่าผู้ให้บริการ DeepSeek อย่างเป็นทางการเพื่อเริ่มสร้างงาน",
    "onboardingLater": "ตั้งค่าภายหลัง",
    "onboardingSave": "บันทึกและดำเนินการต่อ",
    "onboardingSaving": "กำลังบันทึก…",
    "onboardingTitle": "เพิ่มคีย์ API เพื่อเริ่มต้นใช้งาน",
    "protocolAnthropicMessages": "Anthropic Messages",
    "protocolGemini": "Gemini API",
    "protocolOpenAiCompletions": "OpenAI Chat Completions",
    "protocolOpenAiResponses": "OpenAI Responses",
    "provider": "ผู้ให้บริการ",
    "readOnly": "เอกสารการตั้งค่าในการติดตั้งนี้เป็นแบบอ่านอย่างเดียว",
    "remove": "ลบ",
    "removeModel": "ลบโมเดล",
    "removeProvider": "ลบ {provider}",
    "reorderModel": "จัดลำดับโมเดล",
    "reorderModelHelp": "ลากเพื่อจัดลำดับ หรือใช้ปุ่มลูกศรขึ้นและลง",
    "resetModels": "คืนค่าเริ่มต้น",
    "retry": "ลองอีกครั้ง",
    "retryAlwaysHint": "คำขอที่ล้มเหลวจะลองใหม่จนกว่าจะสำเร็จหรือหยุดรอบสนทนา",
    "retryBackoff": "การเพิ่มเวลารอ",
    "retryCodeAdd": "เพิ่ม",
    "retryCodeCustom": "รหัสข้อผิดพลาดที่กำหนดเอง",
    "retryCodeEmptyResponse": "คำตอบว่างเปล่า",
    "retryCodeMalformedResponse": "รูปแบบคำตอบไม่ถูกต้อง",
    "retryCodeQuota": "เกินโควตา",
    "retryCodeRateLimit": "เกินอัตราการเรียกใช้ที่กำหนด",
    "retryCodeServer": "เซิร์ฟเวอร์ผิดพลาด",
    "retryCodeStreamClosed": "สตรีมปิดก่อนกำหนด",
    "retryCodeTimeout": "หมดเวลา",
    "retryCodeTransport": "เครือข่ายผิดพลาด",
    "retryCodes": "รหัสข้อผิดพลาด",
    "retryCodesDuplicate": "รหัสข้อผิดพลาดแต่ละรหัสต้องไม่ซ้ำกัน",
    "retryCodesInvalid": "รหัสข้อผิดพลาดต้องเป็นข้อความที่ไม่ว่าง",
    "retryDelayOrder": "เวลารอเริ่มต้นต้องไม่เกินเวลารอสูงสุด",
    "retryInitialDelay": "เวลารอเริ่มต้น (มิลลิวินาที)",
    "retryJitter": "สัดส่วนการสุ่มเวลารอ",
    "retryMaxDelay": "เวลารอสูงสุด (มิลลิวินาที)",
    "retryMaxRetries": "จำนวนครั้งสูงสุดที่ลองใหม่",
    "retryModeAlways": "ข้อผิดพลาดทั้งหมด",
    "retryModeDefault": "ค่าเริ่มต้น ({mode})",
    "retryModeNormal": "ข้อผิดพลาดชั่วคราว",
    "retryPolicy": "นโยบายการลองใหม่",
    "retryValueInteger": "กรอกจำนวนเต็ม",
    "retryValueMax": "ต้องไม่เกิน {max}",
    "retryValueMin": "ต้องไม่น้อยกว่า {min}",
    "retryValueNumber": "กรอกตัวเลข",
    "retryValuePositive": "ต้องมากกว่า 0",
    "savedProvider": "บันทึก {provider} แล้ว",
    "settingsPathUnresolvable": "ระบุพาธการตั้งค่าไม่ได้",
    "title": "โมเดล",
    "welcomeBody": "DeepSeek Harness 0.2 ยังเป็นรุ่นพรีวิว และยังมีหลายส่วนที่ต้องปรับปรุงและพัฒนาต่อ เรายินดีรับข้อเสนอแนะจากนักพัฒนาและผู้ใช้ทุกคน แอปเดสก์ท็อปใหม่นี้ออกแบบสำหรับผู้ใช้ทั่วไปมากขึ้น ส่วนคุณสมบัติขั้นสูงสำหรับนักพัฒนาสามารถเปิดได้ในการตั้งค่า คุณสมบัติของ DeepSeek Harness และ API ปลั๊กอินยังจะเปลี่ยนแปลงและพัฒนาอย่างรวดเร็ว ก่อนจะค่อย ๆ มีเสถียรภาพมากขึ้น\n\nเราหวังว่าจะได้ร่วมสำรวจขีดจำกัดของปัญญาประดิษฐ์กับผู้ใช้และนักพัฒนาทั่วโลก บนโครงสร้างพื้นฐานโอเพนซอร์สที่ใช้ซ้ำและประกอบเข้าด้วยกันได้ ขอเชิญทุกคนนำแนวคิดมาสร้างให้เป็นจริงด้วย DeepSeek Harness และร่วมพัฒนาชุมชนให้มีปลั๊กอินที่หลากหลายยิ่งขึ้น",
    "welcomeContinue": "ดำเนินการต่อ",
    "welcomeError": "บันทึกการรับทราบไม่ได้ โปรดลองอีกครั้ง",
    "welcomeTitle": "แจ้งการใช้งานรุ่นพรีวิว"
  },
  "settings.openai-codex": {
    "accountHeading": "บัญชี ChatGPT",
    "accountModule": "บัญชีและโควตา",
    "accountModuleSummary": "สถานะ: {status}",
    "actionFailed": "ส่งคำขอต่อเนื่องไม่ได้",
    "actionSending": "กำลังส่ง…",
    "activeAccountHelp": "การเปลี่ยนบัญชีมีผลกับคำขอ Codex ใหม่เท่านั้น คำขอที่กำลังทำงานจะไม่เปลี่ยนแปลง",
    "adaptiveTaskLanguage": "th",
    "addAccount": "เพิ่มบัญชี",
    "addingAccountKeepsCurrent": "ยังรอการอนุญาตในเบราว์เซอร์อยู่ บัญชีปัจจุบันยังคงถูกเลือกสำหรับคำขอใหม่",
    "agentPromptCopied": "คัดลอกพรอมป์ต์สำหรับเอเจนต์แล้ว",
    "agentPromptCopyFailed": "คัดลอกอัตโนมัติไม่ได้ โปรดคัดลอกพรอมป์ต์สำหรับเอเจนต์ด้วยตนเอง",
    "agentUpgradeFinish": "เมื่อเอเจนต์รายงานว่าทำเสร็จแล้ว ให้กลับมาที่นี่และตรวจสอบเวอร์ชันที่ติดตั้งอีกครั้ง",
    "agentUpgradeHelp": "คัดลอกคำขอสั้น ๆ นี้ให้เอเจนต์ของคุณ เอเจนต์จะตรวจสอบคำแนะนำของโครงการและเลือกวิธีติดตั้งหรืออัปเดตที่เหมาะสมได้",
    "agentUpgradePrompt": "โปรดตรวจสอบคำแนะนำการติดตั้งที่โครงการนี้เผยแพร่ และระบุว่า DSH ปัจจุบันเป็น Desktop หรือ Web ก่อนเตรียมอัปเกรดปลั๊กอินที่เข้ากันได้สำหรับโปรไฟล์ที่ถูกต้อง รักษาข้อมูลรับรองและค่าเริ่มต้นของผู้ใช้ไว้ อย่าฝืนข้ามการตรวจสอบเวอร์ชันหรือเริ่มโฮสต์อีกตัว: {repository}",
    "authorizationHelp": "คุณสามารถเปิดหน้าการอนุญาตอีกครั้ง หรือยกเลิกแล้วเริ่มใหม่ได้ การยกเลิกจะไม่ทำให้บัญชีที่มีอยู่ออกจากระบบ",
    "authorize": "อนุญาตการเข้าถึง",
    "autoReviewCancel": "ยกเลิก",
    "autoReviewConfirm": "ยืนยัน",
    "autoReviewConfirmTitle": "เปิดใช้การตรวจสอบอัตโนมัติของ Codex หรือไม่?",
    "autoReviewDetails": "ข้อมูลที่ส่งและวิธีรับมือเมื่อทำงานล้มเหลว",
    "autoReviewDisclosure": "คำขอตรวจสอบจะส่งข้อความสนทนาล่าสุด การเรียกใช้เครื่องมือและผลลัพธ์ที่เกี่ยวข้อง อาร์กิวเมนต์ของเครื่องมือ ไดเรกทอรีทำงาน และการดำเนินการที่วางแผนไว้ไปยัง chatgpt.com โดยไม่ส่งการใช้เหตุผลที่ซ่อนไว้หรือข้อมูลรับรองที่จัดเก็บไว้",
    "autoReviewFailureDisclosure": "หากผู้ตรวจสอบทำงานไม่สำเร็จ DSH จะยังให้มนุษย์เป็นผู้อนุมัติ การปฏิเสธอย่างชัดเจนจะบล็อกการดำเนินการ",
    "autoReviewOfficialBadge": "ความสามารถอย่างเป็นทางการของ Codex",
    "autoReviewOfficialDocs": "เอกสารการตรวจสอบอัตโนมัติของ OpenAI",
    "automaticDetection": "ตรวจหาอัตโนมัติ",
    "automaticDetectionHelp": "ตรวจสอบพอร์ตพร็อกซีในเครื่องที่ใช้กันทั่วไปและตัวแปรสภาพแวดล้อม โดยไม่เปลี่ยนการเชื่อมต่อที่บันทึกไว้",
    "available": "พร้อมใช้งาน",
    "callbackAccepted": "รับข้อมูลเรียกกลับแล้ว กำลังรอให้การอนุญาตเสร็จสิ้น…",
    "callbackFailed": "ส่งข้อมูลเรียกกลับไม่ได้ ลองอีกครั้งหรือดำเนินการอนุญาตต่อ",
    "callbackInvalid": "URL เรียกกลับหรือสถานะการอนุญาตไม่ถูกต้อง คัดลอก URL แบบเต็มจากการอนุญาตครั้งปัจจุบันแล้วลองอีกครั้ง",
    "callbackNoPending": "ไม่มีการอนุญาตที่รออยู่ ให้ดำเนินการอนุญาตต่อหรือเริ่มลงชื่อเข้าใช้อีกครั้ง",
    "callbackUnconfirmed": "การส่งหมดเวลารอ แต่อาจรับข้อมูลแล้ว กำลังตรวจสอบสถานะการอนุญาตต่อ…",
    "cancel": "ยกเลิก",
    "cancelGeneration": "หยุดเทิร์นนี้",
    "cancelImageEdit": "ยกเลิกการแก้ไข",
    "cancelSignIn": "ยกเลิกการลงชื่อเข้าใช้",
    "canceled": "ยกเลิกการสร้างภาพแล้ว",
    "canceledDetail": "หยุดรอในเครื่องแล้ว คำขออาจยังประมวลผลอยู่",
    "cancelingGeneration": "กำลังหยุด…",
    "capabilitiesHeading": "ความสามารถเสริม",
    "capabilitiesIntro": "เลือกความสามารถเสริมของ Codex ที่อนุญาตให้โปรไฟล์ dsh นี้ลงทะเบียนใช้งาน",
    "capabilitiesModule": "ความสามารถ",
    "capabilitiesModuleEnabled": "เปิดใช้ {count} รายการ",
    "changeConnection": "เปลี่ยนการเชื่อมต่อ",
    "checkCurrentConnection": "ตรวจสอบการเชื่อมต่อปัจจุบัน",
    "checkForUpdates": "ตรวจสอบการอัปเดต",
    "checkingCurrentConnection": "กำลังตรวจสอบพร็อกซีที่บันทึกไว้…",
    "checkingCurrentConnectionButton": "กำลังตรวจสอบ…",
    "checkingForUpdates": "กำลังตรวจสอบการอัปเดต…",
    "choosePreviewEdit": "ใช้ภาพตัวอย่างในการสนทนานี้ (ต้นฉบับไม่พร้อมใช้งาน)",
    "closeSettings": "ปิด",
    "collapse": "ย่อการตั้งค่า",
    "compatibilityPluginCurrentOnly": "Codex Connect: ปัจจุบัน {current} · ไม่มีข้อมูลเวอร์ชันล่าสุด",
    "compatibilityPluginDifferent": "Codex Connect: ปัจจุบัน {current} · ล่าสุด {latest}",
    "compatibilityPluginSame": "Codex Connect: {version} · เป็นรุ่นล่าสุดแล้ว",
    "compatibilityPluginUpdateBody": "ยังไม่ได้ตรวจสอบว่าปลั๊กอินที่ติดตั้งเข้ากันได้กับ DSH เวอร์ชันนี้ แต่ปลั๊กอินรุ่นล่าสุดผ่านการตรวจสอบแล้ว ให้อัปเดตปลั๊กอินก่อนอัปเดต DSH",
    "compatibilityPluginUpdateTitle": "อัปเดต Codex Connect ก่อน",
    "completed": "สร้างภาพแล้ว",
    "composerFiveHourQuotaSummary": "โควตา Codex 5 ชั่วโมง: เหลือ {percent}%; รีเซ็ต {time}",
    "composerFiveHourShort": "5 ชม.",
    "composerWeeklyQuota": "โควตา Codex รายสัปดาห์",
    "composerWeeklyQuotaSummary": "โควตา Codex รายสัปดาห์: เหลือ {percent}%; รีเซ็ต {time}",
    "composerWeeklyShort": "7 วัน",
    "configurationHeading": "การกำหนดค่า Codex Connect",
    "configureProxyManually": "กำหนดค่าด้วยตนเอง",
    "confirmRemove": "ยืนยันการนำออก",
    "contextAboveDefault": "สูงกว่าค่าเริ่มต้นในแค็ตตาล็อก: คำขอที่ใหญ่ขึ้นอาจใช้โควตามากขึ้น หรือถูกปฏิเสธโดยบัญชีหรือเส้นทางบริการของคุณ ปลั๊กอินนี้ยังไม่ได้ทดสอบความจุในช่วงนี้",
    "contextAdjust": "ปรับค่า",
    "contextCustom": "กำหนดเอง",
    "contextDefault": "ค่าเริ่มต้นจากแค็ตตาล็อก",
    "contextHide": "ซ่อนการปรับค่า",
    "contextHigh": "มาก",
    "contextInvalid": "กรอกจำนวนโทเคนที่จัดสรรเป็นจำนวนเต็มภายในช่วงการกำหนดค่าของโมเดล หรือเลือกคืนค่าเริ่มต้น",
    "contextLimitFallback": "ยังไม่ยืนยันขีดจำกัดการกำหนดค่าที่สูงกว่า จึงจำกัดไว้ที่ค่าเริ่มต้นของแค็ตตาล็อกที่ติดตั้ง",
    "contextLimitSource": "แหล่งข้อมูล: แค็ตตาล็อกการกำหนดค่า Codex อย่างเป็นทางการ (2026-09-05)",
    "contextLow": "น้อย",
    "contextMaximum": "ขีดจำกัดการกำหนดค่า",
    "contextMedium": "ปานกลาง",
    "contextReset": "คืนค่าเริ่มต้น",
    "contextSlider": "ปรับจำนวนโทเคนบริบทที่จัดสรร",
    "contextTokens": "ความยาวบริบท",
    "contextWarning": "การกำหนดบริบททับค่าเดิมเปลี่ยนการจัดสรรฝั่งไคลเอนต์ ไม่ใช่ความจุของเซิร์ฟเวอร์ ค่าที่สูงเกินไปอาจทำให้คำขอล้มเหลว การซ่อนโมเดลจะยังเก็บค่าที่จัดสรรไว้ การเปลี่ยนแปลงมีผลหลังบันทึก",
    "continueAuthorization": "ดำเนินการอนุญาตต่อ",
    "copyForAgent": "คัดลอกสำหรับเอเจนต์",
    "copyPrompt": "คัดลอกพรอมป์ต์",
    "credits": "เครดิต",
    "currentAccount": "ปัจจุบัน",
    "currentAccountDetail": "บัญชีปัจจุบัน",
    "currentConnection": "การเชื่อมต่อปัจจุบัน",
    "currentConnectionFailed": "พร็อกซีที่บันทึกไว้เชื่อมต่อกับปลายทาง Codex ไม่ได้",
    "currentConnectionHealthy": "การเชื่อมต่อพร้อมใช้งาน",
    "currentProxy": "ใช้อยู่ในขณะนี้",
    "currentVersion": "เวอร์ชันปัจจุบัน: {version}",
    "customProxyActive": "เลือกพร็อกซีที่กำหนดเองแล้ว: {proxyUrl}",
    "desktopOriginDescription": "ปิด DSH Desktop ให้หมดแล้วเปิดใหม่ จากนั้นลองอนุญาตการเข้าถึงอีกครั้ง",
    "desktopOriginDiagnosticsHelp": "หากยังพบปัญหา ให้ตรวจสอบเวอร์ชันระบบที่ Desktop ใช้งานและ Codex Connect แล้วรวบรวมข้อมูลวินิจฉัยของโปรไฟล์ Desktop คำสั่งอนุญาตต้นทางเว็บไม่ใช้กับแอป Desktop",
    "desktopOriginTitle": "คำขอบัญชีจาก Desktop ถูกปฏิเสธ",
    "detectProxy": "ตรวจหาพร็อกซี",
    "detectingProxy": "กำลังตรวจหา…",
    "directConnection": "เชื่อมต่อโดยตรง",
    "directConnectionDescription": "Codex Connect ไม่ใช้พร็อกซีเฉพาะ",
    "disableProxy": "ปิดใช้พร็อกซี",
    "discard": "ทิ้งการเปลี่ยนแปลง",
    "dismissUpdate": "ภายหลัง",
    "download": "ดาวน์โหลด",
    "downloadFailed": "ดาวน์โหลดไม่สำเร็จ ลองอีกครั้ง",
    "downloadNamed": "ดาวน์โหลด {name}",
    "downloadOriginal": "ดาวน์โหลดต้นฉบับ",
    "downloadOriginalNamed": "ดาวน์โหลดต้นฉบับ {name}",
    "downloadPreview": "ดาวน์โหลดภาพตัวอย่าง",
    "downloadPreviewNamed": "ดาวน์โหลดภาพตัวอย่าง {name}",
    "downloading": "กำลังดาวน์โหลด…",
    "editFrom": "แก้ไขจาก {source}; ภาพอ้างอิง {count} ภาพ",
    "editImage": "แก้ไขภาพนี้",
    "editInstructions": "ต้องการเปลี่ยนอะไร?",
    "editRequest": "ทำต่อจากภาพก่อนหน้า ถามฉันก่อนว่าต้องการเปลี่ยนอะไร แล้วจึงสร้างภาพใหม่",
    "editTarget": "ภาพที่จะแก้ไข",
    "enableAutoReview": "การตรวจสอบอัตโนมัติของ Codex (อนุมัติแทนฉัน)",
    "enableAutoReviewHelp": "ส่งคำขออนุมัติที่เข้าเกณฑ์จากเซสชัน OpenAI-Codex ไปยังผู้ตรวจสอบ Codex แยกต่างหาก การตั้งค่านี้เปลี่ยนผู้ตรวจสอบ แต่ไม่ขยายสิทธิ์ด้านไฟล์ เครือข่าย หรือเครื่องมือของ DSH",
    "enableImageGeneration": "เปิดใช้การสร้างภาพด้วย GPT Image",
    "enableImageGenerationHelp": "สร้างหรือแก้ไขภาพโดยยังใช้โมเดลแชตปัจจุบัน รวมถึง DeepSeek เครื่องมือภาพจะส่งคืนตัวอ้างอิงการเลือกเพื่อให้แก้ไขต่อได้ โดยส่งไปยังบริการภาพเฉพาะภาพเป้าหมายและภาพอ้างอิงที่เลือกเท่านั้น",
    "enableImageTool": "เปิดใช้เครื่องมือ view_image",
    "enableImageToolHelp": "อนุญาตให้อ่านไฟล์ในเครื่องที่ได้รับอนุมัติ และดึงภาพจากเครือข่ายสาธารณะสำหรับโมเดลที่ดูภาพได้",
    "enableNativeCompaction": "การจัดการบริบทในตัวของ Codex",
    "enableNativeCompactionHelp": "ใช้การย่อบริบทในตัวของ Codex โดยอัตโนมัติเมื่อการสนทนาที่ยาวต้องจัดการบริบท โดยมุ่งเก็บข้อกำหนดสำคัญและความคืบหน้าของงาน เพื่อให้ทำงานระยะยาวต่อได้โดยไม่ต้องให้ข้อมูลพื้นหลังซ้ำมากนัก",
    "enableNewSessionFastMode": "โหมดเร็วสำหรับการสนทนาใหม่",
    "enableNewSessionFastModeHelp": "ปิดไว้เป็นค่าเริ่มต้น การสนทนาหลักใหม่ที่ใช้ Codex จะขอรับบริการแบบลำดับความสำคัญสูง การสนทนาที่มีอยู่และค่าที่เลือกเองจะไม่เปลี่ยนแปลง บริการแบบนี้อาจใช้โควตาเร็วขึ้น",
    "enableNewSubagentFastMode": "โหมดเร็วสำหรับการสนทนาใหม่ของเอเจนต์ย่อย",
    "enableNewSubagentFastModeHelp": "ค่าเริ่มต้นที่เลือกเปิดแยกได้สำหรับการสนทนาใหม่ของเอเจนต์ย่อยที่ใช้ Codex ปิดไว้เป็นค่าเริ่มต้น และไม่สืบทอดการตั้งค่าจากการสนทนาหลัก",
    "enableSearch": "เปิดใช้ผู้ให้บริการค้นหา Codex",
    "enableSearchHelp": "ทำให้ OpenAI Codex พร้อมใช้งานและเลือกเป็นผู้ให้บริการค้นหาเว็บสำหรับทั้งโปรไฟล์ขณะเปิดใช้งาน",
    "exactRemaining": "เหลือ {remaining} จาก {limit} เครดิต",
    "expand": "ขยายการตั้งค่า",
    "failed": "สร้างภาพไม่สำเร็จ",
    "fiveHourLimit": "ขีดจำกัด 5 ชั่วโมง",
    "generating": "กำลังสร้างภาพ",
    "generatingDetail": "กำลังสร้างภาพอยู่ การหยุดจะยกเลิกเทิร์นปัจจุบัน",
    "hideAccounts": "ซ่อนบัญชี",
    "hideQuota": "ซ่อนโควตา",
    "hideReleaseNotes": "ซ่อนบันทึกการอัปเดต",
    "hideTechnicalDetails": "ซ่อนรายละเอียดทางเทคนิค",
    "hourLimit": "ขีดจำกัด {count} ชั่วโมง",
    "image": "ภาพที่สร้าง",
    "imageDetail": "{name}: {format} · {width} × {height} · {size}",
    "imageDetails": "รายละเอียดภาพ",
    "imageEdited": "แก้ไขภาพแล้ว",
    "imageEditing": "กำลังแก้ไขภาพ…",
    "imageInputRecovery": "แก้ไขการเลือกหรือคำสั่งในการสนทนาก่อนลองอีกครั้ง ระบุว่าจะให้แก้ไขสำเนาที่อัปโหลดหรือต้นฉบับที่จัดเก็บไว้ การส่งข้อมูลเดิมซ้ำจะไม่แก้ข้อผิดพลาดนี้",
    "imageModelHint": "ชื่อโมเดลที่แนะนำสำหรับเส้นทางบริการภาพ",
    "imageModelHintDefault": "ค่าเริ่มต้น: gpt-image-2; ล้างค่าเพื่อคืนค่าเริ่มต้น",
    "imageModelHintHelp": "ค่าเสริมสำหรับแนะนำเส้นทางบริการที่ยังไม่ได้ตรวจสอบ อาจถูกละเลยหรือปฏิเสธ และไม่รับประกันว่าจะได้ผลลัพธ์จากโมเดลที่ระบุ",
    "imagePreviewUnavailable": "บันทึกต้นฉบับแล้ว แต่ภาพตัวอย่างในการสนทนาไม่พร้อมใช้งาน ดาวน์โหลดต้นฉบับหรือแก้ไขภาพนี้ได้ โดยไม่ต้องสร้างใหม่เพื่อกู้คืนภาพ",
    "imageRequestUncertain": "บริการอาจยังประมวลผลคำขอนี้อยู่ การส่งซ้ำอาจใช้โควตาเพิ่ม",
    "imageStorageRecovery": "ตรวจสอบที่เก็บข้อมูลในเครื่องและพื้นที่ว่างก่อนลองอีกครั้ง บริการอาจประมวลผลคำขอนี้ไปแล้ว",
    "imageUnknownFailure": "คำขอภาพล้มเหลว รายละเอียดภายในของบริการถูกซ่อนไว้ ตรวจสอบภาพที่เลือกและบัญชีก่อนลองอีกครั้ง",
    "intro": "ใช้สมาชิก ChatGPT ของคุณใน dsh พร้อมตัวเลือกสร้างภาพด้วย GPT Image โดยไม่ต้องใช้คีย์ API",
    "invalidImageModelHint": "เว้นว่าง หรือใช้ตัวอักษร ASCII ตัวเลข จุด ขีดล่าง หรือขีดกลาง จำนวน 1–128 ตัว โดยเริ่มด้วยตัวอักษรหรือตัวเลข",
    "invalidProxyUrl": "กรอกต้นทางพร็อกซี HTTP(S) โดยไม่มีข้อมูลรับรองหรือเส้นทาง",
    "invalidSearchModel": "กรอกโมเดลค้นหา",
    "invalidSearchTokens": "จำนวนโทเคนผลลัพธ์การค้นหาสูงสุดต้องเป็นจำนวนเต็มบวก",
    "keepDirectConnection": "ใช้การเชื่อมต่อโดยตรงต่อไป",
    "legacySpeedDefault": "ใช้ค่าความเร็วแบบเร็วจากการตั้งค่าเดิม",
    "lightboxClose": "ปิดภาพตัวอย่าง",
    "lightboxDialog": "ภาพตัวอย่าง",
    "lightboxReset": "ปรับภาพให้พอดี",
    "lightboxZoomIn": "ขยาย",
    "lightboxZoomOut": "ย่อ",
    "loadFailed": "โหลดภาพไม่ได้ ลองอีกครั้ง",
    "loading": "กำลังโหลดภาพ",
    "loadingAccount": "กำลังโหลดบัญชี…",
    "login": "ลงชื่อเข้าใช้ด้วย ChatGPT",
    "loginAgain": "ลงชื่อเข้าใช้อีกครั้ง",
    "logout": "ออกจากระบบ",
    "manageAccount": "จัดการ",
    "manageAccounts": "จัดการบัญชี",
    "manualCallbackHelp": "ใช้เบราว์เซอร์บนอุปกรณ์อื่นอยู่หรือไม่? หลังอนุญาตผ่าน ChatGPT การเชื่อมต่อ localhost จะมีข้อผิดพลาดตามคาด เพราะ DSH ทำงานอยู่อีกเครื่อง ให้คัดลอก URL แบบเต็มจากแถบที่อยู่ของเบราว์เซอร์นั้นมาวางที่นี่ รวมสตริงคำค้นทั้งหมดด้วย หากกลับมาที่หน้านี้แล้ว ให้เลือกดำเนินการอนุญาตต่อ (หรือเปิดหน้าการอนุญาตอีกครั้ง) เพื่อกลับไปยังการลงชื่อเข้าใช้ที่รออยู่",
    "manualCallbackLabel": "URL เรียกกลับแบบเต็ม",
    "manualCallbackPrivacy": "URL นี้มีข้อมูลลับชั่วคราวสำหรับลงชื่อเข้าใช้ ให้ส่งที่นี่เท่านั้น อย่าแชร์ในแชต บันทึก หรือภาพหน้าจอ ช่องกรอกจะถูกล้างหลังส่งและจะไม่บันทึกค่าไว้",
    "manualCallbackSubmit": "ส่ง URL เรียกกลับ",
    "manualCallbackToggle": "ดำเนินการอนุญาตให้เสร็จด้วย URL เรียกกลับ",
    "manualEntry": "กรอกด้วยตนเอง",
    "manualProxyHelp": "กรอกที่อยู่พร็อกซี HTTP(S) โดยไม่มีข้อมูลรับรอง เส้นทาง คำค้น หรือส่วนแฟรกเมนต์",
    "modeCached": "จากแคช",
    "modeIndexed": "จากดัชนี",
    "modeLive": "เว็บปัจจุบัน",
    "modelCatalog": "โมเดลที่แสดงในตัวเลือก",
    "modelCatalogFailed": "โหลดโมเดลที่ใช้งานได้ไม่สำเร็จ",
    "modelCatalogIntro": "เลือกโมเดล Codex ที่จะแสดงในตัวเลือกโมเดล การสนทนาที่มีอยู่ยังใช้โมเดลที่ซ่อนอยู่ต่อได้",
    "modelCatalogLoading": "กำลังโหลดโมเดลที่ใช้งานได้…",
    "modelContext": "บริบท",
    "modelsAccountHelp": "ตัวเลือกพร็อกซี การแสดงโมเดล การค้นหา และภาพ ยังคงอยู่ใน การตั้งค่า → ปลั๊กอิน → Codex Connect หรือเปิดได้ที่นี่:",
    "modelsModule": "โมเดล",
    "modelsModuleDefault": "โมเดลทั้งหมดในแค็ตตาล็อก",
    "modelsModuleSelected": "แสดง {count} โมเดล",
    "modelsProviderName": "Openai-Codex",
    "modelsProviderSupport": "ให้บริการโดยปลั๊กอิน Codex Connect",
    "monthlyLimit": "ขีดจำกัดเครดิตรายเดือน",
    "moreSettings": "การตั้งค่าเพิ่มเติม",
    "moreSettingsTitle": "การตั้งค่า Codex Connect",
    "nativeCompactionBadge": "ทดลอง · ปิดไว้เป็นค่าเริ่มต้น",
    "nativeCompactionConsent": "เปิดใช้และบันทึกเพื่ออนุญาตให้จัดการการสนทนา Codex ในโปรไฟล์นี้โดยอัตโนมัติ โดยไม่ต้องสั่งหรือยืนยันการย่อบริบทแต่ละครั้ง การดำเนินการนี้ไม่เปลี่ยนโมเดล ระดับการใช้เหตุผล หรือเปิดความสามารถอื่น",
    "nativeCompactionDetails": "จังหวะการทำงาน การปิดใช้ และวิธีสำรอง",
    "nativeCompactionDisableHelp": "หากการย่อบริบทในตัวใช้งานไม่ได้ DSH สามารถใช้วิธีสรุปตามปกติได้ การปิดใช้จะหยุดการย่อบริบทในตัวครั้งใหม่ คำขอที่กำลังทำงานอาจทำต่อจนเสร็จ และจุดตรวจสอบของเซสชันในตัวที่มีอยู่ยังอ่านได้",
    "nativeCompactionHostPolicy": "ใช้จังหวะและเกณฑ์การจัดการบริบทที่มีอยู่ของ DSH หากโฮสต์ปิดการย่อบริบทอัตโนมัติไว้อย่างชัดเจนหรือไม่มีบริการย่อบริบท สวิตช์นี้จะไม่เปลี่ยนทับการกำหนดค่าของโฮสต์",
    "nativeCompactionPending": "ยังไม่บันทึกการเปลี่ยนแปลง",
    "nativeCompactionRisk": "การย่อบริบทอาจทำให้รายละเอียดสูญหาย ไม่ใช่สำเนาการสนทนาที่ครบถ้วน",
    "nativeCompactionSavedOff": "การตั้งค่าที่บันทึกไว้: ปิดใช้",
    "nativeCompactionSavedOn": "การตั้งค่าที่บันทึกไว้: เปิดใช้",
    "networkHeading": "การเชื่อมต่อเครือข่าย",
    "networkIntro": "Codex Connect เชื่อมต่อโดยตรงเป็นค่าเริ่มต้น หากจำเป็น ให้ตรวจหาพร็อกซีในเครื่องหรือกรอกค่าด้วยตนเอง",
    "networkModule": "เครือข่าย",
    "networkModuleDirect": "เชื่อมต่อโดยตรง",
    "networkModuleProxy": "เปิดใช้พร็อกซี",
    "newSessionSpeedHelp": "ค่าเริ่มต้นที่เลือกเปิดแยกกันได้ มีผลครั้งเดียวเมื่อเริ่มต้น หากไม่ระบุหรือรีเซ็ต จะคงการตั้งค่าเดิมไว้ ความเร็วสูงสุดใช้ได้เฉพาะเซสชัน Codex Astra/Sol61 ที่ลงชื่อเข้าใช้แล้ว โดยต้องลงชื่อเข้าใช้ก่อนเริ่มต้น ค่าที่มีอยู่หรือที่เลือกเองจะไม่เปลี่ยนแปลง ยังไม่ได้ตรวจสอบสิทธิ์การใช้งาน",
    "newSessionSpeedMode": "ความเร็วสำหรับการสนทนาใหม่",
    "newSubagentSpeedMode": "ความเร็วสำหรับการสนทนาใหม่ของเอเจนต์ย่อย",
    "newVersionAvailable": "มีเวอร์ชันใหม่: {version}",
    "noCuratedHighlights": "ไม่มีสรุปการเปลี่ยนแปลงสำคัญสำหรับผู้ใช้ ดูรายละเอียดทางเทคนิคได้ในบันทึกประจำรุ่นฉบับเต็ม",
    "open": "เปิดภาพตัวอย่าง",
    "openLoginInBrowser": "เปิดหน้าลงชื่อเข้าใช้ ChatGPT",
    "openNamed": "เปิด {name}",
    "openReleasePage": "เปิดหน้าเผยแพร่รุ่น",
    "originalImageDetail": "ต้นฉบับ {name}: {format} · {width} × {height} · {size}",
    "pendingDirect": "หลังบันทึก Codex Connect จะหยุดใช้พร็อกซีและเชื่อมต่อโดยตรง",
    "pendingProxy": "หลังบันทึก Codex Connect จะใช้ {proxyUrl}",
    "percentRemaining": "เหลือ {percent}%",
    "popupBlocked": "เบราว์เซอร์บล็อกหน้าต่างลงชื่อเข้าใช้ อนุญาตป๊อปอัปสำหรับหน้า dsh นี้แล้วลองอีกครั้ง",
    "popupBlockedFallback": "เปิดหน้าต่างลงชื่อเข้าใช้อัตโนมัติไม่ได้ ใช้ลิงก์ด้านล่างเพื่อดำเนินการต่อในเบราว์เซอร์",
    "previewEditNotice": "มีเฉพาะภาพตัวอย่างที่บันทึกไว้ การแก้ไขอาจลดคุณภาพของภาพ",
    "previewImageDetail": "ภาพตัวอย่างในการสนทนา: {format} · {width} × {height} · {size}",
    "promptCopied": "คัดลอกแล้ว",
    "promptCopyFailed": "คัดลอกไม่ได้",
    "promptLabel": "พรอมป์ต์ที่ใช้สร้างภาพ",
    "proxyAddress": "ที่อยู่พร็อกซีที่กำหนดเอง",
    "proxyCandidateHealthy": "เชื่อมต่อได้",
    "proxyCandidatesFound": "พบพร็อกซีที่ใช้งานได้ เลือกหนึ่งรายการเพื่อเตรียมเปิดใช้งาน",
    "proxyConfigurationMethod": "วิธีกำหนดค่าพร็อกซี",
    "proxyDetectionFailed": "ไม่พบพร็อกซีที่ใช้งานได้ ตรวจสอบข้อผิดพลาด DNS การปฏิเสธการเชื่อมต่อ การหมดเวลารอ TLS หรือการยืนยันตัวตนกับพร็อกซี แล้วลองอีกครั้ง",
    "proxyDetectionFailedTitle": "ไม่พบพร็อกซีที่ใช้งานได้",
    "proxyEnabled": "เปิดใช้พร็อกซี",
    "proxyTestFailed": "ทดสอบพร็อกซีไม่สำเร็จ: {reason}",
    "proxyTestRequired": "ต้องทดสอบที่อยู่พร็อกซีนี้ให้สำเร็จก่อนเปิดใช้งาน",
    "proxyTestSucceeded": "พร็อกซีเชื่อมต่อถึงปลายทาง Codex แล้ว (HTTP {status})",
    "quotaUnavailable": "ไม่สามารถดูขีดจำกัดการใช้งานได้ชั่วคราว",
    "reasoningEffort": "ระดับการใช้เหตุผลเริ่มต้น",
    "reasoningEffortHelp": "ค่าเสริมสำหรับใช้เมื่อคำขอไม่ได้ระบุระดับการใช้เหตุผลอย่างชัดเจน โมเดลที่เลือกต้องรองรับระดับนี้ หากไม่รองรับ คำขอจะล้มเหลวก่อนส่ง ค่านี้ไม่เปลี่ยนระดับบริการ",
    "reasoningProviderDefault": "ค่าเริ่มต้นของผู้ให้บริการ",
    "reauthRequired": "ลงชื่อเข้าใช้อีกครั้ง",
    "reauthorize": "อนุญาตการเข้าถึงอีกครั้ง",
    "recheckAfterUpgrade": "เสร็จแล้ว ตรวจสอบอีกครั้ง",
    "recheckingAfterUpgrade": "กำลังตรวจสอบหลังอัปเกรด…",
    "regenerate": "สร้างอีกภาพ",
    "regenerateRequest": "สร้างอีกภาพโดยใช้พรอมป์ต์สร้างภาพก่อนหน้าโดยไม่เปลี่ยนแปลง",
    "releaseNotesUnavailable": "ดูบันทึกประจำรุ่นได้ที่หน้าเผยแพร่รุ่น",
    "remoteOriginCommandHelp": "เรียกใช้คำสั่งนี้ด้วยตนเองบนอุปกรณ์ที่ใช้ DSH แล้วโหลดหน้านี้ใหม่ หน้านี้จะไม่เรียกใช้คำสั่งให้:",
    "remoteOriginCopied": "คัดลอกแล้ว",
    "remoteOriginCopy": "คัดลอกคำสั่งอนุญาตต้นทาง",
    "remoteOriginCopyFailed": "คัดลอกอัตโนมัติไม่ได้ โปรดคัดลอกคำสั่งด้วยตนเอง",
    "remoteOriginDescription": "Codex Connect รับคำขอ OAuth จากเบราว์เซอร์เฉพาะหน้าภายในเครื่องที่เชื่อถือได้ หรือต้นทางที่เจ้าของอุปกรณ์อนุมัติไว้อย่างชัดเจนเท่านั้น",
    "remoteOriginTitle": "ต้นทางเบราว์เซอร์ระยะไกลยังไม่ได้รับความเชื่อถือ",
    "removeAccount": "นำออก",
    "removeAccountCopy": "ข้อมูลรับรองการอนุญาตของบัญชีนี้ที่เก็บในเครื่องจะถูกลบ บัญชีอื่นจะไม่ออกจากระบบ",
    "removeAccountTitle": "นำ “{name}” ออกหรือไม่?",
    "removeActiveAccountCopy": "ข้อมูลรับรองการอนุญาตของบัญชีนี้ที่เก็บในเครื่องจะถูกลบ และ “{name}” จะเป็นบัญชีปัจจุบัน",
    "removeLastAccountCopy": "นี่คือบัญชีสุดท้ายที่บันทึกไว้ การนำออกจะทำให้ Codex Connect ออกจากระบบ",
    "reopenAuthorization": "เปิดหน้าการอนุญาตอีกครั้ง",
    "requestFailed": "คำขอบัญชี OpenAI Codex ล้มเหลว",
    "resetAt": "รีเซ็ต {time}",
    "resetUnavailable": "ไม่มีข้อมูลเวลารีเซ็ต",
    "retiredReserveNotice": "นำ Luna Reserve ออกแล้ว การตั้งค่าเดิมจะถูกละเลย เลือกโมเดลปกติอย่างชัดเจนเพื่อดำเนินการสนทนา Reserve เดิมต่อ",
    "retry": "ลองอีกครั้ง",
    "retryGeneration": "ลองอีกครั้ง",
    "retryImageEdit": "ทำการแก้ไขนี้ซ้ำ",
    "retryRequest": "ลองสร้างภาพตามคำขอก่อนหน้าอีกครั้ง",
    "routingNote": "การตั้งค่าเหล่านี้จะไม่เปลี่ยนโมเดลเริ่มต้น Codex Search จะควบคุมเส้นทางการค้นหาของทั้งโปรไฟล์ชั่วคราวขณะเปิดใช้งาน",
    "runtimeChecking": "กำลังอ่านข้อมูลระบุตัวตนล่าสุดของโฮสต์…",
    "runtimeClientVersion": "ปลั๊กอินของหน้านี้",
    "runtimeDshVersion": "ชุดติดตั้ง DSH ที่เลือก",
    "runtimeEvidenceBoundary": "เวอร์ชัน DSH เป็นข้อมูลประกอบของชุดติดตั้งที่เลือก การระบุเวอร์ชันตรงกันไม่ได้พิสูจน์ว่าไบต์ของแพ็กเกจเหมือนกัน ไม่ได้ยืนยันเวอร์ชันของตัวแอป Desktop หรือรับรองว่าฟีเจอร์ทั้งหมดผ่านการทดสอบ",
    "runtimeHeading": "ข้อมูลระบุตัวตนของระบบที่ทำงานอยู่",
    "runtimeHostVersion": "ปลั๊กอินที่โฮสต์โหลด",
    "runtimeInstalledVersion": "แพ็กเกจที่ติดตั้ง",
    "runtimeMismatchHelp": "หากต่างกันเฉพาะหน้านี้ ให้รีเฟรชหน้า หากเวอร์ชันของโฮสต์ต่างจากแพ็กเกจที่ติดตั้ง ให้บันทึกงานก่อนเริ่มโฮสต์ใหม่ตามปกติ การตรวจสอบนี้จะไม่ดำเนินการทั้งสองอย่างให้",
    "runtimePrivacy": "การตรวจสอบข้อมูลระบุตัวตนนี้จะไม่ร้องขอบัญชีหรือโมเดล อ่านเนื้อหา OAuth ติดตั้งสิ่งที่ต้องใช้เพิ่มเติม หรืออัปโหลดบันทึกผล บันทึกผลจะไม่มีตัวระบุบัญชี เนื้อหาการสนทนา หรือเส้นทางในระบบไฟล์",
    "runtimeReceipt": "ดูบันทึกผลการวินิจฉัย",
    "runtimeRecheck": "ตรวจสอบข้อมูลระบุตัวตนอีกครั้ง",
    "runtimeUnavailable": "ยังไม่ทราบข้อมูลระบุตัวตนของโฮสต์ ตรวจสอบการเชื่อมต่อและการยืนยันตัวตนกับ DSH ของหน้านี้ แล้วตรวจสอบอีกครั้ง สถานะนี้ไม่ได้พิสูจน์ว่าปลั๊กอินเสีย",
    "runtimeUnknownValue": "ไม่ทราบ / ยังตรวจไม่พบ",
    "runtimeVersionsMatch": "เบราว์เซอร์ ปลั๊กอินที่โฮสต์โหลด และแพ็กเกจที่ติดตั้ง ระบุเวอร์ชันปลั๊กอินตรงกัน",
    "runtimeVersionsMismatch": "เวอร์ชันปลั๊กอินที่ตรวจพบไม่ตรงกัน",
    "runtimeVersionsUnknown": "ไม่มีข้อมูลเวอร์ชันปลั๊กอินบางส่วน จึงยังไม่ทราบว่าเวอร์ชันตรงกันหรือไม่",
    "save": "บันทึกการเปลี่ยนแปลง",
    "savedAccountDetail": "บัญชีที่บันทึกไว้",
    "savedAccounts": "บัญชีที่บันทึกไว้",
    "saving": "กำลังบันทึก…",
    "scanLocalProxy": "สแกนหาพร็อกซีในเครื่อง",
    "searchContextSize": "บริบทการค้นหา",
    "searchMaxOutputTokens": "จำนวนโทเคนผลลัพธ์การค้นหาสูงสุด",
    "searchMode": "การเข้าถึงเว็บ",
    "searchModel": "โมเดลค้นหา",
    "selectEditTarget": "เลือกหนึ่งภาพ",
    "selectedProxy": "เลือกแล้ว",
    "settingsLoading": "กำลังโหลดการตั้งค่าปลั๊กอิน…",
    "settingsModules": "หมวดการตั้งค่า",
    "settingsReadOnly": "โปรไฟล์นี้เปิดให้ดูการตั้งค่าปลั๊กอินได้อย่างเดียว",
    "settingsSaveFailed": "บันทึกการตั้งค่าไม่ได้ การเปลี่ยนแปลงที่ยังไม่บันทึกยังคงอยู่ คุณสามารถลองอีกครั้งหรือทิ้งการเปลี่ยนแปลงได้",
    "settingsSaveHint": "การบันทึกจะนำการเปลี่ยนแปลงไปใช้กับการตั้งค่าทั้งสองรายการ การปิดจะทิ้งการเปลี่ยนแปลงที่ยังไม่บันทึก",
    "settingsSaved": "บันทึกแล้ว",
    "settingsUnavailable": "การตั้งค่าปลั๊กอินไม่พร้อมใช้งานในโปรไฟล์ dsh นี้",
    "signOutAll": "ออกจากระบบทุกบัญชี",
    "signedIn": "ลงชื่อเข้าใช้แล้ว",
    "signedOut": "ยังไม่ได้ลงชื่อเข้าใช้",
    "signingIn": "กำลังรอการอนุญาตในเบราว์เซอร์…",
    "speedFast": "เร็ว",
    "speedLoading": "กำลังอ่านค่าความเร็วของการสนทนา…",
    "speedMenuFastTitle": "ปัจจุบันใช้ความเร็วระดับเร็ว คลิกเพื่อเลือกความเร็ว",
    "speedMenuStandardTitle": "ปัจจุบันใช้ความเร็วมาตรฐาน คลิกเพื่อเลือกความเร็ว",
    "speedMenuUltrafastTitle": "ปัจจุบันใช้ความเร็วสูงสุด คลิกเพื่อเลือกความเร็ว",
    "speedRecover": "ยังยืนยันความเร็วไม่ได้ อ่านค่าที่เลือกอยู่",
    "speedStandard": "มาตรฐาน",
    "speedUltrafastDetails": "รายละเอียดความเร็วสูงสุด",
    "submitImageEdit": "ส่งคำขอแก้ไข",
    "technicalDetailsHeading": "การเปลี่ยนแปลงทางเทคนิค",
    "testProxy": "ทดสอบพร็อกซี",
    "testingProxy": "กำลังทดสอบ…",
    "title": "Codex Connect",
    "ultrafastDisclosure": "ความเร็วสูงสุดใช้โควตามากขึ้น ยังไม่ได้ตรวจสอบสิทธิ์ของบัญชีหรือระดับบริการที่ได้รับจริง ไม่มีการเปลี่ยนไปใช้ระดับอื่นโดยอัตโนมัติ",
    "ultrafastUnavailable": "เปิดการสนทนาที่ลงชื่อเข้าใช้แล้วเพื่อเลือกความเร็วสูงสุด การเลือกนี้ไม่ได้ยืนยันสิทธิ์ของบัญชี",
    "ultrafastUnsupported": "ความเร็วสูงสุดรองรับเฉพาะ Codex Astra และ Sol61",
    "unknownResult": "แสดงผลภาพอย่างปลอดภัยไม่ได้",
    "unlimited": "ไม่จำกัด",
    "upToDate": "คุณใช้เวอร์ชันล่าสุดที่มีอยู่แล้ว ({version})",
    "updateCheckUnavailable": "ข้อมูลการอัปเดตไม่พร้อมใช้งานในขณะนี้ โปรดตรวจสอบอีกครั้งภายหลัง",
    "updateHeading": "การอัปเดต Codex Connect",
    "updateHighlightAstraCompatibility": "เพิ่มข้อมูลความเข้ากันได้กับ GPT-6-Astra เมื่อแค็ตตาล็อกจากต้นทางที่ติดตั้งไม่มีโมเดลนี้",
    "updateHighlightAutoReview": "เพิ่มตัวเลือกการตรวจสอบอัตโนมัติของ Codex สำหรับคำขออนุมัติ Harness ที่เข้าเกณฑ์ พร้อมแจ้งรายละเอียดก่อนใช้ครั้งแรก กลับไปขออนุมัติจากมนุษย์เมื่อทำงานล้มเหลวโดยไม่อนุญาตอัตโนมัติ และอนุญาตให้ใช้ข้อยกเว้นกับการลองคำขอเดิมซ้ำทุกประการ",
    "updateHighlightAutoReviewProbe": "เพิ่มการทดสอบด้วยข้อมูลจำลองที่ต้องสั่งอย่างชัดเจน เพื่อตรวจสอบว่าผู้ตรวจสอบการอนุมัติ Codex ที่ซ่อนอยู่พร้อมใช้งานหรือไม่ โดยไม่ต้องเปิดใช้งาน",
    "updateHighlightContextBudget": "เพิ่มตัวควบคุมจำนวนโทเคนบริบทที่จัดสรรแยกตามโมเดลภายในขอบเขตที่กำหนด โดยคงค่าเริ่มต้นจากแค็ตตาล็อกไว้จนกว่าคุณจะบันทึกค่าทับ",
    "updateHighlightDshRc7": "เพิ่มความเข้ากันได้กับสล็อตปลั๊กอินของ DSH rc.7 และปรับการตรวจสอบความเข้ากันได้ของระบบที่ทำงานอยู่ให้ชัดเจนขึ้น",
    "updateHighlightImageGeneration": "เพิ่มตัวเลือกสร้างภาพด้วย GPT Image ในการตั้งค่า Codex Connect และการ์ดภาพตัวอย่างในการสนทนา",
    "updateHighlightImageModelHint": "เพิ่มตัวเลือกแนะนำโมเดลสำหรับเส้นทางบริการภาพในระดับโปรไฟล์ ค่านี้ยังไม่ได้ตรวจสอบ อาจถูกละเลยหรือปฏิเสธ และไม่รับประกันว่าจะได้ผลลัพธ์จากโมเดลที่ระบุ",
    "updateHighlightModelVisibility": "ขณะนี้คุณเลือกได้แล้วว่าจะให้โมเดล Codex ใดปรากฏในตัวเลือกโมเดล",
    "updateHighlightModelsAccount": "เพิ่มการ์ดบัญชี Openai-Codex ในการตั้งค่าโมเดล สำหรับการอนุญาต โควตา และการตั้งค่าปลั๊กอินที่ใช้ร่วมกัน",
    "updateHighlightMultiAccount": "เพิ่มการจัดการบัญชี ChatGPT หลายบัญชี การเริ่มหรือยกเลิกการอนุญาตจะคงบัญชีที่มีอยู่ไว้",
    "updateHighlightOauthHistory": "เพิ่มการย้ายประวัติเซสชันที่ปลอดภัยขึ้นและวิธีลงชื่อเข้าใช้สำรองเมื่อบัญชีต้องเชื่อมต่อใหม่",
    "updateHighlightProxyConnection": "เพิ่มตัวเลือกตรวจหาพร็อกซี Codex โดยต้องยืนยันอย่างชัดเจน และมีตัวเลือกเชื่อมต่อโดยตรงเป็นทางสำรองที่มองเห็นได้",
    "updateHighlightQuotaFastMode": "เพิ่มโหมดเร็วแยกตามการสนทนา และตัวแสดงโควตา GPT กับเวลารีเซ็ตในช่องเขียนข้อความ",
    "updateHighlightRuntimeCompatibility": "เพิ่มการตรวจสอบความเข้ากันได้และการวินิจฉัย เพื่อให้ดูได้ว่ารองรับเวอร์ชัน DSH และ Node ที่ใช้อยู่หรือไม่",
    "updateHighlightSearchRoute": "การเปิดใช้ Codex Search จะเลือกเส้นทางการค้นหาของทั้งโปรไฟล์ และการปิดใช้จะคืนผู้ให้บริการเดิม",
    "updateHighlightSearchStability": "ปรับปรุงความเสถียรของเซสชันค้นหา เพื่อให้ยังอ่านบันทึกการค้นหาใหม่ได้หลังเริ่มระบบใหม่",
    "updateHighlightTrustedOrigins": "ขณะนี้สามารถอนุญาตการเข้าถึงจากเบราว์เซอร์ระยะไกลอย่างชัดเจนสำหรับการใช้งานผ่าน LAN ได้แล้ว",
    "updateLastChecked": "ตรวจสอบล่าสุด: {time}",
    "upgradeCheckSuccess": "โฮสต์รายงานว่าใช้เวอร์ชันปลั๊กอินล่าสุดที่เผยแพร่แล้ว ตรวจสอบข้อมูลระบุตัวตนของระบบที่ทำงานอยู่ในการตั้งค่าปลั๊กอินเพื่อดูเวอร์ชันแพ็กเกจที่ติดตั้งและเวอร์ชันของหน้านี้",
    "upgradeStepsHeading": "วิธีอัปเกรด",
    "upgradeStillAvailable": "โฮสต์ยังรายงานเวอร์ชันปลั๊กอินเป็น {version} ตรวจสอบข้อมูลระบุตัวตนของระบบที่ทำงานอยู่ก่อนตัดสินใจว่าจะรีเฟรชหรือเริ่มใหม่",
    "usageLimits": "ขีดจำกัดการใช้งาน",
    "usageWindow": "ช่วงเวลาการใช้งาน",
    "useAccount": "ใช้บัญชีนี้",
    "useThisProxy": "ใช้พร็อกซีนี้",
    "usingAccount": "กำลังใช้งาน",
    "versionSummary": "ปัจจุบัน {current} · ตามหลังรุ่นที่เผยแพร่ {count} รุ่น",
    "versionSummaryUnknown": "ปัจจุบัน {current} · ไม่มีข้อมูลจำนวนรุ่นที่ตามหลัง",
    "versionsBehind": "เวอร์ชันปัจจุบันของคุณตามหลังรุ่นที่เผยแพร่ {count} รุ่น",
    "versionsBehindUnknown": "ไม่มีข้อมูลจำนวนรุ่นระหว่างเวอร์ชันเหล่านี้",
    "viewFullChangelog": "ดูบันทึกการเปลี่ยนแปลงฉบับเต็ม",
    "viewGithubLink": "ดูลิงก์ GitHub",
    "viewQuota": "ดูโควตา",
    "viewReleaseNotes": "ดูบันทึกการอัปเดต",
    "viewTechnicalDetails": "ดูรายละเอียดทางเทคนิค",
    "weeklyLimit": "ขีดจำกัดรายสัปดาห์",
    "whatMatters": "สิ่งสำคัญสำหรับคุณ",
    "working": "กำลังดำเนินการ…"
  },
  "settings.permission": {
    "confirm.acknowledge": "ฉันเข้าใจความเสี่ยงและต้องการดำเนินการต่อ",
    "confirm.cancel": "ยกเลิก",
    "confirm.description": "การเข้าถึงเต็มรูปแบบช่วยลดขั้นตอนยืนยันในเซสชันใหม่และให้ดำเนินการได้โดยตรงมากขึ้น รวมถึงการดำเนินการที่อ่อนไหว การเปลี่ยนไฟล์ หรือคำสั่งภายนอก ใช้เฉพาะเมื่อคุณไว้วางใจงานที่จะตามมาเท่านั้น",
    "confirm.enable": "เปิดการเข้าถึงเต็มรูปแบบ",
    "confirm.title": "เปิดการเข้าถึงเต็มรูปแบบ?",
    "description": "เลือกโหมดสิทธิ์เริ่มต้นสำหรับเซสชันใหม่",
    "loading": "กำลังโหลด",
    "preset.fullAccess": "เข้าถึงเต็มรูปแบบ",
    "preset.readOnly": "อ่านอย่างเดียว",
    "preset.workspaceWrite": "เขียนในพื้นที่ทำงาน",
    "title": "สิทธิ์",
    "unavailable": "ไม่พร้อมใช้งาน"
  },
  "settings.pluginInventory": {
    "active": "กำลังทำงาน",
    "clientSyncFailed": "ปลั๊กอินบางตัวซิงก์ในหน้านี้ไม่ได้ สถานะเปิดใช้งานบนโฮสต์ไม่เปลี่ยนแปลง",
    "clientSyncRetry": "ลองหน้านี้อีกครั้ง",
    "clientSyncing": "กำลังซิงก์ปลั๊กอินในหน้านี้…",
    "condition": "ปิดใช้เมื่อ",
    "conditionalTag": "ตามเงื่อนไข",
    "configuration": "การตั้งค่า",
    "disabledTag": "ปิดใช้งาน",
    "empty": "ไม่มีปลั๊กอินที่พร้อมใช้งาน",
    "emptySearch": "ไม่พบปลั๊กอินที่ตรงกัน",
    "enabledIn": "เปิดใช้ใน",
    "enabledTag": "เปิดใช้งาน",
    "error": "ปลั๊กอินไม่พร้อมใช้งานชั่วคราว",
    "failed": "เริ่มไม่สำเร็จ",
    "failedTag": "ล้มเหลว",
    "fromPreset": "จาก",
    "globalSubtitle": "ระบบและทุกเซสชันใช้ร่วมกัน",
    "globalTitle": "ปลั๊กอินส่วนกลาง",
    "loading": "กำลังอ่านปลั๊กอิน…",
    "loadingPhase": "กำลังโหลด",
    "matchesInOtherPresets": "พบอีก {count} รายการในพรีเซ็ตอื่น: ",
    "metadataError": "ข้อมูลเมตาของแพ็กเกจผิดพลาด: {error}",
    "moduleLabel": "โมดูล",
    "pending": "กำลังรอส่วนที่ต้องใช้",
    "presetEnabledTag": "ผ่านพรีเซ็ต",
    "presetOptionBroken": "{name} (โหลดไม่สำเร็จ)",
    "presetOptionDefault": "{name} (ค่าเริ่มต้น)",
    "presetProvidedDetail": "ปิดใช้ในส่วนกลาง พรีเซ็ตเอเจนต์จัดให้ใช้เป็นรายเซสชัน",
    "presetSubtitle": "จัดชุดตามแต่ละเซสชันด้วยพรีเซ็ตเอเจนต์",
    "presetTitle": "ปลั๊กอินของเซสชัน",
    "retry": "ลองอีกครั้ง",
    "runtime": "สถานะ",
    "search": "ค้นหาปลั๊กอิน",
    "switcherLabel": "เลือกพรีเซ็ตเอเจนต์ที่ต้องการตรวจสอบ",
    "tab": "รายการปลั๊กอิน",
    "unloading": "กำลังถอนการโหลด",
    "unobserved": "ไม่ได้ทำงาน"
  },
  "settings.plugins": {
    "empty": "ระบบที่ติดตั้งนี้ไม่มีมุมมองปลั๊กอินให้ใช้",
    "intro": "ตรวจสอบปลั๊กอินที่มาพร้อมระบบที่ติดตั้งนี้",
    "nav": "ปลั๊กอินที่มีมาให้",
    "tabs": "มุมมองปลั๊กอิน",
    "title": "ปลั๊กอินที่มีมาให้"
  },
  "settings.shell": {
    "description": "จำกัดระยะเวลารันและปริมาณผลลัพธ์ของแต่ละคำสั่ง",
    "invalidNumber": "ป้อนตัวเลข หรือเว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "maxOutputBytes": "ขีดจำกัดผลลัพธ์ต่อสตรีม (ไบต์)",
    "maxOutputBytesHint": "ผลลัพธ์ส่วนเกินจะบันทึกลงไฟล์ชั่วคราวแทนที่จะสูญหาย",
    "overridden": "ถูกกำหนดทับ",
    "readOnly": "ระบบที่ติดตั้งนี้จัดเก็บการตั้งค่าแบบอ่านอย่างเดียว",
    "reset": "คืนค่าเริ่มต้น",
    "save": "บันทึก",
    "saveFailed": "ระบบที่ติดตั้งไม่ยอมรับค่าเหล่านี้ จึงเก็บค่าไว้ให้คุณแก้ไข",
    "saving": "กำลังบันทึก…",
    "timeoutMs": "เวลาหมดอายุของคำสั่ง (มิลลิวินาที)",
    "timeoutMsHint": "ระยะเวลาที่คำสั่งหนึ่งรันได้ก่อนถูกยุติ",
    "title": "เชลล์",
    "unavailable": "ปลั๊กอินนี้ยังไม่โหลด จึงยังตั้งค่าไม่ได้"
  },
  "settings.subagent": {
    "overridden": "ถูกกำหนดทับ",
    "readOnly": "ระบบที่ติดตั้งนี้จัดเก็บการตั้งค่าแบบอ่านอย่างเดียว",
    "reset": "คืนค่าเริ่มต้น",
    "save": "บันทึก",
    "saveFailed": "ระบบที่ติดตั้งไม่ยอมรับค่าเหล่านี้ จึงเก็บค่าไว้ให้คุณแก้ไข",
    "saving": "กำลังบันทึก…",
    "subagentCapacityHelp": "จำนวนเอเจนต์ย่อยที่ยังทำงานอยู่ทั้งหมดภายใต้เอเจนต์หลักเดียวกัน รวมทุกระดับความลึก ไม่นับเอเจนต์หลัก เมื่อถึงขีดจำกัดจะปฏิเสธคำขอเริ่มใหม่",
    "subagentCapacityHelpLabel": "เกี่ยวกับขีดจำกัดเอเจนต์ย่อยที่ทำงานพร้อมกัน",
    "subagentCapacityInvalid": "ป้อนจำนวนเต็มตั้งแต่ 1 ขึ้นไป",
    "subagentDepthHelp": "จำกัดจำนวนชั้นของเอเจนต์ย่อยที่เอเจนต์สร้างได้",
    "subagentDepthHelpLabel": "เกี่ยวกับความลึกสูงสุดในการสร้างต่อ",
    "subagentDepthInvalid": "ป้อนจำนวนเต็มตั้งแต่ 0 ขึ้นไป",
    "subagentDepthOne": "เฉพาะเอเจนต์หลักเท่านั้นที่สร้างเอเจนต์ย่อยได้",
    "subagentDepthOverride": "หากเครื่องมือกำหนดความลึกสูงสุดในการสร้างต่อไว้เอง จะใช้ค่านั้นก่อน",
    "subagentDepthZero": "ปิดใช้เอเจนต์ย่อย",
    "subagentDescription": "ตั้งค่าความลึกในการสร้างต่อ จำนวน และโมเดลของเอเจนต์ย่อย",
    "subagentLimitsTitle": "ขีดจำกัด",
    "subagentMaxActive": "ขีดจำกัดเอเจนต์ย่อยที่ทำงานพร้อมกัน",
    "subagentMaxDepth": "ความลึกสูงสุดในการสร้างต่อ",
    "subagentModelSelectionAllowed": "โมเดลที่เอเจนต์เลือกได้",
    "subagentModelSelectionChoose": "เมื่อเปิดใช้ เอเจนต์เลือกผู้ให้บริการ โมเดล และระดับการใช้เหตุผลสำหรับเอเจนต์ย่อยแต่ละตัวจากโมเดลที่อนุญาตด้านล่างได้ มีผลเฉพาะเซสชันใหม่",
    "subagentModelSelectionConflict": "การตั้งค่าถูกเปลี่ยนจากที่อื่น ละทิ้งฉบับร่างแล้วลองอีกครั้ง",
    "subagentModelSelectionEmpty": "ยังไม่มีผู้ให้บริการโมเดลรายใดระบุโมเดลที่ให้ใช้",
    "subagentModelSelectionLoadFailed": "โหลดโมเดลไม่ได้",
    "subagentModelSelectionLoading": "กำลังโหลดโมเดล…",
    "subagentModelSelectionOff": "เอเจนต์ย่อยใช้ค่าเริ่มต้นที่ตั้งไว้หรือรับโมเดลจากเอเจนต์แม่ ตัวเลือกโมเดลที่บันทึกไว้จะยังคงอยู่",
    "subagentModelSelectionPartial": "โหลดผู้ให้บริการโมเดลบางรายไม่ได้ แต่ยังลบตัวเลือกที่บันทึกไว้ได้",
    "subagentModelSelectionRequired": "เลือกอย่างน้อยหนึ่งโมเดลก่อนบันทึก",
    "subagentModelSelectionRetry": "ลองอีกครั้ง",
    "subagentModelSelectionTitle": "การเลือกโมเดล",
    "subagentModelSelectionToggle": "อนุญาตให้เอเจนต์เลือกโมเดลสำหรับเอเจนต์ย่อย",
    "subagentModelSelectionUnavailable": "ไม่พร้อมใช้งานในขณะนี้",
    "subagentModelSelectionUnavailableGroup": "บันทึกไว้แต่ไม่พร้อมใช้งานในขณะนี้",
    "subagentTitle": "เอเจนต์ย่อย",
    "unavailable": "ปลั๊กอินนี้ยังไม่โหลด จึงยังตั้งค่าไม่ได้"
  },
  "settings.theme": {
    "appearance.dark": "มืด",
    "appearance.light": "สว่าง",
    "appearance.system": "ตามระบบ",
    "appearance.title": "รูปลักษณ์",
    "fontFamily.code.description": "ใช้กับบล็อกโค้ด โค้ดในบรรทัด และผลลัพธ์จากเครื่องมือ คั่นแบบอักษรด้วยจุลภาค เว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "fontFamily.code.title": "แบบอักษรโค้ด",
    "fontFamily.placeholder": "ค่าเริ่มต้น",
    "fontFamily.terminal.description": "ใช้กับเทอร์มินัลในแถบด้านข้าง คั่นแบบอักษรด้วยจุลภาค เว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "fontFamily.terminal.title": "แบบอักษรเทอร์มินัล",
    "fontFamily.text.description": "ใช้กับส่วนติดต่อผู้ใช้และข้อความสนทนา คั่นแบบอักษรด้วยจุลภาค เว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "fontFamily.text.title": "แบบอักษรข้อความ",
    "fontSize.code.decrease": "ลดขนาดตัวอักษรโค้ด",
    "fontSize.code.description": "ใช้กับบล็อกโค้ด โค้ดในบรรทัด และผลลัพธ์จากเครื่องมือ",
    "fontSize.code.increase": "เพิ่มขนาดตัวอักษรโค้ด",
    "fontSize.code.title": "ขนาดตัวอักษรโค้ด",
    "fontSize.more": "การตั้งค่าแบบอักษรเพิ่มเติม",
    "fontSize.terminal.decrease": "ลดขนาดตัวอักษรเทอร์มินัล",
    "fontSize.terminal.description": "ใช้กับเทอร์มินัลในแถบด้านข้าง",
    "fontSize.terminal.increase": "เพิ่มขนาดตัวอักษรเทอร์มินัล",
    "fontSize.terminal.title": "ขนาดตัวอักษรเทอร์มินัล",
    "fontSize.text.decrease": "ลดขนาดตัวอักษร",
    "fontSize.text.description": "มีผลเฉพาะเนื้อหาการสนทนา",
    "fontSize.text.increase": "เพิ่มขนาดตัวอักษร",
    "fontSize.text.title": "ขนาดตัวอักษร",
    "fontSize.unit": "px"
  },
  "settings.webSearch": {
    "apiKeySet": "ตั้งค่าคีย์แล้ว",
    "apiKeyUnsetApi": "ยังไม่ได้ตั้งค่าคีย์",
    "baseUrl": "URL หลัก",
    "baseUrlHint": "ระบุคำนำหน้าเส้นทาง API ด้วย เว้นว่างเพื่อใช้ที่อยู่อย่างเป็นทางการ ผู้ให้บริการจะต่อท้ายด้วย {path}",
    "billing": "การเรียกเก็บเงิน",
    "billingAccount": "บัญชี DeepSeek ที่ลงชื่อเข้าใช้",
    "billingAccountHint": "ต้องลงชื่อเข้าใช้ DeepSeek",
    "billingAdvancedOverride": "ถูกกำหนดทับโดย {fields}",
    "billingApiKey": "คีย์ API ของ DeepSeek",
    "billingApiKeyHint": "ใช้คีย์ API จากหน้าโมเดล โปรดตั้งค่าก่อน",
    "billingAuto": "อัตโนมัติ",
    "billingAutoHint": "ใช้บัญชี DeepSeek หรือคีย์ API ตามการสนทนา หากใช้โมเดลอื่น จะใช้คีย์ API ก่อน แล้วจึงใช้บัญชีที่ลงชื่อเข้าใช้",
    "count": "จำนวนผลลัพธ์ต่อการค้นหา",
    "countHint": "จำนวนผลลัพธ์ที่ส่งคืนต่อการค้นหา ตั้งแต่ 1 ถึง 50 ค่าเริ่มต้นคือ 10",
    "credential": "คีย์ API",
    "description": "เลือกผู้ให้บริการสำหรับการค้นหาและดึงข้อมูลเว็บ",
    "fetchSection": "ผู้ให้บริการดึงข้อมูลเว็บ",
    "invalidCount": "ป้อนจำนวนเต็มตั้งแต่ 1 ถึง 50 หรือเว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "invalidMaxUses": "ป้อนจำนวนเต็มบวก หรือเว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "invalidNumber": "ป้อนตัวเลข หรือเว้นว่างเพื่อใช้ค่าเริ่มต้น",
    "legacyKeyHint": "ใช้บัญชีที่ลงชื่อเข้าใช้สำหรับคำขอโมเดลของบัญชี มิฉะนั้นจะใช้คีย์ API นี้ ({ref}) ซึ่งใช้ร่วมกับโมเดลตามค่าเริ่มต้น",
    "maxUses": "จำนวนการค้นหาสูงสุดต่อคำขอ",
    "maxUsesHint": "จำนวนการค้นหาฝั่งเซิร์ฟเวอร์สูงสุดต่อคำขอ Messages ต้องเป็นจำนวนเต็มบวก ค่าเริ่มต้นคือ 5",
    "overridden": "ถูกกำหนดทับ",
    "pluginProviderHint": "ตั้งค่าผู้ให้บริการนี้ในการตั้งค่าของปลั๊กอินนั้น",
    "providerAuto": "อัตโนมัติ",
    "providerDeepSeek": "DeepSeek Search API",
    "providerDeepSeekFetch": "DeepSeek Fetch API",
    "providerLegacy": "DeepSeek (รุ่นเดิม)",
    "providerLocal": "ดึงข้อมูลโดยตรง",
    "providerMissing": "{id} (ยังไม่โหลด)",
    "providersFailed": "โหลดรายชื่อผู้ให้บริการไม่ได้ เมนูนี้จึงอาจไม่ครบถ้วน",
    "readOnly": "ระบบที่ติดตั้งนี้จัดเก็บการตั้งค่าแบบอ่านอย่างเดียว",
    "reset": "คืนค่าเริ่มต้น",
    "retry": "ลองอีกครั้ง",
    "save": "บันทึก",
    "saveFailed": "ระบบที่ติดตั้งไม่ยอมรับค่าเหล่านี้ จึงเก็บค่าไว้ให้คุณแก้ไข",
    "saving": "กำลังบันทึก…",
    "searchGuide": "คู่มือการค้นหาและดึงข้อมูล",
    "searchGuideUrl": "https://api-docs.deepseek.com/guides/search",
    "searchSection": "ผู้ให้บริการค้นหาเว็บ",
    "title": "ค้นหาและดึงข้อมูลเว็บ",
    "unavailable": "ปลั๊กอินนี้ยังไม่โหลด จึงยังตั้งค่าไม่ได้"
  },
  "shortcuts": {
    "application": "แอปพลิเคชัน",
    "approval": "พื้นที่อนุมัติ",
    "cancel": "ยกเลิก",
    "clear": "นำออก",
    "clear-search": "ล้างการค้นหา",
    "close": "ปิดปุ่มลัดแป้นพิมพ์",
    "close-confirmation": "ปิดการยืนยัน",
    "conflict": "“{commands}” ใช้อยู่แล้ว",
    "description": "ดูและแก้ไขปุ่มลัดและการป้อนข้อมูลที่ใช้งานได้",
    "desktop-document": "userData/keybindings.json",
    "desktop-reload": "เริ่ม Harness ใหม่",
    "dismiss": "ปิดเมนูหรือกล่องโต้ตอบบนสุด",
    "edit-label": "แก้ไขปุ่มลัดสำหรับ {command}",
    "empty": "ไม่มีปุ่มลัดที่ตรงกัน",
    "future": "การตั้งค่าปุ่มลัดใน {location} สร้างด้วยเวอร์ชันใหม่กว่า อัปเกรด Harness แล้วลองอีกครั้ง",
    "global-hint": "เปิดได้จากทุกที่",
    "input": "การป้อนข้อความ",
    "invalid": "การตั้งค่าปุ่มลัดใน {location} เสียหาย สำรองและซ่อมการตั้งค่านี้ แล้ว{reload}",
    "macos-web-help": "ใช้ Command+/, Command+,, Command+Backslash, Control+Backquote, Command+Option+key หรือ Command+Shift+key รองรับชุดที่มีปุ่มปรับแต่งต่างกันสามหรือสี่ปุ่มด้วย ปุ่มลัดของเบราว์เซอร์หรือระบบอาจไม่ส่งถึงหน้าเว็บ",
    "menus": "เมนูและกล่องโต้ตอบ",
    "modified-count": "ปรับแต่ง {count} รายการ",
    "modifier-required": "ต้องมี Command, Ctrl หรือ Alt ในชุดปุ่ม",
    "move": "เลื่อนตัวเลือกเมนู",
    "native-failed": "ป้องกันการบันทึกปุ่มบนเดสก์ท็อปไม่ได้ ออกจากการบันทึกแล้วลองอีกครั้ง",
    "not-ready": "ปุ่มลัดยังไม่พร้อม โปรดลองอีกครั้ง",
    "open": "เปิดปุ่มลัดแป้นพิมพ์",
    "read": "อ่าน {location} ไม่ได้ ตรวจสอบสิทธิ์เข้าถึง แล้ว{reload}",
    "record": "กดปุ่มลัด",
    "record-help": "ปล่อยปุ่มเพื่อบันทึก Tab ใช้ย้ายระหว่างการดำเนินการ Esc ใช้ยกเลิก",
    "reserved": "ชุดปุ่มนี้สงวนไว้สำหรับระบบหรือการแก้ไขข้อความ",
    "reset": "คืนค่าเริ่มต้น",
    "reset-all": "คืนค่าเริ่มต้นทั้งหมด",
    "reset-description": "คืนค่าปุ่มลัดเริ่มต้นของแพลตฟอร์มนี้ ปุ่มลัดที่แก้ไขหรือนำออกทั้งหมดจะถูกคืนค่า ไม่มีผลต่อแพลตฟอร์มอื่น",
    "reset-failed": "คืนค่าเริ่มต้นไม่ได้ ปุ่มลัดของคุณไม่เปลี่ยนแปลง โปรดลองอีกครั้ง",
    "reset-saved": "คืนค่าปุ่มลัดเริ่มต้นแล้ว",
    "reset-title": "คืนค่าปุ่มลัดเริ่มต้นทั้งหมดหรือไม่?",
    "retry-save": "ลองบันทึกอีกครั้ง",
    "review": "ฉันตรวจทานการตั้งค่าล่าสุดแล้ว",
    "saved": "แก้ไขแล้ว",
    "search": "ค้นหาปุ่มลัด",
    "select": "เลือกรายการเมนู",
    "settings": "ปุ่มลัดแป้นพิมพ์",
    "stale": "การตั้งค่าปุ่มลัดหรือคำสั่งที่ใช้งานได้เปลี่ยนแล้ว ตรวจทานการกำหนดล่าสุดก่อนบันทึก",
    "title": "ปุ่มลัดแป้นพิมพ์",
    "too-many-keys": "กดปุ่มที่ไม่ใช่ปุ่มปรับแต่งค้างได้ไม่เกินสองปุ่ม ปล่อยปุ่มเพื่อลองอีกครั้ง",
    "unbound": "ไม่มีปุ่มลัด",
    "unsupported-browser": "เบราว์เซอร์นี้ยังไม่รองรับชุดปุ่มนี้",
    "unsupported-key": "ไม่รองรับปุ่มนี้",
    "using-accepted": "ยังใช้การกำหนดที่อ่านสำเร็จล่าสุดอยู่",
    "using-defaults": "กำลังใช้การกำหนดเริ่มต้น",
    "view": "แก้ไขปุ่มลัด",
    "web-document": "รายการ localStorage ของเว็บไซต์นี้ชื่อ dsh.keybindings.v1",
    "web-help": "ชุดปุ่มในเบราว์เซอร์: Mod+/, Mod+Shift+,, Mod+Shift+.. Mod คือ Command บน Mac และ Ctrl บนระบบอื่น",
    "web-reload": "โหลดหน้าใหม่",
    "windows-web-help": "ใช้ Ctrl+/, Ctrl+,, Ctrl+Alt+key หรือ Ctrl+Shift+key รองรับชุดที่มีปุ่มปรับแต่งต่างกันสามหรือสี่ปุ่มด้วย ปุ่มลัดของเบราว์เซอร์หรือระบบอาจไม่ส่งถึงหน้าเว็บ",
    "write-failed": "บันทึกไม่ได้ เก็บปุ่มลัดเดิมและฉบับร่างปัจจุบันไว้แล้ว โปรดลองอีกครั้ง"
  },
  "shortcuts.layout": {
    "toggle": "สลับแถบด้านซ้าย"
  },
  "sidebar": {
    "navigation.label": "การนำทาง",
    "panels.label": "แผงส่วนกลาง",
    "panels.more": "เพิ่มเติม",
    "panels.unpin": "เลิกปักหมุด {name} ในแถบด้านข้าง",
    "panels.unpinTooltip": "เลิกปักหมุดในแถบด้านซ้าย",
    "session.new": "เซสชันใหม่",
    "session.new.label": "เซสชันใหม่",
    "toggle.collapse": "ยุบแถบด้านข้าง",
    "toggle.open": "เปิดแถบด้านข้าง",
    "version.copied": "คัดลอกเวอร์ชันแล้ว"
  },
  "sidebarBrowser": {
    "address.changed": "URL เปลี่ยนแล้ว",
    "address.placeholder": "ป้อนที่อยู่ HTTP(S)",
    "address.unknown": "หน้าเปลี่ยนที่อยู่แล้ว ตัวแสดงนี้อ่าน URL ใหม่ไม่ได้",
    "back": "ย้อนกลับ",
    "error.application-origin": "เบราว์เซอร์ฝังตัวเปิดแอป DSH เองไม่ได้",
    "error.credentials": "ที่อยู่ต้องไม่มีชื่อผู้ใช้หรือรหัสผ่าน",
    "error.empty": "ป้อนที่อยู่",
    "error.invalid": "ที่อยู่ไม่ถูกต้องหรือยาวเกินไป",
    "error.protocol": "รองรับเฉพาะที่อยู่ HTTP และ HTTPS ใช้ตัวอย่างเอกสารสำหรับไฟล์ในเครื่อง",
    "external": "เปิดในเบราว์เซอร์ระบบ",
    "forward": "ไปข้างหน้า",
    "go": "ไป",
    "guide.description": "เรียกดูหน้าเว็บ",
    "guide.title": "เบราว์เซอร์",
    "load.failed": "โหลดหน้าไม่ได้ โหลดใหม่หรือเปิดในเบราว์เซอร์ระบบ",
    "load.failed.detail": "โหลดหน้าไม่สำเร็จ ({code}): {description}",
    "loading": "กำลังเปิด…",
    "reload": "โหลดใหม่",
    "restore.action": "กู้คืนหน้า",
    "restore.previous": "เคยเปิดก่อนหน้า",
    "sandbox.disable": "ปิดข้อจำกัดแซนด์บ็อกซ์",
    "sandbox.enable": "คืนข้อจำกัดแซนด์บ็อกซ์",
    "sandbox.warning": "ปิดข้อจำกัดแซนด์บ็อกซ์อยู่ หน้าเว็บสามารถนำทางแอประดับบนสุด ดาวน์โหลด เปิดกล่องโต้ตอบ และล็อกอินพุตได้",
    "shortcut.noSession": "เปิดเซสชันก่อน",
    "start": "ป้อนที่อยู่ HTTP(S) เพื่อเริ่มเรียกดู",
    "type.label": "เบราว์เซอร์"
  },
  "sidebarCodePreview": {
    "copied": "คัดลอกแล้ว",
    "copy": "คัดลอก",
    "title": "โค้ด"
  },
  "sidebarDocumentPreview": {
    "autoRefresh": "รีเฟรชอัตโนมัติ",
    "autoRefresh.disable": "ปิดรีเฟรชอัตโนมัติ",
    "autoRefresh.enable": "เปิดรีเฟรชอัตโนมัติ",
    "changed": "ไฟล์เปลี่ยนแล้ว กำลังแสดงเนื้อหาก่อนหน้า",
    "error.notFound": "ไม่พบไฟล์ อาจถูกย้ายหรือลบแล้ว",
    "error.notRegularFile": "ไม่ใช่ไฟล์ทั่วไป ไม่มีสิ่งที่แสดงได้",
    "error.notText": "ยังดูตัวอย่างไฟล์ประเภทนี้ไม่ได้",
    "error.tooLarge": "หน้านี้เกินขีดจำกัด {limit} จึงอ่านไม่ได้",
    "error.unavailable": "อ่านไม่สำเร็จ: {message}",
    "loadMore": "โหลดเพิ่มเติม",
    "loading": "กำลังเรนเดอร์เอกสาร...",
    "openWith": "เปิดด้วย",
    "reload": "อ่านไฟล์อีกครั้ง",
    "reloadNow": "โหลดใหม่",
    "rendererUnavailable": "ตัวอย่าง {name} ไม่พร้อมใช้งาน",
    "resourceUnavailable": "บริการทรัพยากรไฟล์ไม่พร้อมใช้งาน",
    "retry": "ลองอีกครั้ง",
    "unsupportedFile": "ยังดูตัวอย่างไฟล์ประเภทนี้ไม่ได้",
    "viewer.text": "ข้อความล้วน",
    "wrap.aria": "การตัดบรรทัด",
    "wrap.disable": "ปิดการตัดบรรทัด",
    "wrap.enable": "เปิดการตัดบรรทัด"
  },
  "sidebarExcel": {
    "charts": "แผนภูมิ",
    "conditionalFormatting": "การจัดรูปแบบตามเงื่อนไข",
    "encoding": "อ่านการเข้ารหัสข้อความนี้ไม่ได้ บันทึกไฟล์เป็น UTF-8 หรือ UTF-16 ที่มี BOM แล้วลองอีกครั้ง",
    "featureSeparator": ", ",
    "formulaWarning": "สมุดงานนี้มีสูตร ผลลัพธ์ที่แสดงอาจไม่ครบหรือไม่ถูกต้อง",
    "images": "รูปภาพ",
    "invalid": "เปิดสเปรดชีตนี้ไม่ได้ ตรวจสอบรูปแบบ เนื้อหา หรือการป้องกันด้วยรหัสผ่าน",
    "language": "en",
    "loading": "กำลังแสดงเอกสาร...",
    "retry": "ลองอีกครั้ง",
    "shapes": "รูปร่าง",
    "timeout": "เปิดสมุดงานนี้ไม่ทันภายในเวลาที่กำหนด ลองใช้ไฟล์ที่เล็กลง",
    "title": "สเปรดชีต",
    "tooLarge": "สมุดงานนี้มีขนาดเกินขีดจำกัดการแสดงตัวอย่าง",
    "unsupportedNotice": "ตัวอย่างนี้ไม่รองรับ{features}ในสมุดงาน เปิดในแอปของระบบเพื่อใช้งานได้ครบถ้วน"
  },
  "sidebarFiles": {
    "autoRefresh": "รีเฟรชอัตโนมัติ",
    "autoRefresh.disable": "ปิดรีเฟรชอัตโนมัติ",
    "autoRefresh.enable": "เปิดรีเฟรชอัตโนมัติ",
    "empty": "ไดเรกทอรีว่าง",
    "emptyHidden": "ไม่แสดงรายการที่ซ่อนอยู่",
    "entry.noViewer": "ไม่มีตัวแสดงที่เปิดไฟล์นี้ได้",
    "entry.other": "ไม่ใช่ไฟล์หรือไดเรกทอรี จึงเปิดไม่ได้",
    "error.notDirectory": "นี่ไม่ใช่ไดเรกทอรี",
    "error.notFound": "ไม่มีไดเรกทอรีนี้แล้ว อาจถูกย้ายหรือลบ",
    "error.outsideWorkspace": "ไดเรกทอรีนี้อยู่นอกพื้นที่ทำงาน แถบด้านข้างจึงไม่อ่าน",
    "error.unavailable": "อ่านไม่สำเร็จ: {message}",
    "guide.description": "เรียกดูไฟล์ในพื้นที่ทำงานของเซสชันนี้",
    "guide.title": "ไฟล์ในพื้นที่ทำงาน",
    "loading": "กำลังอ่าน…",
    "navigator.hide": "ซ่อนผังไฟล์",
    "navigator.resize": "ปรับขนาดผังไฟล์",
    "navigator.show": "แสดงผังไฟล์",
    "noWorkspace": "เซสชันนี้ไม่มีไดเรกทอรีพื้นที่ทำงาน",
    "reload": "โหลดใหม่",
    "search.clear": "ล้างการค้นหา",
    "search.empty": "ไม่พบรายการที่ตรงกัน",
    "search.emptyHint.all": "ไม่แสดงรายการที่ซ่อนอยู่ ไฟล์และไดเรกทอรีที่ยกเว้น หรือที่ไฟล์ละเว้น เช่น .gitignore ระบุไว้",
    "search.emptyHint.both": "ไม่แสดงรายการที่ซ่อนอยู่และไฟล์กับไดเรกทอรีที่ยกเว้น",
    "search.emptyHint.excluded": "ไม่แสดงไฟล์และไดเรกทอรีที่ยกเว้น",
    "search.emptyHint.excludedIgnored": "ไม่แสดงไฟล์และไดเรกทอรีที่ยกเว้น หรือที่ไฟล์ละเว้น เช่น .gitignore ระบุไว้",
    "search.emptyHint.hidden": "ไม่แสดงรายการที่ซ่อนอยู่",
    "search.emptyHint.hiddenIgnored": "ไม่แสดงรายการที่ซ่อนอยู่ รวมถึงไฟล์และไดเรกทอรีที่ไฟล์ละเว้น เช่น .gitignore ระบุไว้",
    "search.emptyHint.ignored": "ไม่แสดงไฟล์และไดเรกทอรีที่ไฟล์ละเว้น เช่น .gitignore ระบุไว้",
    "search.emptyHint.label": "เหตุผลที่ไม่พบรายการที่ตรงกัน",
    "search.failed": "ค้นหาไม่สำเร็จ: {message}",
    "search.incomplete": "การค้นหาเกินขีดจำกัดไฟล์ หรืออ่านบางไดเรกทอรีไม่ได้ ผลลัพธ์จึงอาจไม่ครบ",
    "search.placeholder": "ค้นหาไฟล์",
    "search.results": "ผลลัพธ์: {count}",
    "search.retry": "ลองอีกครั้ง",
    "search.settings": "การตั้งค่าค้นหา",
    "search.showHidden": "แสดงรายการที่ซ่อนอยู่",
    "search.truncated": "แสดงเพียง {count} ผลลัพธ์แรก จำกัดการค้นหาให้แคบลงเพื่อดูที่เหลือ",
    "settings.add": "เพิ่มไฟล์หรือไดเรกทอรี",
    "settings.close": "ปิด",
    "settings.description": "มีผลเฉพาะผลการค้นหา ไม่กระทบผังไฟล์",
    "settings.invalid.absolute": "ใช้เส้นทางสัมพัทธ์กับพื้นที่ทำงาน",
    "settings.invalid.empty": "ป้อนชื่อหรือเส้นทางสัมพัทธ์",
    "settings.invalid.glob": "เส้นทางต้องไม่มีอักขระแทนค่า * ? [ ] { } !",
    "settings.invalid.nul": "เส้นทางต้องไม่มีอักขระ NUL",
    "settings.invalid.parent": "เส้นทางต้องไม่มีส่วน . หรือ ..",
    "settings.remove": "นำ {path} ออก",
    "settings.respectGitignore": "ทำตามไฟล์ละเว้น (.gitignore ฯลฯ)",
    "settings.restore": "คืนรายการเริ่มต้น",
    "settings.title": "ไฟล์และไดเรกทอรีที่ยกเว้น",
    "settings.toggle": "ยกเว้น {path}",
    "shortcut.noSession": "เลือกเซสชันก่อน",
    "truncated": "มีรายการมากเกินไป แสดงเพียงบางส่วน",
    "type.label": "ไฟล์"
  },
  "sidebarImage": {
    "failed": "แสดงรูปภาพนี้ไม่ได้",
    "loading": "กำลังแสดงเอกสาร...",
    "preview": "ตัวอย่างรูปภาพ: {name}",
    "title": "รูปภาพ",
    "unsupported": "การแสดงตัวอย่างรูปภาพต้องใช้เนื้อหาไฟล์ครบถ้วน",
    "zoomControls": "ตัวควบคุมการซูม",
    "zoomFitWidth": "พอดีความกว้าง",
    "zoomIn": "ซูมเข้า",
    "zoomMenu": "เลือกระดับการซูม",
    "zoomOut": "ซูมออก",
    "zoomValue": "{percent}%"
  },
  "sidebarOffice": {
    "busy": "บริการแสดงตัวอย่าง Office ไม่ว่าง โปรดลองอีกครั้งในอีกสักครู่",
    "changed": "ไฟล์เปลี่ยนแปลงระหว่างการอ่าน เปิดตัวอย่างใหม่",
    "closeDetails": "ปิดรายละเอียดแบบอักษร",
    "failed": "การแปลง Office ไม่ได้ไฟล์ PDF ที่ใช้งานได้ ตรวจสอบไฟล์แล้วลองอีกครั้ง",
    "invalid": "แสดงตัวอย่างไฟล์ Office นี้ไม่ได้ ไฟล์อาจเสียหาย ป้องกันด้วยรหัสผ่าน หรือมีนามสกุลไม่ถูกต้อง",
    "loading": "กำลังแสดงเอกสาร...",
    "missingFontsCount": "แบบอักษร: {count} แบบ",
    "missingFontsDescription": "ตัวอย่างนี้ใช้แบบอักษรเหล่านี้ไม่ได้ ข้อความและการจัดหน้าอาจต่างจากเอกสารต้นฉบับ",
    "missingFontsTitle": "แบบอักษรที่ขาดหาย",
    "retry": "ลองอีกครั้ง",
    "timeout": "การแปลง Office หมดเวลา โปรดลองอีกครั้ง",
    "title": "เอกสาร Office",
    "tooLarge": "ไฟล์ Office หรือ PDF ที่แปลงแล้วมีขนาดเกินขีดจำกัดการแสดงตัวอย่าง ลดขนาดไฟล์หรือปรับการตั้งค่าการแสดงตัวอย่าง",
    "unavailable": "การแสดงตัวอย่าง Office ไม่พร้อมใช้งาน เปิดบริการแสดงตัวอย่างเอกสารบนคอมพิวเตอร์ที่รัน DeepSeek Harness",
    "viewMissingFonts": "แบบอักษรที่ขาดหาย: {count} แบบ คลิกเพื่อดู"
  },
  "sidebarPdf": {
    "failed": "แสดง PDF ไม่ได้: {message}",
    "loading": "กำลังแสดงเอกสาร...",
    "pageImage": "PDF หน้า {page}",
    "password": "PDF นี้ต้องใช้รหัสผ่าน การแสดงตัวอย่างไม่รองรับไฟล์ที่ป้องกันด้วยรหัสผ่าน",
    "rendering": "กำลังแสดงหน้า…",
    "retry": "ลองอีกครั้ง",
    "title": "PDF",
    "unsupported": "การแสดงตัวอย่าง PDF ต้องใช้เนื้อหาไฟล์ครบถ้วน",
    "workerFailed": "กระบวนการแสดง PDF ดำเนินการต่อไม่ได้ โปรดลองอีกครั้ง",
    "zoomControls": "ตัวควบคุมการซูม",
    "zoomFitWidth": "พอดีความกว้าง",
    "zoomIn": "ซูมเข้า",
    "zoomMenu": "เลือกระดับการซูม",
    "zoomOut": "ซูมออก",
    "zoomValue": "{percent}%"
  },
  "sidebarRight": {
    "chrome.collapse": "ยุบแถบด้านข้าง",
    "chrome.collapseAria": "ยุบแถบด้านขวา",
    "chrome.exitFullscreen": "ออกจากเต็มหน้าจอ",
    "chrome.expand": "เปิดแถบด้านข้าง",
    "chrome.expandAria": "เปิดแถบด้านขวา",
    "chrome.toFullscreen": "เต็มหน้าจอ",
    "command.budget": "จำกัดไว้สองบานหน้าต่าง",
    "command.close": "ปิดหน้าหรือหน้าต่างปัจจุบัน",
    "command.collapsed": "ขยายแถบด้านขวาก่อน",
    "command.empty": "เปิดหน้าก่อน",
    "command.float": "การดำเนินการนี้ใช้ในแผงลอยไม่ได้",
    "command.fullscreen": "สลับแผงเต็มหน้าจอ",
    "command.noFocus": "โฟกัสบานหน้าต่างในแถบด้านขวาก่อน",
    "command.noRefresh": "รีเฟรชหน้านี้ไม่ได้",
    "command.noSession": "เลือกเซสชันก่อน",
    "command.refresh": "รีเฟรชหน้าปัจจุบัน",
    "command.stale": "หน้าเปลี่ยนแล้ว โฟกัสอีกครั้ง",
    "command.toggle": "สลับแถบด้านขวา",
    "command.width": "ความกว้างไม่พอสำหรับแบ่ง ขยายแถบด้านข้าง",
    "dock.addTab": "แท็บใหม่",
    "dock.closeFloat": "ปิด",
    "dock.closeTab": "ปิด",
    "dock.dockFloat": "ส่งกลับแถบด้านข้าง",
    "dock.drop.bottom": "เพิ่มส่วนแบ่งล่าง",
    "dock.drop.center": "ย้ายมาที่นี่",
    "dock.drop.left": "เพิ่มส่วนแบ่งซ้าย",
    "dock.drop.right": "เพิ่มส่วนแบ่งขวา",
    "dock.drop.top": "เพิ่มส่วนแบ่งบน",
    "dock.emptyPane": "บานหน้าต่างว่าง",
    "dock.splitPane": "แบ่ง",
    "dock.splitPaneDisabled": "จำกัดไว้สองบานหน้าต่าง",
    "dock.splitPaneNarrow": "ความกว้างไม่พอสำหรับแบ่ง ขยายแถบด้านข้าง",
    "menu.close": "ปิด",
    "menu.closeOthers": "ปิดแท็บอื่น",
    "menu.closeRight": "ปิดแท็บทางขวา",
    "tab.guide.more": "เครื่องมือเพิ่มเติม",
    "tab.guide.title": "เริ่มต้น",
    "tab.unavailable": "ยังไม่มีตัวแสดงเนื้อหาประเภทนี้ที่นี่"
  },
  "sidebarTerminal": {
    "attachmentEnded": "การเชื่อมต่อเทอร์มินัลสิ้นสุดแล้ว เชื่อมต่อใหม่เพื่อดำเนินการต่อ",
    "badge.agent": "เอเจนต์",
    "badge.agentHint": "เปิดโดยเอเจนต์ การพิมพ์ที่นี่จะเข้าควบคุม จากนั้นเอเจนต์จะอ่านได้อย่างเดียว",
    "badge.readOnlyHint": "คำสั่งทำงานในแซนด์บ็อกซ์อ่านอย่างเดียวของเอเจนต์ รวมถึงคำสั่งที่คุณพิมพ์ที่นี่",
    "badge.sandbox": "แซนด์บ็อกซ์",
    "badge.workspaceWriteHint": "คำสั่งทำงานในแซนด์บ็อกซ์พื้นที่ทำงานของเอเจนต์ รวมถึงคำสั่งที่คุณพิมพ์ที่นี่",
    "cleanupFailed": "จบเทอร์มินัล “{title}” ไม่ได้: {message}",
    "closed": "ปิดเทอร์มินัลแล้ว",
    "connecting": "กำลังเชื่อมต่อ…",
    "control": "เข้าควบคุม",
    "creating": "กำลังเริ่ม…",
    "description": "เรียกคำสั่งในพื้นที่ทำงานของเซสชัน",
    "disconnected": "ตัดการเชื่อมต่อแล้ว",
    "exited": "กระบวนการออกแล้ว ({code})",
    "failed": "เทอร์มินัลผิดพลาด: {message}",
    "inputFull": "บัฟเฟอร์อินพุตเต็ม เชื่อมต่อใหม่แล้วลองอีกครั้ง",
    "invalidOutput": "รับหน้าจอเทอร์มินัลไม่ได้ เชื่อมต่อใหม่เพื่อกู้คืน",
    "loading": "กำลังอ่านสภาพแวดล้อมเทอร์มินัล…",
    "missingTerminal": "เทอร์มินัลนี้ไม่มีอยู่แล้ว เปิดเทอร์มินัลใหม่",
    "new": "เทอร์มินัลใหม่",
    "readonly": "มุมมองนี้อ่านได้อย่างเดียว",
    "reconnect": "เชื่อมต่อใหม่",
    "recoveryFailed": "กู้คืนเทอร์มินัลไม่สำเร็จ: {message}",
    "rename": "ชื่อเทอร์มินัล",
    "retry": "ลองอีกครั้ง",
    "retryRecovery": "ลองกู้คืนเทอร์มินัลอีกครั้ง",
    "shell": "เลือกเชลล์",
    "shellEmpty": "ไม่มีเชลล์ที่พร้อมใช้งาน",
    "shellLoading": "กำลังโหลดเชลล์…",
    "shortcut.noSession": "เลือกเซสชันก่อน",
    "terminalLimit": "ถึงขีดจำกัดเทอร์มินัลแล้ว ปิดเทอร์มินัลที่ไม่ใช้แล้วลองอีกครั้ง เทอร์มินัลที่ออกแล้วก็นับรวมด้วย",
    "title": "เทอร์มินัล",
    "unavailable": "ไม่พร้อมใช้งาน"
  },
  "skill": {
    "menu.userOnly": "เฉพาะผู้ใช้",
    "row.failed": "โหลดทักษะไม่สำเร็จ",
    "row.inspect": "ตรวจสอบ",
    "row.instructions": "คำแนะนำ",
    "row.preparing": "กำลังเตรียมโหลดทักษะ",
    "row.running": "กำลังโหลดทักษะ",
    "row.stopped": "หยุดโหลดทักษะแล้ว",
    "row.title": "ทักษะ"
  },
  "slash.menu": {
    "command": "คำสั่ง",
    "crumbs.aria": "การนำทางโฟลเดอร์",
    "drill.aria": "เรียกดูโฟลเดอร์",
    "drill.hint": "เรียกดูโฟลเดอร์",
    "drill.key": "Tab",
    "loading": "กำลังโหลด…",
    "skill": "ทักษะ",
    "subagent": "เอเจนต์ย่อย",
    "suggestions.aria": "คำแนะนำการเรียกใช้"
  },
  "subagent": {
    "activity.completed": "เสร็จแล้ว",
    "activity.inactive": "ไม่ทำงาน",
    "activity.running": "กำลังทำงาน",
    "branch.collapse": "ยุบลูกหลานของ {label}",
    "branch.expand": "ขยายลูกหลานของ {label}",
    "count.running.one": "เอเจนต์ย่อยกำลังทำงาน {count} ตัว",
    "count.running.other": "เอเจนต์ย่อยกำลังทำงาน {count} ตัว",
    "count.total.one": "เอเจนต์ย่อย {count} ตัว",
    "count.total.other": "เอเจนต์ย่อย {count} ตัว",
    "duration.days": "{days} วัน",
    "duration.daysHours": "{days} วัน {hours} ชม.",
    "duration.exactDays": "{days} วัน {hours} ชม. {minutes} นาที {seconds} วิ.",
    "duration.exactTitle": "ระยะเวลาทำงานรวม: {duration}",
    "duration.hours": "{hours} ชม. {minutes} นาที {seconds} วิ.",
    "duration.minutes": "{minutes} นาที {seconds} วิ.",
    "duration.months": "~{months} เดือน",
    "duration.monthsDays": "~{months} เดือน {days} วัน",
    "duration.seconds": "{seconds} วิ.",
    "duration.years": "~{years} ปี",
    "duration.yearsMonths": "~{years} ปี {months} เดือน",
    "load.error": "โหลดเอเจนต์ย่อยไม่ได้",
    "load.idle": "ยังไม่ได้โหลดเอเจนต์ย่อย",
    "loading.label": "กำลังโหลดเอเจนต์ย่อย…",
    "mode.continuable": "ดำเนินการต่อได้",
    "mode.external": "งานภายนอก",
    "mode.oneShot": "ครั้งเดียว",
    "mode.unknown": "ไม่ทราบโหมด",
    "open.floatWindow": "เปิดในแผงลอย",
    "open.sidebar": "เปิดในแถบด้านข้าง",
    "open.sidebar.aria": "เปิด {label} ในแถบด้านข้าง",
    "progress.active": "กำลังดำเนินการ {count}",
    "progress.completed": "เสร็จแล้ว {count}",
    "progress.external": "ภายนอก {count}",
    "progress.inactive": "ไม่ทำงาน {count}",
    "readonly.oneShot.body": "งานแบบครั้งเดียวไม่รับงานต่อเนื่อง ตรวจทานบันทึกการทำงานทั้งหมดได้ที่นี่",
    "readonly.oneShot.title": "บันทึกเอเจนต์ย่อยแบบครั้งเดียว",
    "readonly.title": "เอเจนต์ย่อยนี้อ่านได้อย่างเดียวในขณะนี้",
    "readonly.unknown.body": "อ่านเซสชันย่อยเพื่อดูว่าดำเนินการต่อได้หรือไม่",
    "retry": "ลองอีกครั้ง",
    "section.empty": "ไม่มีเอเจนต์ย่อย",
    "section.title": "เอเจนต์ย่อย",
    "sidebar.chat": "แชต",
    "switcher.aria": "สลับเอเจนต์ย่อย: {title}",
    "tokens.million": "{value}M",
    "tokens.thousand": "{value}K",
    "tokens.total": "{value} โทเคน",
    "tree.aria": "เซสชันเอเจนต์ย่อย"
  },
  "trajectory": {
    "attachment.imageName": "รูปภาพ {index}",
    "attachment.list": "ไฟล์แนบ",
    "block.label": "บล็อก #{index} {type}",
    "block.openSummary": "เปิดสรุปการเรียกใช้เครื่องมือของบล็อก #{index}",
    "block.openSummaryTitle": "เปิดสรุปการเรียกใช้เครื่องมือ",
    "code.copyOutput": "คัดลอกผลลัพธ์",
    "code.copySource": "คัดลอกโค้ด",
    "code.originalJson": "JSON ต้นฉบับ",
    "code.output": "ผลลัพธ์",
    "code.running": "กำลังดำเนินการ…",
    "code.source": "โค้ด",
    "column.input": "ขาเข้า",
    "column.model": "โมเดล",
    "column.output": "ขาออก",
    "column.think": "การคิด",
    "column.time": "เวลา",
    "column.tools": "เครื่องมือ",
    "details.assistantMessage": "ข้อความของผู้ช่วย",
    "details.close": "ปิดรายละเอียด",
    "details.compacted": "ย่อแล้ว",
    "details.error": "ข้อผิดพลาด",
    "details.event": "รายละเอียดเหตุการณ์",
    "details.failure.auth": "คีย์ API ไม่ถูกต้อง",
    "details.hierarchy": "ลำดับชั้น",
    "details.lastAttemptError": "ข้อผิดพลาดในการลองครั้งล่าสุด",
    "details.model": "โมเดล",
    "details.provider": "ผู้ให้บริการ",
    "details.purpose": "วัตถุประสงค์",
    "details.resize": "ปรับขนาดรายละเอียดเหตุการณ์",
    "details.resizeTitle": "ลากเพื่อปรับขนาด ดับเบิลคลิกเพื่อรีเซ็ต",
    "details.result": "ผลลัพธ์",
    "details.retry": "ลองอีกครั้ง",
    "details.retryDelay": "ระยะเวลาก่อนลองอีกครั้ง",
    "details.source": "แหล่งที่มา",
    "details.status": "สถานะ",
    "details.subtoolCalls": "การเรียกใช้เครื่องมือย่อย",
    "details.toolCall": "การเรียกใช้เครื่องมือ",
    "details.toolCalls": "การเรียกใช้เครื่องมือ",
    "group.compaction": "การย่อบริบทครั้งที่ {seq}",
    "group.message": "ข้อความ",
    "group.step": "ขั้นตอนที่ {step}",
    "history.clickToLoadEarlier": "คลิกเพื่อโหลดประวัติก่อนหน้า",
    "history.loadEarlier": "โหลดประวัติก่อนหน้า",
    "history.loadingEarlier": "กำลังโหลดประวัติก่อนหน้า…",
    "history.loadingEarlierAria": "กำลังโหลดประวัติก่อนหน้า…",
    "history.loadingTrajectory": "กำลังโหลดลำดับการทำงาน…",
    "kind.assistant": "ผู้ช่วย",
    "kind.compacted": "ย่อแล้ว",
    "kind.context": "บริบท",
    "kind.message": "ข้อความ",
    "kind.sub": "ย่อย",
    "kind.subtool": "เครื่องมือย่อย",
    "kind.system": "ระบบ",
    "kind.tool": "เครื่องมือ",
    "kind.user": "ผู้ใช้",
    "layout.compacted": "ย่อบริบทแล้ว",
    "layout.compacting": "กำลังย่อบริบท…",
    "layout.compactionFailed": "ย่อบริบทไม่สำเร็จ",
    "layout.compactionInterrupted": "การย่อบริบทถูกขัดจังหวะก่อนเสร็จสิ้น",
    "layout.fileAttachments": "ไฟล์ ×{count}",
    "layout.imageCount": "รูปภาพ ×{count}",
    "layout.initialSystemPrompt": "พรอมป์ต์ระบบเริ่มต้น",
    "layout.systemPromptAndToolsUpdated": "อัปเดตพรอมป์ต์ระบบและเครื่องมือแล้ว",
    "layout.systemPromptUpdated": "อัปเดตพรอมป์ต์ระบบแล้ว",
    "layout.toolAdded": "เพิ่มเครื่องมือแล้ว: {name}",
    "layout.toolCallOnly": "เรียกใช้เครื่องมือเท่านั้น",
    "layout.toolRemoved": "นำเครื่องมือออกแล้ว: {name}",
    "layout.toolUpdateNotice": "อัปเดตเครื่องมือแล้ว",
    "layout.toolsAdded": "เพิ่มแล้ว: {names}",
    "layout.toolsAddedCount": "เพิ่มแล้ว {count} รายการ",
    "layout.toolsChanged": "เพิ่มแล้ว {added} รายการ นำออกแล้ว {removed} รายการ",
    "layout.toolsRemoved": "นำออกแล้ว: {names}",
    "layout.toolsRemovedCount": "นำออกแล้ว {count} รายการ",
    "layout.toolsUpdated": "อัปเดตเครื่องมือแล้ว",
    "options.json": "JSON ของตัวเลือกคำขอ",
    "options.notRecorded": "ไม่ได้บันทึกตัวเลือกไว้",
    "record.json": "JSON",
    "record.namedParametersJson": "JSON ของพารามิเตอร์ {name}",
    "record.noContent": "ไม่มีเนื้อหา",
    "record.noOutput": "ไม่มีผลลัพธ์",
    "record.noPayload": "ไม่ได้เก็บข้อมูลที่ส่งไว้",
    "record.noResult": "ไม่ได้เก็บผลลัพธ์ไว้",
    "record.outputJson": "JSON ของผลลัพธ์",
    "record.parameters": "พารามิเตอร์",
    "record.parametersJson": "JSON ของพารามิเตอร์",
    "record.payloadJson": "JSON ของข้อมูลที่ส่ง",
    "record.rawResult": "ผลลัพธ์ดิบ",
    "record.rawResultUnavailable": "ผลลัพธ์ดิบมีให้ดูเฉพาะการเรียกใช้เครื่องมือแบบสดเท่านั้น",
    "record.renderedResult": "ผลลัพธ์ที่จัดรูปแบบแล้ว",
    "record.resultJson": "JSON ของผลลัพธ์",
    "record.schemaUnavailable": "ไม่มีสคีมา",
    "record.systemPrompt": "พรอมป์ต์ระบบ",
    "record.systemPromptMissing": "ไม่มีพรอมป์ต์ระบบในคำขอนี้",
    "record.thinking": "กำลังคิด",
    "record.toolCallOnly": "(เรียกใช้เครื่องมือเท่านั้น)",
    "record.tools": "เครื่องมือ",
    "record.toolsMissing": "ไม่มีเครื่องมือในคำขอนี้",
    "record.wrapLines": "ตัดบรรทัดอัตโนมัติ",
    "request.collapsedAssistant": "ผู้ช่วย",
    "request.collapsedSummary": "สรุป{kind}ที่ยุบอยู่, {summary}",
    "request.collapsedTool": "การเรียกใช้ย่อย",
    "request.collapsedTurn": "รอบ",
    "request.compaction": "การย่อบริบท · {section}",
    "request.compactionPurpose": "การย่อบริบท",
    "request.label": "คำขอ #{request}",
    "request.labelCompaction": "คำขอ #{request} · การย่อบริบท",
    "request.noContent": "ไม่มีเนื้อหา",
    "request.retryProgress": "{retry} จาก {maximum}",
    "request.rowAria": "{request}{kind}, {content}",
    "request.rowAriaCompaction": "คำขอ {request}, การย่อบริบท",
    "request.rowPrefix": "คำขอ {request}, ",
    "section.betweenTurns": "ระหว่างรอบ",
    "source.goal": "เป้าหมาย",
    "source.goalRound": "เป้าหมาย · รอบที่ {round}",
    "source.messageJson": "JSON ของแหล่งที่มาข้อความ",
    "source.notRecorded": "ไม่ได้บันทึกแหล่งที่มาไว้",
    "source.plugin": "ปลั๊กอิน",
    "source.pluginNamed": "ปลั๊กอิน · {plugin}",
    "source.unknown": "ไม่ทราบ",
    "source.user": "ผู้ใช้",
    "status.completed": "เสร็จแล้ว",
    "status.failed": "ไม่สำเร็จ",
    "status.pending": "รอดำเนินการ",
    "summary.steps.one": "{count} ขั้นตอน",
    "summary.steps.other": "{count} ขั้นตอน",
    "summary.toolCalls.one": "เรียกใช้เครื่องมือ {count} ครั้ง",
    "summary.toolCalls.other": "เรียกใช้เครื่องมือ {count} ครั้ง",
    "tab.diff": "ความแตกต่าง",
    "tab.options": "ตัวเลือก",
    "tab.payload": "ข้อมูลที่ส่ง",
    "tab.preview": "ตัวอย่าง",
    "tab.raw": "ข้อมูลดิบ",
    "tab.rawOutput": "ผลลัพธ์ดิบ",
    "tab.result": "ผลลัพธ์",
    "tab.schema": "สคีมา",
    "tab.source": "แหล่งที่มา",
    "tab.summary": "สรุป",
    "tab.systemPrompt": "พรอมป์ต์ระบบ",
    "tab.timing": "ข้อมูลเวลา",
    "tab.tools": "เครื่องมือ",
    "tab.usage": "การใช้งาน",
    "timeline.aria": "เส้นเวลาลำดับการทำงาน",
    "timeline.noTimingData": "ไม่มีข้อมูลเวลา",
    "timeline.overviewAria": "ภาพรวมเส้นเวลา ลากในแนวนอนเพื่อโฟกัสเหตุการณ์",
    "timeline.started": "เริ่มเมื่อ {time}",
    "timeline.total": "รวม {duration}",
    "timeline.ttftDecoding": "TTFT {ttft} · ถอดรหัส {decoding}",
    "timing.duration": "ระยะเวลา",
    "timing.durationTooShort": "ระยะเวลาสั้นเกินไป",
    "timing.firstTokenUnavailable": "ไม่มีข้อมูลโทเคนแรก",
    "timing.generation": "การสร้างคำตอบ",
    "timing.notAvailable": "ไม่มีข้อมูล",
    "timing.notRecorded": "ไม่ได้บันทึกไว้",
    "timing.outputTokensUnavailable": "ไม่มีข้อมูลโทเคนขาออก",
    "timing.request": "ข้อมูลเวลาของคำขอ",
    "timing.sessionTimestamps": "เวลาประทับของเซสชัน",
    "timing.sessionTimestampsRunning": "เวลาประทับของเซสชัน (กำลังดำเนินการ)",
    "timing.showLocalTime": "แสดงเวลาท้องถิ่น",
    "timing.showUnixTimestamp": "แสดงเวลาประทับ Unix",
    "timing.source": "แหล่งข้อมูลเวลา",
    "timing.started": "เริ่มเมื่อ",
    "timing.stepStartUnavailable": "ไม่มีเวลาเริ่มขั้นตอน",
    "timing.throughput": "อัตราการประมวลผล",
    "timing.totalDuration": "ระยะเวลารวม",
    "timing.ttft": "TTFT",
    "timing.usageUnavailable": "ไม่มีข้อมูลการใช้งาน",
    "toolbar.actualTime": "เวลาจริง",
    "toolbar.aria": "แถบเครื่องมือลำดับการทำงาน",
    "toolbar.calls": "การเรียกใช้",
    "toolbar.collapseCalls": "ยุบการเรียกใช้",
    "toolbar.collapseSubCalls": "ยุบการเรียกใช้ย่อย",
    "toolbar.collapseTurns": "ยุบรอบ",
    "toolbar.duration": "ระยะเวลา",
    "toolbar.expandCalls": "ขยายการเรียกใช้",
    "toolbar.expandSubCalls": "ขยายการเรียกใช้ย่อย",
    "toolbar.expandTurns": "ขยายรอบ",
    "toolbar.search": "ค้นหาลำดับการทำงาน",
    "toolbar.searchPlaceholder": "ค้นหา",
    "toolbar.subCalls": "การเรียกใช้ย่อย",
    "toolbar.turns": "รอบ",
    "toolbar.useActualDuration": "ใช้ระยะเวลาจริง",
    "toolbar.useEqualWidth": "แสดงการดำเนินการด้วยความกว้างเท่ากัน",
    "turn.label": "รอบที่ {turn}",
    "unit.milliseconds": "{value} มิลลิวินาที",
    "unit.seconds": "{value} วิ",
    "unit.tokens": "{value} โทเคน",
    "unit.tokensPerSecond": "{value} โทเคน/วิ",
    "usage.cacheCreated": "สร้างแคชแล้ว",
    "usage.cached": "อยู่ในแคช",
    "usage.content": "เนื้อหา",
    "usage.input": "ขาเข้า",
    "usage.notReported": "ไม่ได้รายงานการใช้งาน",
    "usage.other": "อื่น ๆ",
    "usage.output": "ขาออก",
    "usage.reasoning": "การให้เหตุผล",
    "usage.sessionCumulative": "ยอดสะสมของเซสชัน",
    "usage.thisRequest": "คำขอนี้",
    "usage.tokens": "โทเคน",
    "view.trajectory": "ลำดับการทำงาน"
  },
  "workflowRun": {
    "member.empty": "ชื่อสมาชิกว่าง",
    "member.open": "เปิด {name}",
    "phase.empty": "ชื่อช่วงว่าง",
    "phase.unassigned": "ยังไม่กำหนดช่วง",
    "run.empty": "ยังไม่มีสมาชิกเริ่มทำงาน",
    "run.members.one": "สมาชิก {count} ราย",
    "run.members.other": "สมาชิก {count} ราย",
    "run.title": "{name}",
    "status.cancelled": "ยกเลิกแล้ว",
    "status.completed": "เสร็จแล้ว",
    "status.failed": "ล้มเหลว",
    "status.interrupted": "ถูกขัดจังหวะ",
    "status.running": "กำลังทำงาน",
    "statusCount.cancelled": "ยกเลิกแล้ว {count}",
    "statusCount.completed": "เสร็จแล้ว {count}",
    "statusCount.failed": "ล้มเหลว {count}",
    "statusCount.interrupted": "ถูกขัดจังหวะ {count}",
    "statusCount.running": "กำลังทำงาน {count}"
  },
  "workspace": {
    "actions.archive": "เก็บถาวร",
    "actions.newSession": "เซสชันใหม่",
    "actions.newSession.aria": "เซสชันใหม่ใน {name}",
    "actions.pin": "ปักหมุด",
    "actions.session.aria": "การดำเนินการกับเซสชัน {name}",
    "actions.unarchive": "นำออกจากที่เก็บถาวร",
    "actions.unpin": "เลิกปักหมุด",
    "actions.workspace.aria": "การดำเนินการกับพื้นที่ทำงาน {name}",
    "archive.confirm.action": "หยุดและเก็บถาวร",
    "archive.confirm.activity": "งานที่จะถูกหยุด",
    "archive.confirm.desc": "“{title}” ยังมีงานที่กำลังดำเนินการ การเก็บถาวรจะหยุดงานก่อน คุณกู้คืนเซสชันภายหลังได้จากตัวกรอง “บทสนทนาทั้งหมด (รวมที่เก็บถาวร)” ในแถบด้านข้าง โดยงานที่หยุดจะไม่เริ่มทำต่อเอง",
    "archive.confirm.jobs.one": "งานเบื้องหลัง {n} งาน: {names}",
    "archive.confirm.jobs.other": "งานเบื้องหลัง {n} งาน: {names}",
    "archive.confirm.listSeparator": ", ",
    "archive.confirm.other.one": "งานอื่น {n} รายการ ({kind})",
    "archive.confirm.other.other": "งานอื่น {n} รายการ ({kind})",
    "archive.confirm.pending": "กำลังหยุดและเก็บถาวร…",
    "archive.confirm.schedules.one": "การแจ้งเตือนตามกำหนด {n} รายการ: {names}",
    "archive.confirm.schedules.other": "การแจ้งเตือนตามกำหนด {n} รายการ: {names}",
    "archive.confirm.subagents.one": "เอเจนต์ย่อยที่กำลังทำงาน {n} ตัว: {names}",
    "archive.confirm.subagents.other": "เอเจนต์ย่อยที่กำลังทำงาน {n} ตัว: {names}",
    "archive.confirm.title": "หยุดและเก็บเซสชันนี้ถาวรหรือไม่?",
    "archive.confirm.turn": "รอบสนทนาที่กำลังดำเนินการ",
    "conflict.named": "มีพื้นที่ทำงานชื่อ “{name}” อยู่แล้ว",
    "date.ymd": "{y}-{m}-{d}",
    "defaultWorkspace.failed": "สร้างพื้นที่ทำงานเริ่มต้นไม่ได้ ใช้ตัวเลือกเลือกพื้นที่ทำงานเพื่อเลือกโฟลเดอร์",
    "delete.desc": "นำ “{name}” ออกจากรายการพื้นที่ทำงาน โดยเก็บโฟลเดอร์และบันทึกเซสชันไว้ เซสชันในพื้นที่นี้จะปรากฏในกลุ่มไม่ได้จัดกลุ่ม",
    "delete.pending": "กำลังลบพื้นที่ทำงาน…",
    "delete.workspace": "ลบพื้นที่ทำงาน",
    "draft.initializationFailed": "ใส่ข้อความในฉบับร่างไม่ได้ โปรดลองอีกครั้งในอีกสักครู่",
    "draft.workspaceRequired": "เลือกพื้นที่ทำงานก่อน",
    "empty.noMatches": "ไม่พบรายการที่ตรงกัน",
    "empty.none": "ยังไม่มีเซสชัน",
    "empty.noneArchived": "ยังไม่มีเซสชันที่เก็บถาวร",
    "empty.viewOthers": "ดูเซสชันอื่น",
    "field.sessionName": "ชื่อเซสชัน",
    "field.workspaceName": "ชื่อพื้นที่ทำงาน",
    "filterBy.label": "กรองเซสชัน",
    "folderError.retry": "เลือกอีกครั้ง",
    "folderError.title": "เปิดโฟลเดอร์ไม่ได้",
    "group.ungrouped": "ไม่ได้จัดกลุ่ม",
    "groupBy.flat": "รวมในรายการเดียว",
    "groupBy.label": "จัดกลุ่มตาม",
    "groupBy.workspace": "พื้นที่ทำงาน",
    "groupBy.workspaceTree": "โครงสร้างพื้นที่ทำงาน",
    "hover.copied": "คัดลอกแล้ว",
    "hover.created": "สร้างเมื่อ {time}",
    "menu.addWorkspace": "เพิ่มพื้นที่ทำงาน…",
    "menu.archiveSession": "เก็บเซสชันถาวร",
    "menu.fork": "แยกเซสชัน",
    "menu.pinSession": "ปักหมุดเซสชัน",
    "menu.sessionId": "คัดลอกรหัสเซสชัน",
    "menu.unarchiveSession": "นำเซสชันออกจากที่เก็บถาวร",
    "menu.unpinSession": "เลิกปักหมุดเซสชัน",
    "orderBy.label": "เรียงตาม",
    "orderBy.manual": "กำหนดเอง",
    "orderBy.updated": "อัปเดตล่าสุด",
    "picker.loading": "กำลังโหลดพื้นที่ทำงาน…",
    "rename": "เปลี่ยนชื่อ",
    "rename.session.title": "เปลี่ยนชื่อเซสชัน",
    "rename.workspace.title": "เปลี่ยนชื่อพื้นที่ทำงาน",
    "row.archived": "เก็บถาวรแล้ว",
    "row.pinned": "ปักหมุดแล้ว",
    "search.clear": "ล้างการค้นหา",
    "search.hasMore": "แสดง {n} ผลลัพธ์แรก โปรดระบุคำค้นให้เจาะจงขึ้น",
    "search.noMatches": "ไม่พบเซสชันที่ตรงกัน",
    "search.pending": "กำลังค้นหาประวัติเซสชัน…",
    "search.placeholder": "ค้นหาชื่อเซสชัน",
    "search.results.aria": "ผลการค้นหา",
    "search.sessions.aria": "ค้นหาเซสชัน",
    "section.sessions": "เซสชัน",
    "section.workspaces": "พื้นที่ทำงาน",
    "session.new": "เซสชันใหม่",
    "session.untitled": "ไม่มีชื่อ",
    "sessions.collapse": "แสดงน้อยลง",
    "sessions.count.one": "{n} เซสชัน",
    "sessions.count.other": "{n} เซสชัน",
    "sessions.expand": "แสดงอีก {n} เซสชัน",
    "shortcut.directoryBusy": "กำลังเลือกหรือเพิ่มพื้นที่ทำงาน",
    "shortcut.forkFailed": "แยกเซสชันไม่ได้ โปรดลองอีกครั้ง",
    "shortcut.noCompletedTurn": "เซสชันนี้ยังไม่มีรอบสนทนาที่เสร็จสิ้น",
    "shortcut.noPicker": "ตัวเลือกไดเรกทอรีไม่พร้อมใช้งาน",
    "shortcut.noSession": "เลือกเซสชันก่อน",
    "status.compact.answer": "คำตอบ",
    "status.compact.approval": "การอนุมัติ",
    "status.compact.planReview": "ตรวจสอบแผน",
    "status.completed": "เสร็จสิ้น",
    "status.idle": "ว่าง",
    "status.planReview": "แผนรอการตรวจสอบ",
    "status.running": "กำลังทำงาน",
    "status.subagentsRunning.one": "เอเจนต์ย่อยกำลังทำงาน {n} ตัว",
    "status.subagentsRunning.other": "เอเจนต์ย่อยกำลังทำงาน {n} ตัว",
    "status.waitingAnswer": "รอคำตอบ",
    "status.waitingApproval": "รอการอนุมัติ",
    "time.ago": "{t}ที่แล้ว",
    "time.days": "{n} วัน",
    "time.hours": "{n} ชม.",
    "time.minutes": "{n} นาที",
    "time.months": "{n} เดือน",
    "time.now": "ตอนนี้",
    "time.years": "{n} ปี",
    "toast.archived": "เก็บเซสชันถาวรแล้ว คุณสามารถ ",
    "toast.archivedFilter": "กรองเซสชันที่เก็บถาวร",
    "toast.archivedNotOpenable": "เปิดเซสชันที่เก็บถาวรไม่ได้ ให้นำออกจากที่เก็บถาวรเพื่อดู",
    "toast.archivedOr": " หรือ ",
    "toast.archivedUndo": "เลิกทำ",
    "toast.createFailed": "สร้างเซสชันใหม่ไม่สำเร็จ: {message}",
    "toast.forkRequiresOpen": "เปิดเซสชันต้นทางเพื่อย้ายข้อมูลให้เสร็จก่อนแยกเซสชัน",
    "toast.openForkSource": "เปิดเซสชันต้นทาง",
    "toast.pinFailed": "ปักหมุดไม่สำเร็จ โปรดลองอีกครั้งภายหลัง",
    "toast.sessionIdCopied": "คัดลอกรหัสเซสชันแล้ว",
    "toast.sessionIdCopyFailed": "คัดลอกไม่สำเร็จ โปรดลองอีกครั้ง",
    "toast.stoppedAndArchived": "หยุดและเก็บเซสชันถาวรแล้ว คุณสามารถ ",
    "toast.unpinFailed": "เลิกปักหมุดไม่สำเร็จ โปรดลองอีกครั้งภายหลัง",
    "viewOptions.hideArchived": "ซ่อนรายการที่เก็บถาวร",
    "viewOptions.label": "ตัวเลือกมุมมอง",
    "viewOptions.onlyArchived": "เฉพาะที่เก็บถาวร",
    "viewOptions.showArchived": "บทสนทนาทั้งหมด (รวมที่เก็บถาวร)",
    "workspace.add": "เพิ่มพื้นที่ทำงาน"
  }
};
    return {
      inject: ['locale'],
      apply(ctx) {
        ctx.effect(() => {
          const disposers = [];
          const dispose = () => {
            for (const release of disposers.splice(0).reverse()) release();
          };
          try {
            disposers.push(ctx.locale.addLanguage({ id: 'th', label: 'ไทย', fallback: 'en' }));
            for (const [namespace, dictionary] of Object.entries(dictionaries)) {
              disposers.push(ctx.locale.register(namespace, 'th', dictionary));
            }
          } catch (error) {
            dispose();
            throw error;
          }
          return dispose;
        }, 'dsh-thai: language and dictionaries');
      },
    };
  },
};

const voiceModule = {
id: '@goodandready/dsh-voice',
factory: (require) => {
var module = { exports: {} }
var exports = module.exports
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
let React = require('react')
const h = React.createElement
// Use the inline chevron below; host client internals are not public modules.
const ChevronIcon = null
const NS = 'dsh-voice'
const PKG = '@goodandready/dsh-voice'
const ROW_ID = 'dsh-voice'
const ROW_CONFIG_KEY = 'dsh-ui-thai#local-dsh-thai'
const en = {
'handsFreeStarting':'Opening microphone…', 'handsFreeSending':'Sending · waiting for confirmation…', 'handsFreeLimit':'Hands-free stopped: 60-second recording limit reached. Start again to continue.', 'handsFreeCommands':'Hands-free stopped: voice commands are not auto-executed in this mode.', 'handsFreeStart':'Hands-free', 'handsFreeStop':'Stop hands-free (Esc)', 'handsFreeListening':'Hands-free · listening; pause to send', 'handsFreeDraft':'Hands-free stopped: clear your draft and attachments first.', 'handsFreeSession':'Hands-free stopped: conversation changed.', 'handsFreeSendFailed':'Send was not confirmed. Hands-free stopped; check the composer.',
'saveFailed':'Some fields were not saved —', 'cardHint':'Dictation and voice input settings',
'expand':'Expand', 'collapse':'Collapse', 'composerUnavailable':'Composer unavailable', 'keySpace':'Space', 'keyUnset':'not set',
'recognitionError':'recognition failed', 'micUnavailable':'Mic unavailable: needs HTTPS or localhost',
'noRecorder':'MediaRecorder unsupported in browser', 'browserFailed':'Browser did not recognize: ',
'nothingHeard':'Nothing was recognized', 'dictationBtn':'Voice typing', 'messageBtn':'Voice message — click or hold',
'dictationPill':'Dictation — text is appended to the input', 'messagePill':'Recording a voice message', 'cancel':'Cancel',
'holdHint':'Hold — release to send', 'listening':'Listening in the browser…', 'stop':'Stop', 'transcribing':'Transcribing…',
'sendingIn':'Sending to the agent in', 'secondsShort':' s', 'keepPending':'Do not send', 'hide':'Hide', 'title':'Voice',
'recordSlot':'Voice recording',
'browserHint':'Web Speech recognition (uses browser language; Chrome sends audio to Google)',
'browserWebGpu':'Browser WebGPU Whisper (Offline)',
'browserWebGpuHint':'Runs Whisper directly in browser GPU: offline, zero network traffic.',
'npuProvider':'Hardware Acceleration',
'npuProviderHint':'SenseVoice hardware provider: CPU, Rockchip NPU, OpenVINO, or CUDA.',
'npuThreads':'Threads (CPU/SBC)', 'benchmarkTitle':'Hardware Benchmark (Speed & Latency)', 'runBenchmarkBtn':'Run Benchmark',
'benchmarking':'Running benchmark…',
'benchmarkHint':'Measures RTF and inference latency on 1.0s audio sample.',
'webgpuStatus':'Browser WebGPU Status', 'webgpuAvailable':'WebGPU Available (ready)',
'webgpuNotAvailable':'WebGPU Not Detected (server fallback)', 'openaiHint':'whisper-1 · key OPENAI_API_KEY',
'siliconflowHint':'FunAudioLLM/SenseVoiceSmall',
'deepinfraHint':'openai/whisper-large-v3-turbo', 'fireworksHint':'whisper-v3-turbo',
'mistralHint':'voxtral-mini-latest', 'openrouterHint':'google/gemini-2.5-flash',
'localHint':'set when the server is started', 'up':'Up', 'down':'Down', 'remove':'Remove', 'addProvider':'Add provider',
'chainHint':'Top to bottom is the order they are tried in', 'customName':'name used in the chain', 'customModel':'model',
'customKeyName':'key name', 'customModelHint':'model to request (empty = default)', 'addCustom':'Add your own provider',
'loadingSettings':'Loading settings…',
'notReady1':'Settings not ready yet. If just restarted, ',
'notReady2':'it will appear shortly.', 'hotkey':'Voice message key', 'pressKey':'Press a key…',
'clearKey':'Clear the key', 'hotkeyHint1':'Hold to record, release to send, Esc cancels. ',
'hotkeyHint2':'Any letter, F-key or modifier.', 'language':'Language', 'langAuto':'Auto-detect',
'langRu':'Russian (ru)', 'langEn':'English (en)', 'langZh':'Chinese (zh)', 'langUk':'Ukrainian (uk)', 'langDe':'German (de)',
'dictationHint':'Speech is chunked at pauses into the input.', 'pauseMs':'Pause that ends a phrase, ms',
'pauseHint':'Pause duration that triggers phrase cut', 'speaking':'You are speaking…',
'silence':'Pause…', 'normalizeTranscript':'Normalize file transcripts', 'undo':'Undo last insert', 'undone':'Insert undone',
'nothingToUndo':'Nothing to undo', 'clipping':'Clipping', 'clippingHint':'Too loud (clipping)', 'lowVolume':'Low signal',
'lowVolumeHint':'Speak louder', 'vadEngine':'VAD engine', 'vadEngineHint':'Neural Silero VAD (WASM/ONNX) or classic amplitude gate',
'vadSilero':'Silero VAD (neural)', 'vadAmplitude':'Amplitude gate', 'streamingWs':'Streaming WebSocket',
'streamingWsHint':'Real-time WebSocket audio streaming to local ASR', 'beep':'Beep on start/stop', 'localOnly':'Local whisper only',
'localOnlyHint':'Restrict both chains to the local whisper.cpp server: fully offline.', 'sendDelay':'Dictation send delay (ms)',
'sendDelayHint':'Wait before appending a dictated phrase, with a cancel window. 0 = off', 'mic':'Microphone',
'micDefault':'System default', 'vocabulary':'Custom vocabulary (one word per line)', 'polish':'Polish transcript with model',
'polishHint':'Fix punctuation and fillers via the harness model before inserting', 'stream':'Continuous dictation',
'streamHint':'Cut phrases by a timer while you speak instead of waiting for a long pause', 'streamChunkMs':'Stream chunk (ms)',
'vadAdapt':'Adaptive silence', 'vadAdaptHint':'Auto-tune the silence threshold to the pace of your speech. 0 = fixed',
'wakeWord':'Wake word', 'wakeWordHint':'Starts recording when speech begins with phrase. Empty = off',
'bargeIn':'Barge-in', 'polishSend':'Polish whole draft before sending',
'polishSendHint':'Run the composed draft through the model right before sending', 'editablePreview':'Editable preview before send',
'editablePreviewHint':'Preview text before sending with editing options.', 'editPreview':'Edit',
'sendNow':'Send', 'cancelPreview':'Cancel', 'rawText':'Raw', 'polishedText':'Polished',
'sessionMismatch':'Different chat active; canceled to prevent leak.', 'sessionCommands':'Voice session commands',
'sessionCommandsHint':'Commands act on session instead of being inserted as text',
'polishBaseUrl':'Offline polish endpoint',
'polishBaseUrlHint':'OpenAI /chat/completions URL. Empty = harness model',
'polishModel':'Offline polish model', 'polishKeyEnv':'Offline polish key credential',
'voiceCommandsLabel':'Voice edit commands ("new line", "paragraph")',
'normalizeTranscriptHint':'transcribe_audio: spoken numbers to digits, tidy punctuation', 'messageTitle':'Voice message',
'messageHint':'One whole recording, sent to the agent once it is transcribed.', 'undoMs':'Undo window, ms',
'undoHint':'How long the automatic send can still be called off', 'customTitle':'Your own providers',
'customHint':'Any OpenAI-compatible API. The name becomes available in the chains above.', 'general':'General',
'whisperEndpoint':'Local whisper: endpoint', 'whisperEndpointHint':'POST /inference of a whisper.cpp server',
'deepgramEndpoint':'Deepgram: base URL',
'deepgramEndpointHint':'Base URL for Deepgram API (default https://api.deepgram.com)',
'whisperBin':'Local whisper: binary', 'whisperBinHint':'used when autostart is on', 'whisperModel':'Local whisper: model',
'whisperModelHint':'Absolute path to the ggml model file', 'whisperAutostart':'Autostart the local whisper',
'bilingualDeveloperPrompt':'Bilingual developer context (RU/EN)',
'bilingualDeveloperPromptHint':'Hints dev terms & CLI to STT to prevent phonetic transliteration',
'calibrateNoise':'Calibrate Noise (2s)',
'calibrateNoiseHint':'Measures room noise for 2s to calibrate noise gate', 'calibrating':'Measuring noise…',
'calibratedMsg':'Gate set: {db} dB (ambient: {noise} dB)', 'calibratedValue':'Calibrated', 'save':'Save', 'saved':'Saved ✓',
'openrouterWarning':'OpenRouter lacks /audio/transcriptions — use openai-chat-audio template',
'noiseSuppression':'Hardware noise suppression',
'noiseSuppressionHint':'Enable browser noise suppression, echo cancellation, and auto gain control',
'contextGlossary':'Context glossary injection',
'contextGlossaryHint':'Extract identifiers from composer to improve STT',
'providerDashboard':'Provider Latency & Health', 'avgLatency':'Avg latency', 'successRate':'Success', 'fast':'Fast', 'normal':'Normal',
'slow':'Slow', 'error':'Error', 'idle':'No calls', 'play':'Play', 'pause':'Pause', 'listenBack':'Listen back',
'lastRecording':'Last voice note', 'sensevoiceHint':'SenseVoice-ONNX / Sherpa-ONNX · ultra-fast local STT (~50ms)',
'sensevoiceEndpoint':'SenseVoice: endpoint', 'sensevoiceEndpointHint':'POST endpoint of sherpa-onnx or compatible server',
'sensevoiceBin':'SenseVoice: binary', 'sensevoiceBinHint':'used when autostart is on', 'sensevoiceModel':'SenseVoice: model path',
'sensevoiceModelHint':'Absolute path or identifier of the SenseVoice / sherpa-onnx model',
'sensevoiceAutostart':'Autostart the SenseVoice server', 'visualizerStyle':'Audio visualizer style',
'visualizerStyleHint':'Waveform animation inside the recording pill', 'visLiquidWave':'Liquid Wave', 'visDynamicOrb':'Dynamic Orb',
'visBars':'Classic Bars', 'visOff':'Off', 'statusTitle':'Connection & Engine Status',
'statusDesc':'Current runtime connectivity to voice backends and recognition services.', 'badgeHostOnline':'Host online ({ms} ms)',
'badgeHostOffline':'Host unreachable', 'badgeWhisperActive':'Whisper active', 'badgeWhisperInactive':'Whisper offline',
'badgeSenseVoiceActive':'SenseVoice active', 'badgeSenseVoiceInactive':'SenseVoice offline', 'badgeProviders':'{count} providers ready',
'refreshStats':'Refresh Stats', 'hardwareTitle':'Hardware & Local Engines',
'hardwareDesc':'Microphone device, local whisper.cpp and SenseVoice runtime settings.', 'uiError':'Voice UI Error:', 'retry':'Retry',
'testMic':'Test Mic', 'stopTest':'Stop Test', 'micLevel':'Mic level', 'noiseGate':'Noise Gate (dB)',
'noiseGateHint':'Mute background fan hum and keyboard clicks below threshold. Off = disabled', 'noiseGateOff':'Off',
'versionTitle':'Plugin Version & Updates', 'versionHint':'Check for new versions and update directly from npm.',
'updateAvailable':'Update available', 'upToDate':'Up to date',
'updatePrompt':'A new version is available on npm. Click update to install.', 'updateNow':'Update now', 'updating':'Updating…',
'updateSuccess':'Updated successfully! Restart DSH to apply.', 'updateFailed':'Update failed. Check logs.',
'updateCheckFailed':'Update check failed',
'profileLockedPid':'Profile locked by PID {pid}. Check operator recovery procedure.',
'profileLockedExisting':'Profile locked by lockfile. Check operator recovery procedure.',
'profileLockCheckError':'Profile lock check failed. Filesystem inspection required.',
'checkingUpdates':'Checking updates…', 'updateStatusUnknown':'Version status unknown',
'sensevoiceTitle':'SenseVoice Local ASR (1-Click Setup)',
'sensevoiceDesc':'Ultra-fast offline speech recognition on CPU (50–100ms latency).',
'installSensevoice':'Install SenseVoice-Small (1-Click)', 'installingSensevoice':'Installing SenseVoice…', 'sensevoiceReady':'Ready',
'sensevoiceNotInstalled':'Not Installed', 'sensevoiceDownloading':'Downloading model…',
'turnTakingTitle':'Turn-Taking & Audio Coordination',
'turnTakingDesc':'Prevents assistant audio feedback into mic.',
'gatedTurnTaking':'Gated Mode (mute mic while assistant is speaking)',
'bargeInDesc':'True Barge-In (speaking interrupts assistant speech)', 'smartActionsTitle':'Hands-free & Smart Actions', 'audioFeedback':'Audio cues',
'showDictationModeBtn':'Dictation mode button', 'showDictationBtn':'Voice typing button', 'showMessageBtn':'Voice message button',
'autoSendVisualRing':'Silence Ring countdown animation',
'voiceActionsLabel':'Voice action commands ("send", "cancel", "clear", "new line")',
'liveInterimPreview':'Live speech preview (ghost text preview)',
'structuredPromptVoice':'Spoken answers for interactive choice prompts', 'modeVerbatim':'Verbatim', 'modeClean':'Clean Text',
'modeTask':'Agent Task', 'modeNote':'Note', 'modeBug':'Bug Report', 'promptBug':'Bug report prompt', 'promptBugPlaceholder':'Default: problem summary, symptoms, repro steps, expected behavior', 'dictationModeTitle':'Dictation Post-Processing Mode',
'dictationModeDesc':'Dictation post-processing: Verbatim (no LLM), Clean (punct & fillers), Agent task, or Note.',
'dictationPromptsTitle':'Dictation Prompt Templates',
'dictationPromptsDesc':'Custom templates for dictation modes. Use {text} as speech placeholder.',
'promptClean':'Clean text prompt', 'promptTask':'Agent task prompt', 'promptNote':'Note prompt', 'resetPrompts':'Reset to defaults',
'voiceMacrosTitle':'Voice Macros',
'voiceMacrosDesc':'Spoken triggers expanded into prompt templates.', 'addMacro':'Add macro',
'macroTrigger':'Spoken trigger phrase', 'macroTemplate':'Expanded prompt template', 'macroDelete':'Delete', 'rawTab':'Raw STT',
'resultTab':'Result', 'llmUnavailableFallback':'LLM unavailable, showing raw transcript', 'jargonTitle':'Developer Lexicon & IT Jargon',
'techJargonCorrection':'Auto-correct technical jargon (GitHub, Docker, pnpm, Kubernetes, etc.)', 'jargonAdd':'Add replacement',
'jargonFrom':'Spoken slang', 'jargonTo':'Correct spelling', 'jargonPlaceholder':'k8s -> kubernetes\npr -> pull request',
'voiceInput':'Voice input', 'assistantSpeakingGated':'Assistant speaking (gated mode)', 'jargonFormatHint':' (spoken -> replacement)',
'errorPrefix':'Error', 'wizardTitle':'First-Run Setup & Diagnostics Wizard',
'wizardDesc':'Diagnostics: check HTTPS/context, microphone access, audio level, and STT round-trip.',
'wizardBtnLaunch':'Launch Mic & STT Wizard', 'wizardClose':'Close Wizard', 'wizardStep1':'1. Audio & Environment',
'wizardStep2':'2. Live Signal Test', 'wizardStep3':'3. STT Transcription Test',
'wizardSecureContextOk':'Secure context / HTTPS verified', 'wizardSecureContextBad':'Insecure context (HTTPS or localhost required)',
'wizardMediaDevicesOk':'Browser mediaDevices API supported', 'wizardMediaDevicesBad':'Browser mediaDevices API missing',
'wizardMediaRecorderOk':'MediaRecorder API supported', 'wizardMediaRecorderBad':'MediaRecorder API unsupported in this browser',
'wizardMicPermissionOk':'Microphone permission granted', 'wizardMicPermissionPrompt':'Microphone permission not yet granted',
'wizardMicPermissionBad':'Microphone permission denied', 'wizardRequestMic':'Request Microphone Access',
'wizardMicLabel':'Microphone input device:', 'wizardStartSignalCheck':'Start Audio Level Test',
'wizardStopSignalCheck':'Stop Audio Test', 'wizardSignalOk':'Audio signal detected (RMS: {level}%)',
'wizardSignalZero':'Zero audio level detected - speak into microphone or select correct device',
'wizardSignalTesting':'Listening for audio signal… speak into your microphone', 'wizardProviderLabel':'Active STT engine & model:',
'wizardProcessingArea':'Processing area:', 'wizardAreaBrowser':'In-browser (WebGPU / WebSpeech)',
'wizardAreaServer':'Local MiniPC server (SenseVoice / Whisper)', 'wizardAreaCloud':'Remote cloud provider',
'wizardStartTestRecord':'Record 3-Second Test Phrase', 'wizardRecordingTest':'Recording test phrase… speak now ({left}s)',
'wizardTranscribingTest':'Transcribing test phrase…', 'wizardTestResult':'STT Test Result:',
'wizardTestSuccess':'STT verified! Latency: {latency}ms',
'wizardTestEmpty':'No speech detected. Please speak clearly and retry.',
'wizardTestFailed':'STT test failed: {error}', 'wizardNextStepHint':'Next step: {hint}',
'wizardHintPermission':'Click "Request Microphone Access" and allow browser permission prompt.',
'wizardHintDevice':'Check microphone connection or select a different input device.',
'wizardHintHttps':'Open DeepSeek Harness via HTTPS or localhost address.',
'wizardHintProvider':'Configure STT engine credentials or install SenseVoice model below.',
'wizardHintWinDesktop':'Windows Settings → Microphone: enable desktop access.',
'wizardHintWinBrowser':'Allow microphone access in browser address bar.',
'wizardHintMacDesktop':'macOS Settings → Microphone: enable DSH.',
'wizardOpenWinMicSettings':'Open Windows Mic Settings', 'wizardFinishSuccess':'Setup & Verification Complete',
'wizardSkip':'Skip Wizard', 'wizardStatusCompleted':'Mic & STT verified', 'exportDiagnosticsBtn':'Export Diagnostics',
'exportingDiagnostics':'Exporting report…', 'diagnosticsExportSuccess':'Report downloaded',
'recentRecognitionsTitle':'Recent Recognitions', 'noRecognitionsYet':'No recent recognition records yet.',
'diagLatencyBreakdown':'Latency breakdown:', 'diagVad':'VAD: {ms}ms', 'diagStt':'STT: {ms}ms', 'diagPolish':'Polish: {ms}ms',
'diagTotal':'Total: {ms}ms', 'diagBytes':'Audio: {bytes} B', 'diagWords':'Words: {count}',
'diagExportNotice':'Exported JSON contains anonymized timings and error codes.',
'hostOnline':'Host online', 'hostOffline':'Host unreachable', 'whisperReady':'Whisper ready', 'whisperStopped':'Whisper stopped',
'providersAvailable':'providers available', 'macroEmpty':'No macros configured.', 'macroTemplateArgHint':' (use {text} for argument)',
'noiseGateLow':'-50 dB (Low)', 'noiseGateStandard':'-45 dB (Default)', 'noiseGateMedium':'-35 dB (Medium)',
'noiseGateHigh':'-25 dB (High)', 'npuCpu':'CPU (Standard)',
'installModelSensevoice':'SenseVoice-Small (150MB)', 'installModelWhisperTurbo':'Whisper Large-v3-Turbo (800MB)',
'promptCleanPlaceholder':'Punctuation & filler cleanup',
'promptTaskPlaceholder':'Structured task format',
'promptNotePlaceholder':'Key points & action items', 'settingsConflict':'Settings conflict: parallel changes detected',
'saveFailedFallback':'Save failed', 'benchmarkFailed':'Benchmark failed', 'networkError':'Network error', 'benchmarkOffline':'Offline',
'benchmarkCores':'Cores', 'benchmarkCoresUnit':'cores', 'benchRatingUltraFast':'Ultra-fast', 'benchRatingRealtime':'Real-time',
'msShort':'ms', 'transcriptionTimeout':'Transcription timed out', 'audioContextUnsupported':'AudioContext not supported',
'audioReadFailed':'failed to read audio', 'fileReaderUnsupported':'FileReader not supported',
'benchmarkNoAsrServer':'Local ASR offline. Hardware detected.',
}
const zh = {
'handsFreeStarting':'正在开启麦克风…', 'handsFreeSending':'正在发送 · 等待确认…', 'handsFreeLimit':'免按键语音已停止：已达60秒录音上限，请重新开始。', 'handsFreeCommands':'免按键语音已停止：此模式不自动执行语音命令。', 'handsFreeStart':'免按键语音', 'handsFreeStop':'停止免按键语音 (Esc)', 'handsFreeListening':'免按键语音 · 正在聆听，停顿后发送', 'handsFreeDraft':'免按键语音已停止：请先清空草稿和附件。', 'handsFreeSession':'免按键语音已停止：会话已切换。', 'handsFreeSendFailed':'未确认发送成功，免按键语音已停止。请检查输入框。',
'saveFailed':'部分字段未保存 —', 'cardHint':'听写与语音输入设置', 'expand':'展开', 'collapse':'收起', 'composerUnavailable':'输入框不可用',
'keySpace':'空格', 'keyUnset':'未设置', 'recognitionError':'识别失败', 'micUnavailable':'麦克风不可用：需要 HTTPS 或 localhost',
'noRecorder':'当前浏览器不支持 MediaRecorder', 'browserFailed':'浏览器未能识别：', 'nothingHeard':'未识别到任何内容', 'dictationBtn':'语音输入',
'messageBtn':'语音消息 — 点击或按住', 'dictationPill':'听写 — 文本将追加至输入框', 'messagePill':'正在录制语音消息', 'cancel':'取消', 'holdHint':'按住录音 — 松开即发送',
'listening':'浏览器正在倾听…', 'stop':'停止', 'transcribing':'正在转写…', 'sendingIn':'发送至智能体倒计时', 'secondsShort':' 秒', 'keepPending':'不发送',
'hide':'隐藏', 'title':'语音', 'recordSlot':'语音录制', 'browserHint':'Web Speech 语音识别 (设为 auto 时使用页面或浏览器语言，Chrome 会上传音频至 Google)',
'browserWebGpu':'浏览器 WebGPU Whisper (离线)', 'browserWebGpuHint':'通过 WebGPU/WASM 在浏览器本地运行 Whisper 模型：完全离线，音频无需上传到主机。',
'npuProvider':'硬件加速 (SBC NPU / 主机)',
'npuProviderHint':'SenseVoice 加速引擎：CPU、Rockchip NPU、OpenVINO 或 CUDA。', 'npuThreads':'计算线程 (CPU/SBC)',
'benchmarkTitle':'硬件基准测试 (速度与延迟)', 'runBenchmarkBtn':'运行基准测试', 'benchmarking':'正在运行测试…',
'benchmarkHint':'测试当前执行提供者在 1.0 秒音频下的实时率 (RTF) 与推理延迟。', 'webgpuStatus':'浏览器 WebGPU 状态', 'webgpuAvailable':'WebGPU 可用 (硬件加速就绪)',
'webgpuNotAvailable':'未检测到 WebGPU (将自动回退到服务端)', 'openaiHint':'whisper-1 · 密钥 OPENAI_API_KEY',
'siliconflowHint':'FunAudioLLM/SenseVoiceSmall · 密钥 SILICONFLOW_API_KEY',
'deepinfraHint':'openai/whisper-large-v3-turbo · 密钥 DEEPINFRA_API_KEY', 'fireworksHint':'whisper-v3-turbo · 密钥 FIREWORKS_API_KEY',
'mistralHint':'voxtral-mini-latest · 密钥 MISTRAL_API_KEY', 'openrouterHint':'google/gemini-2.5-flash · 密钥 OPENROUTER_API_KEY',
'localHint':'服务器启动时配置', 'up':'上移', 'down':'下移', 'remove':'移除', 'addProvider':'添加服务商', 'chainHint':'自上而下为故障转移尝试顺序',
'customName':'备用链中使用的名称', 'customModel':'模型', 'customKeyName':'密钥名称', 'customModelHint':'请求的模型（留空使用内置默认值）', 'addCustom':'添加自定义服务商',
'loadingSettings':'正在加载设置…', 'notReady1':'Harness 尚未同步此插件的设置。如果刚重启，', 'notReady2':'设置项将在数秒内自动呈现。', 'hotkey':'语音消息快捷键',
'pressKey':'请按下按键…', 'clearKey':'清除按键', 'hotkeyHint1':'按住录音，松开发送给智能体，按 Esc 取消。', 'hotkeyHint2':'支持任意按键：字母键、功能键 (F1-F12) 或修饰键。',
'language':'识别语言', 'langAuto':'自动检测', 'langRu':'俄语 (ru)', 'langEn':'英语 (en)', 'langZh':'中文 (zh)', 'langUk':'乌克兰语 (uk)',
'langDe':'德语 (de)', 'dictationHint':'语音按停顿自动切句，文字实时追加至输入框。', 'pauseMs':'断句静音停顿时长（毫秒）', 'pauseHint':'数值越小切分越频繁、出字越快，但可能切断未说完的词',
'speaking':'正在说话…', 'silence':'停顿…', 'normalizeTranscript':'规范化转写文本', 'undo':'撤销上次插入', 'undone':'插入已撤销', 'nothingToUndo':'没有可撤销的内容',
'clipping':'爆音', 'clippingHint':'音量过大（爆音截断）', 'lowVolume':'信号微弱', 'lowVolumeHint':'请提高音量', 'vadEngine':'VAD 引擎',
'vadEngineHint':'神经网络 Silero VAD (WASM/ONNX) 或传统振幅门限', 'vadSilero':'Silero VAD（神经网络）', 'vadAmplitude':'振幅门限',
'streamingWs':'流式 WebSocket', 'streamingWsHint':'向本地 ASR 实时通过 WebSocket 流式传输音频', 'beep':'启停提示音', 'localOnly':'仅使用本地 whisper',
'localOnlyHint':'将双链限制为仅使用本地 whisper.cpp 服务：纯离线运行。', 'sendDelay':'听写延迟追加 (ms)', 'sendDelayHint':'追加听写文本前的缓冲等待时间，允许撤回。0 为关闭',
'mic':'麦克风设备', 'micDefault':'系统默认', 'vocabulary':'自定义词汇表（每行一个词）', 'polish':'模型润色转写文本', 'polishHint':'插入前通过模型修正标点符号并消除语气口头禅',
'stream':'连续流式听写', 'streamHint':'说话期间按定时器切分短句，无需等待长时间停顿', 'streamChunkMs':'流式切片时长 (ms)', 'vadAdapt':'自适应静音阈值',
'vadAdaptHint':'根据语速动态调整停顿静音阈值。0 为固定阈值', 'wakeWord':'语音唤醒词', 'wakeWordHint':'说话以此短语开头时自动触发录音。留空为关闭', 'bargeIn':'语音插话打断 (Barge-in)',
'polishSend':'发送前润色整篇草稿', 'polishSendHint':'发送给智能体前对整个输入框草稿进行一次整体润色', 'editablePreview':'发送前可编辑预览',
'editablePreviewHint':'发送前显示识别文本，支持编辑、润色对比和撤销。', 'editPreview':'编辑', 'sendNow':'发送', 'cancelPreview':'取消', 'rawText':'原文',
'polishedText':'润色', 'sessionMismatch':'当前会话已切换，已拦截发送以防止串话。', 'sessionCommands':'会话语音控制指令',
'sessionCommandsHint':'"send"、"cancel"、"stop"、"continue" 执行操作而非转为文本', 'polishBaseUrl':'离线润色服务端点',
'polishBaseUrlHint':'兼容 OpenAI /chat/completions 的基础地址（如本地 Ollama）。留空使用 harness 模型', 'polishModel':'离线润色模型', 'polishKeyEnv':'离线润色密钥凭据名',
'voiceCommandsLabel':'语音编辑指令（"换行"、"段落"）', 'normalizeTranscriptHint':'transcribe_audio：口语数字转阿拉伯数字，整理标点符号', 'messageTitle':'语音消息',
'messageHint':'录制单条完整语音，转写完成后自动发送给智能体。', 'undoMs':'撤回窗口时长（毫秒）', 'undoHint':'转写完成后多久以内可以随时取消发送', 'customTitle':'自定义语音服务商',
'customHint':'兼容 OpenAI 的任意音频 API。配置名称将出现在上方备用链中。', 'general':'通用设置', 'whisperEndpoint':'本地 whisper：端点地址',
'whisperEndpointHint':'whisper.cpp 服务器的 POST /inference 接口', 'deepgramEndpoint':'Deepgram：基础地址',
'deepgramEndpointHint':'Deepgram 或私有化部署的基础地址（默认 https://api.deepgram.com）', 'whisperBin':'本地 whisper：可执行文件',
'whisperBinHint':'开启自动启动时使用', 'whisperModel':'本地 whisper：模型文件', 'whisperModelHint':'ggml 模型文件的绝对路径',
'whisperAutostart':'自动启动本地 whisper', 'bilingualDeveloperPrompt':'双语开发者提示 (中/英)',
'bilingualDeveloperPromptHint':'提示常用技术术语与命令行指令，避免语音模型音译', 'calibrateNoise':'校准背景噪声 (2秒)', 'calibrateNoiseHint':'测量 2 秒环境背景噪声并自动计算最佳门限',
'calibrating':'正在测量噪声…', 'calibratedMsg':'门限已设置为: {db} dB (背景噪声: {noise} dB)', 'calibratedValue':'已校准', 'save':'保存', 'saved':'已保存 ✓',
'openrouterWarning':'OpenRouter 无 /audio/transcriptions 端点 — 请选用 openai-chat-audio 模板', 'noiseSuppression':'硬件级降噪',
'noiseSuppressionHint':'启用浏览器硬件降噪、回声消除与自动增益控制', 'contextGlossary':'上下文专业词汇注入', 'contextGlossaryHint':'自动从输入草稿提取代码变量名与术语以提升语音识别准确率',
'providerDashboard':'服务商延迟与健康监控', 'avgLatency':'平均延迟', 'successRate':'成功率', 'fast':'极速', 'normal':'正常', 'slow':'较慢', 'error':'异常',
'idle':'无调用记录', 'play':'播放', 'pause':'暂停', 'listenBack':'试听回放', 'lastRecording':'最近一条语音记录',
'sensevoiceHint':'SenseVoice-ONNX / Sherpa-ONNX · 极速本地语音识别 (~50ms)', 'sensevoiceEndpoint':'SenseVoice：端点地址',
'sensevoiceEndpointHint':'sherpa-onnx 或兼容服务器的 POST 端点', 'sensevoiceBin':'SenseVoice：可执行文件', 'sensevoiceBinHint':'开启自动启动时使用',
'sensevoiceModel':'SenseVoice：模型路径', 'sensevoiceModelHint':'SenseVoice / sherpa-onnx 模型的绝对路径或标识符',
'sensevoiceAutostart':'自动启动 SenseVoice 服务', 'visualizerStyle':'音频动态波形样式', 'visualizerStyleHint':'录音胶囊面板内的动态音频波形动画效果',
'visLiquidWave':'流体水波 (Liquid Wave)', 'visDynamicOrb':'动态脉冲球体 (Dynamic Orb)', 'visBars':'经典频条 (Classic Bars)', 'visOff':'关闭',
'statusTitle':'连接与引擎状态看板', 'statusDesc':'当前语音后端与识别服务的实时网络与进程就绪状态。', 'badgeHostOnline':'服务端在线 ({ms} ms)', 'badgeHostOffline':'服务端不可达',
'badgeWhisperActive':'Whisper 就绪', 'badgeWhisperInactive':'Whisper 未就绪', 'badgeSenseVoiceActive':'SenseVoice 就绪',
'badgeSenseVoiceInactive':'SenseVoice 未就绪', 'badgeProviders':'{count} 个服务商已就绪', 'refreshStats':'刷新状态', 'hardwareTitle':'硬件与本地引擎',
'hardwareDesc':'麦克风输入设备、本地 whisper.cpp 与 SenseVoice 运行时配置。', 'uiError':'语音界面错误：', 'retry':'重试', 'testMic':'测试麦克风', 'stopTest':'停止测试',
'micLevel':'麦克风电平', 'noiseGate':'噪声门 (dB)', 'noiseGateHint':'静音切除低于阈值的风扇嗡嗡声与机械键盘敲击声。Off = 关闭', 'noiseGateOff':'关闭',
'versionTitle':'插件版本与更新', 'versionHint':'检查新版本并直接从 npm 更新。', 'updateAvailable':'有可用更新', 'upToDate':'已是最新版本',
'updatePrompt':'npm 上有新版本可用。点击更新进行安装。', 'updateNow':'立即更新', 'updating':'正在更新…', 'updateSuccess':'更新成功！请重启 DSH 生效。',
'updateFailed':'更新失败，请查看日志。', 'updateCheckFailed':'检查更新失败', 'profileLockedPid':'配置文件已被进程锁定 (PID {pid})。若残留请按受控操作员恢复流程处理。',
'profileLockedExisting':'配置文件已被现有锁定文件锁定。若残留请按受控操作员恢复流程处理。', 'profileLockCheckError':'检查配置文件锁失败。需排查文件系统，请勿直接删除锁文件。',
'checkingUpdates':'正在检查更新…', 'updateStatusUnknown':'版本状态未知', 'sensevoiceTitle':'SenseVoice 本地 ASR (一键部署)',
'sensevoiceDesc':'CPU 上超低延迟离线语音识别 (50–100ms，中英俄多语种)。', 'installSensevoice':'一键安装 SenseVoice-Small',
'installingSensevoice':'正在安装 SenseVoice…', 'sensevoiceReady':'已就绪', 'sensevoiceNotInstalled':'未安装', 'sensevoiceDownloading':'正在下载模型…',
'turnTakingTitle':'轮流对话与音频协同', 'turnTakingDesc':'协调听与说，避免扬声器播放的声音被麦克风二次拾音。', 'gatedTurnTaking':'门控模式 (助手播报时麦克风自动静音)',
'bargeInDesc':'实时打断 (说话时立即打断助手朗读)', 'smartActionsTitle':'免提与智能指令', 'audioFeedback':'声音提示',
'showDictationModeBtn':'听写模式按钮', 'showDictationBtn':'语音输入按钮', 'showMessageBtn':'语音消息按钮', 'autoSendVisualRing':'环形倒计时动画指示器',
'voiceActionsLabel':'语音动作指令 ("发送", "取消", "清空", "换行")', 'liveInterimPreview':'实时语音文本预览 (幽灵文本)', 'structuredPromptVoice':'语音应答交互式选择提示',
'modeVerbatim':'逐字直录', 'modeClean':'清爽文本', 'modeTask':'智能体任务', 'modeNote':'便签备忘', 'modeBug':'缺陷报告', 'promptBug':'缺陷报告提示词', 'promptBugPlaceholder':'默认：问题概要、异常现象、复现步骤、预期行为', 'dictationModeTitle':'听写后处理模式',
'dictationModeDesc':'听写文本后处理：逐字直录（零LLM）、清爽文本、智能体任务或便签。', 'dictationPromptsTitle':'听写提示词模板',
'dictationPromptsDesc':'自定义听写后处理提示词模板。使用 {text} 作为识别语音的占位符。', 'promptClean':'清爽文本提示词', 'promptTask':'智能体任务提示词', 'promptNote':'便签提示词',
'resetPrompts':'恢复默认模板', 'voiceMacrosTitle':'语音动作宏', 'voiceMacrosDesc':'语音触发词自动展开为结构化提示词模板。', 'addMacro':'添加动作宏',
'macroTrigger':'语音触发短语', 'macroTemplate':'展开提示词模板', 'macroDelete':'删除', 'rawTab':'原始识别', 'resultTab':'处理结果',
'llmUnavailableFallback':'LLM不可用，已保留原始识别文本', 'jargonTitle':'开发者词汇与 IT 术语',
'techJargonCorrection':'自动校正开发术语 (GitHub, Docker, pnpm, Kubernetes 等)', 'jargonAdd':'添加替换项', 'jargonFrom':'口语词汇', 'jargonTo':'标准拼写',
'jargonPlaceholder':'k8s -> kubernetes\npr -> pull request', 'voiceInput':'语音输入', 'assistantSpeakingGated':'助手正在发言（门控模式）',
'jargonFormatHint':' (口语 -> 替换文本)', 'errorPrefix':'错误', 'wizardTitle':'首次启动与麦克风诊断向导',
'wizardDesc':'分步诊断检查：安全上下文、麦克风权限、音频信号电平及实时 STT 回环测试。', 'wizardBtnLaunch':'启动麦克风与 STT 诊断向导', 'wizardClose':'关闭向导',
'wizardStep1':'1. 音频与运行环境', 'wizardStep2':'2. 实时信号测试', 'wizardStep3':'3. STT 识别回环测试', 'wizardSecureContextOk':'安全上下文 / HTTPS 已验证',
'wizardSecureContextBad':'非安全上下文（需 HTTPS 或 localhost）', 'wizardMediaDevicesOk':'浏览器 mediaDevices API 支持正常',
'wizardMediaDevicesBad':'浏览器缺少 mediaDevices API 支持', 'wizardMediaRecorderOk':'MediaRecorder API 支持正常',
'wizardMediaRecorderBad':'当前浏览器不支持 MediaRecorder API', 'wizardMicPermissionOk':'麦克风权限已授予', 'wizardMicPermissionPrompt':'尚未获得麦克风授权',
'wizardMicPermissionBad':'麦克风权限被拒绝', 'wizardRequestMic':'请求麦克风权限', 'wizardMicLabel':'麦克风输入设备：', 'wizardStartSignalCheck':'开始音频电平测试',
'wizardStopSignalCheck':'停止音频测试', 'wizardSignalOk':'检测到音频信号 (RMS: {level}%)', 'wizardSignalZero':'未检测到声音信号 — 请对着麦克风说话或选择正确设备',
'wizardSignalTesting':'正在监听声音信号… 请对着麦克风发声', 'wizardProviderLabel':'当前语音引擎与模型：', 'wizardProcessingArea':'处理区域：',
'wizardAreaBrowser':'浏览器端处理 (WebGPU / WebSpeech)', 'wizardAreaServer':'本地服务器处理 (SenseVoice / Whisper)', 'wizardAreaCloud':'远程云端服务',
'wizardStartTestRecord':'录制 3 秒测试语句', 'wizardRecordingTest':'正在录制测试音频… 请说话 ({left}秒)', 'wizardTranscribingTest':'正在请求语音识别…',
'wizardTestResult':'STT 测试结果：', 'wizardTestSuccess':'STT 链路验证成功！耗时：{latency}毫秒', 'wizardTestEmpty':'录音中未检测到有效语音，请清晰发音后重试。',
'wizardTestFailed':'STT 测试失败：{error}', 'wizardNextStepHint':'建议下一步：{hint}', 'wizardHintPermission':'点击“请求麦克风权限”并在浏览器弹窗中允许访问。',
'wizardHintDevice':'检查麦克风硬件连接或切换选择其他输入设备。', 'wizardHintHttps':'请通过 HTTPS 或 localhost 访问 DeepSeek Harness。',
'wizardHintProvider':'请在下方配置 STT 密钥凭据或一键安装 SenseVoice 本地模型。',
'wizardHintWinDesktop':'系统麦克风被阻止。请在 Windows【设置】→【隐私和安全性】→【麦克风】中开启最下方的【允许桌面应用访问你的麦克风】。',
'wizardHintWinBrowser':'麦克风权限被拒绝。请在浏览器地址栏允许麦克风权限，或在 Windows【设置】→【隐私和安全性】→【麦克风】中开启访问。',
'wizardHintMacDesktop':'系统麦克风被阻止。请在 macOS【系统设置】→【隐私与安全性】→【麦克风】中勾选允许 DSH Desktop。', 'wizardOpenWinMicSettings':'打开系统麦克风设置',
'wizardFinishSuccess':'设置与验证已完成', 'wizardSkip':'跳过向导', 'wizardStatusCompleted':'麦克风与 STT 诊断已就绪', 'exportDiagnosticsBtn':'导出诊断',
'exportingDiagnostics':'正在导出报告…', 'diagnosticsExportSuccess':'诊断报告已下载', 'recentRecognitionsTitle':'近期识别遥测详情',
'noRecognitionsYet':'暂无近期识别记录。', 'diagLatencyBreakdown':'耗时分布：', 'diagVad':'VAD：{ms}毫秒', 'diagStt':'STT：{ms}毫秒',
'diagPolish':'后处理：{ms}毫秒', 'diagTotal':'总耗时：{ms}毫秒', 'diagBytes':'音频大小：{bytes} 字节', 'diagWords':'词数：{count}',
'diagExportNotice':'导出的 JSON 报告包含脱敏的耗时统计、备用链尝试、MIME 格式与错误码，不含任何原始音频或语音文本。', 'hostOnline':'后端在线', 'hostOffline':'后端不可用',
'whisperReady':'Whisper 已就绪', 'whisperStopped':'Whisper 已停止', 'providersAvailable':'个服务商可用', 'macroEmpty':'未配置宏指令。',
'macroTemplateArgHint':'（使用 {text} 作为参数）', 'noiseGateLow':'-50 dB (轻微静音)', 'noiseGateStandard':'-45 dB (标准默认)',
'noiseGateMedium':'-35 dB (中等室内)', 'noiseGateHigh':'-25 dB (高降噪 / 机械键盘)', 'npuCpu':'CPU (标准)',
'installModelSensevoice':'SenseVoice-Small (150MB, ~50ms)', 'installModelWhisperTurbo':'Whisper Large-v3-Turbo (800MB, 高精度)',
'promptCleanPlaceholder':'默认：标点符号与语气词清洗', 'promptTaskPlaceholder':'默认：结构化问题/产出/约束/标准', 'promptNotePlaceholder':'默认：核心要点与待办事项总结',
'settingsConflict':'设置冲突：检测到并行修改', 'saveFailedFallback':'保存失败', 'benchmarkFailed':'基准测试失败', 'networkError':'网络错误',
'benchmarkOffline':'离线', 'benchmarkCores':'核心数', 'benchmarkCoresUnit':'核', 'benchRatingUltraFast':'极速', 'benchRatingRealtime':'实时',
'msShort':'毫秒', 'transcriptionTimeout':'语音识别请求超时 (60s)', 'audioContextUnsupported':'不支持 AudioContext', 'audioReadFailed':'读取音频失败',
'fileReaderUnsupported':'不支持 FileReader', 'benchmarkNoAsrServer':'本地 ASR 服务未启动。已检测到硬件加速支持。',
}
const handsFreeTh = {
'handsFreeStarting':'กำลังเปิดไมโครโฟน…', 'handsFreeSending':'กำลังส่ง · รอการยืนยัน…', 'handsFreeStart':'สนทนาแบบไม่กดปุ่ม', 'handsFreeStop':'หยุดฟัง (Esc)', 'handsFreeListening':'กำลังฟัง · หยุดพูดเพื่อส่ง', 'handsFreeDraft':'หยุดฟังแล้ว: กรุณาล้างข้อความร่างและไฟล์แนบก่อน', 'handsFreeSession':'หยุดฟังแล้ว: เปลี่ยนบทสนทนา', 'handsFreeSendFailed':'ยังยืนยันการส่งไม่ได้ จึงหยุดฟัง กรุณาตรวจช่องข้อความ', 'handsFreeCommands':'หยุดฟังแล้ว: โหมดนี้ไม่เรียกคำสั่งเสียงอัตโนมัติ', 'handsFreeLimit':'หยุดฟังแล้ว: ครบขีดจำกัดการอัด 60 วินาที กดเริ่มใหม่ได้',
}
Object.assign(en, { handsFreeHistoryChanged: 'Conversation history changed. Return to the latest messages and start conversation again.', handsFreeStart: 'Continuous conversation', handsFreeStop: 'Stop conversation (Esc)', handsFreeWaiting: 'Waiting for the AI response…', handsFreePaused: 'Conversation paused · return to this window to listen', handsFreePlayback: 'Waiting for audio playback to finish…', handsFreeUnavailable: 'Conversation state is unavailable. Please report this diagnostic code.', handsFreeTurnFailed: 'The AI turn failed or was stopped. Conversation stopped; check the chat.', handsFreeListening: 'Listening · pause to send' })
Object.assign(handsFreeTh, { handsFreeHistoryChanged: 'ประวัติบทสนทนาเปลี่ยน จึงหยุดฟัง กรุณากลับไปข้อความล่าสุดแล้วเปิดคุยต่อเนื่องใหม่', handsFreeStart: 'คุยต่อเนื่อง', handsFreeStop: 'หยุดคุยต่อเนื่อง (Esc)', handsFreeWaiting: 'รอ AI ตอบให้เสร็จ…', handsFreePaused: 'พักการฟัง · กลับมาที่หน้าต่างนี้เพื่อคุยต่อ', handsFreePlayback: 'รอเสียงตอบกลับเล่นจบ…', handsFreeUnavailable: 'ยังเชื่อมสถานะบทสนทนาไม่ได้ กรุณาแจ้งรหัสตรวจสอบนี้', handsFreeTurnFailed: 'AI ตอบไม่สำเร็จหรือถูกหยุด จึงหยุดคุยต่อเนื่อง กรุณาตรวจแชต', handsFreeListening: 'กำลังฟัง · หยุดพูดเพื่อส่ง' })
let moduleT = (key) => en[key] || key
const t = (key) => moduleT(key)
const CSS =
'.dvo-btn{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;border:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;padding:0;user-select:none;touch-action:manipulation}.dvo-btn:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}.dvo-btn[data-err="1"]{color:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary)}.dvo-pill{display:flex;align-items:center;gap:10px;height:52px;border-radius:26px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);padding:0 14px;width:100%;max-width:720px;margin:0 auto;box-shadow:0 8px 24px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);user-select:none;-webkit-user-select:none}.dvo-chev-icon{width:14px;height:14px;display:block;flex:none}.dvo-pbtn{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;cursor:pointer;padding:0;flex:none;border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);user-select:none;touch-action:manipulation}.dvo-pbtn:hover{background:var(--dsw-alias-bg-layer-2)}.dvo-wave{flex:1;min-width:0;max-width:100%;height:40px;width:100%;color:var(--dsw-alias-label-primary)}.dvo-status{display:flex;align-items:center;gap:8px;color:var(--dsw-alias-label-secondary);font-size:13px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dvo-err{color:var(--dsw-alias-state-error-primary)}.dvo-count{font-variant-numeric:tabular-nums;font-size:13px;color:var(--dsw-alias-label-secondary)}.dvo-spin{animation:dvo-spin 1s linear infinite}@keyframes dvo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dvo-btn-active{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2)}.dvo-audio-wrap{display:flex;align-items:center;gap:8px;padding:2px 10px;background:var(--dsw-alias-bg-layer-2);border-radius:14px;border:1px solid var(--dsw-alias-border-l1)}.dvo-audio-play{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-1);border:0;cursor:pointer;padding:0}.dvo-audio-play:hover{opacity:0.9}.dvo-audio-time{font-size:12px;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}.dvo-dash{display:flex;flex-direction:column;gap:8px;margin-top:8px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;padding:12px}.dvo-dash-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-top:4px}.dvo-dash-item{display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.dvo-dash-name{font-size:12px;font-weight:600;color:var(--dsw-alias-label-primary)}.dvo-dash-row{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--dsw-alias-label-secondary)}.dvo-badge{display:inline-flex;align-items:center;font-size:11px;padding:1px 6px;border-radius:6px;font-weight:600}.dvo-badge-fast{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-success-primary);border:1px solid var(--dsw-alias-state-success-primary)}.dvo-badge-norm{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-warning-primary);border:1px solid var(--dsw-alias-state-warning-primary)}.dvo-badge-slow{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-warning-primary);border:1px solid var(--dsw-alias-border-l2)}.dvo-badge-err{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-error-primary);border:1px solid var(--dsw-alias-state-error-primary)}.dvo-badge-idle{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-tertiary)}.dvo-mic-test{display:flex;align-items:center;gap:10px;margin-top:8px;padding:6px 12px;background:var(--dsw-alias-bg-layer-2);border-radius:8px;border:1px solid var(--dsw-alias-border-l1)}.dvo-meter-bar{flex:1;height:8px;background:var(--dsw-alias-bg-layer-3);border-radius:4px;overflow:hidden;position:relative}.dvo-meter-fill{height:100%;background:var(--dsw-alias-state-success-primary);border-radius:4px;transition:width 60ms ease-out}.dvo-meter-gate{position:absolute;top:0;bottom:0;width:2px;background:var(--dsw-alias-state-warning-primary);box-shadow:0 0 4px var(--dsw-alias-state-warning-primary);z-index:2;pointer-events:none}.dvo-silence-ring{width:34px;height:34px;transform:rotate(-90deg);flex:none}.dvo-ring-bg{fill:none;stroke:var(--dsw-alias-border-l1);stroke-width:2.5}.dvo-ring-fg{fill:none;stroke:var(--dsw-alias-state-info-primary);stroke-width:2.5;stroke-linecap:round;transition:stroke-dashoffset 100ms linear}.dvo-ghost{font-style:italic;color:var(--dsw-alias-label-tertiary);margin-left:6px;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}.dvo-installer-box{display:flex;flex-direction:column;gap:8px;padding:10px 12px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;margin-top:8px}.dvo-installer-row{display:flex;align-items:center;justify-content:space-between;gap:8px}.dvo-progress-bar{height:6px;width:100%;background:var(--dsw-alias-bg-layer-3);border-radius:3px;overflow:hidden}.dvo-progress-fill{height:100%;background:var(--dsw-alias-state-info-primary);transition:width 150ms ease}.dvo-jargon-table{width:100%;margin-top:6px;border-collapse:collapse;font-size:12px}.dvo-jargon-table td{padding:4px 6px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dvo-pill-preview{display:flex;flex-direction:column;gap:8px;padding:10px 14px;border-radius:18px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);width:100%;max-width:720px;margin:0 auto;box-shadow:0 8px 24px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);box-sizing:border-box}.dvo-preview-header{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%}.dvo-preview-tabs{display:inline-flex;align-items:center;gap:4px;background:var(--dsw-alias-bg-layer-2);padding:2px;border-radius:12px;border:1px solid var(--dsw-alias-border-l1)}.dvo-tab-btn{border:none;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;font-weight:500;padding:3px 10px;border-radius:10px;cursor:pointer;transition:all 150ms ease}.dvo-tab-btn:hover{color:var(--dsw-alias-label-primary)}.dvo-tab-btn-active{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:0 1px 3px color-mix(in srgb, var(--dsw-alias-label-primary) 15%, transparent)}.dvo-preview-body{display:flex;align-items:center;gap:8px;width:100%}.dvo-preview-text{flex:1;font-size:13px;color:var(--dsw-alias-label-primary);line-height:1.4;word-break:break-word;max-height:80px;overflow-y:auto;padding:2px 0}.dvo-preview-input{flex:1;font-size:13px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px 8px;outline:none;font-family:inherit;width:100%}.dvo-preview-input:focus{border-color:var(--dsw-alias-state-info-primary)}.dvo-btn-send{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;cursor:pointer;padding:0;flex:none;border:none;background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-1);transition:opacity 150ms ease}.dvo-btn-send:hover{opacity:0.9}.dvo-warn-banner{font-size:12px;color:var(--dsw-alias-state-error-primary);background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);border:1px solid var(--dsw-alias-state-error-primary);padding:4px 8px;border-radius:6px;margin-top:4px}.dvo-mode-pill-btn{display:inline-flex;align-items:center;justify-content:center;height:28px;padding:0 8px;font-size:11px;font-weight:600;border-radius:14px;cursor:pointer;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);user-select:none;transition:all 150ms ease}.dvo-mode-pill-btn:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary)}.dvo-mode-badge{font-size:11px;font-weight:600;padding:2px 6px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l2);margin-right:4px}.dvo-macro-item{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;margin-top:6px}.dvo-macro-actions{display:flex;justify-content:flex-end;gap:6px}.dvo-fallback-badge{font-size:11px;padding:2px 6px;border-radius:4px;color:var(--dsw-alias-state-warning-primary);background:color-mix(in srgb, var(--dsw-alias-state-warning-primary) 12%, transparent);border:1px solid var(--dsw-alias-state-warning-primary)}.dvo-wave-clipping{color:var(--dsw-alias-state-warning-primary)!important;}.dvo-wave-low{color:var(--dsw-alias-label-secondary)!important;}.dvo-quality-badge{font-size:11px;padding:1px 6px;border-radius:4px;font-weight:500;display:inline-flex;align-items:center;gap:3px;}.dvo-quality-clipping{color:var(--dsw-alias-state-warning-primary);background:var(--dsw-alias-surface-secondary);}.dvo-quality-low{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-surface-secondary);}.dvo-undo-badge{font-size:11px;padding:2px 6px;border-radius:4px;background:var(--dsw-alias-surface-secondary);color:var(--dsw-alias-label-primary);display:inline-flex;align-items:center;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}'
const CONTROL_A11Y_CSS = '.dvo-btn:focus-visible,.dvo-pbtn:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:3px}.dvo-btn:disabled{cursor:not-allowed;opacity:.5}@media(pointer:coarse){.dvo-btn,.dvo-pbtn{min-width:44px;min-height:44px}}@media(prefers-reduced-motion:reduce){.dvo-spin{animation:none}}'
const cssId = 'dsh-voice/client.module.css'
if (typeof document !== 'undefined' && !document.querySelector('style[data-dsh-plugin="dsh-voice"][data-plugin-css="' + cssId + '"]')) {const tag = document.createElement('style')
tag.textContent = CSS + CONTROL_A11Y_CSS
tag.setAttribute('data-dsh-plugin', 'dsh-voice')
tag.dataset.pluginCss = cssId
document.head.appendChild(tag)
}
const DESIGN_TOKENS = {
surface: {
cardBg: 'var(--dsw-alias-bg-layer-3)',
elevatedBg: 'var(--dsw-alias-bg-layer-2)',
border: 'var(--dsw-alias-border-l2)',
},
text: {
primary: 'var(--dsw-alias-label-primary)',
secondary: 'var(--dsw-alias-label-secondary)',
tertiary: 'var(--dsw-alias-label-tertiary)',
brand: 'var(--dsw-alias-brand-text)',
},
state: {
success: 'var(--dsw-alias-state-success-primary)',
warning: 'var(--dsw-alias-state-warning-primary)',
danger: 'var(--dsw-alias-state-error-primary)',
},
radius: {
sm: '6px',
md: '8px',
lg: '12px',
pill: '999px',
},
space: {
xs: '4px',
sm: '8px',
md: '12px',
lg: '16px',
},
font: {
xs: '11px',
sm: '12px',
md: '13px',
lg: '15px',
},
}
let _ac = null
function playAudioCue(t, { enabled = true } = {}) {
if (!enabled || typeof window === 'undefined') return
try {
const C = window.AudioContext || window.webkitAudioContext
if (!C) return
if (!_ac || _ac.state === 'closed') _ac = new C()
if (_ac.state === 'suspended') _ac.resume().catch(() => 0)
const n = _ac.currentTime, o = _ac.createOscillator(), g = _ac.createGain()
o.connect(g); g.connect(_ac.destination)
if (t === 'start') {
o.frequency.setValueAtTime(440, n); o.frequency.exponentialRampToValueAtTime(880, n + 0.035)
g.gain.setValueAtTime(0.04, n); g.gain.exponentialRampToValueAtTime(0.001, n + 0.04)
o.start(n); o.stop(n + 0.045)
} else if (t === 'stop') {
o.frequency.setValueAtTime(700, n); o.frequency.exponentialRampToValueAtTime(350, n + 0.035)
g.gain.setValueAtTime(0.04, n); g.gain.exponentialRampToValueAtTime(0.001, n + 0.04)
o.start(n); o.stop(n + 0.045)
} else if (t === 'success') {
o.type = 'triangle'; o.frequency.setValueAtTime(587.33, n); o.frequency.setValueAtTime(880, n + 0.02)
g.gain.setValueAtTime(0.035, n); g.gain.exponentialRampToValueAtTime(0.001, n + 0.06)
o.start(n); o.stop(n + 0.065)
}
} catch (_) { 0 }
}
const DEV_TRANSLIT = Object.fromEntries('а:a,б:b,в:v,г:g,д:d,е:e,ё:yo,ж:zh,з:z,и:i,й:y,к:k,л:l,м:m,н:n,о:o,п:p,р:r,с:s,т:t,у:u,ф:f,х:h,ц:ts,ч:ch,ш:sh,щ:sch,ъ:,ы:y,ь:,э:e,ю:yu,я:ya'.split(',').map((s) => s.split(':')))
const CLIENT_DEV_WORDS = Object.fromEntries('юзер:user,айди:id,нейм:name,дата:data,инфо:info,токен:token,конфиг:config,статус:status,счетчик:count,ошибка:error,ключ:key,сервис:service,клиент:client,хэндлер:handler'.split(',').map((s) => s.split(':')))
function transliterateDevWord(w) {
const low = String(w || '').toLowerCase()
return CLIENT_DEV_WORDS[low] || low.split('').map((c) => DEV_TRANSLIT[c] || c).join('')
}
function devWordsOf(str) {
return String(str || '').trim().split(/[\s_-]+/).filter(Boolean).map(transliterateDevWord)
}
const caseFn = {
c: (ws) => ws.length ? ws[0].toLowerCase() + ws.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('') : '',
p: (ws) => ws.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(''),
s: (ws) => ws.map((w) => w.toLowerCase()).join('_'),
u: (ws) => ws.map((w) => w.toUpperCase()).join('_'),
k: (ws) => ws.map((w) => w.toLowerCase()).join('-'),
}
function formatCasingClient(str, tc) {
const c = String(tc || '').toLowerCase()
const ws = devWordsOf(str)
const f = /camel|кэмел/.test(c) ? caseFn.c : /snake|снейк/.test(c) ? caseFn.s : /constant|констант|upper|апер/.test(c) ? caseFn.u : /kebab|кебаб/.test(c) ? caseFn.k : /pascal|паскаль/.test(c) ? caseFn.p : null
return f ? f(ws) : str
}
const CLIENT_CASING_TARGETS = '(?:(?:camel|кэмел|snake|снейк|constant|upper|kebab|кебаб|pascal|паскаль)[-_\\s]*(?:case|кейс|snake)?|констант(?:у|а)?|апер[-_\\s]*снейк)'
function applyCodeCasing(text) {
const kw = new RegExp('(^|[.,!?\\s])(?:переменн(?:ую|ая)|функци(?:ю|я)|метод|констант(?:у|а)|класс|компонент|тип|поле|var(?:iable)?|func(?:tion)?|method|const(?:ant)?|class|component)\\s+([a-zA-Zа-яА-ЯёЁ0-9_-]+(?:\\s+[a-zA-Zа-яА-ЯёЁ0-9_-]+){0,3})\\s+(?:в|to|in)\\s+(' + CLIENT_CASING_TARGETS + ')(?=[.,!?\\s]|$)', 'gi')
const sfx = new RegExp('(^|[.,!?\\s])([a-zA-Zа-яА-ЯёЁ0-9_-]+(?:\\s+[a-zA-Zа-яА-ЯёЁ0-9_-]+){0,2})\\s+(?:в|to|in)\\s+(' + CLIENT_CASING_TARGETS + ')(?=[.,!?\\s]|$)', 'gi')
return String(text || '')
.replace(kw, (_, lead, words, tc) => (lead || '') + formatCasingClient(words, tc))
.replace(sfx, (_, lead, words, tc) => (lead || '') + formatCasingClient(words, tc))
}
function cleanFillerWords(text) {
return String(text || '')
.replace(/(?<![a-zA-Zа-яА-ЯёЁ0-9])([a-zA-Zа-яА-ЯёЁ0-9]+)\s+\1(?![a-zA-Zа-яА-ЯёЁ0-9])/gi, '$1')
.replace(/(?<![a-zA-Zа-яА-ЯёЁ0-9])(?:ну\s+типа|как\s+бы|в\s+общем-то|так\s+сказать|короче\s+говоря|ээ+|мм+)(?![a-zA-Zа-яА-ЯёЁ0-9])/gi, '')
.replace(/(^|[.,!?\s])(?:ну|типа|короче|uh+|um+|you\s+know|basically|sort\s+of|kind\s+of)(?=[.,!?\s]|$)/gi, '$1')
.replace(/\s+/g, ' ')
.replace(/\s+([.,!?])/g, '$1')
.trim()
}
const apiClient = {
getTokenHeaders() {
return typeof window !== 'undefined' && window.__dshVoiceToken
? { 'x-dsh-voice-token': window.__dshVoiceToken }
: {}
},
getStatus(opts = {}) {
return fetch('/dsh-voice/status', { cache: 'no-store', ...opts })
},
getConfig() {
return fetch('/dsh-voice/config', { cache: 'no-store' })
},
putConfig(payload) {
return fetch('/dsh-voice/config', {
method: 'PUT',
headers: { 'Content-Type': 'application/json', ...this.getTokenHeaders() },
body: JSON.stringify(payload),
})
},
transcribe(payload, opts = {}) {
return fetch('/dsh-voice/transcribe', {
method: 'POST',
headers: { 'content-type': 'application/json', ...this.getTokenHeaders() },
body: JSON.stringify(payload),
signal: opts.signal,
})
},
polish(payload) {
return fetch('/dsh-voice/polish', {
method: 'POST',
headers: { 'content-type': 'application/json', ...this.getTokenHeaders() },
body: JSON.stringify(payload),
})
},
getSensevoiceInstaller() {
return fetch('/dsh-voice/sensevoice-installer')
},
installSensevoice(modelType = 'sensevoice') {
return fetch('/dsh-voice/sensevoice-installer', {
method: 'POST',
headers: {
'x-dsh-plugin-update': '1',
'Content-Type': 'application/json',
},
body: JSON.stringify({ model: modelType }),
})
},
getUpdateStatus() {
return fetch('/api/dsh-voice/update', {
headers: { accept: 'application/json' },
cache: 'no-store',
})
},
triggerUpdate() {
return fetch('/api/dsh-voice/update', {
method: 'POST',
headers: {
'content-type': 'application/json',
'x-dsh-plugin-update': '1',
},
cache: 'no-store',
})
},
runBenchmark() {
return fetch('/dsh-voice/benchmark', {
method: 'POST',
headers: {
'x-dsh-plugin-update': '1',
'Content-Type': 'application/json',
},
})
},
exportDiagnostics() {
return fetch('/dsh-voice/diagnostics/export')
},
openWebSocket(url) {
return new WebSocket(url)
},
}
function createErrorBoundary(defaultSection) {
if (!React || typeof React.Component !== 'function') {
return function NoopBoundary(props) { return props?.children || null }
}
return class VoiceErrorBoundary extends React.Component {
constructor(props) {
super(props)
this.state = { hasError: false, error: null }
}
static getDerivedStateFromError(error) {
return { hasError: true, error }
}
componentDidCatch(error, errorInfo) {
const sec = (this.props && this.props.section) || defaultSection || 'ui'
console.error('[dsh-voice] React Error (' + sec + '):', error, errorInfo)
}
render() {
if (this.state.hasError) {
return React.createElement(
'div',
{ className: 'cb-alert-err', style: { margin: '8px 0', padding: '12px', borderRadius: '8px' } },
React.createElement('div', { style: { fontWeight: 600, marginBottom: '4px' } }, '⚠️ ' + t('uiError')),
React.createElement('div', { style: { fontSize: '12px', wordBreak: 'break-all' } }, String(this.state.error?.message || this.state.error)),
React.createElement(
'button',
{
type: 'button',
className: 'cb-btn',
style: { marginTop: '8px', fontSize: '12px', padding: '4px 10px' },
onClick: () => this.setState({ hasError: false, error: null }),
},
t('retry'),
),
)
}
return this.props?.children || null
}
}
}
const VoiceErrorBoundary = createErrorBoundary('voice')
const ErrorBoundary = VoiceErrorBoundary
function UiActionButton(props) {
const variant = props.variant === 'primary' ? 'cb-btn cb-btn-primary' : 'cb-btn'
const cls = props.className ? (variant + ' ' + props.className) : variant
const baseStyle = props.size === 'sm'
? { fontSize: DESIGN_TOKENS.font.sm, padding: DESIGN_TOKENS.space.xs + ' ' + DESIGN_TOKENS.space.sm }
: undefined
return React.createElement(
'button',
{
type: 'button',
className: cls,
disabled: !!props.disabled,
title: props.title,
style: baseStyle && props.style ? Object.assign({}, baseStyle, props.style) : (props.style || baseStyle),
onClick: props.onClick,
},
props.children,
)
}
function UiStatusBadge(props) {
const kind = props.status === 'ok'
? 'cb-badge cb-badge-ok'
: (props.status === 'warn' ? 'cb-badge cb-badge-warn' : (props.status === 'err' ? 'cb-badge cb-badge-err' : 'cb-badge'))
return React.createElement('span', { className: kind, title: props.title }, props.children)
}
function UiSectionCard(props) {
return React.createElement(
'div',
{ className: 'cb-section-card', style: props.style },
props.title ? React.createElement(
'div',
{ className: 'cb-section-title' },
React.createElement('span', null, (props.icon ? props.icon + ' ' : '') + props.title),
props.actions || null,
) : null,
props.description ? React.createElement('div', { className: 'cb-section-desc' }, props.description) : null,
props.children,
)
}
function UiCheckToggle(props) {
return React.createElement(
'label',
{ className: 'cb-check-label' },
React.createElement('input', {
type: 'checkbox',
checked: !!props.checked,
disabled: !!props.disabled,
onChange: (e) => props.onChange && props.onChange(e.target.checked, e),
}),
props.label,
)
}
const voice = {
phase: 'idle',
mode: 'dictation',
error: '',
rec: null,
levels: [],
pending: null,
lastNote: null,
showPlayer: false,
interimTranscript: '',
isTtsSpeaking: false,
actionTriggered: null, // 'send' | 'cancel' | 'clear' | 'newline' | null
inputActions: null,
input: null,
settings: {
vadSilenceMs: 700, autoSendMs: 4000, editablePreview: true, stream: false, streamChunkMs: 1200, vadAdapt: 0,
noiseSuppression: true, contextGlossary: true,
gatedTurnTaking: true, autoSendVisualRing: true, voiceActions: true,
techJargonCorrection: true, jargonDictionary: [], liveInterimPreview: true,
structuredPromptVoice: true,
},
listeners: new Set(),
notify() { this.listeners.forEach((l) => l()) },
set(patch) { Object.assign(this, patch); if (patch.phase === 'error' && this.handsFree) { stopHandsFree(this.error); return } this.notify() },
subscribe(l) { this.listeners.add(l); return () => this.listeners.delete(l) },
}
function registerGlobalLifecycle() {
voice.disposed = false
if (typeof window === 'undefined') return () => {}
const onTtsStart = () => { voice.set({ isTtsSpeaking: true }); reconcileHandsFree() }
const onBlur = () => setHandsFreePause('blur', true)
const onFocus = () => setHandsFreePause('blur', false)
const onVisibility = () => setHandsFreePause('hidden', typeof document !== 'undefined' && document.hidden === true)
const onTtsStop = () => { voice.set({ isTtsSpeaking: false }); reconcileHandsFree() }
const onSettingsSaved = () => { voice._chainsPromise = null }
const onPageUnload = () => {
stopHandsFree()
if (voice.rec && typeof voice.teardownRec === 'function') voice.teardownRec(voice.rec)
if (voice.browser) {
try { voice.browser.abort() } catch (_) { 0 }
}
}
window.addEventListener('dsh:tts:start', onTtsStart)
window.addEventListener('dsh:tts:stop', onTtsStop)
window.addEventListener('dsh-voice:settings-saved', onSettingsSaved)
window.addEventListener('pagehide', onPageUnload)
window.addEventListener('blur', onBlur)
window.addEventListener('focus', onFocus)
if (typeof document !== 'undefined') document.addEventListener('visibilitychange', onVisibility)
window.addEventListener('beforeunload', onPageUnload)
return () => {
voice.disposed = true
window.removeEventListener('dsh:tts:start', onTtsStart)
window.removeEventListener('dsh:tts:stop', onTtsStop)
window.removeEventListener('dsh-voice:settings-saved', onSettingsSaved)
window.removeEventListener('pagehide', onPageUnload)
window.removeEventListener('blur', onBlur)
window.removeEventListener('focus', onFocus)
if (typeof document !== 'undefined') document.removeEventListener('visibilitychange', onVisibility)
window.removeEventListener('beforeunload', onPageUnload)
onPageUnload()
if (typeof voice.clearGlobalHotkey === 'function') voice.clearGlobalHotkey()
voice.set({ phase: 'idle', caption: '', interimTranscript: '', isTtsSpeaking: false })
}
}
function triggerBargeIn() {
if (typeof window === 'undefined') return
try {
window.dispatchEvent(new CustomEvent('dsh:tts:cancel', { bubbles: true }))
window.dispatchEvent(new CustomEvent('dsh:tts:stop', { bubbles: true }))
const audios = document.querySelectorAll('audio')
for (const a of audios) {
if (!a.paused) { try { a.pause() } catch (err) { 0 } }
}
} catch { 0 }
voice.set({ isTtsSpeaking: false })
}
function findActiveStructuredPrompt() {
if (typeof document === 'undefined') return null
try {
const modal = document.querySelector('.dsh-structured-question, [data-dsh-dialog="question"], .dialog-prompt, .cb-modal-question')
if (modal) {
const input = modal.querySelector('textarea, input[type="text"]')
const buttons = Array.from(modal.querySelectorAll('button:not([disabled])'))
return { modal, input, buttons }
}
} catch { 0 }
return null
}
function submitToStructuredPrompt(text, promptInfo) {
if (!promptInfo) return false
const trimmed = String(text || '').trim().toLowerCase()
const { buttons, input } = promptInfo
if (buttons && buttons.length > 0) {
if (/^(1|первый|first|第一)$/i.test(trimmed) && buttons[0]) { buttons[0].click(); return true }
if (/^(2|второй|second|第二)$/i.test(trimmed) && buttons[1]) { buttons[1].click(); return true }
if (/^(3|третий|third|第三)$/i.test(trimmed) && buttons[2]) { buttons[2].click(); return true }
if (/^(да|yes|ok|confirm|согласен|是|好|确认|同意)$/i.test(trimmed)) {
const yesBtn = buttons.find((b) => /да|yes|ok|confirm|是|好|确认|同意/i.test(b.textContent || ''))
if (yesBtn) { yesBtn.click(); return true }
}
if (/^(нет|no|отмена|cancel|不|否|取消)$/i.test(trimmed)) {
const noBtn = buttons.find((b) => /нет|no|cancel|отмена|不|否|取消/i.test(b.textContent || ''))
if (noBtn) { noBtn.click(); return true }
}
}
if (input) {
input.value = text
input.dispatchEvent(new Event('input', { bubbles: true }))
const form = input.closest('form')
if (form) {
form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
}
return true
}
return false
}
function useVoice() {
const [, force] = React.useReducer((x) => x + 1, 0)
React.useEffect(() => voice.subscribe(force), [])
return voice
}
const ic = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const playIcon = () => React.createElement('svg', Object.assign({}, ic, { viewBox: '0 0 24 24' }),
React.createElement('polygon', { points: '6 4 20 12 6 20 6 4', fill: 'currentColor', stroke: 'none' }))
const pauseIcon = () => React.createElement('svg', Object.assign({}, ic, { viewBox: '0 0 24 24' }),
React.createElement('rect', { x: 6, y: 4, width: 4, height: 16, fill: 'currentColor', stroke: 'none' }),
React.createElement('rect', { x: 14, y: 4, width: 4, height: 16, fill: 'currentColor', stroke: 'none' }))
const micIcon = () => React.createElement('svg', ic,
React.createElement('path', { d: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z' }),
React.createElement('path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2' }),
React.createElement('line', { x1: 12, y1: 19, x2: 12, y2: 23 }))
const waveIcon = () => React.createElement('svg', ic,
React.createElement('line', { x1: 4, y1: 10, x2: 4, y2: 14 }),
React.createElement('line', { x1: 8, y1: 7, x2: 8, y2: 17 }),
React.createElement('line', { x1: 12, y1: 4, x2: 12, y2: 20 }),
React.createElement('line', { x1: 16, y1: 7, x2: 16, y2: 17 }),
React.createElement('line', { x1: 20, y1: 10, x2: 20, y2: 14 }))
const xIcon = () => React.createElement('svg', ic,
React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 }))
const stopIcon = () => React.createElement('svg', ic,
React.createElement('rect', { x: 7, y: 7, width: 10, height: 10, rx: 2.5, fill: 'currentColor', stroke: 'none' }))
const spinIcon = () => React.createElement('svg', Object.assign({}, ic, { className: 'dvo-spin' }),
React.createElement('path', { d: 'M21 12a9 9 0 1 1-6.219-8.56' }))
const warnIcon = () => React.createElement('svg', ic,
React.createElement('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
React.createElement('line', { x1: 12, y1: 9, x2: 12, y2: 13 }),
React.createElement('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 }))
const undoIcon = () => React.createElement('svg', ic,
React.createElement('path', { d: 'M9 14L4 9l5-5' }),
React.createElement('path', { d: 'M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5' }))
const editIcon = () => React.createElement('svg', ic,
React.createElement('path', { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' }),
React.createElement('path', { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' }))
const sendIcon = () => React.createElement('svg', ic,
React.createElement('line', { x1: 22, y1: 2, x2: 11, y2: 13 }),
React.createElement('polygon', { points: '22 2 15 22 11 13 2 9 22 2' }))
const chevronIcon = () => (
ChevronIcon
? React.createElement(ChevronIcon, { className: 'dvo-chev-icon' })
: React.createElement('svg', {
className: 'dvo-chev-icon',
width: 14, height: 14, viewBox: '0 0 16 16', fill: 'none',
},
React.createElement('path', {
d: 'M4 6l4 4 4-4', stroke: 'currentColor', strokeWidth: 1.5,
strokeLinecap: 'round', strokeLinejoin: 'round',
}))
)
function focusComposer() {
if (typeof window === 'undefined') return
const actions = voice.inputActions
if (actions && typeof actions.focus === 'function') {
try { actions.focus(); return } catch { 0 }
}
try {
const el = document.querySelector('.conversation-input textarea, .cb-composer textarea, .dsh-composer textarea, [data-slate-editor="true"], textarea')
if (el && typeof el.focus === 'function') el.focus()
} catch { 0 }
}
function blobToBase64(blob) {
return new Promise((resolve, reject) => {
if (typeof FileReader === 'undefined') { reject(new Error(t('fileReaderUnsupported'))); return }
const fr = new FileReader()
fr.onload = () => { const s = String(fr.result || ''); resolve(s.indexOf(',') >= 0 ? s.slice(s.indexOf(',') + 1) : s) }
fr.onerror = () => reject(new Error(t('audioReadFailed')))
fr.readAsDataURL(blob)
})
}
function extractContextKeywords() {
if (!voice.settings || voice.settings.contextGlossary === false) return []
const chunks = []
const draft = (voice.input && typeof voice.input.draft === 'string') ? voice.input.draft : ''
if (draft && draft.length >= 3) chunks.push(draft)
if (voice.session && Array.isArray(voice.session.messages)) {
const msgs = voice.session.messages.slice(-5)
for (const m of msgs) {
const t = (m && typeof m.content === 'string') ? m.content : ((m && typeof m.text === 'string') ? m.text : '')
if (t && t.length >= 3) chunks.push(t)
}
}
if (typeof document !== 'undefined') {
try {
if (document.title && document.title.length < 100) chunks.push(document.title)
const wsNodes = document.querySelectorAll('[data-filename], [data-path], .tab-active, .editor-tab-active, .dsh-breadcrumb')
for (let i = 0; i < Math.min(wsNodes.length, 6); i++) {
const val = wsNodes[i].getAttribute('data-filename') || wsNodes[i].getAttribute('data-path') || wsNodes[i].textContent
if (val && val.length < 80) chunks.push(val)
}
const nodes = document.querySelectorAll('.message-content code, .dsh-message-body code, pre code')
for (let i = 0; i < Math.min(nodes.length, 10); i++) {
const ct = nodes[i].textContent
if (ct && ct.length < 100) chunks.push(ct)
}
} catch (_) { 0 }
}
const text = chunks.join(' ')
if (!text || text.length < 3) return []
const matches = text.match(/[A-Za-zА-Яа-яЁё_][A-Za-zА-Яа-яЁё0-9_]{2,29}/g) || []
const stop = new Set([
'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'any', 'can', 'her', 'was',
'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now',
'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she',
'too', 'use', 'это', 'как', 'что', 'для', 'или', 'если', 'все', 'при', 'так', 'уже',
'был', 'быть', 'только', 'тоже', 'под', 'над', 'без', 'нет', 'даже', 'где', 'чем',
])
const words = []
const seen = new Set()
for (const m of matches) {
const lower = m.toLowerCase()
if (!stop.has(lower) && !seen.has(lower)) {
seen.add(lower)
words.push(m)
if (words.length >= 30) break
}
}
return words
}
async function sendAudio(blob, mime, mode, audioQuality) {
const activeChain = (voice._activeChain || [])
const modelMap = voice._activeModelMap || {}
const chosenModel = modelMap['browser-webgpu'] || (voice.settings && voice.settings.webgpuModel)
const tryHost = async (chainOverride) => {
const dataBase64 = await blobToBase64(blob)
const subMode = (voice._activeTarget && voice._activeTarget.dictationMode)
|| voice.selectedDictationMode
|| (voice.settings && voice.settings.dictationMode)
|| 'clean'
const payload = { dataBase64, mimeType: mime, mode, subMode }
if (audioQuality && audioQuality.clipping) payload.clipping = true
if (audioQuality && audioQuality.lowVolume) payload.lowVolume = true
if (Array.isArray(chainOverride)) {
payload.chain = chainOverride.map((p) => (typeof p === 'string' ? { provider: p, model: modelMap[p] } : p))
}
const contextWords = extractContextKeywords()
if (contextWords && contextWords.length > 0) payload.contextWords = contextWords
const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
const handsFreeOwner = voice.handsFree
if (handsFreeOwner) handsFreeOwner.transcribeController = controller
const timer = controller ? setTimeout(() => controller.abort(), 60000) : null
let res = null
try {
res = await apiClient.transcribe(payload, {
signal: controller ? controller.signal : undefined,
})
} catch (e) {
if (e && e.name === 'AbortError') {
throw new Error(t('transcriptionTimeout'))
}
throw e
} finally {
if (timer) clearTimeout(timer)
if (handsFreeOwner && handsFreeOwner.transcribeController === controller) handsFreeOwner.transcribeController = null
}
let parsed = null
try { parsed = await res.json() } catch (e) { 0 }
if (!res.ok || !parsed || !parsed.ok) {
throw new Error((parsed && parsed.error && parsed.error.message) || `HTTP ${res.status}`)
}
if (parsed.command) return { command: parsed.command, text: '', action: null }
return { text: String(parsed.text || '').trim(), command: null, action: parsed.action || null }
}
const tryWebGpu = async () => {
const canGpu = voice.webGpu?.isSupported ? voice.webGpu.isSupported() : (typeof isWebGpuSupported === 'function' && isWebGpuSupported())
if (canGpu) {
try {
const fn = voice.webGpu?.transcribe || transcribeWithWebGpu
const out = await fn(blob, mime, {
language: voice._activeLang || (voice.settings && voice.settings.dictation && voice.settings.dictation.language) || '',
model: chosenModel,
})
const text = (out && typeof out.text === 'string') ? tidyPhrase(out.text) : ''
return { text, command: null, action: null, provider: 'browser-webgpu' }
} catch (webGpuErr) {
console.warn('[dsh-voice] WebGPU Whisper failed:', webGpuErr)
}
}
return null
}
const gpuIdx = activeChain.indexOf('browser-webgpu')
if (gpuIdx === -1) {
return await tryHost()
}
const head = activeChain.slice(0, gpuIdx)
const tail = activeChain.slice(gpuIdx + 1)
if (head.length > 0) {
try {
const headOut = await tryHost(head)
if (headOut && (headOut.text || headOut.command || headOut.action)) return headOut
} catch (headErr) { 0 }
}
const gpuOut = await tryWebGpu()
if (gpuOut && gpuOut.text) return gpuOut
if (tail.length > 0) {
try {
const tailOut = await tryHost(tail)
if (tailOut && (tailOut.text || tailOut.command || tailOut.action)) return tailOut
} catch (tailErr) {
if (head.length === 0 && !gpuOut) throw tailErr
}
}
if (gpuOut) return gpuOut
return { text: '', command: null, action: null }
}
function tidyPhrase(text) {
if (!text) return ''
if (/^\n+$/.test(text)) return text
const lead = (text.match(/^\n+/) || [''])[0]
const trail = (text.match(/\n+$/) || [''])[0]
let s = String(text).trim()
if (!s) return lead || trail || ''
if (typeof cleanFillerWords === 'function') s = cleanFillerWords(s)
if (typeof applyCodeCasing === 'function') s = applyCodeCasing(s)
s = s.replace(/\s*,\s*/g, ', ')
s = s.replace(/(^|[.!?\n]\s+)([a-zа-яё])/gi, (m, l, ch) => l + ch.toUpperCase())
return lead + s + trail
}
const VOICE_COMMANDS = [
[/(^|[\s,.!?])с новой строки([\s,.!?]|$)/gi, '$1\n$2'],
[/(^|[\s,.!?])новая строка([\s,.!?]|$)/gi, '$1\n$2'],
[/(^|[\s,.!?])абзац([\s,.!?]|$)/gi, '$1\n\n$2'],
[/(^|\s)тире(\s|$)/gi, '$1—$2'],
[/(^|[\s,.!?])new line([\s,.!?]|$)/gi, '$1\n$2'],
[/(^|[\s,.!?])paragraph([\s,.!?]|$)/gi, '$1\n\n$2'],
]
function applyVoiceCommands(text) {
let s = text
for (const [re, to] of VOICE_COMMANDS) s = s.replace(re, to)
if (/^\n+$/.test(s)) return s
const lead = (s.match(/^\n+/) || [''])[0]
const trail = (s.match(/\n+$/) || [''])[0]
const trimmed = s.replace(/[ \t]*\n[ \t]*/g, '\n').replace(/[ \t]+/g, ' ').trim()
if (!trimmed) return lead || trail || ''
return lead + trimmed + trail
}
const insertHistory = []
async function undoLastInsert() {
const last = insertHistory.pop()
if (!last) return t('nothingToUndo')
const actions = (voice._activeTarget && voice._activeTarget.actions) || voice.inputActions
if (!actions || typeof actions.setDraft !== 'function') return t('composerUnavailable')
const draft = voice.input && typeof voice.input.draft === 'string' ? voice.input.draft : ''
if (draft === last.after) actions.setDraft(last.before)
else {
const i = draft.lastIndexOf(last.added)
if (i < 0) { insertHistory.push(last); return t('nothingToUndo') }
const spliced = draft.slice(0, i) + draft.slice(i + last.added.length)
actions.setDraft(spliced.replace(/[ \t]{2,}/g, ' ').replace(/\s+$/, '').trimStart())
}
const chunk = String(last.added || '').trim()
voice.lastUndoneChunk = chunk
voice.lastUndoNotice = t('undone') + (chunk ? ': "' + (chunk.length > 25 ? chunk.slice(0, 22) + '…' : chunk) + '"' : '')
if (typeof actions.focus === 'function') { try { actions.focus() } catch (_) { 0 } }
return t('undone')
}
function insertDraftText(text, target) {
if (voice.disposed) return false
if (target && ((target.actions && target.actions !== voice.inputActions) || (target.sessionId && target.sessionId !== handsFreeSessionId()))) return false
const span = target && target.span
const sIn = (target && target.input) || voice.input
const sDraft = (sIn && typeof sIn.draft === 'string') ? sIn.draft : ''
const spaced = (sDraft && !/\s$/.test(sDraft) && !/^\s/.test(text)
&& !/^[.,;:!?…»)\]}]/.test(text) && !/[\s(«"'\[]$/.test(sDraft)) ? ' ' + text : text
if (span) {
if (typeof span.insert === 'function') {
try {
const r = span.insert(spaced)
if (r !== false) return true
return false
} catch (_) { 0 }
} else if (typeof span.insertText === 'function') {
try {
const r = span.insertText(spaced)
if (r !== false) return true
return false
} catch (_) { 0 }
} else if (typeof span === 'function') {
try {
const r = span(spaced)
if (r !== false) return true
return false
} catch (_) { 0 }
}
}
const actions = (target && target.actions) || voice.inputActions
const input = (target && target.input) || voice.input
if (!actions || (typeof actions.setDraft !== 'function' && typeof actions.insertText !== 'function')) {
voice.set({ phase: 'error', error: t('composerUnavailable') })
return false
}
if (typeof actions.insertText === 'function') {
try {
const res = actions.insertText(spaced, span)
if (res !== false) {
if (target && typeof actions.captureInsertion === 'function') {
try { target.span = actions.captureInsertion() } catch (_) { 0 }
}
return true
}
return false
} catch (_) {
return false
}
}
const draft = input && typeof input.draft === 'string' ? input.draft : ''
const before = draft
const sep = (!draft || draft.endsWith('\n') || text.startsWith('\n')) ? '' : ' '
const after = draft + sep + text
try {
actions.setDraft(after)
} catch (_) {
return false
}
const limit = Number(voice.settings.historyLimit)
if (limit > 0) {
insertHistory.push({ before, added: sep + text, after })
while (insertHistory.length > limit) insertHistory.shift()
}
return true
}
function appendDraft(text, target) {
if (voice.disposed || !text) return false
let clean = voice.settings.voiceCommands ? applyVoiceCommands(text) : tidyPhrase(text)
if (!clean) return false
return insertDraftText(clean, target)
}
function announceVoice(phase) {
try {
window.dispatchEvent(new CustomEvent('dsh-voice:speaking', { detail: { phase } }))
} catch (noEvents) { 0 }
if (voice.settings.beep) playBeep(phase === 'start' ? 880 : 660)
}
function playBeep(freq) {
try {
const AC = typeof AudioContext !== 'undefined' ? AudioContext
: (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (!AC) return
const ac = new AC()
const osc = ac.createOscillator()
const gain = ac.createGain()
osc.frequency.value = freq
osc.type = 'sine'
gain.gain.setValueAtTime(0.12, ac.currentTime)
gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.09)
osc.connect(gain); gain.connect(ac.destination)
osc.start(); osc.stop(ac.currentTime + 0.1)
osc.onended = () => { try { ac.close() } catch (e) { 0 } }
} catch (noAudio) { 0 }
}
function speechRecognitionCtor() {
if (typeof window === 'undefined') return null
return window.SpeechRecognition || window.webkitSpeechRecognition || null
}
function browserRecognitionAvailable() {
return speechRecognitionCtor() !== null
}
function resolveBrowserRecognitionLang(lang) {
if (lang && lang !== 'auto') {
if (lang.includes('-')) return lang
const BCP47 = { ru: 'ru-RU', en: 'en-US', zh: 'zh-CN', uk: 'uk-UA', de: 'de-DE' }
return BCP47[lang.toLowerCase()] || lang
}
if (typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) {
return document.documentElement.lang
}
if (typeof navigator !== 'undefined' && navigator.language) {
return navigator.language
}
return 'en-US'
}
function startBrowserRecognition(options) {
const Ctor = speechRecognitionCtor()
const recognition = new Ctor()
recognition.lang = resolveBrowserRecognitionLang(options.lang)
recognition.continuous = options.continuous !== false
recognition.interimResults = true
let stopped = false
let stopPromise = null
let resolveStop = null
recognition.onresult = (event) => {
let interim = ''
for (let i = event.resultIndex; i < event.results.length; i++) {
const result = event.results[i]
const text = String(result[0] && result[0].transcript || '').trim()
if (!text) continue
if (result.isFinal) options.onFinal(text)
else interim += (interim ? ' ' : '') + text
}
options.onInterim(interim)
}
recognition.onerror = (event) => {
const code = event && event.error
if (code === 'no-speech' || code === 'aborted') return
stopped = true
        try { recognition.abort() } catch (_) { 0 }
if (resolveStop) { resolveStop(); resolveStop = null }
options.onError(code || t('recognitionError'))
}
recognition.onend = () => {
if (stopped) {
if (resolveStop) { resolveStop(); resolveStop = null }
return
}
try { recognition.start() } catch (alreadyRunning) { 0 }
}
try { recognition.start() } catch (cannotStart) {
options.onError(String(cannotStart && cannotStart.message || cannotStart))
}
return {
stop() {
if (stopPromise) return stopPromise
stopped = true
stopPromise = new Promise((resolve) => {
resolveStop = resolve
try { recognition.stop() } catch (already) { resolve() }
setTimeout(resolve, 800)
})
return stopPromise
},
abort() {
stopped = true
if (resolveStop) { resolveStop(); resolveStop = null }
try { recognition.abort() } catch (already) { 0 }
},
}
}
voice._core = { tidyPhrase, applyVoiceCommands, VOICE_COMMANDS, undoLastInsert, undoLastChunk: undoLastInsert, insertHistory, insertDraftText, appendDraft, resolveBrowserRecognitionLang }
function isWebGpuSupported() {
if (typeof navigator === 'undefined' || !navigator.gpu) return false
return true
}
function isWasmSupported() {
return typeof WebAssembly !== 'undefined'
}
function isOfflineSupported() {
return isWebGpuSupported() || isWasmSupported()
}
const _webGpuPipelines = new Map()
function loadWebGpuWhisper(modelName, options) {
const targetModel = modelName || (voice.settings && voice.settings.webgpuModel) || 'onnx-community/whisper-tiny'
const forceDevice = options?.device
const key = `${targetModel}:${forceDevice || 'auto'}`
if (_webGpuPipelines.has(key)) {
return _webGpuPipelines.get(key)
}
const promise = (async () => {
if (!isOfflineSupported()) {
throw new Error('Neither WebGPU nor WebAssembly is supported in this browser environment')
}
const mod = typeof globalThis !== 'undefined' && globalThis.__mockTransformers
? globalThis.__mockTransformers
: (await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.3.3'))
const pipeline = mod.pipeline || (mod.default && mod.default.pipeline)
if (!pipeline) throw new Error('Transformers pipeline not found in loaded bundle')
const canGpu = forceDevice === 'webgpu' || (!forceDevice && isWebGpuSupported())
if (canGpu) {
try {
return await pipeline('automatic-speech-recognition', targetModel, {
device: 'webgpu',
dtype: 'fp32',
})
} catch (gpuErr) {
if (isWasmSupported()) {
return await pipeline('automatic-speech-recognition', targetModel, {
device: 'wasm',
dtype: 'q8',
})
}
throw gpuErr
}
}
if (isWasmSupported()) {
return await pipeline('automatic-speech-recognition', targetModel, {
device: 'wasm',
dtype: 'q8',
})
}
throw new Error('Offline speech recognition failed: no WebGPU or WebAssembly available')
})().catch((err) => {
_webGpuPipelines.delete(key)
throw err
})
_webGpuPipelines.set(key, promise)
return promise
}
async function audioBlobToFloat32Array(blob) {
const arrayBuffer = await blob.arrayBuffer()
const AC = typeof AudioContext !== 'undefined' ? AudioContext
: (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (!AC) throw new Error('AudioContext unavailable for audio decoding')
const ctx = new AC({ sampleRate: 16000 })
try {
const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
return audioBuffer.getChannelData(0)
} finally {
try { await ctx.close() } catch (_) { 0 }
}
}
async function transcribeWithWebGpu(blob, mime, options) {
if (!isOfflineSupported()) {
throw new Error('Offline recognition (WebGPU/WASM) unavailable in browser')
}
const transcriber = await loadWebGpuWhisper(options && options.model, options)
const audioData = await audioBlobToFloat32Array(blob)
const generateArgs = {}
if (options && options.language && options.language !== 'auto') {
generateArgs.language = options.language
}
const result = await transcriber(audioData, generateArgs)
const text = (result && typeof result.text === 'string') ? result.text.trim() : ''
return { text, provider: 'browser-webgpu' }
}
voice.webGpu = {
isSupported: isOfflineSupported,
isWebGpuSupported,
isWasmSupported,
transcribe: transcribeWithWebGpu,
load: loadWebGpuWhisper,
clearCache: () => { _webGpuPipelines.clear() },
}
function isSileroVadSupported() {
return typeof Float32Array !== 'undefined'
}
let _sileroLoaded = false
let _sileroState = { h: null, c: null }
async function initSileroVad() {
_sileroLoaded = isSileroVadSupported()
return _sileroLoaded
}
function evaluateSileroFrame(pcmFrame) {
if (!pcmFrame || pcmFrame.length === 0) return { isSpeech: false, probability: 0 }
const len = pcmFrame.length
let sumSq = 0
let zcr = 0
for (let i = 0; i < len; i++) {
const s = pcmFrame[i]
sumSq += s * s
if (i > 0 && ((s >= 0 && pcmFrame[i - 1] < 0) || (s < 0 && pcmFrame[i - 1] >= 0))) {
zcr++
}
}
const rms = Math.sqrt(sumSq / len)
const zcrRate = zcr / len
if (rms < 0.015) return { isSpeech: false, probability: 0.05 }
if (zcrRate > 0.42 && rms < 0.08) return { isSpeech: false, probability: 0.12 }
const probability = Math.min(0.99, Math.max(0.1, (rms * 2.5) * (1 - zcrRate * 0.8)))
return { isSpeech: probability >= 0.45, probability }
}
voice.sileroVad = {
isSupported: isSileroVadSupported,
isReady: () => _sileroLoaded || isSileroVadSupported(),
init: initSileroVad,
evaluate: evaluateSileroFrame,
reset: () => { _sileroState = { h: null, c: null } },
}
function isWsStreamingSupported() {
return typeof WebSocket !== 'undefined'
}
class ASRWebSocketStream {
constructor(options = {}) {
this.options = options
this.ws = null
this.isOpen = false
this.onInterim = options.onInterim || null
this.onFinal = options.onFinal || null
this.onError = options.onError || null
this._finalPromise = null
this._resolveFinal = null
}
async connect(mimeType = 'audio/webm', mode = 'dictation') {
if (!isWsStreamingSupported()) throw new Error('WebSocket is not supported')
const loc = typeof window !== 'undefined' ? window.location : null
if (!loc) throw new Error('Window location unavailable')
const proto = loc.protocol === 'https:' ? 'wss:' : 'ws:'
const token = typeof window !== 'undefined' && window.__dshVoiceToken ? window.__dshVoiceToken : ''
const url = `${proto}//${loc.host}/dsh-voice/ws/stream${token ? `?token=${encodeURIComponent(token)}` : ''}`
return new Promise((resolve, reject) => {
let settled = false
try {
this.ws = apiClient.openWebSocket(url)
} catch (err) {
return reject(err)
}
this.ws.onopen = () => {
this.isOpen = true
this.ws.send(JSON.stringify({ type: 'init', mimeType, mode }))
if (!settled) { settled = true; resolve(this) }
}
this.ws.onerror = (e) => {
if (!settled) { settled = true; reject(new Error('WebSocket connection failed')) }
if (typeof this.onError === 'function') this.onError(e)
}
this.ws.onclose = () => {
this.isOpen = false
if (!settled) { settled = true; reject(new Error('WebSocket closed unexpectedly')) }
}
this.ws.onmessage = (event) => {
try {
const msg = JSON.parse(event.data)
if (msg.type === 'interim' && msg.text && typeof this.onInterim === 'function') {
this.onInterim(msg.text)
} else if (msg.type === 'final') {
if (typeof this.onFinal === 'function') this.onFinal(msg)
if (this._resolveFinal) {
this._resolveFinal(msg)
this._resolveFinal = null
}
}
} catch (_) { 0 }
}
})
}
sendBlobChunk(blob) {
if (!this.isOpen || !this.ws || this.ws.readyState !== WebSocket.OPEN) return false
blob.arrayBuffer().then((buffer) => {
if (this.isOpen && this.ws && this.ws.readyState === WebSocket.OPEN) {
this.ws.send(buffer)
}
}).catch(() => 0)
return true
}
requestInterim() {
if (!this.isOpen || !this.ws || this.ws.readyState !== WebSocket.OPEN) return
try { this.ws.send(JSON.stringify({ type: 'interim' })) } catch (_) { 0 }
}
finish() {
if (!this.isOpen || !this.ws || this.ws.readyState !== WebSocket.OPEN) {
return Promise.resolve(null)
}
this._finalPromise = new Promise((resolve) => {
this._resolveFinal = resolve
setTimeout(() => resolve(null), 8000)
})
try {
this.ws.send(JSON.stringify({ type: 'finish' }))
} catch (_) {
return Promise.resolve(null)
}
return this._finalPromise
}
close() {
this.isOpen = false
if (this.ws) {
try { this.ws.close() } catch (_) { 0 }
this.ws = null
}
}
}
voice.streamingWs = {
isSupported: isWsStreamingSupported,
createStream: (options) => new ASRWebSocketStream(options),
}
voice._chainsPromise = null
function modeChain(mode) {
if (!voice._chainsPromise) {
voice._chainsPromise = apiClient.getStatus()
.then((res) => res.json())
.then((data) => {
if (data?.sessionToken && typeof window !== 'undefined') window.__dshVoiceToken = data.sessionToken
if (data && typeof data.localOnly === 'boolean') {
voice.settings.localOnly = data.localOnly
}
if (data && data.webgpuModel) {
voice.settings.webgpuModel = data.webgpuModel
}
return (data && data.modes) || {}
})
.catch(() => {
voice._chainsPromise = null
return {}
})
}
return voice._chainsPromise.then((modes) => {
const row = modes[mode] || {}
let chain = Array.isArray(row.chain) ? row.chain : []
let providers = chain.map((e) => (typeof e === 'string' ? e : e && e.provider)).filter(Boolean)
if (voice.settings && voice.settings.localOnly) {
providers = providers.filter((p) => p !== 'browser')
}
const modelMap = {}
for (const entry of chain) {
if (entry && entry.provider && entry.model) {
modelMap[entry.provider] = entry.model
}
}
return {
chain: providers,
language: row.language !== undefined ? row.language : '',
modelMap,
}
})
}
function teardown(rec) {
if (!rec) return
rec.tornDown = true
if (rec.wsStream) { try { rec.wsStream.close() } catch (_) { 0 } rec.wsStream = null }
try { rec.stream.getTracks().forEach((t) => t.stop()) } catch (e) { 0 }
if (rec.srcNode) { try { rec.srcNode.disconnect() } catch (e) { 0 } }
if (rec.filterNode) { try { rec.filterNode.disconnect() } catch (e) { 0 } }
if (rec.analyser) { try { rec.analyser.disconnect() } catch (e) { 0 } }
if (rec.audioCtx) { try { rec.audioCtx.close() } catch (e) { 0 } }
}
voice.teardownRec = teardown
function waitStop(recorder) {
if (!recorder || recorder.state === 'inactive') return Promise.resolve()
return new Promise((resolve) => recorder.addEventListener('stop', resolve, { once: true }))
}
async function openMic(mode, opId, target) {
if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
throw new Error(t('micUnavailable'))
}
const ns = voice.settings.noiseSuppression !== false
const audio = {
channelCount: 1,
echoCancellation: ns,
noiseSuppression: ns,
autoGainControl: ns,
}
if (voice.settings.micDeviceId) audio.deviceId = { exact: voice.settings.micDeviceId }
const stream = await navigator.mediaDevices.getUserMedia({ audio })
let rec = null
try {
let mimeType = 'audio/webm;codecs=opus'
if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = ''
const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream)
rec = {
recorder, stream, mode,
target: target || voice._activeTarget,
opId: opId || (voice.activeOpId || 0),
chunks: [],
mime: mimeType || recorder.mimeType || 'audio/webm',
audioCtx: null, analyser: null,
cutting: false, closing: false,
silenceMs: 0, hadSpeech: false,
streamMs: 0,
}
recorder.ondataavailable = (e) => { if (e.data && e.data.size > 0) rec.chunks.push(e.data) }
const AC = typeof AudioContext !== 'undefined' ? AudioContext
: (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (AC) {
rec.audioCtx = new AC()
if (rec.audioCtx.state === 'suspended') { rec.audioCtx.resume().catch(() => 0) }
const src = rec.audioCtx.createMediaStreamSource(stream)
rec.srcNode = src
let lastNode = src
try {
const filter = rec.audioCtx.createBiquadFilter()
filter.type = 'highpass'
filter.frequency.value = 80
filter.Q.value = 0.707
src.connect(filter)
lastNode = filter
rec.filterNode = filter
} catch (e) { 0 }
rec.analyser = rec.audioCtx.createAnalyser()
rec.analyser.fftSize = 128
lastNode.connect(rec.analyser)
}
recorder.start()
if (voice.settings && voice.settings.vadEngine !== 'amplitude' && voice.sileroVad) {
voice.sileroVad.init().catch(() => 0)
}
if (voice.settings && voice.settings.streamingWs !== false && voice.streamingWs && voice.streamingWs.isSupported()) {
voice.streamingWs.createStream({
onInterim: (text) => {
if (!rec.tornDown && !rec.cancelled && !rec.closing && voice.rec === rec && (voice.activeOpId || 0) === rec.opId && voice.phase === 'recording' && voice.settings.liveInterimPreview !== false) {
voice.interimTranscript = text
voice.notify()
}
},
onError: () => { rec.wsStream = null },
}).connect(rec.mime, mode).then((s) => {
if (rec.tornDown || rec.cancelled || rec.closing || voice.disposed || (voice.activeOpId || 0) !== rec.opId) { try { if (s) s.close() } catch (_) { 0 } return }
rec.wsStream = s
}).catch(() => { rec.wsStream = null })
}
return rec
} catch (err) {
if (rec) {
teardown(rec)
} else {
try { stream.getTracks().forEach((t) => t.stop()) } catch (_) { 0 }
}
throw err
}
}
function currentLevel(rec) {
if (!rec || !rec.analyser) return 0
const data = new Uint8Array(rec.analyser.frequencyBinCount)
rec.analyser.getByteFrequencyData(data)
let sum = 0
for (let i = 0; i < data.length; i++) sum += data[i]
const raw = Math.min(1, (sum / data.length / 255) * 2.2)
if (rec.analyser.getByteTimeDomainData) {
if (!rec._waveBuf || rec._waveBuf.length !== rec.analyser.fftSize) {
rec._waveBuf = new Uint8Array(rec.analyser.fftSize)
}
rec.analyser.getByteTimeDomainData(rec._waveBuf)
let clipped = false
for (let i = 0; i < rec._waveBuf.length; i++) {
const v = rec._waveBuf[i]
if (v <= 1 || v >= 254) { clipped = true; break }
}
const now = Date.now()
if (clipped) {
rec.clippingUntil = now + 800
rec.hasClipped = true
}
if (voice.settings && voice.settings.vadEngine !== 'amplitude' && voice.sileroVad && voice.sileroVad.isReady()) {
if (!rec._floatBuf || rec._floatBuf.length !== rec._waveBuf.length) {
rec._floatBuf = new Float32Array(rec._waveBuf.length)
}
for (let i = 0; i < rec._waveBuf.length; i++) {
rec._floatBuf[i] = (rec._waveBuf[i] - 128) / 128
}
const vadRes = voice.sileroVad.evaluate(rec._floatBuf)
rec.sileroSpeech = vadRes.isSpeech
} else {
rec.sileroSpeech = null
}
const lowT = Number(voice.settings?.lowVolumeThreshold ?? 0.08)
if (rec.hadSpeech && raw > 0 && raw < lowT) {
rec.lowVolumeUntil = now + 800
rec.hasLowVolume = true
}
const isClipping = Boolean(rec.clippingUntil && rec.clippingUntil > now)
const isLow = Boolean(!isClipping && rec.lowVolumeUntil && rec.lowVolumeUntil > now)
if (!voice.audioQuality || voice.audioQuality.clipping !== isClipping || voice.audioQuality.lowVolume !== isLow) {
voice.audioQuality = { clipping: isClipping, lowVolume: isLow }
voice.notify()
}
}
const gateDb = Number(voice.settings && voice.settings.noiseGateDb !== undefined ? voice.settings.noiseGateDb : -45)
if (gateDb > -90) {
const gateAmp = Math.pow(10, gateDb / 20) * 2.2
if (raw < gateAmp) return 0
}
return raw
}
let dictationQueue = Promise.resolve()
function cutPhrase() {
const rec = voice.rec
if (!rec || rec.cutting || rec.closing) return
const opId = rec.opId || voice.activeOpId
const target = rec.target || voice._activeTarget
rec.cutting = true
const stopped = waitStop(rec.recorder)
try {
if (rec.recorder && rec.recorder.state !== 'inactive') {
rec.recorder.stop()
}
} catch (e) {
rec.cutting = false
return
}
stopped.then(async () => {
if (rec.cancelled || voice.activeOpId !== opId || voice.disposed) return
const blob = new Blob(rec.chunks, { type: rec.mime })
rec.chunks = []
rec.silenceMs = 0
rec.hadSpeech = false
rec.streamMs = 0
if (!rec.closing && !rec.cancelled) {
try {
if (rec.recorder && rec.recorder.state === 'inactive') rec.recorder.start()
} catch (e) { 0 }
}
rec.cutting = false
if (rec.cancelled || blob.size < 600) return
if (rec.wsStream && rec.wsStream.isOpen) {
rec.wsStream.sendBlobChunk(blob)
rec.wsStream.requestInterim()
}
const q = { clipping: Boolean(rec.hasClipped), lowVolume: Boolean(rec.hasLowVolume) }
rec.hasClipped = false
rec.hasLowVolume = false
dictationQueue = dictationQueue.then(async () => {
if (rec.cancelled || voice.activeOpId !== opId || voice.disposed) return
try {
const out = await sendAudio(blob, rec.mime, 'dictation', q)
if (rec.cancelled || voice.activeOpId !== opId || voice.disposed) return
const text = out && out.text ? out.text : ''
const action = out && out.action ? out.action : null
if (voice.settings.structuredPromptVoice !== false && text) {
const promptInfo = findActiveStructuredPrompt()
if (promptInfo && submitToStructuredPrompt(text, promptInfo)) {
return
}
}
if (action === 'send' || action === 'clear' || action === 'newline' || action === 'undo_chunk' || action === 'stop_generation' || action === 'switch_dictation' || action === 'switch_voice_note' || action === 'new_chat') {
playAudioCue('success', { enabled: voice.settings?.audioFeedback !== false })
executeVoiceAction(action, text, target)
return
}
if (action === 'cancel') {
cancelCurrent()
return
}
const delay = Number(voice.settings.sendDelayMs) || 0
if (text && delay > 0 && !voice.holding) {
const ok = appendDraft(text, target)
if (ok !== false) {
voice.set({ phase: 'pending', pending: { text, target, undoOnly: true, leftMs: delay } })
} else {
voice.set({ phase: 'idle' })
}
return
}
if (text) appendDraft(text, target)
} catch (e) {
if (!rec.cancelled && voice.activeOpId === opId && !voice.disposed) {
voice.set({ error: String(e && e.message ? e.message : e) })
}
}
})
})
}
function startBrowserLeg(mode, language, opId, target) {
if (voice.settings && voice.settings.localOnly) return false
if (!browserRecognitionAvailable()) return false
const finals = []
voice.caption = ''
voice.browser = startBrowserRecognition({
lang: language,
continuous: true,
onInterim: (text) => {
if (voice.activeOpId !== opId || voice.phase !== 'recording' || voice.disposed) return
voice.caption = text
if (voice.settings.liveInterimPreview !== false) {
voice.interimTranscript = text
}
voice.notify()
const ww = String(voice.settings.wakeWord || '').trim().toLowerCase()
if (ww && mode === 'dictation' && !voice.rec) {
const t = String(text || '').trim().toLowerCase()
if (t.startsWith(ww)) {
if (voice.browser && typeof voice.browser.abort === 'function') {
try { voice.browser.abort() } catch (_) { 0 }
}
voice.browser = null
voice.caption = ''
voice.interimTranscript = ''
openMic(mode, opId, target)
.then((rec) => {
if (voice.activeOpId !== opId || voice.phase !== 'recording' || voice.disposed) {
teardown(rec)
return
}
rec.opId = opId
rec.target = target
voice.rec = rec
if (voice.handsFree && !rec.analyser) { stopHandsFree(t('micUnavailable')); return }
if (voice.handsFree) {
rec.recorder.addEventListener('error', () => { if (voice.rec === rec) stopHandsFree(t('recognitionError')) })
rec.stream.getTracks().forEach((track) => track.addEventListener('ended', () => { if (voice.rec === rec && !rec.closing) stopHandsFree(t('micUnavailable')) }))
}
voice.notify()
})
.catch((err) => {
if (voice.activeOpId !== opId) return
voice.set({ phase: 'error', error: String(err && err.message ? err.message : err), rec: null })
})
}
}
},
onFinal: (text) => {
if (voice.activeOpId !== opId || (voice.phase !== 'recording' && voice.phase !== 'finishing') || voice.disposed) return
finals.push(text)
voice.caption = ''
voice.interimTranscript = ''
if (mode === 'dictation') appendDraft(text, target)
else voice.notify()
},
onError: (reason) => {
if (voice.activeOpId !== opId || voice.disposed) return
voice.browser = null
voice.interimTranscript = ''
voice.set({ phase: 'error', error: t('browserFailed') + reason })
},
})
voice.browserFinals = finals
voice.notify()
return true
}
function startRecording(mode) {
if (voice.phase !== 'idle' && voice.phase !== 'error') return
if (voice.handsFree && mode !== 'message') return
voice.activeOpId = (voice.activeOpId || 0) + 1
const opId = voice.activeOpId
const targetActions = voice.inputActions
const targetInput = voice.input
let span = null
if (targetActions && typeof targetActions.captureInsertion === 'function') {
try { span = targetActions.captureInsertion() } catch (_) { 0 }
}
const initialDraft = (targetInput && typeof targetInput.draft === 'string') ? targetInput.draft : ''
const targetSession = voice.session || (targetInput && targetInput.session)
const sessionId = (targetSession && (targetSession.sessionId || targetSession.id))
|| voice.currentSessionId || ''
const snapshotSubMode = voice.selectedDictationMode
|| (voice.settings && voice.settings.dictationMode)
|| 'clean'
const target = { actions: targetActions, input: targetInput, session: targetSession, span, initialDraft, sessionId, dictationMode: snapshotSubMode }
voice._activeTarget = target
if (voice.isTtsSpeaking) {
if (voice.settings.bargeIn) {
triggerBargeIn()
} else if (voice.settings.gatedTurnTaking !== false) {
voice.set({ phase: 'error', error: t('assistantSpeakingGated') })
return
}
}
announceVoice('start')
playAudioCue('start', { enabled: voice.settings?.audioFeedback !== false })
dictationQueue = Promise.resolve()
voice.set({ phase: 'recording', mode, error: '', levels: [], caption: '', interimTranscript: '' })
modeChain(mode).then((info) => {
if (voice.activeOpId !== opId || voice.phase !== 'recording' || voice.disposed) return
voice._activeChain = info.chain || []
voice._activeLang = info.language || ''
voice._activeModelMap = info.modelMap || {}
if (!voice.handsFree && info.chain[0] === 'browser' && !voice.settings.localOnly && startBrowserLeg(mode, info.language, opId, target)) return
openMic(mode, opId, target)
.then((rec) => {
if (voice.activeOpId !== opId || voice.phase !== 'recording' || voice.disposed) {
teardown(rec)
return
}
rec.opId = opId
rec.target = target
voice.rec = rec
if (voice.handsFree && !rec.analyser) { stopHandsFree(t('micUnavailable')); return }
if (voice.handsFree) {
rec.recorder.addEventListener('error', () => { if (voice.rec === rec) stopHandsFree(t('recognitionError')) })
rec.stream.getTracks().forEach((track) => track.addEventListener('ended', () => { if (voice.rec === rec && !rec.closing) stopHandsFree(t('micUnavailable')) }))
}
voice.notify()
})
.catch((err) => {
if (voice.activeOpId !== opId) return
voice.set({ phase: 'error', error: String(err && err.message ? err.message : err), rec: null })
})
}).catch((err) => {
if (voice.activeOpId === opId) voice.set({ phase: 'error', error: String(err && err.message || err) })
})
}
// Hands-free is deliberately local to this composer lifetime; never persist mic consent.
function handsFreeSessionId() {
return (voice.session && (voice.session.sessionId || voice.session.id)) || voice.currentSessionId || ''
}
function handsFreeDraftIsEmpty() {
const input = voice.input
return !!input && typeof input.draft === 'string' && !input.draft.trim()
&& Array.isArray(input.attachmentIds) && input.attachmentIds.length === 0
&& (!input.phase || input.phase === 'plain')
}
function conversationBoundaryReady(boundary) {
return !!boundary && Number.isSafeInteger(boundary.lastTurn) && boundary.lastTurn >= 0 && (boundary.openTurnStartSeq === null || Number.isSafeInteger(boundary.openTurnStartSeq))
}
// Public Chat timeline fallback: use durable turn boundaries, never infer a turn
// from running=false. The latest location can be partial (end without start).
function conversationTimelineBoundary(timeline, session) {
if (!timeline || !Array.isArray(timeline.turnOrder) || !timeline.turns || typeof timeline.turns.get !== 'function') return undefined
if (timeline.turnOrder.length === 0) {
// The Chat builder also publishes an empty placeholder while history loads.
if (!session || session.openState !== 'open' || session.blank !== true) return undefined
return { lastTurn: 0, openTurnStartSeq: null }
}
const number = timeline.turnOrder[timeline.turnOrder.length - 1]
if (!Number.isSafeInteger(number) || number < 0) return undefined
const turn = timeline.turns.get(number)
if (!turn || turn.turn !== number) return undefined
const validEvent = (event, type) => !!event && event.type === type && Number.isSafeInteger(event.seq) && event.seq >= 0 && event.data && event.data.turn === number
if (turn.status === 'closed' && validEvent(turn.end, 'turn/end')) {
if (turn.start && (!validEvent(turn.start, 'turn/start') || turn.start.seq >= turn.end.seq)) return undefined
return { lastTurn: number, openTurnStartSeq: null }
}
if (turn.status === 'open' && !turn.end && validEvent(turn.start, 'turn/start')) return { lastTurn: number, openTurnStartSeq: turn.start.seq }
return undefined
}
function selectConversationBoundary(primary, timeline, session) {
const chat = conversationTimelineBoundary(timeline, session)
const projection = conversationBoundaryReady(primary) ? primary : undefined
if (!projection) return { boundary: chat, source: chat ? 'timeline' : undefined }
if (!chat) return { boundary: projection, source: 'projection' }
// Both carry the same durable turn numbers. Prefer fresher facts; an open
// boundary wins a tie so asynchronous feed publication cannot reopen the mic.
const useChat = chat.lastTurn > projection.lastTurn || (chat.lastTurn === projection.lastTurn && chat.openTurnStartSeq !== null && projection.openTurnStartSeq === null)
return useChat ? { boundary: chat, source: 'timeline' } : { boundary: projection, source: 'projection' }
}
function conversationUnavailableReason(boundary, session, input, turnFeedSupported) {
if (turnFeedSupported === false) return 'NO_TURN_HOOK'
if (!boundary) return 'NO_TURN_DATA'
if (!conversationBoundaryReady(boundary)) return 'INVALID_TURN_DATA'
if (!session) return 'NO_SESSION'
if (typeof session.running !== 'boolean') return 'NO_RUNNING_STATE'
if (!['cold', 'loading', 'open', 'error'].includes(session.openState)) return 'NO_OPEN_STATE'
if (!input || !Array.isArray(input.queue)) return 'NO_INPUT_QUEUE'
return 'STATE_UNAVAILABLE'
}
function conversationUnavailableMessage() {
return t('handsFreeUnavailable') + ' [' + conversationUnavailableReason(voice.turnBoundary, voice.session, voice.input, voice.turnFeedSupported) + ']'
}
function conversationErrorStamp(session) {
return JSON.stringify([session && session.promptError || null, session && session.lastAgentError || null])
}
function createConversationTurnGate(boundary, session) {
if (!conversationBoundaryReady(boundary)) return null
return { baselineTurn: boundary.lastTurn, errorStamp: conversationErrorStamp(session) }
}
function conversationTurnState(gate, boundary, session) {
if (!conversationBoundaryReady(boundary) || !session || typeof session.running !== 'boolean' || !['cold', 'loading', 'open', 'error'].includes(session.openState)) return 'unavailable'
if (session.removed || session.openState === 'error') return 'error'
if (gate && conversationErrorStamp(session) !== gate.errorStamp && (session.promptError || session.lastAgentError)) return 'error'
if (boundary.openTurnStartSeq !== null || session.running || session.awaitingFirstTurn || session.openState === 'loading' || session.openState === 'cold' || session.loadingOlder || session.historyLoadStatus === 'loading' || session.historyLoadStatus === 'pendingConsumption') return 'waiting'
if (gate && boundary.lastTurn <= gate.baselineTurn) return 'waiting'
return 'complete'
}
function conversationHasQueuedWork() {
return !Array.isArray(voice.input && voice.input.queue) || voice.input.queue.length > 0 || !!voice.pendingInteraction || !!(voice.session && Array.isArray(voice.session.pendingSubmissions) && voice.session.pendingSubmissions.length)
}
function handsFreePauseReason(hf = voice.handsFree) {
if (!hf) return ''
if (hf.blurred || hf.hidden) return 'handsFreePaused'
if (voice.isTtsSpeaking) return 'handsFreePlayback'
return ''
}
function discardHandsFreeCapture() {
voice.activeOpId = (voice.activeOpId || 0) + 1
const hf = voice.handsFree
if (hf && hf.transcribeController) { hf.transcribeController.abort(); hf.transcribeController = null }
const rec = voice.rec
voice.rec = null
if (rec) {
rec.cancelled = true; rec.closing = true
try { if (rec.recorder && rec.recorder.state !== 'inactive') rec.recorder.stop() } catch (_) { 0 }
teardown(rec)
}
voice.pending = null
voice.caption = ''; voice.interimTranscript = ''; voice.levels = []
}
function setHandsFreePause(reason, paused) {
const hf = voice.handsFree
if (!hf) return
if (reason === 'blur') hf.blurred = !!paused
if (reason === 'hidden') hf.hidden = !!paused
reconcileHandsFree()
}
function reconcileHandsFree() {
const hf = voice.handsFree
if (!hf) return
if (voice.disposed || handsFreeSessionId() !== hf.sessionId || voice.inputActions !== hf.actions) { stopHandsFree(t('handsFreeSession')); return }
if (voice.phase === 'error') { stopHandsFree(voice.error); return }
if (!hf.submitting && !handsFreeDraftIsEmpty()) { stopHandsFree(t('handsFreeDraft')); return }
const turnState = conversationTurnState(hf.turnGate, voice.turnBoundary, voice.session)
if (turnState === 'unavailable') { stopHandsFree(conversationUnavailableMessage()); return }
if (turnState === 'error') { stopHandsFree(t('handsFreeTurnFailed')); return }
const pause = handsFreePauseReason(hf)
const queueWaiting = conversationHasQueuedWork()
// Submission has its own awaited admission checks. Pause never invalidates an already sent turn.
if (hf.submitting) {
if (hf.awaitingAdmission) {
const phase = pause ? 'paused' : ((turnState === 'waiting' || queueWaiting) ? 'waiting' : 'processing')
if (voice.phase !== phase || hf.pauseLabel !== pause) { hf.pauseLabel = pause; voice.set({ phase }) }
}
return
}
if (turnState === 'waiting' || queueWaiting || pause) {
if (voice.phase === 'recording' || voice.phase === 'finishing' || voice.phase === 'processing' || voice.phase === 'pending') discardHandsFreeCapture()
const phase = pause ? 'paused' : 'waiting'
if (voice.phase !== phase || hf.pauseLabel !== pause) { hf.pauseLabel = pause; voice.set({ phase, pending: null }) }
return
}
hf.turnGate = null
hf.pauseLabel = ''
if (voice.phase === 'waiting' || voice.phase === 'paused' || voice.phase === 'idle') {
voice.set({ phase: 'idle', error: '' })
startRecording('message')
}
}
function rotateSilentRecording(rec) {
if (!voice.handsFree || !rec || rec.rotating || rec.closing || rec.hadSpeech) return
rec.rotating = true
const opId = rec.opId
const stopped = waitStop(rec.recorder)
try { if (rec.recorder && rec.recorder.state !== 'inactive') rec.recorder.stop() } catch (error) { stopHandsFree(String(error && error.message || error)); return }
stopped.then(() => {
if (!voice.handsFree || voice.rec !== rec || rec.cancelled || rec.closing || voice.activeOpId !== opId) return
rec.chunks = []; rec.handsFreeElapsed = 0; rec.silenceMs = 0; rec.hadSpeech = false
try { rec.recorder.start(); rec.rotating = false } catch (error) { stopHandsFree(String(error && error.message || error)) }
})
}
function resumeHandsFreeAfterEmpty() {
if (!voice.handsFree) return
voice.set({ phase: 'idle', pending: null })
reconcileHandsFree()
}
function stopHandsFree(error = '') {
const hf = voice.handsFree
if (!hf) return
voice.handsFree = null
clearInterval(hf.timer)
if (hf.cancelWait) hf.cancelWait()
if (hf.transcribeController) hf.transcribeController.abort()
if (typeof window !== 'undefined') window.removeEventListener('keydown', hf.onKey, true)
cancelCurrent({ skipFocus: true })
voice.set({ phase: error ? 'error' : 'idle', error, pending: null })
}
function isVoiceComposerOwner(actions) {
const active = voice.phase !== 'idle' && voice.phase !== 'error'
const owner = voice.handsFree ? voice.handsFree.actions : (active && voice._activeTarget && voice._activeTarget.actions)
return !owner || owner === actions
}
function updateVoiceComposer(props) {
if (!isVoiceComposerOwner(props.inputActions)) return false
const target = voice._activeTarget
const nextSessionId = (props.session && (props.session.sessionId || props.session.id)) || ''
if (!voice.handsFree && target && target.actions === props.inputActions && voice.phase !== 'idle' && voice.phase !== 'error' && target.sessionId !== nextSessionId) cancelCurrent({ skipFocus: true })
voice.inputActions = props.inputActions
voice.input = props.input
voice.session = props.session
const hf = voice.handsFree
const pinnedSource = hf && hf.boundarySource
const nextBoundary = pinnedSource === 'timeline' ? props.timelineTurnBoundary : pinnedSource === 'projection' ? props.primaryTurnBoundary : props.turnBoundary
if (hf && pinnedSource && nextSessionId === hf.sessionId && conversationBoundaryReady(nextBoundary)) {
// History replacement must not lower the next-send baseline: restoring an old
// already-closed turn could otherwise look like completion of a new submission.
if (nextBoundary.lastTurn < hf.lastSeenTurn) { stopHandsFree(t('handsFreeHistoryChanged') + ' [TURN_HISTORY_CHANGED]'); return false }
hf.lastSeenTurn = nextBoundary.lastTurn
}
voice.turnBoundary = nextBoundary
voice.turnBoundarySource = pinnedSource || props.turnBoundarySource
voice.turnFeedSupported = props.turnFeedSupported
voice.pendingInteraction = props.pendingInteraction
voice.currentSessionId = (props.session && (props.session.sessionId || props.session.id)) || ''
return true
}
function startHandsFree(owner) {
if (voice.handsFree || (voice.phase !== 'idle' && voice.phase !== 'error') || voice.disposed) return
if (owner) updateVoiceComposer(owner)
if (!conversationBoundaryReady(voice.turnBoundary)) { voice.set({ phase: 'error', error: conversationUnavailableMessage() }); return }
if (!handsFreeDraftIsEmpty()) { voice.set({ phase: 'error', error: t('handsFreeDraft') }); return }
if (!handsFreeSessionId() || !voice.inputActions || typeof voice.inputActions.submit !== 'function' || typeof voice.inputActions.setDraft !== 'function') {
voice.set({ phase: 'error', error: t('composerUnavailable') }); return
}
const hf = { sessionId: handsFreeSessionId(), actions: voice.inputActions, boundarySource: voice.turnBoundarySource, lastSeenTurn: voice.turnBoundary.lastTurn, timer: null, submitting: false, turnGate: null, blurred: false, hidden: typeof document !== 'undefined' && document.hidden === true }
if (!Array.isArray(voice.input.queue)) { voice.set({ phase: 'error', error: conversationUnavailableMessage() }); return }
// A corrected/matured feed can be retried directly after a prior startup error.
voice.set({ phase: 'idle', error: '' })
hf.onKey = (e) => { if (e.key === 'Escape') { e.preventDefault(); stopHandsFree() } }
voice.handsFree = hf
if (typeof window !== 'undefined') window.addEventListener('keydown', hf.onKey, true)
hf.timer = setInterval(() => { if (voice.handsFree === hf) reconcileHandsFree() }, 100)
reconcileHandsFree()
}
function isRecordingSpeech(rec, level) {
// Hands-free uses the existing noise-gated amplitude level, not the upstream
// Silero approximation. Keep the legacy detector selection for other modes.
if (voice.handsFree) return level > 0.06
return rec.sileroSpeech !== null && rec.sileroSpeech !== undefined ? rec.sileroSpeech : (level > 0.06)
}
function tickHandsFree(rec, effectiveVad, tick = 50) {
if (!voice.handsFree || !rec || rec.mode !== 'message' || rec.closing || rec.rotating) return false
rec.handsFreeElapsed = (rec.handsFreeElapsed || 0) + tick
if (!rec.hadSpeech && rec.handsFreeElapsed >= 15000) { rotateSilentRecording(rec); return true }
if (rec.hadSpeech && (rec.silenceMs >= effectiveVad || rec.handsFreeElapsed >= 60000)) { stopCurrent(); return true }
return false
}
function queueHandsFreePreview(text, target) {
if (!voice.handsFree) return false
if (handsFreeSessionId() !== voice.handsFree.sessionId || !handsFreeDraftIsEmpty()) {
stopHandsFree(t('handsFreeDraft')); return true
}
if (!String(text || '').trim()) { resumeHandsFreeAfterEmpty(); return true }
const pending = initPendingPreview(text.trim(), target, { autoSendMs: voice.settings.autoSendMs })
pending.handsFree = true
// Unlike push-to-talk, do not touch the user's composer before the send gate.
voice.set({ phase: 'pending', pending })
return true
}
function waitForHandsFree(hf, predicate, timeoutMs) {
return new Promise((resolve, reject) => {
let timer
const done = (error) => {
clearInterval(timer)
hf.cancelWait = null
if (error) reject(error); else resolve()
}
const deadline = timeoutMs > 0 ? Date.now() + timeoutMs : Infinity
hf.cancelWait = () => done(new Error(t('handsFreeStop')))
const check = () => {
if (voice.handsFree !== hf || voice.disposed || handsFreeSessionId() !== hf.sessionId) return done(new Error(t('handsFreeSession')))
if (predicate()) return done()
if (Date.now() >= deadline) done(new Error(t('handsFreeSendFailed')))
}
timer = setInterval(check, 50)
check()
})
}
async function submitHandsFreePending(pending) {
const hf = voice.handsFree
if (!hf || hf.submitting || voice.pending !== pending) return
if (handsFreeSessionId() !== hf.sessionId || !handsFreeDraftIsEmpty()) { stopHandsFree(t('handsFreeDraft')); return }
const text = String(pending.activeText || '').trim()
if (!text) { resumeHandsFreeAfterEmpty(); return }
const actions = voice.inputActions
hf.submitting = true
hf.awaitingAdmission = true
voice.set({ pending: null, phase: 'processing' })
try {
// Both operations use the live composer, only after checking session and empty draft.
actions.setDraft(text)
// Host submit returns void: observe the live InputState, not a made-up promise ACK.
await waitForHandsFree(hf, () => voice.input && voice.input.draft === text, 2000)
// A focused, silent assistant turn and empty inbox are required before admission.
reconcileHandsFree()
await waitForHandsFree(hf, () => !handsFreePauseReason(hf) && !conversationHasQueuedWork() && conversationTurnState(null, voice.turnBoundary, voice.session) === 'complete', 0)
// Even an already-resolved wait yields: Esc/session/draft changes can win that gap.
if (voice.handsFree !== hf || voice.disposed) return
if (handsFreeSessionId() !== hf.sessionId) { stopHandsFree(t('handsFreeSession')); return }
if (!voice.input || voice.input.draft !== text) { stopHandsFree(t('handsFreeDraft')); return }
if (!Array.isArray(voice.input.attachmentIds) || voice.input.attachmentIds.length || (voice.input.phase && voice.input.phase !== 'plain')) throw new Error(t('handsFreeDraft'))
if (handsFreePauseReason(hf) || conversationHasQueuedWork() || conversationTurnState(null, voice.turnBoundary, voice.session) !== 'complete') throw new Error(t('handsFreeWaiting'))
hf.turnGate = createConversationTurnGate(voice.turnBoundary, voice.session)
hf.awaitingAdmission = false
voice.set({ phase: 'processing' })
const result = actions.submit()
if (result === false) throw new Error(t('handsFreeSendFailed'))
// Host ACK clears draft/attachments transactionally. Failure leaves the text intact.
await waitForHandsFree(hf, handsFreeDraftIsEmpty, 30000)
if (voice.handsFree !== hf || voice.disposed) return
if (handsFreeSessionId() !== hf.sessionId) { stopHandsFree(t('handsFreeSession')); return }
if (!handsFreeDraftIsEmpty()) { stopHandsFree(t('handsFreeDraft')); return }
hf.submitting = false
// ACK is only inbox admission. Persistent turnBoundary catches even batched fast turns.
voice.set({ phase: 'waiting' })
reconcileHandsFree()
} catch (err) {
if (voice.handsFree === hf) stopHandsFree(String(err && err.message || err))
}
}
function startDictation(owner) {
if (owner && !updateVoiceComposer(owner)) return
startRecording('dictation')
}
function releaseVoiceComposer(actions) {
if (voice.handsFree && voice.handsFree.actions === actions) { stopHandsFree(); return }
if (!voice.handsFree && voice._activeTarget && voice._activeTarget.actions === actions && voice.phase !== 'idle' && voice.phase !== 'error') cancelCurrent({ skipFocus: true })
}
function startMessage() { startRecording('message') }
function cancelCurrent(options = {}) {
if (voice.handsFree) { stopHandsFree(); return }
playAudioCue('stop', { enabled: voice.settings?.audioFeedback !== false })
voice.activeOpId = (voice.activeOpId || 0) + 1
announceVoice('end')
if (!options.skipFocus) focusComposer()
if (voice.browser) {
voice.browser.abort()
voice.browser = null
voice.browserFinals = null
voice.set({ phase: 'idle', error: '', caption: '' })
return
}
const rec = voice.rec
voice.pending = null
if (!rec) { voice.set({ phase: 'idle', error: '' }); return }
rec.cancelled = true
rec.closing = true
const stopped = waitStop(rec.recorder)
try {
if (rec.recorder && rec.recorder.state !== 'inactive') rec.recorder.stop()
} catch (e) { 0 }
teardown(rec)
if (voice.rec === rec) voice.rec = null
voice.set({ phase: 'idle', error: '' })
stopped.then(() => teardown(rec))
}
function stopCurrent() {
playAudioCue('stop', { enabled: voice.settings?.audioFeedback !== false })
announceVoice('end')
focusComposer()
if (voice.browser) {
const opId = voice.activeOpId
const mode = voice.mode
const b = voice.browser
const target = voice._activeTarget
voice.browser = null
voice.caption = ''
voice.set({ phase: 'finishing' })
Promise.resolve(b.stop()).then(() => {
if (voice.disposed || voice.activeOpId !== opId) return
const said = (voice.browserFinals || []).join(' ').trim()
voice.browserFinals = null
if (!said) { voice.set({ phase: 'idle' }); return }
if (mode === 'message') {
const ok = appendDraft(said, target)
if (ok !== false) {
const usePreview = voice.settings.editablePreview !== false
const autoMs = Number(voice.settings.autoSendMs) || 4000
const pendingState = usePreview
? initPendingPreview(said, target, { autoSendMs: autoMs })
: { text: said, target, totalMs: autoMs, leftMs: autoMs }
voice.set({ phase: 'pending', pending: pendingState })
} else {
voice.set({ phase: 'idle' })
}
} else {
voice.set({ phase: 'idle' })
}
})
return
}
const rec = voice.rec
if (!rec || rec.closing) return
rec.closing = true
const opId = rec.opId || voice.activeOpId
const target = rec.target || voice._activeTarget
const mode = rec.mode
const stopped = waitStop(rec.recorder)
try {
if (rec.recorder && rec.recorder.state !== 'inactive') rec.recorder.stop()
} catch (e) { 0 }
stopped.then(async () => {
if (voice.disposed || rec.cancelled || voice.activeOpId !== opId) {
teardown(rec)
if (voice.rec === rec) voice.rec = null
return
}
const blob = new Blob(rec.chunks, { type: rec.mime })
teardown(rec)
if (voice.rec === rec) voice.rec = null
if (voice.disposed || rec.cancelled || voice.activeOpId !== opId) return
if (blob.size < (mode === 'dictation' ? 600 : 1200)) {
if (mode === 'dictation') { try { await dictationQueue } catch (_) { 0 } }
if (voice.handsFree) resumeHandsFreeAfterEmpty()
else voice.set({ phase: 'idle' })
return
}
if (voice.lastNote && voice.lastNote.url) {
try { URL.revokeObjectURL(voice.lastNote.url) } catch (e) { 0 }
}
let noteUrl = ''
try { noteUrl = URL.createObjectURL(blob) } catch (e) { 0 }
voice.lastNote = { blob, url: noteUrl, mime: rec.mime, text: '' }
voice.set({ phase: 'processing' })
const q = { clipping: Boolean(rec.hasClipped), lowVolume: Boolean(rec.hasLowVolume) }
rec.hasClipped = false
rec.hasLowVolume = false
const processTail = async () => {
if (voice.disposed || rec.cancelled || voice.activeOpId !== opId || voice.phase === 'idle') return
try {
const out = await sendAudio(blob, rec.mime, mode, q)
if (voice.disposed || rec.cancelled || voice.activeOpId !== opId || voice.phase === 'idle') return
if (voice.handsFree && mode === 'message') {
if (out.command || out.action) { stopHandsFree(t('handsFreeCommands')); return }
queueHandsFreePreview(out.text, target)
return
}
if (out.command) { runSessionCommand(out.command); return }
const text = out.text || ''
const action = out.action || null
if (!text && !action) {
if (mode === 'message') voice.set({ phase: 'error', error: t('nothingHeard') })
else voice.set({ phase: 'idle' })
return
}
if (voice.settings.structuredPromptVoice !== false && text) {
const promptInfo = findActiveStructuredPrompt()
if (promptInfo && submitToStructuredPrompt(text, promptInfo)) {
voice.set({ phase: 'idle' })
return
}
}
if (action === 'send' || action === 'clear' || action === 'newline' || action === 'undo_chunk' || action === 'stop_generation' || action === 'switch_dictation' || action === 'switch_voice_note' || action === 'new_chat') {
executeVoiceAction(action, text, target)
return
}
if (action === 'cancel') { cancelCurrent(); return }
const ok = appendDraft(text, target)
if (voice.lastNote) voice.lastNote.text = text
if (mode === 'message') {
if (ok !== false) {
const usePreview = voice.settings.editablePreview !== false
let polishedText = text
if (usePreview && voice.settings.polishSend) {
try {
const pRes = await apiClient.polish({ text })
const pData = await pRes.json()
if (pData && pData.text) polishedText = pData.text
} catch (_) { 0 }
}
const autoMs = Number(voice.settings.autoSendMs) || 4000
const pendingState = usePreview
? initPendingPreview(text, target, { autoSendMs: autoMs, polishedText, audioUrl: noteUrl, polishSend: voice.settings.polishSend })
: { text, target, totalMs: autoMs, leftMs: autoMs, audioUrl: noteUrl }
voice.set({ phase: 'pending', pending: pendingState })
} else {
voice.set({ phase: 'idle' })
}
} else {
voice.set({ phase: 'idle' })
}
} catch (e) {
if (voice.disposed || rec.cancelled || voice.activeOpId !== opId || voice.phase === 'idle') return
voice.set({ phase: 'error', error: String(e && e.message ? e.message : e) })
}
}
if (mode === 'dictation') {
dictationQueue = dictationQueue.then(processTail)
try { await dictationQueue } catch (_) { 0 }
} else {
await processTail()
}
})
}
function submitPending() {
submitPendingPreview(voice)
}
function cancelPending() {
cancelPendingPreview(voice)
}
function runSessionCommand(cmd) {
if (cmd === 'send') submitPending()
else if (cmd === 'cancel') cancelCurrent()
else if (cmd === 'stop') cancelCurrent()
else if (cmd === 'continue') {  }
else if (cmd === 'undo_chunk') { executeVoiceAction('undo_chunk') }
}
function keepPending() {
keepPendingPreview(voice)
}
function composerControlVisibility(settings = {}, activeHandsFree = false) {
return { dictation: settings.showDictationButton !== false, message: settings.showMessageButton === true, mode: settings.showDictationModeButton === true, handsFree: !activeHandsFree && settings.showHandsFreeButton !== false, stopHandsFree: !!activeHandsFree }
}
function VoiceButtons(props) {
const v = useVoice()
const ownsComposer = updateVoiceComposer(props)
if (!ownsComposer) return null
const controls = composerControlVisibility(voice.settings, !!voice.handsFree)
if (controls.stopHandsFree) return h(React.Fragment, null,
controls.dictation ? h('button', { type: 'button', className: 'dvo-btn', disabled: true, 'aria-label': t('dictationBtn'), title: t('dictationBtn') }, micIcon()) : null,
h('button', { type: 'button', className: 'dvo-btn dvo-btn-active', 'aria-pressed': true, 'aria-label': t('handsFreeStop'), title: t('handsFreeStop'), onClick: () => stopHandsFree() }, stopIcon()))
if (v.phase !== 'idle' && v.phase !== 'error' && !hold.armed) return null
const err = v.phase === 'error'
const hk = voice.hotkey ? ' (' + voice.hotkey + ')' : ''
const curMode = voice.selectedDictationMode || (voice.settings && voice.settings.dictationMode) || 'clean'
const showDictationMode = controls.mode
const showDictation = controls.dictation
const showMessage = controls.message
const hasLastNote = !!(voice.lastNote && voice.lastNote.url)
// Hiding the start control never hides the active session's stop control above.
const showHandsFree = controls.handsFree
return h(React.Fragment, null,
showDictationMode ? h('button', {
type: 'button',
className: 'dvo-mode-pill-btn',
title: t('dictationModeTitle') + ': ' + getDictationModeLabel(curMode, t),
'aria-label': t('dictationModeTitle') + ': ' + getDictationModeLabel(curMode, t),
onClick: cycleDictationMode,
}, getDictationModeLabel(curMode, t)) : null,
showMessage ? h('button', {
type: 'button', className: 'dvo-btn' + (hold.armed ? ' dvo-btn-active' : ''), 'data-err': err ? '1' : '0',
title: err ? v.error : (t('messageBtn') + hk),
'aria-label': err ? v.error : (t('messageBtn') + hk),
onPointerDown: (e) => { e.preventDefault(); if (updateVoiceComposer(props)) beginHold('message', e) },
onPointerUp: () => endHold(false),
onPointerCancel: () => endHold(true),
onPointerLeave: (e) => {
if (hold.armed && (!e.target || typeof e.target.hasPointerCapture !== 'function' || !e.target.hasPointerCapture(e.pointerId))) {
endHold(true)
}
},
}, waveIcon()) : null,
showMessage && hasLastNote
? h('button', {
type: 'button', className: 'dvo-btn' + (voice.showPlayer ? ' dvo-btn-active' : ''),
title: t('listenBack'),
'aria-label': t('listenBack'),
onClick: () => voice.set({ showPlayer: !voice.showPlayer }),
}, playIcon())
: null,
showDictation ? h('button', { type: 'button', className: 'dvo-btn', 'data-err': err ? '1' : '0', title: err ? v.error : t('dictationBtn'), 'aria-label': err ? v.error : t('dictationBtn'), onClick: () => startDictation(props) }, micIcon()) : null,
showHandsFree ? h('button', { type: 'button', className: 'dvo-btn', 'aria-pressed': false, 'aria-label': t('handsFreeStart'), title: t('handsFreeStart'), onClick: () => startHandsFree(props) }, waveIcon()) : null,
)
}
const KEY_LABELS = {
Control: 'Ctrl', Alt: 'Alt', Shift: 'Shift', Meta: 'Win',
Escape: 'Esc',
}
function keyLabel(name) {
if (!name) return t('keyUnset')
if (typeof name === 'string' && name.includes('+')) {
return name.split('+').map((p) => keyLabel(p)).join(' + ')
}
if (name === 'Space') return t('keySpace')
if (KEY_LABELS[name]) return KEY_LABELS[name]
return String(name).replace(/^Key/, '').replace(/^Digit/, '')
}
function keyFromEvent(event) {
if (!event) return ''
const modifiers = []
if (event.ctrlKey && event.key !== 'Control') modifiers.push('Control')
if (event.altKey && event.key !== 'Alt') modifiers.push('Alt')
if (event.shiftKey && event.key !== 'Shift') modifiers.push('Shift')
if (event.metaKey && event.key !== 'Meta') modifiers.push('Meta')
const main = ['Control', 'Alt', 'Shift', 'Meta'].includes(event.key)
? event.key
: (event.code || event.key || '')
if (modifiers.length > 0 && !['Control', 'Alt', 'Shift', 'Meta'].includes(main)) {
return modifiers.concat(main).join('+')
}
return main
}
function hotkeyMatches(event, name) {
if (!event || !name) return false
if (typeof name === 'string' && name.includes('+')) {
const parts = name.split('+')
const main = parts[parts.length - 1]
const needCtrl = parts.includes('Control')
const needAlt = parts.includes('Alt')
const needShift = parts.includes('Shift')
const needMeta = parts.includes('Meta')
if (needCtrl && !event.ctrlKey) return false
if (needAlt && !event.altKey) return false
if (needShift && !event.shiftKey) return false
if (needMeta && !event.metaKey) return false
return event.code === main || event.key === main
}
if (name === 'Control') return event.key === 'Control'
if (name === 'Alt') return event.key === 'Alt'
if (name === 'Shift') return event.key === 'Shift'
if (name === 'Meta') return event.key === 'Meta'
return event.code === name || event.key === name
}
function isAllowedInEditable(name) {
if (!name) return false
if (['Control', 'Alt', 'Shift', 'Meta'].includes(name)) return true
if (/^F\d{1,2}$/.test(name)) return true
if (typeof name === 'string' && name.includes('+')) return true
if (['Tab', 'Pause', 'ScrollLock', 'Insert'].includes(name)) return true
return false
}
function isHotkeyRelease(event, name) {
if (!event || !name) return false
if (typeof name === 'string' && name.includes('+')) {
const parts = name.split('+')
if (event.code === parts[parts.length - 1] || event.key === parts[parts.length - 1]) return true
for (let i = 0; i < parts.length - 1; i++) {
if (event.key === parts[i] || event.code === parts[i]) return true
}
return false
}
return event.code === name || event.key === name
}
const HOLD_THRESHOLD_MS = 350
const hold = { active: false, mode: null, startedAt: 0, armed: false }
let activePointerCleanup = null
function beginHold(mode, pointerEvent) {
if (voice.handsFree) return
if (hold.armed || (voice.phase !== 'idle' && voice.phase !== 'error')) {
if (voice.phase === 'recording' || voice.phase === 'pending') {
stopCurrent()
}
return
}
hold.armed = true
hold.mode = mode
hold.startedAt = Date.now()
hold.active = false
if (pointerEvent?.target?.setPointerCapture && pointerEvent.pointerId !== undefined) {
try { pointerEvent.target.setPointerCapture(pointerEvent.pointerId) } catch (e) { 0 }
}
if (typeof window !== 'undefined') {
if (activePointerCleanup) { try { activePointerCleanup() } catch (e) { 0 } }
const onUp = () => endHold(false)
const onCancel = () => endHold(true)
window.addEventListener('pointerup', onUp, { once: true })
window.addEventListener('pointercancel', onCancel, { once: true })
activePointerCleanup = () => {
window.removeEventListener('pointerup', onUp)
window.removeEventListener('pointercancel', onCancel)
activePointerCleanup = null
}
}
voice.holding = false
startRecording(mode)
setTimeout(() => {
if (hold.armed) {
hold.active = true
voice.holding = true
voice.notify()
}
}, HOLD_THRESHOLD_MS)
}
function endHold(cancelled) {
if (activePointerCleanup) { try { activePointerCleanup() } catch (e) { 0 } }
if (!hold.armed) return
const wasHeld = hold.active
hold.armed = false
voice.holding = false
voice.notify()
if (cancelled) {
cancelCurrent()
} else if (wasHeld) {
stopCurrent()
}
}
let activeHotkeyCleanup = null
function clearGlobalHotkey() {
if (typeof activeHotkeyCleanup === 'function') {
try { activeHotkeyCleanup() } catch (_) { 0 }
activeHotkeyCleanup = null
}
if (typeof window !== 'undefined' && typeof window.__dsh_voice_hotkey_cleanup === 'function') {
try { window.__dsh_voice_hotkey_cleanup() } catch (_) { 0 }
window.__dsh_voice_hotkey_cleanup = null
}
}
voice.clearGlobalHotkey = clearGlobalHotkey
function installHotkey(ctx, keyName, mode) {
clearGlobalHotkey()
if (typeof document === 'undefined' || !keyName) return () => {}
const down = (event) => {
if (event.repeat || voice.capturingShortcut) return
if (event.shiftKey && (event.key === 'Tab' || event.code === 'Tab') && (voice.phase === 'recording' || voice.phase === 'pending')) {
event.preventDefault()
event.stopPropagation()
undoLastInsert().then((msg) => {
voice.lastUndoNotice = msg
voice.notify()
setTimeout(() => {
if (voice.lastUndoNotice === msg) {
voice.lastUndoNotice = ''
voice.notify()
}
}, 3500)
})
return
}
const target = event.target
const isEditable = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable || (typeof target.getAttribute === 'function' && target.getAttribute('contenteditable') === 'true'))
if (isEditable && !isAllowedInEditable(keyName)) return
if (hotkeyMatches(event, keyName)) {
event.preventDefault()
event.stopPropagation()
beginHold(mode)
}
}
const up = (event) => {
if (hold.armed && isHotkeyRelease(event, keyName)) {
event.preventDefault()
endHold(false)
} else if (event.key === 'Escape' && hold.armed) {
event.preventDefault()
endHold(true)
}
}
const blur = () => { if (hold.armed) endHold(true) }
document.addEventListener('keydown', down, true)
document.addEventListener('keyup', up, true)
window.addEventListener('blur', blur)
const cleanup = () => {
document.removeEventListener('keydown', down, true)
document.removeEventListener('keyup', up, true)
window.removeEventListener('blur', blur)
if (activeHotkeyCleanup === cleanup) activeHotkeyCleanup = null
if (typeof window !== 'undefined' && window.__dsh_voice_hotkey_cleanup === cleanup) {
window.__dsh_voice_hotkey_cleanup = null
}
}
activeHotkeyCleanup = cleanup
if (typeof window !== 'undefined') {
window.__dsh_voice_hotkey_cleanup = cleanup
}
return cleanup
}
function initPendingPreview(text, target, options = {}) {
const autoMs = Number(options.autoSendMs) || 4000
const polishedText = options.polishedText || text
const isPolished = options.polishSend && polishedText && polishedText !== text
const initialDraft = (target && typeof target.initialDraft === 'string')
? target.initialDraft
: ((target && target.input && typeof target.input.draft === 'string') ? target.input.draft : '')
const sessionId = (target && target.sessionId) || ''
return {
text,
rawText: text,
polishedText,
activeText: isPolished ? polishedText : text,
selectedTab: isPolished ? 'polished' : 'raw',
isEditing: false,
target,
sessionId,
initialDraft,
totalMs: autoMs,
leftMs: autoMs,
paused: false,
audioUrl: options.audioUrl || '',
sessionMismatch: false,
}
}
function cancelPendingPreview(voice) {
if (voice.handsFree) { stopHandsFree(); return }
const pending = voice.pending
if (!pending) {
voice.set({ phase: 'idle' })
return
}
const target = pending.target || voice._activeTarget
const actions = (target && target.actions) || voice.inputActions
if (pending.rawText !== undefined && pending.initialDraft !== undefined) {
if (actions && typeof actions.setDraft === 'function') {
try { actions.setDraft(pending.initialDraft) } catch (_) { 0 }
}
}
voice.pending = null
voice.set({ phase: 'idle' })
}
function keepPendingPreview(voice) {
if (voice.handsFree) { stopHandsFree(); return }
const pending = voice.pending
if (!pending) {
voice.set({ phase: 'idle' })
return
}
const target = pending.target || voice._activeTarget
const actions = (target && target.actions) || voice.inputActions
if (pending.rawText !== undefined) {
const initial = pending.initialDraft || ''
const textToInsert = pending.activeText || ''
const full = initial
? (initial.endsWith(' ') || initial.endsWith('\n') ? (initial + textToInsert) : (initial + ' ' + textToInsert))
: textToInsert
if (actions && typeof actions.setDraft === 'function') {
try { actions.setDraft(full) } catch (_) { 0 }
}
}
voice.pending = null
voice.set({ phase: 'idle' })
}
function submitPendingPreview(voice) {
const pending = voice.pending
if (pending && pending.handsFree) return submitHandsFreePending(pending)
if (!pending) return
const target = pending.target || voice._activeTarget
const actions = (target && target.actions) || voice.inputActions
const currentSessionId = (target && target.session && (target.session.sessionId || target.session.id))
|| (voice.session && (voice.session.sessionId || voice.session.id))
|| voice.currentSessionId || ''
if (pending.sessionId && currentSessionId && pending.sessionId !== currentSessionId) {
pending.sessionMismatch = true
pending.paused = true
voice.notify()
return
}
const textToSend = (pending.rawText !== undefined ? pending.activeText : pending.text) || ''
voice.pending = null
voice.set({ phase: 'idle' })
if (pending.rawText !== undefined) {
const initial = pending.initialDraft || ''
const full = initial
? (initial.endsWith(' ') || initial.endsWith('\n') ? (initial + textToSend) : (initial + ' ' + textToSend))
: textToSend
if (actions && typeof actions.setDraft === 'function') {
try { actions.setDraft(full) } catch (_) { 0 }
}
if (actions && typeof actions.submit === 'function') {
try { actions.submit() } catch (_) { 0 }
}
} else {
if (voice.settings.polishSend) {
apiClient.polish({ text: textToSend })
.then((res) => res.json())
.then((data) => {
const polished = (data && data.text) || textToSend
if (actions && typeof actions.setDraft === 'function') actions.setDraft(polished)
if (actions && typeof actions.submit === 'function') actions.submit()
})
.catch(() => {
if (actions && typeof actions.submit === 'function') actions.submit()
})
} else if (actions && typeof actions.submit === 'function') {
actions.submit()
}
}
}
function renderEditablePreviewPill(voice, v, isPlaying, setIsPlaying, audioRef) {
const p = voice.pending
const total = p.totalMs || Number(voice.settings.autoSendMs) || 4000
const leftMs = Math.max(0, p.leftMs || 0)
const left = Math.ceil(leftMs / 1000)
const frac = total > 0 ? Math.max(0, Math.min(1, leftMs / total)) : 0
const circ = 2 * Math.PI * 14
const off = circ * (1 - frac)
const hasPolish = p.polishedText && p.polishedText !== p.rawText
return h('div', { className: 'dvo-pill-preview', role: 'region', 'aria-label': t('editablePreview') },
h('div', { className: 'dvo-preview-header' },
h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
hasPolish
? h('div', { className: 'dvo-preview-tabs' },
h('button', {
type: 'button',
className: 'dvo-tab-btn' + (p.selectedTab === 'raw' ? ' dvo-tab-btn-active' : ''),
onClick: () => {
p.selectedTab = 'raw'
p.activeText = p.rawText
voice.notify()
},
}, t('rawText')),
h('button', {
type: 'button',
className: 'dvo-tab-btn' + (p.selectedTab === 'polished' ? ' dvo-tab-btn-active' : ''),
onClick: () => {
p.selectedTab = 'polished'
p.activeText = p.polishedText
voice.notify()
},
}, t('polishedText')),
)
: h('span', { className: 'dvo-count' }, t('rawText')),
p.audioUrl
? h('div', { className: 'dvo-audio-wrap' },
h('button', {
type: 'button', className: 'dvo-audio-play',
title: isPlaying ? t('pause') : t('play'),
'aria-label': isPlaying ? t('pause') : t('play'),
onClick: () => {
const el = audioRef.current
if (!el) return
if (el.paused) { el.play().catch(() => 0); setIsPlaying(true) }
else { el.pause(); setIsPlaying(false) }
},
}, isPlaying ? pauseIcon() : playIcon()),
h('audio', {
ref: audioRef, src: p.audioUrl,
onEnded: () => setIsPlaying(false),
onPause: () => setIsPlaying(false),
onPlay: () => setIsPlaying(true),
}),
h('span', { className: 'dvo-audio-time' }, t('listenBack')),
)
: null,
),
h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
(!p.paused && !p.isEditing && v.settings.autoSendVisualRing !== false)
? h('svg', { className: 'dvo-silence-ring', viewBox: '0 0 34 34' },
h('circle', { cx: 17, cy: 17, r: 14, className: 'dvo-ring-bg' }),
h('circle', {
cx: 17, cy: 17, r: 14, className: 'dvo-ring-fg',
strokeDasharray: `${circ} ${circ}`,
strokeDashoffset: off,
}),
)
: null,
h('span', { className: 'dvo-count' },
(p.paused || p.isEditing) ? '' : (left + t('secondsShort'))
),
h('button', {
type: 'button', className: 'dvo-pbtn', title: t('cancelPreview'),
'aria-label': t('cancelPreview'),
onClick: () => { cancelPending(); focusComposer() },
}, xIcon()),
),
),
h('div', { className: 'dvo-preview-body' },
p.isEditing
? h('input', {
type: 'text',
className: 'dvo-preview-input',
value: p.activeText,
autoFocus: true,
onChange: (e) => {
p.activeText = e.target.value
voice.notify()
},
onKeyDown: (e) => {
if (e.key === 'Enter' && !e.shiftKey) {
e.preventDefault()
submitPending()
}
},
})
: h('span', { className: 'dvo-preview-text' }, p.activeText),
!p.isEditing
? h('button', {
type: 'button', className: 'dvo-pbtn', title: t('editPreview'),
'aria-label': t('editPreview'),
onClick: () => {
p.isEditing = true
p.paused = true
voice.notify()
},
}, editIcon())
: null,
h('button', {
type: 'button', className: 'dvo-btn-send', title: t('sendNow'),
'aria-label': t('sendNow'),
onClick: () => { submitPending(); focusComposer() },
}, sendIcon()),
),
p.sessionMismatch
? h('div', { className: 'dvo-warn-banner' }, t('sessionMismatch'))
: null,
)
}
function clearDraft(target) {
const actions = (target || voice._activeTarget)?.actions || voice.inputActions
if (typeof actions?.setDraft === 'function') actions.setDraft('')
}
function executeVoiceAction(action, rawText, target) {
const activeTarget = target || voice._activeTarget
const acts = (activeTarget && activeTarget.actions) || voice.inputActions
if (action === 'send') {
const text = rawText.replace(/(^|[\s,.!?])(отправь|пошли|send)([\s,.!?]|$)/gi, '').trim()
if (text) appendDraft(text, activeTarget)
if (typeof acts?.submit === 'function') acts.submit()
voice.set({ phase: 'idle' })
} else if (action === 'clear') {
clearDraft(activeTarget)
voice.set({ phase: 'idle' })
} else if (action === 'stop_generation') {
if (acts?.stop) acts.stop()
else {
const btn = typeof document !== 'undefined' && document.querySelector('[data-action="stop"], [aria-label*="Stop"], button.dsw-stop-btn, .chat-stop-btn')
if (btn) btn.click()
}
voice.set({ phase: 'idle' })
} else if (action === 'switch_dictation') {
voice.activeMode = 'dictation'; voice.notify()
} else if (action === 'switch_voice_note') {
voice.activeMode = 'note'; voice.notify()
} else if (action === 'new_chat') {
const newBtn = typeof document !== 'undefined' && document.querySelector('[data-action="new-chat"], button.new-chat-btn, [aria-label*="New topic"], [aria-label*="Новый диалог"]')
if (newBtn) newBtn.click()
voice.set({ phase: 'idle' })
} else if (action === 'newline') {
const payload = rawText.replace(/(^|[\s,.!?])(с новой строки|новая строка|абзац|new line|paragraph)([\s,.!?]|$)/gi, '').trim()
appendDraft(payload, activeTarget)
voice.set({ phase: 'idle' })
} else if (action === 'undo_chunk') {
undoLastInsert().then((msg) => {
voice.lastUndoNotice = msg; voice.notify()
setTimeout(() => { if (voice.lastUndoNotice === msg) { voice.lastUndoNotice = ''; voice.notify() } }, 3500)
})
}
}
const DICTATION_MODES = ['clean', 'task', 'note', 'verbatim']
function getDictationModeLabel(m, t) {
const trans = t || moduleT
if (m === 'verbatim') return trans('modeVerbatim')
if (m === 'task') return trans('modeTask')
if (m === 'note') return trans('modeNote')
if (m === 'bug') return trans('modeBug')
return trans('modeClean')
}
function cycleDictationMode() {
const cur = voice.selectedDictationMode || (voice.settings && voice.settings.dictationMode) || 'clean'
const nextIdx = (DICTATION_MODES.indexOf(cur) + 1) % DICTATION_MODES.length
voice.selectedDictationMode = DICTATION_MODES[nextIdx]
voice.notify()
}
let _accentColorCache = { color: '', expires: 0 }
let _softColorCache = { color: '', expires: 0 }
function accentColor(fallback) {
const now = Date.now()
if (now < _accentColorCache.expires && _accentColorCache.color) return _accentColorCache.color
try {
const root = document.documentElement
const s = getComputedStyle(root)
const pick = s.getPropertyValue('--dsw-alias-state-info-primary').trim()
|| s.getPropertyValue('--dsw-alias-label-primary').trim()
if (pick) {
_accentColorCache = { color: pick, expires: now + 1000 }
return pick
}
} catch (noTheme) { 0 }
return fallback || voice.waveColor || 'currentColor'
}
function softColor(fallback) {
const now = Date.now()
if (now < _softColorCache.expires && _softColorCache.color) return _softColorCache.color
try {
const s = getComputedStyle(document.documentElement)
const pick = s.getPropertyValue('--dsw-alias-bg-layer-3').trim()
|| s.getPropertyValue('--dsw-alias-label-primary').trim()
if (pick) {
_softColorCache = { color: pick, expires: now + 1000 }
return pick
}
} catch (noTheme) { 0 }
return fallback || voice.waveColor || 'currentColor'
}
function drawLiquidWave(g, w, h, levels, color, time) {
const midY = h / 2
const curLevel = levels.length ? levels[levels.length - 1] : 0
const smoothLevel = Math.max(0.04, Math.min(1, curLevel * 1.6))
const layers = [
{ amp: smoothLevel * (h * 0.42), freq: 0.024, speed: 0.08, alpha: 0.45 },
{ amp: smoothLevel * (h * 0.36), freq: 0.038, speed: -0.06, alpha: 0.75 },
{ amp: smoothLevel * (h * 0.28), freq: 0.052, speed: 0.11, alpha: 0.95 },
]
for (let layerIdx = 0; layerIdx < layers.length; layerIdx++) {
const lyr = layers[layerIdx]
g.beginPath()
g.globalAlpha = lyr.alpha
const grad = g.createLinearGradient(0, 0, w, 0)
grad.addColorStop(0, color)
grad.addColorStop(0.5, accentColor(color))
grad.addColorStop(1, color)
g.strokeStyle = grad
g.lineWidth = layerIdx === 2 ? 2.5 : 1.5
g.moveTo(0, midY)
const step = 6
for (let x = 0; x <= w; x += step) {
const edgeDist = Math.min(x, w - x) / (w * 0.25)
const envelope = Math.min(1, Math.max(0, edgeDist))
const phase = time * lyr.speed + x * lyr.freq
const dy = Math.sin(phase) * lyr.amp * envelope + Math.cos(phase * 0.5) * (lyr.amp * 0.35) * envelope
g.lineTo(x, midY + dy)
}
g.stroke()
}
g.globalAlpha = 1
}
function drawDynamicOrb(g, w, h, levels, color, time) {
const cx = w / 2
const cy = h / 2
const curLevel = levels.length ? levels[levels.length - 1] : 0
const smoothLevel = Math.max(0.05, Math.min(1, curLevel * 2.0))
g.beginPath()
g.globalAlpha = 0.25
g.strokeStyle = color
g.lineWidth = 1
g.moveTo(10, cy)
g.lineTo(cx - 35, cy)
g.moveTo(cx + 35, cy)
g.lineTo(w - 10, cy)
g.stroke()
const rRing = 14 + smoothLevel * 14 + Math.sin(time * 0.08) * 3
g.beginPath()
g.arc(cx, cy, rRing, 0, Math.PI * 2)
g.strokeStyle = accentColor(color)
g.globalAlpha = 0.35 + smoothLevel * 0.4
g.lineWidth = 1.5
g.stroke()
if (smoothLevel > 0.25) {
g.beginPath()
g.arc(cx, cy, rRing + 7 + Math.cos(time * 0.06) * 4, 0, Math.PI * 2)
g.strokeStyle = color
g.globalAlpha = 0.2 + smoothLevel * 0.3
g.lineWidth = 1
g.stroke()
}
const rCore = 6 + smoothLevel * 8 + Math.sin(time * 0.12) * 1.5
const radial = g.createRadialGradient(cx, cy, 1, cx, cy, rCore + 4)
radial.addColorStop(0, softColor(color))
radial.addColorStop(0.4, accentColor(color))
radial.addColorStop(1, color)
g.beginPath()
g.arc(cx, cy, rCore, 0, Math.PI * 2)
g.fillStyle = radial
g.globalAlpha = 0.95
g.fill()
g.globalAlpha = 1
}
function drawClassicBars(g, w, h, levels, color) {
const midY = h / 2
for (let i = 0; i < levels.length && i * 7 < w; i++) {
const level = levels[levels.length - 1 - i]
const age = i / levels.length
const x = w - 10 - i * 7
const hh = Math.max(2.5, level * (h - 6) * 0.5 * (1 - age * 0.35))
g.globalAlpha = 1 - age * 0.75
g.fillStyle = color
g.fillRect(x, midY - hh, 3.5, hh * 2)
}
g.globalAlpha = 1
}
function RecordPill(props) {
const v = useVoice()
const canvasRef = React.useRef(null)
const audioRef = React.useRef(null)
const [isPlaying, setIsPlaying] = React.useState(false)
const ownsComposer = updateVoiceComposer(props)
const ctx = props.ctx
React.useEffect(() => {
if (voice.handsFree && voice.handsFree.actions === props.inputActions && handsFreeSessionId() !== voice.handsFree.sessionId) stopHandsFree(t('handsFreeSession'))
if (!voice.handsFree && voice._activeTarget && voice._activeTarget.actions === props.inputActions && voice._activeTarget.sessionId !== handsFreeSessionId()) releaseVoiceComposer(props.inputActions)
}, [props.session && (props.session.sessionId || props.session.id)])
React.useEffect(() => () => releaseVoiceComposer(props.inputActions), [props.inputActions])
React.useEffect(() => {
if (!ownsComposer || (v.phase !== 'recording' && v.phase !== 'pending')) return
const onKey = (e) => {
if (!isVoiceComposerOwner(props.inputActions)) return
if (e.shiftKey && (e.key === 'Tab' || e.code === 'Tab')) {
e.preventDefault()
e.stopPropagation()
undoLastInsert().then((msg) => {
voice.lastUndoNotice = msg
voice.notify()
setTimeout(() => {
if (voice.lastUndoNotice === msg) {
voice.lastUndoNotice = ''
voice.notify()
}
}, 3500)
})
}
}
window.addEventListener('keydown', onKey, true)
return () => window.removeEventListener('keydown', onKey, true)
}, [v.phase, ownsComposer, props.inputActions])
React.useEffect(() => {
if (!ownsComposer || v.phase !== 'recording') return
const tick = 50
const dispose = ctx.interval(() => {
if (!isVoiceComposerOwner(props.inputActions)) return
const rec = voice.rec
if (!rec) return
if (voice.handsFree && (voice.isTtsSpeaking || handsFreePauseReason() || conversationTurnState(null, voice.turnBoundary, voice.session) !== 'complete')) { reconcileHandsFree(); return }
if (rec.rotating) return
const level = currentLevel(rec)
voice.levels.push(level)
if (voice.levels.length > 150) voice.levels.shift()
const speaking = isRecordingSpeech(rec, level)
if (speaking) { rec.hadSpeech = true; rec.silenceMs = 0 }
else if (rec.hadSpeech) rec.silenceMs += tick
if (voice.speaking !== speaking) { voice.speaking = speaking; voice.notify() }
const adapt = Number(voice.settings.vadAdapt) || 0
let effectiveVad = Number(voice.settings.vadSilenceMs) || 700
if (adapt > 0 && rec.hadSpeech) {
const win = voice.levels.slice(-20)
const density = win.length ? win.filter((v) => v > 0.06).length / win.length : 0
const k = adapt * (density - 0.5) * 2
effectiveVad = Math.max(150, Math.round(Number(voice.settings.vadSilenceMs) * (1 - k)))
}
const stream = !!voice.settings.stream && rec.mode === 'dictation'
if (stream && rec.hadSpeech && !rec.cutting) {
rec.streamMs += tick
const chunk = Number(voice.settings.streamChunkMs) || 1200
if (rec.streamMs >= chunk) { cutPhrase(); return }
} else {
rec.streamMs = 0
}
if (tickHandsFree(rec, effectiveVad, tick)) return
if (rec.mode === 'dictation' && rec.hadSpeech && rec.silenceMs >= effectiveVad) {
rec.streamMs = 0
cutPhrase()
}
}, tick)
return () => dispose()
}, [v.phase, ownsComposer, props.inputActions])
React.useEffect(() => {
if (!ownsComposer || v.phase !== 'recording') return
let frame = 0
let animId = null
let running = true
const render = () => {
if (!running) return
const canvas = canvasRef.current
if (canvas) {
const g = canvas.getContext('2d')
const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1
const rect = canvas.getBoundingClientRect()
const cssW = rect.width || 720
const cssH = rect.height || 40
const targetW = Math.max(1, Math.round(cssW * dpr))
const targetH = Math.max(1, Math.round(cssH * dpr))
if (canvas.width !== targetW || canvas.height !== targetH) {
canvas.width = targetW
canvas.height = targetH
}
g.save()
g.scale(dpr, dpr)
g.clearRect(0, 0, cssW, cssH)
if (!voice.waveColor) {
try { voice.waveColor = getComputedStyle(canvas).color || 'currentColor' } catch (e) { voice.waveColor = 'currentColor' }
}
let drawColor = voice.waveColor
if (voice.audioQuality && (voice.audioQuality.clipping || voice.audioQuality.lowVolume)) {
try { drawColor = getComputedStyle(canvas).color || voice.waveColor } catch (_) { 0 }
}
const levels = voice.levels
const style = (voice.settings && voice.settings.visualizerStyle) || 'liquid-wave'
frame++
if (style === 'off') {
g.beginPath()
g.globalAlpha = 0.25
g.strokeStyle = drawColor
g.lineWidth = 1
g.moveTo(10, cssH / 2)
g.lineTo(cssW - 10, cssH / 2)
g.stroke()
g.globalAlpha = 1
} else if (style === 'dynamic-orb') {
drawDynamicOrb(g, cssW, cssH, levels, drawColor, frame)
} else if (style === 'bars') {
drawClassicBars(g, cssW, cssH, levels, drawColor)
} else {
drawLiquidWave(g, cssW, cssH, levels, drawColor, frame)
}
g.restore()
}
animId = requestAnimationFrame(render)
}
animId = requestAnimationFrame(render)
return () => {
running = false
if (animId) cancelAnimationFrame(animId)
}
}, [v.phase, ownsComposer, props.inputActions])
React.useEffect(() => {
if (!ownsComposer || v.phase !== 'pending') return
const tick = 100
const dispose = ctx.interval(() => {
if (!isVoiceComposerOwner(props.inputActions)) return
const p = voice.pending
if (!p) return
if (p.undoOnly) {
p.leftMs -= tick
if (p.leftMs <= 0) voice.set({ phase: 'idle' })
else voice.notify()
return
}
if (p.paused || p.isEditing) {
return
}
p.leftMs -= tick
if (p.leftMs <= 0) { submitPending(); return }
voice.notify()
}, tick)
return () => dispose()
}, [v.phase, ownsComposer, props.inputActions])
if (!ownsComposer) return null
if (voice.handsFree && (v.phase === 'waiting' || v.phase === 'paused')) {
return h('div', { className: 'dvo-pill', role: 'status', 'aria-live': 'polite' }, h('span', { className: 'dvo-status' }, waveIcon(), t(v.phase === 'paused' ? (voice.handsFree.pauseLabel || 'handsFreePaused') : 'handsFreeWaiting')))
}
if (v.phase === 'idle') {
if (!voice.showPlayer || !voice.lastNote || !voice.lastNote.url) return null
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
React.createElement('div', { className: 'dvo-audio-wrap' },
React.createElement('button', {
type: 'button', className: 'dvo-audio-play',
title: isPlaying ? t('pause') : t('play'),
'aria-label': isPlaying ? t('pause') : t('play'),
onClick: () => {
const el = audioRef.current
if (!el) return
if (el.paused) { el.play().catch(() => 0); setIsPlaying(true) }
else { el.pause(); setIsPlaying(false) }
},
}, isPlaying ? pauseIcon() : playIcon()),
React.createElement('audio', {
ref: audioRef, src: voice.lastNote.url,
onEnded: () => setIsPlaying(false),
onPause: () => setIsPlaying(false),
onPlay: () => setIsPlaying(true),
}),
React.createElement('span', { className: 'dvo-audio-time' }, t('lastRecording')),
),
React.createElement('span', { className: 'dvo-status', 'aria-live': 'polite', 'aria-atomic': 'true' }, voice.lastNote.text || ''),
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('hide'),
'aria-label': t('hide'),
onClick: () => {
if (audioRef.current) audioRef.current.pause()
setIsPlaying(false)
voice.set({ showPlayer: false })
focusComposer()
},
}, xIcon()),
)
}
if (v.phase === 'recording') {
const inBrowser = !!voice.browser
const rec = voice.rec
const hint = voice.handsFree ? t(rec ? 'handsFreeListening' : 'handsFreeStarting') : v.mode === 'dictation' ? t('dictationPill') : t('messagePill')
const caption = voice.caption || (inBrowser ? '' : null)
const activeSubMode = (voice._activeTarget && voice._activeTarget.dictationMode)
|| voice.selectedDictationMode
|| (voice.settings && voice.settings.dictationMode)
|| 'clean'
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
React.createElement('span', { className: 'dvo-mode-badge' }, getDictationModeLabel(activeSubMode, t)),
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('cancel'),
'aria-label': t('cancel'),
onClick: cancelCurrent,
}, xIcon()),
inBrowser
? null
: React.createElement('canvas', {
className: 'dvo-wave' + (voice.audioQuality?.clipping ? ' dvo-wave-clipping' : (voice.audioQuality?.lowVolume ? ' dvo-wave-low' : '')),
ref: canvasRef, width: 720, height: 40,
}),
React.createElement('span', { className: 'dvo-status', 'aria-live': 'polite', 'aria-atomic': 'true' },
caption
? caption
: (voice.holding
? t('holdHint')
: (inBrowser
? t('listening')
: (rec && rec.hadSpeech ? (v.speaking ? t('speaking') : t('silence')) : hint))),
voice.audioQuality && voice.audioQuality.clipping
? React.createElement('span', { className: 'dvo-quality-badge dvo-quality-clipping', title: t('clippingHint') }, t('clipping'))
: (voice.audioQuality && voice.audioQuality.lowVolume
? React.createElement('span', { className: 'dvo-quality-badge dvo-quality-low', title: t('lowVolumeHint') }, t('lowVolume'))
: null),
voice.lastUndoNotice
? React.createElement('span', { className: 'dvo-undo-badge', 'aria-live': 'assertive' }, voice.lastUndoNotice)
: null,
v.interimTranscript && v.settings.liveInterimPreview !== false
? React.createElement('span', { className: 'dvo-ghost' }, v.interimTranscript)
: null),
v.mode === 'dictation' && insertHistory.length > 0
? React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('undo') + ' (Shift+Tab)',
'aria-label': t('undo'),
onClick: async () => {
const msg = await undoLastInsert()
voice.lastUndoNotice = msg
voice.notify()
setTimeout(() => {
if (voice.lastUndoNotice === msg) {
voice.lastUndoNotice = ''
voice.notify()
}
}, 3500)
},
}, undoIcon())
: null,
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('stop'),
'aria-label': t('stop'),
onClick: stopCurrent,
}, stopIcon()),
)
}
if (v.phase === 'processing') {
const activeSubMode = (voice._activeTarget && voice._activeTarget.dictationMode)
|| voice.selectedDictationMode
|| (voice.settings && voice.settings.dictationMode)
|| 'clean'
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
React.createElement('span', { className: 'dvo-status', 'aria-live': 'polite', 'aria-atomic': 'true' },
spinIcon(),
React.createElement('span', { className: 'dvo-mode-badge' }, getDictationModeLabel(activeSubMode, t)),
t(voice.handsFree && voice.handsFree.submitting ? 'handsFreeSending' : 'transcribing'),
))
}
if (v.phase === 'pending') {
if (voice.pending && voice.pending.rawText !== undefined) {
return renderEditablePreviewPill(voice, v, isPlaying, setIsPlaying, audioRef)
}
const left = Math.max(0, Math.ceil((voice.pending ? voice.pending.leftMs : 0) / 1000))
if (voice.pending && voice.pending.undoOnly) {
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
React.createElement('span', { className: 'dvo-status', 'aria-live': 'polite', 'aria-atomic': 'true' }, t('undo'), ': ', left, t('secondsShort')),
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('undo'),
'aria-label': t('undo'),
onClick: async () => {
const msg = await undoLastInsert()
voice.set({ phase: 'idle', error: msg === t('undone') ? '' : msg })
focusComposer()
},
}, xIcon()),
)
}
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
voice.lastNote && voice.lastNote.url
? React.createElement('div', { className: 'dvo-audio-wrap' },
React.createElement('button', {
type: 'button', className: 'dvo-audio-play',
title: isPlaying ? t('pause') : t('play'),
'aria-label': isPlaying ? t('pause') : t('play'),
onClick: () => {
const el = audioRef.current
if (!el) return
if (el.paused) { el.play().catch(() => 0); setIsPlaying(true) }
else { el.pause(); setIsPlaying(false) }
},
}, isPlaying ? pauseIcon() : playIcon()),
React.createElement('audio', {
ref: audioRef, src: voice.lastNote.url,
onEnded: () => setIsPlaying(false),
onPause: () => setIsPlaying(false),
onPlay: () => setIsPlaying(true),
}),
React.createElement('span', { className: 'dvo-audio-time' }, t('listenBack')),
)
: null,
v.settings.autoSendVisualRing !== false
? (() => {
const total = (voice.pending && voice.pending.totalMs) || Number(voice.settings.autoSendMs) || 4000
const leftMs = (voice.pending && voice.pending.leftMs) || 0
const frac = total > 0 ? Math.max(0, Math.min(1, leftMs / total)) : 0
const circ = 2 * Math.PI * 14
const off = circ * (1 - frac)
return React.createElement('svg', { className: 'dvo-silence-ring', viewBox: '0 0 34 34' },
React.createElement('circle', { cx: 17, cy: 17, r: 14, className: 'dvo-ring-bg' }),
React.createElement('circle', {
cx: 17, cy: 17, r: 14, className: 'dvo-ring-fg',
strokeDasharray: `${circ} ${circ}`,
strokeDashoffset: off,
}),
)
})()
: null,
React.createElement('span', { className: 'dvo-status', 'aria-live': 'polite', 'aria-atomic': 'true' }, t('sendingIn')),
React.createElement('span', { className: 'dvo-count' }, left + t('secondsShort')),
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('keepPending'),
'aria-label': t('keepPending'),
onClick: () => {
keepPending()
focusComposer()
},
}, xIcon()),
)
}
return React.createElement('div', { className: 'dvo-pill', role: 'region', 'aria-label': t('title') },
React.createElement('span', { className: 'dvo-status dvo-err', 'aria-live': 'polite', 'aria-atomic': 'true' }, warnIcon(), v.error),
React.createElement('button', {
type: 'button', className: 'dvo-pbtn', title: t('hide'),
'aria-label': t('hide'),
onClick: () => {
voice.set({ phase: 'idle', error: '' })
focusComposer()
},
}, xIcon()),
)
}
// Session slots expose selector hooks, not precomputed input/session owner props.
function LiveComposerSlot(props) {
const input = props.useInput((state) => state)
const session = props.useSession((state) => state)
const primaryTurnBoundary = typeof props.useProjection === 'function' ? props.useProjection('turnBoundary') : undefined
const timeline = typeof props.useConversation === 'function' ? props.useConversation((state) => state && state.views && typeof state.views.get === 'function' ? state.views.get('chat')?.timeline : undefined) : undefined
const timelineTurnBoundary = conversationTimelineBoundary(timeline, session)
const selected = selectConversationBoundary(primaryTurnBoundary, timeline, session)
const sessionId = session && (session.sessionId || session.id)
const pendingInteraction = typeof props.useSessionStatus === 'function' ? props.useSessionStatus((statuses) => statuses.get(sessionId)?.pendingInteraction) : undefined
return h(props.component, { input, session, turnBoundary: selected.boundary, turnBoundarySource: selected.source, primaryTurnBoundary, timelineTurnBoundary, turnFeedSupported: typeof props.useProjection === 'function' || typeof props.useConversation === 'function', pendingInteraction, inputActions: props.inputActions, ctx: props.ctx })
}
function ComposerSlot(props) {
if (typeof props.useInput === 'function' && typeof props.useSession === 'function') return h(LiveComposerSlot, props)
// Compatibility with older hosts; hands-free still rejects incomplete state.
return h(props.component, { input: props.input, session: props.session, turnBoundary: props.turnBoundary, pendingInteraction: props.pendingInteraction, inputActions: props.inputActions, ctx: props.ctx })
}
function registerComposer(ctx) {
ctx.effect(() => {
let dispose = () => {}
let alive = true
const reload = () => {
apiClient.getStatus()
.then((res) => res.json())
.then((data) => {
if (!alive) return
dispose()
dispose = () => {}
const key = data && data.hotkey
voice.hotkey = key || ''
if (key) dispose = installHotkey(ctx, key, 'message')
Object.assign(voice.settings, {
beep: !!(data && data.beep),
localOnly: !!(data && data.localOnly),
webgpuModel: String((data && data.webgpuModel) || (voice.settings && voice.settings.webgpuModel) || 'onnx-community/whisper-tiny'),
micDeviceId: String((data && data.micDeviceId) || ''),
historyLimit: Number(data && data.historyLimit),
voiceCommands: !!(data && data.voiceCommands),
vadSilenceMs: Number(data && data.modes && data.modes.dictation && data.modes.dictation.vadSilenceMs) || 700,
autoSendMs: Number(data && data.modes && data.modes.message && data.modes.message.autoSendMs) || 4000,
dictationMode: String((data && data.dictationMode) || 'clean'),
dictationPrompts: (data && data.dictationPrompts) || {},
voiceMacros: Array.isArray(data && data.voiceMacros) ? data.voiceMacros : [],
sendDelayMs: Number(data && data.modes && data.modes.dictation && data.modes.dictation.sendDelayMs) || 0,
stream: !!(data && data.modes && data.modes.dictation && data.modes.dictation.stream),
streamChunkMs: Number(data && data.modes && data.modes.dictation && data.modes.dictation.streamChunkMs) || 1200,
vadAdapt: Number(data && data.modes && data.modes.dictation && data.modes.dictation.vadAdapt) || 0,
wakeWord: String((data && data.wakeWord) || ''),
bargeIn: !!(data && data.bargeIn),
polishSend: !!(data && data.modes && data.modes.message && data.modes.message.polishSend),
sessionCommands: !!(data && data.modes && data.modes.message && data.modes.message.sessionCommands),
noiseSuppression: data && data.noiseSuppression !== false,
noiseGateDb: Number(data && data.noiseGateDb !== undefined ? data.noiseGateDb : -45),
lowVolumeThreshold: Number(data && data.lowVolumeThreshold !== undefined ? data.lowVolumeThreshold : 0.08),
contextGlossary: data && data.contextGlossary !== false,
visualizerStyle: (data && data.visualizerStyle) || 'liquid-wave',
gatedTurnTaking: data && data.gatedTurnTaking !== false,
autoSendVisualRing: data && data.autoSendVisualRing !== false,
voiceActions: data && data.voiceActions !== false,
techJargonCorrection: data && data.techJargonCorrection !== false,
jargonDictionary: Array.isArray(data && data.jargonDictionary) ? data.jargonDictionary : [],
liveInterimPreview: data && data.liveInterimPreview !== false,
structuredPromptVoice: data && data.structuredPromptVoice !== false,
audioFeedback: data && data.audioFeedback !== false,
showDictationModeButton: !!(data && data.showDictationModeButton),
showDictationButton: data ? data.showDictationButton !== false : true,
showMessageButton: !!(data && data.showMessageButton),
showHandsFreeButton: data ? data.showHandsFreeButton !== false : true,
})
voice.notify()
})
.catch(() => 0)
}
reload()
window.addEventListener('dsh-voice:settings-saved', reload)
return () => {
alive = false
window.removeEventListener('dsh-voice:settings-saved', reload)
dispose()
clearGlobalHotkey()
}
}, 'dsh-voice: hold hotkey')
ctx.effect(() => {
const offRight = ctx.slots.inject('conversation.input.right', () => ctx.slots.register(
{ name: 'conversation.input.right', id: '@goodandready/dsh-voice', order: 6, locale: NS, label: () => t('title') },
(props) => React.createElement(VoiceErrorBoundary, { section: 'composer' }, React.createElement(ComposerSlot, { ...props, component: VoiceButtons, ctx })),
))
const offDock = ctx.slots.inject('conversation.input.dock', () => ctx.slots.register(
{ name: 'conversation.input.dock', id: 'dsh-voice-rec', order: 0, locale: NS, label: () => t('recordSlot') },
(props) => React.createElement(VoiceErrorBoundary, { section: 'visualizer' }, React.createElement(ComposerSlot, { ...props, component: RecordPill, ctx })),
))
return () => {
if (typeof offRight === 'function') offRight()
if (typeof offDock === 'function') offDock()
}
}, 'dsh-voice: composer slots')
}
function cloneSettingsObj(obj) {
if (!obj || typeof obj !== 'object') return obj
if (typeof structuredClone === 'function') {
try { return structuredClone(obj) } catch (_) { 0 }
}
try { return JSON.parse(JSON.stringify(obj)) } catch (_) { return Object.assign({}, obj) }
}
function validateSettingsDraft(draft) {
const errors = {}
if (!draft || typeof draft !== 'object') return { isValid: true, errors }
if (draft.historyLimit !== undefined && (Number.isNaN(Number(draft.historyLimit)) || Number(draft.historyLimit) < 0)) {
errors.historyLimit = 'historyLimit must be >= 0'
}
if (draft.noiseGateDb !== undefined && (Number.isNaN(Number(draft.noiseGateDb)) || Number(draft.noiseGateDb) > 0 || Number(draft.noiseGateDb) < -100)) {
errors.noiseGateDb = 'noiseGateDb must be between -100 and 0'
}
if (draft.dictation && draft.dictation.vadSilenceMs !== undefined && Number(draft.dictation.vadSilenceMs) < 0) {
errors['dictation.vadSilenceMs'] = 'vadSilenceMs must be >= 0'
}
return { isValid: Object.keys(errors).length === 0, errors }
}
function isSettingsDraftDirty(savedConfig, draftConfig) {
if (!savedConfig || !draftConfig) return false
try {
return JSON.stringify(savedConfig) !== JSON.stringify(draftConfig)
} catch (_) {
return true
}
}
function createSettingsDraftStore(initialSaved = null) {
let savedConfig = initialSaved ? cloneSettingsObj(initialSaved) : null
let draftConfig = initialSaved ? cloneSettingsObj(initialSaved) : null
const listeners = new Set()
const notify = () => { for (const fn of listeners) { try { fn() } catch (_) { 0 } } }
return {
getState() {
const { isValid, errors } = validateSettingsDraft(draftConfig)
return {
savedConfig,
draftConfig,
isDirty: isSettingsDraftDirty(savedConfig, draftConfig),
isValid,
errors,
}
},
setSavedConfig(cfg) {
savedConfig = cfg ? cloneSettingsObj(cfg) : null
if (draftConfig === null && savedConfig !== null) {
draftConfig = cloneSettingsObj(savedConfig)
}
notify()
},
patchDraft(key, val) {
draftConfig = Object.assign({}, draftConfig || {}, { [key]: val })
notify()
return draftConfig
},
patchNestedDraft(mode, key, val) {
const next = Object.assign({}, draftConfig || {})
next[mode] = Object.assign({}, next[mode] || {}, { [key]: val })
draftConfig = next
notify()
return draftConfig
},
reset() {
draftConfig = savedConfig ? cloneSettingsObj(savedConfig) : null
notify()
return draftConfig
},
async commit(saveFn) {
const st = this.getState()
if (!st.isValid) {
throw new Error(Object.values(st.errors)[0] || 'Invalid settings draft')
}
const prevSaved = savedConfig ? cloneSettingsObj(savedConfig) : null
const nextSaved = await saveFn(cloneSettingsObj(draftConfig))
savedConfig = cloneSettingsObj(nextSaved || draftConfig)
draftConfig = cloneSettingsObj(savedConfig)
notify()
return { savedConfig, prevSaved }
},
subscribe(fn) {
listeners.add(fn)
return () => listeners.delete(fn)
},
}
}
const BUILTIN = [
'browser', 'browser-webgpu', 'deepgram', 'groq', 'hf', 'local-whisper', 'sensevoice',
'openai', 'siliconflow', 'deepinfra', 'fireworks', 'mistral', 'openrouter',
]
const TEMPLATES = ['openai-transcriptions', 'openai-chat-audio']
const MODEL_HINT_KEYS = {
browser: 'browserHint',
'browser-webgpu': 'browserWebGpuHint',
openai: 'openaiHint',
siliconflow: 'siliconflowHint',
deepinfra: 'deepinfraHint',
fireworks: 'fireworksHint',
mistral: 'mistralHint',
openrouter: 'openrouterHint',
'local-whisper': 'localHint',
sensevoice: 'sensevoiceHint',
}
const MODEL_HINT_STATIC = {
'browser-webgpu': 'onnx-community/whisper-tiny',
deepgram: 'nova-2',
groq: 'whisper-large-v3-turbo',
hf: 'openai/whisper-large-v3',
}
function modelHint(provider) {
const key = MODEL_HINT_KEYS[provider]
if (key) return t(key)
return MODEL_HINT_STATIC[provider] || ''
}
const SUPPORTED_LANGS = [
{ code: '', labelKey: 'langAuto', defaultLabel: 'auto' },
{ code: 'ru', labelKey: 'langRu', defaultLabel: 'ru' },
{ code: 'en', labelKey: 'langEn', defaultLabel: 'en' },
{ code: 'zh', labelKey: 'langZh', defaultLabel: 'zh' },
{ code: 'uk', labelKey: 'langUk', defaultLabel: 'uk' },
{ code: 'de', labelKey: 'langDe', defaultLabel: 'de' },
]
const LANGS = SUPPORTED_LANGS.map((o) => o.code)
const SET_CSS =
'.dvo-settings-root.cb-page,.dvo-settings-root .cb-page{display:flex;flex-direction:column;gap:18px;padding:4px 0 24px;max-width:960px}.dvo-settings-root .cb-section-card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;padding:16px 18px;display:flex;flex-direction:column;gap:12px}.dvo-settings-root .cb-section-title{font-size:15px;font-weight:600;color:var(--dsw-alias-label-primary);display:flex;align-items:center;justify-content:space-between}.dvo-settings-root .cb-section-desc{font-size:13px;color:var(--dsw-alias-label-secondary);margin-top:-4px;line-height:1.4}.dvo-settings-root .cb-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.dvo-settings-root .cb-grid-2{display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:12px}.dvo-settings-root .cb-badge{font-size:11px;padding:2px 8px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);display:inline-flex;align-items:center;gap:4px;font-weight:500}.dvo-settings-root .cb-badge-ok{border-color:var(--dsw-alias-state-success-primary);color:var(--dsw-alias-state-success-primary);background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 8%, transparent)}.dvo-settings-root .cb-badge-warn{border-color:var(--dsw-alias-state-warning-primary);color:var(--dsw-alias-state-warning-primary);background:color-mix(in srgb, var(--dsw-alias-state-warning-primary) 8%, transparent)}.dvo-settings-root .cb-badge-bad,.dvo-settings-root .cb-badge-err{border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary);background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent)}.dvo-settings-root .cb-input{height:34px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:13px;box-sizing:border-box}.dvo-settings-root .cb-input:focus{outline:none;border-color:var(--dsw-alias-state-brand-primary)}.dvo-settings-root .cb-btn{appearance:none;font:inherit;cursor:pointer;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px 12px;font-size:13px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-weight:500;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:all .15s ease}.dvo-settings-root .cb-btn:hover:not(:disabled){background:var(--dsw-alias-bg-layer-4, var(--dsw-alias-bg-layer-2));border-color:var(--dsw-alias-label-dimmed, var(--dsw-alias-border-l2))}.dvo-settings-root .cb-btn-primary{background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-3);border-color:transparent}.dvo-settings-root .cb-btn-primary:hover:not(:disabled){background:var(--dsw-alias-label-primary) !important;color:var(--dsw-alias-bg-layer-3) !important;opacity:0.88}.dvo-settings-root .cb-btn-danger{color:var(--dsw-alias-state-error-primary);border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 30%, transparent)}.dvo-settings-root .cb-btn-mini{border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);border-radius:6px;width:28px;height:28px;cursor:pointer;flex:none;display:inline-flex;align-items:center;justify-content:center;padding:0;font-size:13px}.dvo-settings-root .cb-btn-mini:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}.dvo-settings-root .cb-field{display:flex;flex-direction:column;gap:6px;padding:6px 0;font-size:13px;color:var(--dsw-alias-label-primary)}.dvo-settings-root .cb-field select,.dvo-settings-root .cb-field input[type="text"],.dvo-settings-root .cb-field input[type="number"],.dvo-settings-root .cb-field textarea{height:34px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:13px;box-sizing:border-box}.dvo-settings-root .cb-field textarea{height:auto;padding:8px 10px;font-family:inherit}.dvo-settings-root .cb-check-label{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--dsw-alias-label-primary);user-select:none}.dvo-settings-root .cb-check-label input[type="checkbox"]{width:16px;height:16px;cursor:pointer}.dvo-settings-root .cb-alert-err{padding:10px 14px;border-radius:8px;background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);color:var(--dsw-alias-state-error-primary);font-size:13px}.dvs-wrap{display:flex;flex-direction:column;gap:18px;padding:4px 0;max-width:960px}.dvs-block{display:flex;flex-direction:column;gap:10px}.dvs-h{font-size:14px;font-weight:600;color:var(--dsw-alias-label-primary)}.dvs-sub{font-size:12px;color:var(--dsw-alias-label-secondary)}.dvs-row{display:flex;gap:8px;align-items:center}.dvs-row select,.dvs-row input{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 10px;font-size:13px}.dvs-row .dvs-model{flex:1}.dvs-card{display:flex;flex-direction:column;gap:8px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:10px;padding:12px}.dvs-card input,.dvs-card select{background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary);border-radius:6px;padding:6px 8px;font-size:13px}.dvs-wait{font-size:13px;color:var(--dsw-alias-label-secondary);line-height:1.5;max-width:520px}.dvs-ok{font-size:12px;color:var(--dsw-alias-state-success-primary)}.dvs-bad{font-size:12px;color:var(--dsw-alias-state-error-primary)}.dvo-pcard{list-style:none;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px}.dvo-phead{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;display:flex;align-items:center;gap:12px;padding:14px 16px}.dvo-pheadtext{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}.dvo-ptitle{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}.dvo-pdesc{color:var(--dsw-alias-label-secondary);font-size:13px}.dvo-pchev{flex:none;display:flex;color:var(--dsw-alias-label-secondary);transition:transform .15s ease}.dvo-pcardOpen .dvo-pchev{transform:rotate(180deg)}.dvo-pbody{border-top:1px solid var(--dsw-alias-border-l2);margin:0 16px;padding-bottom:12px}'
const setCssId = 'dsh-voice/settings.module.css'
function installSettingsCss() {
if (typeof document === 'undefined') return () => {}
let tag = document.querySelector('style[data-dsh-plugin="dsh-voice"][data-plugin-css="' + setCssId + '"]')
if (!tag) {
tag = document.createElement('style')
tag.textContent = SET_CSS
tag.setAttribute('data-dsh-plugin', 'dsh-voice')
tag.dataset.pluginCss = setCssId
document.head.appendChild(tag)
}
return () => {
if (tag && tag.parentNode) tag.parentNode.removeChild(tag)
}
}
function ChainEditor(props) {
const t = (props && props.t) || moduleT
const rows = Array.isArray(props.value) ? props.value : []
const change = (i, patch) => {
const next = rows.map((r, k) => (k === i ? Object.assign({}, r, patch) : r))
props.onChange(next)
}
const move = (i, delta) => {
const j = i + delta
if (j < 0 || j >= rows.length) return
const next = rows.slice()
const tmp = next[i]; next[i] = next[j]; next[j] = tmp
props.onChange(next)
}
const remove = (i) => props.onChange(rows.filter((_, k) => k !== i))
const add = () => props.onChange(rows.concat([{ provider: 'local-whisper', model: '' }]))
const options = Array.isArray(props.options) && props.options.length ? props.options : BUILTIN
return h('div', { className: 'dvs-block' },
rows.map((row, i) => h('div', { className: 'dvs-row', key: i },
h('select', {
value: row.provider, disabled: !props.writable,
onChange: (e) => change(i, { provider: e.target.value }),
}, (options.indexOf(row.provider) < 0 ? options.concat([row.provider]) : options)
.map((p) => h('option', { key: p, value: p }, p))),
h('input', {
className: 'dvs-model', value: row.model || '', disabled: !props.writable,
placeholder: modelHint(row.provider), onChange: (e) => change(i, { model: e.target.value }),
}),
h('button', { type: 'button', className: 'dvs-mini', title: t('up'), disabled: !props.writable, onClick: () => move(i, -1) }, '↑'),
h('button', { type: 'button', className: 'dvs-mini', title: t('down'), disabled: !props.writable, onClick: () => move(i, 1) }, '↓'),
h('button', { type: 'button', className: 'dvs-mini', title: t('remove'), disabled: !props.writable, onClick: () => remove(i) }, '×'),
)),
h('div', { className: 'dvs-row' },
h('button', { type: 'button', className: 'dvs-mini', title: t('addProvider'), disabled: !props.writable, onClick: add }, '+'),
h('span', { className: 'dvs-sub' }, t('chainHint')),
),
)
}
function CustomEditor(props) {
const t = (props && props.t) || moduleT
const rows = Array.isArray(props.value) ? props.value : []
const change = (i, patch) => props.onChange(rows.map((r, k) => (k === i ? Object.assign({}, r, patch) : r)))
const remove = (i) => props.onChange(rows.filter((_, k) => k !== i))
const add = () => props.onChange(rows.concat([
{ key: '', template: 'openai-transcriptions', baseURL: '', model: '', keyEnv: '', prompt: '' },
]))
const field = (i, row, name, placeholder, wide) => h('input', {
className: wide ? 'dvs-model' : '', value: row[name] || '', placeholder: placeholder,
disabled: !props.writable, onChange: (e) => change(i, { [name]: e.target.value }),
})
return h('div', { className: 'dvs-block' },
rows.map((row, i) => h('div', { className: 'dvs-card', key: i },
h('div', { className: 'dvs-row' },
field(i, row, 'key', t('customName')),
h('select', {
value: row.template || 'openai-transcriptions', disabled: !props.writable,
onChange: (e) => change(i, { template: e.target.value }),
}, TEMPLATES.map((tmpl) => h('option', { key: tmpl, value: tmpl }, tmpl))),
h('button', {
type: 'button', className: 'dvs-mini', title: t('remove'),
disabled: !props.writable, onClick: () => remove(i),
}, '\u00d7'),
),
h('div', { className: 'dvs-row' },
field(i, row, 'baseURL', 'https://openrouter.ai/api/v1', true),
),
h('div', { className: 'dvs-row' },
field(i, row, 'model', t('customModel'), true),
field(i, row, 'keyEnv', t('customKeyName')),
),
row.template === 'openai-chat-audio'
? h('div', { className: 'dvs-row' },
field(i, row, 'prompt', t('customModelHint'), true))
: null,
)),
h('div', { className: 'dvs-row' },
h('button', {
type: 'button', className: 'dvs-mini', title: t('addCustom'),
disabled: !props.writable, onClick: add,
}, '+'),
h('span', { className: 'dvs-sub' },
t('openrouterWarning')),
),
)
}
function ProviderDashboard(props) {
const t = props.t || moduleT
const statsData = props.statsData || {}
const recentDiagnostics = props.recentDiagnostics || []
const [exporting, setExporting] = React.useState(false)
const [exportMsg, setExportMsg] = React.useState('')
const exportReport = async () => {
setExporting(true)
setExportMsg('')
try {
const res = await apiClient.exportDiagnostics()
const data = await res.json()
if (!res.ok || !data || !data.ok) {
throw new Error((data && data.error && data.error.message) || `HTTP ${res.status}`)
}
const blob = new Blob([JSON.stringify(data.report || {}, null, 2)], { type: 'application/json' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = `dsh-voice-diagnostics-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
document.body.appendChild(a)
a.click()
document.body.removeChild(a)
URL.revokeObjectURL(url)
setExportMsg('✓ ' + t('diagnosticsExportSuccess'))
} catch (err) {
setExportMsg(String(err && err.message ? err.message : err))
} finally {
setExporting(false)
}
}
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '📊 ' + t('providerDashboard')),
h('div', { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
h('button', {
type: 'button',
className: 'cb-btn',
style: { fontSize: '12px', padding: '4px 10px' },
disabled: exporting,
onClick: exportReport,
}, exporting ? t('exportingDiagnostics') : ('📥 ' + t('exportDiagnosticsBtn'))),
h('button', {
type: 'button', className: 'cb-btn', style: { fontSize: '12px', padding: '4px 8px' },
onClick: props.onRefresh,
}, '🔄 ' + t('refreshStats')),
),
),
exportMsg ? h('div', {
className: exportMsg.startsWith('✓') ? 'dvs-ok' : 'cb-alert-err',
style: { fontSize: '12px' },
}, exportMsg) : null,
h('div', { className: 'dvo-dash' },
h('div', { className: 'dvo-dash-grid' },
Object.keys(statsData).length === 0
? h('div', { className: 'dvs-sub' }, t('idle'))
: Object.entries(statsData).map(([key, item]) => {
const avg = item.avgTookMs || 0
const hasErrors = item.failures > 0
let badgeClass = 'dvo-badge-idle'
let badgeText = t('idle')
if (item.attempts > 0) {
if (hasErrors && item.successes === 0) {
badgeClass = 'dvo-badge-err'
badgeText = t('error')
} else if (avg > 0 && avg < 400) {
badgeClass = 'dvo-badge-fast'
badgeText = avg + ' ' + t('msShort') + ' · ' + t('fast')
} else if (avg >= 400 && avg <= 1500) {
badgeClass = 'dvo-badge-norm'
badgeText = avg + ' ' + t('msShort') + ' · ' + t('normal')
} else {
badgeClass = 'dvo-badge-slow'
badgeText = avg + ' ' + t('msShort') + ' · ' + t('slow')
}
}
const rate = item.attempts > 0 ? Math.round((item.successes / item.attempts) * 100) : 100
return h('div', { key, className: 'dvo-dash-item', title: item.lastError ? `${t('errorPrefix')}: ${item.lastError}` : '' },
h('div', { className: 'dvo-dash-name' }, key),
h('div', { className: 'dvo-dash-row' },
h('span', { className: 'dvo-badge ' + badgeClass }, badgeText),
h('span', null, rate + '%'),
),
h('div', { className: 'dvo-dash-row' },
h('span', null, `${item.successes}/${item.attempts}`),
h('span', null, t('successRate')),
),
)
}),
),
),
h('div', { style: { marginTop: '12px', borderTop: '1px solid var(--dsw-alias-border-l2)', paddingTop: '10px' } },
h('div', { className: 'dvs-h', style: { marginBottom: '8px' } }, t('recentRecognitionsTitle')),
recentDiagnostics.length === 0
? h('div', { className: 'dvs-sub' }, t('noRecognitionsYet'))
: h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
recentDiagnostics.slice(-5).reverse().map((d) => h('div', {
key: d.id,
className: 'dvs-card',
style: { padding: '8px 12px', fontSize: '12px' },
},
h('div', { className: 'cb-row', style: { justifyContent: 'space-between', alignItems: 'center' } },
h('div', { style: { display: 'flex', gap: '6px', alignItems: 'center' } },
h('span', { className: 'cb-badge ' + (d.success ? 'cb-badge-ok' : 'cb-badge-err') },
d.success ? '✓ ' + (d.provider || 'STT') : '✗ ' + (d.error ? d.error.slice(0, 30) : 'fail')
),
h('span', { className: 'dvs-sub' }, `[${d.mode}/${d.subMode}]`),
d.audioBytes ? h('span', { className: 'dvs-sub' }, t('diagBytes').replace('{bytes}', d.audioBytes)) : null,
),
h('span', { style: { fontWeight: '600' } },
t('diagTotal').replace('{ms}', d.totalTookMs)
),
),
h('div', { className: 'cb-row', style: { gap: '12px', marginTop: '4px', fontSize: '11px', color: 'var(--dsw-alias-label-secondary)' } },
h('span', null, t('diagVad').replace('{ms}', (d.breakdown && d.breakdown.vadMs) || 0)),
h('span', null, t('diagStt').replace('{ms}', (d.breakdown && d.breakdown.sttMs) || 0)),
d.breakdown && d.breakdown.polishMs ? h('span', null, t('diagPolish').replace('{ms}', d.breakdown.polishMs)) : null,
typeof d.wordCount === 'number' ? h('span', null, t('diagWords').replace('{count}', d.wordCount)) : null,
),
))
),
h('div', { className: 'dvs-sub', style: { marginTop: '8px', fontStyle: 'italic' } },
t('diagExportNotice')
),
),
)
}
function DictationModesSection(props) {
const { t, draft, setTop, writable } = props
const prompts = (draft && draft.dictationPrompts) || {}
const currentMode = (draft && draft.dictationMode) || 'clean'
const setPrompt = (key, val) => {
const updated = { ...prompts, [key]: val }
setTop('dictationPrompts', updated)
}
const resetPrompts = () => {
setTop('dictationPrompts', { clean: '', task: '', note: '', bug: '' })
}
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '🎙️ ' + t('dictationModeTitle')),
),
h('div', { className: 'cb-field-desc' }, t('dictationModeDesc')),
h('div', { className: 'cb-grid-2', style: { marginTop: '8px' } },
['clean', 'task', 'bug', 'note', 'verbatim'].map((m) =>
h('label', { key: m, className: 'cb-check-label' },
h('input', {
type: 'radio',
name: 'dictationMode',
value: m,
checked: currentMode === m,
disabled: !writable,
onChange: () => setTop('dictationMode', m),
}),
getDictationModeLabel(m, t),
),
),
),
h('div', { style: { marginTop: '12px', borderTop: '1px solid var(--dsw-alias-border-l1)', paddingTop: '10px' } },
h('div', { className: 'cb-section-title', style: { fontSize: '13px' } },
h('span', null, t('dictationPromptsTitle')),
h('button', {
type: 'button',
className: 'cb-btn cb-btn-secondary',
style: { fontSize: '11px', padding: '2px 8px' },
disabled: !writable,
onClick: resetPrompts,
}, t('resetPrompts')),
),
h('div', { className: 'cb-field-desc' }, t('dictationPromptsDesc')),
h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' } },
h('div', null,
h('label', { className: 'cb-label' }, t('promptClean')),
h('textarea', {
className: 'cb-input',
style: { minHeight: '48px', resize: 'vertical' },
value: prompts.clean || '',
placeholder: t('promptCleanPlaceholder'),
disabled: !writable,
onChange: (e) => setPrompt('clean', e.target.value),
}),
),
h('div', null,
h('label', { className: 'cb-label' }, t('promptTask')),
h('textarea', {
className: 'cb-input',
style: { minHeight: '48px', resize: 'vertical' },
value: prompts.task || '',
placeholder: t('promptTaskPlaceholder'),
disabled: !writable,
onChange: (e) => setPrompt('task', e.target.value),
}),
),
h('div', null,
h('label', { className: 'cb-label' }, t('promptBug')),
h('textarea', {
className: 'cb-input',
style: { minHeight: '48px', resize: 'vertical' },
value: prompts.bug || '',
placeholder: t('promptBugPlaceholder'),
disabled: !writable,
onChange: (e) => setPrompt('bug', e.target.value),
}),
),
h('div', null,
h('label', { className: 'cb-label' }, t('promptNote')),
h('textarea', {
className: 'cb-input',
style: { minHeight: '48px', resize: 'vertical' },
value: prompts.note || '',
placeholder: t('promptNotePlaceholder'),
disabled: !writable,
onChange: (e) => setPrompt('note', e.target.value),
}),
),
),
),
)
}
function HardwareOptionsCard(props) {
const {
t = moduleT, draft, setTop, writable, catching, setCatching,
devices = [], testingMic, toggleTestMic, testLevel = 0,
gateDbVal, gateThresholdPercent, calibrating, calibrateMsg, calibrateNoise, onClearKey
} = props
const [benchmarking, setBenchmarking] = React.useState(false)
const [benchmarkResult, setBenchmarkResult] = React.useState(null)
const [benchmarkErr, setBenchmarkErr] = React.useState('')
const runBenchmark = () => {
setBenchmarking(true)
setBenchmarkErr('')
apiClient.runBenchmark()
.then((r) => r.json())
.then((d) => {
setBenchmarking(false)
if (d && d.ok) setBenchmarkResult(d)
else setBenchmarkErr((d && d.error && d.error.message) || t('benchmarkFailed'))
})
.catch((e) => {
setBenchmarking(false)
setBenchmarkErr((e && e.message) || t('networkError'))
})
}
const ratingLabel = (rating) => {
const key = { 'Ultra-fast': 'benchRatingUltraFast', 'Fast': 'fast', 'Real-time': 'benchRatingRealtime', 'Slow': 'slow' }[rating]
return key ? t(key) : String(rating || '')
}
const HOST_BENCH_MESSAGES = {
'Local ASR server is not running. Hardware detected.': 'benchmarkNoAsrServer',
}
const benchmarkMessage = (result) => {
const raw = String(result && result.message || '')
const key = HOST_BENCH_MESSAGES[raw]
return (key && t(key)) || raw || t('benchmarkOffline')
}
const textField = (key, label, hint) => h('div', { className: 'cb-field' },
h('label', null, label),
h('input', {
type: 'text', value: draft && draft[key] !== undefined ? draft[key] : '', disabled: !writable,
onChange: (e) => setTop(key, e.target.value),
}),
h('span', { className: 'dvs-sub' }, hint),
)
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '⚙️ ' + t('hardwareTitle')),
),
h('div', { className: 'cb-section-desc' }, t('hardwareDesc')),
h('div', { className: 'cb-field' },
h('label', null, t('hotkey')),
h('div', { className: 'cb-row' },
h('button', {
type: 'button', className: 'cb-btn cb-btn-primary', disabled: !writable,
onClick: () => setCatching(true),
}, catching ? t('pressKey') : keyLabel(draft && draft.hotkey)),
h('button', {
type: 'button', className: 'cb-btn cb-btn-mini', title: t('clearKey'),
disabled: !writable, onClick: onClearKey,
}, '×'),
),
h('span', { className: 'dvs-sub' }, t('hotkeyHint1') + t('hotkeyHint2')),
),
h('div', { className: 'cb-field' },
h('label', null, t('mic')),
h('div', { className: 'cb-row' },
h('select', {
value: String((draft && draft.micDeviceId) ?? ''), disabled: !writable || testingMic,
onChange: (e) => setTop('micDeviceId', e.target.value),
style: { flex: 1 },
},
h('option', { value: '' }, t('micDefault')),
devices.map((d) => h('option', { key: d.deviceId, value: d.deviceId },
d.label || d.deviceId.slice(0, 12))),
),
h('button', {
type: 'button',
className: 'cb-btn ' + (testingMic ? 'cb-btn-primary' : 'cb-btn-secondary'),
onClick: toggleTestMic,
style: { flex: 'none' },
}, testingMic ? t('stopTest') : t('testMic')),
h('button', {
type: 'button',
className: 'cb-btn cb-btn-secondary',
onClick: () => (typeof calibrateNoise === 'function' ? calibrateNoise(setTop, t) : null),
disabled: calibrating || !writable,
style: { flex: 'none' },
title: t('calibrateNoiseHint') || '',
}, calibrating ? t('calibrating') : t('calibrateNoise')),
),
calibrateMsg ? h('div', {
style: { fontSize: '11px', color: 'var(--dsw-alias-state-success-primary)', marginTop: '4px' },
}, calibrateMsg) : null,
testingMic ? h('div', { className: 'dvo-mic-test' },
h('span', { style: { fontSize: '11px', color: 'var(--dsw-alias-label-secondary)' } }, t('micLevel') + ':'),
h('div', { className: 'dvo-meter-bar' },
h('div', { className: 'dvo-meter-fill', style: { width: `${testLevel}%` } }),
gateThresholdPercent > 0 ? h('div', { className: 'dvo-meter-gate', style: { left: `${gateThresholdPercent}%` }, title: `${gateDbVal} dB` }) : null,
),
h('span', { style: { fontSize: '11px', fontVariantNumeric: 'tabular-nums', width: '32px', textAlign: 'right' } }, `${testLevel}%`),
) : null,
h('div', { className: 'cb-row', style: { marginTop: '6px' } },
h('span', { style: { fontSize: '12px', color: 'var(--dsw-alias-label-secondary)', minWidth: '120px' } }, t('noiseGate') + ':'),
h('select', {
value: String(gateDbVal), disabled: !writable,
onChange: (e) => setTop('noiseGateDb', Number(e.target.value)),
style: { flex: 1 },
},
h('option', { value: '-999' }, t('noiseGateOff')),
h('option', { value: '-50' }, t('noiseGateLow')),
h('option', { value: '-45' }, t('noiseGateStandard')),
h('option', { value: '-35' }, t('noiseGateMedium')),
h('option', { value: '-25' }, t('noiseGateHigh')),
!['-999', '-50', '-45', '-35', '-25'].includes(String(gateDbVal)) ? h('option', { value: String(gateDbVal) }, `${gateDbVal} dB (${t('calibratedValue') || 'Calibrated'})`) : null,
),
),
h('span', { className: 'dvs-sub' }, t('noiseGateHint')),
),
h('div', { className: 'cb-field' },
h('label', null, t('vadEngine')),
h('select', {
value: (draft && draft.vadEngine) || 'silero', disabled: !writable,
onChange: (e) => setTop('vadEngine', e.target.value),
},
h('option', { value: 'silero' }, t('vadSilero')),
h('option', { value: 'amplitude' }, t('vadAmplitude')),
),
h('span', { className: 'dvs-sub' }, t('vadEngineHint')),
),
h('div', { className: 'cb-field' },
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: draft && draft.streamingWs !== false, disabled: !writable,
onChange: (e) => setTop('streamingWs', e.target.checked),
}),
' ' + t('streamingWs'),
),
h('span', { className: 'dvs-sub' }, t('streamingWsHint')),
),
h('div', { className: 'cb-grid-2' },
textField('whisperUrl', t('whisperEndpoint'), t('whisperEndpointHint')),
textField('whisperBin', t('whisperBin'), t('whisperBinHint')),
textField('whisperModel', t('whisperModel'), t('whisperModelHint')),
textField('deepgramBaseUrl', t('deepgramEndpoint'), t('deepgramEndpointHint')),
textField('sensevoiceUrl', t('sensevoiceEndpoint'), t('sensevoiceEndpointHint')),
textField('sensevoiceBin', t('sensevoiceBin'), t('sensevoiceBinHint')),
textField('sensevoiceModel', t('sensevoiceModel'), t('sensevoiceModelHint')),
textField('polishBaseUrl', t('polishBaseUrl'), t('polishBaseUrlHint')),
textField('polishModel', t('polishModel'), ''),
textField('polishKeyEnv', t('polishKeyEnv'), ''),
),
h('div', { className: 'cb-row' },
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.autoStart), disabled: !writable,
onChange: (e) => setTop('autoStart', e.target.checked),
}),
t('whisperAutostart'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.sensevoiceAutostart), disabled: !writable,
onChange: (e) => setTop('sensevoiceAutostart', e.target.checked),
}),
t('sensevoiceAutostart'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.localOnly), disabled: !writable,
onChange: (e) => setTop('localOnly', e.target.checked),
}),
t('localOnly'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.beep), disabled: !writable,
onChange: (e) => setTop('beep', e.target.checked),
}),
t('beep'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: draft ? draft.noiseSuppression !== false : true, disabled: !writable,
onChange: (e) => setTop('noiseSuppression', e.target.checked),
}),
t('noiseSuppression'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: draft ? draft.contextGlossary !== false : true, disabled: !writable,
onChange: (e) => setTop('contextGlossary', e.target.checked),
}),
t('contextGlossary'),
),
h('label', { className: 'cb-check-label', title: t('bilingualDeveloperPromptHint') || '' },
h('input', {
type: 'checkbox', checked: draft ? draft.bilingualDeveloperPrompt !== false : true, disabled: !writable,
onChange: (e) => setTop('bilingualDeveloperPrompt', e.target.checked),
}),
t('bilingualDeveloperPrompt'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.voiceCommands), disabled: !writable,
onChange: (e) => setTop('voiceCommands', e.target.checked),
}),
t('voiceCommandsLabel'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.normalizeTranscript), disabled: !writable,
onChange: (e) => setTop('normalizeTranscript', e.target.checked),
}),
t('normalizeTranscript'),
),
),
h('div', { className: 'cb-field' },
h('label', null, t('visualizerStyle')),
h('select', {
value: String((draft && draft.visualizerStyle) || 'liquid-wave'), disabled: !writable,
onChange: (e) => setTop('visualizerStyle', e.target.value),
},
h('option', { value: 'liquid-wave' }, t('visLiquidWave')),
h('option', { value: 'dynamic-orb' }, t('visDynamicOrb')),
h('option', { value: 'bars' }, t('visBars')),
h('option', { value: 'off' }, t('visOff')),
),
),
h('div', { className: 'cb-field' },
h('label', null, t('npuProvider')),
h('div', { className: 'cb-row' },
h('select', {
value: String((draft && draft.sensevoiceProvider) || 'cpu'),
disabled: !writable,
onChange: (e) => setTop('sensevoiceProvider', e.target.value),
style: { flex: 1 },
},
h('option', { value: 'cpu' }, t('npuCpu')),
h('option', { value: 'rknn' }, 'Rockchip RK3588 NPU (RKNN)'),
h('option', { value: 'coreml' }, 'Apple Silicon CoreML'),
h('option', { value: 'openvino' }, 'Intel OpenVINO'),
h('option', { value: 'cuda' }, 'NVIDIA CUDA'),
),
h('input', {
type: 'number',
min: 1,
max: 32,
value: Number((draft && draft.sensevoiceThreads) || 4),
disabled: !writable,
title: t('npuThreads'),
style: { width: '80px' },
onChange: (e) => setTop('sensevoiceThreads', Math.max(1, Math.min(32, Number(e.target.value) || 4))),
}),
),
h('span', { className: 'dvs-sub' }, t('npuProviderHint')),
),
h('div', { className: 'cb-field' },
h('div', { className: 'cb-row', style: { alignItems: 'center', justifyContent: 'space-between' } },
h('label', { style: { marginBottom: 0 } }, t('benchmarkTitle')),
h('button', {
type: 'button', className: 'cb-btn cb-btn-secondary', style: { fontSize: '12px', padding: '4px 10px' },
disabled: benchmarking || !writable, onClick: runBenchmark,
}, benchmarking ? ('⏳ ' + t('benchmarking')) : ('⚡ ' + t('runBenchmarkBtn'))),
),
benchmarkResult
? h('div', {
style: { marginTop: '8px', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', backgroundColor: 'var(--dsw-alias-fill-quaternary)' }
}, benchmarkResult.running
? `⚡ RTF: ${benchmarkResult.rtf}x · ${benchmarkResult.latencyMs} ${t('msShort')} (${ratingLabel(benchmarkResult.rating)}) · ${String(benchmarkResult.provider || 'cpu').toUpperCase()} · ${t('benchmarkCores')}: ${benchmarkResult.cpuCores}`
: `ℹ ${benchmarkMessage(benchmarkResult)} (${benchmarkResult.cpuCores} ${t('benchmarkCoresUnit')}, ${benchmarkResult.platform})`)
: (benchmarkErr ? h('div', { style: { color: 'var(--dsw-alias-state-danger)', fontSize: '12px', marginTop: '4px' } }, benchmarkErr) : null),
h('span', { className: 'dvs-sub' }, t('benchmarkHint')),
),
h('div', { className: 'cb-field' },
h('label', null, t('webgpuStatus')),
h('div', {
style: {
padding: '6px 10px',
borderRadius: '6px',
fontSize: '12px',
backgroundColor: 'var(--dsw-alias-fill-quaternary)',
color: (typeof isWebGpuSupported === 'function' && isWebGpuSupported())
? 'var(--dsw-alias-state-success)'
: 'var(--dsw-alias-label-secondary)'
}
}, (typeof isWebGpuSupported === 'function' && isWebGpuSupported())
? ('✓ ' + t('webgpuAvailable'))
: ('ℹ ' + t('webgpuNotAvailable'))),
),
h('div', { className: 'cb-field' },
h('label', null, t('vocabulary')),
h('textarea', {
rows: 3, disabled: !writable,
value: Array.isArray(draft && draft.vocabulary) ? draft.vocabulary.join('\n') : '',
onChange: (e) => setTop('vocabulary', e.target.value.split('\n').map((x) => x.trim()).filter(Boolean)),
}),
),
)
}
function useSensevoiceInstaller(fetchStatus) {
const [sensevoiceState, setSensevoiceState] = React.useState(null)
const [installingSensevoice, setInstallingSensevoice] = React.useState(false)
const fetchSensevoice = () => {
apiClient.getSensevoiceInstaller()
.then((r) => r.json())
.then((d) => {
setSensevoiceState(d)
setInstallingSensevoice(!!(d && d.installing))
})
.catch(() => 0)
}
React.useEffect(() => {
fetchSensevoice()
}, [])
const triggerInstallSensevoice = (modelType = 'sensevoice') => {
setInstallingSensevoice(true)
apiClient.installSensevoice(modelType)
.then((r) => r.json())
.then(() => {
const timer = setInterval(() => {
apiClient.getSensevoiceInstaller()
.then((r) => r.json())
.then((d) => {
setSensevoiceState(d)
if (!d.installing) {
clearInterval(timer)
setInstallingSensevoice(false)
if (typeof fetchStatus === 'function') fetchStatus()
}
})
.catch(() => clearInterval(timer))
}, 2000)
})
.catch(() => setInstallingSensevoice(false))
}
return { sensevoiceState, installingSensevoice, triggerInstallSensevoice }
}
function useMicTester(draft, value, setErr) {
const [testingMic, setTestingMic] = React.useState(false)
const [testLevel, setTestLevel] = React.useState(0)
const [calibrating, setCalibrating] = React.useState(false)
const [calibrateMsg, setCalibrateMsg] = React.useState('')
const testRef = React.useRef(null)
const calibrateNoise = async (setTop, translate) => {
if (calibrating) return
setCalibrating(true)
setCalibrateMsg('')
let stream = null
let audioCtx = null
try {
const devId = (draft && draft.micDeviceId) || (value && value.micDeviceId) || ''
const audio = { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
if (devId) audio.deviceId = { exact: devId }
stream = await navigator.mediaDevices.getUserMedia({ audio })
const AC = typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (!AC) throw new Error(t('audioContextUnsupported'))
audioCtx = new AC()
if (audioCtx.state === 'suspended') await audioCtx.resume().catch(() => 0)
const src = audioCtx.createMediaStreamSource(stream)
const analyser = audioCtx.createAnalyser()
analyser.fftSize = 512
src.connect(analyser)
const samples = []
const buf = new Float32Array(analyser.fftSize)
const startTime = Date.now()
await new Promise((resolve) => {
const interval = setInterval(() => {
if (Date.now() - startTime >= 2000) {
clearInterval(interval)
resolve()
return
}
analyser.getFloatTimeDomainData(buf)
let sum = 0
for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i]
const rms = Math.sqrt(sum / buf.length)
if (rms > 0.00001) {
samples.push(20 * Math.log10(rms))
}
}, 50)
})
const avgDb = samples.length > 0 ? (samples.reduce((a, b) => a + b, 0) / samples.length) : -50
const roundedAvg = Math.round(avgDb)
const recommended = Math.min(-25, Math.max(-55, roundedAvg + 5))
if (typeof setTop === 'function') setTop('noiseGateDb', recommended)
const tFn = typeof translate === 'function' ? translate : (k) => k
const msg = (tFn('calibratedMsg') || 'Gate set: {db} dB (ambient: {noise} dB)')
.replace('{db}', String(recommended))
.replace('{noise}', String(roundedAvg))
setCalibrateMsg(msg)
setTimeout(() => setCalibrateMsg(''), 5000)
} catch (e) {
if (typeof setErr === 'function') setErr(String(e && e.message ? e.message : e))
} finally {
if (stream) {
try { stream.getTracks().forEach((t) => t.stop()) } catch (e) { 0 }
}
if (audioCtx) {
try { audioCtx.close() } catch (e) { 0 }
}
setCalibrating(false)
}
}
const toggleTestMic = async () => {
if (testingMic) {
if (testRef.current) {
testRef.current.active = false
try { testRef.current.stream.getTracks().forEach((t) => t.stop()) } catch (e) { 0 }
if (testRef.current.audioCtx) { try { testRef.current.audioCtx.close() } catch (e) { 0 } }
testRef.current = null
}
setTestingMic(false)
setTestLevel(0)
return
}
try {
const devId = (draft && draft.micDeviceId) || (value && value.micDeviceId) || ''
const audio = { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
if (devId) audio.deviceId = { exact: devId }
const stream = await navigator.mediaDevices.getUserMedia({ audio })
const AC = typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (!AC) return
const audioCtx = new AC()
if (audioCtx.state === 'suspended') await audioCtx.resume().catch(() => 0)
const src = audioCtx.createMediaStreamSource(stream)
let lastNode = src
try {
const filter = audioCtx.createBiquadFilter()
filter.type = 'highpass'
filter.frequency.value = 80
filter.Q.value = 0.707
src.connect(filter)
lastNode = filter
} catch (e) { 0 }
const analyser = audioCtx.createAnalyser()
analyser.fftSize = 128
lastNode.connect(analyser)
testRef.current = { stream, audioCtx, analyser, active: true }
setTestingMic(true)
const check = () => {
if (!testRef.current || !testRef.current.active) return
const arr = new Uint8Array(analyser.frequencyBinCount)
analyser.getByteFrequencyData(arr)
let sum = 0
for (let i = 0; i < arr.length; i++) sum += arr[i]
const avg = sum / (arr.length || 1)
setTestLevel(Math.min(100, Math.round((avg / 128) * 100)))
requestAnimationFrame(check)
}
requestAnimationFrame(check)
} catch (e) {
if (typeof setErr === 'function') setErr(String(e && e.message ? e.message : e))
}
}
React.useEffect(() => {
return () => {
if (testRef.current) {
testRef.current.active = false
try { testRef.current.stream.getTracks().forEach((t) => t.stop()) } catch (e) { 0 }
if (testRef.current.audioCtx) { try { testRef.current.audioCtx.close() } catch (e) { 0 } }
testRef.current = null
}
}
}, [])
const gateDbVal = Number((draft && draft.noiseGateDb !== undefined) ? draft.noiseGateDb : (value && value.noiseGateDb !== undefined) ? value.noiseGateDb : -45)
const gateThresholdPercent = gateDbVal <= -90 ? 0 : Math.min(100, Math.max(0, Math.round(((gateDbVal + 60) / 40) * 100)))
return { testingMic, testLevel, toggleTestMic, gateDbVal, gateThresholdPercent, calibrating, calibrateMsg, calibrateNoise }
}
function usePluginUpdater() {
const [updaterStatus, setUpdaterStatus] = React.useState(null)
const [updating, setUpdating] = React.useState(false)
const [updaterMsg, setUpdaterMsg] = React.useState('')
const [updaterMsgKind, setUpdaterMsgKind] = React.useState('')
const [updaterLoading, setUpdaterLoading] = React.useState(false)
const checkUpdater = React.useCallback(async () => {
setUpdaterLoading(true)
setUpdaterMsg('')
setUpdaterMsgKind('')
try {
const res = await apiClient.getUpdateStatus()
if (!res.ok) throw new Error(`HTTP ${res.status}`)
const data = await res.json()
setUpdaterStatus(data)
if (data && data.latestCheckFailed) {
setUpdaterMsg(t('updateCheckFailed'))
setUpdaterMsgKind('err')
}
} catch (e) {
setUpdaterStatus(null)
setUpdaterMsg(t('updateCheckFailed') + ': ' + (e?.message || String(e)))
setUpdaterMsgKind('err')
} finally {
setUpdaterLoading(false)
}
}, [])
const onUpdateNow = async () => {
if (updating) return
setUpdating(true)
setUpdaterMsg('')
setUpdaterMsgKind('')
try {
const res = await apiClient.triggerUpdate()
const data = await res.json().catch(() => ({}))
if (!res.ok || data.ok === false) {
if (data.code) {
const base = t('profileLockCheckError')
throw new Error(base ? `${base} (${data.code})` : (data.error || `HTTP ${res.status}`))
}
if (data.locked) {
const key = data.pid ? 'profileLockedPid' : 'profileLockedExisting'
const translated = t(key)
if (translated && translated !== key) {
throw new Error(data.pid ? translated.replace('{pid}', String(data.pid)) : translated)
}
}
throw new Error(data.error || `HTTP ${res.status}`)
}
setUpdaterMsg(data.message || t('updateSuccess'))
setUpdaterMsgKind('ok')
checkUpdater()
} catch (err) {
setUpdaterMsg(err && err.message ? err.message : String(err))
setUpdaterMsgKind('err')
} finally {
setUpdating(false)
}
}
return { updaterStatus, updating, updaterMsg, updaterMsgKind, updaterLoading, checkUpdater, onUpdateNow }
}
function JargonEditor(props) {
const t = props.t || moduleT
const draft = props.draft
const setTop = props.setTop
const writable = props.writable
const jargonInput = props.jargonInput
const setJargonInput = props.setJargonInput
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '📖 ' + t('jargonTitle')),
),
h('label', { className: 'cb-check-label', style: { marginBottom: '8px' } },
h('input', {
type: 'checkbox',
checked: draft ? draft.techJargonCorrection !== false : true,
disabled: !writable,
onChange: (e) => setTop('techJargonCorrection', e.target.checked),
}),
t('techJargonCorrection'),
),
h('div', { className: 'cb-field' },
h('label', null, t('jargonAdd') + t('jargonFormatHint')),
h('textarea', {
rows: 3,
disabled: !writable,
placeholder: t('jargonPlaceholder'),
value: jargonInput !== null && jargonInput !== undefined
? jargonInput
: (Array.isArray(draft && draft.jargonDictionary)
? draft.jargonDictionary.map((item) => item && item.from ? `${item.from} -> ${item.to}` : '').filter(Boolean).join('\n')
: ''),
onChange: (e) => setJargonInput && setJargonInput(e.target.value),
onBlur: () => {
if (jargonInput === null || jargonInput === undefined) return
const lines = jargonInput.split('\n')
const parsed = lines
.map((line) => {
const parts = line.split(/->|=|:/)
if (parts.length >= 2) {
const from = parts[0].trim()
const to = parts.slice(1).join(':').trim()
if (from && to) return { from, to }
}
return null
})
.filter(Boolean)
setTop('jargonDictionary', parsed)
},
}),
),
)
}
function MacrosSection(props) {
const { t, draft, setTop, writable } = props
const macros = Array.isArray(draft && draft.voiceMacros) ? draft.voiceMacros : []
const addMacro = () => {
const next = [...macros, { trigger: '', template: '' }]
setTop('voiceMacros', next)
}
const updateMacro = (idx, field, val) => {
const next = macros.map((item, i) => (i === idx ? { ...item, [field]: val } : item))
setTop('voiceMacros', next)
}
const removeMacro = (idx) => {
const next = macros.filter((_, i) => i !== idx)
setTop('voiceMacros', next)
}
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '⚡ ' + t('voiceMacrosTitle')),
h('button', {
type: 'button',
className: 'cb-btn cb-btn-secondary',
style: { fontSize: '11px', padding: '2px 8px' },
disabled: !writable,
onClick: addMacro,
}, '+ ' + t('addMacro')),
),
h('div', { className: 'cb-field-desc' }, t('voiceMacrosDesc')),
macros.length === 0
? h('div', { style: { fontStyle: 'italic', color: 'var(--dsw-alias-label-tertiary)', fontSize: '12px', marginTop: '6px' } },
t('macroEmpty'),
)
: h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' } },
macros.map((m, idx) =>
h('div', { key: idx, className: 'dvo-macro-item' },
h('div', { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
h('input', {
type: 'text',
className: 'cb-input',
style: { flex: '1', height: '28px', fontSize: '12px' },
placeholder: t('macroTrigger'),
value: m.trigger || '',
disabled: !writable,
onChange: (e) => updateMacro(idx, 'trigger', e.target.value),
}),
h('button', {
type: 'button',
className: 'cb-btn cb-btn-secondary',
style: { padding: '2px 6px', fontSize: '11px', color: 'var(--dsw-alias-state-error-primary)' },
disabled: !writable,
onClick: () => removeMacro(idx),
}, t('macroDelete')),
),
h('textarea', {
className: 'cb-input',
style: { minHeight: '38px', resize: 'vertical', fontSize: '12px' },
placeholder: t('macroTemplate') + t('macroTemplateArgHint'),
value: m.template || '',
disabled: !writable,
onChange: (e) => updateMacro(idx, 'template', e.target.value),
}),
),
),
),
)
}
function SensevoiceSection(props) {
const t = props.t || moduleT
const sensevoiceState = props.sensevoiceState
const installingSensevoice = props.installingSensevoice
const writable = props.writable
const onInstall = props.onInstall
const [modelChoice, setModelChoice] = React.useState('sensevoice')
const isInstalled = Boolean(sensevoiceState && sensevoiceState.installed)
const currentType = (sensevoiceState && sensevoiceState.modelType) || 'sensevoice'
const badgeText = isInstalled
? (t('sensevoiceReady') + (currentType === 'whisper-turbo' ? ' (whisper-turbo)' : ' (small-int8)'))
: (installingSensevoice ? t('sensevoiceDownloading') : t('sensevoiceNotInstalled'))
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '⚡ ' + t('sensevoiceTitle')),
h('span', { className: 'cb-badge ' + (isInstalled ? 'cb-badge-ok' : 'cb-badge-warn') }, badgeText),
),
h('div', { className: 'cb-section-desc' }, t('sensevoiceDesc')),
h('div', { className: 'dvo-installer-box' },
h('div', { className: 'cb-row', style: { alignItems: 'center', justifyContent: 'space-between', gap: '12px' } },
h('select', {
value: modelChoice,
disabled: installingSensevoice || !writable,
onChange: (e) => setModelChoice(e.target.value),
style: { flex: 1, fontSize: '12px', minWidth: '180px' },
},
h('option', { value: 'sensevoice' }, t('installModelSensevoice')),
h('option', { value: 'whisper-turbo' }, t('installModelWhisperTurbo')),
),
h('button', {
type: 'button',
className: 'cb-btn cb-btn-primary',
style: { fontSize: '12px', padding: '6px 12px', whiteSpace: 'nowrap' },
disabled: installingSensevoice || !writable,
onClick: () => { if (typeof onInstall === 'function') onInstall(modelChoice) },
}, installingSensevoice ? ('⏳ ' + t('installingSensevoice')) : ('📥 ' + t('installSensevoice'))),
),
h('div', { style: { fontSize: '11px', marginTop: '6px', color: 'var(--dsw-alias-content-secondary)' } },
sensevoiceState && sensevoiceState.path
? ('~/' + sensevoiceState.path.replace(/^.*[\\/](\.dsh[\\/]models[\\/].*)$/, '$1'))
: ('~/.dsh/models/' + modelChoice)
),
installingSensevoice
? h('div', { style: { marginTop: '8px' } },
h('div', { className: 'dvo-progress-bar' },
h('div', { className: 'dvo-progress-bar-fill' })
),
h('div', { style: { fontSize: '11px', marginTop: '4px', color: 'var(--dsw-alias-content-secondary)' } },
(sensevoiceState && sensevoiceState.progress) || t('sensevoiceDownloading')
)
)
: null
)
)
}
function ConnectionStatusCard(props) {
const t = props.t || moduleT
const hostOnline = props.hostOnline
const statusLatency = props.statusLatency
const whisperRunning = props.whisperRunning
const providerCount = props.providerCount
const onRefresh = props.onRefresh
const onOpenWizard = props.onOpenWizard
return h(UiSectionCard, {
title: t('statusTitle'),
actions: h('div', { style: { display: 'flex', gap: DESIGN_TOKENS.space.sm, alignItems: 'center' } },
onOpenWizard ? h(UiActionButton, {
variant: 'primary', size: 'sm',
onClick: onOpenWizard,
}, '✨ ' + t('wizardBtnLaunch')) : null,
h(UiActionButton, {
size: 'sm',
onClick: onRefresh,
}, '🔄 ' + t('refreshStats')),
),
},
h('div', { className: 'cb-row', style: { alignItems: 'center', gap: DESIGN_TOKENS.space.md, flexWrap: 'wrap' } },
h(UiStatusBadge, { status: hostOnline ? 'ok' : 'err' },
hostOnline ? (`✓ ${t('hostOnline')} (${statusLatency} ${t('msShort')})`) : (`✗ ${t('hostOffline')}`)
),
h(UiStatusBadge, { status: whisperRunning ? 'ok' : 'warn' },
whisperRunning ? (`✓ ${t('whisperReady')}`) : (`· ${t('whisperStopped')}`)
),
h(UiStatusBadge, { status: 'neutral' }, `${providerCount} ${t('providersAvailable')}`),
),
)
}
function UpdaterCard(props) {
const t = props.t || moduleT
const updaterStatus = props.updaterStatus
const updaterLoading = props.updaterLoading
const updating = props.updating
const updaterMsg = props.updaterMsg
const updaterMsgKind = props.updaterMsgKind
const onCheck = props.onCheck
const onUpdateNow = props.onUpdateNow
return h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '📦 ' + t('versionTitle')),
h('button', {
type: 'button', className: 'cb-btn', style: { fontSize: '12px', padding: '4px 8px' },
onClick: onCheck, disabled: updaterLoading || updating,
}, updaterLoading ? '⏳…' : '🔄 ' + t('refreshStats')),
),
h('div', { className: 'cb-section-desc' }, t('versionHint')),
h('div', { className: 'cb-row', style: { alignItems: 'center', gap: '12px' } },
updaterStatus && updaterStatus.currentVersion
? h('span', { className: 'cb-badge cb-badge-ok' }, 'v' + updaterStatus.currentVersion)
: null,
updaterLoading && (!updaterStatus || !updaterStatus.currentVersion)
? h('span', { className: 'cb-badge' }, '⏳ ' + t('checkingUpdates'))
: !updaterStatus
? h('span', { className: 'cb-badge cb-badge-warn' }, '❓ ' + t('updateStatusUnknown'))
: updaterStatus.updateAvailable
? h('span', { className: 'cb-badge cb-badge-warn' },
t('updateAvailable') + ': v' + updaterStatus.latestVersion
)
: updaterStatus.latestCheckFailed
? h('span', { className: 'cb-badge cb-badge-warn' },
'⚠️ ' + t('updateCheckFailed')
)
: h('span', { className: 'cb-badge cb-badge-ok' },
t('upToDate')
),
updaterStatus && updaterStatus.updateAvailable
? h('button', {
type: 'button', className: 'cb-btn cb-btn-primary', style: { fontSize: '12px', padding: '4px 10px' },
onClick: onUpdateNow, disabled: updating,
}, updating ? t('updating') : t('updateNow'))
: null,
),
updaterMsg
? h('div', {
style: {
marginTop: '8px',
fontSize: '12px',
color: (updaterMsgKind === 'err' || (!updaterMsgKind && (updaterMsg.includes('fail') || updaterMsg.includes('失败'))))
? 'var(--dsw-alias-state-warning-primary)'
: 'var(--dsw-alias-state-success-primary)',
},
}, updaterMsg)
: null,
)
}
function VoiceSection(props) {
const t = (props && props.t) || moduleT
const ctx = (props && props.ctx) || {}
const settingsService = (ctx.get && ctx.get('lanSettings')) || ctx.configForms || ctx.settingsScope
const scope = settingsService && typeof settingsService.get === 'function'
? settingsService.get('local-dsh-thai')
: (settingsService && typeof settingsService.bind === 'function' ? settingsService.bind({ namespace: 'local-dsh-thai' }) : null)
const [snap, setSnap] = React.useState(null)
const [draft, setDraft] = React.useState(null)
const [saved, setSaved] = React.useState(false)
const [err, setErr] = React.useState('')
const [serverConfig, setServerConfig] = React.useState(null)
const [configLoading, setConfigLoading] = React.useState(true)
const [revision, setRevision] = React.useState(null)
React.useEffect(() => {
let alive = true
apiClient.getConfig()
.then((r) => r.json())
.then((data) => {
if (alive && data && data.ok && data.config) {
setServerConfig(data.config)
if (typeof data.revision === 'number') setRevision(data.revision)
setDraft((curr) => curr || deepClone(data.config))
if (data.config.wizardCompleted !== true) setShowWizard(true)
}
})
.catch(() => 0)
.finally(() => {
if (alive) setConfigLoading(false)
})
return () => { alive = false }
}, [])
const [catching, setCatching] = React.useState(false)
const [jargonInput, setJargonInput] = React.useState(null)
const [showWizard, setShowWizard] = React.useState(false)
React.useEffect(() => {
if (!catching) return undefined
const onKey = (event) => {
event.preventDefault()
event.stopPropagation()
if (event.key === 'Escape') { setCatching(false); return }
const chosen = keyFromEvent(event)
setDraft((d) => Object.assign({}, d || {}, { hotkey: chosen }))
voice.hotkey = chosen || ''
if (chosen) {
installHotkey(ctx, chosen, 'message')
} else {
clearGlobalHotkey()
}
setCatching(false)
}
document.addEventListener('keydown', onKey, true)
return () => document.removeEventListener('keydown', onKey, true)
}, [catching, ctx])
React.useEffect(() => {
let alive = true
const render = () => { if (alive && scope && typeof scope.getSnapshot === 'function') setSnap(scope.getSnapshot()) }
render()
const off = (scope && typeof scope.subscribe === 'function') ? scope.subscribe(render) : () => {}
return () => { alive = false; off() }
}, [scope])
const [devices, setDevices] = React.useState([])
React.useEffect(() => {
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return
navigator.mediaDevices.enumerateDevices()
.then((list) => setDevices(list.filter((d) => d.kind === 'audioinput')))
.catch(() => 0)
}, [])
const ready = !!serverConfig || (!!snap && snap.status === 'ready')
const value = (snap && snap.status === 'ready' && snap.value) ? snap.value : (serverConfig || {})
const writable = ready
React.useEffect(() => {
if (ready) return undefined
let tries = 0
const timer = setInterval(() => {
if (tries >= 15) { clearInterval(timer); return }
tries += 1
try {
if (ctx.configForms && typeof ctx.configForms.describe === 'function') {
ctx.configForms.describe().load()
} else if (ctx.settingsScope && typeof ctx.settingsScope.describe === 'function') {
ctx.settingsScope.describe().load()
}
} catch (e) { 0 }
}, 1000)
return () => clearInterval(timer)
}, [ready])
const deepClone = (obj) => {
if (typeof structuredClone === 'function') {
try { return structuredClone(obj) } catch (e) { 0 }
}
try { return JSON.parse(JSON.stringify(obj)) } catch (e) { return Object.assign({}, obj) }
}
const draftValidation = validateSettingsDraft(draft)
const isDirty = isSettingsDraftDirty(serverConfig || value, draft)
const isValid = draftValidation.isValid
const patchDraft = (key, val) => {
setDraft((d) => Object.assign({}, d || {}, { [key]: val }))
}
const patchNestedDraft = (mode, key, val) => {
setDraft((d) => {
const next = Object.assign({}, d || {})
next[mode] = Object.assign({}, next[mode] || {}, { [key]: val })
return next
})
}
const resetDraft = () => {
setDraft(deepClone(serverConfig || value))
setErr('')
}
const setTop = patchDraft
const setIn = patchNestedDraft
const textField = (key, label, hint) => h('div', { className: 'cb-field' },
h('label', null, label),
h('input', {
type: 'text',
value: (draft && draft[key]) ?? '',
disabled: !writable,
onChange: (e) => setTop(key, e.target.value),
}),
hint ? h('span', { className: 'dvs-sub' }, hint) : null,
)
React.useEffect(() => { if (ready && draft === null) setDraft(deepClone(value)) }, [ready, draft, value])
React.useEffect(() => {
if (!ready) return
const val = value || {}
voice.settings = Object.assign({}, voice.settings, {
vadSilenceMs: Number(val.dictation && val.dictation.vadSilenceMs) || 700,
autoSendMs: Number(val.message && val.message.autoSendMs) || 4000,
beep: !!val.beep,
localOnly: !!val.localOnly,
micDeviceId: String(val.micDeviceId || ''),
historyLimit: Number(val.historyLimit) || 20,
voiceCommands: !!val.voiceCommands,
sendDelayMs: Number(val.dictation && val.dictation.sendDelayMs) || 0,
stream: !!(val.dictation && val.dictation.stream),
streamChunkMs: Number(val.dictation && val.dictation.streamChunkMs) || 1200,
vadAdapt: Number(val.dictation && val.dictation.vadAdapt) || 0,
wakeWord: String(val.wakeWord || ''),
bargeIn: !!val.bargeIn,
polishSend: !!(val.message && val.message.polishSend),
editablePreview: val.message ? val.message.editablePreview !== false : true,
sessionCommands: !!(val.message && val.message.sessionCommands),
polishBaseUrl: String(val.polishBaseUrl || ''),
noiseSuppression: val.noiseSuppression !== false,
noiseGateDb: Number(val.noiseGateDb !== undefined ? val.noiseGateDb : -45), bilingualDeveloperPrompt: val.bilingualDeveloperPrompt !== false,
contextGlossary: val.contextGlossary !== false,
visualizerStyle: val.visualizerStyle || 'liquid-wave',
gatedTurnTaking: val.gatedTurnTaking !== false,
autoSendVisualRing: val.autoSendVisualRing !== false,
voiceActions: val.voiceActions !== false,
techJargonCorrection: val.techJargonCorrection !== false,
liveInterimPreview: val.liveInterimPreview !== false,
audioFeedback: val.audioFeedback !== false,
structuredPromptVoice: val.structuredPromptVoice !== false,
showDictationModeButton: val.showDictationModeButton !== false,
showDictationButton: val.showDictationButton !== false,
showMessageButton: val.showMessageButton !== false,
dictationMode: val.dictationMode || 'clean',
dictationPrompts: val.dictationPrompts || {},
voiceMacros: Array.isArray(val.voiceMacros) ? val.voiceMacros : [],
webgpuModel: String(val.webgpuModel || (voice.settings && voice.settings.webgpuModel) || 'onnx-community/whisper-tiny'),
})
}, [ready, value])
const [statusData, setStatusData] = React.useState(null)
const [statusLatency, setStatusLatency] = React.useState(null)
const fetchStatus = React.useCallback(() => {
const start = performance.now()
const ctrl = new AbortController()
const tId = setTimeout(() => ctrl.abort(), 5000)
apiClient.getStatus({ signal: ctrl.signal })
.then((r) => r.json())
.then((data) => {
clearTimeout(tId)
setStatusLatency(Math.round(performance.now() - start))
if (data && data.ok) {
setStatusData(data)
if (data.sessionToken && typeof window !== 'undefined') window.__dshVoiceToken = data.sessionToken
if (data.webgpuModel && voice.settings) {
voice.settings.webgpuModel = data.webgpuModel
}
}
})
.catch(() => {
clearTimeout(tId)
setStatusLatency(null)
})
}, [])
React.useEffect(() => {
fetchStatus()
}, [fetchStatus])
const { sensevoiceState, installingSensevoice, triggerInstallSensevoice } = useSensevoiceInstaller(fetchStatus)
const { testingMic, testLevel, toggleTestMic, gateDbVal, gateThresholdPercent, calibrating, calibrateMsg, calibrateNoise } = useMicTester(draft, value, setErr)
const { updaterStatus, updating, updaterMsg, updaterMsgKind, updaterLoading, checkUpdater, onUpdateNow } = usePluginUpdater()
const save = async () => {
setErr(''); setSaved(false)
if (!draft) return
if (jargonInput !== null) {
const lines = jargonInput.split('\n')
const parsed = lines
.map((line) => {
const parts = line.split(/->|=|:/)
if (parts.length >= 2) {
const from = parts[0].trim()
const to = parts.slice(1).join(':').trim()
if (from && to) return { from, to }
}
return null
})
.filter(Boolean)
draft.jargonDictionary = parsed
}
let httpOk = false
let httpError = null
try {
const res = await apiClient.putConfig({ config: draft, expectedRevision: (typeof revision === 'number' ? revision : undefined) })
const data = await res.json()
if (res.ok && data && data.ok) {
httpOk = true
if (data.config) setServerConfig(data.config)
if (typeof data.revision === 'number') setRevision(data.revision)
} else if (res.status === 409) {
httpError = data?.error?.message || t('settingsConflict')
} else {
httpError = data?.error?.message || data?.error || res.statusText || t('saveFailedFallback')
}
} catch (e) {
httpError = e?.message || String(e)
}
if (httpOk && scope && typeof scope.set === 'function') {
for (const k of Object.keys(draft)) {
try {
await scope.set(k, draft[k])
} catch (e) { 0 }
}
}
if (!httpOk) {
setErr(t('saveFailed') + ': ' + httpError)
return
}
const d = draft || {}
voice.hotkey = d.hotkey || ''
if (voice.hotkey) {
installHotkey(ctx, voice.hotkey, 'message')
} else {
clearGlobalHotkey()
}
Object.assign(voice.settings, {
hotkey: d.hotkey || '',
vadSilenceMs: Number(d.dictation && d.dictation.vadSilenceMs) || 700,
autoSendMs: Number(d.message && d.message.autoSendMs) || 4000,
beep: !!d.beep,
micDeviceId: String(d.micDeviceId || ''),
historyLimit: Number(d.historyLimit),
voiceCommands: !!d.voiceCommands,
sendDelayMs: Number(d.dictation && d.dictation.sendDelayMs) || 0,
stream: !!(d.dictation && d.dictation.stream),
streamChunkMs: Number(d.dictation && d.dictation.streamChunkMs) || 1200,
vadAdapt: Number(d.dictation && d.dictation.vadAdapt) || 0,
noiseSuppression: d.noiseSuppression !== false,
noiseGateDb: Number(d.noiseGateDb !== undefined ? d.noiseGateDb : -45), bilingualDeveloperPrompt: d.bilingualDeveloperPrompt !== false,
contextGlossary: d.contextGlossary !== false,
visualizerStyle: d.visualizerStyle || 'liquid-wave',
gatedTurnTaking: d.gatedTurnTaking !== false,
autoSendVisualRing: d.autoSendVisualRing !== false,
voiceActions: d.voiceActions !== false,
techJargonCorrection: d.techJargonCorrection !== false,
liveInterimPreview: d.liveInterimPreview !== false,
audioFeedback: d.audioFeedback !== false,
structuredPromptVoice: d.structuredPromptVoice !== false,
showDictationModeButton: d.showDictationModeButton !== false,
showDictationButton: d.showDictationButton !== false,
showMessageButton: d.showMessageButton !== false,
})
try { window.dispatchEvent(new CustomEvent('dsh-voice:settings-saved')) } catch (noEvents) { 0 }
voice.notify(); setSaved(true); setJargonInput(null)
setTimeout(() => setSaved(false), 2000)
fetchStatus()
}
const checkItem = (k, label, defVal = true) => h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox',
checked: defVal ? (draft ? draft[k] !== false : true) : !!(draft && draft[k]),
disabled: !writable,
onChange: (e) => setTop(k, e.target.checked),
}),
label,
)
const modeVal = (mode, key, fallback) => {
const m = draft && draft[mode]
return m && m[key] !== undefined ? m[key] : fallback
}
const chainOptions = BUILTIN.concat(
(draft && Array.isArray(draft.customProviders) ? draft.customProviders : [])
.map((c) => String(c && c.key || '').trim())
.filter((k) => k && BUILTIN.indexOf(k) < 0),
)
const langField = (mode) => {
const val = modeVal(mode, 'language', '')
const opts = SUPPORTED_LANGS.slice()
if (val && !opts.some((o) => o.code === val)) {
opts.push({ code: val, labelKey: val, defaultLabel: val })
}
return h('div', { className: 'cb-field' },
h('label', null, t('language')),
h('select', {
value: val, disabled: !writable,
onChange: (e) => setIn(mode, 'language', e.target.value),
}, opts.map((o) => h('option', { key: o.code || 'auto', value: o.code },
t(o.labelKey) !== o.labelKey ? t(o.labelKey) : o.defaultLabel
))),
)
}
const numField = (mode, key, label, hint) => h('div', { className: 'cb-field' },
h('label', null, label),
h('input', {
type: 'number', value: modeVal(mode, key, ''), disabled: !writable,
onChange: (e) => setIn(mode, key, Number(e.target.value)),
}),
h('span', { className: 'dvs-sub' }, hint),
)
const statsData = (statusData && statusData.providerStats) || {}
const recentDiagnostics = (statusData && statusData.recentDiagnostics) || []
const hostOnline = statusLatency !== null
const whisperRunning = !!(statusData && statusData.whisperRunning)
const providerCount = (statusData && Array.isArray(statusData.providers)) ? statusData.providers.length : chainOptions.length
return h('div', { className: 'cb-page dvo-settings-root' },
h(ConnectionStatusCard, {
t: t,
hostOnline: hostOnline,
statusLatency: statusLatency,
whisperRunning: whisperRunning,
providerCount: providerCount,
onRefresh: fetchStatus,
onOpenWizard: () => setShowWizard((v) => !v),
}),
showWizard ? h(VoiceErrorBoundary, { section: 'wizard' }, h(FirstRunWizard, {
t, draft, setTop, writable,
onClose: () => setShowWizard(false),
})) : null,
h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '🎙️ ' + t('dictationBtn')),
),
h('div', { className: 'cb-section-desc' }, t('dictationHint')),
React.createElement(ChainEditor, {
t: t, value: draft && draft.dictation ? draft.dictation.chain : [], writable: writable,
options: chainOptions,
onChange: (v) => setIn('dictation', 'chain', v),
}),
h('div', { className: 'cb-grid-2' },
langField('dictation'),
numField('dictation', 'vadSilenceMs', t('pauseMs'), t('pauseHint')),
numField('dictation', 'sendDelayMs', t('sendDelay'), t('sendDelayHint')),
numField('dictation', 'streamChunkMs', t('streamChunkMs'), t('streamHint')),
),
h('div', { className: 'cb-row' },
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.dictation && draft.dictation.polish), disabled: !writable,
onChange: (e) => setIn('dictation', 'polish', e.target.checked),
}),
t('polish'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.dictation && draft.dictation.stream), disabled: !writable,
onChange: (e) => setIn('dictation', 'stream', e.target.checked),
}),
t('stream'),
),
),
h('div', { className: 'cb-field' },
h('label', null, t('vadAdapt')),
h('input', {
type: 'range', min: 0, max: 1, step: 0.1,
value: Number(draft && draft.dictation && draft.dictation.vadAdapt) || 0, disabled: !writable,
onChange: (e) => setIn('dictation', 'vadAdapt', Number(e.target.value)),
}),
h('span', { className: 'dvs-sub' }, t('vadAdaptHint')),
),
textField('wakeWord', t('wakeWord'), t('wakeWordHint')),
),
h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '💬 ' + t('messageTitle')),
),
h('div', { className: 'cb-section-desc' }, t('messageHint')),
React.createElement(ChainEditor, {
t: t, value: draft && draft.message ? draft.message.chain : [], writable: writable,
options: chainOptions,
onChange: (v) => setIn('message', 'chain', v),
}),
h('div', { className: 'cb-grid-2' },
langField('message'),
numField('message', 'autoSendMs', t('undoMs'), t('undoHint')),
),
h('div', { className: 'cb-row' },
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.message && draft.message.polish), disabled: !writable,
onChange: (e) => setIn('message', 'polish', e.target.checked),
}),
t('polish'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.message && draft.message.polishSend), disabled: !writable,
onChange: (e) => setIn('message', 'polishSend', e.target.checked),
}),
t('polishSend'),
),
h('label', { className: 'cb-check-label' },
h('input', {
type: 'checkbox', checked: !!(draft && draft.message && draft.message.sessionCommands), disabled: !writable,
onChange: (e) => setIn('message', 'sessionCommands', e.target.checked),
}),
t('sessionCommands'),
),
),
),
h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '⚙️ ' + t('customTitle')),
),
h('div', { className: 'cb-section-desc' }, t('customHint')),
React.createElement(CustomEditor, {
value: draft && draft.customProviders ? draft.customProviders : [], writable: writable,
options: chainOptions,
onChange: (v) => setTop('customProviders', v),
}),
),
h(HardwareOptionsCard, {
t, draft, setTop, writable,
catching: catching,
setCatching: setCatching,
devices: devices,
testingMic: testingMic,
toggleTestMic: toggleTestMic,
testLevel: testLevel,
gateDbVal: gateDbVal,
gateThresholdPercent: gateThresholdPercent,
calibrating: calibrating,
calibrateMsg: calibrateMsg,
calibrateNoise: calibrateNoise,
onClearKey: () => {
setDraft((d) => Object.assign({}, d || {}, { hotkey: '' }))
voice.hotkey = ''
clearGlobalHotkey()
},
}),
h(VoiceErrorBoundary, { section: 'sensevoice' }, h(SensevoiceSection, {
t: t,
sensevoiceState: sensevoiceState,
installingSensevoice: installingSensevoice,
writable: writable,
onInstall: triggerInstallSensevoice,
})),
h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '🎙️ ' + t('turnTakingTitle')),
),
h('div', { className: 'cb-section-desc' }, t('turnTakingDesc')),
h('div', { className: 'cb-grid-2' },
checkItem('gatedTurnTaking', t('gatedTurnTaking')),
checkItem('bargeIn', t('bargeInDesc'), false),
),
),
h('div', { className: 'cb-section-card' },
h('div', { className: 'cb-section-title' },
h('span', null, '✨ ' + t('smartActionsTitle')),
),
h('div', { className: 'cb-grid-2' },
checkItem('liveInterimPreview', t('liveInterimPreview')),
checkItem('autoSendVisualRing', t('autoSendVisualRing')),
checkItem('voiceActions', t('voiceActionsLabel')),
checkItem('structuredPromptVoice', t('structuredPromptVoice')),
checkItem('audioFeedback', t('audioFeedback')),
checkItem('showDictationModeButton', t('showDictationModeBtn')),
checkItem('showDictationButton', t('showDictationBtn')),
checkItem('showMessageButton', t('showMessageBtn')),
),
),
h(DictationModesSection, {
t, draft, setTop, writable,
}),
h(MacrosSection, {
t, draft, setTop, writable,
}),
h(JargonEditor, {
t, draft, setTop, writable,
jargonInput: jargonInput,
setJargonInput: setJargonInput,
}),
h(ProviderDashboard, {
t: t,
statsData: statsData,
recentDiagnostics: recentDiagnostics,
onRefresh: fetchStatus,
}),
h(UpdaterCard, {
t: t,
updaterStatus: updaterStatus,
updaterLoading: updaterLoading,
updating: updating,
updaterMsg: updaterMsg,
updaterMsgKind: updaterMsgKind,
onCheck: checkUpdater,
onUpdateNow: onUpdateNow,
}),
h('div', { className: 'cb-row' },
h(UiActionButton, { variant: 'primary', disabled: !writable || !isValid, onClick: save }, t('save')),
isDirty ? h(UiActionButton, { disabled: !writable, onClick: resetDraft }, t('cancel')) : null,
saved ? h('span', { className: 'dvs-ok' }, t('saved')) : null,
err ? h('span', { className: 'dvs-bad' }, err) : null,
),
)
}
function FirstRunWizard(props) {
const t = props.t || moduleT
const draft = props.draft
const setTop = props.setTop
const writable = props.writable
const onClose = props.onClose
const isSecure = typeof window !== 'undefined' ? (window.isSecureContext || window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') : true
const hasMediaDevices = typeof navigator !== 'undefined' && !!navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function'
const hasMediaRecorder = typeof MediaRecorder !== 'undefined'
const isDesktop = typeof navigator !== 'undefined' && (
/dsh-desktop|electron/i.test(navigator.userAgent || '') ||
(typeof window !== 'undefined' && window.location.protocol === 'dsh-app:')
)
const isWindows = typeof navigator !== 'undefined' && (
/win/i.test(navigator.platform || '') || /windows/i.test(navigator.userAgent || '')
)
const isMac = typeof navigator !== 'undefined' && (
/mac/i.test(navigator.platform || '') || /macintosh|mac os x/i.test(navigator.userAgent || '')
)
const [micPermission, setMicPermission] = React.useState('prompt')
const [devices, setDevices] = React.useState([])
const [selectedDev, setSelectedDev] = React.useState((draft && draft.micDeviceId) || '')
const [signalTesting, setSignalTesting] = React.useState(false)
const [currentRms, setCurrentRms] = React.useState(0)
const [peakRms, setPeakRms] = React.useState(0)
const [testingStt, setTestingStt] = React.useState(false)
const [testCountdown, setTestCountdown] = React.useState(0)
const [testResult, setTestResult] = React.useState(null)
const [testError, setTestError] = React.useState('')
const [testLatency, setTestLatency] = React.useState(null)
const signalStreamRef = React.useRef(null)
const audioCtxRef = React.useRef(null)
const animFrameRef = React.useRef(null)
React.useEffect(() => {
if (typeof navigator !== 'undefined' && navigator.permissions && navigator.permissions.query) {
navigator.permissions.query({ name: 'microphone' })
.then((p) => {
if (p) {
setMicPermission(p.state)
p.onchange = () => setMicPermission(p.state)
}
})
.catch(() => 0)
}
}, [])
const refreshDevices = () => {
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return
navigator.mediaDevices.enumerateDevices()
.then((list) => {
const audioInputs = list.filter((d) => d.kind === 'audioinput')
setDevices(audioInputs)
})
.catch(() => 0)
}
React.useEffect(() => {
refreshDevices()
}, [])
const stopSignalTest = () => {
if (animFrameRef.current) {
cancelAnimationFrame(animFrameRef.current)
animFrameRef.current = null
}
if (signalStreamRef.current) {
try { signalStreamRef.current.getTracks().forEach((trk) => trk.stop()) } catch (_) { 0 }
signalStreamRef.current = null
}
if (audioCtxRef.current) {
try { audioCtxRef.current.close() } catch (_) { 0 }
audioCtxRef.current = null
}
setSignalTesting(false)
setCurrentRms(0)
}
React.useEffect(() => {
return () => {
stopSignalTest()
}
}, [])
const requestPermissionAndTestSignal = async () => {
stopSignalTest()
setTestError('')
try {
const constraints = {
audio: selectedDev ? { deviceId: { exact: selectedDev } } : true,
}
let stream
try {
stream = await navigator.mediaDevices.getUserMedia(constraints)
} catch (firstErr) {
if (selectedDev) {
stream = await navigator.mediaDevices.getUserMedia({ audio: true })
} else {
throw firstErr
}
}
signalStreamRef.current = stream
setMicPermission('granted')
refreshDevices()
const AC = typeof AudioContext !== 'undefined' ? AudioContext
: (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null)
if (!AC) return
const actx = new AC()
audioCtxRef.current = actx
if (actx.state === 'suspended') { actx.resume().catch(() => 0) }
const src = actx.createMediaStreamSource(stream)
const analyser = actx.createAnalyser()
analyser.fftSize = 128
src.connect(analyser)
setSignalTesting(true)
const buf = new Uint8Array(analyser.frequencyBinCount)
const checkLevel = () => {
if (!signalStreamRef.current) return
analyser.getByteFrequencyData(buf)
let sum = 0
for (let i = 0; i < buf.length; i++) sum += buf[i]
const rms = Math.min(100, Math.round((sum / buf.length / 255) * 100 * 2.2))
setCurrentRms(rms)
setPeakRms((prev) => Math.max(prev, rms))
animFrameRef.current = requestAnimationFrame(checkLevel)
}
animFrameRef.current = requestAnimationFrame(checkLevel)
} catch (err) {
setMicPermission('denied')
setTestError(String(err && err.message ? err.message : err))
stopSignalTest()
}
}
const runSttTest = async () => {
stopSignalTest()
setTestError('')
setTestResult(null)
setTestLatency(null)
setTestingStt(true)
setTestCountdown(3)
let testStream = null
let recorder = null
const chunks = []
try {
const constraints = {
audio: selectedDev ? { deviceId: { exact: selectedDev } } : true,
}
try {
testStream = await navigator.mediaDevices.getUserMedia(constraints)
} catch (firstErr) {
if (selectedDev) {
testStream = await navigator.mediaDevices.getUserMedia({ audio: true })
} else {
throw firstErr
}
}
let mime = 'audio/webm;codecs=opus'
if (!MediaRecorder.isTypeSupported(mime)) mime = ''
recorder = mime ? new MediaRecorder(testStream, { mimeType: mime }) : new MediaRecorder(testStream)
recorder.ondataavailable = (e) => {
if (e.data && e.data.size > 0) chunks.push(e.data)
}
recorder.start()
let left = 3
const countdownTimer = setInterval(() => {
left -= 1
setTestCountdown(left)
if (left <= 0) {
clearInterval(countdownTimer)
if (recorder.state !== 'inactive') recorder.stop()
}
}, 1000)
await new Promise((resolve) => recorder.addEventListener('stop', resolve, { once: true }))
try { testStream.getTracks().forEach((trk) => trk.stop()) } catch (_) { 0 }
const blob = new Blob(chunks, { type: mime || 'audio/webm' })
if (blob.size < 400) {
setTestError(t('wizardTestEmpty'))
setTestingStt(false)
return
}
setTestCountdown(0)
const startMs = Date.now()
const dataBase64 = await blobToBase64(blob)
const payload = {
dataBase64,
mimeType: mime || recorder.mimeType || 'audio/webm',
mode: 'dictation',
subMode: 'clean',
}
const res = await apiClient.transcribe(payload)
const data = await res.json()
const latency = Date.now() - startMs
setTestLatency(latency)
if (!res.ok || !data || !data.ok) {
const msg = (data && data.error && data.error.message) || `HTTP ${res.status}`
setTestError(msg)
} else {
const recognized = String(data.text || '').trim()
if (recognized) {
setTestResult(recognized)
if (typeof setTop === 'function') {
setTop('wizardCompleted', true)
}
} else {
setTestError(t('wizardTestEmpty'))
}
}
} catch (err) {
setTestError(String(err && err.message ? err.message : err))
} finally {
if (testStream) {
try { testStream.getTracks().forEach((trk) => trk.stop()) } catch (_) { 0 }
}
setTestingStt(false)
}
}
const dictationChain = (draft && draft.dictation && draft.dictation.chain) || []
const activeProvider = (dictationChain[0] && (dictationChain[0].provider || dictationChain[0])) || 'sensevoice'
let areaLabel = t('wizardAreaServer')
if (activeProvider === 'browser' || activeProvider === 'browser-webgpu') {
areaLabel = t('wizardAreaBrowser')
} else if (activeProvider !== 'sensevoice' && activeProvider !== 'local-whisper') {
areaLabel = t('wizardAreaCloud')
}
let nextStepHint = ''
const isPermDenied = micPermission === 'denied' || (testError && /permission|denied|notallowed/i.test(testError))
if (!isSecure) {
nextStepHint = t('wizardHintHttps')
} else if (isPermDenied) {
if (isDesktop && isWindows) {
nextStepHint = t('wizardHintWinDesktop')
} else if (isDesktop && isMac) {
nextStepHint = t('wizardHintMacDesktop')
} else if (isWindows) {
nextStepHint = t('wizardHintWinBrowser')
} else {
nextStepHint = t('wizardHintPermission')
}
} else if (peakRms === 0 && signalTesting) {
nextStepHint = t('wizardHintDevice')
} else if (testError) {
nextStepHint = t('wizardHintProvider')
}
return h('div', { className: 'cb-section-card', style: { borderColor: 'var(--dsw-alias-state-brand-primary)' } },
h('div', { className: 'cb-section-title' },
h('span', null, '✨ ' + t('wizardTitle')),
h('div', { style: { display: 'flex', gap: '8px' } },
testResult ? h('span', { className: 'cb-badge cb-badge-ok' }, '✓ ' + t('wizardStatusCompleted')) : null,
onClose ? h('button', {
type: 'button', className: 'cb-btn cb-btn-mini', onClick: onClose, title: t('wizardClose'),
}, '✕') : null,
),
),
h('div', { className: 'cb-section-desc' }, t('wizardDesc')),
h('div', { className: 'dvs-card' },
h('div', { className: 'dvs-h' }, t('wizardStep1')),
h('div', { className: 'cb-row' },
h('span', { className: 'cb-badge ' + (isSecure ? 'cb-badge-ok' : 'cb-badge-err') },
isSecure ? ('✓ ' + t('wizardSecureContextOk')) : ('✗ ' + t('wizardSecureContextBad'))
),
h('span', { className: 'cb-badge ' + (hasMediaDevices ? 'cb-badge-ok' : 'cb-badge-err') },
hasMediaDevices ? ('✓ ' + t('wizardMediaDevicesOk')) : ('✗ ' + t('wizardMediaDevicesBad'))
),
h('span', { className: 'cb-badge ' + (hasMediaRecorder ? 'cb-badge-ok' : 'cb-badge-err') },
hasMediaRecorder ? ('✓ ' + t('wizardMediaRecorderOk')) : ('✗ ' + t('wizardMediaRecorderBad'))
),
h('span', { className: 'cb-badge ' + (micPermission === 'granted' ? 'cb-badge-ok' : (micPermission === 'denied' ? 'cb-badge-err' : 'cb-badge-warn')) },
micPermission === 'granted' ? ('✓ ' + t('wizardMicPermissionOk')) : (micPermission === 'denied' ? ('✗ ' + t('wizardMicPermissionBad')) : ('· ' + t('wizardMicPermissionPrompt')))
),
),
h('div', { className: 'cb-field', style: { marginTop: '8px' } },
h('label', null, t('wizardMicLabel')),
h('div', { className: 'cb-row' },
h('select', {
value: selectedDev,
style: { flex: 1, minWidth: '240px' },
onChange: (e) => {
setSelectedDev(e.target.value)
if (typeof setTop === 'function') setTop('micDeviceId', e.target.value)
stopSignalTest()
},
},
h('option', { value: '' }, t('micDefault')),
devices.map((d) => h('option', { key: d.deviceId, value: d.deviceId }, d.label || (t('mic') + ' ' + d.deviceId.slice(0, 8) + '…')))
),
h('button', {
type: 'button',
className: 'cb-btn',
onClick: requestPermissionAndTestSignal,
}, t('wizardRequestMic')),
(isWindows && isPermDenied) ? h('a', {
href: 'ms-settings:privacy-microphone',
target: '_blank',
rel: 'noopener noreferrer',
className: 'cb-btn cb-btn-mini',
style: { marginLeft: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
}, '⚙ ' + t('wizardOpenWinMicSettings')) : null,
),
),
),
h('div', { className: 'dvs-card' },
h('div', { className: 'dvs-h' }, t('wizardStep2')),
h('div', { className: 'cb-row', style: { alignItems: 'center' } },
h('button', {
type: 'button',
className: 'cb-btn ' + (signalTesting ? 'cb-btn-danger' : 'cb-btn-primary'),
onClick: signalTesting ? stopSignalTest : requestPermissionAndTestSignal,
}, signalTesting ? t('wizardStopSignalCheck') : t('wizardStartSignalCheck')),
signalTesting ? h('span', { className: 'dvs-sub' }, t('wizardSignalTesting')) : null,
),
signalTesting ? h('div', { style: { marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' } },
h('div', {
style: {
height: '14px',
borderRadius: '7px',
background: 'var(--dsw-alias-bg-layer-1)',
border: '1px solid var(--dsw-alias-border-l1)',
overflow: 'hidden',
position: 'relative',
},
},
h('div', {
style: {
width: `${currentRms}%`,
height: '100%',
background: currentRms > 5 ? 'var(--dsw-alias-state-success-primary)' : 'var(--dsw-alias-label-dimmed)',
transition: 'width 0.05s linear',
},
}),
),
h('span', { className: currentRms > 5 ? 'dvs-ok' : 'dvs-sub' },
currentRms > 5
? t('wizardSignalOk').replace('{level}', currentRms)
: t('wizardSignalZero')
),
) : null,
),
h('div', { className: 'dvs-card' },
h('div', { className: 'dvs-h' }, t('wizardStep3')),
h('div', { className: 'cb-row' },
h('span', { className: 'dvs-sub' }, `${t('wizardProviderLabel')} ${activeProvider}`),
h('span', { className: 'cb-badge' }, `${t('wizardProcessingArea')} ${areaLabel}`),
),
h('div', { className: 'cb-row', style: { marginTop: '8px' } },
h('button', {
type: 'button',
className: 'cb-btn cb-btn-primary',
disabled: testingStt || micPermission === 'denied',
onClick: runSttTest,
}, testingStt
? (testCountdown > 0 ? t('wizardRecordingTest').replace('{left}', testCountdown) : t('wizardTranscribingTest'))
: t('wizardStartTestRecord')
),
),
testResult ? h('div', { style: { marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' } },
h('div', { className: 'dvs-ok' },
'✓ ' + t('wizardTestSuccess').replace('{latency}', testLatency || 0)
),
h('blockquote', {
style: {
margin: '4px 0 0 0',
padding: '8px 12px',
borderRadius: '6px',
background: 'var(--dsw-alias-bg-layer-3)',
borderLeft: '4px solid var(--dsw-alias-state-success-primary)',
color: 'var(--dsw-alias-label-primary)',
fontStyle: 'italic',
},
}, `“${testResult}”`),
) : null,
testError ? h('div', { className: 'cb-alert-err', style: { marginTop: '8px' } },
t('wizardTestFailed').replace('{error}', testError)
) : null,
),
nextStepHint ? h('div', { className: 'dvs-wait', style: { fontStyle: 'italic', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' } },
h('span', null, t('wizardNextStepHint').replace('{hint}', nextStepHint)),
(isWindows && isPermDenied) ? h('a', {
href: 'ms-settings:privacy-microphone',
target: '_blank',
rel: 'noopener noreferrer',
className: 'cb-btn cb-btn-mini',
style: { textDecoration: 'none', fontStyle: 'normal' },
}, '⚙ ' + t('wizardOpenWinMicSettings')) : null,
) : null,
h('div', { className: 'cb-row', style: { justifyContent: 'space-between', marginTop: '6px' } },
h('button', {
type: 'button',
className: 'cb-btn',
onClick: () => {
if (typeof setTop === 'function') setTop('wizardCompleted', true)
if (onClose) onClose()
},
}, t('wizardSkip')),
testResult ? h('button', {
type: 'button',
className: 'cb-btn cb-btn-primary',
onClick: () => {
if (typeof setTop === 'function') setTop('wizardCompleted', true)
if (onClose) onClose()
},
}, '✓ ' + t('wizardFinishSuccess')) : null,
),
)
}
Object.assign(en, {
'simpleConnection':'API connection', 'simpleHint':'OpenAI-compatible speech-to-text. Your API key is stored securely on the backend.',
'simpleBase':'Base URL', 'simpleBaseHint':'Include the API prefix, for example https://api.openai.com/v1.',
'simpleKey':'API key', 'simpleKeySaved':'A key is saved. Leave blank to keep it.', 'simpleKeyEmpty':'Enter a key if your server requires one.',
'simpleNoKey':'Use without an API key', 'simpleModelsHttp':'Models API returned HTTP {status}. Check the URL, key and access permissions.', 'simpleModelsTimeout':'The models request timed out. Check the server and try again.', 'simpleModelsNetwork':'Cannot reach the API. Check the URL, TLS certificate and network; redirects are not followed.', 'simpleModelsResponse':'This server did not return a valid OpenAI-compatible model list.', 'simpleKeyInvalid':'The API key is invalid. Remove line breaks and try again.', 'simpleNotReady':'Voice settings are not ready. Reload and try again.', 'simpleRollbackFailed':'The key could not be restored after a failed save. Re-enter your key before retrying.',
'simpleClearKey':'Remove saved API key on save', 'simpleModel':'Model', 'simpleLoadModels':'Load models', 'simpleModelsLoading':'Loading models…',
'simpleModelsIdle':'Load models, then choose one that supports audio transcription.', 'simpleModelsEmpty':'The API returned no models.', 'simpleModelChoose':'Choose a model',
'simpleModelSaved':'Current selection', 'simpleComposer':'Composer controls', 'simpleComposerHint':'Choose which controls appear beside the message field.',
'simpleDictation':'Dictation', 'simpleMessage':'Voice message', 'simpleMode':'Dictation mode', 'simpleHandsFree':'Continuous conversation',
'simpleShortcut':'Recording shortcut', 'simpleShortcutHint':'Hold to record, release to send. Press a key or combination; Esc cancels capture.',
'simpleCapture':'Change shortcut', 'simpleCaptureActive':'Press a key or combination…', 'simpleShortcutOff':'Disabled', 'simpleClearShortcut':'Disable shortcut',
'simpleSave':'Save changes', 'simpleSaving':'Saving…', 'simpleSaved':'Changes saved.', 'simpleLoading':'Loading voice settings…', 'simpleRetry':'Try again',
'simpleInvalidUrl':'Enter an HTTP or HTTPS base URL without credentials, query or fragment.', 'simpleModelRequired':'Choose a model before saving.',
'simpleLoadFailed':'Could not load settings. Try again.', 'simpleModelsFailed':'Could not load models. Check the URL and key.', 'simpleSaveFailed':'Could not save changes.',
'simpleConflict':'Settings changed elsewhere. Reload settings before saving again.', 'simpleReload':'Reload settings',
'simpleUnconfigured':'Set up an OpenAI-compatible endpoint to use voice input.', 'simpleOriginHint':'A saved key is only used with its saved server. Enter a new key when changing servers.',
})
Object.assign(handsFreeTh, {
'voiceInput':'ตั้งค่าเสียง', 'title':'เสียง', 'cardHint':'API ถอดเสียง ปุ่มลัด และปุ่มในช่องข้อความ',
'simpleConnection':'การเชื่อมต่อ API', 'simpleHint':'ใช้ API ถอดเสียงที่รองรับ OpenAI โดยเก็บ API key อย่างปลอดภัยที่ backend',
'simpleBase':'Base URL', 'simpleBaseHint':'ใส่พาธ API ด้วย เช่น https://api.openai.com/v1',
'simpleKey':'API key', 'simpleKeySaved':'มีคีย์ที่บันทึกแล้ว เว้นว่างเพื่อใช้คีย์เดิม', 'simpleKeyEmpty':'ใส่คีย์หากเซิร์ฟเวอร์ของคุณต้องใช้',
'simpleNoKey':'ใช้โดยไม่ต้องมี API key', 'simpleModelsHttp':'API โมเดลตอบกลับ HTTP {status} กรุณาตรวจ URL คีย์ และสิทธิ์การเข้าถึง', 'simpleModelsTimeout':'หมดเวลารอโมเดล กรุณาตรวจเซิร์ฟเวอร์แล้วลองใหม่', 'simpleModelsNetwork':'เชื่อมต่อ API ไม่สำเร็จ กรุณาตรวจ URL ใบรับรอง TLS และเครือข่าย ระบบไม่ตามลิงก์เปลี่ยนปลายทาง', 'simpleModelsResponse':'เซิร์ฟเวอร์ไม่ได้ส่งรายการโมเดลตามรูปแบบ OpenAI ที่รองรับ', 'simpleKeyInvalid':'API key ไม่ถูกต้อง กรุณาลบบรรทัดใหม่แล้วลองอีกครั้ง', 'simpleNotReady':'การตั้งค่าเสียงยังไม่พร้อม กรุณาโหลดใหม่แล้วลองอีกครั้ง', 'simpleRollbackFailed':'คืนค่าคีย์หลังบันทึกล้มเหลวไม่สำเร็จ กรุณาใส่คีย์ใหม่ก่อนลองอีกครั้ง',
'simpleClearKey':'ลบ API key เดิมเมื่อบันทึก', 'simpleModel':'โมเดล', 'simpleLoadModels':'โหลดรายการโมเดล', 'simpleModelsLoading':'กำลังโหลดโมเดล…',
'simpleModelsIdle':'โหลดโมเดลจาก API แล้วเลือกโมเดลที่รองรับการถอดเสียง', 'simpleModelsEmpty':'API ไม่ส่งรายการโมเดลกลับมา', 'simpleModelChoose':'เลือกโมเดล',
'simpleModelSaved':'โมเดลที่เลือกอยู่', 'simpleComposer':'ปุ่มข้างช่องข้อความ', 'simpleComposerHint':'เลือกแสดงหรือซ่อนปุ่มที่ต้องการใช้งาน',
'simpleDictation':'พิมพ์ด้วยเสียง', 'simpleMessage':'ข้อความเสียง', 'simpleMode':'โหมดถอดเสียง', 'simpleHandsFree':'คุยต่อเนื่อง',
'simpleShortcut':'ปุ่มลัดบันทึกเสียง', 'simpleShortcutHint':'กดค้างเพื่ออัด ปล่อยเพื่อส่ง เลือกปุ่มเดียวหรือปุ่มผสม กด Esc เพื่อยกเลิกการเลือก',
'simpleCapture':'เปลี่ยนปุ่มลัด', 'simpleCaptureActive':'กดปุ่มหรือปุ่มผสมที่ต้องการ…', 'simpleShortcutOff':'ปิดใช้งาน', 'simpleClearShortcut':'ปิดปุ่มลัด',
'simpleSave':'บันทึกการเปลี่ยนแปลง', 'simpleSaving':'กำลังบันทึก…', 'simpleSaved':'บันทึกแล้ว', 'simpleLoading':'กำลังโหลดการตั้งค่าเสียง…', 'simpleRetry':'ลองอีกครั้ง',
'simpleInvalidUrl':'ใส่ Base URL แบบ HTTP หรือ HTTPS โดยไม่มีชื่อผู้ใช้ รหัสผ่าน query หรือ fragment', 'simpleModelRequired':'เลือกโมเดลก่อนบันทึก',
'simpleLoadFailed':'โหลดการตั้งค่าไม่สำเร็จ กรุณาลองอีกครั้ง', 'simpleModelsFailed':'โหลดโมเดลไม่สำเร็จ กรุณาตรวจ URL และคีย์', 'simpleSaveFailed':'บันทึกไม่สำเร็จ',
'simpleConflict':'การตั้งค่าถูกแก้ไขจากที่อื่น กรุณาโหลดใหม่ก่อนบันทึก', 'simpleReload':'โหลดการตั้งค่าใหม่',
'simpleUnconfigured':'ตั้งค่า API ที่รองรับ OpenAI เพื่อเริ่มใช้เสียง', 'simpleOriginHint':'คีย์เดิมจะใช้กับเซิร์ฟเวอร์เดิมเท่านั้น หากเปลี่ยนเซิร์ฟเวอร์ให้ใส่คีย์ใหม่',
})
const SIMPLE_SETTINGS_CSS = `
.dvs-simple{max-width:680px;width:100%;margin:0 auto;color:var(--dsw-alias-label-primary);font:inherit;box-sizing:border-box}
.dvs-simple *{box-sizing:border-box}.dvs-simple section{padding:24px 0;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dvs-simple section:first-of-type{padding-top:8px}.dvs-simple h3{font:inherit;font-size:15px;font-weight:650;margin:0 0 6px}
.dvs-simple p{margin:0}.dvs-simple .dvs-note{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.6}
.dvs-simple .dvs-field{display:grid;gap:8px;margin-top:20px}.dvs-simple label{font-size:13px;font-weight:500}
.dvs-simple input[type=url],.dvs-simple input[type=password],.dvs-simple select{width:100%;min-width:0;padding:10px 12px;border-radius:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;transition:border-color .15s,box-shadow .15s}
.dvs-simple :is(input,select,button):focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:3px}
.dvs-simple .dvs-inline{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.dvs-simple .dvs-model-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center}
.dvs-simple button{font:inherit;font-size:13px;border-radius:8px;padding:9px 13px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);cursor:pointer;transition:background .15s,opacity .15s}
.dvs-simple button:hover:not(:disabled){background:var(--dsw-alias-bg-layer-3)}.dvs-simple button:disabled{opacity:.5;cursor:not-allowed}
.dvs-simple button.dvs-save{background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-label-primary)}.dvs-simple button.dvs-save:hover:not(:disabled){background:var(--dsw-alias-label-primary);opacity:.86}
.dvs-simple .dvs-switches{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;margin-top:14px}.dvs-simple .dvs-switch-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:13px 0}
.dvs-simple .dvs-switch{position:relative;flex-shrink:0;width:44px;height:44px;padding:0;border:0;border-radius:8px;background:transparent}
.dvs-simple button.dvs-switch:hover:not(:disabled){background:transparent}
.dvs-simple .dvs-switch::before{content:'';position:absolute;top:11px;left:4px;width:36px;height:22px;border:1px solid var(--dsw-alias-border-l1);border-radius:20px;background:var(--dsw-alias-bg-layer-3)}
.dvs-simple .dvs-switch::after{content:'';position:absolute;top:15px;left:8px;width:14px;height:14px;border-radius:50%;background:var(--dsw-alias-label-secondary);transition:transform .15s}
.dvs-simple .dvs-switch[aria-checked=true]::before{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary)}.dvs-simple .dvs-switch[aria-checked=true]::after{transform:translateX(14px);background:var(--dsw-alias-bg-layer-1)}
.dvs-simple .dvs-check{display:flex;gap:8px;align-items:center;font-weight:400;font-size:12px;margin-top:6px}.dvs-simple .dvs-check input{accent-color:var(--dsw-alias-label-primary)}
.dvs-simple kbd{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:6px;padding:5px 9px;font:inherit;font-size:12px}
.dvs-simple .dvs-footer{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 0;flex-wrap:wrap}.dvs-simple .dvs-error{color:var(--dsw-alias-state-error-primary);font-size:13px;line-height:1.6;margin-top:12px;overflow-wrap:anywhere}.dvs-simple .dvs-success{color:var(--dsw-alias-state-success-primary);font-size:13px}
@media(max-width:520px){.dvs-simple .dvs-switches,.dvs-simple .dvs-model-row{grid-template-columns:1fr}.dvs-simple .dvs-model-row button{justify-self:start}.dvs-simple section{padding:20px 0}.dvs-simple .dvs-footer .dvs-save{width:100%}}
@media(prefers-reduced-motion:reduce){.dvs-simple *,.dvs-simple *::after{transition:none!important}}
`
function validateSimpleSettings(draft) {
try {
const url = new URL(String(draft.baseUrl || '').trim())
if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) return 'simpleInvalidUrl'
} catch (_) { return 'simpleInvalidUrl' }
if (!String(draft.model || '').trim()) return 'simpleModelRequired'
return ''
}
function updateSimpleSettingsDraft(draft, key, value) {
const next = { ...draft, [key]: value }
// A model from one endpoint must never silently follow a move to another.
if (key === 'baseUrl' && String(value).trim() !== String(draft.baseUrl || '').trim()) next.model = ''
return next
}
function simpleConnectionChanged(draft, saved) {
return !saved || draft.baseUrl.trim() !== String(saved.baseUrl || '').trim() || draft.model.trim() !== String(saved.model || '').trim() || !!draft.apiKey || !!draft.clearApiKey
}
function simpleSettingsPayload(draft, revision, saved) {
const body = { hotkey: draft.hotkey || '', controls: { ...draft.controls }, expectedRevision: revision }
if (simpleConnectionChanged(draft, saved)) {
body.baseUrl = draft.baseUrl.trim(); body.model = draft.model.trim()
if (draft.apiKey) body.apiKey = draft.apiKey
if (draft.clearApiKey) body.clearApiKey = true
}
return body
}
async function simpleSettingsRequest(path, options = {}) {
const response = await fetch('/dsh-voice/' + path, { ...options, headers: { 'Content-Type': 'application/json', ...(options.headers || {}) } })
let data
try { data = await response.json() } catch (_) { throw new Error('simpleLoadFailed') }
if (!response.ok || !data || data.ok !== true) {
const error = new Error(data && data.error && data.error.message || 'simpleLoadFailed')
error.code = data && data.error && data.error.code
error.status = response.status
throw error
}
return data
}
function simpleSettingsError(error, fallback) {
const keys = { credential_origin: 'simpleOriginHint', conflict: 'simpleConflict', base_url: 'simpleInvalidUrl', model: 'simpleModelRequired', api_key: 'simpleKeyInvalid', models_timeout: 'simpleModelsTimeout', models_network: 'simpleModelsNetwork', models_response: 'simpleModelsResponse', settings_unavailable: 'simpleNotReady', rollback_failed: 'simpleRollbackFailed' }
if (error && error.code === 'models_http') {
const match = String(error.message || '').match(/HTTP (\d{3})\b/)
return match ? t('simpleModelsHttp').replace('{status}', match[1]) : t('simpleModelsFailed')
}
return t(keys[error && error.code] || (error && error.status === 409 ? 'simpleConflict' : fallback))
}
function SimpleVoiceSettings() {
const [draft, setDraft] = React.useState(null)
const [saved, setSaved] = React.useState(null)
const [loading, setLoading] = React.useState(true)
const [saving, setSaving] = React.useState(false)
const [error, setError] = React.useState('')
const [success, setSuccess] = React.useState(false)
const [models, setModels] = React.useState([])
const [modelState, setModelState] = React.useState('idle')
const [modelError, setModelError] = React.useState('')
const [capturing, setCapturing] = React.useState(false)
const [loadVersion, setLoadVersion] = React.useState(0)
const alive = React.useRef(true)
const modelsRequest = React.useRef(null)
const saveRequest = React.useRef(null)
const formId = React.useId()
const change = (key, value) => {
if (['baseUrl', 'apiKey', 'clearApiKey'].includes(key)) { modelsRequest.current?.abort(); modelsRequest.current = null }
setDraft(d => updateSimpleSettingsDraft(d, key, value)); setSuccess(false); setError('')
}
React.useEffect(() => {
alive.current = true
return () => { alive.current = false; modelsRequest.current?.abort(); saveRequest.current?.abort(); voice.capturingShortcut = false }
}, [])
React.useEffect(() => {
const controller = new AbortController()
setLoading(true); setError(''); setSuccess(false); setDraft(null); setSaved(null); setCapturing(false)
simpleSettingsRequest('simple-settings', { signal: controller.signal }).then(data => {
if (controller.signal.aborted) return
setSaved(data)
setDraft({ baseUrl: data.baseUrl || '', apiKey: '', clearApiKey: false, model: data.model || '', hotkey: data.hotkey || '', controls: { dictation: data.controls?.dictation !== false, message: data.controls?.message !== false, mode: data.controls?.mode !== false, handsFree: data.controls?.handsFree !== false } })
}).catch(err => { if (!controller.signal.aborted) setError(simpleSettingsError(err, 'simpleLoadFailed')) }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
return () => controller.abort()
}, [loadVersion])
React.useEffect(() => {
modelsRequest.current?.abort(); modelsRequest.current = null
setModels([]); setModelState('idle'); setModelError('')
}, [draft?.baseUrl, draft?.apiKey, draft?.clearApiKey])
React.useEffect(() => {
if (!capturing) return
voice.capturingShortcut = true
let modifier = ''
const finish = key => { if (key !== null) change('hotkey', key); setCapturing(false); voice.capturingShortcut = false }
const down = e => {
e.preventDefault(); e.stopImmediatePropagation()
if (e.repeat) return
if (e.key === 'Escape') { finish(null); return }
if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) { modifier = e.key; return }
finish(keyFromEvent(e))
}
const up = e => { e.preventDefault(); e.stopImmediatePropagation(); if (modifier && e.key === modifier) finish(modifier) }
const blur = () => finish(null)
window.addEventListener('keydown', down, true); window.addEventListener('keyup', up, true); window.addEventListener('blur', blur)
return () => { voice.capturingShortcut = false; window.removeEventListener('keydown', down, true); window.removeEventListener('keyup', up, true); window.removeEventListener('blur', blur) }
}, [capturing])
const loadModels = async () => {
const invalid = validateSimpleSettings({ ...draft, model: draft.model || '_' })
if (invalid) { setModelError(t(invalid)); return }
modelsRequest.current?.abort()
const controller = new AbortController(); modelsRequest.current = controller
setModelState('loading'); setModelError(''); setModels([])
try {
const payload = { baseUrl: draft.baseUrl.trim() }
if (draft.apiKey) payload.apiKey = draft.apiKey
if (draft.clearApiKey) payload.clearApiKey = true
const data = await simpleSettingsRequest('models', { method: 'POST', body: JSON.stringify(payload), signal: controller.signal })
if (controller.signal.aborted || !alive.current) return
const list = [...new Set((Array.isArray(data.models) ? data.models : []).map(row => row && row.id).filter(id => typeof id === 'string' && id.trim()))].sort().map(id => ({ id }))
setModels(list); setModelState(list.length ? 'ready' : 'empty')
} catch (err) { if (!controller.signal.aborted && alive.current) { setModelState('error'); setModelError(simpleSettingsError(err, 'simpleModelsFailed')) } }
}
const save = async event => {
event.preventDefault()
if (saving || capturing) return
const invalid = simpleConnectionChanged(draft, saved) ? validateSimpleSettings(draft) : ''
if (invalid) { setError(t(invalid)); return }
const controller = new AbortController(); saveRequest.current = controller
setSaving(true); setError(''); setSuccess(false)
try {
const data = await simpleSettingsRequest('simple-settings', { method: 'PUT', body: JSON.stringify(simpleSettingsPayload(draft, saved.revision, saved)), signal: controller.signal })
if (controller.signal.aborted || !alive.current) return
setSaved(data)
setDraft(d => ({ ...d, apiKey: '', clearApiKey: false }))
setSuccess(true)
window.dispatchEvent(new CustomEvent('dsh-voice:settings-saved'))
} catch (err) { if (!controller.signal.aborted && alive.current) setError(simpleSettingsError(err, 'simpleSaveFailed')) }
finally { if (!controller.signal.aborted && alive.current) setSaving(false) }
}
const style = h('style', null, SIMPLE_SETTINGS_CSS)
if (loading) return h('div', { className: 'dvs-simple', role: 'status' }, style, t('simpleLoading'))
if (!draft || !saved) return h('div', { className: 'dvs-simple' }, style, h('p', { role: 'alert', className: 'dvs-error' }, error), h('button', { type: 'button', onClick: () => setLoadVersion(v => v + 1) }, t('simpleRetry')))
const modelIds = models.map(row => row.id)
const savedModelMissing = draft.model && !modelIds.includes(draft.model)
return h('form', { className: 'dvs-simple', onSubmit: save, 'aria-busy': saving }, style,
h('section', { 'aria-labelledby': formId + '-connection' },
h('h3', { id: formId + '-connection' }, t('simpleConnection')), h('p', { className: 'dvs-note' }, t('simpleHint')),
saved.configured === false ? h('p', { className: 'dvs-note', role: 'status' }, t('simpleUnconfigured')) : null,
h('div', { className: 'dvs-field' }, h('label', { htmlFor: formId + '-base' }, t('simpleBase')), h('input', { id: formId + '-base', type: 'url', value: draft.baseUrl, autoComplete: 'off', spellCheck: false, placeholder: 'https://api.openai.com/v1', disabled: saving, 'aria-describedby': formId + '-base-hint', onChange: e => change('baseUrl', e.target.value) }), h('p', { id: formId + '-base-hint', className: 'dvs-note' }, t('simpleBaseHint'))),
h('div', { className: 'dvs-field' }, h('label', { htmlFor: formId + '-key' }, t('simpleKey')), h('input', { id: formId + '-key', type: 'password', value: draft.apiKey, autoComplete: 'new-password', spellCheck: false, disabled: saving || draft.clearApiKey, 'aria-describedby': formId + '-key-hint', placeholder: saved.apiKeySet ? '••••••••' : '', onChange: e => change('apiKey', e.target.value) }), h('p', { id: formId + '-key-hint', className: 'dvs-note' }, t(saved.apiKeySet ? 'simpleKeySaved' : 'simpleKeyEmpty')), h('label', { className: 'dvs-check' }, h('input', { type: 'checkbox', checked: draft.clearApiKey, disabled: saving, onChange: e => { change('clearApiKey', e.target.checked); if (e.target.checked) change('apiKey', '') } }), t(saved.apiKeySet ? 'simpleClearKey' : 'simpleNoKey'))),
h('div', { className: 'dvs-field' }, h('label', { htmlFor: formId + '-model' }, t('simpleModel')), h('div', { className: 'dvs-model-row' }, h('select', { id: formId + '-model', value: draft.model, disabled: saving || modelState === 'loading', onChange: e => change('model', e.target.value), 'aria-describedby': formId + '-models-hint' }, h('option', { value: '' }, t('simpleModelChoose')), savedModelMissing ? h('option', { value: draft.model }, draft.model + ' · ' + t('simpleModelSaved')) : null, ...models.map(row => h('option', { key: row.id, value: row.id }, row.id))), h('button', { type: 'button', disabled: saving || modelState === 'loading', onClick: loadModels }, t(modelState === 'loading' ? 'simpleModelsLoading' : 'simpleLoadModels'))), h('p', { id: formId + '-models-hint', className: 'dvs-note', role: 'status' }, t(modelState === 'empty' ? 'simpleModelsEmpty' : modelState === 'loading' ? 'simpleModelsLoading' : 'simpleModelsIdle')), modelError ? h('p', { className: 'dvs-error', role: 'alert' }, modelError) : null)),
h('section', { 'aria-labelledby': formId + '-shortcut' }, h('h3', { id: formId + '-shortcut' }, t('simpleShortcut')), h('p', { className: 'dvs-note' }, t('simpleShortcutHint')), h('div', { className: 'dvs-inline', style: { marginTop: 14 } }, h('kbd', { 'aria-live': 'polite' }, capturing ? t('simpleCaptureActive') : draft.hotkey ? keyLabel(draft.hotkey) : t('simpleShortcutOff')), h('button', { type: 'button', disabled: saving, 'aria-pressed': capturing, onClick: () => { if (!capturing) { if (hold.armed) endHold(true); if (voice.phase === 'pending') cancelPendingPreview(voice); else if (voice.phase !== 'idle' && voice.phase !== 'error') cancelCurrent() } voice.capturingShortcut = !capturing; setCapturing(v => !v) } }, t(capturing ? 'cancel' : 'simpleCapture')), h('button', { type: 'button', disabled: saving || capturing || !draft.hotkey, onClick: () => change('hotkey', '') }, t('simpleClearShortcut')))),
h('section', { 'aria-labelledby': formId + '-composer' }, h('h3', { id: formId + '-composer' }, t('simpleComposer')), h('p', { className: 'dvs-note' }, t('simpleComposerHint')), h('div', { className: 'dvs-switches' }, ...[['dictation', 'simpleDictation'], ['message', 'simpleMessage'], ['mode', 'simpleMode'], ['handsFree', 'simpleHandsFree']].map(([key, label]) => h('div', { className: 'dvs-switch-row', key }, h('label', { id: formId + '-' + key, htmlFor: formId + '-switch-' + key }, t(label)), h('button', { id: formId + '-switch-' + key, type: 'button', className: 'dvs-switch', role: 'switch', 'aria-checked': !!draft.controls[key], 'aria-labelledby': formId + '-' + key, disabled: saving, onClick: () => change('controls', { ...draft.controls, [key]: !draft.controls[key] }) }))))),
error ? h('div', { className: 'dvs-error', role: 'alert' }, error, h('button', { type: 'button', disabled: saving, style: { marginInlineStart: 10 }, onClick: () => setLoadVersion(v => v + 1) }, t('simpleReload'))) : null,
h('div', { className: 'dvs-footer' }, h('span', { className: 'dvs-success', role: 'status' }, success ? t('simpleSaved') : ''), h('button', { type: 'submit', className: 'dvs-save', disabled: saving || capturing }, t(saving ? 'simpleSaving' : 'simpleSave'))))
}
function PluginCard(props) {
const page = !!(props && props.view === 'page')
const [open, setOpen] = React.useState(!!page)
const tt = (props && props.t) || t
const title = tt('title')
if (props && props.view === 'summary') {
return h('span', { className: 'dvo-pdesc' }, tt('cardHint'))
}
return h(ErrorBoundary, null,
h(page ? 'div' : 'li',
{ className: page ? 'dvo-ppage' : (open ? 'dvo-pcard dvo-pcardOpen' : 'dvo-pcard') },
h('button',
{
type: 'button', className: 'dvo-phead',
style: page ? { display: 'none' } : undefined,
'aria-expanded': page ? 'true' : (open ? 'true' : 'false'),
'aria-label': (open ? tt('collapse') : tt('expand')) + ': ' + title,
onClick: () => setOpen((v) => !v),
},
h('span', { className: 'dvo-pheadtext' },
h('span', { className: 'dvo-ptitle' }, title),
h('span', { className: 'dvo-pdesc' }, tt('cardHint')),
),
h('span', { className: 'dvo-pchev' }, chevronIcon()),
),
(page || open) ? h('div', { className: 'dvo-pbody dvo-settings-root' }, h(SimpleVoiceSettings, props)) : null,
),
)
}
function registerSettings(ctx) {
ctx.effect(() => {
const offCss = installSettingsCss()
const offItem = ctx.slots.inject('plugins.item', () => ctx.slots.register(
{
name: 'plugins.item',
id: ROW_ID,
order: 60,
label: () => t('voiceInput'),
locale: NS,
inject: () => ({ ctx: ctx }),
},
PluginCard,
))
const offRow = ctx.slots.inject('plugins.row.config', () => ctx.slots.register(
{
name: 'plugins.row.config',
key: ROW_CONFIG_KEY,
locale: NS,
inject: () => ({ ctx: ctx }),
},
PluginCard,
))
const offLegacy = ctx.slots.inject('settings.plugin.item', () => ctx.slots.register(
{
name: 'settings.plugin.item',
key: NS,
locale: NS,
inject: () => ({ ctx: ctx }),
},
PluginCard,
))
return () => {
if (typeof offCss === 'function') offCss()
if (typeof offItem === 'function') offItem()
if (typeof offRow === 'function') offRow()
if (typeof offLegacy === 'function') offLegacy()
}
}, 'dsh-voice: settings card slots')
}
exports.inject = ['timer', 'slots', 'configForms', 'locale']
exports.apply = function apply(ctx) {
const addLocale = (locale, dictionary) => {
try {
return ctx.locale.register(NS, locale, dictionary)
} catch (alreadyTaken) {
return () => {}
}
}
ctx.effect(() => {
const undo = [addLocale('en', en), addLocale('zh', zh), addLocale('th', handsFreeTh)]
return () => { for (const off of undo) off() }
}, 'dsh-voice: locale dictionaries')
ctx.effect(() => {
return registerGlobalLifecycle()
}, 'dsh-voice: global lifecycle')
moduleT = ctx.locale.bind(NS)
registerComposer(ctx)
registerSettings(ctx)
}
exports._test = {
composerControlVisibility, validateSimpleSettings, updateSimpleSettingsDraft, simpleConnectionChanged, simpleSettingsPayload, simpleSettingsRequest, simpleSettingsError, SimpleVoiceSettings,
conversationTimelineBoundary, selectConversationBoundary, conversationHasQueuedWork, conversationUnavailableReason, conversationBoundaryReady, conversationErrorStamp, createConversationTurnGate, conversationTurnState, reconcileHandsFree, setHandsFreePause, rotateSilentRecording, resumeHandsFreeAfterEmpty, registerGlobalLifecycle,
isRecordingSpeech, isVoiceComposerOwner, LiveComposerSlot, ComposerSlot, updateVoiceComposer, tickHandsFree, startHandsFree, stopHandsFree, queueHandsFreePreview, submitHandsFreePending, handsFreeDraftIsEmpty, handsFreeSessionId,
voice,
keyLabel,
keyFromEvent,
hotkeyMatches,
isAllowedInEditable,
isHotkeyRelease,
extractContextKeywords,
DICTATION_MODES,
getDictationModeLabel,
cycleDictationMode,
resolveBrowserRecognitionLang,
VoiceSection,
FirstRunWizard,
cutPhrase,
sendAudio,
modeChain,
openMic,
startRecording,
startDictation,
releaseVoiceComposer,
cancelCurrent,
stopCurrent,
submitPending,
cancelPending,
keepPending,
initPendingPreview,
cancelPendingPreview,
keepPendingPreview,
submitPendingPreview,
renderEditablePreviewPill,
editIcon,
sendIcon,
loadWebGpuWhisper,
isWebGpuSupported,
isWasmSupported,
isOfflineSupported,
waitStop,
currentLevel,
accentColor,
softColor,
}
return module.exports
},
};

window.__ModuleLoader__.load({
  id: 'dsh-ui-thai',
  factory(require) {
    const language = languageModule.factory(require);
    const voice = voiceModule.factory(require);
    return {
      inject: [...new Set([...language.inject, ...voice.inject])],
      apply(ctx, config) {
        language.apply(ctx, config);
        return voice.apply(ctx, config);
      },
    };
  },
});
})();
