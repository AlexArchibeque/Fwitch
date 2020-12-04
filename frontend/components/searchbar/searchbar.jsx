import React from 'react'

import UserItem from './searchbar_user_item'
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
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(input, test) {

        if(test === "clicked"){
            this.props.updateSearch('')
                .then((results) => {
                    this.setState({
                        [input]: '',
                        users: results[0],
                        categories: results[1]
                    })
                })
        }else{

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
    }

    handleClick() {
        this.handleInput("search", "clicked")
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
                <input type="text" 
                onChange={this.handleInput("search")} 
                value={this.state.search} 
                placeholder="Search"
                className="searchbar-input"
                />

                <ul className={`searchbar-dropdown ${ searchDropDown ? "" : "hidden"}`}>

                    {this.state.users.map(user => {
                        return(
                            <UserItem channel={user} key={user.id} handleClick={this.handleClick}/>
                        )
                    })}

                    {this.state.categories.map(category => {
                        return(
                            <CategoryItem category={category} key={category.id} handleClick={this.handleClick}/>
                        )
                    })}

                </ul>
                
            </div>
        )
    }
}

export default SearchBar;