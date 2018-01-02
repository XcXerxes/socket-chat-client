import Vue from 'vue'
import Vuex from 'vuex'
import Global from './modules/global'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Global
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
