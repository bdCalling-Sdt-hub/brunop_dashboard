import { BsArrowLeftShort } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import TransactionTable from "../Components/TranstactionTable/TransactionTable"
import { Link } from "react-router-dom"
import { Input } from "antd"

const TransactionHistory = () => {


    return (
        <div className="p-2 shadow-md">
            <div className="flex justify-between item-center pb-5 ">
                <div className="flex justify-between items-center  w-full">
                    <div className="flex items-center gap-2">
                        <Link to={-1}><BsArrowLeftShort size={25} /></Link>
                        Transaction

                    </div>
                    <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
                </div>
                
            </div>

            {/* User Details table */}

            <TransactionTable pagination={{
                pageSize: 5,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                locale: {
                    items_per_page: '',
                    prev_page: 'Previous',
                    next_page: 'Next',
                },
            }}
            />


        </div>
    )
}
export default TransactionHistory