import React from 'react';
import { Container, Button } from '@mui/material';
import ExperienceSub from './ExperienceSub';

class Experience extends React.Component {
    constructor(props) {
        super(props);
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
                <ExperienceSub
                    key={i}
                    id={i}
                    companyName={this.props.expCompanyName[i]}
                    position={this.props.expPosition[i]}
                    mainTasks={this.props.expMainTasks[i]}
                    from={this.props.expFrom[i]}
                    to={this.props.expTo[i]}
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
                <h1>Experience</h1>
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

export default Experience;
