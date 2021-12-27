import { FixedHeaderContainer } from './fixed-header.sytles';
import { Link } from 'react-router-dom';



const FixedHeader = () => (
    <FixedHeaderContainer>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services & Prices</Link>
            <Link to='/special'>Special Offers</Link>
            <Link to='/availability'>My Availability</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </FixedHeaderContainer>
);

export default FixedHeader;