import React, { useState } from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

import img from '../../Img/img9.png'

const ApplicationFourthForm = () => {
    const navigate = useNavigate()
    // Compare  Modal // 
    const [modalShow, setModalShow] = React.useState(false);

    function ApplicationSubmitted(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='newapplication31'>
                        <div className='newapplication32'>
                            <IoCloseCircleSharp color='#000000' size={25} onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newapplication33'>
                            <img src={img} alt="" />
                            <h6>Loan  Application Submitted</h6>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    const handleClick = () => {
        setModalShow(true);
        setTimeout(() => {
            navigate('/pdfform');
        }, 3000);   
    };

    return (
        <>
            <ApplicationSubmitted
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='totalusers'>
                <div className='totalusers1'>
                    <div className='totalusers4'>
                        <div className='totalusers5'>
                            <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                            <h6>Loan Apply Form</h6>
                        </div>
                    </div>
                </div>


                <div className='newapplication15'>
                    <div className='newapplication16'>
                        <div className='newapplication17'>
                            <div className='newapplication20'>
                                <p><FaCheck /></p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication20'>
                                <p><FaCheck /></p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication20'>
                                <p><FaCheck /></p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication18'>
                                <p>4</p>
                            </div>
                        </div>
                    </div>

                    <div className='newapplication21'>
                        <div className='newapplication22'>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Account Holder Name</label>
                                    <input type="text" placeholder='Account Holder Name' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Account Number</label>
                                    <input type="text" placeholder='Account Number' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Bank Name</label>
                                    <input type="text" placeholder='Bank Name' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">IFSC Code</label>
                                    <input type="text" placeholder='IFSC Code' />
                                </div>
                            </div>
                            <div className='newapplication27'>
                                <button>Verify Account Number</button>
                                <button>E-manidate</button>
                            </div>
                            <div className='newapplication26'>
                                <button onClick={handleClick}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(ApplicationFourthForm)