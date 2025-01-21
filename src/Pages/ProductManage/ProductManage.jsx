import { Button, Input, Pagination, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiEdit, CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { imageUrl } from "../../redux/Api/baseApi";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../redux/Api/productManageApi";
const ProductManage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerms] = useState("");
  const { data: getAllProduct } = useGetAllProductQuery({ page, searchTerm });
  const [deleteProduct] = useDeleteProductMutation();

  console.log(getAllProduct);

  // console.log(getAllProduct?.data?.meta);
  const dataSource = getAllProduct?.data?.result?.map((product, i) => {
    return {
      key: product?._id,
      id: i + 1,
      name: product?.name,
      weight: product?.weight,
      price: product?.price,
      store: product?.store,
      status: product?.status,
      image: `${imageUrl}${product?.product_image?.[0]}`,
    };
  });

  // Handle delete product function
  const handleDeleteProduct = (id) => {
    deleteProduct(id)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };

  const columns = [
    {
      title: "Serial no.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Products Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <img
            src={record.image}
            alt={text}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$ ${price}`,
    },
    {
      title: "Store",
      dataIndex: "store",
      key: "store",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "#EBF7E4";
        if (status === "Unavailable") color = "#FFCCCC";
        if (status === "Short Stock") color = "#D6D5E6";

        return (
          <Button
            style={{
              backgroundColor: color,
              color: status === "Available" ? "#7CC84E" : "#000",
              border: "none",
              padding: "4px 12px",
            }}
          >
            {status}
          </Button>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-5 space-x-2">
          <Link to={`/product-manage/${record?.key}`} className="border-none">
            <CiEdit size={25} />
          </Link>
          <Popconfirm
            title="Delete Product"
            description="Are you sure delete this product!"
            onConfirm={() => handleDeleteProduct(record?.key)}
          >
            <p className="border-none cursor-pointer">
              <RiDeleteBin6Line size={25} />
            </p>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-2 rounded-md">
      <div className="flex justify-between items-center  w-full pb-8">
        <div className="flex items-center gap-2">
          <Link to={-1}>
            <BsArrowLeftShort size={25} />
          </Link>
          Product Management
        </div>
        <Link
          to={"/product-manage/add-product"}
          className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-md"
        >
          Add Products <FaPlus />
        </Link>
      </div>
      <Input
        onChange={(e) => setSearchTerms(e.target.value)}
        className="max-w-[250px] h-10"
        prefix={<CiSearch className="text-2xl" />}
        placeholder="Search here..."
      />
      <div className="table-container" style={{ padding: "20px" }}>
        <div className="flex  gap-5  items-center mb-4">
          <div className="border-r-2 pr-2">
            <strong>Total Products:</strong> All (
            {getAllProduct?.data?.result?.length})
          </div>
          <div>{/* <strong>Publish:</strong> (16) */}</div>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <div className="flex justify-center pt-5">
          <Pagination
            onChange={(page) => setPage(page)}
            pageSize={getAllProduct?.data?.meta?.limit}
            total={getAllProduct?.data?.meta?.total}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
