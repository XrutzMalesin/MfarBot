/*
----------[ SCRIPT BY XRUTZ OFFICIAL ]----------
KALO MAU UPLOAD KE YT, KASIH CREDITNYA LU CM NUMPANG!
き⃟ SC ORI : DEPIN
き⃟ RECODER : XRUTZ
き⃟ THANKS TO :
- MANIK ARYA
- DCODE DENPA
- KURXD OFFC
- ZEEONE
- LOLHUMAN
- YUZZU KIMIYAKA
- IWASHUMAN
- DAN CREATOR LAINNYA
き⃟ BIG THANKS TO : @adiwajshing, Baileys, MhankBarbar
き⃟ BANYAK ERROR? WAJAR BARU BELAJAR MAS.
------------------------[ BATAS SUCI ]--------------------------
*/
const {
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const yts = require( 'yt-search')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const os = require('os');
const hx = require('hxz-api')

const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { color, bgcolor } = require('./lib/warna')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close , sleep} = require('./lib/functions')
const { fetchJson, fetchText , kyun, createExif} = require('./lib/fetcher')
const { yta, ytv, upload, uploadImages, styleText } = require('./lib/ytdl')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const Exif = require('./lib/exif');
const exif = new Exif();
const _prem = require('./lib/premium')
const { smsg } = require('./lib/simple')
const { virtex } = require('./media/virtex')
const { virtex2 } = require('./media/virtex2')
const { virtex3 } = require('./media/virtex3')

// Database
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antivirtx = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

// Setting Person
let {
    ownerNumber,
    owner,
    ownerName,
    lolkey,
    faketeks,
    pathimg,
    botName,
} = setting // Cek setting.json

// Bot Setting
limitawal = "10" // ganti serah
battre = "Not Detected" 
charg = "Not Detected" 
charging = false
autorespon = false
menuall = false
publik = true
multi = false
nopref = false
allpref = true
baterai = { baterai: 100, cas: false }

// Image Setting
thumb = fs.readFileSync('./src/Mufar.jpg')
thumbz = fs.readFileSync('./src/Tamnel.jpg')

// Module
module.exports = Mufar = async (Mufar, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
global.prefix
m = smsg(Mufar, mek)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const timeWit = moment.tz('Asia/Makassar').format('HH : mm : ss')
const timeWita = moment.tz('Asia/Jayapura').format('HH : mm : ss')  
const cmd = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Mufar.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Mufar.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === Mufar.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === Mufar.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const on = process.uptime()
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = chats.slice(command.length + 2, chats.length)
const isCmd = body.startsWith(prefix)

// Biarin Tod
try {
pporang = await Mufar.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(pporang)
const pporigi = fs.readFileSync('./src/Mufar.jpg')

// Message Chat
mess = {
wait: '*[❗] Proses Kak!*',
limit: '*[❗] Limit Kamu Habis!*\nChat Owner Untuk Isi Ulang!',
search: '*[❗] Sedang Mencari...*',
eror: '*[❗] Error Kak!*',
success: '*[❗]  Sukses Kak!*',
error: {
stick: '*[❗] Gagal Convert!*',
Iv: '*[❗] Link Error!*'
},
only: {
group: '*[❗] Khusus Group!*',
prem: '*[❗] Khusus User Prem!*',
ownerG: '*[❗] Khusus Owner Grup!*',
ownerB: '*[❗] Khusus Owner Bot!*',
admin: '*[❗] Khusus Admin!*',
Badmin: '*[❗] Bot Harus Jadi Admin!*'
}
}

// Constant Bot
const totalchat = await Mufar.chats.all()
const botNumber = Mufar.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const senderr = mek.key.fromMe ? Mufar.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await Mufar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntiVirtex = isGroup ? antivirtx.includes(from) : false
const isAntilink = isGroup ? anlink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const itsMe = mek.key.fromMe ? true : false
const isOwner = ownerNumber.includes(sender)
const ramadhan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4') 
const isPrem = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const conts = mek.key.fromMe ? Mufar.user.jid : Mufar.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Mufar.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

// Button Verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)
const sendButRegis = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Mufar.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: floc
})
}

const daftar1 = `Hallo kak ${pushname}
*Silahkan daftar terlebih dulu!*

Silahkan tekan Button dibawah.
*NOTE : Mendaftar hanya bisa sekali!*`
const daftar2 = '*Created © Xrutz Official*'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `Meng Daftar`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

// Mengfake link
const replyWithFakeLink = (teks) => {
Mufar.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
            "title": `© Whatsapp-SelfBot\nXrutz Bot (@rellnjoy_)\n• Follow my Instagram!`,
            "body": "",
            "previewType": "PHOTO",
            "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
            "thumbnail": thumb,
            "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}

// Button M4s
const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
            contentText: context,
            footerText: fortext,
            buttons: but,
            headerType: 1
            }
            Mufar.sendMessage(from, buttonMessages, buttonsMessage, {
            quoted: floc
            })
            }

const sendButloc = async(id, context, fortext, gam1, but = [], options = {}) => {
	           kma = gam1
               Mufar.sendMessage(id, { contentText: context,
               footerText: fortext, 
               buttons: but,
               headerType: "LOCATION",
               locationMessage: {
               text: context,
               name: "South Brisbane",
               address: "Cloudflare, Inc",
               jpegThumbnail: kma
                }}, MessageType.buttonsMessage, options)  
              }

const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Mufar.prepareMessage(from, img, image)
            buttonMessagesI = {
            imageMessage: jadinya.message.imageMessage,
            contentText: context,
            footerText: fortext,
            buttons: but,
            headerType: 4
            }
            Mufar.sendMessage(from, buttonMessagesI, buttonsMessage, {
            quoted: floc,
            contexInfo: xrtz
            })
            }

const xrtz = { 
"title": `Hallo ${pushname}`,
"body": `Xrutz`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": fs.readFileSync('./src/Mufar.jpg')
}

// Function M3n					
for (var i = 0; i < commandsDB.length ; i++) {
if (budy.toLowerCase() === commandsDB[i].pesan) {
reply(commandsDB[i].balasan)
}
}

const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

// Wadefak Men
const fmen = { key : { participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2021, status: 1, surface : 1, message: `© Xrutz Official`, thumbnail: fs.readFileSync('./src/Mufar.jpg'), sellerJid: '0@s.whatsapp.net'}}}
const fdoc = { key: { participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: `© Xrutz Official`, jpegThumbnail: thumb}}}
const fvn = { key: { participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {})}, message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
const fgif = { key: { participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {})}, message: {"videoMessage": { "title":`© Xrutz Official`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `© Xrutz Official`, 'jpegThumbnail': thumb}}}
const fgclink = { key: { participant: '0@s.whatsapp.net', "remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283871990243-1616169743@g.us","inviteCode": "m","groupName": "Xrutz Official", "caption": `© Xrutz Official`, 'jpegThumbnail': thumb}}}
const fvideo = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {})}, message: { "videoMessage": { "title":`© Xrutz Official`, "h": `Hmm`,'seconds': '99999', 'caption': `© Xrutz Official`, 'jpegThumbnail': thumb}}}
const floc = { key: { participant : '0@s.whatsapp.net'}, message: {locationMessage: {name: `© Xrutz Official`, jpegThumbnail: thumbz}}}
const fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'}, message: {imageMessage: {mimetype: 'image/jpeg', caption: 'Xrutz Selfbot', jpegThumbnail: fs.readFileSync('./src/Mufar.jpg'), viewOnce: true}}}

// Reply Text
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const math = (teks) => {
return Math.floor(teks)
}

const reply = (teks) => {
Mufar.sendMessage(from, teks, text, {quoted: fgif})
}

const replyy = (teks) => {
Mufar.sendMessage(from, teks, text, {quoted: mek})
}

const sendMess = (hehe, teks) => {
Mufar.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Mufar.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Mufar.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

const kickMember = async(id, target = []) => {
let group = await Mufar.groupMetadata(id)
let owner = group.owner.replace("c.us", "s.whatsapp.net")
let me = Mufar.user.jid
for (i of target) {
if (!i.includes(me) && !i.includes(owner)) {
await Mufar.groupRemove(to, [i])
} else {
await Mufar.sendMessage(id, "Not Premited!", "conversation")
}
}
}
const kick = function(from, orangnya){
for (let i of orangnya){
Mufar.groupRemove(from, [i])
}
}

const add = function(from, orangnya){
Mufar.groupAdd(from, orangnya)
}

const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('*Xrutz Official*\n'.repeat(300))
reply(`「 *VIRUS DETECTOR* 」\n\n*Kamu mengirimkan Virtex, Maaf kamu akan di Kick!*`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Mufar.groupRemove(from, [sender])
}
              
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Kamu admin, jadi Bot gak Kick :)')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK DETECTOR* 」\n\n*Link Group terdeteksi!!, Kamu akan di kick dari Group!*`)
setTimeout(() => {
Mufar.groupRemove(from, [sender])
}, 2000);
}
}         
                
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mMFAR\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mMFAR\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

