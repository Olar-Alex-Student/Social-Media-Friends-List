import { FRIENDS_API } from '../constants/friend.cont';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const getFriendsAPI = () => {
  const [friends, setFirends] = useState([]);

  useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(FRIENDS_API);
          setFirends(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

    return friends;
}