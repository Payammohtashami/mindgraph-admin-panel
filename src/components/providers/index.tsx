"use client";
import React from 'react';

// libs
import store from '@/libs/store';

// Providers
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "react-query";

// types
import type { LayoutProps } from '@/types/public';
import ThemeRegistery from '@/libs/theme/ThemeRegistery';


const Providers: React.FC<LayoutProps> = ({children}) => {
    const queryClient = new QueryClient();
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeRegistery>
                    <ThemeProvider attribute="class">
                        {children}
                    </ThemeProvider>
                </ThemeRegistery>
            </QueryClientProvider>
        </Provider>
    );
};

export default Providers;