import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

function DashboardPage() {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant='h4' gutterBottom>
          Dashboard
        </Typography>
        <Typography variant='body1'>
          Bienvenido {user?.companyName}. Este es tu panel de control
        </Typography>
        <Typography variant='body2'>
          Email: {user?.email}
        </Typography>
      </Box>
    </Container>
  );
}

export default DashboardPage;

