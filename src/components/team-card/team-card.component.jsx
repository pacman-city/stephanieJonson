import React from 'react';
import { Link } from 'react-router-dom';

import { TeamCardContainer } from './team-card.styles';
import img from '../../assets/images/image8.jpg';


const TeamCard = ({ name, position, stats }) => (
    <TeamCardContainer>

        <div className="image">
            <img src={img} alt="team member" />
        </div>

        <p className='name'>{name}</p>
        <p className="position">{position}</p>

        <div className="stats">
            <p>Expirience in:</p>
            {
                stats.map((item, i) => <span key={i}>{item}</span>)
            }
        </div>

        <Link to='/' className='button-sqr'>Book a Beauty Pro</Link>

    </TeamCardContainer>
);

export default TeamCard;