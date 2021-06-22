import { useState, useCallback } from 'react';

function useCreateUser() {
  const [editUserStatus, setEditUserStatus] = useState(null);

  const setEditUser = useCallback(async (user) => {
    try {
      const response = await fetch(
        `http://localhost:8005/api/systemusers/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        setEditUserStatus(response);
      }
    } catch (e) {
      console.error('Error editing user: ', e);
    }
  });

  return [editUserStatus, setEditUser];
}

export default useCreateUser;
