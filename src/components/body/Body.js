import React from 'react'
import './Body.css'
import cake from '../../img/cakehome.png'

export default function Body() {
    return (
        <div id="body">
            <div id="home">
                <section id="texts">
                    <div>
                        <span>Feito com carinho!</span>
                    </div>
                    <div>
                        <p>Deliciosos bolos feitos com carinho e dedicação, com o máximo de sabor e leveza que só a Doce Amor pode proporcionar</p>
                    </div>
                </section>
                <section id="cake_image">
                    <img src={cake} alt="Bolo delicioso"/>
                </section>
            </div>
            
            <div id="">Imagens</div>
        </div>
    )
}
