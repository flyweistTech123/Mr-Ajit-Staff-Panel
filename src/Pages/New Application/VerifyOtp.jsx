import React, { useState } from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';



import { IoIosArrowBack } from "react-icons/io";



const VerifyOtp = () => {
    const navigate = useNavigate()

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            event.preventDefault();
            event.target.previousSibling.focus();
        }
    };

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
                                <h6 style={{color:'#0072BB'}}>Verify with OTP sent to 8308163638</h6>
                            </div>
                            <div className='newapplication4'>
                                <div className='otp-container'>
                                    {otp.map((data, index) => {
                                        return (
                                            <input
                                                className="newapplication34"
                                                type="text"
                                                name="otp"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                onChange={e => handleChange(e.target, index)}
                                                onKeyDown={e => handleKeyDown(e, index)}
                                                onFocus={e => e.target.select()}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='newapplication6'>
                                <button onClick={()=>navigate('/newapplicationform')}>Continue</button>
                            </div>
                            <div className='newapplication7'>
                                <p>Didn't receive? <span>Resend</span> in 00.23</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HOC(VerifyOtp)