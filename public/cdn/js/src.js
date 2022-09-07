/*!
/* Widgets & Buttons (TYPE 1) - v 1.0.0
/* Copyright 2022 - Author: Artur Medeiros - @arturmedeiros
/**/

// Injeção de dependências

/* Variables */
import {
    bot_img,
    url,
} from "./core.js";

/* Functions */
import {
    balloonIsOpen,
    balloonNoOpen,
    iniFrontend,
    iniHtml,
} from "./core.js";

try {
    if (options) {
        /* Start Widget */
        setTimeout(() => {

            // Inicializa frontend (3 seconds)
            iniHtml(options)

            setTimeout(() => {

                // Exibe CTA com texto
                balloonIsOpen()

                setTimeout(() => {

                    // Fecha CTA com texto
                    balloonNoOpen()

                }, 3000)

            }, 6000)

            // Exibe botão com animação
            document.getElementById('wbjs_bot_icon_btn').src = `${url}/images/${bot_img}`;
            document.getElementById('wbjs_bot_cta_chat').style.display = 'none';

            // Inicializa frontend
            let promise = iniFrontend(options, url);

        }, 3000)
    }
}
catch(err) {
    console.log(`Erro Widget: ${err.message.toUpperCase()}`)
}

