
import styled from 'styled-components';
import {width} from './../getter';

export const NotificationContainer = styled.div`
width:70vw;
padding:1%;
background:#edffec;
float: right;
height: 100vh;
overflow-y:scroll;
@media screen and (max-width:800px){
    width:100vw;
}

`
export const Header  = styled.header`
display: flex;
justify-content: space-between;
padding:2%;
`
export const NotificationItem  = styled.div`
padding:2%;
width:100%;
background: #fdfdfd;
display: flex;
justify-content: space-between;
flex: 4;
align-items: center;
border: 1px solid #d9d4d4;
margin: 1% 0%;


`
export const NotificationItemImg= styled.div`
border-raduis:50%;
height:50px;
width:50px;
flex:1;
&>img {
    height:50px;
    width:50px;
    border-radius:50%;
};
`

export const NotificationItemTitle= styled.div`
font-size:24px;

`
export const NotificationItemDetails= styled.div`

`
export const NotificationItemTime= styled.span`

`
export const NotificationItemDiscription= styled.div`
flex:9;
// padding:2%;
margin:0% 0% 0% 2% 

`