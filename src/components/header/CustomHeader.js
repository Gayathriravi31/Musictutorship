import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import LogoImage from '../../assets/images/logo.png';
import Navigations from './Navigations';
import { Drawer, Fab, IconButton, useMediaQuery } from '@mui/material';
import MobileSidebar from './MobileSidebar'
// #168BAF

const CustomHeader = ({ positionSticky = true, isTransparent = false }) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      minHeight: '100px',
      // width: '90vw',
      // width:'100%'
    },
    backgroundColor: isTransparent ? 'transparent' : '#fff'
    // backgroundColor: theme.palette.primary.light,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    color: theme.palette.text.secondary,
    justifyContent: 'space-between',
  }));
  const Logo = styled('img')({
    height: '55px', // Adjust size as needed
    width: 'auto', // Maintain aspect ratio
    cursor: 'pointer',
  });

  //   sidebar
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <AppBarStyled position={positionSticky ? "sticky" : "relative"} elevation={0} sx={{
      backgroundColor: isTransparent ? 'transparent' : '#fff'
    }}>
      <Container
        sx={{

          maxWidth: '1400px !important',
        }}
      >
        <ToolbarStyled>
          {/* <Logo /> */}
          {lgUp ? (
            <a href="/">
              <Logo src={LogoImage} alt="Logo" />
            </a>
          ) : null}
          {lgDown ? (
            <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              {/* <IconMenu2 size="20" /> */}
              <MenuIcon size="20" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <>
              <Stack spacing={5} direction="row" alignItems="center">
                <Navigations isTransparent={isTransparent} />
              </Stack>
              <Button
                sx={{
                  borderRadius: "8px", p: '8px 22px 8px 22px', fontSize: "14px",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                   boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.4)",
                    color: "#fff",
                  },
                }}
                color="primary" variant="contained" href="/auth/register-page">
                Register
              </Button>
            </>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: '0 !important',
            // boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default CustomHeader;



