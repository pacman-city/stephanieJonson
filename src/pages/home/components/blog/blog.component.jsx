import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { BlogContainer } from './blog.styles';
import img from '../../../../assets/images/image9.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper';
import 'swiper/scss';


SwiperCore.use([Pagination, Navigation, A11y]);

const data = [
    { title: 'Nails', subtitle: 'Beauty nails is so famous but why ?' },
    { title: 'Nails', subtitle: 'Beauty nails is so famous but why ?' },
    { title: 'Nails', subtitle: 'Beauty nails is so famous but why ?' },
    { title: 'Nails', subtitle: 'Beauty nails is so famous but why ?' },
    { title: 'Nails', subtitle: 'Beauty nails is so famous but why ?' }
];

const Slider = ({ isSmall, isMobile }) => (
    <div className='slider'>
        <Swiper
            spaceBetween={20}
            slidesPerView={isSmall ? 1 : isMobile ? 1.8 : 3}
            speed={500}
            navigation
        >
            {data.map((item, i) =>
                <SwiperSlide key={i}>
                    <Card {...data[i]} />
                </SwiperSlide>
            )}
        </Swiper>
    </div>
);

const Card = ({ title, subtitle }) => (
    <div className="card">
        <img src={img} alt="blog" />
        <div className="card-title">
            <span>{title}</span>
            <p>{subtitle}</p>
        </div>
    </div>
);

const Blog = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 575.98px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });

    return (
        <BlogContainer>
            <h2>My blog</h2>

            <div className="cards">
                {
                    isTablet
                        ? <Slider isSmall={isSmall} isMobile={isMobile} />
                        : data.filter((item, i) => i < 3 && true).map((item, i) => <Card key={i} {...item} />)
                }
            </div>

        </BlogContainer>
    );
}

export default Blog;