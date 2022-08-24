import { Box } from '@mui/system'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import './episodeCard.css'
const EpisodeCard = (cartoon) => {
    console.log(cartoon);
  return (
    <>
 {
    cartoon.cartoons.map((item)=>(
        <Box sx={{overflow:"hidden"}}>
        <Typography sx={{ marginTop:2,backgroundColor:"#333", color:"white",borderRadius:"8px"}} varient="h4">Click the button below to watch or download</Typography>
       <Typography sx={{ marginTop:1}} varient="h4">{item.name}</Typography>
       <Box sx={{display:"flex", marginTop:1}}>
       <a href={item.vedio}><Button className="button" variant="outlined">Wach Now</Button></a>
        <Link to=''><Button sx={{marginLeft:2}} className="button"  variant="contained">Download</Button></Link>
       </Box>
    </Box>
    ))
 }
    </>
  )
}

export default EpisodeCard