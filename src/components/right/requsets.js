import React from 'react'
import { GroupContainer ,Name,Status,Img} from '../left/leftStyle';
import { NavIcon } from '../navbar/navStyle';
import { Requset } from "./reightStyle";
export default function Requsets(props) {
    const {item} = props;
    return (
        <>
            {/* <Requset> */}
            {/* <Img src={process.env.PUBLIC_URL+item.image} />
<div>
{item.name}
</div>
<span>
<NavIcon src={process.env.PUBLIC_URL+"images/add-user.png"}/>
<NavIcon src={process.env.PUBLIC_URL+"images/delete.png"}/>
</span> */}

            {/* </Requset> */}
            <GroupContainer>

                    <Img>
                        <img src={process.env.PUBLIC_URL+"images/add-user.png"} />
                    </Img>
                    <Name>
                        werwerwer</Name>
                    <Status>
                        <span>
                        <img src={process.env.PUBLIC_URL+"images/add-user.png"} />
                        </span>
                        <span>
                        <img src={process.env.PUBLIC_URL+"images/add-user.png"} />
                        </span>
                </Status>
            </GroupContainer>
        </>
    )
}
