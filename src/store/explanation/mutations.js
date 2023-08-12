import {
    SET_EXPLANATION,
    SET_PROCESS
} from "../storeconstants";

export default {
    [SET_EXPLANATION](state, explanation) {
        state.explanation = explanation
    },
    [SET_PROCESS](state, process) {
        state.process = process
    }
}