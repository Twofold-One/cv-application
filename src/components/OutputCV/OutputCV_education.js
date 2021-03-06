import React from 'react';
import '../../styles/OutputCV.css';

class CVEducation extends React.Component {
    render() {
        const { institution, degree, subject, from, to } = this.props;
        return (
            <div className="CV-info-other">
                <div>
                    <h2>{institution}</h2>
                    <p>
                        {degree}, {subject}
                    </p>
                </div>
                <div>
                    <p>
                        {from} to {to}
                    </p>
                </div>
            </div>
        );
    }
}

export default CVEducation;
