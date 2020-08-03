import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.reduce = this.reduce.bind(this)
        this.add = this.add.bind(this)
        console.log(`-----constructor`)
    }

    componentWillMount() {
        console.log(`-----will mount`)
    }

    componentDidMount() {
        console.log(`------did mount`)
    }

    componentWillUnmount() {
        console.log(`------will unmount`)
    }

    componentWillUpdate() {
        console.log(`----will update`)
    }

    componentDidUpdate() {
        console.log(`-----update now`)
    }

    reduce() {
        this.setState((prevState) => ({number: this.state.number--}))
        this.props.setTotal(-1);
    }

    add() {
        this.setState((prevState) => ({number: this.state.number++}))
        this.props.setTotal(1);
    }

    destroy = () => {
        this.setState({number: 0})
    }

    render() {
        return <div className="counter">
          <button onClick={this.reduce}>-</button>
          <mark>{this.state.number}</mark>
          <button onClick={this.add}>+</button>
          <button onClick={this.destroy}>归零</button>
        </div>
    }

}
export default Counter;