import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
  let video = "./loli/caboel.mp4";
  conn.sendFile(m.chat, video, "yare.mp4", "Ihhh kakak ini kok minta pap, jangan aneh aneh deh, ihh jangan jangan kakak cabul ya", m, true, {
    type: "video",
    caption: "",
  });
};
handler.customPrefix = /^(pap|pap loli|pap imut|loli)$/i;
handler.command = new RegExp();

export default handler;