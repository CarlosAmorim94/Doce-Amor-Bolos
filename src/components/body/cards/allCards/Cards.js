import React from 'react'
import './Cards.css'
import Modal from '../../modal/Modal'
import Facebook from '../../../../img/facebook.png'
import Whats from '../../../../img/whatsapp.png'
import Instagram from '../../../../img/instagram.png'



export default function Cards(props) {

    const [modalVisible, setModalVisible] = React.useState(false)

    const showModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <>
            <div onClick={showModal}>
                <img src={props.img} alt="imagem de um bolo"/>
            </div>

            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <img id="img_modal" src={props.img} alt="imagem de um bolo"/>
                <nav class="sociais">
                    <h1 class="text_modal">Experimente! entre em contato por nossas redes sociais:</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/Doce-amor-105933260819755"><img src={Facebook} alt="facebook"/></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5514991961016&app=facebook&entry_point=page_cta&fbclid=IwAR2vuMCgvS4IwHgX9l9EdvHpXXcfI-yE2g_OFl4rzlV93nyQC56MF3D3w7k"><img src={Whats} alt="whatsapp"/></a></li>
                        <li><a href="https://www.instagram.com/doceamor98/"><img src={Instagram} alt="Instagram"/></a></li>
                    </ul>
                </nav>
                <button onClick={closeModal} id="close_modal">Fechar</button>
            </Modal>
        </>
    )
}
