// React imports
import React, { useState, useEffect } from 'react';

// Hook imports
import useCurrentUsers from '../../hooks/useCurrentUsers';
import useCreateUser from '../../hooks/useCreateUser';
import useDeleteUsers from '../../hooks/useDeleteUsers';
import useEditUser from '../../hooks/useEditUser';

// Component imports
import Header from '../Header';
import UserList from '../UserList';
import UserDialog from '../UserDialog';

// Style imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global';
import { Container } from './styles';

function App() {
  // State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const [toDeleteUsers, setToDeleteUsers] = useState([]);
  const [dialogWait, setDialogWait] = useState(false);
  const [toEditUser, setToEditUser] = useState(null);
  // Hooks
  const [users, refreshUsers, user, getUser] = useCurrentUsers();
  const [newUserStatus, setNewUser] = useCreateUser();
  const [deleteUsersStatus, setDeleteUsers] = useDeleteUsers();
  const [editUserStatus, setEditUser] = useEditUser();

  // Refresh user list when a new user status updates
  useEffect(() => {
    refreshUsers();
  }, [newUserStatus, deleteUsersStatus, editUserStatus]);

  // Once we get the user object, add it to local state and clear the loading
  useEffect(() => {
    setToEditUser(user);
    setDialogWait(false);
  }, [user]);

  // Open dialog, have it hold for loading if there is a user object
  const handleDialogOpen = (userId) => {
    if (userId) {
      getUser(userId);
      setDialogWait(true);
    } else {
      setDialogWait(false);
    }

    setDialogOpen(true);
  };

  // Close dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogWait(true);
    setToEditUser(null);
  };

  // get new user object from dialog form and post to server
  const handleDialogSave = (user) => {
    if (toEditUser) {
      setEditUser(user);
    } else {
      setNewUser(user);
    }

    setDialogOpen(false);
  };

  // check and store list of userIDs if list of checked users is non-zero and enable delete button
  const handleDeleteSelect = (usersIds) => {
    if (usersIds.length > 0) {
      setDeleteDisabled(false);
    } else {
      setDeleteDisabled(true);
    }

    setToDeleteUsers(usersIds);
  };

  // send list of users to be deleted
  const handleDelete = () => {
    setDeleteUsers(toDeleteUsers);
    setDeleteDisabled(true);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Container>
          <Header
            handleDialogOpen={handleDialogOpen}
            deleteDisabled={deleteDisabled}
            handleDelete={handleDelete}
          />
          <UserList
            users={users}
            handleDeleteSelect={handleDeleteSelect}
            handleDialogOpen={handleDialogOpen}
          />
        </Container>

        <UserDialog
          open={dialogOpen}
          editUser={toEditUser}
          loading={dialogWait}
          handleClose={handleDialogClose}
          handleSave={handleDialogSave}
        />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
