"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const budgets = {
    Food: 5000,
    Transport: 3000,
    Shopping: 7000,
    Bills: 6000,
    Entertainment: 4000,
    Other: 2000,
};

const BudgetChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        const categoryData = transactions.reduce((acc, tx) => {
            acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
            return acc;
        }, {});

        setData(Object.entries(budgets).map(([category, budget]) => ({
            category,
            budget,
            spent: categoryData[category] || 0,
        })));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="budget" fill="#82ca9d" />
                <Bar dataKey="spent" fill="#ff6384" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BudgetChart;
