import React, { useState } from 'react';

// components
import DeleteModal from './DeleteModal';
import { DeleteRounded, EditRounded } from '@mui/icons-material';
import { TableCell, TableBody as MuiTableBody } from '@mui/material';

// type
import type { LicensesDataItems } from '@/features/licenses/licensesSlice';
import type { CompaniesDataItems } from '@/features/companies/companiesSlice';

interface LicensesPropsType {
    data: LicensesDataItems,
    className: string,
    companies: CompaniesDataItems[],
}

const TableBody: React.FC<LicensesPropsType> = ({className, data, companies}) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const companyData = companies?.find((item: CompaniesDataItems) => item?.id === data?.companyId); // find company name by license companyId
    
    return (
        <>
            <MuiTableBody className={className}>
                <TableCell>
                    <span className='dark:text-white'>{data?.id}</span>
                </TableCell>
                <TableCell>
                    <span className='dark:text-white'>{data?.name}</span>
                </TableCell>
                <TableCell>
                    <span className='dark:text-white'>{!!companyData?.name ? companyData?.name : data?.companyId}</span>
                </TableCell>
                <TableCell>
                    <span className={`font-medium py-2 text-xs text-white ${data?.status === 'available' ? "bg-green-700" : 'bg-amber-600'} rounded-3xl px-4 py-1`}>{(data?.status ?? '')?.toUpperCase()}</span>
                </TableCell>
                <TableCell align='right'>
                    <div className='flex justify-end'>
                        <button onClick={() => setOpenDeleteModal(true)} className='text-red-500 transition-all p-2 rounded-full hover:bg-red-400/10'>
                            <DeleteRounded fontSize='small' />
                        </button>
                    </div>
                </TableCell>
            </MuiTableBody>
            {openDeleteModal && 
                <DeleteModal id={data?.id} openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} />
            }
        </>
    );
};

export default TableBody;