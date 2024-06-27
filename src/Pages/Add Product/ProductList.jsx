import React from 'react'
import './AddProduct.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';


import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const ProductList = () => {
    const navigate = useNavigate()
    const tabledata = [
        {
            id: 1,
            ReleaseDate: '13-05-2024',
            ProductID: "#14001",
            IMEINo: "234587514563258",
            ProductName: "John Doe",
            CompanyName: "Xiaomi",
            Price: "29874",
        },
        {
            id: 2,
            ReleaseDate: '13-05-2024',
            ProductID: "#14001",
            IMEINo: "234587514563258",
            ProductName: "John Doe",
            CompanyName: "Xiaomi",
            Price: "29874",
        },
        {
            id: 3,
            ReleaseDate: '13-05-2024',
            ProductID: "#14001",
            IMEINo: "234587514563258",
            ProductName: "John Doe",
            CompanyName: "Xiaomi",
            Price: "29874",
        },
        {
            id: 4,
            ReleaseDate: '13-05-2024',
            ProductID: "#14001",
            IMEINo: "234587514563258",
            ProductName: "John Doe",
            CompanyName: "Xiaomi",
            Price: "29874",
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
                                <h6>Product List</h6>
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
                                <div className='productlist' onClick={() => navigate('/addproduct')}>
                                    <IoMdAdd color='#FFFFFF' size={20} />
                                    <p>Add Product</p>
                                </div>
                            </div>
                        </div>


                        <div className='totalusers9'>
                            <div className='totalusers10'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Release Date</th>
                                            <th>Product ID</th>
                                            <th>IMEI No.</th>
                                            <th>Product Name</th>
                                            <th>Company Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.ReleaseDate}</td>
                                                <td>{data.ProductID}</td>
                                                <td>{data.IMEINo}</td>
                                                <td>{data.ProductName}</td>
                                                <td>{data.CompanyName}</td>
                                                <td>{data.Price}</td>
                                                <td><MdRemoveRedEye color='#1C1B1F' size={20} /></td>
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

export default HOC(ProductList)