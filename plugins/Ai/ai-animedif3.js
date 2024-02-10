import axios from 'axios';

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .animedif highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
try {
conn.sendFile(m.chat, `https://api.alyachan.pro/api/animediff?q=${text}&apikey=${global.alya}`, 'thumbnail.jpg', `Prompt: ${text}`, m)
} catch (e) {
m.reply(eror)
}
    
}
handler.help = ['animedif3']
handler.tags = ['ai']
handler.command = /^(animedif)$/i
handler.limit = true
export default handler