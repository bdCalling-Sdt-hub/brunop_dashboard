import { ArrowLeftOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/car4.png'
import img2 from '../assets/images/car6.png'
import img7 from '../assets/images/car8.png'
import img8 from '../assets/images/car9.png'
import img9 from '../assets/images/car12.png'
import img10 from '../assets/images/car13.png'
import img11 from '../assets/images/car11.png'
import img12 from '../assets/images/car10.png'
import { GrLocation } from 'react-icons/gr'
import { CiImageOn } from 'react-icons/ci'
import { MdOutlineDirectionsCar, MdOutlineDoorBack } from 'react-icons/md'
import { RiBriefcase3Line } from 'react-icons/ri'
import { Modal } from 'antd'

const HostDetails = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='bg-white p-5  rounded-md'>
            <p> <Link to={-1}><ArrowLeftOutlined /></Link> Host Details</p>
            <div className='mt-10 flex items-center gap-5'>
                <img src={img} className='rounded-full w-20 h-20' alt="" />
                <div>
                    <p className='text-xl font-lora'>MD : Hasan Islam</p>
                    <div className='text-sm space-y-1 mt-4' >
                        <p >Contact Number : +12 963 147 8552</p>
                        <p>Email : mstkhushiakter333@gmail.com</p>
                        <p>Location : London , UK</p>
                        {/* <p>Location : London , UK</p> */}
                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <p>Total Car</p>
                <div className='flex items-center justify-between bg-[#F6F6F6]  hover:bg-[#EBEBEB] p-4 mt-5 rounded-md'>
                    <p>S.n 01</p>
                    <img src={img2} alt="" />
                    <div>
                        <p>Mercedes-Benz E-Class 2017</p>
                        <p>luxury car</p>
                    </div>
                    <p className='flex items-center gap-2'><GrLocation />London</p>
                    <p>Total Trip: 120</p>
                    <div className='text-[#1E3F66]'>
                        <p>Price</p>
                        <p>£207.00/per day</p>
                    </div>
                    <p onClick={() => setOpenModal(true)} className='flex items-center gap-2 bg-white px-4 py-2 cursor-pointer'> <CiImageOn />View 12 photos</p>
                </div>
                <div className='flex items-center justify-between bg-[#F6F6F6]  hover:bg-[#EBEBEB] p-4 mt-5 rounded-md'>
                    <p>S.n 01</p>
                    <img src={img2} alt="" />
                    <div>
                        <p>Mercedes-Benz E-Class 2017</p>
                        <p>luxury car</p>
                    </div>
                    <p className='flex items-center gap-2'><GrLocation />London</p>
                    <p>Total Trip: 120</p>
                    <div className='text-[#1E3F66]'>
                        <p>Price</p>
                        <p>£207.00/per day</p>
                    </div>
                    <p className='flex items-center gap-2 bg-white px-4 py-2 cursor-pointer'> <CiImageOn />View 12 photos</p>
                </div>
                <div className='flex items-center justify-between bg-[#F6F6F6]  hover:bg-[#EBEBEB] p-4 mt-5 rounded-md'>
                    <p>S.n 01</p>
                    <img src={img2} alt="" />
                    <div>
                        <p>Mercedes-Benz E-Class 2017</p>
                        <p>luxury car</p>
                    </div>
                    <p className='flex items-center gap-2'><GrLocation />London</p>
                    <p>Total Trip: 120</p>
                    <div className='text-[#1E3F66]'>
                        <p>Price</p>
                        <p>£207.00/per day</p>
                    </div>
                    <p className='flex items-center gap-2 bg-white px-4 py-2 cursor-pointer'> <CiImageOn />View 12 photos</p>
                </div>


                <div className='flex  justify-between items-center mt-20 px-5'>
                    <div className='col-span-6 '>
                        <p className='font-medium text-xl'>Mercedes-Benz E-Class 2017</p>
                        <div className='mt-10 flex items-center gap-10'>
                            <p className='bg-[#EBEBEB] inline-block px-5 py-2 rounded-full'>luxury car</p>
                            <p className='flex items-center gap-1'><GrLocation />London</p>
                        </div>
                        <p className='mt-5'>Discount 30%</p>
                        <p className='mt-5'>Total Trip: 120</p>
                        <p className='mt-5'>£40/day</p>
                        <div className='flex items-center gap-5 mt-10'>
                            <p className='flex items-center gap-1'><MdOutlineDirectionsCar /> 4 Passenger</p>
                            <p className='flex items-center gap-1'> <MdOutlineDoorBack />4 Door</p>
                            <p className='flex items-center gap-1'><RiBriefcase3Line />4 Bags</p>
                            <p className='flex items-center gap-1'><RiBriefcase3Line />Auto</p>
                        </div>
                        <p className='my-8 font-medium text-xl'>Description :</p>
                        <p className='max-w-[50%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you See more...</p>
                        <p className='py-8'>Delivery Location :</p>
                        <p>PICKUP AT CAR LOCATION</p>
                    </div>

                    <div className='col-span-6  w-full text-[#272121]'>
                        <div className='font-normal tex-[16px] space-y-2'>
                            <p>Driver’s license number</p>
                            <p>23526 6256 3526546</p>
                        </div>
                        <div className='flex items-center gap-10 mt-10'>
                            <div>
                                <p>maximum travel distance for one day</p>
                                <p className='text-sm'>4652Km</p>
                            </div>
                            <div>
                                <p>Per kilometer charge after crossing maximum distance  </p>
                                <p className='text-sm'>£521</p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p>User Name </p>
                            <p className='text-sm'>MD Hassan</p>
                        </div>
                        <div className='mt-10'>
                            <p>License Expiration date </p>
                            <p className='text-sm'>05/12/2021</p>
                        </div>
                        <div className='mt-10'>
                            <p>License Date of birth </p>
                            <p className='text-sm'>05/12/2021</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-5 mt-5 px-5 mb-10'>
                    <div className='border border-gray-100 p-4'>
                        <p>New York City, USA</p>
                        <p>Population: 8.4 million</p>
                        <p>Known for: Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                    </div>
                    <div className='border border-gray-100 p-4'>
                        <p>Tokyo, japan</p>
                        <p>Population: 8.4 million</p>
                        <p>Known for: Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                    </div>
                    <div className='border border-gray-100 p-4'>
                        <p>Paris France</p>
                        <p>Population: 8.4 million</p>
                        <p>Known for: Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                    </div>
                </div>


            </div>

            <Modal width={800} centered footer={false} open={openModal}  onCancel={() => setOpenModal(false)} >
                <p className='text-center font-medium text-xl mb-5'>All Images</p>
                <div className='flex items-center gap-5'>
                    <div className='space-y-5'>
                        <img src={img10} className='h-52 w-full' alt="" />
                        <img className='h-52 w-full' src={img11} alt="" />
                        <img className='h-52 w-full' src={img7} alt="" />
                    </div>
                    <div className='space-y-5'>
                        <img className='h-52 w-full' src={img9} alt="" />
                        <img className='h-52 w-full' src={img8} alt="" />
                        <img className='h-52 w-full' src={img12} alt="" />

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HostDetails