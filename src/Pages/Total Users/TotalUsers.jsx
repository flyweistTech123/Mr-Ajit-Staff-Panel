import React from 'react'
import './TotalUsers.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";


const TotalUsers = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Pending',
        },
        {
            id: 2,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '0',
            PaidAmount: '10000',
            Status: 'Completed',
        },
        {
            id: 3,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Active',
        },
        {
            id: 4,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Delinquency',
        },

        {
            id: 5,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Pending',
        },
        {
            id: 6,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Pending',
        },
        {
            id: 7,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Pending',
        },
        {
            id: 8,
            LoanID: 'KRT1420',
            CustomerName: "John Due",
            Product: "VIVO",
            MobileNumber: "854695235",
            LoanAmount: '25000',
            PendingAmount: '15000',
            PaidAmount: '10000',
            Status: 'Pending',
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
                                <h6>Total Users</h6>
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
                                            <th>Paid Amount</th>
                                            <th>Status</th>
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
                                                <td>{data.PaidAmount}</td>
                                                <td>
                                                    <div className='totalusers12'>
                                                        <div className='totalusers13' style={{ backgroundColor: data.Status === 'Pending' ? '#FFA500' : data.Status === 'Completed' ? '#2196F3' :  data.Status === 'Active' ? '#25BC18': '#F44336' }}>
                                                            {data.Status}
                                                        </div>
                                                    </div>
                                                </td>
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

export default HOC(TotalUsers)