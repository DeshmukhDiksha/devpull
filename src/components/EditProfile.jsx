import axios from 'axios';
import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';
import Toast from './common/Toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/UserSlice';

import "../css/EditProfile.css";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [about, setAbout] = useState(user?.about || '');
    const [gender, setGender] = useState(user?.gender || '');
    const [profilePic, setProfilePic] = useState(user?.profilePic || '');
    const [experience, setExperience] = useState(user?.experience || '');
    const [skills, setSkills] = useState(user?.skills || []);
    const [previewMode, setPreviewMode] = useState(false);
    const [toast, setToast] = useState(null);

    const dispatch = useDispatch();

    const onSaveProfile = async () => {
        try {
            const resp = await axios.patch(`${BASE_URL}/profile/edit`, { firstName, lastName, about, gender, avatarUrl: profilePic }, {
                withCredentials: true,
            });
            setToast({ message: 'Profile updated successfully', type: 'success' });
            dispatch(setUser(resp.data.user));
        } catch (error) {
            setToast({ message: 'Failed to update profile', type: 'error' });
        }
    }

    const onPreview = () => {
        setPreviewMode(!previewMode);
    }

    useEffect(() => {
        setFirstName(user?.firstName || '');
        setLastName(user?.lastName || '');
        setAbout(user?.about || '');
        setGender(user?.gender || '');
        setProfilePic(user?.avatarUrl || '');
        setExperience(user?.experience || '');
        setSkills(user?.skills || []);
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null);
                clearTimeout(timer)
            }, 2000);
        }
    }, [user, toast]);


    return (
        <>
            <div className={`flex align-middle justify-center gap-10 h-full ${previewMode ? 'edit-profile-animation' : ''}`}>
                <div className='flex justify-center align-middle h-full'>
                    <div className="h-full flex justify-center items-center">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            {console.log('rendering edit profile', firstName, lastName, about, gender)}
                            
                            <label htmlFor="firstName" className="label">First Name</label>
                            <input type="text" id="firstName" className="input" placeholder="First Name" onChange={($event) => { setFirstName($event.target.value) }} value={firstName} />
                           
                            <label htmlFor="lastName" className="label">Last Name</label>
                            <input type="text" id="lastName" className="input" placeholder="Last Name" onChange={($event) => { setLastName($event.target.value) }} value={lastName} />
                            
                            <label htmlFor="profilePic" className="label">Profile Picture URL</label>
                            <input type="text" id="profilePic" className="input" placeholder="Profile Picture URL" onChange={($event) => { setProfilePic($event.target.value) }} value={profilePic} />

                            <label htmlFor="gender" className="label">Gender</label>
                            <select className="select" onChange={($event) => { setGender($event.target.value) }} value={gender || "Select a gender"}>
                                <option disabled={true}>Select a gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>

                            <label htmlFor="about" className="label">About</label>
                            <textarea id="about" className="textarea" placeholder="About" onChange={($event) => { setAbout($event.target.value) }} value={about} />

                            <label htmlFor="experience" className="label">Experience</label>
                            <input type="text" id="experience" className="input" placeholder="Experience" onChange={($event) => { setExperience($event.target.value) }} value={experience} />

                            <label htmlFor="skills" className="label">Skills </label>
                            <input type="text" id="skills" className="input" placeholder="Skills" onChange={($event) => { setSkills($event.target.value) }} value={skills} />

                            <div className='flex align-middle justify-end gap-4'>
                                <button className="btn btn-outline border-amber-200 mt-4" onClick={onSaveProfile}>Save Profile </button>
                                <button className="btn btn-outline border-amber-200 mt-4" onClick={onPreview}>Preview </button>
                            </div>
                        </fieldset>
                    </div>
                </div>
                {previewMode && <UserCard isPreview='true' user={{ firstName, lastName, about, gender }} />}
            </div>
            {toast && <Toast message={toast.message} type={toast.type} />}
        </>
    )
}

export default EditProfile