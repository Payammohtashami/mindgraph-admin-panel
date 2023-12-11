import React, { useState } from 'react';
// components
import { TableCell, TableBody as MuiTableBody } from '@mui/material';
import { DeleteRounded, EditRounded } from '@mui/icons-material';

// modals
import DeleteModal from './DeleteModal';

// types
import type { UsersItemsType } from '..';

const TableBody: React.FC<{data: UsersItemsType, className: string}> = ({data, className}) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
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
                <TableCell align='right'>
                    <div className='flex justify-end'>
                        {/* <button className='dark:text-white p-2 transition-all rounded-full hover:dark:bg-slate-700/60'>
                            <EditRounded fontSize='small' />
                        </button> */}
                        <button onClick={() => setOpenDeleteModal(true)} className='text-red-500 transition-all p-2 rounded-full hover:bg-red-400/10'>
                            <DeleteRounded fontSize='small' />
                        </button>
                    </div>
                </TableCell>
            </MuiTableBody>
            {openDeleteModal && 
                <DeleteModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} />
            }
        </>
    );
};

export default TableBody;