import fs from 'fs'
import { apivisit } from '../Function/amelia.js'

let handler = async (m, { conn }) => {
  const caption = `
*KAMU BISA DONASI LEWAT QRIS, DANA, PULSA, ATAU LINK SAWERIA DIBAWAH*
DANA : 083846016963 
PULSA : 083846016963 
SAWERIA : https://saweria.co/ZalxZhu
`.trim()
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'DONASI',
thumbnailUrl: "https://telegra.ph/file/7ec772a2f27f004fcfe99.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.tags = ['info']
handler.help = ['donasi']
handler.command = /^dona(te|si)$/i
export default handler