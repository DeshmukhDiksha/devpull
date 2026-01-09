import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = () => {
    const user = useSelector((state) => state.user);
    console.log('User in UserCard:', user);
    return  user && (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="height-48">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="profile" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName + ' ' + user.lastName}</h2>
                <p>{user.about}</p>
                <div className="card-actions justify-end my-5">
                    <button className="btn btn-outline soft  border-red-500">Reject</button>
                    <button className="btn btn-outline soft border-green-500">Show Interest</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard