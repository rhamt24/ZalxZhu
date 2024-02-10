//Ada Ada Saja Ga Di kasih Cr/hapus Cr
//By Bang Putra

import fetch from "node-fetch"
import fs from "fs"
import { pickRandom } from "../../lib/other-function.js"
import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let aa = pickRandom(global.AraChu2)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${abang};;;\nFN:${abang}\nORG:${abang}\nTITLE:\nitem1.TEL;waid=6283846016963:+62 838-4601-6963\nitem1.X-ABLabel:${abang}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${abang}\nEND:VCARD`
        let tag_own = await conn.sendMessage(m.chat, {
            contacts: {
                displayName: wm,
                contacts: [{
                    vcard
                }]
            },
            contextInfo: {
                externalAdReply: {
                    title: wm,
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: aa,
                    sourceUrl: wame,
                }
            }
        }, {
            quoted: fkontak
        })
        await conn.reply(m.chat, `Halo kak @${m.sender.split("@")[0]} itu nomor developerku, jangan spam/call ya kak,nanti di Block, *Klick Saja Gambar Nyaa Jika Tidak Ada*`, tag_own, {
            mentionedJid: [m.sender]
        })
      }
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

export default handler