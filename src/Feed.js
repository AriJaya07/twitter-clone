import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './components/Post';
import Post2 from './components/Post2';
import Post3 from './components/Post3';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            <Post2 />
            <Post3 />
            {/* Post */}
        </div>
    )
}

export default Feed;