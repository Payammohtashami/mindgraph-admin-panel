import React from 'react';

// components
import { TableCell, TableBody as MuiTableBody } from '@mui/material';

// type
import type { LicensesDataItems } from '@/features/licenses/licensesSlice';

interface LicensesPropsType {
    data: LicensesDataItems,
    className: string,
}

const LicenseTableBody: React.FC<LicensesPropsType> = ({className, data}) => {
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
                    <span className={`font-medium py-2 text-xs text-white ${data?.status === 'available' ? "bg-green-700" : 'bg-amber-600'} rounded-3xl px-4 py-1`}>{(data?.status ?? '')?.toUpperCase()}</span>
                </TableCell>
            </MuiTableBody>
        </>
    );
};

export default LicenseTableBody;