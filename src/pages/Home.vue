<template>
  <q-page class="bg-grey-3">
    <div class="q-pa-md row">
      <div class="col-xs-12 col-sm-12 col-md-2"></div>

      <div class="col-xs-12 col-sm-12 col-md-8 q-pt-sm q-px-sm">
        <q-card style="border-radius: 15px;"
                class="shadow-0 bg-transparent">
          <q-card-section>
            <div class="row">
              <div class="col-12 text-center">
                <h1 class="q-pb-md"
                    style="font-size: 45px; font-weight: 500; line-height: 50px;">
                  Criar Botões (Call To Action)
                </h1>
                <p class="text-grey-8 q-px-lg"
                   style="font-size: 18px;">
                  Com ajuda do nosso editor, você poderá criar botões de ação para colocar no seu site. Basta configurar os botões e copiar o código à seguir.
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-2"></div>
    </div>
    <div class="q-px-md row">
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
            <div class="row q-pb-md">
              <div class="col-12 text-center">
                <div class="q-py-md" v-if="true">
                  Crie o primeiro botão para pre-visualizar:
                </div>
              </div>
              <div class="col-12 text-center">
<!--                <div class="">-->
<!--                  <q-btn-->
<!--                    v-if="true"-->
<!--                    flat-->
<!--                    dense-->
<!--                    round-->
<!--                    size="25px"-->
<!--                    class="bg-primary"-->
<!--                    color="white"-->
<!--                    icon="reply"-->
<!--                    aria-label="Menu"-->
<!--                  ></q-btn>-->
<!--                </div>-->
                <div class="">
                  <q-btn
                    v-if="true"
                    flat
                    dense
                    round
                    size="25px"
                    class="bg-primary"
                    color="white"
                    aria-label="Menu"
                  >
<!--                    <q-icon :datasrc="bot_img"></q-icon>-->
                    <q-img :src="bot_img" width="35px"></q-img>
                  </q-btn>
                </div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-2"></div>
    </div>
    <q-footer style="position: fixed; bottom: 0;"
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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import bot_img from "src/assets/images/robot-outline.png"
import bot_happy from "src/assets/images/robot-happy-outline.png"
import bot_love from "src/assets/images/robot-love-outline.png"

export default defineComponent({
  name: 'Home',
  data(){
    return {
      bot_img: bot_img,
      bot_happy: bot_happy,
      bot_love: bot_love,
      img_icon: null
    }
  },
  mounted() {
    setTimeout(() => {

      setTimeout(() => {

        // Exibe CTA com texto
        // this.balloonIsOpen()

        setTimeout(() => {

          // Fecha CTA com texto
          // this.balloonNoOpen()

        }, 3000)

      }, 6000)

    }, 600)
  },
  methods: {

  }
})
</script>


<style lang="sass">
.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
