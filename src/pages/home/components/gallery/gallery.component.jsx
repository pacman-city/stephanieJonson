import { useMediaQuery } from 'react-responsive'

import { GalleryContainer } from './gallery.styles';

import img1 from '../../../../assets/images/card1.jpg';
import img2 from '../../../../assets/images/card2.jpg';
import img3 from '../../../../assets/images/card3.jpg';
import img4 from '../../../../assets/images/card4.jpg';


const CardsMobile = () => (
    <div className="cards">
        <div className="col">
            <img src={img1} alt="beauty style" />
            <img src={img2} alt="beauty style" />
            <img src={img2} alt="beauty style" />
        </div>
        <div className="col">
            <img src={img3} alt="beauty style" />
            <img src={img3} alt="beauty style" />
            <img src={img4} alt="beauty style" />
        </div>
    </div>
);

const CardsLarge = () => (
    <div className="cards">
        <div className="col">
            <img src={img1} alt="beauty style" />
        </div>

        <div className="col">
            <img src={img3} alt="beauty style" />
            <img src={img3} alt="beauty style" />
        </div>

        <div className="col">
            <img src={img2} alt="beauty style" />
            <img src={img2} alt="beauty style" />
        </div>

        <div className="col">
            <img src={img4} alt="beauty style" />
            <img src={img4} alt="beauty style" />
        </div>
    </div>
);

const Gallery = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <GalleryContainer>
            <div className="container">
                <h2>Gallery</h2>
                {
                    isMobile ? <CardsMobile /> : <CardsLarge />
                }
                <button className="button-sqr">View all gallery</button>
            </div>
        </GalleryContainer>
    );
}

export default Gallery;