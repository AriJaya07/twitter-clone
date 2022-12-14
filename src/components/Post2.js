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
                    <h3>Liberty</h3>
                    <p>
                        The American Dream is the national ethos of the United States, a set of ideals including <br/> representative democracy, rights, liberty, and equality,  in which <strong>freedom is interpreted </strong > <br /> as the opportunity for individual prosperity and success, as well as upward social mobility for oneself and <br /> their children,achieved through hard work in a capitalist society with few barriers
                    </p>
                </div>
            </div>
            <img src="/images/travel1.jpg" alt="" 
            />
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