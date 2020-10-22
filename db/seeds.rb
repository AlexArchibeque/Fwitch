# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all

demoUser = User.create!( username: "DemoPowerUser", password: "thebestpassword", email:"TestDemoUser@email.com")
timmy = User.create!( username: "timmy", password: "password", email:"timmy@timmy.timmy")

# Channels to spruce up
xqc = User.create!( username: "xQcOW", password: "xqcnotgoodow", email:"xqc@gmail.com")
arcadum = User.create!( username: "Arcadum", password: "dndmaster", email:"masterDM@yahoo.com")
moonmoon = User.create!( username: "MoonMoon", password: "kittys", email:"doublemoon@gmail.com")
riotgames = User.create!( username: "RiotGames", password: "lcsisbad", email:"riotgamesofficail@riot.io")
forsen = User.create!( username: "forsen", password: "notminecraft", email:"notthelava@gmail.com")
imyt = User.create!( username: "Imyt", password: "imight", email:"alwaysDocbro@gmail.com")
smcharles = User.create!( username: "smCharles", password: "neverPB", email:"programmerbyday@gmail.com")

#######################################################

# Categories

Category.destroy_all

# Dev Seeding
amongUs = Category.create( title: "Among Us" , description: "Popular mafia game of the week.")
file = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/Among+Us.jpg')
amongUs.photo.attach(io: file, filename:'Among_Us.jpg')

# Production Seeding

dungeonsAndDragons = Category.create!( title: "Dungeons and Dragons" , description: "You say you want to play, but can't find a party. Thats why you watch.")
file1 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/Dungeons+%26+Dragons.jpg') # Among Us
dungeonsAndDragons.photo.attach(io: file1, filename:'Dungeons_and_Dragons.jpg')

grandTheftAutoFive = Category.create!( title: "Grand Theft Auto Five" , description: "Such an important sequel, the number had to be spelled out.")
file2 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/Grand+Theft+Auto+V.jpg')
grandTheftAutoFive.photo.attach(io: file2, filename: 'GTA5.jpg' )

justChatting = Category.create!( title: "Just Chatting" , description: "Just come in and chat for a little bit.")
file3 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/Just+Chatting.jpg')
justChatting.photo.attach(io: file3, filename: 'Just_chatting.jpg' )

leagueOfLegends = Category.create!( title: "League Of Legends" , description: "Super serious and totally not party game.")
file4 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/League+of+Legends.jpg')
leagueOfLegends.photo.attach(io: file4, filename: 'LoL.jpg' )

mineCraft = Category.create!( title: "Mine Craft" , description: "Timeless classic that even your grandma will love!")
file5 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/MineCraft.jpg')
mineCraft.photo.attach(io: file5, filename: 'MineCraft.jpg' )

superMetroid = Category.create!( title: "Super Metroid" , description: "Old game mostly streamed for nostalgia and saving animals.")
file6 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/categories/Super+Metroid.jpg')
superMetroid.photo.attach(io: file6, filename: 'Super_Metroid.jpg' )



# Area to add Channels
Channel.destroy_all

demoUserChan = Channel.create!(name: demoUser.username.downcase, description: 'DemoDescription' , owner_id: demoUser.id, category_id: justChatting.id)

timmyChan = Channel.create!(name: timmy.username.downcase, owner_id: timmy.id, category_id: justChatting.id)

xqcChan = Channel.create!(name: xqc.username.downcase, description: 'Among Us High Level Gameplay' , owner_id: xqc.id, category_id: amongUs.id)
channelPic3 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/xqc+Logo.jpeg')
xqcChan.channel_pic.attach(io:channelPic3 , filename:'xqcLogo.jpg')

arcadumChan = Channel.create!(name: arcadum.username.downcase, description: 'Heart of Tyre Ep: 410' , owner_id: arcadum.id, category_id: dungeonsAndDragons.id)
channelPic4 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/ArcadumLogo.png')
arcadumChan.channel_pic.attach(io:channelPic4 , filename:'arcadumLogo.jpg')

