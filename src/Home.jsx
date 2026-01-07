import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import "./App.css"

const Home = () => {
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