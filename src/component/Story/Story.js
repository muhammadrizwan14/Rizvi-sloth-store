import { Grid, Typography } from '@mui/material'
import React from 'react';
import './story.css';
import S1 from './image/s1.jpeg'
function Story() {
  return (
      <div className='story_main'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={6} lg={6} >
                 
                  <img src={S1} alt="" width={"100%"} height={"500px"} />
              </Grid>
              <Grid item xs={6} >
                  <h1>Our Story</h1>
                  <div class="underline"></div>
                  <Typography variant='p' fontSize={"16px"} lineHeight={"2"} maxWidth={"45em"} color={"#617d98"} textAlign={"justify"}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                  </Typography>
              </Grid>

          </Grid>
    </div>
  )
}

export default Story