import { Montserrat } from 'next/font/google';

// providers & components
import Providers from '@/components/providers';

// styles
import '@/styles/globals.css';

// types
import type { Metadata } from 'next';
import type { LayoutProps } from '@/types/public';
import DashboardLayout from '@/components/layouts';

const montserrat = Montserrat({ 
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mindgraph',
  description: 'Mindgraph Admin Panel',
};



export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Providers>
                    <DashboardLayout>
                        {children}
                    </DashboardLayout>
                </Providers>
            </body>
        </html>
    );
};
