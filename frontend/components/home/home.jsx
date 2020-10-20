import React from 'react';

import CategoryContainer from '../directory/category/category_container'
import ClipsContainer from '../directory/clips/clips_container';

import CarouselContainer from '../carousel/carousel_container'

class Home extends React.Component {

    render(){
        return(
            <div className="home-page-container">
                < CarouselContainer />

                <div className="categories-home-container" >
                    <div>
                        <h2><a href="#/directory/clips" className="hover-text click-text">Clips</a> of Fwitch</h2>
                    </div>
                        <ClipsContainer />
                    <hr/>
                    <div>
                        <h2><a href="#/directory" className="hover-text click-text">Categories</a> You May Like</h2>
                    </div>
                        <CategoryContainer />
                    <hr/>
                </div>
            </div>
        )
    }
}

export default Home;