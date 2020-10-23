# README

# [Fwitch](https://fwitch.herokuapp.com/#/) 
Fwitch is a single page app styled interactive [twitch.tv](twitch.tv) clone. 
Users can edit their stream layouts, upload clips, and change their streaming titles while the site gets updated dynamically, this was completed in two weeks but will be worked on more  as time passes.

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

This is my proudest feature but also my least liked. I ended up getting the result I wanted but the coding of it was a nightmare. The problem was updating each videos css property dynamically based on which video in an array it was. I'm glad I figured it out, but I think there might be a more dynamic solution.

This piece determined if the videos had finished loading, and places them within an array to be iterated through.

``` js
    let sliderArr = [0,1,2,3,4]

    if(Object.entries(this.props.clips).length > 0){
            sliderArr = Object.values(this.props.clips).slice(0,5)
     }

    let front = this.state.slide

    let l = front - 1
    let bl = front - 2

    if(l < 0) {
        l += 5
    }
    if(bl< 0) {
        bl += 5
    }
    let r = (front+1) % 5
    let br = (front+2) % 5
```

This is part of the mapping process rerendering on each button press.

```js
    sliderArr.map((item,idx)=>{
        if(idx === front){
            return(
                < CarouselItem 
                    video={item}
                    key={idx}
                    extraCN="slider-item-front"
                    idx={idx}
                    handleOutsideClick={() => ''}
                    />
            )
        }else if(idx === l ) { 
            return(
                < CarouselItem 
                video={item}
                key={idx}
                idx={idx}
                extraCN="slider-item-left"
                handleOutsideClick={this.handleOutsideClick}
                />
            )
```
The css behind the JS

```css
    .slider-item-front {
        transform:translate3d(0px,0px,0px); 
    }
    .slider-item-left {
        transform:translate3d(-40%,0px,-100px);
    }
    .slider-item-back-left {
        transform:translate3d(-70%,0px,-200px);
    }
```

