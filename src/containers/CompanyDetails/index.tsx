"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import routes from '@/configs/routes';

// hooks & redux
import { useParams } from 'next/navigation';
import { getLicensesData } from '@/features/licenses/asyncActions';
import { getcompaniesData } from '@/features/companies/asyncActions';
import { useDispatch, useSelector } from 'react-redux';

// components
import TableComponent from '@/components/tables';
import AddLicensesModal from './components/AddLicensesModal';
import LicenseTableBody from './components/LicenseTableBody';
import { CircularProgress } from '@mui/material';
import { AddRounded, ArrowLeftRounded } from '@mui/icons-material';

// types
import type { RootState } from '@/libs/store';
import type { CompaniesDataItems, CompaniesStateType } from '@/features/companies/companiesSlice';
import type { TableHeadPropsType } from '@/types/public';
import type { LicensesDataItems } from '@/features/licenses/licensesSlice';



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
        id: 4,
        label: 'status',
        align: 'left',
    },
];


const CompanyDetials = () => {
    // state
    const [openAddLicensesModal, setOpenAddLicensesModal] = useState<boolean>(false)

    // hooks
    const params: {id?: any} = useParams();
    const dispatch = useDispatch();
    const CompaniesState: CompaniesStateType | any = useSelector<RootState>((state) => state.companiesState);
    const licenseState: any = useSelector<RootState>((state) => state.licenseState);
    
    // filtered Data
    const findCompanyById: CompaniesDataItems = CompaniesState?.data?.find((item: CompaniesDataItems) => item?.id === +params?.id);

    // effects
    useEffect(() => {
        // get licenses data
        if(licenseState?.fetchData?.length > 0) return;
        dispatch(getLicensesData());
    }, [licenseState?.fetchData]);

    useEffect(() => {
        // update CompaniesState data when not exist
        if(CompaniesState?.data?.length > 0) return;
        dispatch(getcompaniesData());
    }, [CompaniesState?.data])

    return (
        <div>
            <Link href={routes.companies.base} className='dark:text-white w-fit flex gap-0 hover:gap-4 transition-all'>
                <ArrowLeftRounded />
                <span>
                    Back
                </span>
            </Link>
            <div className="flex justify-between items-center mt-8">
                <h1 className='dark:text-white text-4xl'>{findCompanyById?.name}</h1>
                <button
                    onClick={() => setOpenAddLicensesModal(true)}
                    className='text-white bg-primary-400 px-4 py-2 rounded-xl flex justify-center items-center transition-all text-sm font-medium hover:ring-8 opacity-100 cursor-pointer'
                >
                    <AddRounded />
                    Add Licenses
                </button>
            </div>
            <div className='border shadow-lg dark:border-slate-700 rounded-2xl overflow-hidden mt-6'>
                {licenseState?.isFetching ? 
                    <div className="flex items-center justify-center py-12">
                        <CircularProgress />
                    </div>
                    :
                    <TableComponent
                        page={0}
                        setPage={() => {}}
                        rowsPerPage={0}
                        setRowsPerPage={() => {}}
                        TABLE_HEAD={tableHead}
                        total={licenseState?.total ?? 0}
                        isPaginationExist={false}
                    >
                        {licenseState?.fetchData?.filter((item: LicensesDataItems) => item?.companyId === +params?.id)?.map((items: LicensesDataItems) => (
                            <LicenseTableBody data={items} key={items?.id} className='[&>.MuiTableCell-root]:dark:!border-slate-700 w-full h-16 [&>.MuiTableCell-root]:last:border-none' />
                        ))}
                    </TableComponent>
                }
            </div>
            {openAddLicensesModal && 
                <AddLicensesModal id={+params?.id} openModal={openAddLicensesModal} setOpenModal={setOpenAddLicensesModal} />}
        </div>
    );
};


export default CompanyDetials;