"use client";
import React, { useState } from 'react';

// libs
import store from '@/libs/store';
import axios from '@/libs/axios/http';
import setupAxios from '@/libs/axios/axiosConfig';
import { Toaster } from 'react-hot-toast';

// Providers
import ThemeRegistery from '@/libs/theme/ThemeRegistery';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "react-query";

// types
import type { LayoutProps } from '@/types/public';


const Providers: React.FC<LayoutProps> = ({children}) => {
    setupAxios(store, axios);
    const [queryClient] = useState(new QueryClient());
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeRegistery>
                    <ThemeProvider attribute="class">
                        <Toaster toastOptions={{position: 'top-center'}} />
                        {children}
                    </ThemeProvider>
                </ThemeRegistery>
            </QueryClientProvider>
        </Provider>
    );
};

export default Providers;