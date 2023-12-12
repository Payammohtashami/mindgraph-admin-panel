import React from 'react';

// components
import { Avatar } from '@mui/material';

// types
import type { CompanyItemsType } from '..';
import Link from 'next/link';
import routes from '@/configs/routes';

const CompanyCard: React.FC<{data: CompanyItemsType}> = ({data}) => {
    return (
        <div className='flex justify-between col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-2xl bg-slate-200 dark:bg-slate-800'>
            <div className="flex gap-3 items-center">
                <Avatar>
                    <span className='font-bold'>{data?.name[0]}</span>
                </Avatar>
                <p className='dark:text-white font-bold'>{data?.id} - {data?.name}</p>
            </div>
            <Link
                href={routes.companies.detail(data.id)} 
                className='dark:text-white leading-6 hover:ring-4 bg-primary-400 disabled:bg-transparent px-4 py-2 rounded-xl text-sm font-medium'
            >
                View
            </Link>
        </div>
    );
};

export default CompanyCard;