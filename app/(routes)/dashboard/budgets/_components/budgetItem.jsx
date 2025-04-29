import Link from 'next/link'
import React from 'react'

function budgetItem({ budget }) {
  // Get progress 
  const calculateProgress = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return Math.min(100, Math.max(0, perc.toFixed(2)));
  }

  return (
    <Link href={"/dashboard/transactions/" + budget?.id} >
      <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer h-[150px]'>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-3xl p-3 px-4 bg-slate-100 rounded-full'>
              {budget?.icon}
            </h2>
            <div>
              <h2 className='font-bold '>
                {budget?.name}
              </h2>
              <h2 className='text-sm text-gray-500'>
                {budget?.totalItem} Item
              </h2>
            </div>
          </div>
          <h2 className='font-bold text-primary text-lg'>
            ₹{budget?.amount}
          </h2>
        </div>
        <div className='mt-5'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xs text-slate-400'>
              ₹{budget?.totalSpend ? budget?.totalSpend : 0} Spent
            </h2>
            <h2 className={`text-xs ${budget?.amount - budget?.totalSpend >= 0 ? 'text-slate-400' : 'text-red-600'}`}>
              {budget?.amount - budget?.totalSpend >= 0
                ? `₹${budget?.amount - budget?.totalSpend} Remaining`
                : `Exceeded budget by ₹${Math.abs(budget?.amount - budget?.totalSpend)}`}
            </h2>
          </div>
          <div className='w-full bg-slate-300 h-2 rounded-full'>
            <div className='bg-primary h-2 rounded-full' style={{ width: `${calculateProgress()}%` }}>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default budgetItem
