import React from 'react'
import {DefMessage} from './chatStyle'
export default function Message(props) {
    const {content} = props;
    const who  = content.who; //to set colors and styling if user or aother
    const message  = content.messageVal;
    return (
        <>
        <DefMessage who={who}>
           {message}
        </DefMessage> 
        </>
    )
}
