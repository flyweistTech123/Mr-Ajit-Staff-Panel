import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";



const ApplicationFirstForm = () => {
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
                            <div className='newapplication18'>
                                <p>1</p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication20'>
                                <p>2</p>
                            </div>
                            <div className='newapplication19'>

                            </div>
                            <div className='newapplication20'>
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
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Jhon' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Father Name</label>
                                    <input type="text" placeholder='Doe' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Gender</label>
                                    <input type="text" placeholder='Male' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">DOB</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className='newapplication24'>
                                <label htmlFor="">Marital Status</label>
                                <input type="text" placeholder='Unmarried' />
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Mother Name</label>
                                    <input type="text" placeholder='Ray White' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Spouse Name</label>
                                    <input type="text" placeholder='NA' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Education</label>
                                    <input type="text" placeholder='MCZ' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Job Title</label>
                                    <input type="text" placeholder='Executive' />
                                </div>
                            </div>
                            <div className='newapplication13'>
                                <button onClick={() => navigate('/newapplicationform')}>Cancel</button>
                                <button onClick={() => navigate('/applicationsecondform')}>Save & Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(ApplicationFirstForm)