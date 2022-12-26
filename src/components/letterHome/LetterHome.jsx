import React from "react";
import { Box, } from '@chakra-ui/react'
import './LetterHome.css'

function LetterHome() {
    return (
        <div>
            <p class="saludo">Hola Yo soy</p>
            <div class="container">
                    <section class="animation">
                        <div class="first"><div>Gabriel Ferrer</div></div>
                        <div class="second"><div>Desarrollador Web</div></div>
                        <div class="third"><div>T.S.U Informatica</div></div>
                    </section>
            </div>
        </div>
    )
}

export default LetterHome