'use client';
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DrawerNavMenu from './navdrawer';

// NavDrawer now takes only the necessary props to display items and doesn't handle state directly.
function NavDrawer({ anchorEl, open, onClose }) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
   <DrawerNavMenu />
    </Menu>
  );
}

function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Define click and close handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu items to display in NavDrawer
  const menuItems = ['Profile', 'My account', 'Logout'];

  return (
    <nav className="flex flex-row justify-center bg-slate-600 fixed top-0 left-0 right-0 p-4">
      <div className="">
        {/* Loop through categories and create a Button for each */}
        {['Men', 'Women', 'Boards', 'Gear', 'Learn', 'Sale'].map((category) => (
          <Button
            key={category}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="mx-4"
          >
            {category}
          </Button>
        ))}
        <NavDrawer items={menuItems} anchorEl={anchorEl} open={open} onClose={handleClose} />
        {/* Pass only the necessary props to NavDrawer */}
      </div>
    </nav>
  );
}

export default NavMenu;