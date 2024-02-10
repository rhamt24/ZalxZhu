import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
  let video = "./loli/hentai.mp4";
  conn.sendFile(m.chat, video, "yare.mp4", "apa?, hentai?, ingat dosa kak", m, true, {
    type: "video",
    caption: "",
  });
};
handler.customPrefix = /^(hentai|bagi hentai|bokep anime|bokep triplek)$/i;
handler.command = new RegExp();

export default handler;