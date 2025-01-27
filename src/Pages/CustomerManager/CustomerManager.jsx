import {
  Avatar,
  Input,
  message,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
} from "antd";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { imageUrl } from "../../redux/Api/baseApi";
import {
  useBlockUnblockCustomerMutation,
  useGetAllCustomerQuery,
  useSendRequestUserMutation,
} from "../../redux/Api/customerManageApi";

const CustomerManager = () => {
  const [isPremium, setIsPremium] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: getAllCustomer } = useGetAllCustomerQuery({
    isPremium,
    searchTerm,
  });
  const [blockUnblockCustomer] = useBlockUnblockCustomerMutation();
  const [sendRequestUser] = useSendRequestUserMutation();
  //   console.log(getAllCustomer?.data?.result);

  // formatted customer manage data table
  const data = getAllCustomer?.data?.result?.map((customer, i) => {
    // console.log(customer);
    return {
      id: customer?._id,
      key: i + 1,
      name: customer?.name,
      email: customer?.email,
      location: customer?.country ? customer?.country : "-",
      phone: customer?.phone_number ? customer?.phone_number : "-",
      status: customer?.status,
      image: `${imageUrl}${customer?.profile_image}`,

      isActive: customer?.authId?.is_block,
      role: customer?.authId?.role,
      blockEmail: customer?.authId?.email,
      authId: customer?.authId?._id,
    };
  });

  //   handle active/deactive
  const handleChange = async (value, manager) => {
    // console.log(manager, value);
    const status = value === "active" ? false : true;
    const payload = {
      email: manager.blockEmail,
      role: manager.role,
      is_block: status,
    };
    // console.log(payload);

    try {
      message.loading({
        content: "Changing status...",
        key: "Send request...",
      });
      const res = await blockUnblockCustomer(payload);
      //   console.log(res);
      if (res?.data) {
        message.success("Successfully change user status!");
      } else {
        message.error("User block failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle sent request function
  const handleSendRequest = async (data) => {
    const payload = {
      userId: data?.id,
    };

    try {
      message.loading({
        content: "Sending request...",
        key: "Send request...",
      });
      const res = await sendRequestUser(payload);
      if (res?.data) {
        message.success("Successfully request send!");
      } else {
        message.error("Failed to request send!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <div className="flex items-center">
          <Avatar src={record.image} size="small" style={{ marginRight: 10 }} />
          {name}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Sent Request",
      dataIndex: "sentRequest",
      key: "sentRequest",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Are you sure you want to send this request?"
            onConfirm={() => handleSendRequest(record)} // Call the function when confirmed
            okText="Yes"
            cancelText="No"
          >
            <button className="bg-black text-white px-2 py-1 rounded-md">
              Send request
            </button>
          </Popconfirm>
        );
      },
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        // console.log(record);
        return (
          <div className="flex ">
            <div
              className={`text-center py-1 w-[50%] rounded-sm ${
                record?.status === "deactivate"
                  ? "bg-[#FEE2E2] text-[#EF4444]"
                  : "bg-[#EBF7E4] text-[#7CC84E]"
              }`}
            >
              {record?.isActive ? "deactivate" : "active"}
            </div>
            <Select
              onChange={(value) => handleChange(value, record)} // Pass the manager's details
              value={null}
              style={{ width: 35 }}
              dropdownStyle={{ width: 100 }}
              options={[
                { value: "active", label: "Active" },
                { value: "deactivate", label: "Deactivate" },
              ]}
              placeholder=" "
            />
          </div>
        );
      },
    },
  ];

  const handlePremiumUser = (e) => {
    setIsPremium(e.target.value === "premium");
  };
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center  w-full pb-8">
        <div className="flex items-center gap-2">
          <Link to={-1}>
            <BsArrowLeftShort size={25} />
          </Link>
          Premium User Management
        </div>
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-[250px] h-10"
          prefix={<CiSearch className="text-2xl" />}
          placeholder="Search here..."
        />
      </div>
      <div className="px-5">
        <div className="px-5">
          <Radio.Group
            onChange={handlePremiumUser}
            value={isPremium ? "premium" : "user"}
          >
            <Radio value="premium">Premium User</Radio>
            <Radio value="user">User</Radio>
          </Radio.Group>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Table dataSource={data} columns={columns} pagination={false} />
        <div className="flex justify-center mt-5">
          <Pagination
            onChange={(page) => setPage(page)}
            pageSize={getAllCustomer?.data?.meta?.limit}
            total={getAllCustomer?.data?.meta?.total}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerManager;
