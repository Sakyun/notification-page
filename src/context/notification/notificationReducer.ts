import {
    MARK_AS_READ,
    MARK_ALL_AS_READ,
    SET_NOTIFICATIONS,
} from '../../constants/notificationConstants';

import {NotificationsContextType, actionType} from "../../INotification";



const notificationReducer = (state: NotificationsContextType, action: actionType) => {
    switch (action.type) {
        case MARK_AS_READ:
            return {
                notifications: state.notifications.map(notification => {
                    if (notification.id === action.payload) {
                        notification.isRead = true;
                    }
                    return notification;
                })
            }
        case MARK_ALL_AS_READ:
            return {
                notifications: state.notifications.map(notification => {
                    notification.isRead = true;
                    return notification;
                })
            }

        case SET_NOTIFICATIONS:
            return {
                notifications: action.payload
            }

        default:
            return state;
    }
};

export default notificationReducer;