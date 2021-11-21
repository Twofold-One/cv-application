import './styles/App.css';

import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
    return (
        <div className="App">
            <General />
            <Education />
            <Experience />
        </div>
    );
}

export default App;
