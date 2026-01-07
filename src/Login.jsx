
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('pratikshaJ@gmail.com');
    const [password, setPassword] = useState('pratikha@123');

    const onUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = async () => {
        console.log('Logging in with', { username, password });
        try {
            const loginResp = await axios.post('http://localhost:3000/login', {
                emailId: username,
                password: password,
            }, {
                withCredentials: true,
            });
            console.log(loginResp);
        } catch (error) {
            console.error('Login failed:', error);
            this.setPassword('');
            this.setUsername('');
        }
    }

    return (
        <div className='flex justify-center align-middle h-full'>
            <div className="h-full flex justify-center items-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label htmlFor="username" className="label">Email</label>
                    <input type="email" id="username"  className="input" placeholder="Email" onChange={onUserNameChange} />

                    <label id="password" className="label">Password</label>
                    <input type="password" for="password" htmlFor="password" className="input" placeholder="Password" onChange={onPasswordChange} />

                    <button className="btn btn-neutral mt-4" onClick={onLogin}>Login</button>
                </fieldset>
            </div>
        </div>
    )
}

export default Login