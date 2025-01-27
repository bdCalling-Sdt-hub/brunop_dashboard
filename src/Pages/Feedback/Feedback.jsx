import { Button, Form, Modal, Popconfirm, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  useDeleteFeedbackMutation,
  useGetAllFeedBackQuery,
  useReplyFeedbackMutation,
} from "../../redux/Api/manageManagerApi";

const Feedback = () => {
  const [openModal, setOpenModal] = useState(false);
  const [feedback, setFeedback] = useState({});

  // ======== ALL API=======//
  const { data: getAllFeedback } = useGetAllFeedBackQuery();
  const [replyFeedback] = useReplyFeedbackMutation();
  const [deleteFeedback] = useDeleteFeedbackMutation();

  const dataSource = getAllFeedback?.data?.map((feedback) => {
    return {
      key: feedback?._id,
      name: feedback?.name,
      description: feedback?.message,
      time: feedback?.updatedAt?.split("T")[1]?.replace("Z", ""),
      status: feedback?.reply,
    };
  });

  // Handle send feedback
  const onFinish = (value) => {
    const data = {
      feedbackId: feedback?.key,
      replyMessage: value?.replyMessage,
    };

    replyFeedback(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        setOpenModal(false);
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  const handleDeleteProduct = async (id) => {
    // console.log(id);
    try {
      const response = await deleteFeedback(id).unwrap();
      toast.success(response?.message || "Feedback deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete feedback");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        let color = "blue";
        if (record?.status === true) color = "green";
        return (
          <div>
            <Button
              onClick={() => {
                setOpenModal(true);
                setFeedback(record);
              }}
              type="text"
              disabled={record?.status}
              icon={<FaReply />}
              style={{
                backgroundColor: color === "blue" ? "#E6E5F1" : "#E6F4EA",
                color: color === "blue" ? "#4A3AFF" : "#31A24C",
                fontWeight: "bold",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              {record?.status ? "Replied" : "Pending"}
            </Button>
            {/* <Button
                            type="text"
                            icon={<DeleteOutlined />}

                        /> */}
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Delete Feedback"
          description="Are you sure you want to delete this feedback?"
          onConfirm={() => handleDeleteProduct(record.key)}
        >
          <p className="border-none cursor-pointer">
            <RiDeleteBin6Line size={25} />
          </p>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center  w-full pb-8">
        <div className="flex items-center gap-2">
          <Link to={-1}>
            <BsArrowLeftShort size={25} />
          </Link>
          Feedback
        </div>
      </div>
      <div className="table-container" style={{ padding: "20px" }}>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      <Modal
        centered
        open={openModal}
        footer={false}
        onCancel={() => setOpenModal(false)}
      >
        <h1 className="text-xl">Feedback Reply</h1>
        <p>Feedback from : </p>
        <TextArea value={feedback?.description} />

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name={"replyMessage"} label="Your Reply">
            <TextArea rows={5} />
          </Form.Item>

          <div className="flex items-center justify-center">
            <button className="bg-black text-white px-6  py-2 rounded-md">
              Send
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Feedback;
