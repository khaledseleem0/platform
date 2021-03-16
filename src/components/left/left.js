import React, { useState, useEffect } from 'react'
import { Api} from './../getter'
import {Ancor, RightContaier, Header, Search, Groups, SearchContainer,Messages,More, Title,Icon,MoreIcon,MoreMenu } from './leftStyle';
import MessegesComponent from './masseges';
import GroupsComponent from './groups'
export default function Right() {
    let [messages, setMessages] = useState([]);
    let [groups, setGroups] = useState([]);
    useEffect(() => {
        Api().then(res => {
            setMessages(res.messages)
            setGroups(res.groups)
        })}, [])
    const handelToggle =()=>{
        let menu = document.querySelector('.moremenu');
            menu.classList.toggle("menu");
        let moremenu = document.querySelector('.more');
        moremenu.classList.toggle("rotatemenu");
    }
    return (
        <>
            <RightContaier>
                <Header>
                <span onClick={()=>handelToggle()} className="more">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>                                                                           
                </span>
                <MoreMenu className="moremenu">
                <div>
                            <svg enable-background="new 0 0 512 512" width="24" height="24" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m411 262.862v-47.862c0-69.822-46.411-129.001-110-148.33v-21.67c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67c-63.59 19.329-110 78.507-110 148.33v47.862c0 61.332-23.378 119.488-65.827 163.756-4.16 4.338-5.329 10.739-2.971 16.267s7.788 9.115 13.798 9.115h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60h136.509c6.01 0 11.439-3.587 13.797-9.115s1.189-11.929-2.97-16.267c-42.449-44.268-65.827-102.425-65.827-163.756zm-170-217.862c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zm-177.67-60c34.161-45.792 52.67-101.208 52.67-159.138v-47.862c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138z"/><path d="m451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c36.831 36.831 57.114 85.8 57.114 137.887z"/><path d="m46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0-42.497 42.497-65.901 98.999-65.901 159.099 0 8.284 6.716 15 15 15z"/></g></svg>      
                            <Ancor to="/notification"> notifications</Ancor>
                </div>
                <div>
                <svg viewBox="0 0 66 66" width="24"height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1,34A32,32,0,1,0,33,2,32,32,0,0,0,1,34Z"/><g  fill="#FFF"><path fill="#FFF" d="M44.51,43.58v5.56a0.85,0.85,0,0,1-.84.86H18.39a0.85,0.85,0,0,1-.84-0.86V43.58c0-4.49,6-8.13,13.48-8.13S44.51,39.09,44.51,43.58Z"/><ellipse  cx="31.03" cy="23.82" rx="5.99" ry="5.82"/></g><line class="cls-2" x1="43" x2="49" y1="21" y2="21"/><line class="cls-2" x1="46" x2="46" y1="24" y2="18"/></svg> 

                            <Ancor to="/requests"> friends</Ancor>
                </div>  
                             </MoreMenu>
                    <SearchContainer>
                 
<svg width="20"   id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.005 512.005">
<g>
        <g>
                <path fill="lightgray" d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                        S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                        c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                         M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
        </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g></g>
</svg>
                        <Search type="search" placeholder="Search.." />
                    </SearchContainer>
                </Header>
                <Groups>
                     <Title> groups </Title>
                 {groups.map((group)=>{
                    return <GroupsComponent item={group} key={group.id}/>
                    })
                 }

                </Groups>
                <Messages>
                <Title> Messages </Title>
                {
                messages.map((message)=>{
                    return <MessegesComponent item={message} key={message.id}/>
                })
                }
                </Messages>

            </RightContaier>
        </>
    )
}
