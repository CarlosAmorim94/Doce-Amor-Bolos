import React from 'react'
import './Body.css'
import cake from '../../img/cakehome.png'
import Allcards from './cards/Allcards'

export default function Body() {

    return (
        <div id="body">
            <div id="home">
                <section id="texts">
                    <div>
                        <span>Feito com amor!</span>
                    </div>
                    <div>
                        <p>Deliciosos bolos feitos com carinho e dedicação, com o máximo de sabor e leveza que só a Doce Amor pode proporcionar! Entre em contato e experimente!</p>
                        <p>Você pode personalizar seu bolo como desejar! Sabores formatos, enfeites e cores! Consulte todas as variedades em nossas redes sociais!</p>
                    </div>
                </section>
                <section id="cake_image">
                    <img src={cake} alt="Bolo delicioso"/>
                </section>
            </div>
            
            <div id="all_cards">
                <Allcards/>
            </div>


        </div>
    )
}