function monospace(string) {
return '```' + string + '```'
} 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

const hideTag = async function(from, text){
let anu = await Mufar.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Mufar.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./src/Mufar.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

async function sendStickerFakeSize(buffer) {
fsize = await Mufar.prepareMessage(from, buffer, sticker)
costick = await Mufar.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted: mek})
Mufar.relayWAMessage(costick)
}
		
async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
let size =(type == null || type == undefined || type == false) ? 'full' : 'crop'
return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 🗿"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => Mufar.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
}

let authorname = Mufar.contacts[from] != undefined ? Mufar.contacts[from].vname || Mufar.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
let json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
let littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
let bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
let buf2 = Buffer.from(last, "hex")	
let buf3 = Buffer.from(bytes)	
let buf4 = Buffer.from(JSON.stringify(json))	
let buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
fs.writeFile(`./stickers/${name}.exif`, buffer, (err) => {	
return `./stickers/${name}.exif`	
})	
}

// Waktu
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "Selamat Malam"; break;
case 1: jamss = "Selamat Malam"; break;
case 2: jamss = "Selamat Malam"; break;
case 3: jamss = "Selamat Malam"; break;
case 4: jamss = "Selamat Malam"; break;
case 5: jamss = "Sholat Subuh"; break;
case 6: jamss = "Selamat Pagi"; break;
case 7: jamss = "Selamat Pagi"; break;
case 8: jamss = "Selamat Pagi"; break;
case 9: jamss = "Selamat Pagi"; break;
case 10: jamss = "Selamat Pagi"; break;
case 11: jamss = "Selamat Sore"; break;
case 12: jamss = "Sholat Zuhur"; break;
case 13: jamss = "Selamat Sore"; break;
case 14: jamss = "Selamat Sore"; break;
case 15: jamss = "Sholat Ashar"; break;
case 16: jamss = "Selamat Sore"; break;
case 17: jamss = "Selamat Petang"; break;
case 18: jamss = "Sholat Maghrib"; break;
case 19: jamss = "Sholat Isha"; break;
case 20: jamss = "Selamat Malam"; break;
case 21: jamss = "Selamat Malam"; break;
case 22: jamss = "Selamat Malam"; break;
case 23: jamss = "Selamat Malam"; break;
}
var tampilUcapan = "" + jamss;
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }

const sendStickerFromUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Mufar.sendMessage(to, media, sticker,{quoted : mek})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Mufar.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}

const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('selesai');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./stickers/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
Mufar.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
fs.unlinkSync(asw)
});
});
});
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Mufar.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
});
}

// No Toxic
if (!m.key.fromMe && bad.includes(messagesD)) {
replyWithFakeLink('*[❗] Jangan Toxic!*')
}

// Auto Presence
Mufar.updatePresence(from, Presence.recording)

// Auto Reading
Mufar.chatRead(from, "read")

