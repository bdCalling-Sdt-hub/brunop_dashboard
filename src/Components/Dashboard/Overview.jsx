import { Select } from "antd";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetUserGrowthQuery } from "../../redux/Api/dashboardApi";

const Overview = () => {
  const [year, setYear] = useState("2024");
  /**user growth API */

  const { data: userGrowth } = useGetUserGrowthQuery(year);

  const chartData = userGrowth?.data?.data?.map((user) => {
    return {
      name: user?.month,
      uv: user?.count,
    };
  });

  // console.log(userGrowth);

  const handleChange = (value) => {
    setYear(value);
  };
  const items = [
    {
      label: 2024,
      value: "2024",
    },
    {
      label: 2025,
      value: "2025",
    },
    {
      label: 2026,
      value: "2026",
    },
    {
      label: 2027,
      value: "2027",
    },
  ];
  return (
    <>
      <div className="between-center">
        <p className="text-xl font-medium">User Growth</p>
        <Select
          defaultValue="2024"
          style={{ width: 120 }}
          onChange={handleChange}
          options={items}
        />
      </div>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={500}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
            <Bar
              dataKey="uv"
              stackId="a"
              fill="#0044B4"
              radius={[25, 25, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Overview;
