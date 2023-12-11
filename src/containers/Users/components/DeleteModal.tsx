import React from 'react';
import Modal from '@/components/modal';
import { DeleteRounded } from '@mui/icons-material';
import { ModalPropsType } from '@/types/public';



const DeleteModal: React.FC<ModalPropsType> = ({openModal, setOpenModal}) => {
    return (
        <Modal
            open={openModal}
            setOpen={setOpenModal}
        >
            <div className="flex justify-center items-center mb-6">
                <div className="rounded-full bg-red-500/10 p-4">
                    <DeleteRounded className='text-red-500' fontSize='large' />
                </div>
            </div>
            <p className='text-center dark:text-white text-2xl font-bold'>Are You Sure?</p>
            <p className='text-center dark:text-white font-medium pb-3'>If you are sure to delete the user, click {`"Yes"`}.</p>
            <div className="flex gap-3 mt-4">
                <button className='flex-1 hover:ring-4 ring-red-600/50 text-white bg-red-500 py-2 font-bold rounded-2xl'>Yes</button>
                <button onClick={() => setOpenModal(false)} className='flex-1 hover:ring-4 dark:text-white border transition font-bold border-primary-400 hover:bg-primary-400/20 rounded-2xl'>No</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;