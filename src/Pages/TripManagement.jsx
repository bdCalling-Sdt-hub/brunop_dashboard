import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Table, Avatar, Tag, Space } from 'antd';
import img from '../assets/images/use4.png'
import img2 from '../assets/images/user03.png'
const TripManagement = () => {
    const data = [
        {
            key: '1',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img,
            hostName: 'Md.Nazmul Hoque',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img2,
            price: '$120.00',
            carName: 'Volkswagen Beetle',
            location: 'Kent, Utah',
            status: 'completed',
        },
        {
            key: '2',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img2,
            hostName: 'Farhanur Rahman',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img,
            price: '$120.00',
            carName: 'Seat Tarraco',
            location: 'Great Falls, Maryland',
            status: 'ongoing',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img2,
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img,
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'Requested',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img,
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img2,
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'canceled',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img,
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img2,
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'ongoing',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: img2,
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: img,
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'completed',
        },
    ];



    const columns = [
        {
            title: 'S no.',
            dataIndex: 'serialNo',
            key: 'serialNo',
        },
        {
            title: 'Renter Name',
            dataIndex: 'renterName',
            key: 'renterName',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record.renterAvatar} alt={record.renterName} />
                    <div style={{ marginLeft: '10px' }}>
                        <div>{record.renterName}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.renterPhone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Hosts Name',
            dataIndex: 'hostName',
            key: 'hostName',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record.hostAvatar} alt={record.hostName} />
                    <div style={{ marginLeft: '10px' }}>
                        <div>{record.hostName}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.hostPhone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
        {
            title: 'Car Name',
            dataIndex: 'carName',
            key: 'carName',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
               
                <div>
                    {
                        status == "completed" && <button className='bg-[#34C759] text-white px-4 py-2 rounded-md'>Completed</button>
                    }
                    {
                        status == "ongoing" && <button className='bg-[#73A5C6] text-white px-5 py-2 rounded-md'>Ongoing</button>
                    }
                    {
                        status == "canceled" && <button className='bg-[#E3503E] text-white px-5 py-2 rounded-md'>Canceled</button>
                    }
                    {
                        status == "Requested" && <button className='bg-[#F3A638] text-white px-4 py-2 rounded-md' >Requested</button>
                    }
                   
                    
                </div>
            ),
        },
    ];
    return (
        <div className='bg-white rounded-md  p-5'>

            <Link to={-1} className='flex items-center gap-2'> <GoArrowLeft />Trip Management</Link>

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

export default TripManagement