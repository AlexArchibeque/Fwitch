import React from 'react';
import { combineReducers } from 'redux';
// import usersReducer from './users_reducer';
import categoriesReducer from './categories_reducer';


const entitiesReducer = combineReducers({
    users: () => ({}),
    categories: categoriesReducer
})

export default entitiesReducer;