switch(command) {
	
case 'help':
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
but = [
{ buttonId: `${prefix}command`, buttonText: { displayText: 'Simple Menu' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Creator XrutzBot' }, type: 1 }
]
menuk =`${tampilUcapan}, ${pushname}
*Mode Type : ${publik ? 'Public' : 'Self'} Bot*

*• About Owner*
Youtube : Xrutz Official
No Whatsapp : @${owner}

*• User Info :*
Status : ${isOwner ? 'Owner' : 'Gratisan'}
UserName : ${pushname}
Nomor : ${sender.split("@")[0]}

*• XrutzBot Stats :*
Name : ${botName}
Creator : ${ownerName}
Prefix : Multi Prefix
Runtime : ${runtime(on)}`

futer =`
*X R U T Z B O T 濾*
${week}, ${calender} 

*• Random Menu :*
1. ${prefix}tqto
2. ${prefix}runtime
3. ${prefix}donasi
4. ${prefix}sc
5. ${prefix}owner
6. ${prefix}sharelock
7. ${prefix}rulesbot
8. ${prefix}infogroup
9. ${prefix}verify
10. ${prefix}infobot

*• Menu Group*
11. ${prefix}antilink
12. ${prefix}welcome
13. ${prefix}add _628xxx_
14. ${prefix}kick _@tag_
15. ${prefix}promote _@tag_
16. ${prefix}demote _@tag_
17. ${prefix}listadmin
18. ${prefix}listonline
19. ${prefix}group (Button)
20. ${prefix}ohidetag _teks_

*• Sticker Menu*
21. ${prefix}ttp _teks_
22. ${prefix}attp _teks_
23. ${prefix}toimg
24. ${prefix}swm _nama|author_
25. ${prefix}sticker _reply image_

*• Developer Menu*
26. ${prefix}bc _teks_
27. ${prefix}exif _nama|author_
28. ${prefix}clearall
29. ${prefix}mode
30. ${prefix}setthumb _reply image_
31. ${prefix}spam _teks|jumlah_
32. ${prefix}addrespon _tanya|jawab_
33. ${prefix}delrespon _tanya|jawab_
34. ${prefix}listrespon
35. ${prefix}setppbot _reply image_
36. ${prefix}setname _teks_
37. ${prefix}setbio _teks_
38. ${prefix}setprefix _nopref/multi_
39. ${prefix}leave
40. ${prefix}cekapikey

*• Limit Menu*
41. ${prefix}harrypotter
42. ${prefix}phkomen
43. ${prefix}holographic
44. ${prefix}blackpink
45. ${prefix}marvelstudio
46. ${prefix}avenger
47. ${prefix}glitch
48. ${prefix}pornhub
49. ${prefix}text1917
50. ${prefix}freefire
51. ${prefix}pubg
52. ${prefix}ytkomen
53. ${prefix}nulis _teks_
54. ${prefix}fakedonald
55. ${prefix}neonlight

*• Islam Menu*
56. ${prefix}listsurah
57. ${prefix}asmaulhusna
58. ${prefix}jadwalsholat
59. ${prefix}kisahnabi _nama_
60. ${prefix}alquran
61. ${prefix}alquranaudio

*• Download Menu*
62. ${prefix}tiktokmusic
63. ${prefix}herodetail
64. ${prefix}ytsearch _judul_
65. ${prefix}ytmp3 _link_
66. ${prefix}ytmp4 _link_
67. ${prefix}play _judul_
68. ${prefix}tourl
69. ${prefix}igdl
70. ${prefix}fbdl
71. ${prefix}brainly _teks_
72. ${prefix}lirik _judul_
73. ${prefix}tiktoknowm _link_
74. ${prefix}pinterest _nama_
75. ${prefix}spotifysearch _judul_

*• Gabut Menu*
76. ${prefix}suit
77. ${prefix}gachacecan
78. ${prefix}gachacogan
79. ${prefix}meme
80. ${prefix}memeindo
81. ${prefix}darkjoke
82. ${prefix}artinama
83. ${prefix}jodoh
84. ${prefix}tebakumur
85. ${prefix}weton
86. ${prefix}jadian
87. ${prefix}faktaunik
88. ${prefix}anime
89. ${prefix}truth
90. ${prefix}dare

*• Search Menu*
91. ${prefix}infogempa
92. ${prefix}covidindo
93. ${prefix}covidglobal
94. ${prefix}brainly _teks_
95. ${prefix}wikipedia _teks_
96. ${prefix}playstore
97. ${prefix}kodepos _kota_
98. ${prefix}newsinfo
99. ${prefix}jadwaltv
100. ${prefix}cuaca _kota_

*• Stalk Menu*
101. ${prefix}igstalk _name_
102. ${prefix}mlstalk _id_
103. ${prefix}tkstalk _name_
104. ${prefix}githubstalk _name_
105. ${prefix}shortlink _link_

*• Nsfw Menu*
106. ${prefix}loli
107. ${prefix}hentai
108. ${prefix}waifu
109. ${prefix}husbu
110. ${prefix}neko

*• Limit Menu*
111. ${prefix}buylimit
112. ${prefix}toplimit
113. ${prefix}topbalance
114. ${prefix}ceklimit
115. ${prefix}givelimit

*• Sticker Lucu* // by Xrutz
116. ${prefix}stiklucu
117. ${prefix}stiklucu2
118. ${prefix}stiklucu3
119. ${prefix}stiklucu4
120. ${prefix}stiklucu5
121. ${prefix}stiklucu6
122. ${prefix}stiklucu7
123. ${prefix}stiklucu8
124. ${prefix}stiklucu9
125. ${prefix}stiklucu10

*• Virtex Menu*
126. ${prefix}virtex
127. ${prefix}virtex2
128. ${prefix}virtex3

*• New Feature*
129. ${prefix}linkgroup
130. ${prefix}patrick
131. ${prefix}ppcouple
132. ${prefix}antivirtex
133. ${prefix}detikvn _reply vn_

*© Xrutz - Official Bot*
Hitung Mundur Ramadhan :
_${ramadhan.data.result}_, *Now : ${week}, ${calender}*`
img = fs.readFileSync('./src/Mufar.jpg')
sendButImage(from, menuk, futer, img, but)
limitAdd(sender, limit)
break

case 'infobot': //By KurXd
groups = Mufar.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = Mufar.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
timestampe = speed();
latensie = speed() - timestampe
totalChat = await Mufar.chats.all()
total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
nama = '𝗫𝗿𝘂𝘁𝘇 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹'
ownerJid = "6283871990243@s.whatsapp.net"
			
menunya = `⍟ ────────────────── ⍟
X R U T Z B O T 右
${week}, ${calender}

Group Chats : ${groups.length}
Private Chats : ${privat.length}
Total Chats : ${totalChat.length}
Speed : ${latensie.toFixed(4)} _Second_
Active Time : ${runtime(on)}

Baterai : ${battre}%
Charging : ${baterai.cas === 'true' ? 'di Cas' : 'Gak di Cas'}
Ram Usage : ${ram2}
Platform : ${os.platform()}
Hostname : ${os.hostname()}
Uptime : ${runtime(on)}
Wa Version: ${Mufar.user.phone.wa_version}
Os Version: ${Mufar.user.phone.os_version}
Device Manufacturer: ${Mufar.user.phone.device_manufacturer}
Device Model: ${Mufar.user.phone.device_model}
Os Build Number: ${Mufar.user.phone.os_build_number}

⍟ ────────────────── ⍟`
if(menuall == false){
mek = Mufar.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
								"productImage": {
								 "url": "https://mmg.whatsapp.net/d/f/Ahb4wGLv5WRRHNDjX0oscWGguHSUTuBXrBLUDCzO0_0Z.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "LxreCgbGFLCuMD0STZaaTDsyHuNg/s06FHXg9vm+qmo=",
						"fileLength": "109459",
						"height": 1280,
						"width": 1274,
						"mediaKey": "1SBZlmQxZQR+qZBVlBR5RcvDQNfYSRiYPT8uWDaEzLY=",
						"fileEncSha256": "V6JNiialXPUGHn1j7Tz7YkXpU+QzOkBvOV7GZL2PRS4=",
						"jpegThumbnail": fs.readFileSync("./src/Mufar.jpg")
                                },
                            "productId": "9999999",
							"title": `${nama}`, 
							"description": `${menunya}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: fmen, contextInfo: { mentionedJid: [sender]}})
                  Mufar.relayWAMessage(mek)
                  } else if(menuall = true){
gbutsan = [
{buttonId:`owner`, buttonText:{displayText: 'Creator Xrutzbot'}, type:1},
{buttonId:`donasi`, buttonText:{displayText: 'Mengdonasi'}, type:1},
{buttonId:`sc`, buttonText:{displayText: 'Buy Script'}, type:1}
]
mhan = await Mufar.prepareMessage(from, thumb, image, {thumbnail: thumb})
const btnBngsat = {
imageMessage: mhan.message.imageMessage,
contentText: `${menunya}`,
footerText: `© Xrutz Official`,
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, btnBngsat, MessageType.buttonsMessage, { quoted: fmen, caption: menunya, contextInfo: { mentionedJid: [sender]}})
}
limitAdd(sender, limit)
break

case 'command':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
listMsg = {
buttonText: 'PILIH DISINI',
footerText: '*_© Xrutz - Official Bot_*',
description: `${tampilUcapan} ${pushname}, *Hallo User @${sender.split('@')[0]}, Silahkan pilih menu Xrutz-Bot disini*`,
sections: [
                 {
                 "title": `${week}, ${calender}`,
 rows: [
                 {
                 "title": "List Menu",
                 "rowId": "allmenu"
                 },
                 {
                 "title": "Peraturan Bot",
                 "rowId": "rulesbot"
                 },
                 {
                 "title": "Meng Donasi",
                 "rowId": "donasi"
                 },
                 {
                 "title": "Information",
                 "rowId": "donasi"
                 },
                 {
                 "title": "Atur Group",
                 "rowId": "settinggrup"
                 },
                 {
                 "title": "Statistic Bot",
                 "rowId": "infobot"
                 }
                 ]
                 }],
listType: 1
}
Mufar.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted: fmen})
limitAdd(sender, limit)
break

case 'rulesbot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
ruls =`*Syarat & Ketentuan XrutzBot.ೃ🐣*
Harus di patuhi, Kalau tidak di Banned!

1. Dilarang Toxic Ke Bot. 
2. Dilarang VC/Call Bot.
3. Dilarang Spam Fitur Bot.
4. Dilarang Culik Bot ke Grup.

Kalo sudah dipahami Rules nya
*Silahkan lanjut gunakan Xrutz Bot!*`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Chat Owner' }, type: 1 }]
sendButton(from, ruls, faketeks, but, mek)
limitAdd(sender, limit)
break

case 'verify': //By Denpa
if (isRegistered) return reply('Kamu sudah daftar...')
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `*[❗] USER VERIFIED*

*Nama :* ${pushname}
*Nomor :* @${sender.split('@')[0]}
*Seri :* ${serialUser}
*Pengguna :* ${_registered.length}`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'List Menu'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'MengDonasi'},type:1}
]
mhan = await Mufar.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'*Kamu sudah terdaftar di Database!*', 
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted: fmen, contextInfo: { mentionedJid: [sender]}})
console.log(color('[ REGISTER ]', 'red'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
// console.log(e)
break

// Limit Menu
// Made by Zeeone
case 'topbalance':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup)return reply(mess.only.group)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `📁 *UID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
}
mentions(txot, mebn, true)
break

case 'toplimit':{
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
let mebn = [];
for (let i of limit){
mebn.push(i.id)
let bl = (i.limit)
txot += `📁 *UID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
}
mentions(txot, mebn, true)
}
break

case 'bal': case 'limit': case 'ceklimit': case 'balance': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
replyWithFakeLink(`${ucapanWaktu} @${sender.split("@")[0]}
*📊 Limit : ${isPrem ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*

*Harga Perlimit adalah $100 Balance*
Kamu Dapat Membeli Limit Dengan ${prefix}buylimit *Nominal*`)
break

case 'buylimit':{
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
replyWithFakeLink(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break

case 'giftlimit': case 'givelimit':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
const tujuan = q.substring(0, q.indexOf('|') - 1)
const jumblah = q.substring(q.lastIndexOf('|') + 1)
if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
if (jumblah < 1 ) return reply(`minimal transfer 1`)
if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
hasiltf = jumblah
giveLimit(tujuantf, hasiltf, limit)
beliprem(sender, jumblah)
replyWithFakeLink(`─ 「 *SUKSES* 」 ─
Sukses transfer Limitnya!

🔰 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Contoh Transfer : 
${prefix}giftlimit @user | 10 
Pastikan Transfer Limit dgn Benar!`)
break 


// Random Menu
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
            vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:Xrutz Official\n`
            + `ORG:Name YT : Xrutz Official;\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
            + 'END:VCARD'.trim()
            Mufar.sendMessage(from, {displayName: `Name YT : Xrutz Official`, vcard: vcard2}, contact, 
            { quoted: fmen, 
            })
            replyWithFakeLink('*Ini Nomor Owner Xrutz BOT*\nMau Chat? Utamakan Salam!')
            limitAdd(sender, limit)
            break

case 'speed':
case 'ping':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
const timestamp = speed();
const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `_*${latensi.toFixed(4)} Detik*_`
			reply(pingnya)
			})
			limitAdd(sender, limit)
			break

case 'runtime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
replyWithFakeLink(`*Runtime : ${runtime(on)}*`)
limitAdd(sender, limit)
break

case 'tes':
case 'tesbot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'List Menu' }, type: 1 }]
sendButton(from, `*Status : Active!*\n*UserName: ${pushname}*\n*Number : @${sender.split('@')[0]}*`, faketeks, but, mek)
limitAdd(sender, limit)
break

case 'detikvn':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await Mufar.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
Mufar.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(mediam)
limitAdd(sender, limit)
break

case 'sharelock':
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
 if (args.length == 0) return reply(`Example : ${prefix + command} Kota|Nama`)
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
Mufar.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted: floc})
limitAdd(sender, limit)
break

case 'donasi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
teks =`*${tampilUcapan} ${pushname}*
Pilih Pembayaran Donasinya Xixi :

*Gopay : Scan QR*
*Ovo : 083871990243*
*Pulsa : 083871990243*`
img = fs.readFileSync('./src/Myqris.jpg')
trans = `Created © Xrutz Official`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Chat Owner' }, type: 1 },
{ buttonId: `${prefix}sc`, buttonText: { displayText: 'Script Original' }, type: 1 }
]
sendButImage(from, teks, trans, img, but)
limitAdd(sender, limit)
break

case 'sc':
case 'sourcecode':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Chat Owner' }, type: 1 }]
sendButton(from, "Xrutz bot menjual SC seharga 5K!\n*Atau tunggu Tanggal 1 Desember!*", faketeks, but, mek)
limitAdd(sender, limit)
lbreak

// DIHAPUS? ANAK HARAM
// HARGAIN YANG PUNYA SC, TERMASUK GW!
case 'credits':
case 'tqto':
teksits = `*=> [ BIG THANKS TO ]*
1. Mhankbarbar
2. Dcode Denpa
3. Adiwajshing
4. IWasHuman
5. Pengguna Bot
6. Penyedia Api Key
7. Arya Manik
8. Arifi Razzaq
9. Nayla Botz
10. Xinz Team
11. All Creator Bot

*=> [ THANKS TO ]*
 ❏ Arya Manik
 ❏ Arifi Razzaq
 ❏ Nurutomo
 ❏ Lol Human
 ❏ Baileys
 ❏ Denis Putra
 ❏ KurrXd Offc
 ❏ Dhani Ganz
 ❏ YogiPw
 ❏ Ramlan ID
 ❏ Xinz Team
 ❏ IWasHuman
 ❏ Depin Gura
 ❏ Ndyie Botz
 ❏ Dappa Uhuy
 ❏ Yuzzu Kimiyaka
 ❏ Yudha Botz
 ❏ Zeeone Ofc
 ❏ All Creator Botz

*_© Xrutz Official_*
*[ SC : XRUTZ OFFICIAL ]*`
Mufar.sendMessage(from, thumb, image, {thumbnail:fs.readFileSync('./src/Tamnel.jpg'), quoted: floc, caption: teksits, forwardingScore: 1000, isForwarded: true })
break

// Group Menu
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Mufar.groupInviteCode (from)
yeh = `*Link Grup ${groupName} :*\nhttps://chat.whatsapp.com/${linkgc}`
Mufar.sendMessage(from, {text: yeh,
matchedText: 'https://chat.whatsapp.com/' + linkgc, 
canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
description: `https://chat.whatsapp.com/${linkgc}`, 
title: `${groupName}`, 
jpegThumbnail: thumb}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: mek})
break

case 'antilink' :
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins && !itsMe) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(`*Bot Bukan Admin :)*`)
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'OFF' }, type: 1 }
]
sendButton(from, `*- ON : Untuk mengaktifkan*\n*- OFF : Untuk menonaktifkan!*`, faketeks, but, mek)
limitAdd(sender, limit)
break

case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins&& !itsMe) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isAntilink) return replyWithFakeLink('Udah aktif')
anlink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
replyWithFakeLink(`*[❗] Sudah di Aktifkan!*`)
limitAdd(sender, limit)
break

