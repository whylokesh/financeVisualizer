"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("transactions") || "[]");
        setTransactions(data);
    }, []);

    const handleDelete = (index) => {
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
        setTransactions(updatedTransactions);
        window.location.reload()
    };

    return (
        <Card className="p-4">
            <h2 className="text-lg font-bold mb-2">Transactions</h2>
            {transactions.length === 0 ? (
                <p>No transactions yet.</p>
            ) : (
                transactions.map((tx, index) => (
                    <CardContent key={index} className="flex justify-between items-center border-b py-2">
                        <span>{tx.description} - ₹{tx.amount} ({tx.category})</span>
                        <Button onClick={() => handleDelete(index)} variant="destructive">Delete</Button>
                    </CardContent>
                ))
            )}
        </Card>
    );
};

export default TransactionList;
