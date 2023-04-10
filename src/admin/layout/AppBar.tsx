import * as React from 'react';
import {
    AppBar,
} from 'react-admin';

import {
    Box,
} from '@mui/material';

const CustomAppBar = () => {
    return (
        <AppBar color="inherit" >
             <Box component="span" color="primary" sx={{ flex: 1 }} />
        </AppBar>
    );
};

export default CustomAppBar;
