import fetch from 'node-fetch'
let handler = async (m, { text }) => {
if (!text) throw `Masukan Apikey!`
  try {
    let api = await fetch(`https://api.botcahx.eu.org/api/checkkey?apikey=${text}`)
    let body = await api.text()
    m.reply(body)  
  } catch (e) {
    console.log(e) 
    m.reply('Apikey tidak terdaftar!')
  }
}          
handler.command = handler.help = ['cekbotcahx'];
handler.tags = ['owner'];
handler.private = true
handler.rowner = true
export default handler 
