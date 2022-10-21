import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import tv1 from './image/tv1.png'

const Card1 = () => {
    return (
        <div style={{ borderBottom: "5px solid gray" }}>
            <Grid container style={{ height: "35em", background: "black" }}>
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
                            <img src={tv1} alt="" width="350px" />
                        </Box>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6} style={{ margin: "auto" }}>
                    <Slide bottom>
                        <Box style={{marginRight:"100px"}}>
                            <Typography variant='h3' style={{ color: "white", textAlign: "center" }}>
                            Download your shows to watch offline.
                            </Typography>
                            <Typography variant='h5' style={{ color: "white", textAlign: "center" }}>
                            Save your favorites easily and always have something to watch.
                            </Typography>
                        </Box>
                    </Slide>
                </Grid>

            </Grid>
        </div>
    )
}

export default Card1
