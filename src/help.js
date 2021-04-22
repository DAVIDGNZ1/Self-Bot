const q = '```'
const y = '_'
const f = '*'
const c = '~'
const help = (prefix) => {
	return  ` _HITUNG MUNDUR BULAN RAMADHAN_
    _*${ramadhan.data.result}*_
    
    *Selamat ${ucapan.data.result}Kak* 
 
╔═══[ *LIST MENU SELF BOT* ]
║┣➻ ${f}${prefix}donasi${f}
║┣➻ ${f}${prefix}sticker Reply img${f}
║┣➻ ${f}${prefix}rsticker Reply img${f}
║┣➻ ${f}${prefix}stickergif Reply video${f}
║┣➻ ${f}${prefix}stickerwa Query${f}a      
║┣➻ ${f}${prefix}stickerwm Nama|Author${f}
║┣➻ ${f}${prefix}nobg Reply img${f}
║┣➻ ${f}${prefix}textmaker teks atas|teks bawah${f}
║┣➻ ${f}${prefix}attp Text${f}
║┣➻ ${f}${prefix}ttp Text${f}
║┣ ➻ ${f}${prefix}take Nama|Author${f}
║┣➻ ${f}${prefix}exif Nama|Author${f}
║┣➻ ${f}${prefix}colong${f}
║┣➻ ${f}${prefix}fdeface Url|title|desk${f}
║┣➻ ${f}${prefix}togif Reply stickergif${f}
║┣➻ ${f}${prefix}tovideo Reply sticker${f}
║┣➻ ${f}${prefix}toimg Reply sticker${f}
║┣➻ ${f}${prefix}nulis1${f}
║┣➻ ${f}${prefix}tulis2${f}
║┣➻ ${f}${prefix}asupan${f}
║┣➻ ${f}${prefix}tebakgambar${f}
║┣➻ ${f}${prefix}caklontong${f}
║┣➻ ${f}${prefix}tebakbendera${f}
║┣➻ ${f}${prefix}slot${f}
║┣➻ ${f}${prefix}slot2${f}
║┣➻ ${f}${prefix}suit${f}
╚════════════════

╔════════════════
║┣➻ ${f}${prefix}self${f}
║┣➻ ${f}${prefix}public${f}
║┣➻ ${f}${prefix}mute${f}
║┣➻ ${f}${prefix}unmute${f}
║┣➻ ${f}${prefix}runtime${f}
║┣➻ ${f}${prefix}ping${f}
║┣➻ ${f}${prefix}term${f}
║┣➻ ${f}${prefix}blocklist${f}
║┣➻ ${f}${prefix}run${f}
║┣➻ ${f}${prefix}chatlist${f}
║┣➻ ${f}${prefix}owner${f}
║┣➻ ${f}${prefix}join Linkgroup${f}
║┣➻ ${f}${prefix}getpic @tag${f}
║┣➻ ${f}${prefix}getbio @tag${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════

╔══════════════════
║┣➻ ${f}${prefix}pin${f}
║┣➻ ${f}${prefix}unpin${f}
║┣➻ ${f}${prefix}archive${f}
║┣➻ ${f}${prefix}unarchiveall${f}
║┣➻ ${f}${prefix}readall${f}
║┣➻ ${f}${prefix}delthischat${f}
║┣➻ ${f}${prefix}shutdown${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════

╔═════════════════════
║┣➻ ${f}${prefix}hidetag Text${f}
║┣➻ ${f}${prefix}stctag Tag Stc${f}
║┣➻ ${f}${prefix}imgtag Tag Img${f}
║┣➻ ${f}${prefix}kontag Text${f}
║┣➻ ${f}${prefix}kontak 6281xxx Nama${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════

╔═══════════════════════
║┣➻ ${f}${prefix}setthumb${f}
║┣➻ ${f}${prefix}setreply${f}
║┣➻ ${f}${prefix}setbodymenu${f}
║┣➻ ${f}${prefix}setwelcome${f}
║┣➻ ${f}${prefix}setleave${f}
║┣➻ ${f}${prefix}setpromote${f}
║┣➻ ${f}${prefix}setdemote${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════
╔══════════════════════
║┣➻ ${f}${prefix}upswtext${f}
║┣➻ ${f}${prefix}upswimg${f}
║┣➻ ${f}${prefix}upswvideo${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚════════════════
╔══════════════════
║┣➻ ${f}${prefix}welcome 1/0${f}
║┣➻ ${f}${prefix}linkgroup${f}
║┣➻ ${f}${prefix}group tutup/buka${f}
║┣➻ ${f}${prefix}add 6281xxx${f}
║┣➻ ${f}${prefix}kick @tag${f}
║┣➻ ${f}${prefix}promote @tag${f}
║┣➻ ${f}${prefix}demote @tagadmin${f}
║┣➻ ${f}${prefix}demoteall${f}
║┣➻ ${f}${prefix}edotensei @tag${f}
║┣➻ ${f}${prefix}listadmin${f}
║┣➻ ${f}${prefix}online${f}
║┣➻ ${f}${prefix}infoall${f}
║┣➻ ${f}${prefix}notif${f}
║┣➻ ${f}${prefix}leave${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════
╔═════════════════════
║┣➻ ${f}${prefix}addstik Optional${f}
║┣➻ ${f}${prefix}adimg Optional${f}
║┣➻ ${f}${prefix}addvid Optional${f}
║┣➻ ${f}${prefix}addvn Optional${f}
║┣➻ ${f}${prefix}getstik Query${f}
║┣➻ ${f}${prefix}getimg Query${f}
║┣➻ ${f}${prefix}getvid Query${f}
║┣➻ ${f}${prefix}getvn Query${f}
║┣➻ ${f}${prefix}liststick${f}
║┣➻ ${f}${prefix}listimg${f}
║┣➻ ${f}${prefix}listvid${f}
║┣➻ ${f}${prefix}listvn${f}
║┗━━━━━━━━━━━━━━━━━━━━
╚═════════════════════
╔═════════════════════
║┣➻ ${f}${prefix}play Query${f}
║┣➻ ${f}${prefix}play2 Query${f}
║┣➻ ${f}${prefix}ig Url${f}
║┣➻ ${f}${prefix}fb Url${f}
║┣➻ ${f}${prefix}tiktok Url${f}
║┣➻ ${f}${prefix}ytmp3 Url${f}
║┣➻ ${f}${prefix}ytmp4 Url${f}
║┣➻ ${f}${prefix}tiktok${f}
║┣➻ ${f}${prefix}tiktoknowm${f}
║┣
┗━━━━[  _*SELF BOT DREAM*_  ]━━━━━`


}

exports.help = help
