let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *PESAN DARI ADMIN GROUP* ⋘
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `___________________________________________`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: fopenai})
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']

handler.group = true
handler.admin = true

export default handler
