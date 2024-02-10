let handler = async (m, {
    conn,
    command,
    text
}) => {
    conn.temabot = conn.temabot ? conn.temabot : {
        id: 22
    }
    let themes = {
        1: 'Default',
        2: 'Gif With AdReply Large',
        3: 'Payment',
        4: 'Image V1',
        5: 'Gif Only',
        6: 'Document Large',
        7: 'Image V2 With AdReply Large',
        8: 'Image V3 With Message Group Link',
        9: 'Image V4 With Saluran Message',
        10: 'Image V5',
        11: 'Image V6 With AdReply Small',
        12: 'Order Message',
        13: 'Order Message V2',
        14: 'Gif With AdReply Small',
        15: 'Document Small With AdReply',
        16: 'Document Small',
        17: 'Call Message Rawan Ngebug:v',
        18: 'Normal With AdReply',
        19: 'Normal No AdReply,No Fakereply',
        20: 'Normal Image No Adreply',
        21: 'Normal Image With Troli',
        22: 'Document Large With Troli',
        23: 'Gif Large With Troli',
        24: 'Image Large With Troli',
        25: 'Image Small With Troli',
        26: 'Gif Small With Troli',
        27: 'Documenr With Troli',
        28: 'Message Troli',
        29: 'Order Message With Troli',
        30: 'Image Two Media With Troli',
    };

    if (text) {
        let themeIndex = parseInt(text);
        if (isNaN(themeIndex) || !themes[themeIndex]) {
            conn.reply(m.chat, 'Input tidak valid. Silakan pilih tema dari daftar berikut:\n' + Object.entries(themes).map(([id, theme]) => `*${id}.* ${theme}`).join('\n'), m);
            return;
        }
        conn.temabot = {
            id: themeIndex
        };
        conn.reply(m.chat, 'Tema Made By *Bang Putra* berhasil diatur\n' + themes[themeIndex], m);
    } else {
        conn.reply(m.chat, 'Input tidak valid. Silakan pilih tema dari daftar berikut:\n' + Object.entries(themes).map(([id, theme]) => `*${id}.* ${theme}`).join('\n'), m);
        return;
    }
};
handler.help = ['tema', 'temabot', 'theme']
handler.tags = ['owner']
handler.command = /^(tema|temabot|theme)$/i
handler.owner = true

export default handler