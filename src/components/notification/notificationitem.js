import React from 'react'
import {NotificationItem,NotificationItemImg,NotificationItemDiscription,NotificationItemTitle,NotificationItemDetails,NotificationItemTime} from "./notificationStyle";
export default function Notificationitem(props) {
   const{notifications} = props; 
    return (
        <>
            <NotificationItem>
                <NotificationItemImg>
                    <img src={notifications.image} />
                  </NotificationItemImg>
                  <NotificationItemDiscription>
                     
                        <NotificationItemTitle>
                            {notifications.title} 
                        </NotificationItemTitle>
                        <NotificationItemDetails>
                    <p>
{notifications.discription}                    </p>
                          </NotificationItemDetails>
<NotificationItemTime>
{notifications.time}
</NotificationItemTime>
                  </NotificationItemDiscription>
            </NotificationItem>
        </>
    )
}
