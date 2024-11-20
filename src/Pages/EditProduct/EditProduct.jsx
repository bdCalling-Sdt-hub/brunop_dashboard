import React, { useState } from "react";
import { Input, Button, Upload, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import img from '../../assets/images/edit.jpg'
import { IoMdArrowBack } from "react-icons/io";
const EditProduct = () => {
    const [description, setDescription] = useState("");

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleFinish = (values) => {
        console.log("Form Submitted: ", values, description);
    };
    return (
        <div className=" p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center mb-6 cursor-pointer">
                
                    <IoMdArrowBack size={25} />

                <h2 className="text-2xl font-semibold ml-1">Edit Product</h2>
            </div>

            <Form onFinish={handleFinish} layout="vertical">
                {/* Product Image */}
                <div className="grid grid-cols-2 gap-5">
                    <Form.Item
                        name="productImage"
                        label="Upload Product Image"
                        valuePropName="fileList"
                    >
                        
                            
                    </Form.Item>


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
                    <TextArea />
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