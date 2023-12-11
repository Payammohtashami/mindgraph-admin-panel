"use client"
import React, { useState } from 'react';

// hooks
import { useGetLicensesList } from '@/http/query';
import { AddRounded } from '@mui/icons-material';
import AddLicensesModal from './components/AddLicensesModal';

// components

const Licenses: React.FC = () => {
    // states
    const [openAddLicensesModal, setOpenAddLicensesModal] = useState<boolean>(false)

    // hooks
    const { data, isLoading } = useGetLicensesList()

    // handlers
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h1 className='text-3xl dark:text-white font-bold'>Licenses List</h1>
                <button
                    onClick={() => setOpenAddLicensesModal(true)}
                    className='text-white bg-primary-400 px-4 py-2 rounded-xl flex justify-center items-center transition-all text-sm font-medium hover:ring-8 opacity-100 cursor-pointer'
                >
                    <AddRounded />
                    Add Licenses
                </button>
            </div>
            {openAddLicensesModal && 
                <AddLicensesModal openModal={openAddLicensesModal} setOpenModal={setOpenAddLicensesModal} />}
        </>
    );
};

export default Licenses;