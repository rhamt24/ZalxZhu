import OpenAI from "openai";
var handler = async (m, { conn, usedPrefix, command, text }) => {
try {
            if (!text) throw `Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Apa itu resesi`;
            const openai = new OpenAI({
              apiKey: "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", //KEY-OPENAI-APIKEY-KAMU = https://platform.openai.com/account/api-keys 
            });
            const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`${response.choices[0].message.content}`) 
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
}
handler.command = /^(ai|openai|chatgpt)$/i;
handler.help = ["ai", "openai", "chatgpt"].map(v => v + " <teks>");
handler.tags = ["internet"];
handler.fail = null;

handler.limit = true;
handler.exp = 0;

export default handler;