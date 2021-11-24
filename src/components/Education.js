import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import '../styles/App.css';

class Education extends React.Component {
    render() {
        return (
            <Container
                sx={{
                    padding: '20px',
                }}
            >
                <h1>Education</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        label="Institution"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Degree"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Subject"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        type="month"
                        defaultValue="2020-01"
                        label="From"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        type="month"
                        defaultValue="2020-12"
                        label="To"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                </Box>
                <Button variant="contained">Add</Button>
                <Button variant="contained">Save</Button>
            </Container>
        );
    }
}

export default Education;
