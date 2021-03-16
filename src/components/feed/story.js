import React from 'react'
import { Name } from '../left/leftStyle';
import { Img,Stories} from "./feedStyle";
export default function Story(props) {
    const {item} = props;
    return (
        <>
            <Stories>
            <Img src={process.env.PUBLIC_URL+item} />
            <Name> sami </Name>
            </Stories>
        </>
    )
}