case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins && !itsMe) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isAntilink) return replyWithFakeLink('Udah mati kak')
let anu = anlink.indexOf(from)
anlink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
replyWithFakeLink(`*[❗] Sudah di Nonaktifkan!*`)
limitAdd(sender, limit)
break

case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe) return reply(mess.only.admin)
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'OFF' }, type: 1 }
]
sendButton(from, `*- ON : Untuk mengaktifkan*\n*- OFF : Untuk menonaktifkan!*`, faketeks, but, mek)
break

case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if (!isAntiVirtex) return replyWithFakeLink('Udah aktif')
antivirtx.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtx))
replyWithFakeLink(`*[❗] Sudah di Aktifkan!*`)
limitAdd(sender, limit)
break

case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if (!isAntiVirtex) return replyWithFakeLink('Udah mati kak')
antivirtx.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtx))
replyWithFakeLink(`*[❗] Sudah di Nonaktifkan!*`)
limitAdd(sender, limit)
break

case 'welcome' :
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: 'OFF' }, type: 1 }
]
sendButton(from, `*- ON : Untuk mengaktifkan*\n*- OFF : Untuk menonaktifkan!*`, faketeks, but, mek)
limitAdd(sender, limit)
break

case 'welcomeon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isWelkom) return replyWithFakeLink('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
replyWithFakeLink(`*[❗] Sudah di Aktifkan!*`)
limitAdd(sender, limit)
break

case 'welcomeoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isWelkom) return replyWithFakeLink('Udah mati kak')
welkom.indexOf(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
replyWithFakeLink(`*[❗] Sudah di Nonaktifkan!*`)
limitAdd(sender, limit)
break

case 'setgrup':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (q === 'buka') {
reply(`Berhasil Membuka Grup!`)
Mufar.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (q === 'tutup') {
reply(`Berhasil Menutup Grup!`)
Mufar.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else if (!q) {
mek =`*BUKA / TUTUP*`
const buttons = [{buttonId: 'setgrup buka', buttonText: {displayText: 'BUKA'}, type: 1},{buttonId: 'setgrup tutup', buttonText: {displayText: 'TUTUP'}, type: 1}]
const btnsharam = {
contentText: `${mek}`,
footerText: '*_© Xrutz Official_*',
buttons: buttons,
headerType: 1
}
await Mufar.sendMessage(from, btnsharam, MessageType.buttonsMessage, {quoted: fmen})
}
limitAdd(sender, limit)
break

case 'autorespon':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (q === 'on'){
autorespon = false
reply(`Berhasil mengaktifkan Fitur!`)
} else if (q === 'off'){
autorespon = true
reply(`Berhasil menonaktifkan Fitur!`)
} else if (!q) {
mek =`*ON : Untuk mengaktifkan!*\n*OFF : Untuk menonaktifkan!*`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF'}, type: 1}]
const btnharam = {
contentText: `${mek}`,
footerText: '*_© Xrutz Official_*',
buttons: buttons,
headerType: 1
}
await Mufar.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: fmen})
}
limitAdd(sender, limit)
break

case 'settinggrup':
case 'grupsetting':
case 'groupsetting':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
listMsg = {
buttonText: 'SETTING GROUP',
footerText: '*_© Xrutz - Official Bot_*',
description: `${tampilUcapan} ${pushname}\n*Hallo User @${sender.split('@')[0]}, Silahkan pilih Setting Group disini*`,
sections: [
                 {
                 "title": `${week}, ${calender}`,
 rows: [
                 {
                 "title": "Setting Welcome",
                 "rowId": "welcome"
                 },
                 {
                 "title": "Setting Antilink",
                 "rowId": "antilink"
                 },
                 {
                 "title": "Setting Grup",
                 "rowId": "setgrup"
                 },
                 {
                 "title": "Setting Anti Virtex",
                 "rowId": "antivirtex"
                 }
                 ]
                 }],
listType: 1
}
Mufar.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: fmen})
limitAdd(sender, limit)
break

case 'add':
try {
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)  
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
			  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
			  response = await Mufar.groupAdd(from, [entah])
			  o = response.participants[0]
			  let inv = (Object.values(o))
			  if(inv[0].code == 409) return reply('Sudah di dalam Group!')
			  if(inv[0].code == 403) return reply('Gagal! User private Acc')
			  if(inv[0].code == 408) return reply('Gagal! User baru saja Keluar')
			  if(inv[0].code == 401) return reply('Gagal! Karena Bot di block oleh Target')
			  } else {
			  entah = mek.message.extendedTextMessage.contextInfo.participant
			  response = await Mufar.groupAdd(from, [entah])
			  o = response.participants[0]
			  let inv = (Object.values(o))
			  if(inv[0].code == 409) return reply('Sudah di dalam Group!')
			  if(inv[0].code == 403) return reply('Gagal! Karena di Private')
			  if(inv[0].code == 408) return reply('Gagal! Karena target baru Keluar')
			  if(inv[0].code == 401) return reply('Gagal! Karena Bot di block oleh Target')
			  }
			  } catch {
			  return 
			  }
		      limitAdd(sender, limit)
              break

