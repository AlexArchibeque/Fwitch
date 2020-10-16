# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demoUser = User.create!( username: "DemoPowerUser", password: "thebestpassword", email:"TestDemoUser@email.com", channel_id: 1)
timmy = User.create!( username: "timmy", password: "password", email:"timmy@timmy.timmy", channel_id: 2)

# Channels to spruce up
xqc = User.create!( username: "xQcOW", password: "xqcnotgoodow", email:"xqc@gmail.com", channel_id: 3)
arcadum = User.create!( username: "Arcadum", password: "dndmaster", email:"masterDM@yahoo.com", channel_id: 4)
moonmoon = User.create!( username: "MoonMoon", password: "kittys", email:"doublemoon@gmail.com", channel_id: 5)
riotgames = User.create!( username: "RiotGames", password: "lcsisbad", email:"riotgamesofficail@riot.io", channel_id: 6)
forsen = User.create!( username: "forsen", password: "notminecraft", email:"notthelava@gmail.com", channel_id: 7)
imyt = User.create!( username: "Imyt", password: "imight", email:"alwaysDocbro@gmail.com", channel_id: 8)
smcharles = User.create!( username: "smCharles", password: "neverPB", email:"programmerbyday@gmail.com", channel_id: 9)

# Area to add Channels



# Categories

Category.destroy_all

amongUs = Category.create!( title: "Among Us" , description: "Popular mafia game of the week.")
dungeonsAndDragons = Category.create!( title: "Dungeons and Dragons" , description: "You say you don't want to play, but can't find a party. Thats why you watch.")
grandTheftAutoFive = Category.create!( title: "Grand Theft Auto Five" , description: "Such an important sequel, the number had to be spelled out.")
justChatting = Category.create!( title: "Just Chatting" , description: "Just come in and chat for a little bit.")
leaugeOfLegends = Category.create!( title: "League Of Legends" , description: "Super serious and totally not party game.")
mineCraft = Category.create!( title: "Mine Craft" , description: "Timeless classic that even your grandma will love!")
superMetroid = Category.create!( title: "Super Metroid" , description: "Old game mostly streamed for nostalgia and saving animals.")