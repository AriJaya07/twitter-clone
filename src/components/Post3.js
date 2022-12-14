import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar 
}) {
    return <div className="post">
        <div className="post__avatar">
            <Avatar src="images/Ari1.jpg" />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Ari Jaya{" "}
                        <span className="post__headerSpecial" >
                            <VerifiedUserIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <h3>Google</h3>
                    <p>
                        Google has many special features to help you find exactly what you're looking for. <br /> Google also emulates this structural advantage via its super-sophisticated AI. The more people use Google
                    </p>
                </div>
            </div>
            <img src="/images/giphy.gif" alt=""/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>;
}

export default Post;