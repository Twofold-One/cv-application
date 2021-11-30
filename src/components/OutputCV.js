import React from 'react';
import '../styles/OutputCV.css';
import CVEducation from './OutputCV_education';

class OutputCV extends React.Component {
    renderEducationInfo = () => {
        const { edInstitution, edDegree, edSubject, edFrom, edTo } = this.props;
        let edSub = [];
        console.log('education');
        for (let i = 0; i < edInstitution.length; i += 1) {
            edSub.push(
                <CVEducation
                    className="CV-info-ohter"
                    key={i}
                    institution={edInstitution[i]}
                    degree={edDegree[i]}
                    subject={edSubject[i]}
                    from={edFrom[i]}
                    to={edTo[i]}
                />
            );
        }
        return edSub;
    };

    render() {
        const { firstName, lastName, position, phone, address, email } =
            this.props;
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
                        <h2>
                            {firstName} {lastName}
                        </h2>
                        <p className="it">{position}</p>
                        <div className="CV-header-info-general">
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Phone:</p>
                                <p>{phone}</p>
                            </div>
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Address:</p>
                                <p>{address}</p>
                            </div>
                            <div className="CV-header-info-general-elements">
                                <p className="pre">Email:</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CV-main">
                    <div className="CV-info">
                        <h2 className="CV-info-h2">EDUCATION</h2>
                        {this.renderEducationInfo()}
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
