import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';


const SignUp = ({ isTablet, isSignInView, changeView }) => {
    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) return alert("passwords does not mutch");
        dispatch(signUpStart({ displayName, email, password }));
    }

    const handleChange = ({ target: { name, value } }) => setUserCredentials({ ...userCredentials, [name]: value });

    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <h3>Sign up with your email and password</h3>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='displayName'
                required />
            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='email'
                required />
            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='password'
                required />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='confirmPassword'
                required />

            <div className='buttons'>
                <button className='button' type='submit'>SIGN UP</button>
            </div>

            {isTablet && <button type='button' onClick={() => changeView(!isSignInView)}>I already have an account</button>}

        </form>
    );
};

export default SignUp;