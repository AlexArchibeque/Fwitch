import React from 'react';
import CategoryContainer from '../directory/category/category_container'

class Home extends React.Component {

    render(){
        return(
            <div className="home-page-container">


                <div className="categories-home-container" >
                    <div>
                        <h2><a href="#/directory" className="hover-text click-text">Categories</a> You May Like</h2>
                    </div>
                    <CategoryContainer />
                </div>
            </div>
        )
    }
}

export default Home;