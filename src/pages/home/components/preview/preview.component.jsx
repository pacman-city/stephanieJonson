import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { PreviewContainer } from './preview.styles';
import img from '../../../../assets/images/slide1.jpg';
import img1 from '../../../../assets/images/slide2.jpg';
import img2 from '../../../../assets/images/slide3.jpg';


const data = [img, img1, img2];

const data1 = [
    { title: 'Eyebrows & Lashes', subtitle: 'Escape from everyday busy reality and treat your skin' },
    { title: 'NAIL STYLE', subtitle: 'Escape from everyday busy reality and treat your skin' },
    { title: 'HAIR STYLE', subtitle: 'Escape from everyday busy reality and treat your skin' }
];

const Preview = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <PreviewContainer>
            <div className="wrapper">

                <div className='backdrop-slider'>
                    <Swiper
                        effect={"fade"}
                        speed={1500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        onSlideChangeTransitionStart={(swiper) => { setSlideIndex(swiper.realIndex) }}
                    >
                        {data.map((url, i) =>
                            <SwiperSlide key={i} style={{ 'backgroundImage': `url(${url})` }}></SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <div className="container">

                    <div className="content">
                        <div className="content-title" key={slideIndex}>
                            <h1>{data1[slideIndex].title}</h1>
                            <p>{data1[slideIndex].subtitle}</p>
                        </div>
                        <button className="button-sqr">BOOK ONLINE</button>
                    </div>

                    <div className="dots"></div>
                </div>

            </div>
        </PreviewContainer>
    );
};

export default Preview;