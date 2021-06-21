// React imports
import React, { useState, useEffect } from 'react';

// Hook imports
import useCurrentUsers from '../../hooks/useCurrentUsers';
import useCreateUser from '../../hooks/useCreateUser';

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [users, refreshUsers] = useCurrentUsers();
  const [response, postUser] = useCreateUser();

  useEffect(() => {
    refreshUsers();
  }, [response]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSave = (user) => {
    postUser(user);
    setDialogOpen(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Container>
          <Header handleDialogOpen={handleDialogOpen} />
          <UserList users={users} />
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
