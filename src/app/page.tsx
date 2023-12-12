import React from 'react';
import routes from '@/configs/routes';
import { redirect } from 'next/navigation';

const page = () => {
    redirect(routes.users.base)
};

export default page;