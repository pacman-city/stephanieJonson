import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

import { openMenu } from '../../redux/menu/menu.actions';

import ButtonSignInOut from '../btn-sign-in-out/btn-sign-in-out.component';
import { ReactComponent as HamburgerIcon } from '../../assets/images/svg/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/cart.svg';
import { HeaderContainer } from './header.styles';


const Header = () => {
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <HeaderContainer>
            <div className="wrapper">

                <button className="menu-btn" onClick={() => dispatch(openMenu())}>
                    <HamburgerIcon />
                </button>

                <div className="logo">Stephanie Jonson</div>


                <div className='col'>
                    <button className="cart">
                        <CartIcon />
                        <span>1444$</span>
                    </button>

                    {isDesktop && <ButtonSignInOut />}
                </div>

            </div>
        </HeaderContainer>
    )
};

export default Header;