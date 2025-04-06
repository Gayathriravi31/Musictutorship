import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoImage from '../../assets/images/logo.png';
import { NavLinks } from './Navigations';
import { Chip, styled } from '@mui/material';

const MobileSidebar = () => {
    const Logo = styled('img')({
        height: '50px', // Adjust size as needed
        width: 'auto', // Maintain aspect ratio
        cursor: 'pointer',
      });
    

    return (
        <>
            <Box px={3}>
                {/* <Logo /> */}
                <a href="/">
                    <Logo src={LogoImage} alt="Logo" />
                </a>
            </Box>
            <Box p={3}>

                <Stack direction="column" spacing={2} >
                    {NavLinks.map((navlink, i) => (
                        <Button color="inherit" href={navlink.to} sx={{
                            justifyContent: 'start'
                        }}>{navlink.title} {navlink.new ?
                            <Chip label="New" size="small" sx={{
                                ml: '6px',
                                borderRadius: '8px',
                                color: 'primary.main',
                                backgroundColor: 'rgba(93, 135, 255, 0.15)'
                            }} />
                            : null}</Button>
                    ))}

                    <Button color="inherit" href="#" sx={{
                        justifyContent: 'start'
                    }}>Support</Button>
                    <Button color="primary" variant="contained" href="/auth/login">Get Started</Button>
                </Stack>
            </Box>
        </>


    );
};

export default MobileSidebar;
