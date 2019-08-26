import React from 'react'
import logo from '../img/logo_transparent.png';
import RssContainer from '../_containers/rrssContainer'


export default class header extends React.Component{
    
    render(){
        return (
                <div className="App bg-img">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        {/* <p>
                        Pet Stuffs 
                        </p>  */}
                        {/* <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Learn React
                        </a> */}
                        <div className="rssContainer d-flex justify-content-center">
                            <RssContainer 
                                icon="fab fa-github"
                                linkTo="https://github.com/Jalfaro91"    
                            />

                            <RssContainer 
                                icon="fab fa-spotify"
                                linkTo="https://open.spotify.com/user/ouiai"    
                            />

                            <RssContainer 
                                icon="fab fa-linkedin"
                                linkTo="https://www.linkedin.com/in/juan-alfaro-godoy-923b58152"    
                            />

                            <RssContainer 
                                icon="fab fa-instagram"
                                linkTo="https://www.instagram.com/lifeisouiai/"    
                            />  
                        </div>
                    </header>
                </div>
        )
    }
}