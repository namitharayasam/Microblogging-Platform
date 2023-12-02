import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import makeUnathenticatedPostRequest from '../utils/serverHelper.js'
import './home.css'
import TweetComponent from '../components/tweetComponent.js';

export function Home() {

  const [cookie, setCookie] = useCookies(['token'])
  const [tweets,setTweets] = useState([])
  const [UserNames, setUsernames] = useState([])

  useEffect(() => {
        const fetchTweets = async () => {
          const body = {userId : cookie.token}
          const response = await makeUnathenticatedPostRequest('tweets/get/allTweets',body);

          if(response && !response.err){
              setTweets(response);
          }
      }
      fetchTweets();
  },[cookie])


  useEffect(() => {
    const fetchName = async () => {
      const userNames = [];
      if(tweets.length > 0){
        for(let x of tweets){
          console.log(x)
          const body = {userId : x.userName}
          const response = await makeUnathenticatedPostRequest('tweets/get/userName', body);

          if(response && !response.err){
            userNames.push(response.userName);
          }
        }
       setUsernames(userNames);
      }
    }
    fetchName();
  },[tweets])
  
  return (
    <div className="homepage">
      <div className="left-sidebar">
        <ul>
          <li>Home</li>
          <li>Discover</li>
          <li>Profile</li>
        </ul>
      </div>

      
      <div className="main-content">
        {tweets.map((item,index) => {
            return (<TweetComponent
              key = {index}
              userName = {UserNames[index]}
              tweet = {item.tweet}
              date = {item.time}
              />)
        })}
      </div>
    </div>
  );
}

export default Home;