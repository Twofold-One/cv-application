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

        this.props.onInputChange({ [name]: value });
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
                    name="edInstitiution"
                    value={institution || ''}
                />
                <TextField
                    label="Degree"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edDegree"
                    value={degree || ''}
                />
                <TextField
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edSubject"
                    value={subject || ''}
                />
                <TextField
                    type="month"
                    label="From"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edFrom"
                    value={from || ''}
                />
                <TextField
                    type="month"
                    label="To"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="edTo"
                    value={to || ''}
                />
            </Box>
        );
    }
}

export default EducationSub;
