import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Upload } from "antd";
import { useState } from "react";
import { TbCopyCheck } from "react-icons/tb";
import { toast } from "sonner";
import { useCreateAdsMutation } from "../../redux/Api/MediaSettingApi";

// eslint-disable-next-line react/prop-types
const CategoryModal = ({ openAddModal, setOpenAddModal }) => {
  const [createAds] = useCreateAdsMutation();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = (value) => {
    const formData = new FormData();

    if (!value?.name) {
      return toast.error("Please enter category name!");
    }

    if (fileList.length === 0 || !fileList[0]?.originFileObj) {
      return toast.error("Please upload an image!");
    }

    formData.append("name", value.name);
    formData.append("adds_image", fileList[0].originFileObj);

    createAds(formData)
      .unwrap()
      .then((payload) => {
        setOpenAddModal(false);
        form.resetFields();
        setFileList([]);
        toast.success(payload.message);
      })
      .catch((error) => {
        toast.error(error?.data?.message || "Something went wrong!");
      });
  };

  return (
    <Modal
      open={openAddModal}
      centered
      footer={false}
      onCancel={() => setOpenAddModal(false)}
    >
      <div>
        <p className="text-xl text-center py-2 font-semibold">
          Create Category
        </p>
        <Form className="" form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Cover Name"
            rules={[
              {
                required: true,
                message: "Cover Name is required",
              },
            ]}
          >
            <Input className="border outline-none" placeholder="" />
          </Form.Item>
          <Form.Item label="Image" style={{ width: "100%" }}>
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
                <div className="flex items-center gap-2">
                  <PlusOutlined />
                  <div>Add Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <div className="flex justify-center items-center gap-2">
            <button
              type="submit"
              className="flex items-center gap-1 py-2 px-4 bg-black text-white font-semibold rounded-md"
            >
              <TbCopyCheck /> Submit
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default CategoryModal;
