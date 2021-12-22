import React from 'react';
import Preview from './components/preview/preview.component';
import Experience from './components/experinece/experience.component';
import Slider from './components/slider/slider.component';


const Profile = () => (
    <div className="profile">
        <Preview />
        <Experience />
        <Slider />
    </div>
);

export default Profile;