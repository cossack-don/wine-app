import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '@/store/mainDataArray/stateMain.js'
import actions from '@/store/mainDataArray/actionsMain.js'
import mutations from '@/store/mainDataArray/mutationsMain.js'
import getters from '@/store/mainDataArray/gettersMain.js'

export default new Vuex.Store({

  state,
  mutations,

  getters,
  actions,

})
