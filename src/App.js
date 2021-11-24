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
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <General />
                <Education />
                <Experience />
                <OutputCV />
            </div>
        </ThemeProvider>
    );
}

export default App;
