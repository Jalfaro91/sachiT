import React from 'react'
import logo from '../img/logo_transparent.png';
import RssContainer from '../_containers/rrssContainer'


export default class header extends React.Component{
    
    render(){
        return (
                <div className="App bg-img">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="rssContainer">
                            <div className="contenedorSecundario d-flex justify-content-center bd-highlight ">
                                <RssContainer 
                                    icon="fab fa-github lgIcon"
                                    linkTo="https://github.com/Jalfaro91"    
                                />

                                <RssContainer 
                                    icon="fab fa-spotify lgIcon"
                                    linkTo="https://open.spotify.com/user/ouiai"    
                                />

                                <RssContainer 
                                    icon="fab fa-linkedin lgIcon"
                                    linkTo="https://www.linkedin.com/in/juan-alfaro-godoy-923b58152"    
                                />

                                <RssContainer 
                                    icon="fab fa-instagram lgIcon"
                                    linkTo="https://www.instagram.com/lifeisouiai/"    
                                />  
                            </div>
                        </div>
                    </header>
                </div>
        )
    }
}