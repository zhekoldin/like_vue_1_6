import React, { useEffect, useRef } from "react";
import {createPortal} from 'react-dom'
import styles from './Modal.module.css'

export default function Modal({isOpen, onClose, children}) {
    const selectors = {
        portal_dialog_id: 'path_portal_dialog',
        dialog_id: "path_dialog"
    }

    const dialorRef = useRef();

    function closeModal() {
        if(!dialorRef.current) {
            return
        }

        onClose()

        dialorRef?.current?.close()
    }

    function showModal() {
        dialorRef?.current?.showModal()
        dialorRef?.current?.addEventListener('click', (event) => {

            let rect = event.target.getBoundingClientRect();

            const isMoreTop = rect.bottom < event.clientY;
            const isMoreBottom = rect.top > event.clientY;
            const isMoreLeft = rect.right < event.clientX;
            const isMoreRight = rect.left > event.clientX;

            if (
                isMoreTop ||
                isMoreBottom ||
                isMoreLeft ||
                isMoreRight
            ) {
                closeModal()
            }
        })
    }

    useEffect(() => {
        isOpen 
            ? showModal() 
            : closeModal()
    }, [isOpen])

    const portal_elem = document.getElementById(selectors.portal_dialog_id);

    const jsx = (
        isOpen && <dialog ref={dialorRef} className={styles.modal}>
            <div className={styles.modal__closeCross} onClick={closeModal}>X</div>
            {children}
        </dialog>
    )

    return (
        portal_elem 
            ? createPortal(jsx, portal_elem) 
            : jsx
    )
}