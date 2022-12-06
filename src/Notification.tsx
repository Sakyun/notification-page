import React, {useContext} from 'react';
import {INotificationContext} from "./INotification";
import {
    POST_REACTION,
    FOLLOW,
    GROUP,
    PRIVATE_MESSAGE,
    COMMENT
} from "./constants/notificationConstants";
import PostNotification from "./components/PostNotification";
import FollowNotification from "./components/FollowNotification";
import GroupNotification from "./components/GroupNotification";
import PrivateMessageNotification from "./components/PrivateMessageNotification";
import CommentNotification from "./components/CommentNotification";
import NotificationContext from "./context/notification/notificationContext";

const Notification = (props: any) => {
    const notificationContext = useContext<INotificationContext>(NotificationContext);

    const {notifications, setNotifications, markAsARead, markAllAsRead} = notificationContext;

    switch (props.type) {
        case POST_REACTION:
            return (
                <PostNotification {...props}/>
            );
        case FOLLOW:
            return (
                <FollowNotification {...props}/>
            );
        case GROUP:
            return (
                <GroupNotification {...props}/>
            );
        case PRIVATE_MESSAGE:
            return (
                <PrivateMessageNotification {...props}/>
            );
        case COMMENT:
            return (
                <CommentNotification {...props}/>
            );

        default:
            return (
                <>An error has occurred</>
            )
    }
}

export default Notification;