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
    async loadUsers({ commit }, studentNumber) {
      const loadEssay = async () => {
        let res = await axios.get(
          import.meta.env.VITE_API_URL + '/tracedata/results/' + studentNumber,
          {}
        )

        if (res.data['statusCode'] === 200) return res.data['body']
        return null
      }

      const essay = await loadEssay(studentNumber)
      essay.name = 'Essay'
      commit('SET_ESSAYS', [essay])
      commit('SET_SELECTED_ESSAYS', [essay])
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
