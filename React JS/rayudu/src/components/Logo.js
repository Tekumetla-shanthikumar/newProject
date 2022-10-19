import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Logo() {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{'marginTop' : '50px', 'textAlign': 'center'}}>
      <Typography align='center' variant='h3' sx={{fontWeight: 900}}>
         <b style={{color:'#4E4E4C'}}>CCR MEDIA OFFICIAL</b>
      </Typography>
      <Typography align='center' variant='body2' sx={{fontWeight: 100, fontFamily:'trajan pro thin'}}>
      PROFESSIONALISM - INTEGRITY - AFFORDABLE
      </Typography>
      <Box xs={12}  sx={{ 
        backgroundImage:`url(https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:'black',
        backgroundPosition:'center',
        backgroundSize:'cover',
        height: 700,
        width:'100%'    
      }}></Box>
    </Box>
    </Grid>
    
  )
}
