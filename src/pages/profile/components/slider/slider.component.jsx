import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { SliderContainer } from './slider.styles';
import img from '../../../../assets/images/serrificate.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper';
import 'swiper/scss';


SwiperCore.use([Pagination, Navigation, A11y]);

const data = [img, img, img, img, img];

const Slider = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' });

    return (
        <SliderContainer>
            <div className="container">
                <h2>DOCUMENTS & SERTIFICATES</h2>

                <Swiper
                    slidesPerView={isPhone ? 1 : 3}
                    speed={500}
                    navigation
                >
                    {data.map((item, i) =>
                        <SwiperSlide key={i}>
                            <img src={item} alt="sertificate" />
                        </SwiperSlide>
                    )}
                </Swiper>

                <Link to='/' className="button-sqr">My services</Link>
            </div>
        </SliderContainer>
    );
}

export default Slider;