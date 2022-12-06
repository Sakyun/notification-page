import {createContext} from "react";
import {INotificationContext} from "../../INotification";

const NotificationContext = createContext<INotificationContext>({
    notifications: [],
    setNotifications: () => {},
    markAsARead: () => {},
    markAllAsRead: () => {}
});

export default NotificationContext;