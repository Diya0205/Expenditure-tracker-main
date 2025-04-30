import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast';
import { db } from '@/utils/dbConfig';
import { Budgets, Transactions } from '@/utils/schema';
import { Loader } from 'lucide-react';
import moment from 'moment/moment';
import React, { useState, useEffect } from 'react'

function AddExpense({ budgetId, user, refreshData }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [budgetDetails, setBudgetDetails] = useState(null);

    // Fetch budget details when component mounts
    useEffect(() => {
        const fetchBudgetDetails = async () => {
            const result = await db.select({
                amount: Budgets.amount,
                totalSpend: sql`sum(${Transactions.amount})`.mapWith(Number),
            }).from(Budgets)
            .leftJoin(Transactions, eq(Budgets.id, Transactions.budgetId))
            .where(eq(Budgets.id, budgetId))
            .groupBy(Budgets.id);
            
            if (result && result.length > 0) {
                setBudgetDetails(result[0]);
            }
        };
        
        fetchBudgetDetails();
    }, [budgetId, refreshData]);

    const addNewTransaction = async () => {
        if (!name || !amount) return;
        
        setLoading(true);
        
        // Convert amount to number
        const transactionAmount = parseFloat(amount);
        const budgetAmount = parseFloat(budgetDetails?.amount || 0);
        const currentSpend = budgetDetails?.totalSpend || 0;
        
        // Check if transaction would exceed budget
        if (currentSpend + transactionAmount > budgetAmount) {
            setLoading(false);
            toast({
                title: "Budget Limit Exceeded!",
                description: `Adding ₹${amount} would exceed your budget of ₹${budgetAmount}. Current spending: ₹${currentSpend}`,
                variant: "destructive",
            });
            return;
        }

        try {
            const result = await db.insert(Transactions).values({
                name: name,
                amount: amount,
                budgetId: budgetId,
                createdAt: moment().format('DD/MM/YYYY'),
            }).returning({ insertedId: Budgets.id });

            if (result) {
                setName('');
                setAmount('');
                refreshData();
                toast({
                    title: "Transaction Added",
                    description: "Your transaction has been recorded successfully!",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to add transaction",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='border p-5 rounded-lg'>
            <h2 className='font-bold text-lg'>Add Transactions</h2>
            <div className='mt-2'>
                <h2 className='text-black font-bold'>Transaction name</h2>
                <Input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="eg. College Fee" 
                />
            </div>
            <div className='mt-2'>
                <h2 className='text-black font-bold'>Transaction Amount</h2>
                <Input 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="eg. 2000" 
                />
            </div>
            <Button 
                onClick={addNewTransaction}
                disabled={!(name && amount)} 
                className="mt-3 w-full"
            >
                {loading ? <Loader className='animate-spin' /> : "Add new Transaction"}
            </Button>
        </div>
    )
}

export default AddExpense