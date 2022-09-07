/*!
/* Widgets & Buttons (TYPE 1) - v 1.0.0
/* Copyright 2022 - Author: Artur Medeiros - @arturmedeiros
/**/

// SETUP
export let mobile = false
export let open = false
// export const url = '.'
// export const url = 'http://localhost:8080/cdn'
// export const url = 'http://192.168.15.5:8080/cdn'
export const url = 'https://widgets-buttons.pages.dev/cdn'

/* Options */

/* Botão animado */
export let bot_img = "robot-outline.png"
export let bot_happy = "robot-happy-outline.png"
export let bot_love = "robot-love-outline.png"


// FUNÇÕES PRINCIPAIS

/* Chama arquivo de estilo de acordo com a posição */
export function setCdn(options, url) {
    /* CSS */
    document.body.insertAdjacentHTML('beforebegin', `<link rel="stylesheet" href="${url}/css/${options.position}.css">`);
}

/* Verifica se é mobile */
export function setDevice() {
    let userAgent = navigator.userAgent.toLowerCase();
    let devices = ['nokia','iphone','blackberry','sony','lg',
        'htc_tattoo','samsung','symbian','SymbianOS','elaine','palm',
        'series60','windows ce','android','obigo','netfront',
        'openwave','mobilexplorer','operamini'];

    function mobiDetect(userAgent, devices) {
        for(let i = 0; i < devices.length; i++) {
            if (userAgent.search(devices[i]) > 0) {
                return true;
            }
        }
        return false;
    }

    mobile = mobiDetect(userAgent, devices);
}

/* Botões de Abrir */
function openForm() {

    // console.log('openForm')
    open = true

    document.getElementById('wbjs_myBotWidget').style.display = 'block';
    document.getElementById('wbjs_wid-close-button').style.display = 'block';
    document.getElementById('wbjs_bot_cta_chat').style.display = 'none';

    // Exibe content do Widget
    document.getElementById('wbjs_widFrame').style.display = 'block';
}

/* Botões de Fechar */
function closeForm() {

    // console.log('closeForm')
    open = false

    document.getElementById('wbjs_myBotWidget').style.display = 'none';
    document.getElementById('wbjs_wid-close-button').style.display = 'none';
    document.getElementById('wbjs_wid-open-button').style.display = 'block';
}

// INICIALIZAÇÃO
/* Inicializa Frontend */
export async function iniFrontend(options, url) {

    // Carrega Configurações
    await setCdn(options, url);
    await setDevice();

    // Widget Carregado
    console.log('Mobile:', mobile)
    console.log("Widget Loaded!")

    // Mostra Botão e iFrame
    setTimeout( async () => {
        document.getElementById('wbjs_wid-open-button').style.display = 'block';
        // document.getElementById('widFrame').style.display = 'block';

        // Observa cliques nos botões
        document.getElementById('wbjs_wid-open-button').addEventListener('click', openForm, true);
        document.getElementById('wbjs_bot_cta_chat').addEventListener('click', openForm, true);
        document.getElementById('wbjs_wid-close-button').addEventListener('click', closeForm, true);


        insertButtons(options)
    }, 3200)
}

// Html Padrão
export function iniHtml(options){

    // Renderiza HTML
    document.body.insertAdjacentHTML('beforebegin', `
        <div class="wbjs">
            <div id="wbjs_bot_cta_chat"
                    style="color: ${options.color_btn};"
                    class="wbjs_bot_cta_chat">
                <div style="display: flex;">
                    ${ options.msg ? limitMsg(options.msg) : 'Hello! Show my links.' }
                </div>
            </div>
            <div id="wbjs_wid-open-button"
                    style="display: none;
                           background-color: ${options.color_btn};"
                    class="wbjs_wid-open-button">
                <img src="" style="width: 35px!important;
                                   top: 1px!important;
                                   transform: translate(0px);
                                   animation: float 2s ease-in-out infinite;
                                   position: relative!important;"
                     id="wbjs_bot_icon_btn">
            </div>
            <div id="wbjs_wid-close-button"
                    style="display: none;"
                    class="wbjs_wid-close-button">
                <i class="bx bx-x"></i>
            </div>
            <div class="wbjs_wid-popup"
                 id="wbjs_myBotWidget">
                <div id="wbjs_widFrame">
                    <!-- Botões -->
                </div>
            </div>
        </div>
    `)

    // Oculta content do Widget
    document.getElementById('wbjs_widFrame').style.display = 'none';
}

export function insertButtons(options){
    try {
        if (options && options.buttons && options.buttons.length > 0) {
            const list = document.getElementById("wbjs_widFrame");

            options.buttons.forEach(item => {
                console.log(item)

                // Botão Modelo
                list.insertAdjacentHTML('afterend', `
                    <div style="text-align: center;">
                        <div style="padding-bottom: 8px;">
                            <a target="_blank"
                                href="${item.link ?? '#'}"
                                style="text-decoration: none; text-transform: none;">
                                <div style="background-color: ${item.color_btn ?? options.color_btn};
                                            color: ${item.color_txt ?? '#ffffff'};"
                                     class="wbjs_wid-buttons">
                                    <i class="${item.icon ?? 'bx bx-link'}"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                `);
            })

        }
    }
    catch(err) {
        console.log(`Erro Widget: ${err.message.toUpperCase()}`)
    }
}

// Animação 1
export function balloonNoOpen(){
    document.getElementById('wbjs_bot_cta_chat').style.display = 'none';
    document.getElementById('wbjs_bot_icon_btn').src = `${url}/images/${bot_img}`;
    setInterval(() => {
        setTimeout(() => {
            document.getElementById('wbjs_bot_icon_btn').src = `${url}/images/${bot_img}`;
            setTimeout(() => {
                document.getElementById('wbjs_bot_icon_btn').src = `${url}/images/${bot_happy}`;
            }, 2500)
        }, 1000)
    }, 3500)
}

// Animação 2
export function balloonIsOpen(){
    if (!open && options.msg) {
        document.getElementById('wbjs_bot_cta_chat').style.display = 'block';
    }
    return document.getElementById('wbjs_bot_icon_btn').src = `${url}/images/${bot_love}`;
}

export function limitMsg(msg){
    if (msg.length > 35) {
       return msg.substring(0, 35)
    }
    else {
        return msg
    }

}
