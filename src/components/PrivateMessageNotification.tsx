import React, {useContext} from 'react';
import {INotificationContext, IPrivateMessageNotification} from "../INotification";
import NotificationContext from "../context/notification/notificationContext";

const PrivateMessageNotification = ({id, user, avatar, timestamp, isRead, message}: IPrivateMessageNotification) => {
    const notificationContext = useContext<INotificationContext>(NotificationContext);
    const {markAsRead} = notificationContext;

    return (
        <div className={`notification__container ${!isRead ? 'unread' : ''}`} onClick={() => markAsRead(id)}>
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
