import React, {useEffect, useState} from 'react';
import Notification from "./Notification";
import {
    INotification,
    IPostNotification,
    IGroupNotification,
    IPrivateMessageNotification,
    ICommentNotification
} from "./INotification";
import data from './notifications.json';


const Notifications = () => {
    const [notifications, setNotiffications] = useState<INotification[]>();

    useEffect(() => {
        // TODO Fetch data from api
        setNotiffications(data);
    }, []);

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