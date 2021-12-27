import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsContainerMobile, TestimonialsContainer } from './testimonials.styles';


const data = ['Hairstyle', 'Nails', 'Makeup'];
const data1 = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Orci nec fermentum interdum euismod id id elit nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Orci nec fermentum interdum euismod id id elit nulla. Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Orci nec fermentum interdum euismod id id elit nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.',
    'Enim fermentum nam feugiat etiam consectetur. Orci nec fermentum interdum euismod id id elit nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim fermentum nam feugiat etiam consectetur. Enim fermentum nam feugiat etiam consectetur.'
];

const MobileView = () => (
    <TestimonialsContainerMobile>

        <h2>testimonials</h2>

        <div className='slider'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                speed={500}
                loop={true}
                centeredSlides={true}
            >
                {data.map(item =>
                    <SwiperSlide key={item}>
                        <div>
                            <span>{`${item}`}</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>

        <div className="slider-content">
            <Swiper
                slidesPerView={1}
                speed={500}
                loop={true}
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
                {data1.map((item, i) =>
                    <SwiperSlide key={i}>
                        <div>
                            <p>{item}</p>
                            <Link to="/" className='link-blue'>View more</Link>
                        </div>
                        <span>Mikel Oliver/Client</span>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>

        <Link to='/' className="button-sqr">More testimonials</Link>

    </TestimonialsContainerMobile>
)

const LargeView = () => (
    <TestimonialsContainer>
        <div className="wrapper">

            <div className='slider'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    direction={'vertical'}
                    speed={500}
                    loop={true}
                    centeredSlides={true}
                >
                    {
                        data.map(item =>
                            <SwiperSlide key={item}>
                                <div>
                                    <span>{`${item}`}</span>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>

            <div className="slider-content">
                <h2>testimonials</h2>

                <Swiper
                    slidesPerView={1}
                    effect={'creative'}
                    speed={400}
                    loop={true}
                    grabCursor={true}
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
                    creativeEffect={{
                        "prev": {
                            "shadow": false,
                            "translate": [0, 0, -400]
                        },
                        "next": {
                            "translate": ["100%", 0, 0]
                        }
                    }}
                >
                    {data1.map((item, i) =>
                        <SwiperSlide key={i}>
                            <div>
                                <p>{item}</p>
                                <Link to="/" className='link-blue'>View more</Link>
                            </div>
                            <span>Mikel Oliver/Client</span>
                        </SwiperSlide>
                    )}
                </Swiper>

                <Link to='/' className="button-sqr">More testimonials</Link>
            </div>

        </div>
    </TestimonialsContainer>
)

const Testimonials = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return isMobile ? <MobileView /> : <LargeView />;
}

export default Testimonials;