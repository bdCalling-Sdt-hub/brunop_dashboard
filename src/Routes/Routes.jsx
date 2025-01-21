import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Pages/Root";
import TotalJoinRequest from "../Pages/TotalJoinRequest.jsx";
// import DriverProfile from "../Pages/DriverProfile";
import AddProduct from "../Pages/AddProduct/AddProduct.jsx";
import ForgotPassword from "../Pages/Auth/ForgotPassword.jsx";
import Login from "../Pages/Auth/Login.jsx";
import Otp from "../Pages/Auth/Otp.jsx";
import UpdatePassword from "../Pages/Auth/UpdatePassword.jsx";
import BannerManage from "../Pages/BannerManage/BannerManage.jsx";
import CustomerManager from "../Pages/CustomerManager/CustomerManager.jsx";
import EditProduct from "../Pages/EditProduct/EditProduct.jsx";
import Facts from "../Pages/Facts.jsx";
import Feedback from "../Pages/Feedback/Feedback.jsx";
import ManageItems from "../Pages/ManageItems.jsx";
import ManagerManage from "../Pages/ManagerManage/ManagerManage.jsx";
import Notification from "../Pages/Notification.jsx";
import OrderManagement from "../Pages/OrderManagement/OrderManagement.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ProductManage from "../Pages/ProductManage/ProductManage.jsx";
import Profile from "../Pages/Profile";
import RequestHostDetails from "../Pages/RequestHostDetails/RequestHostDetails.jsx";
import RulesAndRegulation from "../Pages/RulesAndRegulation.jsx";
import ShippingManage from "../Pages/ShippingManage/ShippingManage.jsx";
import Subscription from "../Pages/Subscription.jsx";
import Terms from "../Pages/Terms";
import Transaction from "../Pages/Transaction/Transaction.jsx";
import UserDetails from "../Pages/UserDetails.jsx";
import PrivateLogin from "./PrivateLogin.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/order-manage",
        element: <OrderManagement />,
      },
      {
        path: "/product-manage",
        element: <ProductManage />,
      },
      {
        path: "/product-manage/:id",
        element: <EditProduct />,
      },
      {
        path: "/product-manage/add-product",
        element: <AddProduct />,
      },

      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/customer-manage",
        element: <CustomerManager />,
      },
      {
        path: "/manager-manage",
        element: <ManagerManage />,
      },
      {
        path: "/banner-manage",
        element: <BannerManage />,
      },

      {
        path: "/total-join-request",
        element: <TotalJoinRequest />,
      },
      {
        path: "/request-host-details/:id",
        element: <RequestHostDetails />,
      },

      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/shipping-manage",
        element: <ShippingManage />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/user-details",
        element: <UserDetails />,
      },
      {
        path: "/manage-items",
        element: <ManageItems />,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/faqs",
        element: <Facts />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/rules-regulation",
        element: <RulesAndRegulation />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: (
      <PrivateLogin>
        <Login />
      </PrivateLogin>
    ),
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/auth/otp",
    element: <Otp />,
  },
  {
    path: "/auth/update-password",
    element: <UpdatePassword />,
  },
]);
