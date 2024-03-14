'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// const theme = createTheme({
//     palette: {
//         background: {
//             paper: '#fff',
//         },
//         text: {
//             primary: '#173A5E',
//             secondary: '#46505A',
//         },
//         action: {
//             active: '#001E3C',
//         },
//         success: {
//             main: '#009688',
//             dark: '#009688',
//         },
//     },
// });

const theme = createTheme({
    palette: {
        mode: 'light',
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;
