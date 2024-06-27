import { IoIosCloseCircle } from "react-icons/io";
import React from 'react'
import './OfferModal.css'
import Modal from 'react-bootstrap/Modal';
import img from '../../Img/img10.png'

export function OfferModel(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='offersmodel'>
                    <div className='offersmodel1'>
                        <IoIosCloseCircle color='#FFFFFF' size={40} onClick={()=>props.onHide()} />
                    </div>
                    <div className='offersmodel2'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}