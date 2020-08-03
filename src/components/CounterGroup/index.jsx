import React from 'react'
import Counter from '../Counter/index'
import store from '../../Redux_Test/store'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
    }

    inputChange = (event) => {
        event.target.value !== '' ?
            store.dispatch({ type: "CHANGE", data: parseInt(event.target.value) })
            : store.dispatch({ type: "CHANGE", data: 0 })
        store.dispatch({ type: 'EMPTY' })
    }


    render() {
        return <div>
            <span>Number of Counters: </span><input type="text" value={store.getState().input} onChange={this.inputChange} ></input><br />
            <span>total: </span>{store.getState().total}
            {new Array(store.getState().input).fill().map((item, index) => <Counter key={index} />)}
        </div>
    }


}

export default CounterGroup