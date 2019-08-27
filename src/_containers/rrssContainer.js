import React from 'react'

export default class RssContainer extends React.Component{

    render () {
        return (
            <>
            <div className="d-flex p-4">
                <a 
                    className="linkRRSS" 
                    href={this.props.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"    
                >   
                <span className="spanIcon">
                    <i className={this.props.icon}></i>
                </span>
                </a>
            </div>
            </>
        ) 
    }
}