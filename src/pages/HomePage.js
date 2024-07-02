import React from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from "@mui/material";


function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">
          Bienvenidos a <b>CAME</b> Rondas de Negocios
        </Typography>
        <Typography variant="body1" align="center" mt={4}>
          Organiza y participa en rondas de negocios de manera eficiente
        </Typography>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box>
            <Button component={Link} to="/register" variant="contained" color="primary"> 
              Registrarse
            </Button>
            <Button component={Link} to="/login" variant="outlined" color="primary">
              Iniciar Sesion
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage;