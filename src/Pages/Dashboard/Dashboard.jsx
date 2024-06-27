import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { OfferModel } from '../Offer Modal/OfferModal'
import { IoIosArrowForward } from "react-icons/io";


import img from '../../Img/img11.png'


const Dashboard = () => {

    const percentage = 70;
    const navigate = useNavigate()


    useEffect(() => {
        setModalShow(true);
    }, []);





    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <OfferModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='dashboard'>
                <div className='dashboard1'>
                    <div className='dashboard22'>
                        <img src={img} alt="" />
                    </div>

                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total Loans</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Loan Pending</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Loan Approved</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>EMI Payment</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Loan EMI’s</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)