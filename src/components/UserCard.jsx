import { useSelector } from 'react-redux'

import "../css/UserCard.css";


const UserCard = ({isPreview}) => {
    const user = useSelector((state) => state.user);
    console.log('User in UserCard:', user);
    return user && (
        <div className={`card bg-base-300 w-96 shadow-sm ${isPreview ? 'animated-profile' : ''}`}>
            <figure className="height-48">
                <img
                    src={user.avatarUrl}
                    alt="profile" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-100">{user.firstName + ' ' + user.lastName}</h2>
                <p className='text-gray-300'>{user.about}</p>
                <div className="card-actions justify-end my-5">
                    <button className="btn btn-outline soft  border-gray-500 text-red-200">Reject</button>
                    <button className="btn btn-outline soft border-gray-500 text-green-200">Show Interest</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard