import React, { useState,useEffect } from 'react'
import { Img, Imgpost,PostFeed,Header,Bottom ,Time} from './feedStyle'
import {Name} from "./../left/leftStyle"
import {Api} from './../getter';
 function Post(props) {
    let content = props.postContent;
    const time = ()=>{
        var Timenow = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[Timenow.getDay()];
let dayOfMonth = Timenow.getDate();
let years = Timenow.getFullYear();
let hours = Timenow.getHours();
let minutes = Timenow.getMinutes();
let seconds = Timenow.getSeconds();
        return  <Time>
        <div>{`${dayOfMonth} ${day} ${years}`}</div>
        <div>{`${hours} : ${minutes} : ${seconds}`}</div>
        </Time>
    }
    const [profile ,SetProfile] = useState([]);
    const [load ,SetLoad] = useState({"loading":false});

    useEffect(()=>{
        Api().then((data)=>{
            SetProfile(data.profile);
            SetLoad({"loading":true})
        })        
    },[])
    const  Loving  =(e)=>{
        e.target.classList.toggle("activeheart");
            
    }
    return (
        <>
        {load == false ? "loading": 
        <PostFeed>
            <Header>
            {console.log(profile)}
            <Img src={process.env.PUBLIC_URL+profile.image}/>
            <Name>{profile.name}</Name>
            {time()}
            </Header>
            <p> {content.content} </p>
                 {content.src === null ?  "" : <Imgpost src={content.src} />}
            <Bottom>
            <span> 
                {/* <img src={process.env.PUBLIC_URL+"images/heart-black.png"} onClick={(e)=>{Loving(e)}}/>  */}
                {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="red" bac clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg> */}
                <svg onClick={(e)=>{Loving(e)}} xmlns="http://www.w3.org/2000/svg" width="24" fill="lightgray" opacity="0.6" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
           </span>
            <span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7v10h-20v-10h20zm2-2h-24v14h24v-14zm-18 3h-3v2h3v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-4 6h-10v2h10v-2zm4-3h-4v2h4v-2zm-14 0h-4v2h4v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2z"/></svg>
             </span>
            <span> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
             </span>
            </Bottom>
        </PostFeed>
    }
    </>
    )
}


export default Post