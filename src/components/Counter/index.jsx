import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            input: this.props.getCount()
        }
    }

    componentWillReceiveProps() {
        if(this.state.input !== this.props.getCount()) {
            this.setState({
                number: 0,
                input: this.props.getCount})
        }
        return null
    }

    reduce = () => {
        this.setState((prevState) => ({number: this.state.number--}))
        this.props.store.dispatch({ type: 'REDUCE' })
    }

    add = () => {
        this.setState((prevState) => ({number: this.state.number++}))
        this.props.store.dispatch({ type: 'ADD' })
    }

    render() {
        return <div className="counter">
          <button onClick={this.reduce}>-</button>
          <mark>{this.state.number}</mark>
          <button onClick={this.add}>+</button>
        </div>
    }

}
export default Counter;