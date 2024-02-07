import axios from 'axios'

export default {
  namespaced: false,
  state() {
    return {
      essays: [],
      selectedEssays: []
    }
  },
  getters: {
    essays: (state) => {
      return state.essays
    },
    selectedEssays: (state) => {
      return state.selectedEssays
    }
  },
  actions: {
    loadUsers({ commit }, input) {
      const { study, username } = input
      let request = axios.get(
        import.meta.env.VITE_API_URL + `/tracedata/results/${study}/${username}`,
        {}
      )

      request.then((response) => {
        console.log(response)
        if (response.status === 200) {
          const essays = response.data['body']
          commit('SET_ESSAYS', essays)
          commit('SET_SELECTED_ESSAYS', essays)
        }
      })

      return request
    }
  },
  mutations: {
    SET_ESSAYS(state, essays) {
      state.essays = essays
    },
    SET_SELECTED_ESSAYS(state, selectedEssays) {
      state.selectedEssays = selectedEssays
    }
  }
}
