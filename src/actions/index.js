export const add = () => ({
  type: "ADD"
})
export const reduce = () => ({
  type: "REDUCE"
})
export const empty = () => ({
  type: "EMPTY"
})
export const change = (data) => ({
  type: "CHANGE",
  data: data
})