import React from 'react'
import Counter from '../Counter/index'


class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div>
            {new Array(this.props.count).fill().map((item, index) => <Counter key={index}/>)}
        </div>
    }

}

export default CounterGroup