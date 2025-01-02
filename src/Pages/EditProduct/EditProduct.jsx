import React, { useRef, useState } from "react";
import { Input, Button, Upload, Form } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import JoditEditor from "jodit-react";
import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/Api/productManageApi";
import {  imageUrl } from "../../redux/Api/baseApi";

const EditProduct = () => {
    const [form] = Form.useForm()
    const { id } = useParams()
    const { data: ProductDetails } = useGetSingleProductQuery(id)
    const [description, setDescription] = useState("");
    const [content, setContent] = useState('');
    const [fileList, setFileList] = useState([]);
    const editor = useRef(null);
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };


    const handleFinish = (values) => {
        console.log("Form Submitted: ", values, description);
    };
    console.log(ProductDetails?.data);

    useEffect(() => {

        if (ProductDetails?.data) {

            setFileList(
                ProductDetails?.data?.product_image?.map((url , i)=>({
                    uid : i,
                    name : `image-${i}`,
                    status : 'done',
                    url : `${imageUrl}${url}`
                }))
            )
            setContent(ProductDetails?.data?.description)
            form.setFieldsValue({
                productName: ProductDetails?.data?.name,
                regularPrice: ProductDetails?.data?.price,
                store: ProductDetails?.data?.store
            })
        }

    }, [ProductDetails?.data])


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
  console.log(fileList);

    return (
        <div className=" p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center mb-6 cursor-pointer">

                <Link to={-1}><IoMdArrowBack size={25} /></Link>

                <h2 className="text-2xl font-semibold ml-1">Edit Product</h2>
            </div>

            <Form onFinish={handleFinish} layout="vertical" form={form} >
                {/* Product Image */}
                <div className="grid grid-cols-2 gap-5">
                    <div style={{ width: '100%' }} >
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
                            name="productName"
                            label="Product Name"
                            rules={[{ required: true, message: "Please enter the product name" }]}
                        >
                            <Input placeholder="Product Name" />
                        </Form.Item>
                        <div className="grid grid-cols-2 gap-4">

                            <Form.Item
                                name="regularPrice"
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

export default EditProduct