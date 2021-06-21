import { useState, useEffect, useCallback } from 'react';

function useCurrentUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8005/api/systemusers');
      const userArray = await response.json();
      // TODO remove console out
      console.log(userArray.results);
      setUsers(userArray.results);
    } catch (e) {
      console.error('Error retrieving user list: ', e);
    }
  };

  const refreshUsers = useCallback(getUsers);

  return [users, refreshUsers];
}

export default useCurrentUsers;
