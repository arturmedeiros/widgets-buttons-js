<template>
  <!--Modal Edição do Endereço-->
  <q-dialog
    v-model="configs.modals.default"
    persistent
    :maximized="configs.modals.maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-page-container class="bg-white">
      <q-page>
        <q-header style="height: 65px;
                          position: fixed;
                          width: 100%;
                          top: 0;"
                  class="bg-white text-grey-7" reveal-offset="">
          <q-toolbar style="height: 65px;" class="q-pr-sm">
            <q-toolbar-title class="">
              <div class="q-pl-sm text-grey-9"
                   style="font-weight: 500; font-size: .9rem;">
                <q-item-label lines="1" class="text-uppercase">
                  {{ `Editar endereço` }}
                </q-item-label>
              </div>
            </q-toolbar-title>
            <div>
              <q-btn
                flat
                round
                @click="setModal({ key: 'default', status: false })"
                icon="close"
              >
              </q-btn>
            </div>
          </q-toolbar >
          <q-separator class="q-px-sm" v-if="true" color="grey-3" />
        </q-header>

        <div style="max-height: calc(100vh - 130px); position: absolute; width: 100%;">
          <div style="padding-bottom: 65px;">
            <q-card-section class="q-pt-xs q-pb-lg shadow-0" v-if="true">
              <div v-if="false" class="q-pa-xs q-gutter-sm">
                <q-banner inline-actions rounded class="bg-primary text-white">
                  <strong>Atenção:</strong> Se o "Bio Link's" estiver habilitado, o visitante que acessar o link do seu cardápio ou QR-code verá uma página com uma lista de links personalizados por você.
                  <template v-slot:action>
                    <q-btn flat label="Dismiss" />
                  </template>
                </q-banner>
              </div>
              <q-list class="bg-white q-pt-md">
                oioi
              </q-list>
            </q-card-section>
          </div>
        </div>

        <q-footer v-if="false"
                  style="height: 65px;
                          position: fixed;
                          width: 100%;
                          bottom: 0;"
                  class="bg-white shadow-0 text-grey-8">
          <q-separator class="q-px-sm" v-if="true" color="grey-3" />
          <div class="row q-pt-md q-px-sm">
            <div class="col-6 q-pl-sm q-pr-sm">
              oioi
            </div>
            <div class="col-6 q-pl-none q-pr-sm">
              oioi
            </div>
          </div>
        </q-footer>
      </q-page>

    </q-page-container>

  </q-dialog>
</template>

<script>
export default {
  name: 'ModalDefault',
  components: {},
  props: [
    'modal'
  ],
  data() {
    return {}
  },
  watch: {

  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped>

</style>
