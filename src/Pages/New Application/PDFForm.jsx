import React from 'react'
import './NewApplication.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";



const PDFForm = () => {
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


                <div className='newapplication28'>
                    <div className='newapplication29'>
                        <h1>Show data In PDF Form</h1>
                    </div>

                    <div className='newapplication30'>
                        <button>Download PDF</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PDFForm)