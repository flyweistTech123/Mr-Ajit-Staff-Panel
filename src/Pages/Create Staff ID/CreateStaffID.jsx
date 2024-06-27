import React, { useState } from 'react'
import './CreateStaffID.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";


const CreateStaffID = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='newapplication'>
                <div className='userdetails'>
                    <div className='userdetails1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>Create Staff ID</h6>
                            </div>
                        </div>

                        <div className='createstaffID'>
                            <div className='userdetails8'>
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder='Jhon' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder='Doe' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='jhondoe@gmail.com' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Aadhar Card Number</label>
                                <input type="text" placeholder='453875329' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Add Job Type</label>
                                <input type="text" placeholder='Fianance, Support, management' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Phone Number</label>
                                <input type="text" placeholder='+91 453875329' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">First Line Address</label>
                                <input type="text" placeholder='Jhon' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Second Line Address</label>
                                <input type="text" placeholder='Noida' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">District</label>
                                <input type="text" placeholder='Noida' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Pin Code</label>
                                <input type="text" placeholder='24548' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder='india' />
                            </div>
                            <div className='userdetails8'>
                                <label htmlFor="">State</label>
                                <input type="text" placeholder='state' />
                            </div>
                        </div>

                        <div className='createstaffID1'>
                            <label htmlFor="">Select Role</label>
                            <div className='createstaffID2'>
                                <div className='createstaffID3'>
                                    <input type="radio" />
                                    <label htmlFor="">New Application</label>
                                </div>
                                <div className='createstaffID3'>
                                    <input type="radio" />
                                    <label htmlFor="">EMI Collection</label>
                                </div>
                                <div className='createstaffID3'>
                                    <input type="radio" />
                                    <label htmlFor="">Pending EMI Coll.</label>
                                </div>
                                <div className='createstaffID3'>
                                    <input type="radio" />
                                    <label htmlFor="">Select All</label>
                                </div>
                            </div>

                        </div>

                        <div className='createstaffID4'>
                            <div className='createstaffID5'>
                                <label htmlFor="">Upload Photo</label>
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


                        <div className='kyc5'>
                            <button onClick={() => navigate('/kyc')}>Back</button>
                            <button>Create ID</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CreateStaffID)