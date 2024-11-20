import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MonthSelect= () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Select defaultValue="July" style={{ width: 120 }}>
      {months.map((month, index) => (
        <Option key={index} value={month}>
          {month}
        </Option>
      ))}
    </Select>
  );
};

export default MonthSelect;
