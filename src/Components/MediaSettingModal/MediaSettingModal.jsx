import { Checkbox, Form, Input, Modal, Select, Spin, Upload } from "antd";
import { RxCross2 } from "react-icons/rx";
import { TbCopyCheck } from "react-icons/tb";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useCreateAdsMutation } from "../../redux/Api/MediaSettingApi";
import { toast } from "sonner";
import { LoadingOutlined } from "@ant-design/icons";
// eslint-disable-next-line react/prop-types
const MediaSettingModal = ({ openAddModal, setOpenAddModal  }) => {
    const [createAds, { isLoading }] = useCreateAdsMutation()
    const [fileList, setFileList] = useState([]);
    const [isPrivate, setIsPrivate] = useState()
    const [isActive, setIsActive] = useState()


    const onFinish = (value) => {
      
    }



    //   Checkbox value
    const onChange = (e) => {
        setIsPrivate(e.target.checked);
    };
    const handleIsActive = (e) => {
        setIsActive(e.target.checked);
    }

    const handleSelectItemChange = (value) => {
        console.log(value);
    }


    // handle upload image 
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleRemove = (file) => {
        setFileList(fileList.filter((item) => item.uid !== file.uid));
    };


    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
        >
            <div>
                <p className='text-xl text-center py-2 font-lora'>{"Add Destination"}</p>
                <Form className=''
                    layout='vertical'
                    onFinish={onFinish}
                >


                    <Form.Item name={`name`}
                        label={`Name`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>
                        <Input />

                    </Form.Item>

                   
                    

                    <Form.Item
                        name="image"
                        label="Image"
                    >
                        <Upload
                            listType="picture-card"
                            onChange={handleUploadChange}
                            onRemove={handleRemove}
                            beforeUpload={() => false}
                            multiple={false}
                            maxCount={1}
                        >
                            <PlusOutlined />
                            <div  >Add Image</div>
                        </Upload>
                    </Form.Item>

                    <div className='flex justify-center items-center gap-2'>
                        <button disabled={isLoading} className='flex items-center gap-1 py-2  bg-black  text-white font-semibold rounded-sm px-8'>
                            {isLoading  ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: '#ffffff' }} spin />} />  : <>save</>}
                        </button>
                    
                    </div>

                </Form>
            </div>
        </Modal>
    );
};

export default MediaSettingModal;