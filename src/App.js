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
            PhotoURL: '',
            FirstName: '',
            LastName: '',
            position: '',
            phone: '',
            address: '',
            email: '',
            EdInstitution: '',
            EdDegree: '',
            EdSubject: '',
            EdFrom: '',
            EdTo: '',
            ExpCompanyName: '',
            ExpPosition: '',
            ExpMainTasks: '',
            ExpFrom: '',
            ExpTo: '',
        };
        this.handleGeneralInputChange =
            this.handleGeneralInputChange.bind(this);
    }

    handleGeneralInputChange(object) {
        const name = Object.keys(object)[0];
        const value = object[name];
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName, position, phone, address, email } =
            this.state;
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
                    <Education />
                    <Experience />
                    <OutputCV
                        firstName={firstName}
                        lastName={lastName}
                        position={position}
                        phone={phone}
                        address={address}
                        email={email}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
