import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Categories from './Categories'
import animals from './cateories.json'

export default function CatGrid() {
  return (
    <Container>
        {animals.map((animal) => (
            <>
          <Typography
             varient='h4'
             component='h2'
             marginTop={5}
             marginBottom={3} >
                {animal.name}
          </Typography>
          <Grid container spacing={3}>
           {animal.content.map((content, index) =>(
              <Categories content={content} key={index} />
            ))}
      </Grid>
      </>
        ))}
      
    </Container>
  )
}
