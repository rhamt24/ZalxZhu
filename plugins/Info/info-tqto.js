// Terima Kasih Telah Menggunakan Script Bang Putra 
// Tolong jangan di hapus creditnya silakan saja isi nama kalian
import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `
Big Thanks :
> ALLAH SWT
> ORTU KU
	
Thanks Too :
> Nurutomo (sepuh)
> BochilGaming (sepuh)
> Xnuvers007 (sepuh)
> ImYanXiao (base)
> Marsandi (support)
> Fxzz マ (support)
> alisa dev (support)
> Penyedia Apikey
> Amelia (My Love)
> PutraModz (Recode)
> Aldi Lesmana (Sepuh)
> Sanzy Botz (sepuh)
> M.U.F.A.R ID (sepuh)
> Bhocil Gaming (sepuh)
> Bang Tio/botcahx (sepuh)
> BetaBotz-MD (Laan) (sepuh)
> KemiBayashi/SazumiViki (sepuh)
> AzamiBotz (sepuh)
> WudySoft (sepuh)

Special Thanks Too :
> Penyedia Apikey
> Penyedia Scraper
> whiskeysockets/baileys
> Mark Zuckerberg ( Penyedia Apk WhatsAppp)

Script AmeliaBotz Di Recode Oleh: *PutraModz*

Jika Ingin Sc ini Hubungi Owner

Contact Owner
wa.me/6283863727401
`;

conn.sendMessage(m.chat, {
	text: tqto,
	contextInfo: {
	externalAdReply: {
	showAdAttribution: true,
	title: 'Ｃｒｅｄｉｔ Ｂｏｔ Ｗｈａｔｓａｐｐ',
	body: 'Ｊａｎｇａｎ Ｄｉ Ｈａｐｕｓ Ａｔａｕ ＥＲＲＯＲ',
	thumbnailUrl: global.thumb,
	sourceUrl: '',
	mediaType: 1,
	renderLargerThumbnail: true
	}}}, { quoted: fkontak})
  
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;

