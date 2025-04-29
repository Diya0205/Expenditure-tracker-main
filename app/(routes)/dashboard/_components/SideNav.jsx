"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { usePathname } from 'next/navigation';
import  Link  from 'next/link';
function SideNav() {
    const menuList= [
        {
            key: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            key: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            key: 3,
            name: 'Transactions',
            icon: ReceiptText,
            path: '/dashboard/transactions'
        },
        {
            key: 4,
            name: 'Buy me a Coffee',
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        }
    ];

    const path = usePathname();
    
    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 border shadow-md'>
            <div className='flex items-center text-primary font-bold'>
                <Image src='/logo.svg' alt='logo' width={100} height={100} />
                <h1>Bixpense</h1>
            </div>
            <div className='mt-5'>
                {menuList.map((menu) => (
                    <Link key={menu.key} href={menu.path}>
                        <h2 key={menu.key} className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 cursor-pointer rounded-md 
                        hover:text-primary hover:bg-rose-100 ${path == menu.path && 'text-primary bg-rose-100'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    );
}

export default SideNav;