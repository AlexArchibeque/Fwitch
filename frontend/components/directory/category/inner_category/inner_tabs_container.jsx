import React from 'react';

import CategoryContainer from '../category_container';
import ClipsContainer from '../../clips/clips_container';

class InnerTabsContainer extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            categories: false,
            clips: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(type){   
        if(type === "categories"){
            this.setState({categories: true, clips: false})
        } else {
            this.setState({clips: true, categories:false})
        }
    }

    render() {
        let DualContainer = this.state.categories ? <CategoryContainer /> : <ClipsContainer />
        return(
            <div className="inner-category-tabs-container">
                <div className="directory-tabs-container">
                        <a onClick={() => this.handleClick('categories')}
                        className={`${this.state.categories ? "tab-selected-directory": ""} categories-link-start cursor-pointer `}>Categories</a>
                        <a onClick={() => this.handleClick('clips')}
                        className={`${this.state.clips ? "tab-selected-directory": ""} categories-link-other cursor-pointer`}>Clips</a>

                </div>
                    {DualContainer}
            </div>
        )
    }
}

export default InnerTabsContainer;