"use client";
import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import CategoryChart from "./components/CategoryChart";
import BudgetChart from "./components/BudgetChart";
import Dashboard from "./components/Dashboard";
import { Card, CardContent } from "@/app/components/ui/card";

export default function Home() {

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">💰 Personal Finance Visualizer</h1>

      {/* Add Transaction */}
      <TransactionForm />

      {/* Dashboard Summary */}
      <Dashboard />

      {/* Transaction List */}
      <TransactionList />

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Category-wise Pie Chart */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold">📊 Category Breakdown</h2>
            <CategoryChart />
          </CardContent>
        </Card>

        {/* Budget vs Actual Chart */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold">📈 Budget vs Actual</h2>
            <BudgetChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
