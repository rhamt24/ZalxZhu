// • UPDATE MENU BY MANG PUTRA

// • Thanks To ImYanXiao ( Base Ori )
// • Github Nya https://github.com/ImYanXiao/Elaina-MultiDevice
// • Thanks To Mang Putra ( Recoder ) 
// • It is forbidden to delete tqto !!
global.gclink = global.sgc
global.teleglink = global.thumb
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
let cpuModel = os.cpus()[0].model
let cpuSpeed = os.cpus()[0].speed / 1000
let cpuCount = os.cpus().length

const defaultMenu = {
    before: `%dash

%m1 *U S E R*
%m2 *Name:* %name
%m2 *Tag:* %tag
%m2 *Status:* %prems
%m2 *Limit:* %limit
%m2 *Money:* %money
%m2 *Role:* %role
%m2 *Level:* %level [ %xp4levelup Xp For Levelup]
%m2 *Xp:* %exp / %maxexp
%m2 *Total Xp:* %totalexp
%m3

%m1 *T O D A Y*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wita
%m3

%m1 *I N F O*
%m2 *Bot Name:* %me
%m2 *Mode:* %mode
%m2 *Platform:* %platform
%m2 *Type:* Node.Js
%m2 *Baileys:* Multi Device
%m2 *Prefix:* [ *%_p* ]
%m2 *Uptime:* %muptime
%m2 *Database:* %rtotalreg dari %totalreg
%m3

%m1 *I N F O  C M D* 
%m4 *%totalfeatures* Command
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
%readmore
`.trimStart(),
    header: "%cc *%category* %c1",
    body: "%c2 %cmd %isPremium %islimit",
    footer: "%c3",
    after: `%c4                ${global.version}`,
}
let handler = async (m, {
    conn,
    usedPrefix: _p,
    __dirname,
    args
}) => {
let menu = "menu"
let menu2 = "menu2"
let menu3 = "menu3"
let menu4 = "menu4"
let menu5 = "menu5"
let menu6 = "menu6"
let menu7 = "menu7"
let menu8 = "menu8"
let menu9 = "menu9"
let menu10 = "menu10"      
let meki = `${pickRandom([menu,menu2,menu3,menu4,menu5,menu6,menu7,menu8,menu9,menu10])}`
let audio = `https://raw.githubusercontent.com/Lucife-Putra/PutraSound/master/${meki}.mp3`
    //await conn.sendReact(m.chat, "⏳", m.key)
    let spas = "                "
    let spas2 = "         "
    let mojis = "╰╴"
    let index = 0
    let ktnya = ["Kamu nanya?",
        "No spam...",
        "Thanks..",
        "Menampilkan...",
        "Tunggu...",
        "Proses...",
        "Loading...",
        "Bertanya..",
        "Hooh..."
    ]
    let ktx = ktnya.getRandom()
    let tags = {
'main': 'Main',
'game': 'Game',
'rpg': 'RPG Games',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'stalker': 'Stalking Menu',
'group': 'Group',
'absen': 'Absen',
'premium': 'Premium',
'primbon': 'Primbon Menu',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'audio': 'Audio',
'maker': 'Maker',
'database': 'Database',
'quran': 'Menu Islami',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'vote': 'Voting',
'asupan': 'Asupan',
'genshin': 'Genshin Menu',
'store': 'Store Menu',
'news': 'News Menu',
'ai': 'Menu Ai',
'cerpen': 'Menu Cerpen',
'jadibot': 'Jadibot Menu',
'jadian': 'Jadian Menu',
'misc': 'Misc',
}
    try {
        // DEFAULT MENU
        let dash = global.dashmenu
        let m1 = global.dmenut
        let m2 = global.dmenub
        let m3 = global.dmenuf
        let m4 = global.dmenub2

        // COMMAND MENU
        let cc = global.cmenut
        let c1 = global.cmenuh
        let c2 = global.cmenub
        let c3 = global.cmenuf
        let c4 = global.cmenua

        // LOGO L P
        let lprem = global.lopr
        let llim = global.lolm
        let tag = `@${m.sender.split("@")[0]}`

        /* Gobal */
        let glb = global.db.data.users
        let usrs = glb[m.sender]

        /* Hiasan List */
        let spas = "                "
        let spas2 = "         "
        let mojis = "╰╴"
        let index = 0
        let ktnya = ["Kamu nanya?", "No spam...", "Thanks..", "Menampilkan...", "Tunggu...", "Proses...", "Loading...", "Bertanya..", "Hooh..."]
        let ktx = ktnya.getRandom()

        /* TIME ZONE */
        let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
        let wibh = moment.tz("Asia/Makassar").format("HH")
        let wibm = moment.tz("Asia/Makassar").format("mm")
        let wibs = moment.tz("Asia/Makassar").format("ss")
        let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
        let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

        /* Info Menu */
        let mode = global.opts["self"] ? "Private" : "Publik"
        let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
        let {
            age,
            exp,
            limit,
            level,
            role,
            registered,
            money
        } = glb[m.sender]
        let {
            min,
            xp,
            max
        } = xpRange(level, global.multiplier)
        let name = await conn.getName(m.sender)
        let premium = glb[m.sender].premiumTime
        let prems = `${premium > 0 ? "Premium": "Free"}`
        let platform = os.platform()

        //-----------TIME---------
        let ucpn = `${ucapan()}`
        let d = new Date(new Date + 3600000)
        let locale = "id"
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: "long"
        })
        let date = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
        let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send("uptime")
            _muptime = await new Promise(resolve => {
                process.once("message", resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)

        //---------------------
        let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
        let totalreg = Object.keys(glb).length
        let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: "customPrefix" in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        for (let plugin of help)
            if (plugin && "tags" in plugin)
                for (let tag of plugin.tags)
                    if (!(tag in tags) && tag) tags[tag] = tag
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before,
            ...Object.keys(tags).map(tag => {
                return header.replace(/%category/g, tags[tag]) + "\n" + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                        return menu.help.map(help => {
                            return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                                .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                                .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                                .trim()
                        }).join("\n")
                    }),
                    footer
                ].join("\n")
            }),
            after
        ].join("\n")
        let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
        let replace = {
            "%": "%",
            p: _p,
            uptime,
            muptime,
            me: conn.getName(conn.user.jid),
            npmname: _package.name,
            npmdesc: _package.description,
            version: _package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp,
            github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
            tag,
            dash,
            m1,
            m2,
            m3,
            m4,
            cc,
            c1,
            c2,
            c3,
            c4,
            lprem,
            llim,
            ucpn,
            platform,
            wita,
            mode,
            _p,
            money,
            age,
            tag,
            name,
            prems,
            level,
            limit,
            name,
            weton,
            week,
            date,
            dateIslamic,
            time,
            totalreg,
            totalfeatures,
            rtotalreg,
            role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
 //---Made By @PutraModz
// Mampus Di Enc 🧢
// Gausah Dihapus, Thx
//------------------ DOCUMENT WITH EXTERNALADS WITHOUT BUTTON
const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023-2024,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!` + `\n[❗] Memuat Menu` + `\nSabar Ya Kak ^ω^`,
    orderTitle: `▮Menu ▸`,
    thumbnail: await conn.resize(global.img, 100, 100),
    //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    await conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', fload)    
const caption = text.trim()
let pp = hwaifu.getRandom()
let pepe = await conn.resize(pp, 350, 400)
let memeg = global.ewe
let meki = global.images
let ppnya = fs.readFileSync('./thumbnail.jpg')
let p1 = './putra/1.jpg'
let p2 = './putra/2.jpg'
let p3 = './putra/3.jpg'
let p4 = './putra/4.jpg'
let p5 = './putra/5.jpg'
let pepek = `${pickRandom([p1,p2,p3,p4,p5])}`

const mt = [
'application/pdf',
'application/msword',
'application/vnd.ms-excel',
'application/vnd.ms-powerpoint',
'application/zip',
'application/x-rar-compressed',
'application/x-tar',
'application/x-7z-compressed',
'application/epub+zip',
'application/json',
'application/vnd.openxmlformats-officedocument.presentationml.      presentation',
'application/vnd.openxmlformats-officedocument.spreadsheetml.      sheet',
'application/vnd.openxmlformats-officedocument.wordprocessingml.   document'
];
// Memilih secara acak satu mimetype dari daftar
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];
            conn.temabot = conn.temabot ? conn.temabot : {
            id: 22
            }
            if (conn.temabot.id === 1) {           
await conn.sendFile(m.chat, Buffer.alloc(0), global.wm, text.trim(), m, false, {
                mimetype: rm,
                fileLength: 99999999999999,
                pageCount: 10909143,
                jpegThumbnail: pepe,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                        title: ucapan() + " " + m.name,
                        body: bottime,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnail: await fs.readFileSync(pepek),
                        thumbnailUrl: pp,
                        sourceUrl: syt
                    }
                }
            })
            } else if (conn.temabot.id === 2) {
            await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./media/amelia.mp4'),
            mimetype: 'video/mp4',
            fileLength: 999999999,
            gifPlayback: true,
            gifAttribution: ~~(Math.random() * 2),
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: ucapan() + " " + m.name,
                    body: bottime,
                    thumbnailUrl: global.menu,
                    sourceUrl: sig,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
	}}}, { quoted: m,ephemeralExpiration: 86400});
	} else if (conn.temabot.id === 3) {
	await conn.relayMessage(m.chat, {
                requestPaymentMessage: {
                    currencyCodeIso4217: 'INR',
                    amount1000: fsizedoc,
                    requestFrom: '0@s.whatsapp.net',
                    noteMessage: {
                        extendedTextMessage: {
                            text: caption,
                            contextInfo: {
                                mentionedJid: [m.sender],
                                externalAdReply: {
                                    showAdAttribution: true
                                }
                            }
                        }
                    }
                }
            }, {});
          } else if (conn.temabot.id === 4) {
          await conn.reply(
                m.chat,
                caption,
                m, {
                    contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                            title: ucapan() + " " + m.name,
                            body: bottime,
                            mediaType: 1,
                            previewType: 0,
                            renderLargerThumbnail: true,
                            thumbnailUrl: global.menu,
                            sourceUrl: syt
                        }
                    },
                }
            );
         } else if (conn.temabot.id === 5) {
         await conn.sendMessage(m.chat, {
                video: fs.readFileSync('./media/amelia.mp4'),
                caption: caption,
                gifPlayback: true,
                gifAttribution: Math.floor(Math.random() * 2) + 1
            }, {
                quoted: m
            });
         } else if (conn.temabot.id === 6) {
         await conn.sendMessage(m.chat, {
          document: fs.readFileSync("./media/tqto.txt"),
          fileName: global.wm,
          mimetype: rm,
          fileLength: 99999999999999,
          bpageCount: 10909143,	
          caption: caption,
          contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          showAdAttribution: true,
          title: global.title,
          body: global.body,
          thumbnail: await fs.readFileSync(pepek),
          thumbnailUrl: pp,
          sourceUrl: sgh,
          mediaType: 1,
          renderLargerThumbnail: true 
          }}}, { quoted: m,ephemeralExpiration: 86400});
        } else if (conn.temabot.id === 7) {
        conn.sendMessage(m.chat, { 
        image: await (await fetch(meki)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: caption,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
    title: ucapan() + " " + m.name,
    body: bottime,
	sourceUrl: sig,
	mediaType: 1,
	thumbnailUrl: global.menu,
	renderLargerThumbnail: true
                }}}, { quoted: m });
      } else if (conn.temabot.id === 8) {
      conn.sendMessage(m.chat, {
      text: caption,
      contextInfo: {
      externalAdReply: {
      title: global.description,
      body: 'bodynya',
      thumbnailUrl: global.menu,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: fkontak})
      } else if (conn.temabot.id === 9) {
      conn.sendMessage(m.chat, {
      text: caption,
      contextInfo: {
      externalAdReply: {
      title: global.description,
      body: ucapan() + " " + m.name,
      thumbnailUrl: global.menu,
      sourceUrl: saluran,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: fkontak})
     } else if (conn.temabot.id === 10) {
     conn.reply(m.chat, caption, fkontak, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: ucapan() + " " + m.name,
            description: global.description,
            mediaType: 2,
          thumbnail: await(await fetch(memeg)).buffer(),
         mediaUrl: sig
        }
     }
    })
   }
   else if (conn.temabot.id === 11) {
   conn.sendMessage(m.chat, { 
        image: await (await fetch(memeg)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: caption,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
    title: ucapan() + " " + m.name,
    body: bottime,
	sourceUrl: sig,
	mediaType: 1,
	thumbnailUrl: global.menu2,
	renderLargerThumbnail: false
                }}}, { quoted: m });
         } else if (conn.temabot.id === 12) {
         const orderMessage = {
            itemCount: -10062007,
            status: 500,
            surface: 999,
            message: caption,
            description: '^^',
            orderTitle: 'Haii Kak',
            token: '9',
            curreyCode: 'IDR',
            totalCurrencyCode: '>〰<',
            totalAmount1000: '1000000',
            sellerJid: '6283863727401@s.whatsapp.net',
            thumbnail: fs.readFileSync('./thumbnail.jpg')
        };

        const contextInfo = {
            participant: '0@s.whatsapp.net',
            quotedMessage: {
                extendedTextMessage: {
                    text: 'Made By Bang Putra >//<',
                },
            },
        };

        const prep = await generateWAMessageFromContent(m.chat, { orderMessage }, { contextInfo, quoted: m });

        conn.relayWAMessage(prep);
        } else if (conn.temabot.id === 13) {
        await conn.reply(m.chat, caption, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(ppnya, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: global.abang, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
        } else if (conn.temabot.id === 14) {
        await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./media/amelia.mp4'),
            mimetype: 'video/mp4',
            fileLength: 999999999,
            gifPlayback: true,
            gifAttribution: ~~(Math.random() * 2),
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: ucapan() + " " + m.name,
                    body: bottime,
                    thumbnailUrl: global.menu,
                    sourceUrl: sig,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    mentionedJid: [m.sender]
	}}}, { quoted: m,ephemeralExpiration: 86400});
        } else if (conn.temabot.id === 15) {
        await conn.sendFile(m.chat, Buffer.alloc(0), global.wm, caption, fkontak, false, {
                mimetype: rm,
                fileLength: fsizedoc,
                pageCount: fpagedoc,
                jpegThumbnail: pepe,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        title: ucapan() + " " + m.name,
                        thumbnail: await fs.readFileSync(pepek),
                        thumbnailUrl: pp
                    }
                }
            });
        } else if (conn.temabot.id === 16) {
            await conn.sendFile(m.chat, Buffer.alloc(0), global.wm, caption, fkontak, false, {
                mimetype: rm,
                fileLength: fsizedoc,
                pageCount: fpagedoc,
                jpegThumbnail: pepe,
                contextInfo: {
                    mentionedJid: [m.sender]
                }
            });
           } else if (conn.temabot.id === 17) {
           const scheduledCallCreationMessage =      generateWAMessageFromContent(m.from, proto.Message.  fromObject({
    "scheduledCallCreationMessage": {
     "callType": "2",
      "scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").     format("DD/MM/YYYY HH:mm:ss")}`,
     "title": caption,
}
}), { userJid: m.from, quoted: m });

