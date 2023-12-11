"use client";
import React from "react";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

// components
import { ThemeOptions, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// types
import type { LayoutProps } from "@/types/public";

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#007aff',
            dark: '#0661dc',
            light: '#00a8ff',
        },
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
