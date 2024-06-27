import React from 'react'
import './AddProduct.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";

import img from '../../Img/img8.png'


const AddProduct = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='newapplication'>
                <div className='totalusers'>
                    <div className='totalusers1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>Product Add</h6>
                            </div>
                            <div className='notification'>
                                <div className='notification1' onClick={() => navigate('/productlist')}>
                                    <p>Show Product List</p>
                                </div>
                            </div>
                        </div>


                        <div className='profileupdate'>
                            <div className='profileupdate1'>
                                <div className='addproduct'>
                                    <div className='addproduct1'>
                                        <label htmlFor="">Product Name</label>
                                        <label htmlFor="">IMEI Number</label>
                                        <label htmlFor="">Release Date</label>
                                        <label htmlFor="">Price</label>
                                        <label htmlFor="">Down Payment</label>
                                        <label htmlFor="">Card Fee</label>
                                        <label htmlFor="">Processing Fee</label>
                                        <label htmlFor="">Number Of EMI</label>
                                    </div>

                                    <div className='addproduct2'>
                                        <input type="text" placeholder='Mobile' />
                                        <input type="text" placeholder='25314526897425' />
                                        <input type="text" placeholder='13-05-2024' />
                                        <input type="text" placeholder='10000' />
                                        <input type="text" placeholder='10000' />
                                        <input type="text" placeholder='200' />
                                        <input type="text" placeholder='500' />
                                        <input type="text" placeholder='01-05' />
                                    </div>
                                </div>
                            </div>

                            <div className='kyc5'>
                                <button onClick={() => navigate('/dashboard')}>Cancel</button>
                                <button>Save Changes</button>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}

export default HOC(AddProduct)