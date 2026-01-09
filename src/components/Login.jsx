
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/UserSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [username, setUsername] = useState('pratikshaJ@gmail.com');
    const [password, setPassword] = useState('pratikha@123');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = async () => {
        try {
            const loginResp = await axios.post(`${BASE_URL}/login`, {
                emailId: username,
                password: password,
            }, {
                withCredentials: true,
            });
            dispatch(setUser(loginResp.data.user));
            if(errorMessage) {
                setErrorMessage('');
            }
            return navigate('/');
        } catch (error) {
            let errorMsg = 'Login failed';
            if (error.response) {
                errorMsg = 'Invalid username or password';
            } else {
                alert('Login failed: Network or server error');
            }
            this.setErrorMessage(errorMsg);
            this.setPassword('');
            this.setUsername('');
        }
    }

    return (
        <div className='flex justify-center align-middle h-full'>
            <div className="h-full flex justify-center items-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-1xl text-white font-bold">Login</legend>

                    <label htmlFor="username" className="label">Email</label>
                    <input type="email" id="username"  className="input" placeholder="Email" onChange={onUserNameChange} value={username}/>

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" className="input" placeholder="Password" onChange={onPasswordChange} value={password}/>
                    
                    <p className='text-red-500 font-medium'> {errorMessage}</p>
                    <button className="btn btn-neutral mt-4" onClick={onLogin}>Sign In </button>
                </fieldset>
            </div>
        </div>
    )
}

export default Login