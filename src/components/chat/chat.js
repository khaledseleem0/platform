import React, { useState,useEffect } from "react";
import {
  SelectOne,
  ChatHeader,
  Send,
  ChatBody,
  ChatFooter,
  Input,
  RightOp,
  ChatContainer,
  ChatRoom,
  ImgContainer,
  Open
} from "./chatStyle";
import { Name, Ancor } from "./../left/leftStyle";
import Message from "./message";
import {Api ,width,maximam } from  "./../getter";
function Chat(props) {
// who in chat 
const [person, SetPerson] = useState({
  "image": "def.png",
  "name": "unknown",
  "status": "",
  "id": "-1",
});
  const[api,SetApi] = useState([])
  //get api 
  useEffect(() => {
    try{
      Api().then((respond) => {
        let data = respond.messages;
        let final_result =  data;
        SetApi(final_result);
      })
    }catch(err){
      console.log(err);
    }
 

}, []) 
useEffect(()=>{
  let best_data = api.find((result)=> {return result.name == props.match.params.chat})
  if(best_data != undefined){
    SetPerson(best_data)
  }

})
// end
  const [message, SetMessage] = useState({
    who: null,
    messageVal: null
  });
  const [renderedM, SetRenderedM] = useState([]);
  const handelChange = e => {
    SetMessage({
      who: e.target.value,
      messageVal: message.messageVal
    });
  };
  const handelValue = e => {
    SetMessage({
      messageVal: e.target.value,
      who: message.who
    });
  };
  const handelRender = (e) => {
        if(message.who === null || message.messageVal === null || message.messageVal.trim() === ''){
                e.target.classList.add("disabledpost");
                return;
        }else{
          e.target.classList.remove("disabledpost");
            SetRenderedM([
                ...renderedM,message
            ]);
            document.querySelector("input[type=text]").value ="";
            SetMessage({
              who: e.target.value,
              messageVal:""
            });
        }
  };
  const handelOpen = ()=>{
      let open = document.querySelector(".select");
      open.classList.toggle("open")
  }
  return (
    <>
      <ChatContainer>
        <ChatRoom>
          <ChatHeader>
            <div>
              <ImgContainer>
                <img alt="img not foud" src={process.env.PUBLIC_URL + person.image} />
              </ImgContainer>

              <Name>{person.name}</Name>
            </div>
            <RightOp>
              <span>
                <Ancor to={width > maximam ? "/platform" : "platform/messages"}>
                back
                </Ancor>
                </span>
            </RightOp>
          </ChatHeader>

          <ChatBody>
            {
                renderedM.map((content,i)=>{
                        return <Message content={content} key={i}/>
                })
            }
            <SelectOne className="select">
              <div>
                <input
                  type="radio"
                  name="how"
                  id="user"
                  value="user"
                  onChange={e => handelChange(e)}
                />
                <label htmlFor="user"> me </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="how"
                  id="other"
                  value="other"
                  onChange={e => handelChange(e)}
                />
                <label htmlFor="user"> {person.name}</label>
              </div>
              <Open onClick={()=>handelOpen()}>
                <img alt="<" src={process.env.PUBLIC_URL + "./../images/arrow-down.png"} />
              </Open>
            </SelectOne>
          </ChatBody>
          <ChatFooter>
            <Input type="text" onInput={(e) => handelValue(e)} />
            <Send className="send" onClick={(e)=>handelRender(e)}> 
            <img alt="<" src={process.env.PUBLIC_URL + "./../images/post.png"} />
            </Send>
          </ChatFooter>
        </ChatRoom>
      </ChatContainer>
    </>
  );
}       
export default Chat;
