import React from 'react';
import {
    ICommentNotification,
    IGroupNotification,
    INotification,
    IPostNotification,
    IPrivateMessageNotification, TNotification
} from "./INotification";
import {
    POST_REACTION,
    FOLLOW,
    GROUP,
    PRIVATE_MESSAGE,
    COMMENT
} from "./notificationTypes";
import PostNotification from "./Components/PostNotification";
import FollowNotification from "./Components/FollowNotification";
import GroupNotification from "./Components/GroupNotification";
import PrivateMessageNotification from "./Components/PrivateMessageNotification";
import CommentNotification from "./Components/CommentNotification";

const Notification = (props: any) => {
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