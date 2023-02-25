import React from 'react'
import { Grid, Stack, Typography,  MenuItem, FormControl, Select } from '@mui/material'
function Leftside() {
  return (
      <Grid width={'150px'} bgcolor="red">
          <Typography variant='h5' color={'gray'}>
              Category
          </Typography>

          <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
          >
              <MenuItem>All</MenuItem>
              <MenuItem>Office</MenuItem>
              <MenuItem>Living Room</MenuItem>
              <MenuItem>Kitchen</MenuItem>
              <MenuItem>Bedroom</MenuItem>
              <MenuItem>Dining</MenuItem>
              <MenuItem>Kids</MenuItem>

          </Stack>
          <Typography variant='h5' color={'gray'}>
              Category
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
              <Select
              >
                  <MenuItem >
                      All
                  </MenuItem>
                  <MenuItem >Ten</MenuItem>
                  <MenuItem >Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
              </Select>

          </FormControl>
          <Typography variant='h5' color={'gray'}>
              Colors
          </Typography>


      </Grid>
  )
}

export default Leftside