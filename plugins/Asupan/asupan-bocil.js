import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, command }) => {

let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')

let asup = await res.json()

let json = asup[Math.floor(Math.random() * asup.length)]

conn.sendFile(m.chat, json.url, '', '_Nih Kak_', m)

}

handler.help = ['bocil2']

handler.tags = ['asupan']


handler.command = /^(bocil2)$/i

export default handler