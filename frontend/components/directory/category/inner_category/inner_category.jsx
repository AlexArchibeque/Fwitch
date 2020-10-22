import React from 'react'
import NoPageComponent from '../../../home/404Page'
import InnerTabsContainer from './inner_tabs_container'

class InnerCategory extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            done:false
        }

        this.catProm = this.catProm.bind(this)
    }
    
    componentDidMount(){
        if(Object.entries(this.props.categories).length === 0){     
            this.catProm()
        }
    }
    
    catProm(){ 
        return new Promise(() => this.props.categoriesList()).then(this.setState({done: true})) 
    }
    
    render(){
        let categoryArr = decodeURI(window.location.hash).split("/");
        let categoryName = categoryArr[categoryArr.length-1]
        let {categories} = this.props;

        if(Object.entries(categories).length > 0){
            let finalCategory;
            Object.values(categories).forEach(cate =>{
                if(cate.title === categoryName){
                    finalCategory = cate
                }
            })
            debugger

            if(finalCategory){  
                return(
                    <div className="inner-category-fullpage-container">
                        <div className="inner-category-container">
                            <img src={finalCategory.photoUrl} />
                            <div className="inner-category-text-container">
                                <h1>{finalCategory.title}</h1>
                                <p>{finalCategory.description}</p>
                            </div>
                        </div>
                        <InnerTabsContainer />
                    </div>
            )
            } else {
                return(
                    <NoPageComponent />
                )
            }     
        }else{
            return <div className="loader"></div>
        }
        
    }
}
export default InnerCategory;