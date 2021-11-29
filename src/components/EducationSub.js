import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

class EducationSub extends React.Component {
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
        const { institution, degree, subject, from, to } = this.props;
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '30px',
                }}
            >
                <TextField
                    label="Institution"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edInstitution"
                    value={institution || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    label="Degree"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edDegree"
                    value={degree || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edSubject"
                    value={subject || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    type="month"
                    label="From"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edFrom"
                    value={from || ''}
                    onChange={this.handleInputChange}
                />
                <TextField
                    type="month"
                    label="To"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edTo"
                    value={to || ''}
                    onChange={this.handleInputChange}
                />
            </Box>
        );
    }
}

export default EducationSub;
