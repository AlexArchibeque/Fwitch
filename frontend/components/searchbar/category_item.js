import React from 'react'

class CategoryItem extends React.Component {

    render(){
        const {category} = this.props
        return(
            <a className="searchbar-link cursor-pointer" href={`#/directory/${category.title}`}
            onClick={this.props.handleClick}>
                <img className="category-searchbar-img" src={category.pictureUrl}/>
                <li>{category.title}</li>
            </a>
        )
    }
}

export default CategoryItem