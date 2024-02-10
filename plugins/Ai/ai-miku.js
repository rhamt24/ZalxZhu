//by bang putra Thx
//Jangan di hapus !!

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let name = conn.getName(m.sender);
  
  if (!text) throw 'masukan text';

  let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${text}`);
  let json = await api.json();

  try {
    await conn.reply(m.chat, json, m, {
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: 'ＮＡＫＡＮＯ ＭＩＫＵ',
          body: titlebot,
          thumbnailUrl: 'https://telegra.ph/file/b836673a528035dcd70d0.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    });
  } catch (error) {
    m.reply(util.format(api));
  }
};

handler.help = ['miku'];
handler.tags = ['ai'];
handler.command = ['miku'];

export default handler;
