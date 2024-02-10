import fetch from 'node-fetch'
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* buatkan saya code express.js`
  await m.reply(wait)
  var apii = await fetch(`https://api.alyachan.pro/api/blackbox-ai?prompt=${text}&apikey=${global.alya}`)
  var res = await apii.json()
try {
await conn.sendMessage(m.chat, {
text: res.message,
contextInfo: {
externalAdReply: { 
showAdAttribution: true,
title: 'Blackbox-Ai',
body: '',
thumbnailUrl: "https://a.uguu.se/mHWxFOZT.jpg",
sourceUrl: "https://www.blackbox.ai/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['blackbox','blackboxai','aicoding'];
handler.tags = ['ai'];
handler.premium = false
export default handler 
