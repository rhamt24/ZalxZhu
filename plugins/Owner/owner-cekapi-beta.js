import fetch from 'node-fetch'
import util from 'util'

let handler = async (m, { text }) => {
if(!text) throw(`Masukan Apikeynya`)
  let f = await fetch(`https://api.betabotz.eu.org/api/checkkey?apikey=${text}`)
  let p = await f.json()
  m.reply(util.format(p))
}

handler.command = ['cekbeta']
handler.tags = ['owner']
handler.limit = false
handler.group = false
handler.private = true
handler.rowner = true

export default handler
  
