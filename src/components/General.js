import React from 'react';
import { Container, TextField, Button, Avatar, InputBase } from '@mui/material';
import { Box } from '@mui/system';

class General extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.props.onInputChange({ [name]: value });
    }

    render() {
        const { firstName, lastName, position, phone, address, email } =
            this.props;
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
                        name="firstName"
                        value={firstName}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        label="Last name"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        label="Position"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        name="position"
                        value={position}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        label="Phone"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        name="phone"
                        value={phone}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        name="address"
                        value={address}
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                    />
                </Box>
                <Button variant="contained">Save</Button>
            </Container>
        );
    }
}

export default General;
