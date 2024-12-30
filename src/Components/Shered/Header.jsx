import { Badge } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";
import { imageUrl } from '../../redux/Api/baseApi';
import { useGetProfileQuery } from '../../redux/Api/userApi';
import { FaRegUser } from 'react-icons/fa6';

const Header = () => {
    const { data: getUserInfo,isError, isLoading } = useGetProfileQuery();
    const navigate = useNavigate()
    return (
        <div className='w-full py-4 bg-white end-center  gap-4'>
            <div onClick={() => navigate('/notification')}>
                <Link to="/feedback" style={{ boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.24)" }} className=' bg-[#F2F2F2] h-10 flex items-center w-10 rounded-full p-2'>
                    <Badge color="#C30303" >
                        <IoIosNotificationsOutline color="#6A6A6A" size={24} />
                    </Badge>
                </Link>
            </div>
            <Link to={'/profile'} className='end-center gap-1 border-gray-400 p-[2px] px-4 rounded-md cursor-pointer'>
            {
                 getUserInfo?.data?.profile_image ?  <img className='h-10 w-10 rounded-full object-cover shadow-md border-2' src={ `${imageUrl}${getUserInfo?.data?.profile_image}`} alt="" /> : <FaRegUser size={20} />
            }
               
                <p className='font-medium '>{getUserInfo?.data?.name || "Not available"}</p>
            </Link>
        </div>
    )
}

export default Header
