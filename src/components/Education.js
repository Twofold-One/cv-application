import React from 'react';
import { Container, Button } from '@mui/material';
import EducationSub from './EducationSub';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: [<EducationSub id="1" key="1" />],
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }

    handleAddButtonClick() {
        this.setState({
            sub: this.state.sub.concat(
                <EducationSub
                    id={this.state.sub.length + 1}
                    key={this.state.sub.length + 1}
                />
            ),
        });
    }

    handleDeleteButtonClick() {
        const sub = this.state.sub.slice();
        sub.pop();
        this.setState({
            sub: sub,
        });
    }

    render() {
        return (
            <Container
                sx={{
                    padding: '20px',
                }}
            >
                <h1>Education</h1>
                {this.state.sub}
                <Button variant="contained" onClick={this.handleAddButtonClick}>
                    Add
                </Button>
                <Button
                    variant="contained"
                    onClick={this.handleDeleteButtonClick}
                >
                    Delete
                </Button>
            </Container>
        );
    }
}

export default Education;
