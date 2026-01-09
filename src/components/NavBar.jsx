import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { deleteUser } from '../store/UserSlice';


function NavBar() {
  const user = useSelector((state) => state.user) || null;
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(deleteUser());
      return navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <div className="navbar bg-gray-500 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Dev Pull</Link>
      </div>
      <div className="flex gap-2">
        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
        {user !== null && <div className="dropdown dropdown-end mx-5 flex items-center gap-2">
          <div>{user.firstName + ' ' + user.lastName}</div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/settings">Settings</Link></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
        }
      </div>
    </div>
  );
}

export default NavBar;