import React from 'react'
import './Body.css'
import cake from '../../img/cakehome.png'
import Allcards from './cards/Allcards'
import Facebook from '../../img/facebook.png'
import Whats from '../../img/whatsapp.png'
import Instagram from '../../img/instagram.png'

export default function Body() {

    return (
        <div id="body">
            <div id="home">
                <section id="texts">
                    <div>
                        <span>Feito com amor!</span>
                    </div>
                    <div id="redes">
                        <p>DELICIOSOS BOLOS FEITOS COM CARINHO E O MáXIMO DE LEVEZA e SABOR QUE Só A DOCE AMOR PODE PROPORCIONAR! <br/><br/>VOCê PODE PERSONALIZAR SEU BOLO COMO DESEJAR! SABORES FORMATOS, ENFEITES E CORES ENTRE EM CONTATOR POR NOSSAS REDES SOCIAIS:</p>
                        <div>
                            <nav id="navbar">
                                <ul>
                                    <li><a href="https://www.facebook.com/Doce-amor-105933260819755"><img src={Facebook} alt="facebook"/></a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=5514991961016&app=facebook&entry_point=page_cta&fbclid=IwAR2vuMCgvS4IwHgX9l9EdvHpXXcfI-yE2g_OFl4rzlV93nyQC56MF3D3w7k"><img src={Whats} alt="whatsapp"/></a></li>
                                    <li><a href="https://www.instagram.com/doceamor98/"><img src={Instagram} alt="Instagram"/></a></li>
                                </ul>
                            </nav>
                        </div>
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
