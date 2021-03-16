import React from 'react'
import { Img, Name, GroupContainer } from "./leftStyle";
export default function groupsComponent(props) {
    const { item } = props;
    return (
        <>
            <GroupContainer>
                <Img>
                    <img src={process.env.PUBLIC_URL+item.image} />
                </Img>
                <Name> {item.name} </Name>
            </GroupContainer>
        </>
    )
}
