import { Button, Grid } from '@mui/material';
import React from 'react'
import './feature.css';
import Product from './data';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
function Feature() {
    return (
        <div className='main-feature'>
            <h1 className='feat_h1'>Featured Products</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    Product.map((item) => {
                        return (

                            <Grid item xs={4}  >
                                <img src={item.ImageURL} alt='hh' width={"100%"} height={"225px"} />
                                <span>{item.h1} </span>   <span className='feat_span'>{item.p}</span>
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


        </div>
    )
}

export default Feature