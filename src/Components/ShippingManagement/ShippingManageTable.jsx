import { Table } from "antd";

// eslint-disable-next-line react/prop-types
const ShippingManagementTable = ({ data }) => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
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
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <button
          type="button"
          disabled={text === "Approve"}
          className={`px-7 py-2 rounded-md cursor-pointer text-white ${
            text === "Approve"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {text}
        </button>
      ),
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.orderId}
      pagination={{
        pageSize: 10,
        position: ["bottomCenter"],
        showSizeChanger: true,
        className: "mx-auto",
      }}
      scroll={{ x: "max-content" }} // Allow horizontal scrolling
      responsive={true} // Automatically hide columns on smaller screens
    />
  );
};

export default ShippingManagementTable;
