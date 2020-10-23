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

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/login-page.png "Login Modal")
### Signup
Ability to sign up and have data saved persistently to the back end.

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/signup-page.png "Signup Modal")
### Demo User
Ability to demo the site without creating an account.

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/clickbutton.gif "Straightforward button press")

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/AutoLogin.gif "Demo User Auto Login")

This particular feature was a bit confusing for me, as keeping the styling of the login page was something I valued highly. Also factoring in all the ways the user could stop the process made it a little tricky to deal with.

Due to the Asynchronous nature of Javascript I ended using two for loops hoping that it would be slow enough in order to get an animation, but that did not workout. So I also added in the setTimeouts in order to make it all
animate smoothly before eventually pressing the button and logging the demo user in.

```js
    let info = {username: 'DemoPowerUser', password: 'thebestpassword'}
    for(let i = 0; i <= info.username.length; i++){
        setTimeout(()=>{this.setState({username: info.username.slice(0,i) })}, 100 * i);
    }
    for(let i = 0; i <= info.password.length; i++){
        setTimeout(()=>(this.setState({password: info.password.slice(0,i) })), 150 * i)
    }
    setTimeout(this.handleSubmit, 2500); 
```


## Carousel Of Videos

![alt-text](https://github.com/AlexArchibeque/Fwitch/blob/main/app/assets/images/gifsforFwitch/carouselgif.gif "Carousel of dreams")
