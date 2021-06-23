import { useState, useCallback } from 'react';

function useCreateUser() {
  const [deleteUsersStatus, setDeleteUsersStatus] = useState(null);

  const setDeleteUsers = useCallback((users) => {
    try {
      users.forEach(async (userId) => {
        const response = await fetch(
          `http://localhost:8005/api/systemusers/${userId}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        setDeleteUsersStatus(response);
      });
    } catch (e) {
      console.error('Error deleting user: ', e);
    }
  });

  return [deleteUsersStatus, setDeleteUsers];
}

export default useCreateUser;
