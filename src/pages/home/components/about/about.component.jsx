import { Link } from 'react-router-dom';
import { AboutContainer } from './about.styles';


const About = () => (
    <AboutContainer>
        <div className="container">
            <h2>About me</h2>

            <div className="image">
                <div className="image-backdrop">
                    <div></div>
                </div>
                <div className="image-frame">
                    <div></div>
                </div>
            </div>

            <p>This nair salon has been recognized as one of Tulsa’s best since 2012. It has an experienced color team and uses Wella Professionals hair color. The stylists stay up-to-date on the latest trends but will also be able to style your hair to fit your personality. Z Studio has two convenient Tulsa locations. </p>

            <Link to='/' className="button-sqr">Learn more</Link>
        </div>
    </AboutContainer>
);

export default About;