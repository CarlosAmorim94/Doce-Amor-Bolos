import React from 'react'
import './Modal.css'

export default function Modal(props) {

    function closeModal() {
        props.setVisible('false')
    }

    return (
        <>
            {props.visible === true &&
            <div onClick={closeModal} id="shadow">
                <section id="modal">
                    {props.children}
                </section>
                
            </div>
            }
        </>
    )
}
