import React from 'react';
import { TeamCardsContainer } from './team-cards.styles';
import TeamCard from '../team-card/team-card.component';

const data = [
    { name: 'Joshua Weston', position: 'Master pro', stats: ['Nails - 10 years', 'Eyelashes - 8 years', 'Eyelashes - 8 years'] },
    { name: 'Gabrielle Rosengarten', position: 'Master pro', stats: ['Nails - 10 years'] },
    { name: 'Sarvjeet Kaur Saini', position: 'Master pro', stats: ['Nails - 10 years', 'Hair relowel - 8 years', 'Eyelashes - 8 years', 'Skincare - 5 years', 'Makeup - 3 years'] },
    { name: 'Joshua Weston', position: 'Master pro', stats: ['Nails - 10 years', 'Eyelashes - 8 years', 'Eyelashes - 8 years'] },
    { name: 'Gabrielle Rosengarten', position: 'Master pro', stats: ['Nails - 10 years'] },
    { name: 'Sarvjeet Kaur Saini', position: 'Master pro', stats: ['Nails - 10 years', 'Hair relowel - 8 years', 'Eyelashes - 8 years', 'Skincare - 5 years', 'Makeup - 3 years'] },
];

const TeamCards = () => (
    <TeamCardsContainer>
        {
            data.map((item, i) => <TeamCard key={i} {...item} />)
        }
    </TeamCardsContainer>
);

export default TeamCards;