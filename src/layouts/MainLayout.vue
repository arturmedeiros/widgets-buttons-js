<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="q-px-lg">
        <q-btn
          v-if="true"
          flat
          dense
          round
          class="bg-white"
          color="primary"
          icon="reply"
          aria-label="Menu"
        />
        <q-toolbar-title>
          Widgets & Buttons JS
        </q-toolbar-title>
        <div>v{{ configs.app_version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container style="padding-bottom: 30px!important;">
      <router-view />
    </q-page-container>
    <q-footer style="position: absolute; bottom: 0;"
              class="bg-grey-3 text-grey-8">
      <div class="row">
        <div class="col-12 text-center">
          <p>
            <a style="text-decoration: none;"
               class="text-black"
               target="_blank"
               href="https://github.com/arturmedeiros/widgets-buttons-js">
              @arturmedeiros
            </a>
          </p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
  },
})


</script>

