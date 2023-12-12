import React from 'react';

// utils
import Link from 'next/link';
import routes from '@/configs/routes';
import { usePathname } from 'next/navigation';

// components
import { BusinessRounded, CheckCircleRounded, GridViewRounded, GroupRounded } from '@mui/icons-material';

// types
import type { MenuTabsPropsType } from '@/types/public';

const Menu: React.FC = () => {
    const pathname = usePathname();
    return (
        <div className='bg-white dark:bg-gray-900 overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8'>
            <div className='flex items-center justify-between w-full mb-5 pb-2'>
                <Link href={routes.dashboard}>
                    <div className="flex items-center gap-3">
                        <div className='w-10 h-10 rounded-full bg-slate-500'></div>
                        <div className='flex flex-col justify-center'>
                            <p className='dark:text-slate-200 text-sm font-bold leading-none'>Mind graph</p>
                            <span className='dark:text-slate-400 text-xs'>Admin Panel</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='overflow-y-auto flex-auto'>
                {profilesTabs?.map((item) => (
                    <div key={item?.id} className={pathname.includes(item?.url) ? 'bg-gray-100 rounded-2xl dark:bg-gray-800 mb-1' : 'rounded-2xl hover:bg-gray-100 hover:dark:bg-gray-800 mb-1'}>
                        <Link href={item?.url}>
                            <button className='pr-12 lg:pr-4 rounded-2xl text-sm transition-all hover:text-primary-500 w-full flex items-center gap-2 justify-start text-slate-700 dark:text-slate-100 py-3 px-4 font-medium'>
                                {item.Icon}
                                {item?.title}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const profilesTabs: MenuTabsPropsType[] = [
    {
        id: 'profile-2',
        url: routes.users.base,
        title: 'Users',
        Icon: <GroupRounded fontSize='small' />,
    },
    {
        id: 'profile-3',
        url: routes.licenses.base,
        title: 'Licenses',
        Icon: <CheckCircleRounded fontSize='small' />,
    },
    {
        id: 'profile-4',
        url: routes.companies.base,
        title: 'Companies',
        Icon: <BusinessRounded fontSize='small' />,
    },
];

export default Menu;