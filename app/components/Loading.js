import React from 'react'
import PropTypes from 'prop-types'

const customstyles = {
    content: {
        fontSize: '35px', 
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '50px',
        textAlign: 'center'
    }
}

export default class Loading extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            content: props.text
        }
    }

    
    componentDidMount () {
        const { speed, text } = this.props

        //wouldn't it be more simple to just use an array???
        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
            ? this.setState({ content: text })
            : this.setState(({content}) => ({ content: content + '.' }))
        }, speed)
    }

    componentWillUnmount () {
        //pass the interval that will be returned, so that it unmounts the 
        //setInterval component which won't call it all the time 
        window.clearInterval(this.interval)
    }

    render() {
        return(
            <p style={customstyles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

//some default props so that the app doesn't break
//Loading is a pretty good default for the time being 
Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}