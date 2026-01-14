import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setUserConnections } from '../store/UserConnections';

const Connections = () => {

  const [userConnections, setUserConnection] = useState([]);
  const dispatch = useDispatch();

  const getUserConnections = async () => {
    try {
      const userConnections = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      setUserConnection(userConnections.data);
      dispatch(setUserConnections(userConnections.data));
    } catch (error) {
      console.error("Error fetching user connections:", error);
    }
  }

  useEffect(() => {
    getUserConnections();
  }, []);


  return (
    <div className='mx-5 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl text-amber-100'>Connections</h1>
      {userConnections && userConnections.length > 0 ? (
        userConnections.map((connection) => (
          <div className="card my-2 px-2 card-side bg-base-100 shadow-gray-200 shadow w-3/4 max-w-1/2" key={connection._id}>

            <figure>
              <img
                className='h-25 w-25 rounded'
                src={connection.fromUserId.avatarUrl}
                alt="Profile" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">
                {connection.fromUserId.firstName} {connection.fromUserId.lastName}
              </h1>
              <div className='flex gap-1 flex-col'>
                {connection.fromUserId.gender && <span className='text-xs'>{connection.fromUserId.gender} {connection.fromUserId.age && <span className='text-xs'>{connection.fromUserId.age}</span>}</span>}
                {connection.fromUserId.about && <p className='text-xs'>{connection.fromUserId.about}</p>}
                {connection.fromUserId.experience && <p className='text-xs'>{`Having a total experience of ${connection.fromUserId.experience} years.`}</p>}
                {connection.fromUserId.skills && connection.fromUserId.skills.length > 0 && <p className='text-xs'> {` Skilled in ${connection.fromUserId.skills}`}</p>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No connections found.</p>
      )}
    </div>
  )
}

export default Connections