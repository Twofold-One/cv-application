import React from 'react';
import '../styles/OutputCV.css';

class OutputCV extends React.Component {
    render() {
        return (
            <div className="OutputCV">
                <h1>Your CV</h1>
                <div className="CV-header">
                    <div className="CV-header-photo">
                        <img
                            src="https://petsworlds.ru/images/sampledata/Profile_avatar_placeholder_large.png"
                            alt="your face"
                        ></img>
                    </div>
                    <div className="CV-header-info">
                        <h2>Evan Geras</h2>
                        <p className="it">Developer</p>
                        <div className="CV-header-info-general">
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Phone:</p>
                                <p>+7xxxxxxxxxx</p>
                            </div>
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Address:</p>
                                <p>Random str</p>
                            </div>
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Email:</p>
                                <p>MyEmail@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CV-main">
                    <div className="CV-info">
                        <h2 className="CV-info-h2">EDUCATION</h2>
                        <div className="CV-info-other">
                            <div>
                                <h2>Institution name</h2>
                                <p>Degree, Subject</p>
                            </div>
                            <div>
                                <p>January 2020 to Present</p>
                            </div>
                        </div>
                    </div>
                    <div className="CV-info">
                        <h2 className="CV-info-h2">EXPERIENCE</h2>
                        <div className="CV-info-other">
                            <div>
                                <h2>Company name</h2>
                                <p>Position</p>
                            </div>
                            <div>
                                <p>January 2020 to Present</p>
                            </div>
                        </div>
                        <div className="CV-info-other-tasks">
                            <p>Main tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OutputCV;