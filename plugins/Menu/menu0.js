//ya elah mau ngapainn bang bikin sendiri lah

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@whiskeysockets/baileys')).default
import moment from "moment-timezone"
import fs from "fs"
let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    command
}) => {
    await conn.sendReact(m.chat, "⏳", m.key)
    
let pp = hwaifu.getRandom()
let pepe = await conn.resize(pp, 350, 400)
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let pepek = `${pickRandom([p1,p2,p3,p4,p5])}`

const mt = [
'application/pdf',
'application/msword',
'application/vnd.ms-excel',
'application/vnd.ms-powerpoint',
'application/zip',
'application/x-rar-compressed',
'application/x-tar',
'application/x-7z-compressed',
'application/epub+zip',
'application/json',
'application/vnd.openxmlformats-officedocument.presentationml.      presentation',
'application/vnd.openxmlformats-officedocument.spreadsheetml.      sheet',
'application/vnd.openxmlformats-officedocument.wordprocessingml.   document'
];
// Memilih secara acak satu mimetype dari daftar
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];
let memeg = global.meki
let meki = global.memeg
let ppnya = fs.readFileSync('./thumbnail.jpg')
let sound = fs.readFileSync('./putra/putramenu.mp3') 
    const caption = `*👋 Selamat datang di dashboard bot kami*!\n\n - Kami berharap Anda akan menikmati pengalaman berinteraksi dengan bot kami yang ramah dan intuitif.${readMore}\n\n - Kami telah menyertakan berbagai fitur yang dapat membantu Anda mengelola dan meningkatkan kinerja bot Anda.\n\n - Kami berharap Anda akan menikmati menggunakan dashboard bot kami dan semoga Anda mendapatkan manfaat dari fitur-fitur yang kami tawarkan.\n\n\n*[ LIST MENU ]*\n  - .menulist\n  - .allmenu\n\n`;
    
    const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/99edddf33cc762de0585a.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "7578541932209942",
"title": `Klik Kak Listmenu Nya Ada di Dalam><`,
"description": caption,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount5000": "10000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount5000": "10000000",
"retailerId": wm,
"url": "http://wa.me/6283846016963"
},
"businessOwnerJid": "6283846016963@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })

	/*await conn.sendPresenceUpdate('recording', m.chat);
     await conn.sendFile(m.chat, sound, '', '', m, null, {
     ptt: true,
     waveform: [100, 0, 100, 0, 100, 0, 100],
     contextInfo: adReplyS.contextInfo
     });*/

}
handler.help = ['menukatalog']
handler.tags = ['misc']
handler.customPrefix = /^(menukatalog|.menukatalog|. menukatalog|. Menukatalog)$/i
handler.command = new RegExp
handler.register = true;
handler.limit = false;

export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  var ucapanWaktu = 'Ohayou...'
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Ohayou...'
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Konnichiwa...'
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Konnichiwa...'
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Konbanwa...'
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Konbanwa...'
  } else {
    ucapanWaktu = 'Konbanwa'
  }	
  return ucapanWaktu
}
function getRandomImageURL() {
const imageUrls = [
'https://a.uguu.se/mXXGxjqh.jpg',
'https://a.uguu.se/qnkYlBXU.jpg', 
'https://a.uguu.se/UkuxptHK.jpg',
'https://a.uguu.se/lGMtxXDz.jpg',
'https://a.uguu.se/ivmqJrmz.jpg',
'https://a.uguu.se/xDXukAdp.jpg'
];

const randomIndex = Math.floor(Math.random() * imageUrls.length);
return imageUrls[randomIndex];
}
function getRandomBotTitle() {
const randomBotTitles = [
'「 ♥ ZHU BӨƬZ ♥ 」',
'꒷˜”*°•.˜”*°• ZHU BӨƬZ •°*”˜.•°*”˜',
'Z H UＢｏｔｚ　グ凹ょ',
'Z H UBӨƬZ',
'🎋 ┊ zhuBₒₜz ᴡʜᴀᴛsᴀᴘᴘ',
'꧁༺ ZHU MD ༻꧂'
];
const randomIndex = Math.floor(Math.random() * randomBotTitles.length);
return randomBotTitles[randomIndex];
}