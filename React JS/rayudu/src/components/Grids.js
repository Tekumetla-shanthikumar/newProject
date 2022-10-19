import React from 'react'
import Cards from './Cards';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import cities from './data.json'


export default function Grids() {
  return (
    <Container>
        {cities.map((city) => (
            <>
            <Typography 
             varient='h4'
             component='h2'
             marginTop={5}
             marginBottom={3}
            >
                Recent {city.name} Pictures
            </Typography>
            <Grid container spacing={5}>
             {city.tours.map((tour, index) => (
             <Cards tour={tour} key={index} />
             ))}
            </Grid>
            </>
        ))}
    </Container>
  )
}

