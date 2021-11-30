import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import OutputCV from './components/OutputCV';
import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        primary: deepPurple,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '20px',
                },
            },
        },
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoURL: '',
            firstName: '',
            lastName: '',
            position: '',
            phone: '',
            address: '',
            email: '',
            edInstitution: ['Institution name'],
            edDegree: ['Degree'],
            edSubject: ['Subject'],
            edFrom: ['2015-09'],
            edTo: ['2020-12'],
            expCompanyName: '',
            expPosition: '',
            expMainTasks: '',
            expFrom: '',
            expTo: '',
        };
        this.handleGeneralInputChange =
            this.handleGeneralInputChange.bind(this);
        this.handleEducationInputChange =
            this.handleEducationInputChange.bind(this);
    }

    handleGeneralInputChange(object) {
        const name = Object.keys(object)[0];
        const value = object[name];
        this.setState({
            [name]: value,
        });
    }

    // todo
    handleEducationInputChange(object) {
        const name = Object.keys(object)[0];
        const value = object[name];
        const { id } = object;
        const state = this.state[name].slice();
        state[id] = value;
        this.setState({
            [name]: state,
        });
        console.log(this.state);
    }

    render() {
        const { firstName, lastName, position, phone, address, email } =
            this.state;
        const { edInstitution, edDegree, edSubject, edFrom, edTo } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Header />
                    <General
                        onInputChange={this.handleGeneralInputChange}
                        firstName={firstName}
                        lastName={lastName}
                        position={position}
                        phone={phone}
                        address={address}
                        email={email}
                    />
                    {/* todo */}
                    <Education
                        onInputChange={this.handleEducationInputChange}
                        edInstitution={edInstitution}
                        edDegree={edDegree}
                        edSubject={edSubject}
                        edFrom={edFrom}
                        edTo={edTo}
                    />
                    <Experience />
                    <OutputCV
                        firstName={firstName}
                        lastName={lastName}
                        position={position}
                        phone={phone}
                        address={address}
                        email={email}
                        edInstitution={edInstitution}
                        edDegree={edDegree}
                        edSubject={edSubject}
                        edFrom={edFrom}
                        edTo={edTo}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
