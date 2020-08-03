
export default (state = 0, action) => {
    switch(action.type){
        case "ADD":
            return state + 1
        case "REDUCE":
            return state - 1
        case "EMPTY":
            return 0
        default:
            return state
    }
}
