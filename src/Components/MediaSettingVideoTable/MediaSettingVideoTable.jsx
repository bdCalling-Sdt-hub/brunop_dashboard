import { Popconfirm, Table } from "antd";
import { useState } from "react";
import MediaSettingModal from "../MediaSettingModal/MediaSettingModal";
import { AiOutlineDelete } from "react-icons/ai";
import img from '../../assets/images/car4.png'
import img2 from '../../assets/images/car5.png'
import img3 from '../../assets/images/car6.png'
const MediaSettingVideoTable = ({ getAllVideos }) => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')


    const handelEditVideo = () => {
        setModalTitle('Edit')
        setOpenAddModal(true)
    }


    const columns = [
        {
            title: 'Sl No',
            dataIndex: 'slNo',
            key: 'slNo',
        },
        
        {
            title: 'Destination Image',
            dataIndex: 'image',
            key: 'image',
            render : (_, record)=>(
                <img src={record?.image}  className="w-20" alt="" />
            )
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',

        },
       

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            // eslint-disable-next-line no-unused-vars
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <Popconfirm
                    title ="Are you sure to delete this Destination?"
                    >

                        <a href="#delete" className=" p-1 rounded-md hover:text-red-600"><AiOutlineDelete size={25} /></a>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // Columns data
    const formattedTableData = [
        {
            slNo : '#11223',
            image : img,
            destination : 'Kent, Utah'
        },
        {
            slNo : '#11223',
            image : img2,
            destination : 'Great Falls, Maryland'
        },
        {
            slNo : '#11223',
            image : img3,
            destination : 'Lansing, Illinois'
        },
        {
            slNo : '#11223',
            image : img,
            destination : 'Lafayette, California'
        }
    ]








    return (
        <div className="p-2 ">

            <Table columns={columns} dataSource={formattedTableData}
                pagination={false}

            />
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal}  />



        </div>
    );
};

export default MediaSettingVideoTable;