case 'kick':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin) 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			  kick(from, mentionUser)
			  limitAdd(sender, limit)
			  break
  
case 'kickall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
              }
              limitAdd(sender, limit)
              break

case 'promote':
case 'pm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isBotGroupAdmins) return replyWithFakeLink(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyWithFakeLink('Tag target yang ingin di jadi admin!')
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              if (mentioned.length > 1) {
              teks = '[❗] Perintah di terima, anda menjadi Admin :\n'
              for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
	          }
	          mentions(teks, mentioned, true)
	          Mufar.groupMakeAdmin(from, mentioned)
              } else {
	          mentions(`[❗] Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
	          Mufar.groupMakeAdmin(from, mentioned)
              }
              limitAdd(sender, limit)
              break

case 'demote':
case 'dm' : 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isBotGroupAdmins) return replyWithFakeLink(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyWithFakeLink('Tag target yang ingin di tidak jadi admin!')
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              if (mentioned.length > 1) {
              teks = 'Perintah di terima, anda tidak menjadi admin :\n'
              for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
              }
              mentions(teks, mentioned, true)
              Mufar.groupDemoteAdmin(from, mentioned)
              } else {
              mentions(`[❗] Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
              Mufar.groupDemoteAdmin(from, mentioned)
              }
              limitAdd(sender, limit)
              break

case 'tagall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `${q ? q : ''}`
              for (let i of groupMembers){
              txti += `• @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
              }
              mentions(txti, arr, true)
              limitAdd(sender, limit)
              break

case 'listadmin':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
teks = `Name Gc : ${groupMetadata.subject}\n*List of Admin : ${groupAdmins.length}*\n\n`
for (let admon of groupAdmins) {
teks += `• @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
limitAdd(sender, limit)
break

case 'ohidetag':
if (!isOwner) return reply(mess.only.owner)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
limitAdd(sender, limit)
break

case 'infogrup':
case 'grupinfo':
case 'groupinfo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
try {
ppimg = await Mufar.getProfilePicture(from)
} catch {
ppimg = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
ingfo = `*[ INFO GROUP ]*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Waktu dibuat  :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n\n*Total Admin :* ${groupAdmins.length}\n*Peserta :* ${groupMembers.length}\n*Fitur Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*Fitur AntiLink :* ${isAntilink ? 'Aktif' : 'Mati'}\n\n*Description :* \n${groupMetadata.desc}`
Mufar.sendMessage(from, await getBuffer(ppimg), image, {quoted: fmen, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
limitAdd(sender, limit)
break

case 'online':
case 'listonline':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Mufar.chats.get(ido).presences), Mufar.user.jid]
Mufar.sendMessage(from, '*List Online di Grup :*\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fmen, contextInfo: { mentionedJid: online }})
} catch (q) {
reply(`${q}`)
}
limitAdd(sender, limit)
break

case 'grup':
case 'group':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return replyWithFakeLink(mess.only.Badmin)
if (args.length == 0) return reply(`Pilih buka / tutup`)
if (args[0] === 'buka') {
replyWithFakeLink(`*[❗] Berhasil membuka group*`)
Mufar.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
replyWithFakeLink(`*[❗] Berhasil menutup group*`)
Mufar.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
limitAdd(sender, limit)
break

case 'leave':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isOwner) return replyWithFakeLink(mess.only.owner)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isGroup) return replyWithFakeLink(mess.only.group)
setTimeout( () => {
Mufar.groupLeave(from) 
}, 2000)
setTimeout( () => {
replyWithFakeLink('Selamat Tinggal...')
}, 0)
break

case 'setppgrup':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return replyWithFakeLink(mess.only.Badmin)
media = await Mufar.downloadAndSaveMediaMessage(mek)
await Mufar.updateProfilePicture (from, media)
replyWithFakeLink(mess.success)
limitAdd(sender, limit)
break

case 'setppbot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isOwner && !mek.key.fromMe) return
if (!isQuotedImage) return reply(`Reply Imagenya!`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Mufar.downloadAndSaveMediaMessage(enmedia)
await Mufar.updateProfilePicture(botNumber, media)
replyWithFakeLink('*Makasih Profile Barunya :)*')
break

case 'setgcname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (!isGroup) return replyWithFakeLink(mess.only.group)
if (!isGroupAdmins) return replyWithFakeLink(mess.only.admin)
if (!isBotGroupAdmins) return replyWithFakeLink(mess.only.Badmin)
if (args.length == 0) return reply(`Example : ${prefix + command} Teks`)
Mufar.groupUpdateSubject(from, `${body.slice(9)}`)
Mufar.sendMessage(from, 'Sukses, Ganti Nama Grup', text, {quoted: mek})
limitAdd(sender, limit)
break

// Sticker Menu
case 'exif':
if (!isOwner) return  reply(mess.only.owner)
if (!q) return reply(mess.eror)
if (!arg.split('|')) return reply(`Example : ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('sukses')
break

case 'patrick':
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)

case 'attp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (args.length < 1) return reply(`Example : ${prefix}ttp ${pushname}`)
xrtz = body.slice(4)
mf4r = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${xrtz}`)
Mufar.sendMessage(from, mf4r, sticker, {quoted: mek})
limitAdd(sender, limit)
break

case 'ttp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (args.length < 1) return reply(`Example : ${prefix}ttp ${pushname}`)
xrtz = body.slice(4)
mf4r = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${xrtz}`)
Mufar.sendMessage(from, mf4r, sticker, {quoted: mek})
limitAdd(sender, limit)
break

case 'semoji':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (args === 0) return reply(`Example : ${prefix + command} 💕`)   
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[10].url}`
sendWebp(from, `${link}`).catch(() => reply('Gagal!'))
})
limitAdd(sender, limit)
break

case 'toimg': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply stiker Lord')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Mufar.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('*[❗] Gagal, pada saat Mengkonversi Sticker ke Gambar!*')
buffer = fs.readFileSync(ran)
Mufar.sendMessage(from, buffer, image, {thumbnail : thumb, caption: '*Kemlarr kan*', quoted: mek})
fs.unlinkSync(ran)
})
} else {
replyWithFakeLink(`Reply Stiker Nya Lord`)
}
break

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Mufar.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Mufar.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Mufar.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Mufar.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video Minimal 1-9 Detik`)
}
break    

case 'stickwm': case 'swm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await Mufar.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`[❗] Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`[❗] Error : ${err}`)
fs.unlinkSync(media)
replyWithFakeLink(mess.error)
})
.on('end', function () {
console.log('[❗] Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Mufar.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var pembawm = body.slice(9)
let media = await Mufar.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(monospace(mess.wait))
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`[❗] Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`[❗] Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
replyWithFakeLink(mess.error)
})
.on('end', function () {
console.log('[❗] Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return replyWithFakeLink('Error')
Mufar.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break 

// Mengfitur disini semua
case 'listsurah':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
mf4r = '*List Surah :*\n'
for (var x in get_result) {
mf4r += `${x}. ${get_result[x]}\n`
}
reply(mf4r)
break

case 'alquran':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`Contoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10\nAtau ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
mf4r = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
mf4r += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
mf4r = mf4r.replace(/<u>/g, "").replace(/<\/u>/g, "")
mf4r = mf4r.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
mf4r = mf4r.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(mf4r)
break

case 'alquranaudio':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Contoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10`)
surah = args[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await Mufar.sendMessage(from, buffer, audio, { quoted: fmen, mimetype: Mimetype.mp4Audio })
break

case 'asmaulhusna':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Urutan :* ${get_result.index}\n`
mf4r += `*Latin :* ${get_result.latin}\n`
mf4r += `*Arab :* ${get_result.ar}\n`
mf4r += `*Indonesia :* ${get_result.id}\n`
mf4r += `*English :* ${get_result.en}`
reply(mf4r)
break

case 'kisahnabi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Nama :* ${get_result.name}\n`
mf4r += `*Lahir :* ${get_result.thn_kelahiran}\n`
mf4r += `*Umur :* ${get_result.age}\n`
mf4r += `*Tempat :* ${get_result.place}\n`
mf4r += `*Story :* ${get_result.story}`
reply(mf4r)
break

case 'jadwalsholat':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example : ${prefix + command} Depok`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Wilayah :* ${get_result.wilayah}\n`
mf4r += `*Tanggal :* ${get_result.tanggal}\n`
mf4r += `*Sahur :* ${get_result.sahur}\n`
mf4r += `*Imsak :* ${get_result.imsak}\n`
mf4r += `*Subuh :* ${get_result.subuh}\n`
mf4r += `*Terbit :* ${get_result.terbit}\n`
mf4r += `*Dhuha :* ${get_result.dhuha}\n`
mf4r += `*Dzuhur :* ${get_result.dzuhur}\n`
mf4r += `*Ashar :* ${get_result.ashar}\n`
mf4r += `*Maghrib :* ${get_result.maghrib}\n`
mf4r += `*Isya :* ${get_result.isya}`
reply(mf4r)
break

// Maker Menu
case 'fakedonald':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz Official`)
mf4r = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${mf4r}`)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: '*© Xrutz Official*'})
limitAdd(sender, limit)
break

case 'nulis':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutzz`)
xrtz = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${xrtz}`)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: 'Awas ketahuan 🗿'})
break

