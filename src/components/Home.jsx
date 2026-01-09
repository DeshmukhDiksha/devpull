import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import "../App.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { BASE_URL } from '../utils/constants'
import { setUser } from '../store/UserSlice'

const Home = () => {
    const user = useSelector((state) => state.user) || null;

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const fetchUser = async () => {
        console.log('Fetching user data...');
        try {
            if (user) return;
            const resp = await axios.get(`${BASE_URL}/profile/watch`, { withCredentials: true });
            if (resp.data) {
                dispatch(setUser(resp.data));
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate('/login');
            } else {
                console.error('Error fetching user data:', error);
            }
        }
    }


    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <NavBar />
            <div className='main-container'>
                <Outlet />
            </div>
            <Footer />
        </>

    )
}

export default Home