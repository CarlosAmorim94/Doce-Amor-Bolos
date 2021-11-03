import React from 'react'
import './Header.css'
import Logo from '../../img/logo.jpg'
import CakeHome from '../../img/cakehome.png'

export default function Header() {
    return (
        <header>
            <div id="header">
                <div id="logo">
                    <img  src={Logo} alt="logotipo da Doce Amor"/>
                </div>
                <nav>
                    <ul>
                        <li>Produtos</li>
                        <li>História</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
            <div id="show">
                <div id="texts">
                    <h1 class="title">
                        FEITO COM AMOR
                    </h1>
                    <p class="mintext">
                        Deliciosos bolos feitos com carinho e dedicação, com o máximo de sabor e leveza que só a Doce Amor pode proporcionar
                    </p>
                </div>   
                <div id="cake_home">
                    <img id="img" src={CakeHome} alt="logotipo da Doce Amor"/>
                </div>
            </div>
        </header>
    )
}
