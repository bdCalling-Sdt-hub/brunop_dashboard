import { Avatar, Input, Select, Table } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CategoryModal from '../../Components/CategoryModal/CategoryModal'
import AddPremiumModal from '../../Components/AddPremiumModal/AddPremiumModal'
import { useGetAllManagerQuery } from '../../redux/Api/manageManagerApi'

const ManagerManage = () => { 

    // ALL API
    const {data :  getAllManager} = useGetAllManagerQuery()
    console.log(getAllManager);

    const [openAddModal, setOpenAddModal] =  useState(false)
    const data = [
        {
            key: "1",
            name: "Giring Furqan",
            email: "jennings@example.com",
            location: "3890 Poplar Dr.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
            phone: '+1235454845'
        },
        {
            key: "2",
            name: "John-W-BOSTON",
            email: "mitc@example.com",
            location: "3605 Parker Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
            phone: '+1235454845'

        },
        {
            key: "3",
            name: "Yanto Jericho",
            email: "immons@example.com",
            location: "8558 Green Rd.",
            status: "Deactivate",
            image: "https://via.placeholder.com/40",
            phone: '+1235454845'

        },
        {
            key: "4",
            name: "Lukman Farhan",
            email: "hill@example.com",
            location: "775 Rolling Green Rd.",
            status: "Activate",
            phone: '+1235454845',
            image: "https://via.placeholder.com/40",
        },
        {
            key: "5",
            name: "Dimas Kamal",
            email: "lawson@example.com",
            location: "775 Rolling Green Rd.",
            status: "Activate",
            image: "https://via.placeholder.com/40",
            phone: '+1235454845'

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
                    <Input className='min-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
                    <button onClick={()=> setOpenAddModal(true)} className='w-full bg-black text-white px-4 py-2 rounded-sm flex items-center gap-2'>Add Manager <IoMdAdd /></button>
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                />
            </div>
            <AddPremiumModal setOpenAddModal={setOpenAddModal}  openAddModal={openAddModal} modalName={"Add Manager"} />
        </div>
    )
}

export default ManagerManage