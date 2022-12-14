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
                    <h3>Dream Job</h3>
                    <p> 
                        I would like to learn more about the company at large and its internal initiatives.<br /> I get a sense of this while I’m on the job by observing the brilliant people I work with and <br /> how they impact the industry across many verticals. Picking their brains, taking on the same problems they do, <br /> and finding solutions alongside them: that’s the most valuable experience for me.
                        <br /> <br/>
                        More so, we are often encouraged to step out of our department and see how other areas of the business <br /> are working.  This gives you a good sense of what you may do at later stages in your career development. <br /> This also gives you the opportunity to add value by having a fresh perspective. <br /> What I love about Google is that even small ideas matter and they can snowball into large projects. <br /> So right now, I am solidifying and expressing the few ideas I have.
                    </p>
                </div>
            </div>
            <img src="/images/google.jpg" alt="" 
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