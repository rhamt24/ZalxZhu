import fs from 'fs'
import { apivisit } from '../Function/amelia.js'

let handler = async (m, { conn }) => {
  const caption = `
*KAMU BISA DONASI LEWAT QRIS ATAU LINK SAWERIA DIBAWAH*
`.trim()
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'DONASI',
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.tags = ['info']
handler.help = ['donasi']
handler.command = /^dona(te|si)$/i
export default handler