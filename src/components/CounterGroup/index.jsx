import React from 'react'
import Counter from '../Counter/index'


class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            total: 0
        }
    }

    inputChange = (event) => {
        event.target.value != ''? 
        this.setState({
            count: parseInt(event.target.value)
        }) : this.setState({
            count: 0
        })
        
    }

    setTotal = (value) => {
        this.setState({
            total: this.state.total + value
        })
    }
    

    render() {
        return  <div>
            <span>Number of Counters: </span><input type="text" value={this.state.count} onChange={this.inputChange}></input><br/>
            <span>total: </span>{this.state.total}
            {new Array(this.state.count).fill().map((item, index) => <Counter key={index} setTotal={this.setTotal}/>)}
        </div>
    }

}

export default CounterGroup