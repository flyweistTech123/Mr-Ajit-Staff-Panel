import React, { useState } from 'react'
import './Wallet.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import img1 from '../../Img/img4.png'


const Wallet = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const tabledata1 = [
        {
            id: 1,
            DateTime: '24-05-2024',
            TransactionID: "123456",
            Description: "Payment of thing",
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 2,
            DateTime: '24-05-2024',
            TransactionID: "123456",
            Description: "Payment of thing",
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 3,
            DateTime: '24-05-2024',
            TransactionID: "123456",
            Description: "Payment of thing",
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 4,
            DateTime: '24-05-2024',
            TransactionID: "123456",
            Description: "Payment of thing",
            Amount: "25000",
            Status: "Completed",
        }
    ]
    const tabledata2 = [
        {
            id: 1,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "123456",
            PaymetnMode:'Google Pay',
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 2,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "123456",
            PaymetnMode:'Paytm',
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 3,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "123456",
            PaymetnMode:'Net Banking',
            Amount: "25000",
            Status: "Completed",
        },
        {
            id: 4,
            DateTime: '24-05-2024',
            LoanID: "123456",
            TransactionID: "123456",
            PaymetnMode:'Phone Pay  ',
            Amount: "25000",
            Status: "Completed",
        }
    ]
    return (
        <>
            <div className='newapplication'>
                <div className='totalusers'>
                    <div className='totalusers1'>
                        <div className='totalusers4'>
                            <div className='totalusers5'>
                                <IoIosArrowBack color='#202224' size={25} onClick={() => navigate(-1)} />
                                <h6>Wallet</h6>
                            </div>
                            <div className='totalusers6'>
                                <div className='totalusers7'>
                                    <IoIosSearch color='#D5D5D5' size={20} />
                                    <input type="search" placeholder='Search by Date, ID or software' />
                                </div>
                                <div className='totalusers8'>
                                    <select name="" id="">
                                        <option value="">Filter</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='wallet10'>
                            <div className='wallet11'>
                                <div className='wallet12' onClick={() => setStep(0)}>
                                    <div className='wallet13'>
                                        <p>Collected Balance</p>
                                    </div>
                                    <div className='wallet14'>
                                        <p>Amount</p>
                                        <span>12.2K  <IoIosArrowForward /> </span>
                                    </div>
                                </div>
                                {/* <div className='wallet12' onClick={() => setStep(1)}>
                                    <div className='wallet13'>
                                        <p>Virtual Balance</p>
                                    </div>
                                    <div className='wallet14'>
                                        <p>Amount</p>
                                        <span>12.2K  <IoIosArrowForward /> </span>
                                    </div>
                                </div> */}
                            </div>

                            <div className='wallet15'>
                                <div className="wallet16">
                                    {step == 0 &&
                                        <div
                                            className={step === 0 ? "userdetails11" : "userdetails12"}
                                            onClick={() => setStep(0)}>
                                            <p>Transaction Summay</p>
                                            {step == 0 &&
                                                <img src={img1} alt="" />
                                            }
                                        </div>
                                    }
                                </div>
                                {step === 0 ? (
                                    <div className="userdetails13">
                                        <div className='totalusers9'>
                                            <div className='totalusers10'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Date/Time</th>
                                                            <th>Transaction ID</th>
                                                            <th>Description</th>
                                                            <th>Amount</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tabledata1.map((data) => (
                                                            <tr key={data.id}>
                                                                <td>{data.DateTime}</td>
                                                                <td>{data.TransactionID}</td>
                                                                <td>{data.Description}</td>
                                                                <td>{data.Amount}</td>
                                                                <td style={{ color: data.Status === "Completed" ? "#00B060" : "#202224" }}>
                                                                    {data.Status}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                ) : step === 1 ? (
                                    <div className="userdetails13">
                                        <div className='totalusers9'>
                                            <div className='totalusers10'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Date/Time</th>
                                                            <th>Loan ID</th>
                                                            <th>Transaction ID</th>
                                                            <th>Amount</th>
                                                            <th>Paymetn Mode</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tabledata2.map((data) => (
                                                            <tr key={data.id}>
                                                                <td>{data.DateTime}</td>
                                                                <td>{data.LoanID}</td>
                                                                <td>{data.TransactionID}</td>
                                                                <td>{data.Amount}</td>
                                                                <td>{data.PaymetnMode}</td>
                                                                <td style={{ color: "#09B006" }}>
                                                                    {data.Status}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) : step === 2 ? (
                                    <>
                                        <div className="userdetails13">

                                        </div>
                                    </>

                                ) : (

                                    ""
                                )}
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}

export default HOC(Wallet)