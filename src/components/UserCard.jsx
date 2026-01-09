import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = () => {
    const user = useSelector((state) => state.user);
    console.log('User in UserCard:', user);
    return user && (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="height-48">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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