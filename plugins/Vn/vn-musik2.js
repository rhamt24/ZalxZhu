import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/kawaii.mp3";
	conn.sendFile(m.chat, vn, "konnichiwa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(musik2)$/i;
handler.command = new RegExp();

export default handler;