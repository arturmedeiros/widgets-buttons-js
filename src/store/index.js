import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import configs from './modules/configs'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      configs
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
