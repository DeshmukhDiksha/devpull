import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Store from './store/Store';
import { Provider } from 'react-redux';
import Feed from './components/Feed';
import Connections from './components/Connections';
import Requests from './components/Requests';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path='/' element={<Feed />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/profile' element={<Profile />}> </Route>
              <Route path='/connections' element={<Connections />}> </Route>
              <Route path='/requests' element={<Requests />}> </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
