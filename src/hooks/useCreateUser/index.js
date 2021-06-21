import { useState, useCallback } from 'react';

function useCreateUser() {
  const [response, setResponse] = useState(null);

  const postUser = useCallback(async (user) => {
    try {
      const res = await fetch('http://localhost:8005/api/systemusers/', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setResponse(user);
      }
    } catch (e) {
      console.error('Error creating user: ', e);
    }
  });

  return [response, postUser];
}

export default useCreateUser;
