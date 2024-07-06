import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/967733197755
*instagram:*\ninstagram.com/noureddine_ouafy

*youtube:*\nyoutube.com/@noureddineouafy2

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* github.com/noureddineouafy

`.trim()
  m.reply(caption)
}
handler.help = ['kntrool']
handler.tags = ['kntroolbot']
handler.command = /^(kntrool)$/i
handler.limit = false

export default handler
