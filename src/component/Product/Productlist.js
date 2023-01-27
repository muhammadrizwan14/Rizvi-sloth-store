import { Grid } from '@mui/material'
import React from 'react'
import List from './List'
function Productlist() {
  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          {
              List.map((item) => {
                  return (

                      <Grid item xs={4} p={2}  >
                          <img src={item.ImageURL} alt='hh' width={"100%"} height={"225px"} />
                          <span>{item.h1} </span>   <span className='feat_span'>{item.p}</span>
                      </Grid>
                  )
              })
          }
      </Grid>
  )
}

export default Productlist