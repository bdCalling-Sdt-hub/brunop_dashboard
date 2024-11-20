import { Button, Input, Table } from 'antd'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import img from '../../assets/images/prod1.jpg'
import img2 from '../../assets/images/prod2.jpg'
const ProductManage = () => {
    const dataSource = [
        {
            key: "1",
            id: "#12333",
            name: "Central Shaft",
            weight: "500-600gm",
            price: 15,
            store: 500,
            status: "Available",
            image: img2, // Replace with real image URLs
        },
        {
            key: "2",
            id: "#12334",
            name: "Door Panels",
            weight: "500-600gm",
            price: 15,
            store: 50,
            status: "Unavailable",
            image: img,
        },
        {
            key: "3",
            id: "#12335",
            name: "Canopy",
            weight: "500-600gm",
            price: 15,
            store: 300,
            status: "Available",
            image:img2,
        },
        {
            key: "4",
            id: "#12336",
            name: "Bearings",
            weight: "500-600gm",
            price: 15,
            store: 2,
            status: "Short Stock",
            image:img,
        },
        {
            key: "5",
            id: "#12337",
            name: "Brush Strips",
            weight: "500-600gm",
            price: 15,
            store: 500,
            status: "Available",
            image: img2,
        },
    ];

    const columns = [
        {
            title: "Serial no.",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Products Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div className="flex items-center space-x-2">
                    <img
                        src={record.image}
                        alt={text}
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "4px",
                        }}
                    />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: "Weight",
            dataIndex: "weight",
            key: "weight",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$ ${price}`,
        },
        {
            title: "Store",
            dataIndex: "store",
            key: "store",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = "#EBF7E4";
                if (status === "Unavailable") color = "#FFCCCC";
                if (status === "Short Stock") color = "#D6D5E6"; 

                return (
                    <Button
                        style={{
                            backgroundColor: color,
                            color: status === "Available" ? "#7CC84E" : "#000", 
                            border: "none",
                            // borderRadius: "4px",
                            padding: "4px 12px",
                        }}
                    >
                        {status}
                    </Button>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <div className="flex gap-5 space-x-2">
                    <Link to={'/product-manage/:id'}
                       className='border-none'
                    >
                        <CiEdit size={25} />
                    </Link>
                    <p
                       className='border-none' 
                    >
                        <RiDeleteBin6Line size={25} />
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className='bg-white p-2 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Product Management

                </div>
                <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>
            <div className="table-container" style={{ padding: "20px" }}>
                <div className="flex  gap-5  items-center mb-4">
                    <div className='border-r-2 pr-2'>
                        <strong>Total Products:</strong> All (160)
                    </div>
                    <div>
                        <strong>Publish:</strong> (16)
                    </div>
                </div>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                />
            </div>
        </div>
    )
}

export default ProductManage