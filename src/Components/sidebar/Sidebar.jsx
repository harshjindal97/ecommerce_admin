import React from 'react'
import logo from '../../assets/images/Clean Elegant Typography Brand Logo.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className='sidebar fixed top-0 left-0 w-[18%] z=[100] h-[100%]'>
            <Link to='/'>
                <div className='imgWrapper'>
                    <img src={logo} className='w-100' alt='' />
                </div>
            </Link>
            <div className="sidebarTab">
                <ul className='list'>
                    <li className='list list-item'>
                        <Button className='w-100 text-dark sidebarButton'>
                            <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdOutlineDashboard />
                            </span>
                            Dashboard
                        </Button>
                    </li>
                    <li>
                        <Link to='/productUpload'>
                        <Button className='w-100 text-dark sidebarButton'>
                            <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'><RiProductHuntLine />
                            </span>
                            Products
                            <span className='ml-auto'><FaAngleRight />
                            </span>
                        </Button></Link>
                        <div className='submenu'>
                            <Button className='w-100'>
                                <span className='dot'>.</span>
                                products
                            </Button>
                        </div>
                    </li>
                    <li>
                        <Button className='w-100 text-dark sidebarButton'>
                            <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdOutlineBorderColor />
                            </span>
                            Orders
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100 text-dark sidebarButton'>
                            <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'><MdOutlineMessage />
                            </span>
                            Messages
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100 text-dark sidebarButton'>
                            <span className='icon w-[25px] h-[25px] flex items-center justify-center rounded-md'><RiProductHuntLine />
                            </span>
                            Settings
                        </Button>
                    </li>
                </ul>





            </div>
        </div>
    )
}

export default Sidebar
