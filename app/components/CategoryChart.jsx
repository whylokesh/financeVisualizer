"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"];

const CategoryChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        const categoryData = transactions.reduce((acc, tx) => {
            acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
            return acc;
        }, {});

        setData(Object.entries(categoryData).map(([category, total]) => ({ category, total })));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={data} dataKey="total" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                    {data.map((_, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CategoryChart;
