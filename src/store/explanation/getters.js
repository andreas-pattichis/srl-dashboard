import { GET_EXPLANATION, GET_PROCESS } from "../storeconstants";

export default {
    [GET_EXPLANATION](state) {
        return state.explanation;
    },
    [GET_PROCESS](state) {
        return state.process;
    }
}