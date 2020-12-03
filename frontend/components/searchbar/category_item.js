import React from 'react'

class CategoryItem extends React.Component {

    render(){

        return(
            <li>{this.props.category.title}</li>
        )
    }
}

export default CategoryItem