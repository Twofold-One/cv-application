import React from 'react';
import '../../styles/OutputCV.css';

class CVExperience extends React.Component {
    render() {
        const { companyName, position, from, to, mainTasks } = this.props;
        return (
            <div className="CV-info-exp">
                <div className="CV-info-other">
                    <div>
                        <h2>{companyName}</h2>
                        <p>{position}</p>
                    </div>
                    <div>
                        <p>
                            {from} to {to}
                        </p>
                    </div>
                </div>
                <div className="CV-info-other-tasks">
                    <p>{mainTasks}</p>
                </div>
            </div>
        );
    }
}

export default CVExperience;
