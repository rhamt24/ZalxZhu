import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar Dengan Caption .toanime'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.alyachan.pro/api/toanime?image=${url}&style=anime&apikey=zalxzhu`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan', m)
}
handler.help = ['toanime', 'jadianime']
handler.tags = ['anime', 'ai', 'premium']
handler.command = /^(jadianime|toanime)$/i
handler.premium = true

export default handler