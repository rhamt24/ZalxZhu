import axios from 'axios';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Masukan detail gambar!* `;
  try {
    conn.reply(m.chat, wait, m);
    const res = await axios.get(`https://api.alyachan.pro/api/diffusion?prompt=${text}&apikey=${global.alya}`);
    const result = res.data;
    conn.sendMessage(m.chat, { image: { url: result.data.url }, mimetype: 'image/jpeg', caption: 'Prompt: ' + text }, { quoted: m });
  } catch (error) {
    m.reply(`Error: ${error}`);
  }
};

handler.command = /^(diffusion)$/i;
handler.help = ['diffusion'];
handler.tags = ['ai'];
handler.premium = true;

export default handler;