import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      m.reply(wait);
      if (command === 'hd4') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=${btc}`);
        const image = await api.json();
        const { url } = image;
        conn.sendFile(m.chat, url, null, wm, m);
      } else if (command === 'hd5') {       
        try {
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v2?url=${out}&apikey=${btc}`);
          const response = await api.text();
          let image;
          try {
            image = JSON.parse(response);
          } catch (error) {
            console.error(`parse: ${error}`);
            return;
          }
          const { url } = image;
          conn.sendFile(m.chat, url, null, wm, m);
        } catch (error) {
          throw error;
        }
      } else if (command === 'hd6') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v3?url=${out}&resolusi=4&apikey=${btc}`);
        const image = await api.json();
        const url = image.url;
        conn.sendFile(m.chat, url, null, wm, m);
       } else if (command === 'removebg2' || command === 'nobg2') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/removebg?url=${out}&apikey=${btc}`);
        const image = await api.json();
        const url = image.url.result;
        conn.sendFile(m.chat, url, null, wm, m);
      }
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    throw `🚩 *Server Error*`
  }
}

handler.command = handler.help = ['hd4', 'hd5', 'hd6','removebg3','nobg3'];
handler.tags = ['tools'];
handler.premium = false;
handler.limit = false;

export default handler
