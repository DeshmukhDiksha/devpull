import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/login' element={<Login />}></Route>
            <Route path='/profile' element={<Profile />}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
