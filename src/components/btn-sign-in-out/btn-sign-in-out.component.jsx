import { useSelector, useDispatch } from 'react-redux';
import { ButtonContainer } from './btn-sign-in-out.styles';
import { ReactComponent as SignInIcon } from '../../assets/images/svg/sign-in.svg';
import { ReactComponent as SignOutIcon } from '../../assets/images/svg/sign-out.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const ButtonSignInOut = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);

    console.log(user);

    return (<>
        {
            user ? (
                <ButtonContainer onClick={() => dispatch(signOutStart())}>
                    <SignOutIcon />
                    <span>Sign-out</span>
                </ButtonContainer>
            ) : (
                <ButtonContainer>
                    <SignInIcon />
                    <span>Sign-in</span>
                </ButtonContainer>
            )
        }
    </>);
}

export default ButtonSignInOut;