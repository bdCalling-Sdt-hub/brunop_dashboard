import React from 'react'
import { Input, Table, Tag } from "antd";
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
const OrderManagement = () => {
    const dataSource = [
        {
            key: "1",
            id: "#12333",
            email: "fahim@gmail.com",
            type: "Premium",
            items: 4,
            price: 15,
            date: "05/12/2024",
            status: "Shipped",
        },
        {
            key: "2",
            id: "#12334",
            email: "nadir@gmail.com",
            type: "Regular",
            items: 4,
            price: 15,
            date: "05/12/2024",
            status: "Shipping",
        },
        {
            key: "3",
            id: "#12335",
            email: "alamin@gmail.com",
            type: "Premium",
            items: 4,
            price: 15,
            date: "05/12/2024",
            status: "Processing",
        },
        {
            key: "4",
            id: "#12336",
            email: "jems@gmail.com",
            type: "Premium",
            items: 4,
            price: 10,
            date: "05/12/2024",
            status: "Packing",
        },
        {
            key: "5",
            id: "#12337",
            email: "bobi@gmail.com",
            type: "Premium",
            items: 4,
            price: 25,
            date: "05/12/2024",
            status: "Pending",
        },
    ];

    const columns = [
        {
            title: "Serial No",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "User Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "User Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Total Items",
            dataIndex: "items",
            key: "items",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$ ${price}`,
        },
        {
            title: "Delivery Time",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = "#7CC84E";
                if (status === "Pending") color = "#EFEEF6" ;
                if (status === "Shipping") color = "#D6EEC8";
                if (status === "Processing") color = "#E6E5F1";
                if (status === "Packing") color = "#CCC9E2";
               
            },
        },
    ];
    return (
        <div className='bg-white p-2 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Order Management

                </div>
                <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>
            <div className="table-container" style={{ padding: "20px" }}>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} />
            </div>
        </div>
    )
}

export default OrderManagement