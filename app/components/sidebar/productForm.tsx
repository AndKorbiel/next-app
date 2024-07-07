'use client';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { useCallback, useState } from 'react';
import { addProductToAvailable } from '../../store/productsSlice';

export const ProductForm = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(() => {
    if (name.length >= 3) {
      const generateId = window.crypto.randomUUID();

      dispatch(addProductToAvailable({ id: generateId, name }));
      setName('');
      setError(false);
    } else {
      setError(true);
    }
  }, [dispatch, name]);

  return (
    <>
      <TextField
        variant="standard"
        placeholder="Type product name..."
        sx={{
          height: '28px',
          padding: '4px 8px',
          bgcolor: '#ebebeb',
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={error}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};
