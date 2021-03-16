import React,{useState,useEffect} from 'react';
import {GetRequest} from "./../getter";
import {RightContaier,Img,Header,ImgContainer,Adds}  from './reightStyle';
import Requsets from './requsets';
export default function Right() {
    let [request, setRequest] = useState([]);
useEffect(() => {
    GetRequest().then(res => {
        setRequest(res)
    })
}, [])
    return (
        <>
        <RightContaier>
        <Header>
        <span><i class="fas fa-bell"></i></span>
                    <div>
                        <Img alt="img not foud" src={process.env.PUBLIC_URL+"./images/profile.jpg"} />
                        <span>
                            Lorem ipsum
                        </span>
                    </div>
                </Header>
                <ImgContainer>
                <img alt="img not foud" src={process.env.PUBLIC_URL+"./images/profile.jpg"} />
                <div>
                     <i class="fas fa-video"></i> 
                     <i class="fab fa-hotjar"></i>
                 </div>
                </ImgContainer>
               
               <Adds>
               {
                    request.map((request)=>{
                        return <Requsets item={request} key={request.id}/>
                    })
                }
               </Adds>
                
              
        </RightContaier>
        </>
    )
}
