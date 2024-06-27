import React from 'react'
import './Sidebar.css'
import { AiOutlineProduct } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { PiCalculator } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TbIndentDecrease } from 'react-icons/tb';
import { IoMdLogOut } from "react-icons/io";



const Sidebar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
        {
            text: 'Dashboard',
            link: '/dashboard',
            icon: <RiDashboardLine size={23} />
        },
        {
            text: 'New Application',
            link: '/newapplication',
            icon: <LuUser2 size={23} />
        },
        {
            text: 'Release Loan',
            link: '/users',
            icon: <MdPayment size={23} />
        },
        {
            text: 'EMI Collection',
            link: '/emicollection',
            icon: <PiCalculator size={23} />
        },

        {
            text: 'Pending EMI',
            link: '/pendingemi',
            icon: <FaChartBar size={23} />
        },
        {
            text: 'Wallet',
            link: '/wallet',
            icon: <LuWallet size={23} />
        },
        {
            text: 'Fraud Customers',
            link: '/fraud_customer',
            icon: <LuUser2 size={23} />
        },
        {
            text: 'Settings',
            link: '/settings',
            icon: <IoSettingsOutline size={23} />
        },
    ];
    return (
        <>
            <div className='sidebar'>
                <div className="sidebar3">
                    <TbIndentDecrease color="#00000" size={25} onClick={toggleSidebar} />
                </div>
                <div className='sidebar23'>
                    <h1>KRT FINANCE</h1>
                </div>
                <div className='sidebar1'>
                    {sidebarItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className="sidebar-link"
                            activeClassName="active"
                        >
                            <div className='sidebar2'>
                                <span>{item.icon}</span>
                                <p>{item.text}</p>
                            </div>
                        </NavLink>
                    ))}

                    <NavLink
                        to='/'
                        className="sidebar-link11"
                        activeClassName="active"
                    >
                        <div className='sidebar22'>
                            <span><IoMdLogOut size={23} color='#F44336' /></span>
                            <p>Logout</p>
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Sidebar