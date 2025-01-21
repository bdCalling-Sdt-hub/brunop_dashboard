import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ShippingManagementTable from "../../Components/ShippingManagement/ShippingManageTable";
import { ShippingFakeData } from "../../global/common";

const ShippingManage = () => {
  const data = ShippingFakeData;
  return (
    <>
      <section className="mx-2 bg-white px-3 pt-3">
        <div>
          {/* Top bar */}
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="flex items-center justify-start h-full w-full">
              <FaArrowLeft className="mr-2" />
              <p className="text-lg md:text-xl">Shipping management</p>
            </div>

            <div className="relative w-full md:w-auto mt-4 md:mt-0">
              <FiSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 text-gray-500 cursor-pointer" />
              <input
                type="search"
                className="h-10 pl-10 border w-full focus:outline-none min-w-[250px] md:min-w-[350px] rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Shipping management table information */}
          <div className="mt-7 overflow-x-auto">
            <ShippingManagementTable data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingManage;
