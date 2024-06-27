import React from 'react'
import './FraudCustomer.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const FraudCustomer = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            LoanID: 'KRT1420',
            CustomerName: "John Doe",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: "25000",
            PendingAmount: "15000",
            LeftDaysCount: "3 Months",
        },
        {
            id: 2,
            LoanID: 'KRT1420',
            CustomerName: "John Doe",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: "25000",
            PendingAmount: "15000",
            LeftDaysCount: "3 Months",
        },
        {
            id: 3,
            LoanID: 'KRT1420',
            CustomerName: "John Doe",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: "25000",
            PendingAmount: "15000",
            LeftDaysCount: "3 Months",
        },
        {
            id: 4,
            LoanID: 'KRT1420',
            CustomerName: "John Doe",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: "25000",
            PendingAmount: "15000",
            LeftDaysCount: "3 Months",
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
                                <h6>Fraud Customer List Report</h6>
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
                                            <th>Product</th>
                                            <th>Mobile Number</th>
                                            <th>Loan Amount</th>
                                            <th>Pending Amount</th>
                                            <th>Left Days Count</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.LoanID}</td>
                                                <td>{data.CustomerName}</td>
                                                <td>{data.Product}</td>
                                                <td>{data.MobileNumber}</td>
                                                <td>{data.LoanAmount}</td>
                                                <td>{data.PendingAmount}</td>
                                                <td>{data.LeftDaysCount}</td>
                                                <td className='totalusers11'><MdRemoveRedEye color='#1C1B1F' size={20} onClick={() => navigate('/frauduser_Detail')} /></td>
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

export default HOC(FraudCustomer)