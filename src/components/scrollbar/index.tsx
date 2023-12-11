import React, { memo } from 'react';

// @mui
import { Box, SxProps } from '@mui/material';

// styles
import { StyledRootScrollbar, StyledScrollbar } from './styles';

interface ScrollbarType {
    children: React.ReactNode,
    sx?: SxProps
}
const Scrollbar: React.FC<ScrollbarType> = ({ children, sx, ...other }) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        return (
            <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
                {children}
            </Box>
        );
    }

    return (
        <StyledRootScrollbar>
            <StyledScrollbar 
                timeout={500} 
                clickOnTrack={false} 
                sx={sx} 
                {...other}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
}

export default memo(Scrollbar);
