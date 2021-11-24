import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';

class Experience extends React.Component {
    render() {
        return (
            <Container
                sx={{
                    padding: '20px',
                }}
            >
                <h1>Experience</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        label="Company name"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Position"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Main tasks"
                        multiline
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

export default Experience;
