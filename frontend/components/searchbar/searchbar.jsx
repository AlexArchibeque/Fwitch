import React from 'react'

import SearchBarItem from './searchbar_item'
import CategoryItem from './category_item'

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            search: '',
            users: [],
            categories: []
        }
        this.props = props;
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(input) {
        return(e) =>{
            let searchValue = e.currentTarget.value
            this.props.updateSearch(searchValue)
                .then((results) => {
            this.setState({
                [input]: searchValue,
                users: results[0],
                categories: results[1]
            })
            })
        }
    }

    render(){
        let searchDropDown;
        if(this.state.users.length > 0 || this.state.categories.length > 0){
            searchDropDown = true
        }else{
            searchDropDown = false
        }
        return(
            <div className="searchbar-container">
                <input type="text" onChange={this.handleInput("search")} value={this.state.searchValue}/>

                <ul className={`searchbar-dropdown ${ searchDropDown ? "" : "hidden"}`}>

                    {this.state.users.map(user => {
                        return(
                            <SearchBarItem user={user} key={user.id}/>
                        )
                    })}

                    {this.state.categories.map(category => {
                        return(
                            <CategoryItem category={category} key={category.id} />
                        )
                    })}
                    
                </ul>
                
            </div>
        )
    }
}

export default SearchBar;