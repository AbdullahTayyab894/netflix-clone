import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


import tv from './image/tv.jfif'

const Cards = () => {
  return (
    <div style={{ borderBottom: "5px solid gray" }}>
      <Grid container style={{ height: "35em", background: "black" }}>
        <Grid item xs={12} md={6} style={{ margin: "auto", }}>
          <Slide left>
            <Box >
              <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
                Enjoy on your TV.
              </Typography>
              <Typography variant='h5' style={{ color: "white", textAlign: "center" }}>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </Typography>
            </Box>
          </Slide>
        </Grid>
        <Grid item xs={12} md={6}>
          <Zoom left>
            <Box style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "130px",
              width: "70%"
            }}>
              <img src={tv} alt="" width="350px" />
            </Box>
          </Zoom>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;