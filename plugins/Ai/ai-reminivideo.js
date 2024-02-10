import fetch from 'node-fetch'
import uploadVideo from '../../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime || !mime.includes('video')) throw 'Kirim video dengan caption, .reminivideo '
  m.reply(wait)
  let media = await q.download()
  let url = await uploadVideo(media)
  let hasil = await (await fetch(`https://api.alyachan.pro/api/vid-enhance?video=${url}&apikey=zalxzhu`)).buffer()
  await conn.sendFile(m.chat, hasil, '', 'Nih Kak, Hasil enhance nya', m)
}

handler.help = ['reminivideo']
handler.tags = ['reminivideo', 'ai', 'premium']
handler.command = /^(reminivideo)$/i
handler.premium = true

export default handler