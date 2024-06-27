import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";



const NewApplication = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='newapplication'>
                <div className='totalusers'>
                    <div className='totalusers1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>Loan Apply Form</h6>
                            </div>
                        </div>




                    </div>

                    <div className='newapplication1'>
                        <div className='newapplication2'>
                            <div className='newapplication3'>
                                <h6>Verify Your Number</h6>
                            </div>
                            <div className='newapplication4'>
                                <input type="text"  placeholder='Enter Your Phone Number'/>
                            </div>
                            <div className='newapplication5'>
                                <input type="checkbox" />
                                <label htmlFor="">By clicking, I accept the <span>terms up service</span> and privacy policy</label>
                            </div>
                            <div className='newapplication6'>
                                <button onClick={()=>navigate('/verifyotp')}>Generate OTP</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HOC(NewApplication)