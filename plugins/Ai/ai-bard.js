import fetch from 'node-fetch'

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply("*TUNGGU SEDANG DI PROSES*")
  var js = await fetch(API('lann', '/api/search/bard-ai', { apikey: lann, text: `${text}` }))
var json = await js.json()
try {
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
title: 'Bard-Ai',
body: '',
thumbnailUrl: "https://telegra.ph/file/bfe101dfce1bc8d308fb1.jpg",
sourceUrl: tautanwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['bard','gbard','goobard'];
handler.tags = ['ai'];
handler.limit = 3
export default handler
