import { Avatar, Select, Table } from 'antd'
import React, { useState } from 'react'
import user from '../../assets/images/user02.png'
import user1 from '../../assets/images/user03.png'
const PaymentUser = () => {
    const data = [
        {
            key: "1",
            name: "Giring Furqan",
            email: "jennings@example.com",
            location: "3890 Poplar Dr.",
            status: "Unpaid",
            image: user1,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "2",
            name: "John-W-BOSTON",
            email: "mitc@example.com",
            location: "3605 Parker Rd.",
            status: "Unpaid",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "3",
            name: "Yanto Jericho",
            email: "immons@example.com",
            location: "8558 Green Rd.",
            status: "Unpaid",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "4",
            name: "Lukman Farhan",
            email: "hill@example.com",
            location: "775 Rolling Green Rd.",
            status: "Unpaid",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "5",
            name: "Dimas Kamal",
            email: "lawson@example.com",
            location: "775 Rolling Green Rd.",
            status: "Unpaid",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "6",
            name: "Hari Danang",
            email: "baker@example.com",
            location: "8080 Railroad St.",
            status: "Unpaid",
            image: user1,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "7",
            name: "Alan Marcus",
            email: "hanson@example.com",
            location: "8558 Green Rd.",
            status: "Activate",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "8",
            name: "Yanto Jericho",
            email: "curtis@example.com",
            location: "775 Rolling Green Rd.",
            status: "Unpaid",
            image: user1,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "9",
            name: "Giring Furqan",
            email: "reid@example.com",
            location: "7529 E. Pecan St.",
            status: "Unpaid",
            image: user,
            order : "12",
            amount : "$125.00"
        },
        {
            key: "10",
            name: "Giring Furqan",
            email: "info@gmail.com",
            location: "775 Rolling Green Rd.",
            status: "Unpaid",
            image: user1,
            order : "12",
            amount : "$125.00"
        },
    ];



    const [selectedValue, setSelectedValue] = useState(null); 

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
                    <img src={record.image} size="small" style={{ marginRight: 10 }} />
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
            title: "Order",
            dataIndex: "order",
            key: "order",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
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
                        
                    </div>
                )
            }

        },
    ];
  return (
    <div>
            
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

export default PaymentUser