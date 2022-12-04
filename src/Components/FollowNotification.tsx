import React from 'react';
import {IFollowNotification} from "../INotification";

const FollowNotification = ({user, avatar, timestamp, isRead}: IFollowNotification) => {
    return (
        <div className={`notification__container ${!isRead ? 'unread' : ''}`}>
            <div className="avatar">
                <img src={`./images/${avatar}`} alt={user}/>
            </div>
            <div>
                <p className="message">
                    <a href="#" className="link user">
                        <strong>{user}</strong>
                    </a> followed you
                    {!isRead && <span className="unread-badge"/>}
                </p>
                <small className="timestamp">{timestamp}</small>
            </div>
        </div>
    );
}

export default FollowNotification;
