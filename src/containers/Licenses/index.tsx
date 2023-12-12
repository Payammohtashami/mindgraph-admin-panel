"use client"
import React, { useEffect, useState } from 'react';

// hooks
import AddLicensesModal from './components/AddLicensesModal';
import { AddRounded } from '@mui/icons-material';

// redux
import { getLicensesData, getLicensesDataWithPaginations } from '@/features/licenses/asyncActions';
import { useDispatch, useSelector } from 'react-redux';

// components
import TableBody from './components/TableBody';
import TableComponent from '@/components/tables';
import { CircularProgress } from '@mui/material';

// types
import type { RootState } from '@/libs/store';
import type { LicensesDataItems } from '@/features/licenses/licensesSlice';
import type { TableHeadPropsType } from '@/types/public';
import { getcompaniesData } from '@/features/companies/asyncActions';



const tableHead: TableHeadPropsType[] = [
    {
        id: 1,
        label: 'Id',
        align: 'left',
    },
    {
        id: 2,
        label: 'name',
        align: 'left',
    },
    {
        id: 3,
        label: 'company',
        align: 'left',
    },
    {
        id: 4,
        label: 'status',
        align: 'left',
    },
    {
        id: 5,
        label: '',
        align: 'left',
    },
]

const Licenses: React.FC = () => {
    // states
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [openAddLicensesModal, setOpenAddLicensesModal] = useState<boolean>(false)

    // hooks
    const dispatch = useDispatch();
    const licenseState: any = useSelector<RootState>((state) => state.licenseState);
    const companiesState: any = useSelector<RootState>((state) => state.companiesState);

    
    // effects
    useEffect(() => {
        // get licenses data
        if(licenseState?.fetchData?.length > 0) return;
        dispatch(getLicensesData());
    }, [licenseState?.fetchData]);

    useEffect(() => {
        // update list of licenses when page and rowsPerPage changed
        dispatch(getLicensesDataWithPaginations({page, rowsPerPage}))
    }, [page, rowsPerPage, licenseState?.fetchData]);

    useEffect(() => {
        // get Compnies list when data is not exist
        if(companiesState?.data?.length > 0) return;
        dispatch(getcompaniesData());
    }, [companiesState?.data]);
    
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
            <div className='border shadow-lg dark:border-slate-700 rounded-2xl overflow-hidden'>
                {licenseState?.isFetching ? 
                    <div className="flex items-center justify-center py-12">
                        <CircularProgress />
                    </div>
                    :
                    <TableComponent 
                        page={page}
                        setPage={setPage}
                        TABLE_HEAD={tableHead}
                        total={licenseState?.total ?? 0}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        isPaginationExist={true}
                    >
                        {licenseState?.data?.map((items: LicensesDataItems) => (
                            <TableBody companies={companiesState?.data} data={items} key={items?.id} className='[&>.MuiTableCell-root]:dark:!border-slate-700 w-full [&>.MuiTableCell-root]:last:border-none' />
                        ))}
                    </TableComponent>
                }
            </div>
            {openAddLicensesModal && 
                <AddLicensesModal openModal={openAddLicensesModal} setOpenModal={setOpenAddLicensesModal} />}
        </>
    );
};

export default Licenses;