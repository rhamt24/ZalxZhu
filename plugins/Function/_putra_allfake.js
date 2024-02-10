import fetch from 'node-fetch'
import fs from 'fs'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/fa35830c2020aa9c531cb.jpg')	
	
    global.nye = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2024,
    status: 1,
    surface : 1,
    message: '[❗] Jangan Spam' + '...\n ▮Menu Nya Kak ▸', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await conn.resize(pp, 100, 100), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  }
export default handler

// • Thanks To ImYanXiao ( Base Ori )
// • Github Nya https://github.com/ImYanXiao/Elaina-MultiDevice
// • Thanks To Mang Putra ( Recoder ) 
// • It is forbidden to delete tqto !!