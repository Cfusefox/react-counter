import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            input: this.props.getCount()
        }
        this.reduce = this.reduce.bind(this)
        this.add = this.add.bind(this)
    }

    componentWillReceiveProps() {
        if(this.state.input !== this.props.getCount()) {
            this.setState({
                number: 0,
                input: this.props.getCount})
        }
        return null
    }

    reduce() {
        this.setState((prevState) => ({number: this.state.number--}))
        /* this.props.setTotal(-1); */
        this.props.onDecrement()
    }

    add() {
        this.setState((prevState) => ({number: this.state.number++}))
        /* this.props.setTotal(1); */
        this.props.onIncrement()
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