"use client"
import React, { useEffect, useState } from 'react';

// components
import Menu from './Menu';
import ProfileManager from './ProfileManager';
import { usePathname } from 'next/navigation';
import { MenuRounded } from '@mui/icons-material';
import { Drawer, useMediaQuery } from '@mui/material';

// types
import type { LayoutProps } from '@/types/public';

const DashboardLayout: React.FC<LayoutProps> = ({children}) => {
    // states
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // hooks
    const pathname = usePathname();
    const isMobile = useMediaQuery('(max-width:1023px)');

    // effects
    useEffect(() => setOpenMenu(false), [pathname]); // close drawer when pathname changed
    return (
        <div className='grid grid-cols-12 h-screen bg-white dark:bg-gray-900'>
            <aside className='col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block'>
                <Menu />
            </aside>
            <div className='col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col'>
                <header className='bg-white dark:bg-gray-900'>
                    <div className='flex w-full items-center justify-between lg:justify-end py-5 px-4 lg:px-10'>
                        {isMobile ?
                            <div onClick={() => setOpenMenu(true)} className="">
                                <MenuRounded className='dark:text-white' />
                            </div>
                            :
                            null
                        }
                        <ProfileManager />
                    </div>
                </header>
                <main className='bg-gray-100/60 dark:bg-gray-800/60 lg:rounded-tl-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto'>
                    {children}
                </main>
            </div>
            {isMobile ? 
                <Drawer
                    anchor='left'
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                >
                    <Menu />
                </Drawer>
                :
                null
            }
        </div>
    );
};

export default DashboardLayout;