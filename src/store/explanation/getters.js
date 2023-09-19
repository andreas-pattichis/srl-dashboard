import { GET_EXPLANATION, GET_PROCESS, GET_SELECTED_PROCESS } from '../storeconstants'

export default {
  [GET_EXPLANATION](state) {
    return state.explanation
  },
  [GET_PROCESS](state) {
    return state.process
  },
  [GET_SELECTED_PROCESS](state) {
    return state.selectedProcess
  }
}
