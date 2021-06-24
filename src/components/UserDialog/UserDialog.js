// React imports
import React, { useState, useEffect } from 'react';

// Component imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';

function UserDialog(props) {
  const { open, editUser, handleClose, handleSave, loading } = props;

  // State
  const [user, setUser] = useState({ username: '', email: '' });

  // store the editable user in the local state
  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    setUser({
      ...user,
      [name]: target.value,
    });
  };

  // clear the inputs on close
  const handleCloseClean = (user) => {
    setUser({ username: '', email: '' });
    if (user) {
      handleSave(user);
    } else {
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <DialogTitle id="form-dialog-title">
        {editUser ? (
          `Edit user: ${editUser.username}`
        ) : loading ? (
          <LinearProgress color="secondary" />
        ) : (
          'Add new user'
        )}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {editUser
            ? 'Edit user name and email address.'
            : loading
            ? ''
            : 'Please enter a user name and email address to create a new user.'}
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          name="username"
          label="User Name"
          helperText="Required"
          variant="filled"
          onChange={handleInputChange}
          color="secondary"
          value={user.username}
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
          color="secondary"
          value={user.email}
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCloseClean} color="default">
          Cancel
        </Button>

        <Button onClick={() => handleCloseClean(user)} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
