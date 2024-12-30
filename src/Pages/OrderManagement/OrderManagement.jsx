import React, { useState } from 'react'
import { Input, Pagination, Select, Table, Tag } from "antd";
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { useGetAllOrderQuery, useUpdateOrderStatusMutation } from '../../redux/Api/OrderManageApi';
import { toast } from 'sonner';
const { Option } = Select;
const OrderManagement = () => {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const { data: getAllOrder } = useGetAllOrderQuery({ page, searchTerm })
    const [updateStatus] = useUpdateOrderStatusMutation()






    const dataSource = getAllOrder?.data?.result?.map((order, i) => {
        // console.log(order);
        return (
            {
                key: i + 1,
                id: order?._id,
                email: order?.user?.name,
                type: order?.user?.customerType,
                items: order?.items?.map(item => item?.quantity),
                price: order?.total_amount,
                date: order?.updatedAt?.split('T')[0],
                status: order?.status,
            }
        )
    })


    const handleChangeOrderStatus = (orderId, status) => {
        const data = {
            orderId, status
        }
        updateStatus(data).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));
    }

    const columns = [
        {
            title: "Serial No",
            dataIndex: "key",
            key: "key",
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
            title: "Order Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                // let color = "#7CC84E";
                // if (status === "Pending") color = "#EFEEF6";
                // if (status === "Shipping") color = "#D6EEC8";
                // if (status === "Processing") color = "#E6E5F1";
                // if (status === "Packing") color = "#CCC9E2";
                return (
                    <div className=''>
                        <Select
                            value={record?.status}
                            onChange={(newStatus) => handleChangeOrderStatus(record?.id, newStatus)}
                            className={`rounded-md py-1 px-1 `}
                        >
                            <Option value="Pending">Pending</Option>
                            <Option value="Processing">Processing</Option>
                            <Option value="Shipping">Shipping</Option>
                            <Option value="Delivered">Delivered</Option>
                            <Option value="Cancelled">Cancelled</Option>
                        </Select>
                    </div>
                )

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
                <Input onChange={(e) => setSearchTerm(e.target.value)} className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>
            <div className="table-container" style={{ padding: "20px" }}>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
                <div className='mt-5 mx-auto flex justify-center'>
                    <Pagination
                        onChange={(page) => setPage(page)}
                        total={getAllOrder?.data?.meta?.total}
                        pageSize={getAllOrder?.data?.meta?.limit}
                    />

                </div>
            </div>
        </div>
    )
}

export default OrderManagement