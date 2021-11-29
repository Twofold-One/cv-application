import React from 'react';
import { Container, Button } from '@mui/material';
import EducationSub from './EducationSub';

class Education extends React.Component {
    constructor(props) {
        super(props);
        // component rerenders every time and that is the problem i guess
        this.state = {
            subCount: 0,
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.displaySubs = this.displaySubs.bind(this);
    }

    handleAddButtonClick() {
        this.setState({
            subCount: this.state.subCount + 1,
        });
        console.log(this.state);
    }

    handleDeleteButtonClick() {
        if (this.state)
            this.setState({
                subCount: this.state.subCount - 1,
            });
        console.log(this.state);
    }

    displaySubs() {
        let sub = [];
        for (let i = 0; i <= this.state.subCount; i += 1) {
            sub.push(
                <EducationSub
                    key={i}
                    id={i}
                    institution={this.props.edInstitution[i]}
                    degree={this.props.edDegree[i]}
                    subject={this.props.edSubject[i]}
                    from={this.props.edFrom[i]}
                    to={this.props.edTo[i]}
                    onInputChange={this.props.onInputChange}
                />
            );
        }
        return sub;
    }

    render() {
        return (
            <Container
                sx={{
                    padding: '20px',
                }}
            >
                <h1>Education</h1>
                {this.displaySubs()}
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
