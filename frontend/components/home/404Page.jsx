import React from 'react';


class NoPageComponent extends React.Component {

    render(){
        return(
            <div className="page-not-found">
                <h1> 404 Seems as though there is not a page here. 404 </h1>
                <p>Click <a className="" href="#/">here</a> or the Logo at the top left to get back to the front page.
                </p>
            </div>
        )
    }
}

export default NoPageComponent;