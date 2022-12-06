import React from "react";

export interface INotification {
    id: number;
    user: string;
    avatar: string;
    type: string;
    isRead: boolean;
    timestamp: string;
    // post?: string;
    // group?: string;
    // event?: string;
    // message?: string;
    // target?: string;
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

export type NotificationsContextType = {
    notifications : TNotification[];
}

export type actionType = {
    type: string;
    payload?: number | INotification[]
};

export type NotificationStateProps = {
    children: React.ReactNode
}

export type NotificationReducer = {
    notificationReducer: () => {};
    initialState?:{};
};

export interface INotificationContext {
    notifications: INotification[];
    setNotifications: (notifications: INotification[]) => void;
    markAsARead: (notificationId: number) => void;
    markAllAsRead: () => void;
}