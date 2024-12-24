
import { Select } from 'antd';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetIncomeGrowthQuery } from '../../redux/Api/dashboardApi';

const items = [
    {
        label: 2023,
        key: "2023",
    },
    {
        label: 2024,
        key: "2024",
    },
    {
        label: 2025,
        key: "2025",
    },
    {
        label: 2026,
        key: "2026",
    },
];
const SubscriptionGrowth = () => {
     const [year, setYear] = useState('2024')

     const {data :  getIncomeGrowth} = useGetIncomeGrowthQuery(year)

     const data = getIncomeGrowth?.data?.data?.map((income, i )=>{
        return (
            {
                name: income?.month,
                uv: income?.totalIncome,
            }
        )
     })

    const handleChange = (value) => {
        setYear(value);
    };
    return (
        <>
            <div className='between-center'>
                <p className='text-xl font-medium'>Transaction Growth</p>
                <Select
                    defaultValue="2024"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={items}
                />
            </div>
            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#0044B4" opacity={1} fillOpacity={1} fill="#0044B4" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default SubscriptionGrowth
