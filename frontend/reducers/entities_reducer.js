import React from 'react';
import { combineReducers } from 'redux';
// import usersReducer from './users_reducer';
import categoriesReducer from './categories_reducer';
import clipsReducer from './clips_reducer';
import channelsReducer from './channels_reducer';


const entitiesReducer = combineReducers({
    users: ()=> ({}),
    categories: categoriesReducer,
    clips: clipsReducer,
    channels: channelsReducer
})

export default entitiesReducer;