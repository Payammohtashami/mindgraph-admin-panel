import React from 'react';
import Modal from '@/components/modal';
import { AddRounded } from '@mui/icons-material';
import { ModalPropsType } from '@/types/public';
import TextField from '@/components/textField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addNewUserSchema } from '@/http/validation/User';

const AddUserModal: React.FC<ModalPropsType> = ({openModal, setOpenModal}) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: { email: '', name: '' },
        resolver: yupResolver(addNewUserSchema),
    });

    const onSubmit = (data: any) => {

    };
    
    return (
        <Modal
            open={openModal}
            setOpen={setOpenModal}
        >
            <div className="flex flex-col justify-center items-center mb-6">
                <div className="rounded-full bg-primary-500/10 p-4">
                    <AddRounded className='text-primary-500' fontSize='large' />
                </div>
                <p className='dark:text-white mt-2 font-bold'>Add New User</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
                {/* Name Field */}
                <TextField
                    control={control}
                    label='Name'
                    name='name'
                    errors={errors}
                    placeholder='Enter user name'
                    isRequired={true}
                />

                {/* Email Field */}
                <TextField
                    control={control}
                    label='Email'
                    name='email'
                    errors={errors}
                    placeholder='Enter user email'
                    isRequired={true}
                />

                {/* Access Group Field */}
                <TextField
                    control={control}
                    label='Access Group'
                    name='accessGroup'
                    errors={errors}
                    placeholder='Enter user Access Group'
                    isRequired={true}
                />
                <button 
                    type='submit'
                    className='text-white w-full bg-primary-400 px-4 py-2 rounded-xl flex justify-center items-center transition-all text-sm font-medium hover:ring-8 opacity-100 cursor-pointer'
                >
                    <AddRounded />
                    Add
                </button>
            </form>
        </Modal>
    );
};

export default AddUserModal;