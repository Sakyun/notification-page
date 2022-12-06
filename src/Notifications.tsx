import React, {useContext, useEffect} from 'react';
import Notification from "./Notification";
import {INotificationContext} from "./INotification";
import data from './notifications.json';
import NotificationContext from "./context/notification/notificationContext";


const Notifications = () => {
    const notificationContext = useContext<INotificationContext>(NotificationContext);
    const {notifications, setNotifications, markAsARead, markAllAsRead} = notificationContext;

    useEffect(() => {
        setNotifications(data);
    },[]);

    return (
        <div className="notifications">
            <header className="notifications__header">
                <h2 className="notifications__title">Notifications </h2>
                <span className="notifications__badge">3</span>
                <button className="notifications__mark-read-btn">Mark all as read</button>
            </header>
            <div className="notifications__body">
                {notifications && notifications.map(notification => {
                    return (
                        <Notification key={notification.id} {...notification} />
                    );
                })}
            </div>
        </div>
    );
}

export default Notifications;