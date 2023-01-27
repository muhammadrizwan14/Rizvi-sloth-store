import { Button, Grid, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import S1 from './images/S1.jpeg';
import s2 from './images/s2.jpeg';
import './slider.css'

function Slider() {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} >
          <Typography variant='h1' fontSize={"70px"} mt={9}>
            Design Your
            Comfort Zone
          </Typography>
          <Typography variant='p' fontSize={"20px"} lineHeight={"2"} maxWidth={"45em"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
          </Typography>
          <Box >
            <Link to="/product">
         
            <Button style={{
              backgroundColor: "#ab7a5f",
              fontSize: "18px",
              marginTop:"5px"
            }}
                variant="contained">SHOP NOW</Button>
            </Link>
          </Box>
          
        </Grid>
        <Grid item xs={6} >
          <img src={S1} alt="" width={"70%"} height={"560px"} className="img-top" />
          <img src={s2} alt="" width= {"250px"} className="imgbottom"/>
        </Grid>
       
      </Grid>
    </div>
  )
}

export default Slider