import React from 'react';
import {IPostNotification} from "../INotification";

const PostNotification = ({user, avatar, timestamp, post, isRead}: IPostNotification) => {
    return (
        <div className={`notification__container ${!isRead ? 'unread' : ''}`}>
            <div className="avatar">
                <img src={`./images/${avatar}`} alt={user}/>
            </div>
            <div>
                <p className="message">
                    <a href="#" className="link user">
                        <strong>{user}</strong>
                    </a> reacted to your recent post {' '}
                    <a href="#" className="link post">
                        <strong>{post}</strong>
                    </a>
                    {!isRead && <span className="unread-badge"/>}
                </p>
                <small className="timestamp">{timestamp}</small>
            </div>
        </div>
    );
}

export default PostNotification;
