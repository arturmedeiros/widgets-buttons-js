const configs = {
  state: {
    app_version: '0.0.1',
    loading: false,
    loading_delivery_tax: false,
    scroll_position: 0,
    modals: {
      maximizedToggle: true,
      test: false,
    },
  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_SCROLL_POSITION(state, context){
      state.scroll_position = context;
    },
    SET_MODAL(state, modalKey) {
      state.modals[`${modalKey.key}`] = modalKey.status
    },
  },
  actions: {}
}

export default configs;
