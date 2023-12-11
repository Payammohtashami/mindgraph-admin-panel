import React from 'react';
import { Modal as ModalMui, SxProps } from '@mui/material';


export interface ModalType {
    children?: React.ReactNode,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    style?: SxProps,
};


const Modal: React.FC<ModalType> = ({children, open, setOpen, style={}}) => {
    const handleClose = () => setOpen(false);
    return (
        <ModalMui
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                '> div':{ 
                    '::-webkit-scrollbar': {
                        width: '0px !important',
                    },
                }
            }}
        >
            <div 
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
                className='absolute overflow-auto bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 top-1/2 left-1/2 max-w-md w-full max-h-[90vh] shadow-xl'>
                {children}
            </div>
        </ModalMui>
    );
};

export default Modal;