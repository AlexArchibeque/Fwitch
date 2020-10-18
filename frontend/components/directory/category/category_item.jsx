import React from 'react'

class CategoryItem extends React.Component{


    render(){
        const {category} = this.props;
        return(
            <div className="category-item">
                <a href={`#/directory/${category.title}`}><img src={category.photoUrl} /></a>
                <h1 className="category-item-text">{category.title}</h1>
                <p className="category-item-text">{category.description}</p>
            </div>
        )
    }
}


export default CategoryItem;