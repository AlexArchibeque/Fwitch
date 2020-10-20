import React from 'react'

import CarouselItem from './carousel_item'


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            slide: 0,
            loaded: false
        }


        this.handleClick = this.handleClick.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }


    handleClick(type){
        let num = 0;
        if(type === 'left') {
            if(this.state.slide === 0){
                num = 5
            }
            num += this.state.slide - 1
            this.setState({slide: num})
        }else{
            num = (this.state.slide+1) % 5
            this.setState({slide: num})
        }
    }   

    handleOutsideClick(num) {
        let vid = document.getElementById(`video${this.state.slide}`)
        vid.pause();
        this.setState({slide: num})
    }

    render(){
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
        return(
            <div className="carousel-container"> 
                <div className="slider-container">
                    <button className="carousel-button" 
                    onClick={() => this.handleClick('left')}>{`<`}</button>

                    <div className="inner-slider-container">
                            {
                            
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
                                }else if (idx === bl ) {
                                    return(
                                        < CarouselItem 
                                        key={idx} 
                                        video={item}
                                        idx={idx}
                                        extraCN="slider-item-back-left"
                                        handleOutsideClick={this.handleOutsideClick}
                                        />
                                    )
                                }
                                else if (idx === r){
                                    return(
                                        < CarouselItem
                                        key={idx} 
                                        video={item}
                                        idx={idx}
                                        extraCN="slider-item-right"
                                        handleOutsideClick={this.handleOutsideClick}
                                        />
                                    )
                                }else {
                                    return(
                                        < CarouselItem 
                                        extraCN="slider-item-back-right" 
                                        key={idx} 
                                        video={item}
                                        idx={idx}
                                        handleOutsideClick={this.handleOutsideClick}
                                        />
                                    )
                                }
                                
                            })
                            }
                    </div>

                    <button className="carousel-button" 
                    onClick={() => this.handleClick('right')}>{`>`}</button>
                </div> 
            </div>
        )
    }

}

export default Carousel;