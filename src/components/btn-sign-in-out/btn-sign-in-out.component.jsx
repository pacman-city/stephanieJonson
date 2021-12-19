import React from 'react';
import { ButtonContainer } from './btn-sign-in-out.styles';
import { ReactComponent as SignInIcon } from '../../assets/images/svg/sign-in.svg';
// import { ReactComponent as SignOutIcon } from '../../assets/images/svg/sign-out.svg';


const ButtonSignInOut = () => (
    <ButtonContainer>
        <SignInIcon />
        <span>Sign-in</span>
    </ButtonContainer>
);

export default ButtonSignInOut;