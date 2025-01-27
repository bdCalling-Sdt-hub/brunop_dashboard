import { Pagination } from "antd";
import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import car1 from "../assets/images/car.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import user from "../assets/images/use4.png";
import JoinRequest from "../Components/Dashboard/JoinRequest";

const TotalJoinRequest = () => {
  const totalItems = 1239; // Total number of items
  const pageSize = 11;
  const tableData = [
    {
      key: 1,
      id: 1,
      name: "dindiniya",
      img: user,
      contact: "08 +123 456",
      email: "bockelboy@att.com",
      location: "Kent, Utha",
      car: "AIM Mychro",
      carLocation: "United State",
      carImg: car1,
    },
    {
      key: 2,
      id: 2,
      name: "dindiniya",
      img: user,
      contact: "08 +123 456",
      email: "bockelboy@att.com",
      location: "Kent, Utha",
      car: "AIM Mychro",
      carLocation: "United State",
      carImg: car2,
    },
    {
      key: 3,
      id: 3,
      name: "dindiniya",
      img: user,
      contact: "08 +123 456",
      email: "bockelboy@att.com",
      location: "Kent, Utha",
      car: "AIM Mychro",
      carLocation: "United State",
      carImg: car3,
    },
  ];

  return (
    <div className=" bg-white ">
      <div className="between-center  my-2 pt-5">
        <div className="start-center  mb-3 ">
          <Link to={-1} className=" py-1 px-2 rounded-md start-center gap-1">
            <IoArrowBackSharp />
          </Link>
          <p className="">Who can be a premium user</p>
        </div>
        {/* <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" /> */}
      </div>
      <JoinRequest tableData={tableData} pagination={false} />
      <div
        className="mt-10 pb-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {/* Displaying total items info */}
        <span style={{ color: "#0044B4" }}>
          Showing 1-{pageSize} out of {totalItems}
        </span>
        {/* Ant Design Pagination component */}
        <Pagination
          total={totalItems}
          pageSize={pageSize}
          defaultCurrent={1}
          showSizeChanger={false}
          showQuickJumper={false}
          hideOnSinglePage
          style={{ display: "flex", alignItems: "center" }}
        />
      </div>
    </div>
  );
};

export default TotalJoinRequest;
