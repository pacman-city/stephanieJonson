import { useMediaQuery } from 'react-responsive';

import TeamSlider from '../../components/team-slider/team-slider.component';
import TeamCards from '../../components/team-cards/team-cards.component';

import { PreviewContainer, TeamContainer, TeamPageContainer } from './team-page.styles';


const TeamPage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <TeamPageContainer>
            <PreviewContainer>
                <div className="container">
                    <h1>OUR TEAM</h1>
                    <button>BOOK ONLINE</button>
                    <div className="dots"></div>
                </div>
            </PreviewContainer>

            <TeamContainer>
                {
                    isMobile ? <TeamSlider /> : <TeamCards />
                }
            </TeamContainer>

        </TeamPageContainer>
    );
}

export default TeamPage;