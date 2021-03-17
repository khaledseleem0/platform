import React from 'react'
import {GroupContainer, Status, Img, Name ,Ancor } from './leftStyle'
export default function MessegesComponent(props) {
    let {item} = props;
    let statusNumber = parseInt(item.status);
    function active(){
        return <span className="status"> </span>
    }
    return (
        <>
                <GroupContainer>
                    <Img>
                        <img src={item.image} />
                    </Img>
                    <Name>
                        <Ancor to={"/messages/"+item.name}>
                        {item.name}
                        </Ancor>
                    </Name>
                    <Status>{ statusNumber == 0? active() :statusNumber > 60 ? <span> {Math.floor(statusNumber / 60)}h </span> : <span> {statusNumber}m </span>
                }        
                </Status>
                </GroupContainer>

        </>
    )
}
