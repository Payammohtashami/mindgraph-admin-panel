import React, { useState } from 'react';
import Link from 'next/link';
import routes from '@/configs/routes';

// hooks & libs
import { fullname } from '@/utils/functions';
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';

// components
import { Avatar, Fade, Menu } from '@mui/material';
import { LightModeRounded, LogoutRounded, NightlightRoundRounded, PersonRounded } from '@mui/icons-material';

// types
import { RootState } from '@/libs/store';
import { UserStateType } from '@/types/public';


const ProfileManager: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const user: UserStateType = useSelector<RootState>((state) => state.userState);
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center relative">
            <div
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="cursor-pointer hover:bg-slate-800 p-2 rounded-full transition"
            >
                {theme === 'dark' ? <NightlightRoundRounded className='dark:text-white' /> : <LightModeRounded className='dark:text-white' />}
            </div>
            <div
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="false"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='cursor-pointer hover:bg-slate-800 p-2 rounded-full transition'
            >
                <PersonRounded className='dark:text-white' />
            </div>
            
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{horizontal: 'left', vertical: 'top'}}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                    '.MuiPaper-root': {
                        p: '8px',
                        mt: '4px',
                        width: '240px',
                        borderRadius: '12px',
                        boxShadow: 'rgba(0, 0, 0, 0.1) -1px 5px 100px',
                        border: '1px solid rgb(239, 239, 239)'
                    }
                }}
                
            >
                <div className="flex items-center gap-2">
                    <Avatar className="border-2">
                        {user?.data?.first_name?.slice(0, 1)}
                    </Avatar>
                    <div className="text-sm w-full flex flex-col h-full justify-between text-skin-base">
                        <p className="font-bold block mb-1 text-slate-900">{fullname(user)}</p>
                        <p className="block text-slate-600">{user?.data?.mobile}</p>
                    </div>
                </div>
                <hr className="hr my-2" />
                <div>
                    <Link href={routes.dashboard}>
                        <button
                            onClick={handleClose}
                            className="flex items-center gap-1 transition hover:bg-slate-50 p-2 w-full !justify-start !text-slate-600 !rounded-lg !font-semibold hover:!text-primary-400"
                        >
                            <PersonRounded className="ml-1" />
                            حساب کاربری
                        </button>
                    </Link>
                    <button 
                        onClick={handleClose}
                        className="flex items-center gap-1 transition hover:bg-slate-50 p-2 w-full !justify-start !text-slate-600 !rounded-lg !font-semibold hover:!text-red-400"
                    >
                        <LogoutRounded className="ml-1" />
                        خروج
                    </button>
                </div>
            </Menu>
        </div>
    );
};

export default ProfileManager;