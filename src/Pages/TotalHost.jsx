import React from 'react';
import { Table, Avatar, Space, Input } from 'antd';
import { EyeOutlined, StopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsArrowLeftShort } from 'react-icons/bs';
import img1 from '../assets/images/use4.png'
import img2 from '../assets/images/user02.png'
// import img3 from '../assets/images/use03.png'
const TotalHost = () => {
    const data = [
        {
            key: '1',
            serialNo: '#12333',
            name: 'Ashiqur Rahman',
            phone: '08+ 123 456 789',
            avatar: img1,
            car: 10,
            totalTrip: 125,
            email: 'bockelboy@att.com',
            location: 'Kent, Utah',
        },
        {
            key: '2',
            serialNo: '#12333',
            name: 'Hasibur Rashid Mah',
            phone: '08+ 123 456 789',
            avatar: img2,
            car: 10,
            totalTrip: 252,
            email: 'csilvers@verizon.com',
            location: 'Great Falls, Maryland',
        },
        // Add more data objects here
    ];

    const columns = [
        {
            title: 'S no.',
            dataIndex: 'serialNo',
            key: 'serialNo',
            render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={record.avatar} className='h-10' alt={record.name} />
                    <div style={{ marginLeft: '10px' }}>
                        <div>{record.name}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.phone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Car',
            dataIndex: 'car',
            key: 'car',
            align: 'center',
        },
        {
            title: 'Total Trip',
            dataIndex: 'totalTrip',
            key: 'totalTrip',
            align: 'center',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Link to={'/total-host/:id'}><EyeOutlined  style={{ fontSize: '18px', cursor: 'pointer' }} /></Link>
                    <StopOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
                </Space>
            ),
        },
    ];

    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Total Host

                </div>
                <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 10,
                    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                    showSizeChanger: false,
                }}
                rowKey="key"
            />
        </div>
    )
}

export default TotalHost