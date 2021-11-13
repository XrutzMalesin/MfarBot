const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/functions')
const { color, bgcolor } = require('../lib/warna')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (Mufar, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await Mufar.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await Mufar.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(Mufar.user.jid)) {
            Mufar.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik #menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Mufar.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Mufar.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = Mufar.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                teks = `Hallo member baru! ${anu_user}\n*Semoga Betah dan ikuti Rules!*\nSC Original YT : *Mufar Official*`
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/fd7321d1d036d79ace9bd.jpg`)
                buttons = [{buttonId: `${setting.prefix}menu`,buttonText:{displayText: 'SELAMAT DATANG'},type:1}]
                imageMsg = (await Mufar.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: '*_© Xrutz - Official Bot_*', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await Mufar.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                Mufar.relayWAMessage(prep)
}

            if (anu.action == 'remove' && !mem.includes(Mufar.user.jid)) {
                mdata = await Mufar.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Mufar.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0] 
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                out = `Haduh Beban Left dari Grup\n*Selamat Tinggal* ${anu_user}\nSemoga Tenang disana!`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://telegra.ph/file/fd7321d1d036d79ace9bd.jpg`)
                buttons = [{buttonId: `${setting.prefix}infogroup`,buttonText:{displayText: 'SELAMAT JALAN'},type:1}]
                imageMsg = (await Mufar.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: '*_© Xrutz - Official Bot_*', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await Mufar.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                Mufar.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
