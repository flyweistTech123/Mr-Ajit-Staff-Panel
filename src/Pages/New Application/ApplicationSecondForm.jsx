import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";



const ApplicationSecondForm = () => {
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
                            <div className='newapplication18'>
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
                            <div className='newapplication24'>
                                <label htmlFor="">Email ID</label>
                                <input type="text" placeholder='John@gmail.com' />
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">Residence Address</label>
                                    <input type="text" placeholder='UP' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Permanent Address</label>
                                    <input type="text" placeholder='Gaziabad' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='newapplication24'>
                                    <label htmlFor="">PAN Number</label>
                                    <input type="text" placeholder='PAN Number' />
                                </div>
                                <div className='newapplication24'>
                                    <label htmlFor="">Adhaar Number</label>
                                    <input type="text" placeholder='Adhaar number' />
                                </div>
                            </div>
                            <div className='newapplication23'>
                                <div className='createstaffID5'>
                                    <label htmlFor="">Customer Photo</label>
                                    <div className='createstaffID6'>
                                        <div className='createstaffID7'>
                                            <p>Click Here To<br />
                                                Capture<br />
                                                The Image</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='createstaffID5'>
                                    <label htmlFor="">Document Image</label>
                                    <div className='createstaffID6'>
                                        <div className='createstaffID7'>
                                            <p>Click &<br />
                                                Upload Document <br />
                                                Image</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='newapplication13'>
                                <button onClick={() => navigate('/applicationfirstform')}>Cancel</button>
                                <button onClick={() => navigate('/applicationthirdform')}>Save & Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(ApplicationSecondForm)