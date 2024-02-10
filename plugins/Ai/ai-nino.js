//by bang putra Thx
//Jangan di hapus !!

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let name = conn.getName(m.sender);
  
  if (!text) throw 'masukan text nanti nino akan menjawabnya';

  let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Nino&text=${text}`);
  let json = await api.json();

  try {
    await conn.reply(m.chat, json, m, {
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: 'ＮＡＫＡＮＯ ＮＩＮＯ',
          body: titlebot,
          thumbnailUrl: 'https://telegra.ph/file/89f6bc1b3a69d22a5497d.jpg',
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

handler.help = ['nino'];
handler.tags = ['ai'];
handler.command = ['nino'];

export default handler;
