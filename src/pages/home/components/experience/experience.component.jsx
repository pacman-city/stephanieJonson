import { ExperienceContainer } from './experience.styles';


const Experience = () => (
    <ExperienceContainer>
        <div className="container">
            <h2>My Experience</h2>

            <div className="content">
                <div className='experinece-item'>
                    <span>14 362</span>
                    Order Aсcepted
                </div>
                <div className='experinece-item'>
                    <span>15</span>
                    Years experience
                </div>
                <div className='experinece-item'>
                    <span>57</span>
                    Reviews
                </div>
                <div className="logo"></div>
                <div className="experinece-item col">
                    <span>9 584</span>
                    Clients i served
                </div>
                <div className="experinece-item col">
                    <span>3</span>
                    Diplomas and certificates
                </div>
                <div className="experinece-item col">
                    <span>527</span>
                    Clients follow my Instagram
                </div>
            </div>
        </div>
    </ExperienceContainer>
);

export default Experience;