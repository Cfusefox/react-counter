import { connect } from 'react-redux'
import { add, reduce, empty, change } from '../actions'
import CounterGroup from '../components/CounterGroup/index'

const mapStateToProps = state => {
    return {
      total: state.total,
      input: state.input
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    add: () => {
        dispatch(add())
    },
    reduce: () => {
        dispatch(reduce())
    },
    empty: () => {
        dispatch(empty())
    },
    change: (data) => {
        dispatch(change(data))
    }
  }
}
  
  const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterGroup)
  
  export default CounterGroupContainer