//by Bang Putra Jangan di hapus tqto nya pake boleh

let handler = async (m, { conn, text }) => {
//await m.reply(wait);
conn.sendMessage(m.chat, {
		react: {
			text: '⌛',
			key: m.key,
		}
	})
    let yh = global.viet
    let url = yh[Math.floor(Math.random() * yh.length)]
   await conn.sendFile(m.chat, url, 'anu.jpg', '_Nih kak ><_', m)
  }
  handler.command = /^(ttvietnam|tiktokvietnam)$/i
  handler.tags = ['asupantt']
  handler.help = ['ttvietnam', 'tiktokvietnam']
  
  handler.limit = true
  
  export default handler
  
 global.viet = [
"https://i.postimg.cc/L4qZCk0w/p-1962nyvh11.jpg",
"https://i.postimg.cc/ncB9ZFx1/p-1962o8k741.jpg",
"https://i.postimg.cc/MGKny1Qs/p-1962wlno91.jpg",
"https://i.postimg.cc/NMKLnYbm/p-1962yw2d21.jpg",
"https://i.postimg.cc/mrXtVh3T/p-1962z7kwy1.jpg"
]
