// React imports
import React, { useState } from 'react';

// Component imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Style imports

function UserDialog(props) {
  const { open, handleClose, handleSave } = props;

  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    setUser({
      ...user,
      [name]: target.value,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <DialogTitle id="form-dialog-title">Add new user</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a user name and email address to create a new user.
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          name="username"
          label="User Name"
          helperText="Required"
          variant="filled"
          onChange={handleInputChange}
          fullWidth
        />

        <TextField
          margin="dense"
          name="email"
          label="Email Address"
          type="email"
          helperText="Required"
          variant="filled"
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>

        <Button
          onClick={() => {
            handleSave(user);
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
