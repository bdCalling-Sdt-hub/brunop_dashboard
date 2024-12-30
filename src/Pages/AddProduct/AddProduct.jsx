import React, { useRef, useState } from "react";
import { Input, Button, Upload, Form, InputNumber } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import JoditEditor from "jodit-react";
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAddNewProductMutation } from "../../redux/Api/productManageApi";
import { toast } from "sonner";

const AddProduct = () => {
    const navigate = useNavigate()
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
        formData.append('store',Number(values?.store))
        formData.append('price', Number(values?.price))
        formData.append('product_image', fileList[0]?.originFileObj)
        formData.append('width', Number(values?.width))
        formData.append('length', Number(values?.length))
        formData.append('height', Number(values?.height))
        formData.append('weight', Number(values?.weight))

        addNewProduct(formData).unwrap()
            .then((payload) => {
                toast.success(payload?.message)
                navigate('/product-manage')
            })
            .catch((error) => toast.error(error?.data?.message));


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
                            <Input  placeholder="Product Name" />
                        </Form.Item>
                        <div className="grid grid-cols-2 gap-4">

                            <Form.Item
                                name="price"
                                label="Regular Price"
                                rules={[{ required: true, message: "Please enter the regular price" }]}
                            >
                                <InputNumber className="w-full"  prefix="$" placeholder="Price" />
                            </Form.Item>
                            <Form.Item
                                name="store"
                                label="Store"
                                rules={[{ required: true, message: "Please enter the store value" },
                                    {
                                        type : 'number',
                                        message : "Price must be a positive number",
                                    }
                                ]}
                            >
                                <InputNumber className="w-full" placeholder="Store" />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-4 gap-4">

                            <Form.Item
                                name="width"
                                label="Width"
                                rules={[{
                                    type : 'number',
                                    message : "Width must be a positive number",
                                    min : 0
                                }]}
                            >
                                <InputNumber className="w-full" placeholder="width" />
                            </Form.Item>
                            <Form.Item
                                name="length"
                                label="Length"
                                rules={[{
                                    type : 'number',
                                    message : "Length must be a positive number",
                                    min : 0
                                }]}
                            >
                                <InputNumber className="w-full" placeholder="length" />
                            </Form.Item>
                            <Form.Item
                                name="height"
                                label="Height"
                                rules={[{
                                    type : 'number',
                                    message : "Height must be a positive number",
                                    min : 0
                                }]}
                            >
                                <InputNumber className="w-full" placeholder="Height" />
                            </Form.Item>
                            <Form.Item
                                name="weight"
                                label="Weight"
                                rules={[{ required: true, message: "Please enter the store value" },
                                    {
                                        type : 'number',
                                        message : "Weight must be a positive number",
                                        min : 0
                                    }
                                ]}
                            >
                                <InputNumber className="w-full" placeholder="Weight" />
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