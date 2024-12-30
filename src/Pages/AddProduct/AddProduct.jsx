import React, { useRef, useState } from "react";
import { Input, Button, Upload, Form } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import JoditEditor from "jodit-react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAddNewProductMutation } from "../../redux/Api/productManageApi";

const AddProduct = () => {
    const [description, setDescription] = useState("");
    const [content, setContent] = useState('');
    const [fileList, setFileList] = useState([]);
    const editor = useRef(null);
    const [addNewProduct] = useAddNewProductMutation()
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };



    const handleFinish = (values) => {
        const formData = new FormData()
        
        formData.append('name', values?.name)
        formData.append('description', content)
        formData.append('store', values?.store)
        formData.append('price', values?.price)
        formData.append('product_Image', fileList[0]?.originFileObj)
        formData.append('width', values?.width)
        formData.append('length', values?.length)
        formData.append('height', values?.height)

        addNewProduct(formData).unwrap()
            .then((payload) => console.log('fulfilled', payload))
            .catch((error) => console.error('rejected', error));


    };


    const config = {
        readonly: false,
        height: 400,

        placeholder: 'Start typings...',
        style: {
            height: 650,
        },
        buttons: [
            'image', 'fontsize', 'bold', 'italic', 'underline', '|',
            'font', 'brush',
            'align'
        ]
    }

    useEffect(() => {
        setContent("")
    }, [])
    return (
        <div className=" p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center mb-6 cursor-pointer">

                <Link to={-1}><IoMdArrowBack size={25} /></Link>

                <h2 className="text-2xl font-semibold ml-1">Add Product</h2>
            </div>

            <Form onFinish={handleFinish} layout="vertical">
                {/* Product Image */}
                <div className="grid grid-cols-2 gap-5">
                    <div style={{ width: '100%', height: '100%' }} >
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={handleUploadChange}
                            beforeUpload={() => false}
                            multiple={false}
                            className="upload-full-width"
                            maxCount={1}

                        >
                            {fileList.length >= 1 ? null : (
                                <div className='flex flex-col items-center gap-2 '>
                                    <CiImageOn size={35} />
                                    <div>Browse Image</div>
                                </div>
                            )}
                        </Upload>
                    </div>


                    <div>
                        <Form.Item
                            name="name"
                            label="Product Name"
                            rules={[{ required: true, message: "Please enter the product name" }]}
                        >
                            <Input placeholder="Product Name" />
                        </Form.Item>
                        <div className="grid grid-cols-2 gap-4">

                            <Form.Item
                                name="price"
                                label="Regular Price"
                                rules={[{ required: true, message: "Please enter the regular price" }]}
                            >
                                <Input prefix="$" placeholder="Price" />
                            </Form.Item>
                            <Form.Item
                                name="store"
                                label="Store"
                                rules={[{ required: true, message: "Please enter the store value" }]}
                            >
                                <Input placeholder="Store" />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-3 gap-4">

                            <Form.Item
                                name="width"
                                label="Width"
                                rules={[{ required: true, message: "Please enter the regular price" }]}
                            >
                                <Input placeholder="width" />
                            </Form.Item>
                            <Form.Item
                                name="length"
                                label="Length"
                                rules={[{ required: true, message: "Please enter the store value" }]}
                            >
                                <Input placeholder="length" />
                            </Form.Item>
                            <Form.Item
                                name="height"
                                label="Height"
                                rules={[{ required: true, message: "Please enter the store value" }]}
                            >
                                <Input placeholder="Height" />
                            </Form.Item>
                        </div>
                    </div>

                </div>

                <Form.Item label="Description">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                </Form.Item>


                <div className="flex justify-center mt-6">
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            padding: "10px 20px",
                            borderRadius: "4px",
                        }}
                    >
                        Publish
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddProduct