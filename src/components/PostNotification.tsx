import React, {useContext} from 'react';
import {INotificationContext, IPostNotification} from "../INotification";
import NotificationContext from "../context/notification/notificationContext";

const PostNotification = ({id, user, avatar, timestamp, post, isRead}: IPostNotification) => {
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
