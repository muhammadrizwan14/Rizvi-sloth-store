import { Grid } from '@mui/material'
import moment from 'moment/moment'
import React from 'react'
import './footer.css'
function Footer() {
  return (
      <div className='foot_p'>
          <Grid >
              <span >© {moment().format('YYYY')} </span><span className='foot_span'>ComfySloth</span>
              <span>All rights reserved</span>
              
          </Grid>
    </div>
  )
}

export default Footer