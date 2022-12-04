export interface INotification {
    id: number;
    user: string;
    avatar: string;
    type: string;
    isRead: boolean;
    timestamp: string;
}

export interface IFollowNotification extends INotification {
}

export interface IPostNotification extends INotification {
    post: string;
}

export interface IGroupNotification extends INotification {
    group: string;
    event: string;
}

export interface IPrivateMessageNotification extends INotification {
    message: string;
}

export interface ICommentNotification extends INotification {
    target: string;
}

export type TNotification =
    IPostNotification
    | IGroupNotification
    | IPrivateMessageNotification
    | ICommentNotification
    | IFollowNotification;
