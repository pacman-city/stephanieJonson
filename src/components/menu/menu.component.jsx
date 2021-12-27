import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

import { closeMenu } from '../../redux/menu/menu.actions';

import ButtonSignInOut from '../btn-sign-in-out/btn-sign-in-out.component';
import { ReactComponent as CloseIcon } from '../../assets/images/svg/close.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/svg/instagram.svg';
import { ReactComponent as FaceboookIcon } from '../../assets/images/svg/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/svg/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/svg/linkedin.svg';
import { MenuContainer } from './menu.styles';


// <Link to='/services'>Services & Prices</Link>


const Menu = () => {
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <MenuContainer>
            <div className="wrapper">
                {
                    !isDesktop && (
                        <div className="menu-row">
                            <button className='close-btn' onClick={() => dispatch(closeMenu())}>
                                <CloseIcon />
                            </button>

                            <ButtonSignInOut />
                        </div>
                    )
                }

                <div className="submenu">
                    <Link to='/'>Home</Link>
                    <Link to='/team'>About me</Link>
                    <Link to='/profile'>profile</Link>
                    <Link to='/sign-in'>sign-in</Link>
                    <Link to='/special'>Special Offers</Link>
                    <Link to='/availability'>My Availability</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/testimonials'>Testimonials</Link>
                    <Link to='/workplace'>Workplace</Link>
                    <Link to='/contact'>Contact</Link>
                </div>

                <div className="socials">
                    <Link to='/blog'>Blog</Link>
                    <Link to='/giftcards'>E-Gift cards</Link>

                    <div>
                        <a href="https://instagram.com">
                            <InstagramIcon />
                        </a>
                        <a href="https://facebook.com">
                            <FaceboookIcon />
                        </a>
                        <a href="https://twitter.com">
                            <TwitterIcon />
                        </a>
                        <a href="https://linkedin-in.com">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>

            </div>
            {!isDesktop && isTablet && <div className='overlay' onClick={() => dispatch(closeMenu())}></div>}
        </MenuContainer>
    );
};

export default Menu;