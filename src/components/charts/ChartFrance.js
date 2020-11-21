import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default function NewCaseFrance({franceData}) {

const data = franceData.data.filter(dayData => {
  const date = new Date(dayData.date);
  return date >= new Date("2020-02-01") && date < new Date("2020-03-01");
});

    return (
      <div style={{ width: '100%', height: 300 }}>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="new_cases" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="new_deaths" stroke="#82ca9d" />
      </LineChart>
      </div>
    );
  }