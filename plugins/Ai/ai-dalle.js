import fetch from 'node-fetch'
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'
  try { 
  let response = await fetch(`https://api.alyachan.pro/api/dalle-2?q=${encodeURIComponent(text)}&apikey=${alya}`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'aiimg.jpg',  wm, m)
  } catch (e) {
    throw `Error: ${eror}`
  }

}
handler.command = handler.help = ['aiimg3','aiimage3','ai-image3','dalle3']
handler.tags = ['ai']

export default handler
