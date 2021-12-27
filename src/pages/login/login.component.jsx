import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { LogInContainer } from './login.styles';


const Login = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1199.98px)' });
    const [isSignInView, changeView] = useState(true);

    return (
        <LogInContainer view={isSignInView}>
            <div className="container">

                <SignIn isTablet={isTablet} isSignInView={isSignInView} changeView={changeView} />
                <SignUp isTablet={isTablet} isSignInView={isSignInView} changeView={changeView} />

            </div>
        </LogInContainer>
    );
}

export default Login;