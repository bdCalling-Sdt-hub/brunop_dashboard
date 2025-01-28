import { Link } from "react-router-dom";
import "./App.css";

import JoinRequest from "./Components/Dashboard/JoinRequest";
import Overview from "./Components/Dashboard/Overview";
import SubscriptionGrowth from "./Components/Dashboard/SubscriptionGrowth";
import car1 from "./assets/images/car.png";
import {
  useGetPendingPremierUserQuery,
  useTotalUserCountQuery,
} from "./redux/Api/dashboardApi";

function App() {
  /** Get total user statistics API */
  const { data: getTotalUser } = useTotalUserCountQuery();
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

  const data = [
    {
      title: "Total User",
      count: getTotalUser?.data?.users,
    },
    {
      title: "Total Premium User",
      count: getTotalUser?.data?.premiumUser,
    },
    {
      title: "Total Selling Products ",
      count: getTotalUser?.data?.order,
    },
    {
      title: "Total Earning",
      count: getTotalUser?.data?.income,
    },
  ];

  return (
    <>
      <div className="grid-4 ">
        {data?.map((item, index) => (
          <div
            className="w-full h-full border-r-2 center-center flex-col gap-3  bg-[white]  "
            key={index}
          >
            <div className="my-10 text-center space-y-4">
              <p className="text-3xl font-semibold">{item?.count}</p>
              <p className=" ">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2 mt-3 gap-3">
        <div className="w-full h-full bg-white p-4 rounded-md">
          <SubscriptionGrowth />
        </div>
        <div className="w-full h-full bg-white p-4 rounded-md">
          <Overview />
        </div>
      </div>
      <div className="mt-3 bg-white rounded-md">
        <div className="between-center gap-2 mb-3 p-5">
          <p className="text-xl">Who can be premium user</p>{" "}
          <Link to={`/total-join-request`}>View All</Link>
        </div>
        <JoinRequest tableData={tableData} pagination={false} />
      </div>
    </>
  );
}

export default App;
