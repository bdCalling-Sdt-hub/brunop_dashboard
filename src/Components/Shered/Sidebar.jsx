import { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CiLogout, } from "react-icons/ci";
import logo  from "../../../src/assets/images/logo.png"
import { RiCustomerServiceLine, RiDashboard3Line, RiProductHuntLine, RiUser2Line } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdFormatListNumbered, MdOutlineFeedback } from 'react-icons/md';
import { LiaIdCard } from 'react-icons/lia';

const Sidebar = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // const admin = false;

    const links = [
        {
            path: '/',
            label: 'Dashboard',
            icon: <RiDashboard3Line size={22}  />,
            sub_menu: false
        },

        {
            path: '/order-manage',
            label: 'Order Manage',
            icon:<MdFormatListNumbered size={22}  />,
            sub_menu: false
        },
        {
            path: '/product-manage',
            label: 'Product Manage',
            icon:<RiProductHuntLine size={22}  />,
            sub_menu: false
        },
        {
            path: '/feedback',
            label: 'Feedback',
            icon:<MdOutlineFeedback  size={22}  />,
            sub_menu: false
        },
        
        {
            path: '/customer-manage',
            label: 'Customer Manage',
            icon:<RiCustomerServiceLine  size={22}  />,
            sub_menu: false
        },
        {
            path: '/manager-manage',
            label: 'Manager Mange',
            icon:<RiUser2Line  size={22}  />,
            sub_menu: false
        },
        {
            path: '/banner-manage',
            label: 'Banner Mange',
            icon:<LiaIdCard  size={22}  />,
            sub_menu: false
        },
        {
            path: '/premium-user',
            label: 'Premium User',
            icon:<LiaIdCard  size={22}  />,
            sub_menu: false
        },
       

        {
            path: '#',
            label: 'Settings',
            icon: <IoSettingsOutline size={22}   />,
            sub_menu: [
                {
                    path: '/profile',
                    label: 'Profile',
                    icon: <></>,
                },
                {
                    path: '/terms',
                    label: 'Terms & Condition',
                    icon: <></>,
                },
                {
                    path: '/privacy-policy',
                    label: 'Privacy policy',
                    icon: <></>,
                },
                


            ]
        },


    ]

    const handleLogOut = () => {
        localStorage.removeItem('token')
            navigate("/auth/login");
    }
    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
        }
        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);
    return (
        <div id='sidebar' className=' w-full h-full '>
            <div className="log mb-5 w-full  bg-white">
                <Link to={`/`}><img src={logo} alt="Logo" className='w-[80%] mx-auto  h-[100px]' /></Link>
            </div>

            <div className='start-start flex-col gap-4 mt-5 text-black '>
                {
                    links.map((item, index) => {
                        const isActive = item.path === pathname;
                        const isSubMenuActive = item.sub_menu && item.sub_menu.some(subItem => subItem.path === pathname);
                        if (item?.sub_menu) {
                            return (
                                <div key={index} className='w-full mt-5 relative'>
                                    {
                                        isSubMenuActive ? <div className='absolute left-0  bg-[#6A6A6A] h-[38px] w-2  ' style={{
                                            borderRadius: "0 10px 10px 0",
                                        }}>
                                        </div> : ''
                                    }
                                    <div
                                        onClick={() => toggleAccordion(index)}
                                        className={`start-center ml-10 gap-2 w-full py-2 px-4  cursor-pointer ${isSubMenuActive ? "text-black bg-white " : "bg-[#8D8D8D]"}`}
                                    >
                                         {item?.icon}
                                        {item?.label}
                                        <IoIosArrowForward />
                                    </div>

                                    <div
                                        ref={(el) => (contentRefs.current[index] = el)}
                                        className='accordion-content ml-10 overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer mt-1'
                                        style={{
                                            maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                        }}
                                    >
                                        {
                                            item?.sub_menu?.map((sub_item, subIndex) => {
                                                const isSubItemActive = sub_item.path === pathname;

                                                return (
                                                    <NavLink
                                                        to={sub_item?.path}
                                                        key={subIndex}
                                                        className={`start-center px-5 gap-2 w-full py-2 cursor-pointer  ${isSubItemActive ? " bg-white mt-1" : "bg-[#8D8D8D] mt-1"}`}
                                                    >
                                                        {sub_item?.icon}
                                                        {sub_item?.label}
                                                    </NavLink>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        } else {

                            return (

                                <div className='w-full relative'>
                                    {
                                        isActive ? <div className='absolute left-0 mt-5 bg-[#6A6A6A] h-[38px] w-2  ' style={{
                                            borderRadius: "0 10px 10px 0",
                                        }}>
                                        </div> : ''
                                    }
                                    <NavLink
                                        key={index}
                                        className={`mt-4 start-center ml-10  gap-2 w-full py-2 px-4 cursor-pointer  ${isActive ? " bg-white" : "bg-[#8D8D8D]"}`}
                                        to={item?.path}
                                    >
                                        { item?.icon}
                                        {item?.label}
                                    </NavLink>

                                </div>
                            );
                        }
                    })
                }
            </div>



           


            <div
                onClick={handleLogOut}
                className="flex text-[4E4E4E]  items-center bg-[#6A6A6A] gap-3 text-white ml-10 cursor-pointer px-6 hover:bg-white-500 py-2 mt-32 transition-all"
            >
                <CiLogout size={24} color="text-[4E4E4E]" />
                Log Out
            </div>


        </div >
    )
}

export default Sidebar
