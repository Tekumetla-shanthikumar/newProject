import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Categories.css'


export default function Categories({content}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={1} sx={{width:'250px', height:'275px'}}>
              <img 
                 src={content.image}
                 alt='categories' 
                 className='image'/>
                 <Box padding={1}>                 
                  <Typography 
                  variant='subtitle1' 
                  textAlign='center' 
                  >
                    {content.name}
                  </Typography>
                  <Typography variant='body1' textAlign='center'>
                    {content.type}
                  </Typography>
                  </Box>
        </Paper>
    </Grid>
  )
}
