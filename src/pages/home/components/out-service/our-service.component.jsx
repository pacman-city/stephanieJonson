import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

import { Swiper, SwiperSlide } from 'swiper/react';
import { OurServiceContainer } from './our-service.styles';


const Slider = ({ services, isSmall }) => (
    <Swiper
        spaceBetween={50}
        slidesPerView={isSmall ? 1.7 : 1}
        speed={500}
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
        {services.map(service =>
            <SwiperSlide key={service}>
                <Link to='/' className='card'>
                    <div>{service}</div>
                </Link>
            </SwiperSlide>
        )}
    </Swiper>
);

const CardsTablet = ({ services }) => (
    <div className='cards'>
        {
            services.filter((item, i) => i < 6 ? true : false).map(item => (
                <Link to='/' key={item} className='card'>
                    <div>{item}</div>
                </Link>
            ))
        }
    </div>
);

const CardsDesktop = ({ services }) => (
    <div className='cards'>
        {
            services.map(item => (
                <Link to='/' key={item} className='card'>
                    <div>{item}</div>
                </Link>
            ))
        }
    </div>
);

const OurService = () => {
    const isSmall = useMediaQuery({ query: '(min-width: 576px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktopXl = useMediaQuery({ query: '(max-width: 1399.98px)' });
    const services = ['Eyebrows & Lashes', 'Nail extensions', 'Manicure', 'Hair style', 'hollywood laser', 'Spectra Peel', 'Shellac Manicure', 'beauty pro'];

    return (
        <OurServiceContainer>
            <div className="container">

                <h2>Our Services</h2>

                {
                    isMobile
                        ? <Slider services={services} isSmall={isSmall} />
                        : (isDesktopXl) ? <CardsTablet services={services} />
                            : <CardsDesktop services={services} />
                }

                {(isDesktopXl) && <Link to='/' className="button button-sqr">Learn more</Link>}

            </div>
        </OurServiceContainer>
    );
};

export default OurService;