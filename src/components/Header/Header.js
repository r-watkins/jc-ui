// React imports
import React from 'react';

// Component imports
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';

// Style imports
import {
  TopBorder,
  Toolbar,
  Branding,
  Logo,
  AddButton,
  DeleteButton,
} from './styles';

function Header(props) {
  const { handleDialogOpen, deleteDisabled, handleDelete } = props;

  return (
    <AppBar position="static">
      <TopBorder />

      <Toolbar>
        <Branding>
          <Logo>
            <CloudOutlinedIcon fontSize="large" />
          </Logo>

          <Typography variant="h5" component="h1">
            JumpCloud-UI
          </Typography>
        </Branding>

        <div>
          <AddButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleDialogOpen(null)}
          >
            Add user
          </AddButton>

          <DeleteButton
            variant="contained"
            startIcon={<DeleteOutlineOutlinedIcon />}
            disabled={deleteDisabled}
            onClick={handleDelete}
          >
            Delete
          </DeleteButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
