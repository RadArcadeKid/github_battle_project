import React from 'react'
import { render } from 'react-dom'

//HIGHER-ORDER COMPONENT -- HOVER

//instead of a function like was done previously, export 
//as component, that way we don't have to worry about naming
//conventions 
export default class Hover extends React.Component {
    //original logic fromt the Tooltip component is now being
    //moved to 'hover' 
    constructor(props) {
        super(props)

        this.state = {
        hovering: false,
        }

        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }
    mouseOver() {
        this.setState({
        hovering: true
        })
    }
    mouseOut() {
        this.setState({
        hovering: false
        })
    }

    render () {
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
               {this.props.children(this.state.hovering)}
            </div>
        )
    }

}