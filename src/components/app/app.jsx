import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { selectMenuisOpen } from '../../redux/menu/menu.selectors';

import Header from '../header/header.component';
import BarRight from '../bar-right/bar-right.component';
import BarLeft from '../bar-left/bar-left.component';
import Menu from '../menu/menu.component';

import Home from '../../pages/home/home.component';
import Team from '../../pages/team/team.component';
import Profile from '../../pages/profile/profile-page-component';
import Login from '../../pages/login/login.component';
import { AppContainer } from './app.styles';

import SwiperCore, { Pagination, Navigation, A11y, EffectFade, EffectCreative, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';
import 'swiper/scss/a11y';


SwiperCore.use([Pagination, Navigation, A11y, EffectFade, EffectCreative, Autoplay]);

const App = () => {
  const menuIsOpen = useSelector(selectMenuisOpen);
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  !isDesktop && menuIsOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <AppContainer>

      <Header />

      {!isDesktop && menuIsOpen && <Menu />}
      {isDesktop && <BarLeft />}
      {isDesktop && <BarRight />}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
      </Routes>

    </AppContainer>
  );
};

export default App;