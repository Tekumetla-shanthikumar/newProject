import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import {   Grid, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {


  return (
    <Box
	 bgcolor={'black'}
	 height={'200px'}
    >
		<Container>
			<Typography variant="h3" sx={{textAlign:'center',color:'white', flexGrow:'1'}}>
				CCR MEDIA OFFICIAL
			</Typography>
			
			<Typography sx={{textAlign:'center'}}>
				
				<Link href='#'>Home</Link> <br />
				<Link href='#'>About</Link> <br />
				<Link href='#'>Services</Link> <br />
				<Link href='#'>Portfolio</Link> <br />
				<Link href='#'>Contact</Link>
				
			</Typography>
			
		</Container>
	</Box>
  );
}
