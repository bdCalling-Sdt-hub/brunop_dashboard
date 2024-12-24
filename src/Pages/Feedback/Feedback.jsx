import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Table } from 'antd';
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useGetAllFeedBackQuery, useReplyFeedbackMutation } from '../../redux/Api/manageManagerApi';
import TextArea from 'antd/es/input/TextArea';
import { toast } from 'sonner';

const Feedback = () => {
    const [openModal, setOpenModal] = useState(false)
    const [feedback, setFeedback] = useState({})

    // ======== ALL API=======//
    const { data: getAllFeedback } = useGetAllFeedBackQuery()
    const [replyFeedback] = useReplyFeedbackMutation()


    const dataSource = getAllFeedback?.data?.map((feedback) => {
        return (
            {
                key: feedback?._id,
                name: feedback?.name,
                description: feedback?.message,
                time: feedback?.updatedAt?.split("T")[1]?.replace("Z", ""),
                status: feedback?.reply,
            }
        )
    })


    // Handle send feedback
    const onFinish = (value) => {
        const data = {
            feedbackId: feedback?.key,
            replyMessage: value?.replyMessage
        }

        replyFeedback(data).unwrap()
            .then((payload) => {
                toast.success(payload?.message)
                setOpenModal(false)
            })
            .catch((error) => toast.error(error?.data?.message));




    }


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
            render: (_, record) => {
                let color = "blue";
                if (record?.status === true) color = "green";
                return (
                    <div>
                        <Button
                            onClick={() => {
                                setOpenModal(true)
                                setFeedback(record)
                            }}
                            type="text"
                            disabled={record?.status}
                            icon={<FaReply />}
                            style={{
                                backgroundColor: color === "blue" ? "#E6E5F1" : "#E6F4EA",
                                color: color === "blue" ? "#4A3AFF" : "#31A24C",
                                fontWeight: "bold",
                                padding: "4px 8px",
                                borderRadius: "4px",
                            }}
                        >
                            {record?.status ? "Replied" : "Pending"}
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
                    pagination={false}
                />
            </div>
            <Modal centered open={openModal} footer={false} onCancel={() => setOpenModal(false)}>
                <h1 className='text-xl'>Feedback Reply</h1>
                <p>Feedback from :  </p>
                <TextArea value={feedback?.description} />

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item name={'replyMessage'} label='Your Reply'>

                        <TextArea rows={5} />
                    </Form.Item>

                    <div className='flex items-center justify-center'>
                        <button className='bg-black text-white px-6  py-2 rounded-md'>Send</button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default Feedback