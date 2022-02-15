import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './LandingPage.css'

export default function LandingPage() {
    return (
        <Box>
            <Typography variant="h1" component="div" gutterBottom>
                Maria Waslick
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
                Full-Stack Web Development
            </Typography>
        </Box>
    )
}