import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import { PreviewContainer } from './priview.styles';
import Avatar from '../../../../components/avatar/avatar.component'
import img from '../../../../assets/images/image8.jpg';


const data = {
    languages: ['English', 'Armenian', 'Russian'],
    expirience: ['Nails - 10 years', 'Hair removal - 8 years', 'Eyelashes - 8 years']
}

const Preview = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <PreviewContainer>
            <div className='container'>
                <div className="breadcrumbs">HOME / OUR TEAM</div>

                <div className="wrapper">

                    <div>
                        <h1>Welcome  to</h1>
                        <h2>MY PROFILE</h2>

                        {!isPhone && (<p className='about'>
                            <span className='space'>This nair salon has been recognized as one of Tulsa’s best since 2012. It has an experienced color team and uses Wella Professionals hair color.</span>
                            <Link to='/' className='link-blue'>View more</Link>
                        </p>)
                        }
                        {!isPhone && <div className='dots'></div>}
                    </div>

                    <div className="card">
                        <Avatar url={img} size={isDesktop ? 'xl' : 'lg'} />
                        <h3>Joshua Weston</h3>
                        <b>Nails & Hairstylist</b>
                        <button className='button-sqr'>My availability</button>
                    </div>

                    <div className="row">
                        <div>
                            <h4>Expirience in:</h4>
                            {
                                data.expirience.map((item, i) => <span key={i}>{item}</span>)
                            }
                        </div>


                        <div>
                            <h4>Languages I speak</h4>
                            {
                                data.languages.map((item, i) => <span key={i}>{item}</span>)
                            }
                        </div>

                        <address>
                            <h4>Accepts: in a beauty salon</h4>
                            <span className='space'>5747 Bryant St. Burnaby, BC V5H, 1X4, USA</span>
                            <button className='link-blue'>Show on map</button>
                        </address>

                        <address>
                            <h4>Accepts: at the master’s home</h4>
                            <span className='space'>5747 Bryant St. Burnaby, BC V5H, 1X4, USA</span>
                            <button className='link-blue'>Show on map</button>
                        </address>
                    </div>

                    {isPhone && <div className='dots'></div>}
                    {isPhone && (<p>
                        <span className='space'>This nair salon has been recognized as one of Tulsa’s best since 2012. It has an experienced color team and uses Wella Professionals hair color.</span>
                        <Link to='/' className='link-blue'>View more</Link>
                    </p>)
                    }

                </div>
            </div>
        </PreviewContainer>
    );
}

export default Preview;