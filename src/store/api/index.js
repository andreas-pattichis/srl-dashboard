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
      const loadEssay = async (essayNumber) => {
        let res = await axios.get('https://floralearn.org/flora-lighthouse/api/result', {
          params: {
            studentNumber: essayNumber
          }
        })

        if (res.data['statusCode'] === 200) return res.data['body']
        return null
      }

      // Try loading essays A, B, and C
      const essayA = await loadEssay(studentNumber + 'a')
      const essayB = await loadEssay(studentNumber + 'b')
      const essayC = await loadEssay(studentNumber + 'c')
      if (essayA != null && essayB != null && essayC != null) {
        essayA.name = 'Essay A'
        essayB.name = 'Essay B'
        essayC.name = 'Essay C'
        commit('SET_ESSAYS', [essayA, essayB, essayC])
        commit('SET_SELECTED_ESSAYS', [essayA])
      } else {
        // Fallback to one essay
        const essay = await loadEssay(studentNumber)
        essay.name = 'Essay'
        commit('SET_ESSAYS', [essay])
        commit('SET_SELECTED_ESSAYS', [essay])
      }
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
