import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import App from "../App";
import TotalJoinRequest from "../Pages/TotalJoinRequest.jsx";
// import DriverProfile from "../Pages/DriverProfile";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Terms from "../Pages/Terms";
import Profile from "../Pages/Profile";
import Notification from "../Pages/Notification.jsx";
import Login from "../Pages/Auth/Login.jsx";
import ForgotPassword from "../Pages/Auth/ForgotPassword.jsx";
import Otp from "../Pages/Auth/Otp.jsx";
import UpdatePassword from "../Pages/Auth/UpdatePassword.jsx";
import Subscription from "../Pages/Subscription.jsx";
import UserDetails from "../Pages/UserDetails.jsx";
import ManageItems from "../Pages/ManageItems.jsx";
import RulesAndRegulation from "../Pages/RulesAndRegulation.jsx";
import Facts from "../Pages/Facts.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PrivateLogin from "./PrivateLogin.jsx";
import RequestHostDetails from "../Pages/RequestHostDetails/RequestHostDetails.jsx";
import OrderManagement from "../Pages/OrderManagement/OrderManagement.jsx";
import ProductManage from "../Pages/ProductManage/ProductManage.jsx";
import EditProduct from "../Pages/EditProduct/EditProduct.jsx";
import Feedback from "../Pages/Feedback/Feedback.jsx";
import CustomerManager from "../Pages/CustomerManager/CustomerManager.jsx";
import ManagerManage from "../Pages/ManagerManage/ManagerManage.jsx";
import BannerManage from "../Pages/BannerManage/BannerManage.jsx";
import PremiumUser from "../Pages/PremiumUser/PremiumUser.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/order-manage',
                element: <OrderManagement/>,
            },
            {
                path: '/product-manage',
                element: <ProductManage/>,
            },
            {
                path: '/product-manage/:id',
                element: <EditProduct/>,
            },
            {
                path: '/feedback',
                element: <Feedback/>,
            },
            {
                path: '/customer-manager',
                element: <CustomerManager/>,
            },
            {
                path: '/manager-manage',
                element: <ManagerManage/>,
            },
            {
                path: '/banner-manage',
                element: <BannerManage/>,
            },
            {
                path: '/premium-user',
                element: <PremiumUser/>,
            },
            {
                path: '/total-join-request',
                element: <TotalJoinRequest />,
            },
            {
                path : '/request-host-details/:id',element : <RequestHostDetails/>
            },
            
            {
                path : '/subscription',
                element : <Subscription/>
            },
            {
                path : '/user-details',
                element : <UserDetails/>
            },
            {
                path : '/manage-items',
                element : <ManageItems/>
            },
            
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />,
            },
            
            {
                path: '/faqs',
                element: <Facts />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/rules-regulation',
                element: <RulesAndRegulation />,
            },
            {
                path: '/profile',
                element: <Profile />,
            }, 
            

            {
                path: '/notification',
                element: <Notification />,
            }, 

        ]
    },
    {
        path: '/auth/login',
        element: <PrivateLogin><Login/></PrivateLogin>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword/>
    },

    {
        path: '/auth/otp',
        element: <Otp/>
    },
    {
        path: '/auth/update-password',
        element: <UpdatePassword/>
    }
]);