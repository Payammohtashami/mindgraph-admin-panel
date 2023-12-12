import React from 'react';

// components
import { TableCell, TableBody as MuiTableBody } from '@mui/material';

// types
import type { UsersItemsType } from '..';

const TableBody: React.FC<{data: UsersItemsType, className: string}> = ({data, className}) => {
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
                    <span className='dark:text-white'>{data?.email}</span>
                </TableCell>
                <TableCell>
                    <span className='dark:text-white'>{data?.companyId}</span>
                </TableCell>
                <TableCell>
                    <span className={`font-medium text-white ${data?.accessGroup === 'admin' ? "bg-green-700" : 'bg-amber-600'} rounded-3xl px-4 py-1`}>{(data?.accessGroup).toUpperCase()}</span>
                </TableCell>
            </MuiTableBody>
            
        </>
    );
};

export default TableBody;