import axios from "axios";

export default {
    namespaced: false,
    state() {
        return {
            user: [],
        }
    },
    getters: {
        user: state => {
            return state.user;
        },
    },
    actions: {
        async loadUsers ({ commit }, studentNumber) {
            try {
                let res = await axios
                    .get('https://floralearn.org/flora-lighthouse/api/result', {
                        params: {
                            studentNumber: studentNumber
                        }
                    })

                console.log(res.data);
                if(res.data['statusCode'] === 200){
                    console.log("succeeded")
                    commit('SET_USER', res.data);
                }
                else{
                    console.log("Error "+res.data['statusCode'])
                }

                return res.data['statusCode']
            }
            catch(error) {
                console.log("Error has occured");
            }
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user['body'];
        },
    }
}