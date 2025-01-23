import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import ShippingManagementTable from "../../Components/ShippingManagement/ShippingManageTable";
import { useGetAllOrdersQuery } from "../../redux/Api/shippingApis/shippingAPIs";

const ShippingManage = () => {
  // console.log("Dataq", orderData?.data.result);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useGetAllOrdersQuery({ page, searchTerm });

  return (
    <>
      <section className="mx-2 bg-white px-3 pt-3">
        <div>
          {/* Top bar */}
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="flex items-center justify-start h-full w-full">
              <BsArrowLeftShort size={25} className="mr-2" />
              Shipping management
            </div>

            <div className="relative w-full md:w-auto mt-4 md:mt-0">
              <FiSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 text-gray-500 cursor-pointer" />

              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                className="h-10 pl-10 border w-full focus:outline-none min-w-[250px] md:min-w-[350px] rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Shipping management table information */}
          <div className="mt-7 overflow-x-auto">
            <ShippingManagementTable
              data={data}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingManage;
