import { Avatar, Input, Radio, Select, Table } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const CustomerManager = () => {
    const [isPremium, setIsPremium] = useState(true)
    const data = [
        {
            key: "1",
            name: "Giring Furqan",
            email: "jennings@example.com",
            location: "3890 Poplar Dr.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "2",
            name: "John-W-BOSTON",
            email: "mitc@example.com",
            location: "3605 Parker Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "3",
            name: "Yanto Jericho",
            email: "immons@example.com",
            location: "8558 Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "4",
            name: "Lukman Farhan",
            email: "hill@example.com",
            location: "775 Rolling Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "5",
            name: "Dimas Kamal",
            email: "lawson@example.com",
            location: "775 Rolling Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "6",
            name: "Hari Danang",
            email: "baker@example.com",
            location: "8080 Railroad St.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "7",
            name: "Alan Marcus",
            email: "hanson@example.com",
            location: "8558 Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "8",
            name: "Yanto Jericho",
            email: "curtis@example.com",
            location: "775 Rolling Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "9",
            name: "Giring Furqan",
            email: "reid@example.com",
            location: "7529 E. Pecan St.",
            status: "Activates",
            image: "https://via.placeholder.com/40",
        },
        {
            key: "10",
            name: "Giring Furqan",
            email: "info@gmail.com",
            location: "775 Rolling Green Rd.",
            status: "Deactivate",
            image: "https://via.placeholder.com/40",
        },
    ];



    const [selectedValue, setSelectedValue] = useState(null);


    // Handle sent request function
    const handleSendRequest = () => {
        setOpenModal(true)
    }

    const handleChange = (value) => {
        setSelectedValue(value);
    };

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "User Name",
            dataIndex: "name",
            key: "name",
            render: (name, record) => (
                <div className="flex items-center">
                    <Avatar src={record.image} size="small" style={{ marginRight: 10 }} />
                    {name}
                </div>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Sent Request",
            dataIndex: "sentRequest",
            key: "sentRequest",
            render: (_, record) => {
                return (
                    <>
                        <button className='bg-black text-white px-2 py-1 rounded-md' onClick={() => handleSendRequest()}>Send request</button>
                    </>
                )
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                return (
                    <div className='flex '>
                        <div className={`text-center py-1 w-[50%] rounded-sm ${record?.status === 'Deactivate'
                            ? 'bg-[#FEE2E2] text-[#EF4444]'
                            : 'bg-[#EBF7E4] text-[#7CC84E]'
                            }`}>{record?.status}</div>
                        <Select
                            onChange={handleChange}
                            value={null}
                            style={{ width: 35 }}
                            dropdownStyle={{ width: 100 }}
                            options={[
                                { value: 'active', label: 'Active' },
                                { value: 'deactivate', label: 'Deactivate' },
                            ]}
                            placeholder=" "
                        />
                    </div>
                )
            }

        },
    ];

   
    const handlePremiumUser = (e) => {
        setIsPremium(e.target.value === "premium"); 
    };
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Premium User Management

                </div>
                <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>
            <div className='px-5'>
                <div className='px-5'>
                    <Radio.Group
                        onChange={handlePremiumUser}
                        value={isPremium ? "premium" : "user"} 
                    >
                        <Radio value="premium">Premium User</Radio>
                        <Radio value="user">User</Radio>
                    </Radio.Group>
                </div>
            </div>

            <div style={{ padding: "20px" }}>

                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                />
            </div>


        </div>
    )
}

export default CustomerManager