import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/one.m4a";
	conn.sendFile(m.chat, vn, "konnichiwa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(musik1|musiksad1|sadmusic1)$/i;
handler.command = new RegExp();

export default handler;
