import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

export default function SkillsPage() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{paddingBottom: '20px'}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Languages and Frameworks:
                    </Typography>
                    <Grid container spacing= {2}>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" component="body1" gutterBottom>
                            JavaScript <br></br>
                            Java <br></br>
                            C++ <br></br>
                            C# <br></br>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" component="body1" gutterBottom>
                            SQL <br></br>
                            Python <br></br>
                            React.js <br></br>
                            Node.js<br></br>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" component="body1" gutterBottom>
                            Bootstrap <br></br>
                            PHP <br></br>
                            Angular.js <br></br>
                            MongoDB<br></br>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
               
                <Box sx={{paddingBottom: '20px'}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Software:
                    </Typography>
                    <Typography variant="h6" component="body1" gutterBottom>
                        Visual Studio Code <br></br>
                        Microsoft Visual Studio <br></br>
                        SQL Server Management Studio<br></br>
                        MySQL<br></br>
                        Microsoft Office <br></br>
                        Adobe Creative Suite
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        
    )
}