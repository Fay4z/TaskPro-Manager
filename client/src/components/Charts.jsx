import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line,
} from "recharts";

const Charts = ({ tasks }) => {
  // Calculate data for status distribution pie chart
  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  // Calculate data for priority distribution pie chart
  const priorityCounts = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  // Calculate data for task distribution by due date bar chart
  //   const dueDateCounts = tasks.reduce((acc, task) => {
  //     const dueDate = task.dueDate.toLocaleDateString(); // Group by date only
  //     acc[dueDate] = (acc[dueDate] || 0) + 1;
  //     return acc;
  //   }, {});
  return (
    <div>
      <h2>Status Distribution</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={Object.entries(statusCounts)}
          dataKey="1"
          nameKey="0"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {Object.entries(statusCounts).map(([status, count], index) => (
            <Cell
              key={`cell-${index}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <h2>Priority Distribution</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={Object.entries(priorityCounts)}
          dataKey="1"
          nameKey="0"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {Object.entries(priorityCounts).map(([priority, count], index) => (
            <Cell
              key={`cell-${index}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      {/* <h2>Task Distribution by Due Date</h2>
      <BarChart width={600} height={300} data={Object.entries(dueDateCounts)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="1" fill="#8884d8" />
      </BarChart> */}
    </div>
  );
};

export default Charts;
