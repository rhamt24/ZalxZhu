 import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`Input Text Dan Karakter!\nExample: ${usedPrefix + command} hai Kirito|kamu sedang apa?`)
    let [ q, k ] = text.split('|')
    m.reply(`Tunggu sebentar...`)
    let res = await fetch(API('alya', '/api/cai', { prompt: q, char: k, apikey: lann}))
    let json = await res.json()
    try {
    await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
showAdAttribution: true,
title: 'Character-Ai',
body: '',
thumbnailUrl: "https://telegra.ph/file/0eaa7971971bfe01c61f6.jpg",
sourceUrl: "https://beta.character.ai/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat menjalankan perintah.')
  }
}

handler.command = handler.help = ['c-ai','character-ai']
handler.tags = ['ai']
handler.owner = false
handler.limit = false
handler.group = false
handler.private = false

export default handler 
