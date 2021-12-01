import React from 'react';
import './styles/App.css';
import Header from './components/Header_and_General/Header';
import General from './components/Header_and_General/General';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import OutputCV from './components/OutputCV/OutputCV';
import PDFDocument from './components/PDF_Export/PDFDocument';
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
            expCompanyName: ['Company name'],
            expPosition: ['Position'],
            expMainTasks: ['Main Tasks'],
            expFrom: ['2015-09'],
            expTo: ['2020-12'],
        };
        this.handleGeneralInputChange =
            this.handleGeneralInputChange.bind(this);
        this.handleEducationInputChange =
            this.handleEducationInputChange.bind(this);
        this.handleExperienceInputChange =
            this.handleExperienceInputChange.bind(this);
    }

    handleGeneralInputChange(object) {
        const name = Object.keys(object)[0];
        const value = object[name];
        this.setState({
            [name]: value,
        });
    }

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

    handleExperienceInputChange(object) {
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
        const {
            photoURL,
            firstName,
            lastName,
            position,
            phone,
            address,
            email,
        } = this.state;
        const { edInstitution, edDegree, edSubject, edFrom, edTo } = this.state;
        const { expCompanyName, expPosition, expMainTasks, expFrom, expTo } =
            this.state;
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Header />
                    <General
                        onInputChange={this.handleGeneralInputChange}
                        photoURL={photoURL}
                        firstName={firstName}
                        lastName={lastName}
                        position={position}
                        phone={phone}
                        address={address}
                        email={email}
                    />
                    <Education
                        onInputChange={this.handleEducationInputChange}
                        edInstitution={edInstitution}
                        edDegree={edDegree}
                        edSubject={edSubject}
                        edFrom={edFrom}
                        edTo={edTo}
                    />
                    <Experience
                        onInputChange={this.handleExperienceInputChange}
                        expCompanyName={expCompanyName}
                        expPosition={expPosition}
                        expMainTasks={expMainTasks}
                        expFrom={expFrom}
                        expTo={expTo}
                    />
                    <OutputCV
                        photoURL={photoURL}
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
                        expCompanyName={expCompanyName}
                        expPosition={expPosition}
                        expFrom={expFrom}
                        expTo={expTo}
                        expMainTasks={expMainTasks}
                    />
                    <PDFDocument photoURL={photoURL} />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
