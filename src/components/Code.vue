<template>
  <div>

  <div v-highlightjs>
    <code style="border-radius: 20px; padding: 20px 30px 10px 30px;"
          class="javascript">
<pre>
<span>&lt;</span>script>
  const options = {
    "color_btn": "{{ color_btn }}",
    "color_txt": "{{ color_txt }}",
    "position": "{{ position }}",{{ msg ? `\n msg: "${msg}",` : ''}}
    "buttons": {{ xeroxHelper(configs.links) ?? [] }}
  };
<span>&lt;</span>/script>
<span>&lt;</span>script type="module" src="https://widgets-buttons.pages.dev/cdn/js/src.js"><span>&lt;</span>/script>

</pre>
    </code>
  </div>
</div>
</template>

<script>

export default {
  name: "Code",
  data(){
    return {
      links: []
    }
  },
  props: [
    "color_btn",
    "color_txt",
    "position",
    "icon",
    "icon_img",
    "msg",
    "buttons"
  ],
  components:{
  },
  computed: {
  },
  methods: {
    // code(){
    //   return `const options = {
    //         "color_btn": "${this.color_btn}",
    //         "color_txt": "${this.color_txt}",
    //         "position": "${this.position}",${this.msg ? `\n msg: ${this.msg},` : ''}
    //         "buttons": ${this.xeroxHelper(this.configs.links) ?? []}
    //       };`
    // }

  },
  watch: {
    // 'configs.links': function () {
    //   this.links = this.xeroxHelper(this.configs.links)
    //   console.log('watch', this.links)
    // }
  }
}
</script>

<style>

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #092e50;
}

.hljs,
.hljs-subst {
  color: #0ff;
}

.hljs-string,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #ff0;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-section,
.hljs-type,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-variable {
  color: #fff;
}

.hljs-comment,
.hljs-quote,
.hljs-doctag,
.hljs-deletion {
  color: #888;
}

.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #0f0;
}

.hljs-meta {
  color: #008080;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

</style>
