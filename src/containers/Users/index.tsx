"use client"
import React, { useState } from 'react';
import { useGetUsersList } from '@/http/query';
import TableComponent from '@/components/tables';
import { TableHeadPropsType } from '@/types/public';
import TableBody from './TableBody';
import { AddRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';


export interface UsersItemsType {
    id: number,
    email: string,
    accessGroup: string,
    companyId: number,
    name: string,
};

const Users = () => {
    const { data, isLoading } = useGetUsersList();
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
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
        {
            id: 6,
            label: '',
            align: 'right',
        },
    ];
    return (
        <>
            <div className="flex justify-between mb-6 items-center">
                <h1 className='text-3xl dark:text-white font-bold'>Users List</h1>
                <button className='text-white bg-primary-400 px-4 py-2 rounded-xl flex justify-center items-center transition-all text-sm font-medium hover:ring-8 opacity-100 cursor-pointer'>
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
                            <TableBody data={items} key={items?.id} className='[&>.MuiTableCell-root]:dark:!border-slate-700 w-full [&>.MuiTableCell-root]:last:border-none' />
                        ))}
                    </TableComponent>
                }
            </div>
        </>
    );
};

export default Users;