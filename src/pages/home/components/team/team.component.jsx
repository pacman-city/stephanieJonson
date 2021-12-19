import React from 'react';
import { useMediaQuery } from 'react-responsive';

import TeamSlider from '../../../../components/team-slider/team-slider.component';
import TeamCards from '../../../../components/team-cards/team-cards.component';

import { TeamContainer } from './team.styles';

const Team = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <TeamContainer>
            <h2>OUR BEAUTY PROFESSIONALS</h2>
            {
                isMobile ? <TeamSlider /> : <TeamCards />
            }
        </TeamContainer>
    );
}

export default Team;