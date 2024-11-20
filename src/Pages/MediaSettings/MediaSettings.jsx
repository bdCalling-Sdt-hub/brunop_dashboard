import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import MediaSettingModal from "../../Components/MediaSettingModal/MediaSettingModal";
import MediaSettingTable from "../../Components/MediaSettingTable/MediaSettingTable";
import MediaSettingVideoTable from "../../Components/MediaSettingVideoTable/MediaSettingVideoTable";
import { useGetAllAdsQuery, useGetAllVideosQuery } from "../../redux/Api/MediaSettingApi";
import EditAddModal from "../../Components/EditAddModal";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

const MediaSettings = () => {

    /** all APIs */
    const { data: getAllAds } = useGetAllAdsQuery();
    const { data: getAllVideos } = useGetAllVideosQuery()



    const [ads, setAds] = useState(true)
    const [openAddModal, setOpenAddModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    // const [openCategoryModal, setOpenCategoryModal] = useState(false)

    const handleAdsModal = () => {
        setModalTitle('Add New Ads')
        setAds(true)
    }

    const handleVideoModal = () => {
        setModalTitle('Add New Video')
        setAds(false)
    }

    return (
        <div className='rounded-md bg-white pb-5'>
            <div className='  my-2 pt-5'>

                <div className='flex justify-between items-center'>
                    <div className='start-center gap-2 mb-3 p-5'>

                        <Link to={-1} className='flex items-center gap-2'> <GoArrowLeft />Destination</Link>
                    </div>

                    <div className="flex items-center  gap-2" >
                        <Input className="h-10 min-w-[200px]" prefix={<CiSearch className='text-2xl' />} placeholder="Search here..."/>
                        <button onClick={() => setOpenAddModal(true)} className='bg-black px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap mr-2'>
                            <FaPlus />
                            Add Destination
                        </button>
                    </div>

                </div>
            </div>


            <MediaSettingVideoTable getAllVideos={getAllVideos} />






            {/* Media setting Modal */}
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} modalTitle={modalTitle} />
            {/* <EditAddModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal}  /> */}
        </div>
    );
};

export default MediaSettings;