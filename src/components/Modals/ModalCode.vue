<template>
  <q-dialog
    v-model="configs.modals.code"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="q-px-sm q-py-md" style="border-radius: 15px;">

      <q-card-section v-if="true">

        <!--Código-->
        <div v-if="true" class="row q-pt-none q-pb-lg">
          <div class="col-md-12 col-sm-12 col-xs-12 q-px-md q-py-sm">
            <div class="text-h6"
                 style="font-size: 1.1rem;">
              Copie o código e cole no seu site:
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12 q-px-md q-py-sm">
            <Code :color_btn="configs.options.color_btn"
                  :color_txt="configs.options.color_txt"
                  :position="configs.options.position"
                  :msg="configs.options.msg"
                  :buttons="configs.links"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn rounded
               outline
               color="primary"
               @click.prevent="setModal({ key: 'code', status: false })"
               class="shadow-0 q-py-sm "
               style="border-radius: 50px; text-transform: initial;">
          <q-item-label class="q-px-md" style="">Fechar</q-item-label>
        </q-btn>
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>

<script>
import Code from "components/Code";
export default {
  name: 'ModalCode',
  components: {
    Code
  },
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
