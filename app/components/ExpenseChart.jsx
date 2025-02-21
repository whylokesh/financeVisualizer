"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ExpenseChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        const monthlyData = transactions.reduce((acc, tx) => {
            const month = new Date(tx.date).toLocaleString("default", { month: "short" });
            acc[month] = (acc[month] || 0) + tx.amount;
            return acc;
        }, {});

        setData(Object.entries(monthlyData).map(([month, total]) => ({ month, total })));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ExpenseChart;
