import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ isTablet, isSignInView, changeView }) => {
    const dispatch = useDispatch();

    const [userCredentials, setCredentials] = useState({ password: '', email: '' });
    const { email, password } = userCredentials;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleChange = ({ target: { name, value } }) => { setCredentials({ ...userCredentials, [name]: value }) }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign in with email and password</h3>
            <FormInput
                name='email'
                type="email"
                value={email}
                onChange={handleChange}
                required
                label="email" />
            <FormInput
                name='password'
                type="password"
                value={password}
                onChange={handleChange}
                required
                label="password" />

            <div className='buttons'>
                <button className='button' type='submit'>Sign In</button>
                <button className='button' type='button' onClick={() => dispatch(googleSignInStart())}>Sign in with google</button>
            </div>

            {isTablet && <button type='button' onClick={() => changeView(!isSignInView)}>I don't have an account</button>}
        </form>
    );
}

export default SignIn;