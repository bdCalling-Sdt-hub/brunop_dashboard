import { Button, DatePicker, Dropdown, Input, Tabs } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import AddPremiumModal from '../../Components/AddPremiumModal/AddPremiumModal'
import PremiumUserTable from '../../Components/PremiumUserTable/PremiumUserTable'
import PaymentUser from '../../Components/PaymentUser/PaymentUser'
// import img from '../../assets/images'
import dayjs from "dayjs";
import { CalendarOutlined } from '@ant-design/icons'
const PremiumUser = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [tab, setTab] = useState('user')

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [visible, setVisible] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setVisible(false);
    };

    const calendarContent = (
        <div>
            <DatePicker
                open={true}
                value={selectedDate}
                onChange={handleDateChange}
                fullscreen={false}
                style={{ padding: "10px" }}
            />
        </div>
    );


    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-2" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Banner Management
                </div>
                <div className='flex gap-10 items-center '>
                    <Input className='min-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
                    {
                        tab === "user" && <button onClick={() => setOpenAddModal(true)} className='w-full bg-black  text-white px-4 py-2 rounded-sm flex items-center gap-2'>Add Premium User <IoMdAdd /></button> 
                    }
                </div>
            </div>
            <div className='flex items-center gap-2 '>
                <p className={`${tab === "payment" ? "bg-black text-white rounded-md shadow-md" : ""} cursor-pointer  px-4 py-2 border-black rounded-md border `} onClick={() => setTab('payment')}>Payment</p>
                <p className={`cursor-pointer ${tab === "user" ? "bg-black text-white rounded-md shadow-md" : ""}  px-4 py-2 border-black rounded-md border `} onClick={() => setTab('user')}>User</p>
            </div>
            {
                tab === "user" ? <PremiumUserTable /> : <PaymentUser />
            }
            <AddPremiumModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} modalName={"Add Premium User"} />
        </div>
    )
}

export default PremiumUser