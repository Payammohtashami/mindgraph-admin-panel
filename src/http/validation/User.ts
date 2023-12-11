import * as yup from 'yup';

export const addNewUserSchema = yup.object({
    name: yup.string().required('name is required!'),
    accessGroup: yup.string().required('Access Group is required!'),
    email: yup.string().required('Email is required!').email('Email is not valid!'),
});