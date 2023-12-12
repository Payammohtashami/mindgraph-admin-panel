import React from 'react';
import TableHeader from './UserListHead';
import { TableHeadPropsType } from '@/types/public';
import { Box, Table, TableContainer, TablePagination } from '@mui/material';
import Scrollbar from '../scrollbar';


interface TableComponentPropsType {
    page: number,
    total: number
    isPaginationExist?: boolean,
    rowsPerPage: number,
    children: React.ReactNode,
    setPage: React.Dispatch<React.SetStateAction<number>>
    setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
    TABLE_HEAD: TableHeadPropsType[],
};


const TableComponent: React.FC<TableComponentPropsType> = ({isPaginationExist = true, TABLE_HEAD, total, page, setPage, rowsPerPage, setRowsPerPage, children}) => {
    
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        if(!!Number(event.target.value)) {
            setPage(0);
            setRowsPerPage(parseInt(event.target.value, 10));
        }
    };

    return (
        <Box>
            <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHeader headLabel={TABLE_HEAD} />
                        {children}
                    </Table>
                </TableContainer>
            </Scrollbar>
            {isPaginationExist ? 
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    component="div"
                    count={total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    className='dark:!text-white [&>.MuiToolbar-root>.MuiInputBase-root>svg]:dark:!text-white'
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                :
                null
            }
        </Box>
    );
};

export default TableComponent;