import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/iya kak.mp3";
	conn.sendFile(m.chat, vn, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bobo|bobok|turu|tidur)$/i;
handler.command = new RegExp();

export default handler;
