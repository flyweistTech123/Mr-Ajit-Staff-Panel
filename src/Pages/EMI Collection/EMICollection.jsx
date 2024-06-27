import React from 'react'
import './EMICollection.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";



const EMICollection = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='newapplication'>
                <div className='totalusers'>
                    <div className='totalusers1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>EMI Collection</h6>
                            </div>
                        </div>
                    </div>

                    <div className='emicollection'>
                        <div className='emicollection1'>
                            <div className='emicollection2'>
                                <label htmlFor="">Select type</label>
                                <select name="" id="">
                                    <option value="">Application ID</option>
                                    <option value="">1 EMI</option>
                                    <option value="">2 EMI</option>
                                    <option value="">3 EMI</option>
                                    <option value="">4 EMI</option>
                                    <option value="">5 EMI</option>
                                </select>
                            </div>
                            <div className='emicollection2'>
                                <label htmlFor="">IMEI Number</label>
                                <div className='emicollection3'>
                                    <input type="search" placeholder='25314526897425' />
                                    <IoSearch color='#9AA3AF'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HOC(EMICollection)