import React from 'react'
import Counter from '../Counter/index'


class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    inputChange = (event) => {
        event.target.value != ''? 
        this.setState({
            count: parseInt(event.target.value)
        }) : this.setState({
            count: 0
        })
        this.props.store.dispatch({ type: 'EMPTY' })
    }

    getCount = () =>{
        return this.state.count
    }

    render() {
        return  <div>
            <span>Number of Counters: </span><input type="text" value={this.state.count} onChange={this.inputChange}></input><br/>
            <span>total: </span>{ this.props.store.getState() }
            {new Array(this.state.count).fill().map((item, index) => <Counter key={index} 
                                                                    getCount={this.getCount}
                                                                    store={this.props.store}/>)}
        </div>
    }


}

export default CounterGroup