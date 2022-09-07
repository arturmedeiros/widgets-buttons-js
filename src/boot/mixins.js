// Vuex
import { mapActions, mapGetters, mapState } from 'vuex'

import {copyToClipboard, useQuasar} from 'quasar'

import no_pic from "assets/images/no-pic.png"

export default async ({ app }) => {

  app.mixin({
    computed: {
      ...mapState([
        'configs'
      ]),
      ...mapGetters([
      ]),
    },
    data() {
      return {
        no_pic: no_pic,
        toTop: 0
      }
    },
    setup () {
      const $q = useQuasar()
      $q.dialog({}) // returns Object
      return {}
    },
    mounted() {
      // Verifica tema ao montar aplicação
      this.checkTheme()
    },
    methods: {
      xeroxHelper(payload) {
        return JSON.parse(JSON.stringify(payload))
      },
      refresh() {
        window.location.reload()
      },
      checkTheme(){
        this.$q.dark.isActive = !!window.localStorage.getItem('dark');
      },
      scrollHandler(position) {
        this.$store.commit('SET_SCROLL_POSITION', parseInt(position.position.top))

        // Observa rolagem e seta seção
        const sections = window.document.querySelectorAll('section')

        let current = '';

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          /*if (pageYOffset >= sectionTop){*/
          if (pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id')
          }
        })

        console.log(current)
      },
      openUrl(link){
        window.open(link, "_blank")
      },
      pushRouter(routeName){
        this.$router.push({ name: routeName })
      },
      copy(text){
        copyToClipboard(text)
          .then(() => {
            /*console.log('Copiei: ', text)*/
            this.$q.notify({
              message:`Link copiado!`,
              color: 'white',
              textColor: 'grey-9',
              position: 'bottom-right',
              icon: 'announcement',
              classes: 'border-radius-15',
              actions: [
                {
                  icon: 'close',
                  size: 'xs',
                  color: 'grey-9',
                  /*handler: () => {}*/
                }
              ]
            })
          })
          .catch(() => {
            // fail
          })
      },
      setModal(modalKey) {
        /*console.log(modalKey)*/
        if(modalKey) {
          this.$store.commit('SET_MODAL', modalKey)
        }
      },
    },
    watch: {
      // Observa mudança de tema
      '$q.dark.isActive': function () {
        if(this.$q.dark.isActive){
          window.localStorage.setItem('dark', true);
        } else {
          window.localStorage.removeItem('dark');
        }
      },
      // Observa mudança de rota
      '$route.name': function () {
        // this.setLoaded();
      }
    }
  })
}
