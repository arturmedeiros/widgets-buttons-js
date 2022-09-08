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
    links: [
      // {
      //   name: "whatsapp",
      //   label: "WhatsApp",
      //   icon: "bx bxl-whatsapp",
      //   link: null,
      //   color_btn: "#099300",
      //   color_txt: null,
      // }
    ],
    options: {
      type: 1, // Integer
      color_btn: "#027be3", // String
      // color_btn: "#2e8b57", // String
      color_txt: "#ffffff", // String
      position: "right", // String
      icon: null,  // String
      icon_img: null,  // String
      msg: "Olá! Como posso ajudar?",
    }

  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_SCROLL_POSITION(state, payload){
      state.scroll_position = payload;
    },
    SET_MODAL(state, modalKey) {
      state.modals[`${modalKey.key}`] = modalKey.status
    },
    SET_LINKS(state, payload) {
      state.links = payload
    },
    SET_OPTIONS(state, payload) {
      state.options = payload
    },
  },
  actions: {}
}

export default configs;
