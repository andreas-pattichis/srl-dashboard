import {
    SET_EXPLANATION
} from "../storeconstants";

export default {
    [SET_EXPLANATION](state, explanation) {
        state.explanation = explanation
    },
}