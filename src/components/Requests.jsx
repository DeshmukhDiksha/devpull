import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { addRequests } from '../store/RequestsSlice';
import { BASE_URL } from '../utils/constants';
import Toast from './common/Toast';

const Requests = () => {
    const [connectionRequests, setConnectionRequests] = useState([]);
    const [toast, setToast] = useState(null);

    const dispatch = useDispatch();

    const fetchConnectionRequests = async () => {
        try {
            const requests = await axios.get(`${BASE_URL}/user/requests/received`, {
                withCredentials: true,
            });
            console.log("ConnectionRequests", requests);
            setConnectionRequests(requests.data);
            dispatch(addRequests(requests.data));
        } catch (error) {
            console.error("Error while fetching connection requests", error);
        }
    }

    const handleRequest = async (status, req) => {
        try {
            const reqStatus = await axios.post(`${BASE_URL}/request/review/${status}/${req._id}`, {},  {
                withCredentials: true,
            });
            setToast({ type: 'info', message: reqStatus.data.message });
        } catch (error) {
            console.error("Error while handling request", error);
        }
    }


    useEffect(() => {
        fetchConnectionRequests();
        if(toast){
            const timer = setTimeout(() => {
                setToast(null);
                clearTimeout(timer)
            }, 7000);
        }
    }, [toast]);


    return (
        <div className='mx-5 flex flex-col items-center justify-center '>
            <h1 className='font-bold text-2xl '>Requests</h1>
            {connectionRequests && connectionRequests.length > 0 ? (
                connectionRequests.map((request) => (
                    <div className="card my-2 px-2 card-side bg-base-100 shadow-gray-200 shadow w-3/4 max-w-1/2" key={request._id}>
                        <figure >
                            <img
                                className='h-25 w-25 object-cover'
                                src={request.fromUserId.avatarUrl}
                                alt="Profile" />
                        </figure>
                        <div className="card-body">
                            <h1 className="card-title">{`${request.fromUserId.firstName} ${request.fromUserId.lastName} `}</h1>
                            <div className='flex gap-1 flex-col'>
                                {request.fromUserId.gender && <span className='text-xs'>{request.fromUserId.gender} {request.fromUserId.age && <span className='text-xs'>{request.fromUserId.age}</span>}</span>}
                                {request.fromUserId.about && <span className='text-xs'>{request.fromUserId.about}</span>}
                                {request.fromUserId.experience && <span className='text-xs'>{`Having a total experience of ${request.fromUserId.experience} years.`}</span>}
                                {request.fromUserId.skills && request.fromUserId.skills.length > 0 && <span className='text-xs'> {` Skilled in ${request.fromUserId.skills}`}</span>}
                            </div>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => { handleRequest('accepted', request) }}>Accept</button>
                                <button className="btn btn-secondary" onClick={() => { handleRequest('rejected', request) }}>Reject</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No connection request present!</p>
            )}
            {toast && <Toast message={toast.message} type={toast.type} />}
        </div>
    )
}

export default Requests