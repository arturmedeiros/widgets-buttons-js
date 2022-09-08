<template>
  <q-page class="bg-grey-3">
    <div class="q-pa-md row">
      <div class="col-xs-12 col-sm-1 col-md-2"></div>

      <div class="col-xs-12 col-sm-10 col-md-8 q-pt-sm q-px-sm">
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

      <div class="col-xs-12 col-sm-1 col-md-2"></div>
    </div>

    <div class="q-px-md row q-pb-lg">
      <div class="col-xs-12 col-sm-1 col-md-1"></div>

      <div class="col-xs-12 col-sm-7 col-md-7 q-pt-sm q-px-sm">

        <!--Lista de links cridos-->
        <q-card bordered
                v-for="(link, index) in configs.links"
                :key="`link_${index}`"
                style="border-radius: 15px;"
                class="shadow-0 bg-white q-mb-lg">
          <q-card-section>
            <q-card-section v-if="true">
              <div class="cursor-pointer q-pt-sm q-pb-lg q-px-xs">
                <q-item class="cursor-pointer q-px-none q-pb-md q-py-none q-pr-xs">
                  <q-item-section center>
                    <div style="margin-top: -20px;"
                         class="col-md-6 col-sm-12 col-xs-12 q-px-sm q-py-none">
                      <q-input rounded
                               :disable="edit_btn !== `link_${index}`"
                               color="deep-purple-5"
                               class="bg-white"
                               v-model="link.title"
                               label="Legenda (Título do Botão)"
                               placeholder="Exemplo: Meu Instagram" >
                      </q-input>
                    </div>
                  </q-item-section>
                  <q-item-section center>
                    <div style="margin-top: -20px;"
                         class="col-md-6 col-sm-12 col-xs-12 q-px-sm q-py-none">
                      <q-input rounded
                               :disable="edit_btn !== `link_${index}`"
                               color="deep-purple-5"
                               class="bg-white"
                               v-model="link.link"
                               placeholder="Exemplo: https://youtube.com/watch?=ljdkjs"
                               label="Digite o link">
                        <template v-slot:prepend>
                          <q-icon name="mdi-link" />
                        </template>
                      </q-input>

                    </div>
                  </q-item-section>
                  <q-item-section center side>
                    <div class="text-grey-8">
                      <q-btn v-if="edit_btn !== `link_${index}`"
                             @click="edit_btn = `link_${index}`"
                             color="grey-7"
                             class=""
                             size="12px"
                             round
                             flat
                             icon="edit">
                        <q-tooltip>Editar</q-tooltip>
                      </q-btn>
                      <q-btn v-else
                             @click="update_links()"
                             color="grey-7"
                             class=""
                             size="12px"
                             round
                             flat
                             icon="save">
                        <q-tooltip>Salvar</q-tooltip>
                      </q-btn>
                      <q-btn color="grey-7"
                             @click.stop="delete_btn(index)"
                             class=""
                             size="12px"
                             round
                             flat
                             icon="delete">
                        <q-tooltip>Excluir</q-tooltip>
                      </q-btn>
                    </div>
                  </q-item-section>
                </q-item>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--Criar novo-->
        <q-card bordered
                style="border-radius: 15px;"
                class="shadow-0 bg-white">
          <q-card-section>

            <!--Links-->
            <div @click.stop v-if="true">
              <q-card-section v-if="true">

                <!--Criar novo Adicional-->
                <div v-if="true" class="row q-pt-none q-pb-lg">
                  <div class="col-md-12 col-sm-12 col-xs-12 q-px-md q-py-sm">
                    <div class="text-h6"
                         style="font-size: 1.1rem;">
                      Adicionar novo botão:
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-xs-12 q-px-md q-py-sm">
                    <q-input rounded
                             class="bg-white"
                             label="Legenda (Título do Botão)"
                             placeholder="Exemplo: Meu Instagram"
                             model-value="">
                    </q-input>
                  </div>
                  <div class="col-md-6 col-sm-12 col-xs-12 q-px-md q-py-sm">
                    <q-input rounded
                             class="bg-white"
                             placeholder="Exemplo: https://youtube.com/watch?=ljdkjs"
                             label="Digite o link">

                      <template v-slot:prepend>
                        <q-icon name="mdi-link" />
                      </template>
                      <template v-slot:append>
                        <q-btn color="grey-7"
                               class="animated fadeIn"
                               size="12px"
                               round
                               flat
                               @click="add_btn()"
                               unelevated
                               icon="save">
                          <q-tooltip>{{ true ? 'Preencha os campos' : 'Salvar' }}</q-tooltip>
                        </q-btn>
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>

        <!--Código-->
        <q-card bordered
                style="border-radius: 15px;"
                class="shadow-0 bg-white q-mt-lg">

          <q-card-section v-if="true">

            <!--Código-->
            <div v-if="true" class="row q-pt-none q-pb-lg">
              <div class="col-md-12 col-sm-12 col-xs-12 q-px-md q-py-sm">
                <div class="text-h6"
                     style="font-size: 1.1rem;">
                  Copie o código
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12 q-px-md q-py-sm">
                <Code/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-3 col-md-3 q-pt-sm q-px-sm">
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
                    aria-label="Menu">
                    <!--<q-icon :datasrc="bot_img"></q-icon>-->
                    <q-img :src="bot_img" width="35px"></q-img>
                  </q-btn>
                </div>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-1 col-md-1"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import bot_img from "src/assets/images/robot-outline.png"
import bot_happy from "src/assets/images/robot-happy-outline.png"
import bot_love from "src/assets/images/robot-love-outline.png"
import Code from "components/Code";

export default defineComponent({
  name: 'Home',
  components: {Code},
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
