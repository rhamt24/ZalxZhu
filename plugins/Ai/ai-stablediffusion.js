import fetch from "node-fetch"
import { writeFileSync } from "fs"
import path from 'path'
let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) throw `Masukkan teks untuk diubah menjadi gambar\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;
  if (!text.includes(',')) throw `Tolong gunakan prompt dengan benar. Gunakan koma *[ , ]* untuk memisahkan argumen.\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;  
  const prompt = text.split(',').join(', ');
  const response = await fetch(`https://api.qyuunee.my.id/api/ai/stablediffusion?q=${prompt}&apikey=${global.qyune}`);
  const buffer = await response.buffer();
  const saveFilename = path.join(__dirname, '../../tmp/stablediffusion.jpg');
  writeFileSync(saveFilename, buffer);
  conn.sendFile(m.chat, saveFilename, null, `*Result For:* _${prompt}_`, m);
};
handler.command = handler.help = ['stablediffusion'];
handler.tags = ['ai'];
handler.limit = true;
handler.private = false;
handler.group = false;

export default handler
