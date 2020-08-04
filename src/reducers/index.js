const initState = {
    total: 0,
    input: 0
}
export default (state = initState, action) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case "ADD":
            stateCopy.total += 1
            return stateCopy
        case "REDUCE":
            stateCopy.total -= 1
            return stateCopy
        case "EMPTY":
            stateCopy.total = 0
            return stateCopy
        case "CHANGE":
            stateCopy.input = action.data
            return stateCopy
        default:
            return stateCopy
    }
}