moonmoonChan = Channel.create!(name: moonmoon.username.downcase, description: 'YungDab At It Again' , owner_id: moonmoon.id, category_id: grandTheftAutoFive.id)
channelPic5 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/moonmoonLogo.png')
moonmoonChan.channel_pic.attach(io:channelPic5 , filename:'moonmoonLogo.jpg')

riotgamesChan = Channel.create!(name: riotgames.username.downcase, description: 'LCS ro16' , owner_id: riotgames.id, category_id: leagueOfLegends.id)
channelPic6 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/RiotGamesLogo.png')
riotgamesChan.channel_pic.attach(io:channelPic6 , filename:'riotgamesLogo.jpg')

forsenChan = Channel.create!(name: forsen.username.downcase, description: 'PB Today' , owner_id: forsen.id, category_id: mineCraft.id)
channelPic7 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/ForsenLogo.png')
forsenChan.channel_pic.attach(io:channelPic7 , filename:'forsenLogo.jpg')

imytChan = Channel.create!(name: imyt.username.downcase, description: 'PB 44:00 Hardstuck' , owner_id: imyt.id, category_id: superMetroid.id)
channelPic8 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/ImytLogo.png')
imytChan.channel_pic.attach(io:channelPic8 , filename:'imytLogo.jpg')

smcharlesChan = Channel.create!(name: smcharles.username.downcase, description: 'Going to overtake IMYT' , owner_id: smcharles.id, category_id: superMetroid.id)
channelPic9 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/CharlesLogo.png')
smcharlesChan.channel_pic.attach(io:channelPic9 , filename:'smcharlesLogo.jpg')





Clip.destroy_all

# Clips

# Dev Seeding
arcadum_1 = Clip.create!( description:"Frustrated Arcadum", category_id: dungeonsAndDragons.id, channel_id: arcadumChan.id)
clip1 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Arcadum-DND.mp4')
arcadum_1.video.attach(io: clip1, filename:'FireballFun.mp4')

xqc_1 = Clip.create!( description:"Instant KO" , category_id: amongUs.id, channel_id: xqcChan.id)
clip2 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/xQC-AmongUs.mp4')
xqc_1.video.attach(io: clip2, filename:'instant_death.mp4')

# Prod Seeding

# moonmoon_1 = Clip.create!( description:"Solid Snake CQC", category_id: grandTheftAutoFive.id, channel_id:moonmoonChan.id)
# clip3 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/MoonMoon-GTA5+Snake.mp4')
# moonmoon_1.video.attach(io: clip3, filename:'solid_snake.mp4')

# riot_games_1 = Clip.create!( description:"Ult From Where?", category_id: leagueOfLegends.id, channel_id:riotgamesChan.id)
# clip4 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/LoL+-+Jhin.mp4')
# riot_games_1.video.attach(io: clip4, filename:'JhinUlt.mp4')

# forsen_1 = Clip.create!( description:"Death in 3", category_id: mineCraft.id, channel_id:forsenChan.id)
# clip5 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Forsen-InstDeath-MineCraft.mp4')
# forsen_1.video.attach(io: clip5, filename:'LavaHurts.mp4')

charles_1 = Clip.create!( description:"Catapillars", category_id: superMetroid.id, channel_id: smcharlesChan.id)
clip6 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Charles-Catipillars.mp4')
charles_1.video.attach(io: clip6, filename:'catapillars.mp4')

charles_2 = Clip.create!( description:"Red Tower Please?", category_id:superMetroid.id, channel_id:smcharlesChan.id)
clip7 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Charles-Jump.mp4')
charles_2.video.attach(io: clip7, filename:'red_tower.mp4')

imyt_1 = Clip.create!( description:"So good and Easy", category_id:superMetroid.id, channel_id: imytChan.id)
clip8 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Game-Is-Ez-Imyt.mp4')
imyt_1.video.attach(io: clip8, filename:'so_good.mp4')

imyt_2 = Clip.create!( description:"LongJumper Imyt", category_id:superMetroid.id, channel_id: imytChan.id)
clip9 = open('https://fwitch-seeds.s3-us-west-1.amazonaws.com/Clips/Imyt-Moat.mp4')
imyt_2.video.attach(io: clip9, filename:'moat_clear.mp4')