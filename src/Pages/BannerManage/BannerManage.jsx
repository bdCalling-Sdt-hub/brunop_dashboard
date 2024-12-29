import { Button, Input, Popconfirm, Table } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CategoryModal from '../../Components/CategoryModal/CategoryModal'
import { DeleteOutlined } from '@ant-design/icons'
import { useDeleteBannerMutation, useGetAllBannerQuery } from '../../redux/Api/bannerApi'
import { imageUrl } from '../../redux/Api/baseApi'
import { toast } from 'sonner'




const BannerManage = () => {
    const [openAddModal, setOpenAddModal] = useState(false)

    const { data: getAllBanner } = useGetAllBannerQuery();
    const [deleteBanner] = useDeleteBannerMutation()

    const dataSource = getAllBanner?.data?.map((banner, i) => {
        return (
            {
                key: banner?._id,
                sno: i + 1,
                image: `${imageUrl}${banner?.adds_image}`,
                name: banner?.name,
            }
        )
    })



    const columns = [
        {
            title: "S.No",
            dataIndex: "sno",
            key: "sno",
            width: "10%",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            width: "30%",
            render: (image) => (
                <img
                    src={image}
                    alt="Banner"
                    style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "4px",
                    }}
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "40%",
            render: (name) => <span style={{ color: "#666" }}>{name}</span>,
        },
        {
            title: "Action",
            key: "action",
            width: "20%",
            render: (_, record) => (
                <Popconfirm
                    title="Delete"
                    description="Are you sure delete this banner!"
                    okText="Yes"
                    onConfirm={() => handleDeleteBanner(record?.key)}
                    // onCancel={()=>}
                    cancelText="No"
                >
                    <Button
                        type="text"
                        icon={<DeleteOutlined />}
                        style={{
                            color: "red",
                            fontSize: "16px",
                        }}
                    />
                </Popconfirm>
            ),
        },
    ];

    // Handle delete banner function
    const handleDeleteBanner = (id) => {
        console.log(id);
        deleteBanner(id).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));
    }
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Banner Management
                </div>
                <div className='flex gap-10 items-center '>
                    <Input className='min-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
                    <button onClick={() => setOpenAddModal(true)} className='w-full bg-black  text-white px-4 py-2 rounded-sm flex items-center gap-2'>Add Cover <IoMdAdd /></button>
                </div>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                bordered={false}
            />
            <CategoryModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} />
        </div>
    )
}

export default BannerManage