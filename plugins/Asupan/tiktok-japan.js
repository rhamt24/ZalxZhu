//by Bang Putra Jangan di hapus tqto nya pake boleh

let handler = async (m, { conn, text }) => {
//await m.reply(wait);
conn.sendMessage(m.chat, {
		react: {
			text: '⌛',
			key: m.key,
		}
	})
    let yh = global.japan
    let url = yh[Math.floor(Math.random() * yh.length)]
   await conn.sendFile(m.chat, url, 'anu.jpg', '_Nih kak ><_', m)
  }
  handler.command = /^(ttjapan|tiktokjapan)$/i
  handler.tags = ['asupantt']
  handler.help = ['ttjapan', 'tiktokjapan']
  
  handler.limit = true
  
  export default handler
  
 global.japan = [
"https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg",
"https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg",
"https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg",
"https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg",
"https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg",
"https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg",
"https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg",
"https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg",
"https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg",
"https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg",
"https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg",
"https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg",
"https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg",
"https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg",
"https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg",
"https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg",
"https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg",
"https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg"
]
