<template>
  <q-page class="bg-grey-3">
    <div class="q-pa-md row">
      <div class="col-xs-12 col-sm-12 col-md-2"></div>

      <div class="col-xs-12 col-sm-12 col-md-6 q-pt-sm q-px-sm">
        <q-card bordered
                style="border-radius: 15px;"
                class="shadow-0 bg-white">
          <q-card-section>
            <p></p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-2 q-pt-sm q-px-sm">
        <q-card bordered
                style="border-radius: 15px;"
                class="shadow-0 bg-white">
          <q-card-section>
            <p></p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-2"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
})
</script>


<style lang="sass">
.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
