import { Grid, Box, Typography, Button, TextField, FormControl, Input, InputLabel, InputAdornment, SearchIcon } from '@mui/material'
// import SearchBar from "material-ui-search-bar";
import bg from "./image/bg.png"
import netflix from "./image/netflix.png"
import React from 'react'
import Slide from 'react-reveal/Slide';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const navbar = () => {
  return (
    <div style={{ borderBottom: "5px solid gray" }}>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bg})`,
          flexGrow: "1",
          height: '40em',
          textAlign: 'center',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",

          // backgroundAttachment: "fixed",

        }}>
        <Grid
          item xs={12} md={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 40px 0px 40px",
          }}>
          <Box>
            <img src={netflix} style={{ width: "150px", height: "100px" }} />
          </Box>
          <Box
            sx={{
              lineHeight: 6
            }}>
            <Button sx={{
              background: "red",
              color: "#fff",
              fontSize: "14px",
              width: "100px",

              "&: hover": {
                background: "yellow",
                color: "#000"
              }
            }}>Sign In</Button>
          </Box>
        </Grid>
        <Grid sx={{ width: "50%px", margin: "auto", textAlign: "center", color: "white", paddingTop: "0px" }}>
          <Slide left>
            <Typography variant='h2'>
              Unlimited movie, TV show and more
            </Typography>
          </Slide>

          <Slide right>
            <Typography variant='h5'>
              Watch anywhare, cancel anytime
            </Typography>
          </Slide>

          <Slide left>
            <Typography variant='body'>
              Ready to watch? Enter your email to create or restart your membership.
            </Typography>
          </Slide>

          <Slide right>

            <Input
              id="input-with-icon-adornment"
              placeholder='Enter your email'
              sx={{
                background: "white",
                width: "50%",
                height: "50px",
                paddingLeft: "20px",
                marginBottom: "100px",
                // marginBottom: "30px",
                marginTop: "20px",
                cursor: "pointer"
              }}

              endAdornment={
                <InputAdornment position="end"
                  sx={{
                    background: "red",
                    height: "30px",
                    padding: "10px 10px 10px 10px",
                    color: "white"

                  }}>
                  Get Started
                  <SendRoundedIcon
                    sx={{
                      paddingLeft: "10px"
                    }} />
                </InputAdornment>
              }
            />
          </Slide>
        </Grid>
      </Grid>
    </div>
  )
}

export default navbar
