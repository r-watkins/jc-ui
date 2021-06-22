import { useState, useCallback } from 'react';

function useCreateUser() {
  const [newUserStatus, setNewUserStatus] = useState(null);

  const setNewUser = useCallback(async (user) => {
    try {
      const response = await fetch('http://localhost:8005/api/systemusers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setNewUserStatus(user);
      }
    } catch (e) {
      console.error('Error creating user: ', e);
    }
  });

  return [newUserStatus, setNewUser];
}

export default useCreateUser;
