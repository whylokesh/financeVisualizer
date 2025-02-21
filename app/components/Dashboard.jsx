"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";

const Dashboard = () => {
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [recentTransactions, setRecentTransactions] = useState([]);

    useEffect(() => {
        const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        setTotalExpenses(transactions.reduce((sum, tx) => sum + tx.amount, 0));
        setRecentTransactions(transactions.slice(-3));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold">Total Expenses</h2>
                    <p>₹{totalExpenses}</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold">Recent Transactions</h2>
                    {recentTransactions.map((tx, index) => (
                        <p key={index}>{tx.description} - ₹{tx.amount}</p>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
