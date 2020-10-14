import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById('root')
    let preLoadedState = undefined;
    
    if(window.currentUser) {
        preLoadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preLoadedState);

    ReactDOM.render( <Root store={store} /> , rootEl )

    window.getState = store.getState;
})