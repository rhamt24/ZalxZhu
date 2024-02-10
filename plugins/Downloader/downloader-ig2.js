import fetch from "node-fetch"
import util from "util"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    m.reply(wait)
     const url = args[0];
     let re = await fetch(API('lann', '/api/download/igdowloader', { url: url, apikey: lann }))
     let message = await re.json()  
    try {             
        for (let i of message.message ) {
            conn.sendFile(m.chat, i._url, null, `*Instagram Downloader By Mamang Putra*`, nye)
        }
    } catch(err) {
        m.reply(util.format(message))
    }
}

handler.help = ['ig2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(Instagr2am|ig2|igdl2|igstory2)$/i
handler.limit = true

export default handler
