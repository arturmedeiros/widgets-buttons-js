<template>
  <span>
    <span>&lt;</span>script>
    const options = {
    "color_btn": "{{ color_btn }}",
    "color_txt": "{{ color_txt }}",
    "position": "{{ position }}",{{ msg ? '${\n} msg: "${msg}",' : ''}}
    "buttons": {{ this.xeroxHelper(configs.links) ?? [] }}
    };
    <span>&lt;</span>/script>
    <span>&lt;</span>script type="module" src="https://widgets-buttons.pages.dev/cdn/js/src.js"><span>&lt;</span>/script>

  </span>
</template>

<script>
export default {
  name: "CodeText",
  props: [
    "color_btn",
    "color_txt",
    "position",
    "icon",
    "icon_img",
    "msg",
    "buttons"
  ],
}
</script>

<style scoped>

</style>
