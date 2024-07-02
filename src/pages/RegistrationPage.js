import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState ({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {login} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password != formData.confirmPassword){
      alert('Las contraseñas no coindicen');
      return;
    }
    // aqui simularemos un registro exitoso
    console.log('Formulario enviado exitosamente:', formData);
    // simulando el login despues del registro
    login({
      email: formData.email, 
      companyName: formData.companyName });
      navigate('/dashboard', {replace: true});
  };

return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          <b>Registro de Empresa</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre de la Empresa"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Correo Electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirmar Contraseña"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Registrarse
            </Button>
            <Box mt={1}>
            <Button component={Link} to="/" variant="outlined" color="primary" fullWidth>
              Regresar
            </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationPage;