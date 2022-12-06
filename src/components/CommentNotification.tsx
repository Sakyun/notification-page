import React, {useContext} from 'react';
import {ICommentNotification, INotificationContext} from "../INotification";
import NotificationContext from "../context/notification/notificationContext";

const CommentNotification = ({id, user, avatar, isRead, timestamp, target}: ICommentNotification) => {
    const notificationContext = useContext<INotificationContext>(NotificationContext);
    const {markAsRead} = notificationContext;

    return (
        <div className={`notification__container comment ${!isRead ? 'unread' : ''}`} onClick={() => markAsRead(id)}>
            <div className="avatar">
                <img src={`./images/${avatar}`} alt={user}/>
            </div>
            <div>
                <div>
                    <p className="message">
                        <a href="#" className="link user">
                            <strong>{user}</strong>
                        </a> commented on your picture
                        {!isRead && <span className="unread-badge"/>}
                    </p>

                </div>
                <small className="timestamp">{timestamp}</small>
            </div>
            <a href="#" className="target-container">
                <img src={`./images/${target}`} alt="Commented picture"/>
            </a>
        </div>
    );
}

export default CommentNotification;
