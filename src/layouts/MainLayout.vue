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
    <q-page-container>
      <router-view />
    </q-page-container>
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

