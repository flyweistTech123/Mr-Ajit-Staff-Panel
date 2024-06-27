import React from 'react'
import './PendingEMI.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const PendingEMI = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 2,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 3,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 4,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },

        {
            id: 5,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 6,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 7,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
        },
        {
            id: 8,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            EMIAmount: "58600",
            PenaltyAmount: "8000",
            DatePayment: '05-05-2024',
            LeftDaysCount: '08',
            MobileNumber: '9254856322',
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
                                <h6>Pending EMI’s</h6>
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


                        <div className='totalusers9'>
                            <div className='totalusers10'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Loan ID</th>
                                            <th>Customer Name</th>
                                            <th>EMI Amount</th>
                                            <th>Penalty Amount</th>
                                            <th>Date of Payment</th>
                                            <th>Left Days Count</th>
                                            <th>Mobile Number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.LoanID}</td>
                                                <td>{data.CustomerName}</td>
                                                <td>{data.EMIAmount}</td>
                                                <td>{data.PenaltyAmount}</td>
                                                <td>{data.DatePayment}</td>
                                                <td>{data.LeftDaysCount}</td>
                                                <td>{data.MobileNumber}</td>
                                                <td className='totalusers11'><MdRemoveRedEye color='#1C1B1F' size={20} onClick={() => navigate('/userdetail')} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}

export default HOC(PendingEMI)