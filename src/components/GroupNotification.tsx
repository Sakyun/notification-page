import React, {useContext} from 'react';
import {IGroupNotification, INotificationContext} from "../INotification";
import NotificationContext from "../context/notification/notificationContext";

const GroupNotification = ({id, user, avatar, timestamp, isRead, group, event}: IGroupNotification) => {
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
