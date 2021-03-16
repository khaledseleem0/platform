import React,{useState,useEffect} from 'react'
import {NotificationContainer,Header,NotificationItem,NotificationItemImg} from './../notification/notificationStyle';
import {Img ,Name,Icons,Back,TitlePage} from './requestsStyle';
import {Api} from './../getter';
import { Title } from '../left/leftStyle';
export default function Requests() {
    const [requests,SetRequests] = useState([]);
    useEffect(() => {
        Api().then((data)=>{
            SetRequests(data.request);
            
        })
        
    }, []);
    const handelDelete = (id)=>{
           let all_without_this = requests.filter((ele)=>{ 
                return ele.id != id; 
            });
                SetRequests(all_without_this)

    }
    return (
        <>
         <NotificationContainer>
         <Header>
        <TitlePage>
            follow requests
        </TitlePage>
         <Back to="/">
             back
         </Back>
         </Header>
      {
          requests.map(request=>{
          return  <NotificationItem>
            <NotificationItemImg>
            <img src={process.env.PUBLIC_URL+request.image} />
          </NotificationItemImg>
          <Name> {request.name}</Name>
           <Icons>
           <Img src={process.env.PUBLIC_URL+"./images/add-user.png"} onClick={(e)=>handelDelete(request.id)}/>
           <Img src={process.env.PUBLIC_URL+"./images/delete.png"}onClick={(e)=>handelDelete(request.id)}/>
          </Icons>
          </NotificationItem>
          })
      }


          </NotificationContainer>   
        </>
    )
}
