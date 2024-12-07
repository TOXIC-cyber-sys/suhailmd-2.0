const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349161750496";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_08_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVWXV6WENkUzNxZEYvU2JxalUwL3ZkZVR5SFp0NFV0VEdObEtPRmJBcnFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLVmdLekd4VlEyV2xuUDNwcEVlaURRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3NWU2YTg4LTYzOGEtNDkxOS04ZTVkLWI5MTNhYmFiMmNjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE4OSxcbiAgICAgIDI0MixcbiAgICAgIDExNCxcbiAgICAgIDIxNixcbiAgICAgIDEzOSxcbiAgICAgIDg5LFxuICAgICAgMjksXG4gICAgICA5MyxcbiAgICAgIDEwMixcbiAgICAgIDQxLFxuICAgICAgMjQ1LFxuICAgICAgMTgxLFxuICAgICAgMjMsXG4gICAgICAyNTUsXG4gICAgICAzNSxcbiAgICAgIDE5NixcbiAgICAgIDc0LFxuICAgICAgNzksXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTUsXG4gICAgICA2OSxcbiAgICAgIDQ4LFxuICAgICAgMTc1LFxuICAgICAgMjE1LFxuICAgICAgMTE0LFxuICAgICAgOTUsXG4gICAgICAxNzcsXG4gICAgICA1NyxcbiAgICAgIDgzLFxuICAgICAgMTYsXG4gICAgICAyNDYsXG4gICAgICAxNDUsXG4gICAgICAxODYsXG4gICAgICAxMDUsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICA2OSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhGRlg2RE02XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYxNzUwNDk2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ1MDUwNDY1NjIwMDMxOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSml2dXFJR0VMS1IwYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjYk5XOStOd0Y3T0JSNnIyeFhITVdwcHRWaVVkaVV2dmlkRC9TYUtjbWtFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi83dVRIZVNYeTN1ZVdDbmRrNHhrNUxaazJuM0pBbktuMkJ2bEZOS2tCWENnOEppRjZic1UwazlZektSWVJYWWFJQ05sMiswZlN5d1pEa3lsMnJ1VUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldQVGk2ZnVjWU1VYTc3SmUrSzErellUL2h3N0NBSlBteElqTGhYSlRHRzZlSHhidkJqbFlCWHBwMEFoTTlWbDBSTVBmZkZZYUgva1lCZkI1QzZlOWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjE3NTA0OTY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTc2ODg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE1LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJbklUU3NUUnJQeEpCajJUOVJnVmRHWEpqZnBGUklVbGlWSHU2OXdwR1M4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODI4NzIyMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1NzY2OTkyMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
