import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const YearSelect= () => {
  // Generate a list of years, for example, from 2000 to 2024
  const years = Array.from(new Array(25), (val, index) => 2000 + index);

  return (
    <Select defaultValue={2024} style={{ width: 120 }}>
      {years.map((year) => (
        <Option key={year} value={year}>
          {year}
        </Option>
      ))}
    </Select>
  );
};

export default YearSelect;
