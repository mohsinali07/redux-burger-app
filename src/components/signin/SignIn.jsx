// SignIn.js
import { useState } from 'react';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, setError } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, error } = useSelector(
        (state) => state.auth
    );

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
        // Assuming you have a login action that handles authentication
        dispatch(login({ email, password }));
        } else {
        // Assuming you have a signup action that handles user registration
        dispatch(login({ email, password }));
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        dispatch(setError(null));
    };

    // Redirect if the user is authenticated
    if (isAuthenticated) {
        navigate('/');
    }

    return (
        <div className='container login-container'>
            <div className='login-card'>
                <h3>{isLogin ? 'Login' : 'Signup'}</h3>
                {error && <p className='text-danger'>{error}</p>}
                <form onSubmit={handleSubmit} className='form-control mb-3'>
                <div className='mb-3'>
                    <label className='form-text'>Email</label>
                    <input
                    className='form-control'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-text'>Password:</label>
                    <input
                    className='form-control'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </div>
                <button className='btn btn-success btn-sm px-4' type='submit'>
                    {isLogin ? 'Login' : 'Signup'}
                </button>
                </form>
                <span onClick={toggleForm}>
                {isLogin ? (
                    <span>
                    Dont have an account: <span className='fw-bold'>Signup</span>
                    </span>
                ) : (
                    <span>
                    Already have an account: <span className='fw-bold'>Login</span>
                    </span>
                )}
                </span>
            </div>
        </div>
    );
};

export default SignIn;
