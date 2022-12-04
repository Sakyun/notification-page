import React from 'react';
import {IPrivateMessageNotification} from "../INotification";

const PrivateMessageNotification = ({user, avatar, timestamp, isRead, message}: IPrivateMessageNotification) => {
    return (
        <div className={`notification__container ${!isRead ? 'unread' : ''}`}>
            <div className="avatar">
                <img src={`./images/${avatar}`} alt={user}/>
            </div>
            <div>
                <p className="message">
                    <a href="#" className="link user">
                        <strong>{user}</strong>
                    </a> sent you a private message
                    {!isRead && <span className="unread-badge"/>}
                </p>
                <small className="timestamp">{timestamp}</small>
                <div className="card">
                    <a href="#" className="link">{message}</a>
                </div>
            </div>
        </div>
    );
}

export default PrivateMessageNotification;
