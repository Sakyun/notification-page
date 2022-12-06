import {createContext} from "react";
import {INotificationContext} from "../../INotification";

const NotificationContext = createContext<INotificationContext>({
    notifications: [],
    setNotifications: () => {},
    markAsRead: () => {},
    markAllAsRead: () => {}
});

export default NotificationContext;