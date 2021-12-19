import React from 'react';

// import { useMediaQuery } from 'react-responsive'

import Preview from './components/preview/preview.component';
import About from './components/about/about.component';
import Experience from './components/experience/experience.component';
import OurService from './components/out-service/our-service.component';
import Gallery from './components/gallery/gallery.component';
import Testimonials from './components/testimonials/testimonials.component';
import Pricing from './components/pricing/pricing-component';
import Team from './components/team/team.component';
import Blog from './components/blog/blog.component';
// import SideBarRight from '../../components/side-bar-right/side-bar-right.component';


const Home = () => {
    // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <main>
            <Preview />
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
        // {isTablet && <SideBarRight />}