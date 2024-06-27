import React from 'react'
import './Settings.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";



const Settings = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='newapplication'>
                <div className='totalusers'>
                    <div className='totalusers1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>Settings</h6>
                            </div>
                        </div>


                        <div className='setting'>
                            <div className='setting1'>
                                <div className='setting2'>
                                    <div className='setting3'>
                                        <div className='setting4'>
                                            <p> <GiPlainCircle size={10} color='#2E4658' />
                                                Apply Charges</p>
                                        </div>
                                        <div className='setting5'>
                                            <div className='setting6'>
                                                <h6>Panelty Charges</h6>
                                                <h6>Select Time Period</h6>
                                            </div>
                                            <div className='setting7'>
                                                <input type="text" placeholder='200 rs' />
                                                <input type="text" placeholder='200 rs' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='setting2'>
                                    <div className='setting3'>
                                        <div className='setting4'>
                                            <p> <GiPlainCircle size={10} color='#2E4658' />
                                                Fraud Customer</p>
                                        </div>
                                        <div className='setting5'>
                                            <div className='setting6'>
                                                <h6>EMI Not Pay (<span>If customer is not paying EMI on dates then it will be <br/> add in fraud Customer</span>)</h6>
                                            </div>
                                            <div className='setting7'>
                                                <input type="text" placeholder='3 Months' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='setting2'>
                                    <div className='setting3'>
                                        <div className='setting4'>
                                            <p> <GiPlainCircle size={10} color='#2E4658' />
                                                Call Settings</p>
                                        </div>
                                        <div className='setting8'>
                                            <div className='setting9'>
                                                <p>Convert text to speech effortlessly with our Voice Call Template, delivering clear and natural-sounding audio for seamless communication and enhanced user experiences.</p>
                                            </div>

                                            <div className='setting10'>
                                                <div className='setting11'>
                                                    <div className='setting12'>
                                                        <div className='setting13'>
                                                            <input type="radio" />
                                                            <label htmlFor="">Select Duration Of Call</label>
                                                        </div>
                                                        <input type="text" placeholder='Before 3 Days' />
                                                    </div>
                                                    <div className='setting12'>
                                                        <div className='setting13'>
                                                            <label htmlFor="" style={{ color: "#71717A" }}>How Many Times in a Days</label>
                                                        </div>
                                                        <input type="text" placeholder='Before 3 Days' />
                                                    </div>
                                                    <div className='setting14'>
                                                        <h6>Penalty Call After Delay EMI Payments</h6>
                                                        <p>Lorem Ipsum set da due .................................................................</p>
                                                    </div>
                                                    <div className='setting12'>
                                                        <div className='setting13'>
                                                            <input type="radio" />
                                                            <label htmlFor="">Select Duration Of Call</label>
                                                        </div>
                                                        <input type="text" placeholder='After 1 Days' />
                                                    </div>
                                                </div>
                                                <div className='setting11'>
                                                    <div className='setting12'>
                                                        <div className='setting13'>
                                                            <input type="radio" />
                                                            <label htmlFor="">Select Duration Of Message</label>
                                                        </div>
                                                        <input type="text" placeholder='Before 3 Days' />
                                                    </div>
                                                    <div className='setting13'>
                                                        <input type="radio" />
                                                        <label htmlFor="">WhatsApp Message</label>
                                                    </div>
                                                    <div className='setting13'>
                                                        <input type="radio" />
                                                        <label htmlFor="">SMS</label>
                                                    </div>
                                                    <div className='setting13'>
                                                        <input type="radio" />
                                                        <label htmlFor="">IVR Calling</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}

export default HOC(Settings)