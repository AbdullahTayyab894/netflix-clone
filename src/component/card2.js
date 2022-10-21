import { Grid, Typography } from '@mui/material'
import React from 'react'

const Card2 = () => {
  return (
    <div style={{ borderBottom: "5px solid gray" }}>
      <Grid style={{ height: "20em", background: "black" }}>
        <Grid style={{textAlign:"center",paddingTop:"100px"}}>
            <Typography variant='h2' style={{color:"white"}}>
            Watch everywhere.
            </Typography>
            <Typography variant='h5' style={{color:"white"}}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Card2
