import React from 'react';
import { Link } from 'react-router-dom';

import { TeamCardContainer } from './team-card.styles';
import img from '../../assets/images/image8.jpg';
import Avatar from '../avatar/avatar.component';


const TeamCard = ({ name, position, stats }) => (
    <TeamCardContainer>
        <Avatar url={img} size='lg' />
        <h3>{name}</h3>
        <b>{position}</b>
        <div className='stats'>
            <p>Expirience in:</p>
            {
                stats.map((item, i) => <span key={i}>{item}</span>)
            }
        </div>

        <Link to='/' className='button-sqr'>Book a Beauty Pro</Link>

    </TeamCardContainer>
);

export default TeamCard;