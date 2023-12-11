"use client";
import React from "react";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

// components
import { Montserrat } from "next/font/google";
import { ThemeOptions, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// types
import type { LayoutProps } from "@/types/public";


const montserrat = Montserrat({ 
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#007aff',
            dark: '#0661dc',
            light: '#00a8ff',
        },
    },
    typography: {
        fontFamily: montserrat.style.fontFamily,
    },
    components: {
       
    },
};
const theme = createTheme(themeOptions);

export default function ThemeRegistery({children}: LayoutProps){
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    );
};
