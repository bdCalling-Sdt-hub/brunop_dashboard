import { Avatar, Input, Pagination, Select, Table } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CategoryModal from '../../Components/CategoryModal/CategoryModal'
import AddPremiumModal from '../../Components/AddPremiumModal/AddPremiumModal'
import { useGetAllManagerQuery } from '../../redux/Api/manageManagerApi'
import { imageUrl } from '../../redux/Api/baseApi'

const ManagerManage = () => {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    // ALL API
    const { data: getAllManager } = useGetAllManagerQuery({ searchTerm, page })
    console.log(getAllManager?.data?.meta?.totalPage);

    const [openAddModal, setOpenAddModal] = useState(false)
    const data = getAllManager?.data?.data?.map(((manager, i) => {
        return (
            {
                key: i + 1,
                name: manager?.name,
                email: manager?.email,
                location: manager?.country,
                status: manager?.status,
                image: `${imageUrl}${manager?.profile_image}`,
                phone: manager?.phone_number ? manager?.phone_number : '-'
            }
        )
    }))




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
                    <Avatar src={record.image} size="large" style={{ marginRight: 10 }} />
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
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center  w-full pb-8" >
                <div className="flex items-center gap-2">
                    <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                    Manager Management

                </div>
                <div className='flex gap-10 items-center '>
                    <Input onChange={(e) => setSearchTerm(e.target.value)} className='min-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
                    <button onClick={() => setOpenAddModal(true)} className='w-full bg-black text-white px-4 py-2 rounded-sm flex items-center gap-2'>Add Manager <IoMdAdd /></button>
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                />
                <div className='flex justify-center mt-5'>
                    <Pagination
                        onChange={(page) => setPage(page)}
                        pageSize={getAllManager?.data?.meta?.limit}
                        page={getAllManager?.data?.meta?.total}
                    />
                </div>
            </div>
            <AddPremiumModal setOpenAddModal={setOpenAddModal} openAddModal={openAddModal} modalName={"Add Manager"} />
        </div>
    )
}

export default ManagerManage