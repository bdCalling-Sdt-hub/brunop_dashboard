import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useGetProfileQuery } from '../redux/Api/userApi';
import { Skeleton } from 'antd';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { data: getUserInfo,isError, isLoading  , isFetching} = useGetProfileQuery();
    
    if(isLoading || isFetching){
        return <div className="flex items-center justify-center"><Skeleton active /></div>;
    }
    if(isError || !getUserInfo?.data?.email || getUserInfo?.data?.role !== 'ADMIN' ){
        return <Navigate to={'/auth/login'}  state={{ from: location }} />
    }
  return children
}

export default PrivateRoute