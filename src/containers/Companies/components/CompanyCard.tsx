import React from 'react';

// components
import { Avatar } from '@mui/material';

// types
import type { CompanyItemsType } from '..';

const CompanyCard: React.FC<{data: CompanyItemsType}> = ({data}) => {
    return (
        <div className='flex justify-between col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-2xl bg-slate-200 dark:bg-slate-800'>
            <div className="flex gap-3 items-center">
                <Avatar>
                    <span className='font-bold'>{data?.name[0]}</span>
                </Avatar>
                <p className='dark:text-white font-bold'>{data?.id} - {data?.name}</p>
            </div>
            <button 
                disabled={true}
                className='dark:text-white border hover:ring-4 bg-primary-400 disabled:bg-transparent disabled:border-primary-400 px-4 py-2 rounded-xl text-sm font-medium'
            >
                View
            </button>
        </div>
    );
};

export default CompanyCard;