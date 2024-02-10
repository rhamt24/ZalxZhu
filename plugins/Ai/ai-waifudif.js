import axios from 'axios';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Masukan detail gambar!* `;
  try {
    conn.reply(m.chat, wait, m);
    const res = await fetch(`https://api.alyachan.pro/api/waifu-diffusion?prompt=${text}&apikey=${global.alya}`)
    const result = await res.json()
    conn.sendMessage(m.chat, { image: { url: result.data.url }, mimetype: 'image/jpeg', caption: 'Prompt: ' + text }, { quoted: m });
  } catch (error) {
    m.reply(`Error: ${error}`);
  }
};

handler.command = /^(waifudif)$/i;
handler.help = ['waifudif'];
handler.tags = ['ai'];
handler.premium = true;

export default handler