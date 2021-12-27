import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from '../team-card/team-card.component';
import { TeamSliderContainer } from './team-slider.styles';


const data = [
    { name: 'Joshua Weston', position: 'Master pro', stats: ['Nails - 10 years', 'Eyelashes - 8 years', 'Eyelashes - 8 years'] },
    { name: 'Gabrielle Rosengarten', position: 'Master pro', stats: ['Nails - 10 years'] },
    { name: 'Sarvjeet Kaur Saini', position: 'Master pro', stats: ['Nails - 10 years', 'Hair relowel - 8 years', 'Eyelashes - 8 years', 'Skincare - 5 years', 'Makeup - 3 years'] },
    { name: 'Joshua Weston', position: 'Master pro', stats: ['Nails - 10 years', 'Eyelashes - 8 years', 'Eyelashes - 8 years'] },
    { name: 'Gabrielle Rosengarten', position: 'Master pro', stats: ['Nails - 10 years'] },
    { name: 'Sarvjeet Kaur Saini', position: 'Master pro', stats: ['Nails - 10 years', 'Hair relowel - 8 years', 'Eyelashes - 8 years', 'Skincare - 5 years', 'Makeup - 3 years'] },
];

const TeamSlider = () => {
    const isSmall = useMediaQuery({ query: '(min-width: 576px)' });

    return (
        <TeamSliderContainer>
            <Swiper
                slidesPerView={isSmall ? 2 : 1}
                direction={'horizontal'}
                speed={300}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                    dynamicBullets: true,
                    dynamicMainBullets: 1,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index < 9 ? 0 : '') + (index + 1) + "</span>";
                    },
                }}
                navigation
            >
                {data.map((item, i) =>
                    <SwiperSlide key={i}>
                        <TeamCard {...item} />
                    </SwiperSlide>
                )}
            </Swiper>
        </TeamSliderContainer>
    );
}

export default TeamSlider;