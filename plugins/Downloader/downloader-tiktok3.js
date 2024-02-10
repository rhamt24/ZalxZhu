
import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  await m.reply('Tunggu Sebentar...')
 let cap = `${global.wm}
 
 
*Nickname :* ${f.nickname}
*Duration :* ${f.duration}
*Description :* ${f.description}`
conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
}
handler.help = ['tiktok3']
handler.tags = ['downloader']
handler.command = /^(tiktok3|tt3|ttdl3|tiktokdl3|)$/i
handler.limit = true

export default handler