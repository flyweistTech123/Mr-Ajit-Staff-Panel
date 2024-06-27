import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";



const NewApplicationForm = () => {
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




                <div className='newapplication8'>
                    <div className='newapplication14'>
                        <div className='newapplication9'>
                            <select name="" id="">
                                <option value="">Product</option>
                                <option value="">OPPO</option>
                                <option value="">VIVO</option>
                                <option value="">MI</option>
                                <option value="">APPLE</option>
                                <option value="">Other</option>
                            </select>
                            <input type="text" placeholder='Product Name' />
                            <input type="text" placeholder='IMEI Number' />
                            <input type="text" placeholder='Product Price eg' />
                            <input type="text" placeholder='Interest %' />
                            <input type="text" placeholder='Card Fees' />
                            <input type="text" placeholder='Processing Fees' />
                            <input type="text" placeholder='Down Payment' />
                            <select name="" id="">
                                <option value="">Enter No of EMI</option>
                                <option value="">1 EMI</option>
                                <option value="">2 EMI</option>
                                <option value="">3 EMI</option>
                                <option value="">4 EMI</option>
                                <option value="">5 EMI</option>
                            </select>
                            <div className='newapplication10'>
                                <label htmlFor="">Select Collection Type</label>
                                <div className='newapplication11'>
                                    <div className='newapplication12'>
                                        <input type="radio" name="" id="" />
                                        <p>Monthly</p>
                                    </div>
                                    <div className='newapplication12'>
                                        <input type="radio" name="" id="" />
                                        <p>Weekly</p>
                                    </div>
                                </div>
                            </div>
                            <input type="text" placeholder='Collection Date' />
                            <input type="text" placeholder='EMI Amount' />
                        </div>
                        <div className='newapplication13'>
                            <button onClick={() => navigate('/verifyotp')}>Cancel</button>
                            <button onClick={() => navigate('/applicationfirstform')}>Submit</button>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default HOC(NewApplicationForm)