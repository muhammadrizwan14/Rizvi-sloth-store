import { Container, Grid } from '@mui/material'
import moment from 'moment/moment'
import React from 'react'
import './footer.css'
function Footer() {
  return (
    <Container sx={{
      height: "5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      background: "#222",
      textAlign: 'center',
      color: 'white',

    }} >
      <Grid >
        <span >© {moment().format('YYYY')} </span><span
          style={{
            color: '#ab7a5f',
            margin: '0px 5px',
          }}>ComfySloth</span>
        <span>All rights reserved</span>

      </Grid>
    </Container>
  )
}

export default Footer