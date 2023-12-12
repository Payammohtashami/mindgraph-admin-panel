"use client"
import React, { useState } from 'react';

// hooks
import { useGetUsersList } from '@/http/query';

// components
import TableBody from './components/TableBody';
import AddUserModal from './components/AddUserModal';
import TableComponent from '@/components/tables';
import { AddRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

// types
import type { TableHeadPropsType } from '@/types/public';

export interface UsersItemsType {
    id: number,
    email: string,
    accessGroup: string,
    companyId: number,
    name: string,
};


const tableHead: TableHeadPropsType[] = [
    {
        id: 1,
        label: 'Id',
        align: 'left',
    },
    {
        id: 2,
        label: 'Name',
        align: 'left',
    },
    {
        id: 3,
        label: 'Email',
        align: 'left',
    },
    {
        id: 4,
        label: 'Company ID',
        align: 'left',
    },
    {
        id: 5,
        label: 'Access Group',
        align: 'left',
    },
];

const Users = () => {
    // states
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false);

    // hooks
    const { data, isLoading } = useGetUsersList();
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h1 className='text-3xl dark:text-white font-bold'>Users List</h1>
                <button
                    disabled
                    onClick={() => setOpenAddUserModal(true)}
                    className='text-white bg-primary-400 px-4 py-2 rounded-xl flex justify-center items-center transition-all text-sm font-medium hover:ring-8 opacity-100 cursor-pointer'
                >
                    <AddRounded />
                    Add User
                </button>
            </div>
            <div className='border shadow-lg dark:border-slate-700 rounded-2xl overflow-hidden'>
                {isLoading ? 
                    <div className="flex items-center justify-center py-12">
                        <CircularProgress />
                    </div>
                    :
                    <TableComponent 
                        page={page}
                        setPage={setPage}
                        TABLE_HEAD={tableHead}
                        total={data?.length ?? 0}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        isPaginationExist={false}
                    >
                        {data?.map((items: UsersItemsType) => (
                            <TableBody data={items} key={items?.id} className='[&>.MuiTableCell-root]:dark:!border-slate-700 h-14 w-full [&>.MuiTableCell-root]:last:border-none' />
                        ))}
                    </TableComponent>
                }
            </div>
            {openAddUserModal && <AddUserModal openModal={openAddUserModal} setOpenModal={setOpenAddUserModal} />}
        </>
    );
};

export default Users;