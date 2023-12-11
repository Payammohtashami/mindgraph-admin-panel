import * as yup from 'yup';

export const addNewLicensesSchema = yup.object({
    name: yup.string().required('name is required!'),
    status: yup.string().required('status is required!'),
    companyId: yup.number().required('number is required!'),
});