import { Typography,Grid } from '@material-ui/core'
import Slide from 'react-reveal/Slide';


import React from 'react'

const Footer = () => {
    return (
        <div style={{ borderBottom: "5px solid gray",background:"black" }}>
            <div>
            <Grid container 
            style={{
                textAlign:"center",
                // margin:"0px 100px 0px 100px"
                paddingTop:"50px",
                marginBottom:"50px",
                color:"white"
            }}>
                {/* <Slide bottom> */}

                <Grid xs={6} md={3}>
                    <Typography>Faqs</Typography>
                    <Typography>Invester Relation</Typography>
                    <Typography>Privacy</Typography>
                    <Typography>Speed Test</Typography>
                    <Typography>Netflix Pakistan</Typography>
                </Grid>
                <Grid xs={6} md={3}>
                    <Typography>Help Center</Typography>
                    <Typography>Jobs</Typography>
                    <Typography>Cokies Preference</Typography>
                    <Typography>Legal Notice</Typography>

                </Grid>
                <Grid xs={6} md={3}>
                    <Typography>Account</Typography>
                    <Typography>Wats to watch</Typography>
                    <Typography>Cooporate Information</Typography>
                    <Typography>Only on a Netflix</Typography>

                </Grid>
                <Grid xs={6} md={3}>
                    <Typography>Media Center</Typography>
                    <Typography>Terms of use</Typography>
                    <Typography>Contact Us</Typography>

                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
