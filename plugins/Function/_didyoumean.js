import didyoumean from 'didyoumean'
import similarity from 'similarity'

let handler = m => m
const userTag = (m) => {
    return `👋 Hai *@${m.sender.split("@")[0]}*, `
}

handler.before = function (m, { match, usedPrefix }) {
    if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '').trim();
        let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
        let mean = didyoumean(noPrefix, alias);
        let sim = similarity(noPrefix, mean);
        let similarityPercentage = parseInt(sim * 100);

        if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
            let response = `• ${userTag(m)}ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴄᴀʀɪ ᴍᴇɴᴜ ʙᴇʀɪᴋᴜᴛ ɪɴɪ?\n\n➤ ɴᴀᴍᴀ ᴄᴏᴍᴍᴀɴᴅ: *${usedPrefix+mean}*\n➤ ʜᴀꜱɪʟ ᴋᴇᴍɪʀɪᴘᴀɴ: *${similarityPercentage}%*\n\nᴊɪᴋᴀ ᴀɴᴅᴀ ᴍᴇʀᴀꜱᴀ ʙᴇɴᴀʀ ᴀʙᴀɪᴋᴀɴ ꜱᴀᴊᴀ ᴘᴇꜱᴀɴ ɪɴɪ`;

            this.reply(m.chat, response, m, {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'ＣＯＭＭＡＮＤ ＡＮＤＡ ＫＥＬＩＲＵ❗',
                        thumbnailUrl: 'https://telegra.ph/file/bf0dcec3095241d57ecf3.jpg',
                        sourceUrl: sgc,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        }
    }
}

export default handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/