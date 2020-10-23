# README

# [Fwitch](https://fwitch.herokuapp.com/#/) 
Fwitch is a single page app styled interactive [twitch.tv](twitch.tv) clone. 
Users can edit their stream layouts, upload clips, and change their streaming titles while the site gets updated dynamically.

### Technologies used
For fwitch, I used a full stack of technologies consisting of:
* **Backend**
  * Ruby on Rails
  
     Handles all the backend requests and sends back the json of the requested data from the frontend.
* **FrontEnd**
  * React 
      
     Handles the views and works with the backend using Ajax calls to retriev data. Stored in the /frontend folder.
  * Redux
    
    Manages the state of the program for the fronted, holding data retrieved from the backend for future or current use.

### Features
* [User Authentication](https://github.com/AlexArchibeque/Fwitch#user-authentication)
    * [Login](https://github.com/AlexArchibeque/Fwitch#login)
    * [Signup](https://github.com/AlexArchibeque/Fwitch#signup)
    * [Demo User](https://github.com/AlexArchibeque/Fwitch#demo-user)
* [Carousel of Videos](https://github.com/AlexArchibeque/Fwitch#carousel-of-videos)

## User Authentication

Fwitch uses BCrypt for password salting and hashing in order to create a safe environment for storing passwords on the backend, as well as keeping users information safe and easily accessible.

### Login
Ability to log in with an account already signed up and saved to the backend.
    !(https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/login-page.png "Log-in Modal")
### Signup
Ability to sign up and have data saved persistently to the back end.
    https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/signup-page.png
### Demo User
Ability to demo the site without creating an account.
    https://media3.giphy.com/media/Lp7bRlmH7Ye89wRkAh/giphy.gif

    https://media3.giphy.com/media/bqMJe1UO5etGSseCV6/giphy.gif

## Carousel Of Videos

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/carouselgif.gif "Carousel of dreams")
