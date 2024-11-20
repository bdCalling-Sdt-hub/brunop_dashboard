import { Input } from 'antd'
import React from 'react'
import { CiMail, CiSearch } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='bg-white p-5 rounded-md'>
            <div className='flex  justify-between items-center'>
                <Link to={-1} className='flex items-center gap-2'> <GoArrowLeft />Contact Us</Link>
                {/* <Input className="h-10 max-w-[250px]" prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." /> */}
            </div>
            <div className='flex items-center justify-between max-w-5xl mx-auto mt-20'>
                <div className='space-y-5'>
                    <p className='flex items-center gap-2'><FiPhone size={22} /> Call To Us</p>
                    <Input placeholder='+999999999' />
                    <Input placeholder='+999999999' />
                </div>
                <div className='space-y-5'>
                    <p className='flex items-center gap-2'>
                        <CiMail size={22} /> Write To Us</p>
                    <Input placeholder='example@gmail.com' />
                    <Input  placeholder='example@gmail.com' />
                </div>

            </div>
            <div className='flex items-center justify-center mt-[45vh]'>
                <button className='bg-black text-white px-10 py-3 '>Save</button>
            </div>
        </div>
    )
}

export default ContactUs