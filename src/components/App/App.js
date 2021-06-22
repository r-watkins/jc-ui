// React imports
import React, { useState, useEffect } from 'react';

// Hook imports
import useCurrentUsers from '../../hooks/useCurrentUsers';
import useCreateUser from '../../hooks/useCreateUser';
import useDeleteUsers from '../../hooks/useDeleteUsers';

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
  // Hooks
  const [users, refreshUsers] = useCurrentUsers();
  const [newUserStatus, setNewUser] = useCreateUser();
  const [deleteUsersStatus, setDeleteUsers] = useDeleteUsers();

  // Refresh user list when a new user status updates
  useEffect(() => {
    refreshUsers();
  }, [newUserStatus, deleteUsersStatus]);

  // Open dialog
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  // Close dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // get new user object from dialog form and post to server
  const handleDialogSave = (user) => {
    setNewUser(user);
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
          <UserList users={users} handleDeleteSelect={handleDeleteSelect} />
        </Container>

        <UserDialog
          open={dialogOpen}
          handleClose={handleDialogClose}
          handleSave={handleDialogSave}
        />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
