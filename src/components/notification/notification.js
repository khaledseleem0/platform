import React ,{useEffect,useState} from 'react'
import {NotificationContainer,Header} from './notificationStyle';
import Notificationitem from './notificationitem';
import {Api} from "./../getter" ;

export default function Notification() {
        const [notifications,SetNotifications] = useState([]);
    useEffect(() => {
    Api().then((response)=>{
        SetNotifications(response.notifications);
    })
    }, [])
    return (
     
        <NotificationContainer>
           <Header> Notifications </Header>
           {
           notifications.map((data)=>{
    return         <Notificationitem notifications={data}/>
})}
        </NotificationContainer>
    )
}
