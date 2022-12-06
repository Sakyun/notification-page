import React, {Reducer, useReducer} from "react";
import NotificationContext from "./notificationContext";
import notificationReducer from "./notificationReducer";
import {
    MARK_AS_READ,
    MARK_AS_ALL_READ,
    SET_NOTIFICATIONS
} from '../../constants/notificationConstants';
import {
    NotificationStateProps,
    INotificationContext, TNotification
} from "../../INotification";


const NotificationState = ({children}: NotificationStateProps) => {
    const initialState = {
        notifications: []
    };

    const [state, dispatch] = useReducer<Reducer<any, any>>(notificationReducer, initialState);

    const setNotifications = (notifications: TNotification[]) => {
        dispatch({type: SET_NOTIFICATIONS, payload: notifications});
    }

    const markAsARead = (notificationId: number) => {
        dispatch({type: MARK_AS_READ, payload: notificationId});
    };

    const markAllAsRead = () => {
        dispatch({type: MARK_AS_ALL_READ});
    };

    const value: INotificationContext = {
        notifications: state.notifications,
        setNotifications,
        markAsARead,
        markAllAsRead
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationState;