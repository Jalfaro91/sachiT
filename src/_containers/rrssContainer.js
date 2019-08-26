import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

export default class RssContainer extends React.Component{

    render () {
        return (
            <>
            <div className="d-flex justify-content-center bd-highlight p-5">
                <a 
                    className="linkRRSS" 
                    href={this.props.linkTo}
                    target="_blank"    
                >
                    <i className={this.props.icon}></i>
                </a>
            </div>
            </>
        ) 
    }
}