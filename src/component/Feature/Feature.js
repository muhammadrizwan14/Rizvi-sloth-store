import { Button, Container, Grid } from '@mui/material';
import React from 'react'

import Product from './data';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
function Feature() {
    return (
        <Container sx={{
            background: '#f1f5f8',
            padding: '20px'

        }} >
            <h1
                style={{
                    textAlign: 'center',
                    color: '#102a42'
                }}
            >Featured Products</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    Product.map((item) => {
                        return (

                            <Grid item sx={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                                <Box sx={{ width: '350px' }}>
                                    <img src={item.ImageURL} alt='hh' width={"100%"} height={"225px"} />
                                </Box>
                                <span>{item.h1} </span>   <span style={{
                                    color: ' #ab7a5f',
                                    display: 'flex',
                                    float: 'right'
                                }}>{item.p}</span>
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Box align="center" mt={5}>
                <Link to="/product">

                    <Button style={{
                        backgroundColor: "#ab7a5f",
                        fontSize: "18px",
                        marginTop: "5px"

                    }}
                        variant="contained">ALL PRODUCTS</Button>
                </Link>
            </Box>


        </Container>
    )
}

export default Feature