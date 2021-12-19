import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer';

import { openMenu } from '../../redux/menu/menu.actions';

import ButtonSignInOut from '../btn-sign-in-out/btn-sign-in-out.component';

import { ReactComponent as HamburgerIcon } from '../../assets/images/svg/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/cart.svg';
import logoImage from '../../assets/images/logo.png';
import { HeaderContainer } from './header.styles';

import Menu from '../../components/menu/menu.component';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { selectMenuisOpen } from '../../redux/menu/menu.selectors';


const Header = () => {
    const dispatch = useDispatch();
    const menuIsOpen = useSelector(selectMenuisOpen);
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const [target, isFixed] = useInView();

    !isDesktop && menuIsOpen ? disableBodyScroll(document) : enableBodyScroll(document);

    return (
        <HeaderContainer>
            {isDesktop && <div className="target" ref={target}></div>}

            {isDesktop && (
                <div className="wrapper">
                    <div className={`bars ${isFixed ? '' : 'sticky'}`}>
                        <div className="side-bar-left"></div>
                        <div className={`side-bar-right ${menuIsOpen ? 'open' : ''}`}>
                            <div className="side-bar-right-image"></div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`header-wrapper ${!isFixed ? 'sticky' : ''}`}>
                <div className={`header-container `}>
                    {(menuIsOpen || (isDesktop && isFixed)) && < Menu />}

                    <div className="header-content">
                        {
                            isDesktop && isFixed && <img src={logoImage} alt="logo" className='header-logo-image' />
                        }

                        {
                            (!isDesktop || !isFixed) &&
                            <button className="menu-btn" onClick={() => dispatch(openMenu())}>
                                <HamburgerIcon />
                            </button>
                        }

                        <div className='header-col'>
                            {
                                (isFixed || menuIsOpen || !isDesktop) && (
                                    <button className="cart">
                                        <CartIcon />
                                        <span>1444$</span>
                                    </button>
                                )
                            }
                            {(isFixed || menuIsOpen) && isDesktop && <ButtonSignInOut />}
                        </div>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;