import { Pagination, Table } from "antd";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGetTransactionOrdersQuery } from "../../redux/Api/transactionAPIs/transactionAPIs";

const Transaction = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const { data: trans } = useGetTransactionOrdersQuery({
    pollingInterval: 3000,
    skipPollingIfUnfocused: true,
  });

  console.log(trans?.data?.result);
  const data = trans?.data?.result;
  const meta = trans?.data?.meta;
  console.log(meta);

  // Table Format
  const columns = [
    {
      title: "S.No",
      key: "slNo",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "Order Id",
      dataIndex: "transaction_id",
      key: "transaction_id",
    },

    {
      title: "User Name",
      dataIndex: "userId",
      key: "name",
      render: (userId) => userId?.name || "-",
    },
    {
      title: "Email",
      dataIndex: "userId",
      render: (userId) => userId?.email || "-",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },

    {
      title: "Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center  w-full pb-8">
        <div className="flex items-start gap-2">
          <Link to={-1}>
            <BsArrowLeftShort size={25} />
          </Link>
          Transaction
        </div>
        {/* <div className="flex gap-10 items-center ">
          <Input
            className="min-w-[250px] h-10"
            prefix={<CiSearch className="text-2xl" />}
            placeholder="Search here..."
          />
        </div> */}
      </div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />

        <div className="flex justify-center mt-4">
          <Pagination
            onChange={(page) => setPage(page)}
            pageSize={meta?.data?.meta?.limit}
            current={meta?.data?.meta?.page} // Use "current" instead of "page" for controlled pagination
            total={meta?.data?.meta?.total}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
