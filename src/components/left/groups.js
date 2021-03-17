import React from 'react'
import { Img, Name, GroupContainer } from "./leftStyle";
export default function groupsComponent(props) {
    const { item } = props;
    return (
        <>
            <GroupContainer>
                <Img>
                    <img src={item.image} />
                </Img>
                <Name> {item.name} </Name>
            </GroupContainer>
        </>
    )
}
