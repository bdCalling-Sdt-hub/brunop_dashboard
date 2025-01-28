import { Pagination } from "antd";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import car1 from "../assets/images/car.png";
import JoinRequest from "../Components/Dashboard/JoinRequest";
import { useGetPendingPremierUserQuery } from "../redux/Api/dashboardApi";

const TotalJoinRequest = () => {
  const totalItems = 1239; // Total number of items
  const pageSize = 11;
  const { data: getRequestUser } = useGetPendingPremierUserQuery();

  // console.log(getTotalUser);
  // console.log("Data", getRequestUser);

  const tableData = getRequestUser?.data?.data?.slice(0, 3)?.map((user, i) => {
    return {
      key: i + 1,
      id: i + 1,
      name: user?.name,
      img: user,
      contact: user?.phone_number,
      email: "bockelboy@att.com",
      location: "Kent, Utha",
      car: "AIM Mychro",
      carLocation: "United State",
      carImg: car1,
      userId: user?._id,
    };
  });

  // console.log(tableData);

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
