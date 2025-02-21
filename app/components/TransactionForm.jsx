    "use client";
    import { useState } from "react";
    import { Button } from "@/app/components/ui/button";
    import { Input } from "@/app/components/ui/input";
    import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/components/ui/select";

    const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

    const TransactionForm = () => {
        const [amount, setAmount] = useState("");
        const [description, setDescription] = useState("");
        const [category, setCategory] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!amount || !description || !category) return;

            const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
            const newTransaction = {
                amount: Number(amount),
                description,
                category,
                date: new Date().toISOString()
            };

            localStorage.setItem("transactions", JSON.stringify([...transactions, newTransaction]));
            setAmount("");
            setDescription("");
            setCategory("");
            window.location.reload()
        };

        return (
            <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
                <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <Input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <Select onValueChange={setCategory} required>
                    <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Button type="submit">Add Transaction</Button>
            </form>
        );
    };

    export default TransactionForm;
