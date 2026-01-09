import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setFeed } from '../store/FeedSlice'
import UserCard from './UserCard'

function Feed() {
  const [feedData, setFeedData] = useState([]);
  const dispatch = useDispatch();


  const getFeedData = async () => {
    try {
      const feedData = await axios.get(`${BASE_URL}/user/feed`, { withCredentials: true });
      dispatch(setFeed(feedData.data));
      setFeedData(feedData.data);
    } catch (error) {
      console.error('Error fetching feed data:', error);
    }
  }

  useEffect(() => {
    getFeedData();
  }, []);

  return feedData &&  (
    <div className=' flex align-middle justify-center mt-10 mb-10'>
      <UserCard />
    </div>
  )
}

export default Feed