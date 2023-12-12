import Modal from '@/components/modal';
import TextField from '@/components/textField';
import Selector from '@/components/textField/selector';
import { addLicenses } from '@/features/licenses/licensesSlice';
import { addNewLicensesSchema } from '@/http/validation/licenses';
import { ModalPropsType } from '@/types/public';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddRounded } from '@mui/icons-material';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const AddLicensesModal: React.FC<ModalPropsType> = ({openModal, setOpenModal}) => {
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: { companyId: 1, name: '', status: '' },
        resolver: yupResolver(addNewLicensesSchema),
    });

    const onSubmit = (data: any) => {
        dispatch(addLicenses(data));
        setOpenModal(false);
        toast.success('Add licenses is successfuly!')
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
                <p className='dark:text-white mt-2 font-bold'>Add New Licenses</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
                {/* Name Field */}
                <TextField
                    control={control}
                    label='Name'
                    name='name'
                    errors={errors}
                    placeholder='Enter license name'
                    isRequired={true}
                />

                {/* status selector Field */}
                <Selector
                    options={['used', 'available']}
                    control={control}
                    label='Status'
                    name='status'
                    errors={errors}
                    placeholder='Select license status'
                    isRequired={true}
                />

                {/* companyId selector Field */}
                <Selector
                    options={[1, 2, 3, 4]}
                    control={control}
                    label='Company'
                    name='companyId'
                    errors={errors}
                    placeholder='Select license company'
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

export default AddLicensesModal;