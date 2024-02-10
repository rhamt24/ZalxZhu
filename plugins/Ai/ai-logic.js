import fetch from 'node-fetch'
import util from 'util'
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah AmeliaBotz-Md Bot Whatsapp Yang Dikembangkan Oleh *Bang Putra*,Saya Bernama Ameliabotz-Md,Saya Dibuat Oleh *Bang Putra* Dengan Penuh Kesabaran Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Ketik Saja .owner'
await m.reply(wait)
  var js = await fetch(API('lann', '/api/search/openai-logic', { text: `${text}`, logic: `${logic}`, apikey: lann }))
var json = await js.json()
try {
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
showAdAttribution: true,
title: 'Logic-Ai',
body: '',
thumbnailUrl: "https://telegra.ph/file/50fb3459b70d558809746.jpg",
sourceUrl: "https://logicai.io/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err ) {
m.reply(util.format(json))
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2', 'mel', 'mell'];
handler.tags = ['ai'];
handler.premium = false
export default handler