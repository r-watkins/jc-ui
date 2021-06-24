import { useState, useCallback } from 'react';

function useCurrentUsers() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const refreshUsers = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8005/api/systemusers');
      const userArray = await response.json();
      setUsers(userArray.results);
    } catch (e) {
      console.error('Error retrieving user list: ', e);
    }
  }, []);

  const getUser = useCallback(async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8005/api/systemusers/${userId}`
      );
      const user = await response.json();
      setUser(user);
    } catch (e) {
      console.error('Error retrieving user list: ', e);
    }
  }, []);

  return [users, refreshUsers, user, getUser];
}

export default useCurrentUsers;
