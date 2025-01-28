import { Skeleton } from "antd";
import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/Api/userApi";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const {
    data: getUserInfo,
    isError,
    isLoading,
    isFetching,
  } = useGetProfileQuery();
  // console.log(getUserInfo?.data?.authId?.role?.email);

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Skeleton active />
      </div>
    );
  }
  if (
    isError ||
    !getUserInfo?.data?.authId?.email ||
    getUserInfo?.data?.authId?.role !== "ADMIN"
  ) {
    return <Navigate to={"/auth/login"} state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