conn.relayMessage(m.chat, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id });
          } else if (conn.temabot.id === 18) {
          await conn.reply(
                m.chat,
                caption,
                m, {
                    contextInfo: {
                        mentionedJid: [m.sender]
                    },
                }
            );
         } else if (conn.temabot.id === 19) {
         await conn.sendMessage(
    m.chat,
    {
        text: caption,
        contextInfo: {
            mentionedJid: [m.sender]
        }
    },
   { quoted: m }
)
} else if (conn.temabot.id === 20) {
       await conn.sendFile(m.chat, global.img, "putra.jpg", caption, m,     null, {
      contextInfo: {
                        mentionedJid: [m.sender]
                    },
                }
            );
            }
            else if (conn.temabot.id === 21) {
       await conn.sendFile(m.chat, global.img, "putra.jpg", caption, nye,     false, {
      contextInfo: {
                        mentionedJid: [m.sender]
                    },
                }
            );
            }
            else if (conn.temabot.id === 22) {
            await conn.sendFile(m.chat, Buffer.alloc(0), global.wm, text.trim(), nye, false, {
                mimetype: rm,
                fileLength: 99999999999999,
                pageCount: 10909143,
                jpegThumbnail: pepe,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                        title: ucapan() + " " + m.name,
                        body: bottime,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnail: await fs.readFileSync(pepek),
                        thumbnailUrl: pp,
                        sourceUrl: syt
                    }
                }
            })
      }
      else if (conn.temabot.id === 23) {
      await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./media/amelia.mp4'),
            mimetype: 'video/mp4',
            fileLength: 999999999,
            gifPlayback: true,
            gifAttribution: ~~(Math.random() * 2),
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: ucapan() + " " + m.name,
                    body: bottime,
                    thumbnailUrl: global.menu,
                    sourceUrl: sig,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
	}}}, { quoted: nye,ephemeralExpiration: 86400});
	}
	else if (conn.temabot.id === 24) {
	await conn.sendMessage(m.chat, { 
        image: await (await fetch(meki)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: caption,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
    title: ucapan() + " " + m.name,
    body: bottime,
	sourceUrl: sig,
	mediaType: 1,
	thumbnailUrl: global.menu,
	renderLargerThumbnail: true
                }}}, { quoted: nye });
     }
     else if (conn.temabot.id === 25) {
     await conn.sendMessage(m.chat, { 
        image: await (await fetch(memeg)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: caption,
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
    title: ucapan() + " " + m.name,
    body: bottime,
	sourceUrl: sig,
	mediaType: 1,
	thumbnailUrl: global.menu2,
	renderLargerThumbnail: false
                }}}, { quoted: nye })
    } 
    else if (conn.temabot.id === 26) {
    await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./media/amelia.mp4'),
            mimetype: 'video/mp4',
            fileLength: 999999999,
            gifPlayback: true,
            gifAttribution: ~~(Math.random() * 2),
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: ucapan() + " " + m.name,
                    body: bottime,
                    thumbnailUrl: global.menu,
                    sourceUrl: sig,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    mentionedJid: [m.sender]
	}}}, { quoted: nye,ephemeralExpiration: 86400});
    }
    else if (conn.temabot.id === 27) {
    await conn.sendMessage(m.chat, {
          document: fs.readFileSync("./media/tqto.txt"),
          fileName: global.wm,
          mimetype: rm,
          fileLength: 99999999999999,
          bpageCount: 10909143,	
          caption: caption,
          contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          showAdAttribution: true,
          title: global.title,
          body: global.body,
          thumbnail: await fs.readFileSync(pepek),
          thumbnailUrl: pp,
          sourceUrl: sgh,
          mediaType: 1,
          renderLargerThumbnail: true 
          }}}, { quoted: nye,ephemeralExpiration: 86400});       
          }
          else if (conn.temabot.id === 28) {
          await conn.sendMessage(
    m.chat,
    {
        text: caption,
        contextInfo: {
            mentionedJid: [m.sender]
        }
    },
   { quoted: nye }
)
   }
   else if (conn.temabot.id === 29) {
   const orderMessage = {
            itemCount: -10062007,
            status: 500,
            surface: 999,
            message: caption,
            description: '^^',
            orderTitle: 'Haii Kak',
            token: '9',
            curreyCode: 'IDR',
            totalCurrencyCode: '>〰<',
            totalAmount1000: '1000000',
            sellerJid: '6283863727401@s.whatsapp.net',
            thumbnail: fs.readFileSync('./thumbnail.jpg')
        };

        const contextInfo = {
            participant: '0@s.whatsapp.net',
            quotedMessage: {
                extendedTextMessage: {
                    text: 'Made By Bang Putra >//<',
                },
            },
        };

        const prep = await generateWAMessageFromContent(m.chat, { orderMessage }, { contextInfo, quoted: nye });

        conn.relayWAMessage(prep);
        }
        else if (conn.temabot === 30) {
        conn.reply(m.chat, caption, nye, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: ucapan() + " " + m.name,
            description: global.description,
            mediaType: 2,
          thumbnail: await(await fetch(memeg)).buffer(),
         mediaUrl: sig
        }
     }
    })
   }
     await conn.sendPresenceUpdate('recording', m.chat);
     await conn.sendFile(m.chat, audio, '', '', m, null, {
     ptt: true,
     waveform: [100, 0, 100, 0, 100, 0, 100],
     contextInfo: adReplyS.contextInfo
     })
} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['allmenu', 'help', '?']
handler.tags = ['info']
handler.command = /^(allmenu|help|Allmenu|putra)$/i

