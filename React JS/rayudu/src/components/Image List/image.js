import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export default function MasonryImageList() {
  return (
    <Container>
        <Grid item xs={12} sm={6} md={4}>
         <Box >
            <Typography 
            varient='h4'
            component='h2'
            marginTop={5}
            marginBottom={3}
            >
                Images List
            </Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Grid>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1542233637-20456b09d882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Sea',
  },
  {
    img: 'https://images.unsplash.com/photo-1618082976772-d6e3f7baf51f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Forest',
  },
  {
    img: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Wedding',
  },
  {
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxhbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Horse',
  },
  {
    img: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcnRpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Parties',
  },
  {
    img: 'https://images.unsplash.com/photo-1563019826-3016b0ddc9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg1fHxhbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Birds',
  },
  {
    img: 'https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Cracker',
  },
  {
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Morning forest',
  },
  {
    img: 'https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Wedding 1',
  },
  {
    img: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Elephant',
  },
  {
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnRpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Parties 1',
  },
  {
    img: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Deer',
  },
];