//Photo Oxy
case 'harrypotter':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz`)
mf4r = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${mf4r}`)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: '*© Xrutz Official*'})
break

case 'ytkomen':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz Official`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ytcomment?apikey=${lolkey}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: '*© Xrutz Official*'})
break

case 'phkomen':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Xrutz Official`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/phcomment?apikey=${lolkey}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: '*© Xrutz Official*'})
break

//Stalkengg Tros
case 'igstalk':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${lolkey}`, {method: 'get'})
get_result = get_result.result
mf4r = `Link : https://www.instagram.com/${get_result.username}\n`
mf4r += `Full : ${get_result.fullname}\n`
mf4r += `Post : ${get_result.posts}\n`
mf4r += `Followers : ${get_result.followers}\n`
mf4r += `Following : ${get_result.following}\n`
mf4r += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: mf4r})
break

case 'githubstalk':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
get_result = get_result.result
mf4r = `*Username :* ${get_result.name}\n`
mf4r += `*Followers :* ${get_result.followers}\n`
mf4r += `*Following :* ${get_result.following}\n`
mf4r += `*Publick :* ${get_result.public_repos}\n`
mf4r += `*Public Gits :* ${get_result.public_gists}\n`
mf4r += `*User :* ${get_result.user}\n`
mf4r += `*Compi :* ${get_result.company}\n`
mf4r += `*Lokasi : ${get_result.location}\n`
mf4r += `Email : ${get_result.email}\n`
mf4r += `*Profile Bio :* ${get_result.bio}`
buffer = await getBuffer(get_result.avatar)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: mf4r})
break

case 'tkstalk':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
username = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
get_result = get_result.result
mf4r = `*Link :* ${get_result.username}\n`
mf4r += `*Profil Bio :* ${get_result.bio}\n`
mf4r += `*Followers :* ${get_result.followers}\n`
mf4r += `*Following :* ${get_result.followings}\n`
mf4r += `*Likes :* ${get_result.likes}\n`
mf4r += `*Video :* ${get_result.video}`
buffer = await getBuffer(get_result.user_picture)
Mufar.sendMessage(from, buffer, image, {quoted: mek, caption: mf4r})
break

case 'mlstalk':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
ml_id = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${lolkey}`)
reply(get_result.result)
break

case 'shortlink':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://instagram.com/rellnjoy_`)
ini_link = args[0]
buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
reply(buffer.result)
break

//TextPro Maker
case 'pubg':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz Ganz`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
Mufar.sendMessage(from, buffer, image, { quoted: mek })
break

case 'pornhub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz Ganz`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
Mufar.sendMessage(from, buffer, image, { quoted: lol })
break

case 'blackpink':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz`)
mf4r = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${mf4r}`)
Mufar.sendMessage(from, buffer, image, { quoted: mek})
break

case 'freefire':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz`)
mf4r = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkey}&text=${mf4r}`)
Mufar.sendMessage(from, buffer, image, { quoted: mek})
break

case 'text1917':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz`)
mf4r = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/text1917?apikey=${lolkey}&text=${mf4r}`)
Mufar.sendMessage(from, buffer, image, { quoted: mek})
break

//Info Menu
case 'wikipedia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break

// Downloader
case 'heroml':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
hero = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Name :* ${get_result.hero_name}\n`
mf4r += `*Entrance Quotes :* ${get_result.ent_quotes}\n`
mf4r += `*Role :* ${get_result.detail.role}\n`
mf4r += `*Specialty :* ${get_result.detail.specialty}\n`
mf4r += `*Laning :* ${get_result.detail.laning_recommendation}\n`
mf4r += `*Release :* ${get_result.detail.release_date}\n`
mf4r += `*Movement Speed :* ${get_result.attr.movement_speed}\n`
mf4r += `*Physical Attack :* ${get_result.attr.physical_attack}\n`
mf4r += `*Magic Power :* ${get_result.attr.magic_power}\n`
mf4r += `*Physical Defense :* ${get_result.attr.physical_defense}\n`
mf4r += `*Magic Defense :* ${get_result.attr.magic_defense}\n`
mf4r += `*Critical Rate :* ${get_result.attr.basic_atk_crit_rate}\n`
mf4r += `*Hp : ${get_result.attr.hp}\n`
mf4r += `*Mana :* ${get_result.attr.mana}\n`
mf4r += `*Mana Regen :z ${get_result.attr.mana_regen}\n`
icon = await getBuffer(get_result.icon)
Mufar.sendMessage(from, icon, image, { quoted: mek, caption: mf4r })
break

case 'spotifysearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
mf4r = ""
for (var x of get_result) {
mf4r += `*Title :* ${x.title}\n`
mf4r += `*Artists :* ${x.artists}\n`
mf4r += `*Duration :* ${x.duration}\n`
mf4r += `*Link :* ${x.link}\n`
mf4r += `*Preview :* ${x.preview_url}\n\n\n`
}
reply(mf4r)
break

case 'infogempa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Lokasi :* ${get_result.lokasi}\n`
mf4r += `*Waktu :* ${get_result.waktu}\n`
mf4r += `*Potensi :* ${get_result.potensi}\n`
mf4r += `*Magnitude :* ${get_result.magnitude}\n`
mf4r += `*Kedalaman :* ${get_result.kedalaman}\n`
mf4r += `*Koordinat :* ${get_result.koordinat}`
buffer = await getBuffer(get_result.map)
await Mufar.sendMessage(from, buffer, image, { quoted: mek, caption: mf4r })
limitAdd(sender, limit)
break

case 'covidindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Positif :* ${get_result.positif}\n`
mf4r += `*Sembuh :* ${get_result.sembuh}\n`
mf4r += `*Dirawat :* ${get_result.dirawat}\n`
mf4r += `*Meninggal :* ${get_result.meninggal}`
reply(mf4r)
limitAdd(sender, limit)
break

case 'cuaca':
if (args.length == 0) return reply(`Example: ${prefix + command} Depok`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `Tempat : ${get_result.tempat}\n`
mf4r += `Cuaca : ${get_result.cuaca}\n`
mf4r += `Angin : ${get_result.angin}\n`
mf4r += `Description : ${get_result.description}\n`
mf4r += `Kelembapan : ${get_result.kelembapan}\n`
mf4r += `Suhu : ${get_result.suhu}\n`
mf4r += `Udara : ${get_result.udara}\n`
mf4r += `Permukaan laut : ${get_result.permukaan_laut}\n`
await Mufar.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
reply(mf4r)
break

case 'covidglobal':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Positif :* ${get_result.positif}\n`
mf4r += `*Sembuh :* ${get_result.sembuh}\n`
mf4r += `*Dirawat :* ${get_result.dirawat}\n`
mf4r += `*Meninggal :* ${get_result.meninggal}`
reply(mf4r)
limitAdd(sender, limit)
break

case 'kodepos':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (args.length == 0) return reply(`Example: ${prefix + command} Depok`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
get_result = get_result.result[0]
mf4r = `*Provinsi :* ${get_result.province}\n`
mf4r += `*Kabupaten :* ${get_result.city}\n`
mf4r += `*Kecamatan :* ${get_result.subdistrict}\n`
mf4r += `*Kelurahan :* ${get_result.urban}\n`
mf4r += `*Kode Pos :* ${get_result.postalcode}`
reply(mf4r)
limitAdd(sender, limit)
break

case 'lirik':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
reply(get_result.result)
break

case 'brainly':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
mf4r = "Result Search : \n"
for (var x of get_result) {
mf4r += `${x.title}\n`
mf4r += `${x.url}\n\n`
}
reply(mf4r)
break

case 'playstore':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
mf4r = 'Play Store Search : \n'
for (var x of get_result) {
mf4r += `Name : ${x.title}\n`
mf4r += `Type ID : ${x.appId}\n`
mf4r += `Developer : ${x.developer}\n`
mf4r += `Link : ${x.url}\n`
mf4r += `Price : ${x.priceText}\n`
mf4r += `Nominal : ${x.price}\n\n`
}
reply(mf4r)
break

case 'jadwaltv':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Info Televisi :*\n\n`
for (var x in get_result) {
mf4r += `${x.toUpperCase()}${get_result[x]}\n\n`
}
reply(mf4r)
break

case 'newsinfo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
get_result = get_result.result
mf4r = "*News TV Info :*\n\n"
for (var x of get_result) {
mf4r += `*Title :* ${x.title}\n`
mf4r += `*Author :* ${x.author}\n`
mf4r += `*Source :* ${x.source.name}\n`
mf4r += `*Url :* ${x.url}\n`
mf4r += `*Published :* ${x.publishedAt}\n\n`
mf4r += `*Description :* ${x.description}`
}
reply(mf4r)
break

case 'tourl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await Mufar.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('Kirim / Reply gambar')
}
break

