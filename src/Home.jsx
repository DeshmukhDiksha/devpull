import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>

    )
}

export default Home