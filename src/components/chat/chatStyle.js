import styled, {keyframes} from 'styled-components';

const popup = keyframes`
  0%{clip-path:circle(0% at 100% 0%)}
  100%{clip-path:circle(100% at 100% 0%)}
`;

export const Open = styled.div`
position: absolute;
top: 30%;
left: -10%;
width: 30px;
height: 30px;
border-radius:50%;

`
export  const ChatContainer  = styled.div`
width:70%;
height:100vh;
position:fixed;
right:0px;
overflow-y:auto;
border-left: 2px solid #e5e5e5;
@media only screen and (max-width: 800px) {
  width:100%;
}

`
export  const ChatRoom  = styled.div`
background:#FFF;
height:100vh;
overflow-y:auto;
`
export  const ChatHeader = styled.div`
background: #fff;
position: sticky;
left: 0px;
top: 0px;
display:flex;
padding:1% 2%; 
align-items: center;
text-align: right;
 & > div{
     width:50%;
     display:flex;
     align-items: center;
     text-align: left;
 }
`
export  const ImgContainer = styled.div`
width:25%;
height: 40px;
svg,img{
  width:40px;
  height:40px;
  border-radius: 50%;
 }
`

export  const RightOp = styled.div`
justify-content: right;
padding: 0% 5%;

`
export  const Send = styled.button`
padding:2%;
width:10%;
border:none;
outline:none;
background:transparent;
&>img{
width:100%;
}
`
export  const Input = styled.input`
width:90%;
background:#FFF;
border:none;
outline:none;
padding:1%;
`
export  const ChatFooter = styled.div`
padding:1% 3%;
position:fixed;
bottom:0px;
right:0px;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
background:#3dbc93;
@media only screen and (max-width: 800px) {
  width:100%;
}
`
export  const ChatBody = styled.div`
padding:2% 0%;
height: 80vh;
overflow: scroll
`
// message style
// defualte messages
export const DefMessage = styled.div`
background:${(props)=>props.who === "other" ? "tomato" :"#3dbc93"};
width:50%;

border-radius: ${(props)=>props.who === "other" ? "12px 8px 15px 0px":"10px 15px 0px 10px"};
padding:1% 2%;
margin:1%;
transition:0.4s;
word-break: break-all;
float:${(props)=> props.who === "other" ? "left" :"right"};
animation: ${popup} 0.3s ease-out 1;
`


export const SelectOne = styled.div`
width: 50%;
background: #fff;
padding: 2%;
position: absolute;
right: 0px;
top: 50%;
transform: translateX(100%);
transition: 0.5s;
border: 1px solid lightgray;

&>div{

  &>input{
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &+label{
        background:transparent;
        padding:2%;
        display:block

    }
  }
}
& > div input:checked +label{
    background:#3dbc93;

}

`