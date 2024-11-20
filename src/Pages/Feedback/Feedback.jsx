import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Feedback = () => {
    const dataSource = [
        {
            key: "1",
            name: "Jullu Jalal",
            description: "Our Bachelor of Commerce program is ACBSP-accredited.",
            time: "8:38 AM",
            status: "Pending",
        },
        {
            key: "2",
            name: "Jullu Jalal",
            description: "Our Bachelor of Commerce program is ACBSP-accredited.",
            time: "8:38 AM",
            status: "Replied",
        },
        // Repeat as necessary
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = "blue";
                if (status === "Replied") color = "green";

                return (
                    <div>
                        <Button
                            type="text"
                            icon={<FaReply />}
                            style={{
                                backgroundColor: color === "blue" ? "#E6E5F1" : "#E6F4EA",
                                color: color === "blue" ? "#4A3AFF" : "#31A24C",
                                fontWeight: "bold",
                                padding: "4px 8px",
                                borderRadius: "4px",
                            }}
                        >
                            {status}
                        </Button>
                        {/* <Button
                            type="text"
                            icon={<DeleteOutlined />}

                        /> */}
                    </div>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Button
                    type="text"
                    icon={<DeleteOutlined />}

                />
            ),
        },
    ];

    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Feedback

                </div>

            </div>
            <div className="table-container" style={{ padding: "20px" }}>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                />
            </div>
        </div>
    )
}

export default Feedback