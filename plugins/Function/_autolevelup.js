import { color } from '../../lib/color.js';
import moment from "moment-timezone";
import { canLevelUp, findLevel, xpRange } from '../../lib/levelling.js';
import canvacord from "canvacord";
import fetch from "node-fetch";

export async function before(m) {
    let user = global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/0a70ee52eb457fbcc2b92.jpg");
    let pp = await (await fetch(ppUrl)).buffer();
    let curr = user.exp - min;
    let minxp = max - user.exp;
    if (!user.autolevelup) return !0;
    let before = user.level * 1;
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;

    if (before !== user.level) {
        let name = user.name;
        let chating = `*Congratulantions 🥳 ${user.name}*, You have leveled up!
🧬 Progress: [ *${before}* ] ➠ [ *${user.level}* ]
🏅 Unlocked: *${user.role}*
⛓ Level Now: *${user.level}*

_ѕємαкιη ѕєяιηg вєяιηтєяαкѕι ∂єηgαη вσт ѕємαкιη тιηggι ℓєνєℓ кαмυ_

Use *.profile* to check`.trim();

        const rank = new canvacord.Rank()
            .setAvatar(pp)
            .setCurrentXP(curr)
            .setLevel(user.level, "RANK", true)
            .setRank(user.level, "LEVEL", true)
            .setLevelColor("#FF0000", "#FFD700")
            .setRankColor("#FF0000", "#FFD700")
            .setRequiredXP(xp)
            .setStatus("streaming")
            .setProgressBar("#FF0000", "COLOR")
            .setProgressBarTrack("#FFFFFF")
            .setUsername(user.name)
            .setDiscriminator(`0001`)
            .setFontSize(1.5);

        rank.build()
            .then(data => {
                conn.sendFile(m.chat, data, "RankCad.png", chating, m);
            });
    }
}