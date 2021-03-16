import React from 'react';
import {  Navbar, Header, Ul, Ancor ,NavIcon,Up } from "./navStyle";
function Nav() {
    let i = 0;
    const Toggle = (e)=>{
        const toup = document.querySelector(".header");
        const uprotate = document.querySelector(".uprotate");
        if (i % 2 === 0) {
            toup.style.transform = "translate(0, 90%)";
            uprotate.classList.toggle("rotate")
        } else {
            toup.style.transform = "translate(0,0%)"
            uprotate.classList.toggle("rotate")

        }
        i = i + 1;

    }
    return (
        <>
        <Header className="header">
                    <Navbar className="navbar">
                        <Up onClick={()=>Toggle()} className="uprotate">
                         <img src={process.env.PUBLIC_URL+"images/arrow-down.png"}/>
                        </Up>
                        <Ul>
                        <li>
                            <NavIcon to="/platform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"/></svg>
                            </NavIcon>
                        </li>
                        <li>
                            <NavIcon to="/requests">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.697 17.991c.487 1.694.954 3.318 1.254 4.369.033.118.049.236.049.35 0 .522-.32 1.005-.83 1.201l-.002.002c-.604.232-1.286-.013-1.599-.578-.694-1.253-1.866-3.304-2.47-4.357l.428.016c1.18 0 2.273-.371 3.17-1.003zm-4.215 6.002h-12.953l-.231-5.686s-1.901 3.195-2.867 4.937c-.313.565-.995.81-1.599.579l-.002-.003c-.51-.196-.83-.678-.83-1.201 0-.114.016-.232.049-.349.635-2.23 2.038-6.952 2.771-9.526.273-.959 1.152-1.619 2.154-1.619h9.582c-.344.717-.537 1.521-.537 2.369 0 2.751 2.027 5.033 4.67 5.437l-.207 5.062zm1.018-14.993c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 2h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zm-7.994-11c2.777 0 5.031 2.243 5.031 5.006 0 2.763-2.254 5.006-5.031 5.006-2.777 0-5.031-2.243-5.031-5.006 0-2.763 2.254-5.006 5.031-5.006z"/></svg>
                            </NavIcon>
                        </li>
                        <li>
                            <NavIcon to="/messages">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z"/></svg>
                            </NavIcon>
                        </li>
                        <li>
                            <NavIcon to="/notification">
                            <svg  enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m411 262.862v-47.862c0-69.822-46.411-129.001-110-148.33v-21.67c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67c-63.59 19.329-110 78.507-110 148.33v47.862c0 61.332-23.378 119.488-65.827 163.756-4.16 4.338-5.329 10.739-2.971 16.267s7.788 9.115 13.798 9.115h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60h136.509c6.01 0 11.439-3.587 13.797-9.115s1.189-11.929-2.97-16.267c-42.449-44.268-65.827-102.425-65.827-163.756zm-170-217.862c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zm-177.67-60c34.161-45.792 52.67-101.208 52.67-159.138v-47.862c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138z"/><path d="m451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c36.831 36.831 57.114 85.8 57.114 137.887z"/><path d="m46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0-42.497 42.497-65.901 98.999-65.901 159.099 0 8.284 6.716 15 15 15z"/></g></svg>                            
                            </NavIcon>
                        </li>                        
                        </Ul>
                    </Navbar>
                </Header>
         

        </>
    )
}

export default Nav; 