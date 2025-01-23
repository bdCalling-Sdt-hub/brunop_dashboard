import {
  Form,
  Input,
  message,
  Modal,
  Pagination,
  Table,
  Typography,
} from "antd";
import { useState } from "react";
import {
  useCreateShippingCostMutation,
  useSendShippingNotificationMutation,
} from "../../redux/Api/shippingApis/shippingAPIs";

const { Text } = Typography;

// eslint-disable-next-line react/prop-types
const ShippingManagementTable = ({ data: shippingInfo, page, setPage }) => {
  // eslint-disable-next-line react/prop-types
  const data = shippingInfo?.data?.result;

  const [sendNotification] = useSendShippingNotificationMutation();

  const handleSendNotification = async (order) => {
    try {
      const payload = {
        orderId: order._id, // Use the passed order
      };

      const response = await sendNotification(payload);
      console.log("Response:", response);

      message.loading({
        content: "Sending notification...",
        key: "Sending...",
      });

      if (response.data) {
        message.success("Notification sent successfully!");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  const button = (order) => (
    <button
      className="px-7 py-2 rounded-md text-white bg-black hover:bg-gray-800"
      onClick={() => handleSendNotification(order)}
    >
      Send notification
    </button>
  );

  const transformedData = data?.map((order) => ({
    orderId: order._id,
    email: order.email,
    orderType: order.orderType,
    totalItems: order.items.reduce((sum, item) => sum + item.quantity, 0),
    shippingInfo: order?.address
      ? `${order.address.street_address}, ${order.address.city}, ${order.address.state}, ${order.address.toZipCode}`
      : button(order),

    deliveryTime: new Date(order.updatedAt).toLocaleString(),
    status: order.status,
    name: order?.user?.name || "N/A",
    contact: order?.address?.contact_no || "N/A",
    address: order?.address || "N/A",
    deliveryFee: order.deliveryFee,
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [form] = Form.useForm();
  const [CreateShippingCost] = useCreateShippingCostMutation();

  const showModal = (record) => {
    setSelectedOrder(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setShippingCost(""); // Clear shipping cost when closing modal
  };

  const [shippingCost, setShippingCost] = useState("");

  const handleSubmit = async () => {
    if (!selectedOrder) return;

    const payload = {
      orderId: selectedOrder.orderId,
      amount: Number(shippingCost),
    };

    try {
      message.loading({ content: "Sending cost...", key: "Sending..." });
      const res = await CreateShippingCost(payload);
      if (res?.data) {
        message.success("Send successfully!");
        setIsModalOpen(false);
        form.resetFields();
        setShippingCost("");
      } else {
        message.error("Product creation failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Order Type",
      dataIndex: "orderType",
      key: "orderType",
    },
    {
      title: "Total Items",
      dataIndex: "totalItems",
      key: "totalItems",
    },
    {
      title: "Shipping Info",
      dataIndex: "shippingInfo",
      key: "shippingInfo",
    },

    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
      render: (text, record) => (
        <button
          onClick={() => showModal(record)}
          type="button"
          disabled={!record.address}
          className={`px-7 py-2 rounded-md text-white ${
            !record.address === "Provided"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {record.shippingInfo === "Provided" ? "Approve" : "Pending"}
        </button>
      ),
    },
  ];

  console.log(data);
  console.log(selectedOrder);

  return (
    <>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        {selectedOrder ? (
          <>
            <div>
              <h3 className="font-semibold text-xl text-gary-400">
                Approve Shipping Info
              </h3>
              <h3 className="font-semibold text-md text-gray-500 mt-3">
                Delivery Address
              </h3>

              {selectedOrder.address ? (
                <>
                  <div className="mt-1">
                    <Text className="text-gray-600 mt-1 text-sm font-extralight">
                      Full Name:{" "}
                      {selectedOrder.address.full_name
                        ? selectedOrder.address.full_name
                        : "N/A"}
                    </Text>
                    <br />
                    <Text className="text-gray-600 mt-1 text-sm font-extralight">
                      Contact No:{" "}
                      {selectedOrder.address.contact_no
                        ? selectedOrder.address.contact_no
                        : "N/A"}
                    </Text>

                    <br />
                    <Text className="text-gray-600 mt-1 text-sm font-extralight">
                      {selectedOrder.address.street_address &&
                      selectedOrder.address.city &&
                      selectedOrder.address.state &&
                      selectedOrder.address.toZipCode
                        ? `${selectedOrder.address.street_address}, ${selectedOrder.address.city}, ${selectedOrder.address.state}, ${selectedOrder.address.toZipCode}`
                        : "N/A"}
                    </Text>

                    <br />
                    <Text className="text-gray-600 mt-1 text-sm font-extralight">
                      Cost:{" "}
                      {selectedOrder.deliveryFee
                        ? selectedOrder.deliveryFee
                        : 0}
                    </Text>
                  </div>

                  <br />
                  <Form layout="vertical" className="mt-2">
                    <Form.Item
                      label="Shipping Cost"
                      name="shippingCost"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the shipping cost",
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        value={shippingCost}
                        onChange={(e) => setShippingCost(e.target.value)}
                        placeholder="Enter shipping cost"
                        addonBefore="$"
                      />
                    </Form.Item>

                    <Form.Item className="text-center">
                      {/* <Button type="primary" onClick={handleSubmit}>
                        Send
                      </Button> */}

                      <button
                        disabled={shippingCost.deliveryFee > 0}
                        onClick={handleSubmit}
                        type="button"
                        className={`px-7 py-3 rounded-md text-white ${
                          shippingCost.deliveryFee < 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-black hover:bg-gray-800"
                        }`}
                      >
                        Send
                      </button>
                    </Form.Item>
                  </Form>
                </>
              ) : (
                <Text>No address provided</Text>
              )}
            </div>
          </>
        ) : (
          <p>No data available</p>
        )}
      </Modal>

      <div className="overflow-x-auto p-4">
        <Table
          dataSource={transformedData}
          columns={columns}
          rowKey={(record) => record.orderId}
          pagination={false} // Disable built-in pagination
          scroll={{ x: true }} // Enable horizontal scrolling
        />
        <div className="flex justify-center mt-4">
          <Pagination
            current={page}
            onChange={(page) => setPage(page)}
            total={data?.data?.meta?.total}
            pageSize={data?.data?.meta?.limit}
            responsive
          />
        </div>
      </div>
    </>
  );
};

export default ShippingManagementTable;
