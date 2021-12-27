import { useMediaQuery } from 'react-responsive';
import Menu from '../menu/menu.component';
import { BarLeftContainer } from './bar-left.styles';


const BarLeft = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <BarLeftContainer>
            {isDesktop && <Menu />}
        </BarLeftContainer>
    );
}

export default BarLeft;