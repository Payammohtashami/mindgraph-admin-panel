import { Poppins } from 'next/font/google';

// types
import type { Metadata } from 'next';
import type { LayoutProps } from '@/types/public';

// styles
import '@/styles/globals.css';

const poppins = Poppins({ 
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
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    );
};
