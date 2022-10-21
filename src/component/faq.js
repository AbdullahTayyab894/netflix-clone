import React, { useState } from 'react'
import { data } from './myApi'
import Myfaq from './Myfaq'
import Flip from 'react-reveal/Flip';

import { Grid, Input, InputAdornment,Typography } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const Faq = () => {

  const [myData, setData] = useState(data);

  return (
    <div style={{ background: "black", color: "white",paddingTop:"100px",borderBottom: "5px solid gray"}}>
      {
        myData.map((item) => {

          return (
            <div data-aos="flip-left">
              <Flip left>
              <Myfaq key={item.id} {...item} />
              </Flip>
            </div>
          )
        })
      }
      <Grid style={{
        textAlign:"center",
        marginTop:"100px"
      }}>
        <Typography>
        Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Input
          id="input-with-icon-adornment"
          placeholder='Enter your email'
          sx={{
            background: "white",
            width: "50%",
            height: "50px",
            paddingLeft: "20px",
            marginTop:"20px",
            marginBottom: "30px",
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
      </Grid>
    </div>
  )
}

export default Faq
