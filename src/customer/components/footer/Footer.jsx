import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                        <Typography className='pb-5' gutterBottom> About </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Blog </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> press </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Jobs </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Patners </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Solutions </Typography>
                    <div>
                        <Typography className='pb-5' gutterBottom> Marketing </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Analytics </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Commerce </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Insights </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Support </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Documentation </Typography>
                    <div>
                        <Typography className='pb-5' gutterBottom> Guides </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> API Status </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Legal </Typography>
                    <div>
                        <Typography className='pb-5' gutterBottom> claim </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Privacy </Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' gutterBottom> Terms </Typography>
                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Made  with love by me.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer

// gutterBottom is used for clickable item