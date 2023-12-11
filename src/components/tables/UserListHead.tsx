import React from 'react';
import { TableHeadPropsType } from '@/types/public';
import { TableRow, TableCell, TableHead } from '@mui/material';

const TableHeader: React.FC<{headLabel: TableHeadPropsType[]}> = ({headLabel}) => {
    return (
        <TableHead>
            <TableRow className='dark:bg-slate-600/20'>
                {headLabel.map((headCell) => (
                    <TableCell
                        className='dark:border-slate-600'
                        key={headCell.id}
                        align={headCell.align}
                    >
                        <span className='dark:text-white'>{headCell.label}</span>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;