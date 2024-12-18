'use client'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '/public/logo-smallppi.png';
import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Input } from '@mui/material';
import Badge from '@mui/material/Badge';
import { ShoppingBagContext } from '../context/ShoppingBagContext';
import { indigo } from '@mui/material/colors';
import SearchBar from './searchbar';

const navLinks = [{'Men': "/shop/men"}, {'Women': "/shop/wommen"}, {'Boards': "/shop/gear/boards"},
  {'Gear': "/shop/gear"}, {'Learn': "/learn"}, {'Sale': "/shop/sale"}]
const settings = ['Account', 'Orders', 'Logout'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    alignSelf: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

function ResponsiveAppBar() {
  const { itemsCount } =  useContext(ShoppingBagContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link aria-label="Clickable image of logo linking to homepage" href={'/'}><Image src={logo} width={200} height={200} alt="Brand Logo" /></Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="justify-center">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Input type='search' placeholder='search'></Input>
          </Search>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="justify-around">
              <Link aria-label={`Link for Men's Shop`} href={{ pathname: `/shop/men`}}>
              <Button
                key="menLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Men
              </Button>
              </Link>
              <Link aria-label={`Link for Women's Shop`} href={{ pathname: `/shop/women`}}>
              <Button
                key="womenLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Women
              </Button>
              </Link>
              <Link aria-label={`Link for Board Shop`} href={{ pathname: `/shop/gear/boards`}}>
              <Button
                key="boardsLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Boards
              </Button>
              </Link>
              <Link aria-label={`Link for Gear Shop`} href={{ pathname: `/shop/gear`}}>
              <Button
                key="gearLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gear
              </Button>
              </Link>
              <Link aria-label={`Link for Gear Shop`} href={{ pathname: `/shop/sale`}}>
              <Button
                key="saleLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sale
              </Button>
              </Link>
              <Link aria-label={`Link for Gear Shop`} href={{ pathname: `/shop/learn`}}>
              <Button
                key="learnLink"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Learn
              </Button>
              </Link>
              <SearchBar />
            {/* <Search className="flex-1 mx-2">
            <SearchIconWrapper>
              <SearchIcon />
              <Input type='search' placeholder='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}>{searchInput}</Input>
            </SearchIconWrapper>
          </Search> */}
          <IconButton aria-label={`Shopping bag. Items in bag: ${itemsCount}`} size='large'>
          <Badge badgeContent={itemsCount} color="warning">
            {itemsCount < 1 ? <ShoppingBagOutlinedIcon sx={{ color: indigo[50]}} fontSize='large'/> : <Link href={{pathname: `/bag`}}><ShoppingBagIcon sx={{ color: indigo[50]}} fontSize='large'/></Link>}      
            </Badge>
          </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