case 'tiktoknowm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
url = args[0]
url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${url}`
get_result = await fetchJson(url)
buffer = await getBuffer(get_result.result.link)
Mufar.sendMessage(from, buffer, video, {quoted: mek})
break

case 'tiktokmusic':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${link}`)
Mufar.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
break

case 'ytmp3':
case 'ytmp4':
case 'ytsearch':
case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length === 0) return reply(`Example : ${prefix + command} Duka`)
var srch = args.join(' ')
aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url
try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `🎧 *[ PLAY MUSIC ]* 🎧\n*Name* : ${title}\n\n*Audio Type* : MP3\n*Link Download* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim, butuh beberapa menit_\n*_© Xrutz Official_*`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply(mess.api.error)
}
break

case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Xrutz`)
query = args.join(" ")
url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
url = url.result
buffer = await getBuffer(url)
Mufar.sendMessage(from, buffer, image, {quoted: fmen})
break

case 'igdl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${url}`)
url = url.result
type = image
if (url.includes(".mp4")) type = video
buffer = await getBuffer(url)
Mufar.sendMessage(from, buffer, type, { quoted: fmen})
break

case 'fbdl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${url}`)
url = url.result[0].link
buffer = await getBuffer(url)
Mufar.sendMessage(from, buffer, video, { quoted: fmen})
break

// Fun Menu
case 'suit':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
			if (args[0] === 'gunting' ) {
			gunting = [
	        "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 🗿",
		    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 😱",
	        "Kamu *Gunting*\nAku *Gunting*\nKita Seri 🗿"
		    ]
		    gun = gunting[Math.floor(Math.random() * gunting.length)]
		    reply(gun)
			} else if (args[0] === 'kertas') {
		    ker = [
		    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 🗿",
		    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 😱",
		    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 🗿"
		    ]
		    kertas = ker[Math.floor(Math.random() * ker.length)]
			reply(kertas)
			} else if (args[0] === 'batu') {
		   bat = [
		   "Kamu *Batu*\nAku *Gunting*\nKamu Menang 🗿",
		   "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 😱",
		   "Kamu *Batu*\nAku *Batu*\nKita Seri 🗿"
	       ]
		   batu = bat[Math.floor(Math.random() * bat.length)]
		   reply(batu)
		   } else {
		   reply('Pilih gunting/batu/kertas')
		   }
           break

case 'ppcouple':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
woy = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`, {method: 'get'})
laki = await getBuffer(woy.result.male)
Mufar.sendMessage(from, laki, image, {quoted: mek, caption: 'Hduh sama Siapa tuch...\nMade in by *_© Xrutz - Official_*'})
cewe = await getBuffer(woy.result.female)
Mufar.sendMessage(from, cewe, image, {quoted: mek, caption: 'Hduh sama Siapa tuch...\nMade in by *_© Xrutz - Official_*'})
break

case 'gachacogan': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`gachacogan`,buttonText:{displayText:'Gacha Lagi'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagss = {
imageMessage: mhan.message.imageMessage,
contentText: `Halu Trosss`,
footerText: '*_© Xrutz Official_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'gachacecan': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
gbutsan = [{buttonId:`gachacecan`,buttonText:{displayText:'Gacha Lagi'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagsssss = {
imageMessage: mhan.message.imageMessage,
contentText: `Asupan Ngab`,
footerText: '*_© Xrutz Official_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagsssss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'meme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`meme`,buttonText:{displayText:'Next Meme'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {quoted: mek, caption: 'Ngedark Trosss'})
const buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Tross`,
footerText: '*_© Xrutz Official_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'memeindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`memeindo`,buttonText:{displayText:'Next Meme'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {quoted: mek, caption: 'Ngedark Trosss'})
const buttonMessagesss = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Tross`,
footerText: '*_© Xrutz Official_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagesss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'darkjoke':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`darkjoke`,buttonText:{displayText:'Next Meme'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {quoted: mek, caption: 'Ngedark Trosss'})
const buttonMessagess = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Tross`,
footerText: '*_© Xrutz Official_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagess, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'artinama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Arell`)
nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${nama}`)
reply(get_result.result)
break

case 'jodoh':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Yanto & Yanti`)
nama = args.join(" ").split("&")
nama1 = nama[0].trim()
nama2 = nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Positif :* ${get_result.positif}\n\n`
mf4r += `*Negative :* ${get_result.negatif}\n\n`
mf4r += `*Deskripsi :* ${get_result.deskripsi}`
reply(mf4r)
break

case 'weton':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Weton :* ${get_result.weton}\n\n`
mf4r += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
mf4r += `*Rejeki :* ${get_result.rejeki}\n\n`
mf4r += `*Jodoh :* ${get_result.jodoh}`
reply(mf4r)
break

case 'jadian':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
mf4r = `*Karakteristik :* ${get_result.karakteristik}\n\n`
mf4r += `*Deskripsi :* ${get_result.deskripsi}`
reply(mf4r)
break

case 'tebakumur':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Arell`)
name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} Arell`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${name}`)
get_result = get_result.result
mf4r = `*Nama :* ${get_result.name}\n`
mf4r += `*Umur :* ${get_result.age}`
reply(mf4r)
break

case 'anime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
mf4r = `Id : ${get_result.id}\n`
mf4r += `Id MAL : ${get_result.idMal}\n`
mf4r += `Title : ${get_result.title.romaji}\n`
mf4r += `English : ${get_result.title.english}\n`
mf4r += `Native : ${get_result.title.native}\n`
mf4r += `Format : ${get_result.format}\n`
mf4r += `Episodes : ${get_result.episodes}\n`
mf4r += `Duration : ${get_result.duration} mins.\n`
mf4r += `Status : ${get_result.status}\n`
mf4r += `Season : ${get_result.season}\n`
mf4r += `Season Year : ${get_result.seasonYear}\n`
mf4r += `Source : ${get_result.source}\n`
mf4r += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
mf4r += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
mf4r += `Genre : ${get_result.genres.join(", ")}\n`
mf4r += `Synonyms : ${get_result.synonyms.join(", ")}\n`
mf4r += `Score : ${get_result.averageScore}%\n`
mf4r += `Characters : \n`
character = get_result.characters.nodes
for (var x of character) {
    mf4r += `- ${x.name.full} (${x.name.native})\n`
}
mf4r += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
Mufar.sendMessage(from, thumbnail, image, { quoted: fmen, caption: mf4r })
break

case 'faktaunik':{
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
reply(`*Fakta Unik :*\n${ran_faktau}`)
}
break

case 'dare':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
sendButton(from, `${der}`, faketeks, [
{
buttonId: `${prefix}dare`,
buttonText: {
displayText: `Selanjutnya`,
},
type: 1,
}]);
break

case 'truth':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
sendButton(from, `${ttrth}`, faketeks, [
{
buttonId: `${prefix}truth`,
buttonText: {
displayText: `Selanjutnya`,
},
type: 1,
}]);
break

