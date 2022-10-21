import { Grid, Typography,InputAdornment,Input } from '@material-ui/core'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import React, { useState } from 'react'

const Myfaq = ({ title, content }) => {
  const [show, setShow] = useState(false)
  return (
    <div >

      <Grid container
        style={{
          width: "60%",
          margin: "auto",
          color: "white",
          // marginTop:"200px"
        }}>
        <Grid
          onClick={() => setShow(!show)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "700px",
            padding: "15px 50px 15px 50px",
            cursor: "pointer",
            marginBottom: "1px",
            marginTop: "1px",
            background: "#303030",

          }}>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body'
            style={{
              fontSize:"35px",
            }}>{show ? "-" : "+"}</Typography>
        </Grid>
        <Grid
          style={{
            padding: "0px 50px 0px 50px",
            textAlign: "justify",
            background: "#303030",
            width: "700px",
          }}>
          {
            show && <Typography variant='h6'
            style={{
              padding:"15px 0px 15px 0px"
            }}>{content}</Typography>
          }
        </Grid>

      </Grid>
    </div>
  )
}

export default Myfaq
