import { Input, Table } from 'antd'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Transaction = () => {



    const data = [
        {
            slNo : '12',
            userName : 'Grining Raqure',
            // image : ''
        }
    ]

    // Table Format
    const columns = [
        {
            title: 'S.No',
            dataIndex : 'slNo',
            key : 'slNo'
        },
        {
            title : 'User Name',
            dataIndex : 'userName',
            key : 'userName'
        },
        {
            title : 'Location',
            dataIndex : 'location',
            key : 'location'
        },
        {
            title : 'Order',
            dataIndex : 'order',
            key : 'order'
        },
        {
            title : 'Amount',
            dataIndex : 'amount',
            key : 'amount'
        },
        {
            title : 'User Name',
            dataIndex : 'userName',
            key : 'userName'
        },
        {
            title : 'Status',
            dataIndex : 'status',
            key : 'status'
        },
    ]
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Transaction
                </div>
                <div className='flex gap-10 items-center '>
                    <Input className='min-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />

                </div>
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default Transaction