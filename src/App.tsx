import React from 'react';
import Notifications from './Notifications';
import './App.css';
import './assets/fonts/PlusJakartaSans-VariableFont_wght.ttf';
import './assets/fonts/static/PlusJakartaSans-ExtraBold.ttf';
import './assets/fonts/static/PlusJakartaSans-Medium.ttf';
import NotificationState from "./context/notification/NotificationState";

function App() {
    return (
        <div className="App">
            <NotificationState>
                <div className="container">
                    <Notifications/>
                </div>
            </NotificationState>
        </div>
    );
}

export default App;
