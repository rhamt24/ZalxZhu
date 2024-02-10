let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.eu.org/api/nsfw/ass?apikey=${global.lann}`, 'Kemii.jpg', `${namebot}`, m)
}
handler.help = ['ass']
handler.tags = ['nsfw']

handler.command = /^(ass)$/i
handler.premium = false
handler.register = true
handler.limit = 5
export default handler