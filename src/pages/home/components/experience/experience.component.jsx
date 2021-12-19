import React from 'react';
import { ExperienceContainer } from './experience.styles';


const Experience = () => (
    <ExperienceContainer>

        <div className="container">
            <h2>My Experience</h2>

            <div className="content">
                <div>
                    <span>14 362</span>
                    Order Aсcepted
                </div>
                <div>
                    <span>15</span>
                    Years experience
                </div>
                <div>
                    <span>57</span>
                    Reviews
                </div>
                <div className="logo"></div>
                <div className="col">
                    <span>9 584</span>
                    Clients i served
                </div>
                <div className="col">
                    <span>3</span>
                    Diplomas and certificates
                </div>
                <div className="col">
                    <span>527</span>
                    Clients follow my Instagram
                </div>
            </div>
        </div>

    </ExperienceContainer>
);

export default Experience;