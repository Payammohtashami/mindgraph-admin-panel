"use client"
import React, { useEffect } from 'react';

// hooks
import { getcompaniesData } from '@/features/companies/asyncActions';
import { useDispatch, useSelector } from 'react-redux';

// components
import CompanyCard from './components/CompanyCard';
import { CircularProgress } from '@mui/material';

// types
import { RootState } from '@/libs/store';

export interface CompanyItemsType {
    id: number,
    name: string,
};

const Companies: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const companiesState: any = useSelector<RootState>((state) => state.companiesState);

    // effects
    useEffect(() => {
        dispatch(getcompaniesData());
    }, []);
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h1 className='text-3xl dark:text-white font-bold'>Companies List</h1>
            </div>
            <div className="grid gap-4 grid-cols-12">
                {companiesState?.isFetching ? 
                    <div className="flex items-center justify-center py-12">
                        <CircularProgress />
                    </div>
                    :
                    companiesState?.data?.map((company: CompanyItemsType) => (
                        <CompanyCard key={company.id} data={company} />
                    ))
                }
            </div>
        </>
    );
};

export default Companies;