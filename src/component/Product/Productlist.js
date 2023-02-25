import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import Listdata from './List'
function Productlist() {
    return (
        
     
      
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

            {
                Listdata.map((item) => {
                    return (

                        <Grid item p={2} sx={{ xs: 12, sm: 6, md: 6, lg: 4 }} >
                            <Box sx={{ width: '300px' }}>
                                <img src={item.ImageURL} alt='hh' width={"100%"} height={"175px"} />
                            </Box>

                            <span >{item.h1} </span> <span style={{
                                color: ' #ab7a5f',
                                display: 'flex',
                                float: 'right'
                            }}>{item.p}</span>
                        </Grid>
                    )
                })
            }
            </Grid>
     
    )
}

export default Productlist