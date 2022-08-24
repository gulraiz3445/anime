import { Typography } from '@mui/material'
import React, { useState } from 'react'
import './epi.css'
import Api from '../Apis/Api'
import { Link, useParams,useNavigate, Navigate } from 'react-router-dom'
import allanime from '../Home/homeImages/allanime.jpg'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EpisodeCard from '../EpisodeCard/EpisodeCard'
const Epi = () => {
  const params=useParams()
  const navigate=useNavigate()
  const db=params.id-1
  console.log(db);
  const data=Api.filter((item)=>item.id==params.id)
  const data2=Api.filter((item)=>item.id==db)
  console.log(data2);
 const move=(id)=>{
  navigate(`/episodes/${id}`)
 }
  return (
    <>
    {

        data.map((item)=>(
            <Typography sx={{textAlign:"center", marginTop:3,}} varient="h3">{item.des}</Typography>
            ))
        }
    <Container sx={{marginTop:"20px",display:"flex",justifyContent:"center",justifyContent:"space-between",}}>
 {
    data.map((item)=>(
        <Card sx={{ maxWidth: 650 }}>
        <CardMedia
        className="hello"
          component="img"
          height="500"
          image={item.image}
          alt="green iguana"
        />
      </Card>
    ))
 }
  {
    data2.map((item)=>(
        
        <Card className="sideBar" sx={{ maxWidth: 400 ,height:450}}>
        <CardMedia
        className="hello"
          component="img"
          height="400"
          image={item.image}
          alt="green iguana"
        />
      <Button contained sx={{marginTop:"10px"}} onClick={()=>move(item.id)}>Watch Now</Button>
      </Card>
        
    ))
 }
  </Container>
 {
    data.map((item)=>(
        <Box className="episode" sx={{marginTop:"20px", width:"400px",}}>
        <EpisodeCard cartoons={item.episods}/>
 </Box>
    ))
 }

    </>
  )
}

export default Epi