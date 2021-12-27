import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer';

import FixedHeader from '../../components/fixed-header/fixed-header.component';
import Preview from './components/preview/preview.component';
import About from './components/about/about.component';
import Experience from './components/experience/experience.component';
import OurService from './components/out-service/our-service.component';
import Gallery from './components/gallery/gallery.component';
import Testimonials from './components/testimonials/testimonials.component';
import Pricing from './components/pricing/pricing-component';
import Team from './components/team/team.component';
import Blog from './components/blog/blog.component';


const Home = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const [target, isFixed] = useInView();

    return (
        <main>
            {!isFixed && isDesktop && <FixedHeader />}
            <Preview />
            <div ref={target}></div>
            <About />
            <Experience />
            <OurService />
            <Gallery />
            <Testimonials />
            <Pricing />
            <Team />
            <Blog />
        </main>
    );
}

export default Home;