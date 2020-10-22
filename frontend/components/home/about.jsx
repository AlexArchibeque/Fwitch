import React from 'react';


class About extends React.Component {

    render(){
        return(
            <div className="about-page-container-outer">

                <div className="about-page-container-inner">
                    <p>Created by: Alex Archibeque</p>
                    <div className="about-page-container-inner-links">
                        <a href="https://github.com/AlexArchibeque/Fwitch">
                            <img className="about-pic" src={window.githubLogo}/>
                        </a>

                        <a href="https://www.linkedin.com/in/alexzander-archibeque-129810189/">
                            <img className="about-pic" src={window.linlogo}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;