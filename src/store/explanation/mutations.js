import { SET_EXPLANATION, SET_PROCESS, SET_SELECTED_PROCESS } from '../storeconstants'

export default {
  [SET_EXPLANATION](state, explanation) {
    state.explanation = explanation
  },
  [SET_PROCESS](state, process) {
    state.process = process
  },
  [SET_SELECTED_PROCESS](state, selectedProcess) {
    state.selectedProcess = selectedProcess
  }
}
