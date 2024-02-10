//import fetch from "node-fetch"
export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }

    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
      Fajr: "04:35",
      Sunrise: "05:48",
      Dhuhr: "12:11",
      Asr: "15:36",
      Sunset: "17:51",
      Maghrib: "18:23",
      Isha: "19:37",
      Imsak: "04:25",
      Midnight: "23:50",
      Firstthird: "21:51",
      Lastthird: "01:50"
    }

    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `Hai kak @${who.split`@`[0]},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Bandar Lampung dan sekitarnya._`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null, {
                    contextInfo: {
                        mentionedJid: [who],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'ʏᴀɴɢ ᴍᴇᴍʙᴇᴅᴀᴋᴀɴ ᴀɴᴛᴀʀᴀ ᴏʀᴀɴɢ ʙᴇʀɪᴍᴀɴ ᴅᴇɴɢᴀɴ ᴛɪᴅᴀᴋ ʙᴇʀɪᴍᴀɴ ᴀᴅᴀʟᴀʜ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴ ꜱᴀʟᴀᴛ.',
                            thumbnailUrl: 'https://telegra.ph/file/50a77d0af7e1e04284a55.jpg',
                            sourceUrl: "",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            ];
            setTimeout(() => {
                delete this.autosholat[id]
            }, 57000);
        }
    }
}

export const disabled = false;