handler.register = true
handler.exp = 10

export default handler

//----------- FUNCTION GA USAH DI UBAH KLO GA BISA-------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Siang Lord ☀️"
}
if (time >= 15) {
res = "Sore Lord 🌇"
}
if (time >= 18) {
res = "Malam Lord 🌙"
}
return res
}
function timeimg() {
let imgloc = ''
const time = moment.tz('Asia/Jakarta').format('HH')
imgloc = ('./media/amelia8.png')
if (time >= 0) {
imgloc = ('./media/amelia.png')
}
if (time >= 4) {
imgloc = ('./media/amelia2.png')
}
if (time >= 8) {
imgloc = ('./media/amelia3.png')
}
if (time >= 12) {
imgloc = ('./media/amelia4.png')
}
if (time >= 16) {
imgloc = ('./media/amelia5.png')
}
if (time >= 20) {
imgloc = ('./media/amelia6.png')
}
if (time >= 24) {
imgloc = ('./media/amelia7.png')
}
return imgloc
}
function getRandomImageURL() {
const imageUrls = [
'https://a.uguu.se/mXXGxjqh.jpg',
'https://a.uguu.se/qnkYlBXU.jpg', 
'https://a.uguu.se/UkuxptHK.jpg',
'https://a.uguu.se/lGMtxXDz.jpg',
'https://a.uguu.se/ivmqJrmz.jpg',
'https://a.uguu.se/xDXukAdp.jpg'
];

const randomIndex = Math.floor(Math.random() * imageUrls.length);
return imageUrls[randomIndex];
}
function getRandomBotTitle() {
const randomBotTitles = [
'             「 ♥ ZHU BӨƬZ ♥ 」',
'꒷˜”*°•.˜”*°• ZHU BӨƬZ •°*”˜.•°*”˜',
'Z h uＢｏｔｚ　グ凹ょ',
'ZHU BӨƬZ',
'🎋 ┊ zhuBₒₜz ᴡʜᴀᴛsᴀᴘᴘ',
'꧁༺ ZHU MD ༻꧂'
];
const randomIndex = Math.floor(Math.random() * randomBotTitles.length);
return randomBotTitles[randomIndex];
}
