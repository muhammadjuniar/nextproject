"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    click: 4000,
    visit: 2400,
  },
  {
    name: "Mon",
    click: 3000,
    visit: 1398,
  },
  {
    name: "Tue",
    click: 2000,
    visit: 3800,
  },
  {
    name: "Wed",
    click: 2780,
    visit: 3908,
  },
  {
    name: "Thu",
    click: 1890,
    visit: 4800,
  },
  {
    name: "Fri",
    click: 2390,
    visit: 3800,
  },
  {
    name: "Sat",
    click: 3490,
    visit: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
