import fetch from 'node-fetch'
import uploader from '../../lib/uploadImage.js'

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
   if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download()
    await m.reply(wait)
    let media = await uploader(buffer)
    let json = await (await fetch(API('lann', '/api/search/bard-img', { text: text, url: media, apikey:  lann }))).json()  
    conn.sendMessage(m.chat, { 
    text: json.result,
    contextInfo: {
externalAdReply: { 
title: 'Bard-IMG',
body: '',
thumbnailUrl: "https://telegra.ph/file/bfe101dfce1bc8d308fb1.jpg",
sourceUrl: tautanwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } else throw `Reply image with command ${usedPrefix + command} pertanyaan`
}
handler.help = ['bardimg']
handler.tags = ['tools']
handler.command = /^(bardimg|bardimage)$/i
handler.limit = true;

export default handler

// • Thanks To ImYanXiao ( Base Ori )
// • Github Nya https://github.com/ImYanXiao/Elaina-MultiDevice
// • Thanks To Mang Putra ( Recoder ) 
// • It is forbidden to delete tqto !!
