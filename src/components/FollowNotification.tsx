import React, {useContext} from 'react';
import {IFollowNotification, INotificationContext} from "../INotification";
import NotificationContext from "../context/notification/notificationContext";

const FollowNotification = ({id, user, avatar, timestamp, isRead}: IFollowNotification) => {
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
                    </a> followed you
                    {!isRead && <span className="unread-badge"/>}
                </p>
                <small className="timestamp">{timestamp}</small>
            </div>
        </div>
    );
}

export default FollowNotification;
