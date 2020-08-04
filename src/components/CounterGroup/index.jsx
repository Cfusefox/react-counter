import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
    }

    inputChange = (event) => {
        event.target.value !== '' ?
            this.props.change(parseInt(event.target.value))
            : this.props.change(0)
        this.props.empty()
    }


    render() {
        return <div>
            <span>Number of Counters: </span><input type="text" value={this.props.input} onChange={this.inputChange} ></input><br />
            <span>total: </span>{this.props.total}
            {new Array(this.props.input).fill().map((item, index) => <Counter key={index} prop={this.props}/>)}
        </div>
    }


}

export default CounterGroup