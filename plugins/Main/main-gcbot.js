import fetch from "node-fetch"
import fs from 'fs'
import path from 'path'
import { generateWAMessageFromContent } from "@whiskeysockets/baileys"

let handler  = async (m, { conn }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  name: "My Gc Official",
  address: "Klick Bacaan Nya Jangan Gambar Nya",
  url: sgc,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot)$/i

export default handler
