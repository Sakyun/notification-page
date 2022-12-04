import React from 'react';
import {IGroupNotification} from "../INotification";

const GroupNotification = ({user, avatar, timestamp, isRead, group, event}: IGroupNotification) => {
    return (
        <div className={`notification__container ${!isRead ? 'unread' : ''}`}>
            <div className="avatar">
                <img src={`./images/${avatar}`} alt={user}/>
            </div>
            <div>
                <p className="message">
                    <a href="#" className="link user">
                        <strong>{user}</strong>
                    </a> {event === "joined" ? "has joined" : "left"} your group {' '}
                    <a href="#" className="link group">
                        <strong>{group}</strong>
                    </a>
                    {!isRead && <span className="unread-badge"/>}
                </p>
                <small className="timestamp">{timestamp}</small>
            </div>
        </div>
    );
}

export default GroupNotification;
