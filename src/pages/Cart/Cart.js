import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <Grid height={"78vh"} >
      <Typography variant='h3' textAlign={"center"} pt={5}>
        Your cart is empty
      </Typography>
      <Box align="center" mt={3}>
        <Link to="/product">

          <Button style={{
            backgroundColor: "#ab7a5f",
            fontSize: "18px"

          }}
            variant="contained">Fill It</Button>
        </Link>
      </Box>
   </Grid>
  )
}

export default Cart