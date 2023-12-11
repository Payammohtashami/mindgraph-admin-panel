"use client"
import React from 'react';

// hooks
import { useGetCompaniesList } from '@/http/query';

// components
import CompanyCard from './components/CompanyCard';
import { AddRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';


export interface CompanyItemsType {
    id: number,
    name: string,
};

const Companies: React.FC = () => {
    // hooks
    const { data, isLoading } = useGetCompaniesList();
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h1 className='text-3xl dark:text-white font-bold'>Companies List</h1>
            </div>
            <div className="grid gap-4 grid-cols-12">
                {isLoading ? 
                    <div className="flex items-center justify-center py-12">
                        <CircularProgress />
                    </div>
                    :
                    data?.map((company: CompanyItemsType) => (
                        <CompanyCard key={company.id} data={company} />
                    ))
                }
            </div>
        </>
    );
};

export default Companies;