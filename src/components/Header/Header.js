// React imports
import React, { useState } from 'react';

// Component imports
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// Style imports
import { Toolbar, AddButton } from './styles';

function Header(props) {
  const { handleDialogOpen } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h1">
          JC-UI
        </Typography>

        <div>
          <AddButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleDialogOpen}
          >
            Add user
          </AddButton>

          <Button color="inherit">Delete</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
