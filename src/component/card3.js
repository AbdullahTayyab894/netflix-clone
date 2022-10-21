import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import tv2 from './image/tv2.png'

const Card3 = () => {
    return (
        <div style={{ borderBottom: "5px solid gray" }}>
            <Grid container style={{ height: "40em", background: "black" }}>
                <Grid item xs={12} md={6}>
                    <Slide top>
                        <Box style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "120px",
                            // marginBottom:"auto",
                            width: "70%"
                        }}>
                            <img src={tv2} alt="" width="350px" />
                        </Box>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6} style={{ margin: "auto" }}>
                    <Slide bottom>
                        <Box style={{marginRight:"100px"}}>
                            <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
                            Create profiles for kids.
                            </Typography>
                            <Typography variant='h5' style={{ color: "white", textAlign: "center" }}>
                            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>

            </Grid>
        </div>
    )
}

export default Card3
