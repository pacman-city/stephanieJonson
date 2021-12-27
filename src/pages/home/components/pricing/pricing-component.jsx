import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import { PricingContainer } from './pricing.styles';
import img from '../../../../assets/images/image6.jpg';
import { ReactComponent as ArrowRight } from '../../../../assets/images/svg/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/images/svg/arrow-left.svg';


const data = ['Hairstyle', 'Nails', 'Makeup', 'Makeup1', 'Makeup2', 'Makeup3', 'Makeup4', 'Makeup5', 'Makeup6'];
const data1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Card = () => (
    <div className='card'>
        <img src={img} alt="procedure" />
        <div className='card-content'>
            <div className='procedure-name'>
                Procedure name
                <span>30-40 minute session</span>
            </div>
            <div className='price'>40$</div>
        </div>
    </div>
);

const Slider = ({ isMobile, isDesktop }) => (
    <Swiper
        spaceBetween={10}
        slidesPerView={isMobile ? 2.2 : isDesktop ? 5 : 4}
        direction={'horizontal'}
        speed={300}
        loop={true}
        centeredSlides={true}
        navigation={isDesktop ? { prevEl: '.special-pricing-prev', nextEl: ".special-pricing-next" } : false}
    >
        {data.map(item =>
            <SwiperSlide key={item}>
                <div>{item}</div>
            </SwiperSlide>
        )}
    </Swiper>
);

const Pricing = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 992px)' });

    return (
        <PricingContainer>
            <div className='wrapper'>
                <h2>Special pricing</h2>


                <div className="slider">
                    <Slider isMobile={isMobile} isDesktop={isDesktop} />

                    {isDesktop && <div className='special-pricing-prev'><ArrowRight /></div>}
                    {isDesktop && <div className='special-pricing-next'><ArrowLeft /></div>}

                </div>

                <div className='cards'>
                    {
                        data1.filter((item, i) => i < (isTablet ? 8 : 4) && true).map(item => <Card key={item} />)
                    }
                </div>

                <Link to='/' className="button-sqr">Our menu</Link>

            </div>
        </PricingContainer>
    );
};

export default Pricing;