// Nsfw Menu
case 'hentai':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`hentai`,buttonText:{displayText:'Next Crott'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagiss = {
imageMessage: mhan.message.imageMessage,
contentText: `Akhh Kimochii..`,
footerText: '*_© Xrutz - Official Bot_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagiss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'loli':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`loli`,buttonText:{displayText:'Next Random'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagass = {
imageMessage: mhan.message.imageMessage,
contentText: `Halu Mulu Bang :v`,
footerText: '*_© Xrutz - Official Bot_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagass, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'waifu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`waifu`,buttonText:{displayText:'Next Waifu'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagisssss = {
imageMessage: mhan.message.imageMessage,
contentText: `Halu aja Tross!`,
footerText: '*_© Xrutz - Official Bot_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagisssss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'neko':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`neko`,buttonText:{displayText:'Next Random'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagissss = {
imageMessage: mhan.message.imageMessage,
contentText: `Halu aja Tross!`,
footerText: '*_© Xrutz - Official Bot_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagissss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

case 'husbu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`, {method: 'get'})
gbutsan = [{buttonId:`husbu`,buttonText:{displayText:'Next Random'},type:1}]
mhan = await Mufar.prepareMessage(from, buffer, image, {thumbnail: buffer})
const buttonMessagisss = {
imageMessage: mhan.message.imageMessage,
contentText: `Halu aja Tross!`,
footerText: '*_© Xrutz - Official Bot_*',
buttons: gbutsan,
headerType: 4
}
Mufar.sendMessage(from, buttonMessagisss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/Mufar.jpg'),
caption: 'Xrutz',
quoted: mek})
break

// Owner Menu
case 'mode':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
buttonss = [{buttonId: `self`, buttonText: {displayText: 'SELF'}, type: 1}, {buttonId: `public`, buttonText: {displayText: 'PUBLIC'}, type: 1}]
const buMess = {
contentText: "*Pilih : SELF / PUBLIC*",
footerText: 'Silahkan Anda Pilih Salah Satu',
buttons: buttonss,
headerType: 1
}
await Mufar.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: fmen})
break

case 'public':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
publik = true
reply('Sukses mengubah Mode Public')
break

case 'self':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
publik = false
reply('Sukses mengubah Mode Self')
break

case 'spam':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`Harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
Mufar.sendMessage(from, argzi[0], MessageType.text)
}
break

case 'setprefix':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example : ${prefix + command} multi/nopref`)
if (q === 'multi'){
multi = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else if (q === 'nopref'){
multi = false
nopref = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else {
multi = false
nopref = false
prefa = `${q}`
reply(`Berhasil mengubah prefix ke ${q}`)
}
break

case 'setbio':{
if (!isOwner) return reply(mess.only.owner)
Mufar.setStatus(q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
replyWithFakeLink(mess.success)
}
break

case 'setthumb':
if (!isOwner) return reply(mess.only.owner)
if (!isQuotedImage) return reply('Reply imagenya!')
const messimagethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await Mufar.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`${pathImg}`)
await sleep(2000)
fs.writeFileSync(`${pathImg}`, downiamgethumb)
replyWithFakeLink('Succes')
break

case 'cekapikey':
if (!isOwner && !mek.key.fromMe) return
buffer = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
teks = `─「 *RESULT APIKEY* 」─\nUser Apikey : ${buffer.result.username}\n\n*Today :* ${buffer.result.today}\n*Request :* ${buffer.result.requests}\n*Akun Type :* ${buffer.result.account_type}\n*Expired :* ${buffer.result.expired}`
Mufar.sendMessage(`${ownerNumber}`, teks, text, {quoted: mek})
break

case 'clearall':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
mek = await Mufar.chats.all()
Mufar.setMaxListeners(10)
for (let _ of mek) {
Mufar.clearMessage(_.jid)
}
reply('Sukses bersihkan semua Pesan')
break

case 'bc':
if (!isOwner) return replyWithFakeLink(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
mfr = await Mufar.chats.all()
for (let _ of mfr) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'Simple Menu'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*BROADCAST XRUTZ BOT*',
buttons: buttonss,
headerType: 1
}
await Mufar.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgclink})
}
replyWithFakeLink(`*[❗] Sukses Broadcast!*`)
break

case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!q) return reply(`Example : ${command} Cmdnya dan Tag Stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply(mess.success)
} else {
reply('Tag Stickernya')
}
break

case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply(`Example : ${command} Tag sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply(mess.success)
break

case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
let teksnyee = `*「 LIST CMD 」*`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ UID :* ${i.id}\n*❏ CMD :* ${i.chats}`
}
reply(teksnyee)
break

case 'addrespon':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example : ${prefix}addrespon Subs Xrutz|Y`)
argz = arg.split('|')
if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
addCommands(argz[0], argz[1], sender, commandsDB)
reply(`Sukses menambahkan!\n*Respon : ${argz[0]}*`)
break

case 'delrespon':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example : ${prefix}delrespon Subs Xrutz`)
if (!checkCommands(body.slice(11), commandsDB)) return reply(`Kosong kak`)
deleteCommands(body.slice(11), commandsDB)
reply(`Sukses menghapus!\n*Respon :${body.slice(11)}*`)
break

case 'listrespon':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
teks = `「 LIST RESPON  」\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}`
}
reply(teks)
break

// Sticker Ucull<3
case 'stiklucu':
const sluc = fs.readFileSync('./stik/stiklucu.webp');
Mufar.sendMessage(from, sluc, MessageType.sticker, {quoted: mek})
break

case 'stiklucu2':
const sluc2 = fs.readFileSync('./stik/stiklucu2.webp');
Mufar.sendMessage(from, sluc2, MessageType.sticker, {quoted: mek})
break

case 'stiklucu3':
const sluc3 = fs.readFileSync('./stik/stiklucu3.webp');
Mufar.sendMessage(from, sluc3, MessageType.sticker, {quoted: mek})
break

case 'stiklucu4':
const sluc4 = fs.readFileSync('./stik/stiklucu4.webp');
Mufar.sendMessage(from, sluc4, MessageType.sticker, {quoted: mek})
break

case 'stiklucu5':
const sluc5 = fs.readFileSync('./stik/stiklucu5.webp');
Mufar.sendMessage(from, sluc5, MessageType.sticker, {quoted: mek})
break

case 'stiklucu6':
const sluc6 = fs.readFileSync('./stik/stiklucu6.webp');
Mufar.sendMessage(from, sluc6, MessageType.sticker, {quoted: mek})
break

case 'stiklucu7':
const sluc7 = fs.readFileSync('./stik/stiklucu7.webp');
Mufar.sendMessage(from, sluc7, MessageType.sticker, {quoted: mek})
break

case 'stiklucu8':
const sluc8 = fs.readFileSync('./stik/stiklucu8.webp');
Mufar.sendMessage(from, sluc8, MessageType.sticker, {quoted: mek})
break

case 'stiklucu9':
const sluc9 = fs.readFileSync('./stik/stiklucu9.webp');
Mufar.sendMessage(from, sluc9, MessageType.sticker, {quoted: mek})
break

case 'stiklucu10':
const sluc10 = fs.readFileSync('./stik/stiklucu10.webp');
Mufar.sendMessage(from, sluc10, MessageType.sticker, {quoted: mek})
break

// Waktunya Bantai
case 'virtex':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
Mufar.sendMessage(from, virtex(pushname), text)
break

case 'virtex2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
Mufar.sendMessage(from, virtex2(pushname), text)
break

case 'virtex3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fmen})
Mufar.sendMessage(from, virtex3(pushname), text)
break

// Sampe sini aja.
default:
if (budy.startsWith('>')){
console.log(color('Eval Owner', 'green'))
if (!isOwner && !itsMe) return replyWithFakeLink(mess.only.ownerB)
try {
return Mufar.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${faketeks} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (budy.includes(`Bot`)) {
const bott = fs.readFileSync('./stickers/bot.webp');
Mufar.sendMessage(from, bott, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`bot`)) {
const bott = fs.readFileSync('./stickers/bot.webp');
Mufar.sendMessage(from, bott, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`Assalamualaikum`)) {
const slm = fs.readFileSync('./stickers/salam.webp');
Mufar.sendMessage(from, slm, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`assalamualaikum`)) {
const slm = fs.readFileSync('./stickers/salam.webp');
Mufar.sendMessage(from, slm, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`@62838719902432`)) {
const tegg = fs.readFileSync('./stickers/tegg.webp');
Mufar.sendMessage(from, tegg, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`@6283871990243`)) {
const tegg = fs.readFileSync('./stickers/tegg.webp');
Mufar.sendMessage(from, tegg, MessageType.sticker, {quoted: mek})

}

if (budy.includes(`#menu`)) {
replyy(`*[❗] Sabar Kak!*`)

}

if (budy.includes(`Menu`)) {
replyy(`Coba ketik #help kak!`)

}

if (budy.includes(`assalamualaikum`)) {
replyy(`Waalaikumsalam`)

}

if (budy.includes(`Assalamualaikum`)) {
replyy(`Waalaikumsalam`)

}

if (budy.includes(`bokep`)) {
replyy(`Apasih! Tobat gblk!`)

}

if (budy.includes(`Bokep`)) {
replyy(`Apasih! Tobat gblk!`)

}
// Akhir dari Fitur
}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[MSG]', 'red'), 'from', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	// console.log(e)
	}
}
