// React imports
import React from 'react';

// Hook imports

// Style imports
import { Container } from './styles';

function UserList(props) {
  const { users } = props;

  return (
    <Container>
      <p>User List Component</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </Container>
  );
}

export default UserList;
