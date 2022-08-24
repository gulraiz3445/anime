import { Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './home.css'
import allanime from './homeImages/allanime.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Api from '../Apis/Api'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
  <Box
  sx={{
    backgroundImage:`url(${allanime})`,
    backgroundRepeat:"no-repeat",
    backgroundColor:"black",
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:600,
    width:"100%",
  }}
  >
  </Box>
  <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",margin:"20px"}}>
             Waatch your Faveriot Show
            </Typography>
  <Container sx={{marginTop:"20px"}}>
    <Grid container className="homecard">
{
    Api.map(function(item){
        return     <Grid item lg={4}>
       <Link to={`/episodes/${item.id}`}>
       <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
             {item.title}
            </Typography>
          </CardContent>
        </Card>
       </Link>
        </Grid>
    })
}


    </Grid>
  </Container>
    </>
  )
}

export default Home