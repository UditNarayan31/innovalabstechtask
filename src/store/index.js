import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userData: [],
      listCount: 1,
      pageSize: 4,
      filterCon: []
    }
  },
  mutations: {
    // pagination functions
    nextPagination(state) {
      state.listCount++
      state.filterCon = state.userData.slice((state.listCount - 1) * state.pageSize, ((state.listCount - 1) * state.pageSize) + state.pageSize)
    },
    prevPagination(state) {
      state.listCount--
      state.filterCon = state.userData.slice((state.listCount - 1) * state.pageSize, ((state.listCount - 1) * state.pageSize) + state.pageSize)
    },
    // userlist Data render
    userListData(state, userData) {
      state.userData = userData
    },
    // filter userList
    filterUserList(state, data) {
      state.filterCon = state.userData.filter(
        item =>
          item.username.toLowerCase().indexOf(data.toLowerCase()) > -1
          || item.name.toLowerCase().indexOf(data.toLowerCase()) > -1
          || item.email.toLowerCase().indexOf(data.toLowerCase()) > -1
          || item.phone.toLowerCase().indexOf(data.toLowerCase()) > -1
          || item.website.toLowerCase().indexOf(data.toLowerCase()) > -1
      )
    },

  },
  actions: {
    async getUserList({ commit }) {
      // fetch API using axios library to get user list
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const userList = response.data
      commit('userListData', userList)
    }
  },
  getters: {
    getListCount(state) {
      return state.listCount
    },
  }
})

export default store
