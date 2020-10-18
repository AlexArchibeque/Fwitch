import React from 'react';

import CategoryItem from './category_item.jsx';


class Categories extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        const {categories} = this.props;
        return(
            <div className="category-items-container">
                {Object.entries(categories).length > 0 ? 
                Object.keys(categories).map(category => {
                    return(
                        <CategoryItem 
                        key={categories[category].id} 
                        category={categories[category]} 
                        />
                    )
                }) : <></> }
            </div>
        )
    }
}


export default Categories;