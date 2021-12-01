import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

class ExperienceSub extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const id = this.props.id;

        this.props.onInputChange({ [name]: value, id });
    }
    render() {
        const { companyName, position, mainTasks, from, to } = this.props;
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '20px',
                }}
            >
                <TextField
                    label="Company name"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="expCompanyName"
                    value={companyName || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    label="Position"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="expPosition"
                    value={position || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    label="Main tasks"
                    multiline
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="expMainTasks"
                    value={mainTasks || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    type="month"
                    label="From"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="expFrom"
                    value={from || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    type="month"
                    label="To"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="expTo"
                    value={to || ''}
                    onChange={this.handleInputChange}
                />
            </Box>
        );
    }
}

export default ExperienceSub;
