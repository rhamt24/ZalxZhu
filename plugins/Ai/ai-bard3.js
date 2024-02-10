import fetch from 'node-fetch'
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
  await m.reply(wait)
  var apii = await fetch(`https://api.botcahx.eu.org/api/search/bard-ai?apikey=${btc}&text=${text}`)
  var res = await apii.json()
try {
  await conn.sendMessage(m.chat, {
text: res.message,
contextInfo: {
externalAdReply: { 
title: 'Bard-Ai V3',
body: '',
thumbnailUrl: "https://telegra.ph/file/bfe101dfce1bc8d308fb1.jpg",
sourceUrl: tautanwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['bard3'];
handler.tags = ['ai'];
handler.premium = false
export default handler
