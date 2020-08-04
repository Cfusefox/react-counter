import React from 'react'
import store from '../../store/index'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            input: this.props.prop.input
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.prop.input !== this.state.input) {
            this.setState({
                number: 0,
                input: nextProps.prop.input
            })
        }
    }

    reduce = () => {
        this.setState({ number: --this.state.number })
        this.props.prop.reduce()
    }

    add = () => {
        this.setState({ number: ++this.state.number })
        this.props.prop.add()
    }

    render() {
        return <div className="counter">
            <button onClick = {this.reduce}>-</button>
            <mark>{this.state.number}</mark>
            <button onClick = { this.add }>+</button>
        </div>
    }
}

export default Counter;