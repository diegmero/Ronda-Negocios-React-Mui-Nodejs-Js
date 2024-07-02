import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {login} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //aqui simulando un login exitoso
    login({
      email: formData.email,
      companyName: formData.companyName
    });
    console.log('login submit', formData);
    navigate('/dashboard', {replace: true});
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          <b>Iniciar Sesion</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="correo electronico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Iniciar Sesion
            </Button>
          </Box>
          <Box mt={1}>
            <Button component={Link} to="/" variant="outlined" color="primary" fullWidth>
              Regresar
            </Button>
            </Box>
        </form>
      </Box>
    </Container>
  );
}

export default LoginPage;
