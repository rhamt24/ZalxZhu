import axios from 'axios';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Masukan detail gambar!* `;
  try {
    conn.reply(m.chat, wait, m)
    const res = await fetch(`https://api.alyachan.pro/api/text2img?text=${text}&apikey=${global.alya}`).then(res => res.buffer());
    conn.sendFile(m.chat, res, 'image.jpg', `Result: ${text}`, m);
  } catch (error) {
    m.reply(`Error: ${eror}`);
  }
};

handler.command = handler.help = ['text2img2'];
handler.tags = ['ai'];
handler.limit = true;
export default handler
