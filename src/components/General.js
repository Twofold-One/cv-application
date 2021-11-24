import React from 'react';
import { Container, TextField, Button, Avatar, InputBase } from '@mui/material';
import { Box } from '@mui/system';

class General extends React.Component {
    render() {
        return (
            <Container
                sx={{
                    padding: '20px',
                }}
            >
                <h1>General Information</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Avatar
                        sx={{
                            margin: '10px',
                        }}
                        variant="rounded"
                        src="https://petsworlds.ru/images/sampledata/Profile_avatar_placeholder_large.png"
                    ></Avatar>
                    <InputBase type="file"></InputBase>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        label="First name"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Last name"
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
                        label="Phone"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                </Box>
                <Button variant="contained">Save</Button>
            </Container>
        );
    }
}

export default General;
