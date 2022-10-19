import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

// import Nature from './images/Nature.jpg'
import './Cards.css';
import { Box } from '@mui/system';

export default function Cards({tour}) {

   
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{width:'350px', height:'450px'}}>
            <img 
            src= {tour.image} 
            alt='Shooting' 
            className='img'
            />
            <Box padding={1}>
            <Typography variant='subtitle2' textAlign='center' >
                  {tour.name}
            </Typography>
            <Typography variant='body1'>
                {tour.type}
            </Typography>
            </Box>
        </Paper>
    </Grid>
  )
}
