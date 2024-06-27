import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";



const ApplicationThirdForm = () => {
    const navigate = useNavigate()

    return (
        <>
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
                            <div className='newapplication18'>
                                <p>3</p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication20'>
                                <p>4</p>
                            </div>
                        </div>
                    </div>

                    <div className='newapplication21'>
                        <div className='newapplication22'>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Relation  1</label>
                                    <input type="text" placeholder='Relation  1' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Name' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Mobile Number</label>
                                    <input type="text" placeholder='Mobile Numbe' />
                                </div>
                                <div className='newapplication25'>
                                    <button>Send OTP</button>
                                </div>
                            </div>

                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">OTP Verify</label>
                                    <input type="text" placeholder='OTP' />
                                </div>
                            </div>

                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Relation 2</label>
                                    <input type="text" placeholder='Relation 2' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Name' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Mobile Number</label>
                                    <input type="text" placeholder='Mobile Number' />
                                </div>
                                <div className='newapplication25'>
                                    <button>Send OTP</button>
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">OTP Verify</label>
                                    <input type="text" placeholder='OTP' />
                                </div>
                            </div>

                            <div className='newapplication13'>
                                <button onClick={() => navigate('/applicationsecondform')}>Cancel</button>
                                <button onClick={() => navigate('/applicationfourthform')}>Save & Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(ApplicationThirdForm)