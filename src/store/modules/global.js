import * as types from '../mutation-types'
import store2 from 'store2'
const state = {
  userInfo: {}
}
const getters = {
  userInfo: state => state.userInfo
}
const mutations = {
  [types.USER_INFO_RECEIVE] (state, data) {
    const userInfo = store2.session.get('user-info')
    if (userInfo) {
      state.userInfo = userInfo
    } else {
      if (data) {
        state.session.set('user-info', data)
        state.userInfo = data
      } else {
        state.userInfo = {}
      }
    }
  }
}

export default {
  state,
  getters,
  mutations
}
