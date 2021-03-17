import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Main_Color} from './../getter';
export const RightContaier = styled.div `
width: 30%;
background: ${Main_Color};
display: flex;
height: 100vh;
flex-flow: column;
position: fixed;
top: 0px;
overflow-y: scroll;
position: fixed;
@media only screen and (max-width: 700px) {
    width:100%;
  }

`

export const Header = styled.div `
background:#fff;
display:flex;
justify-content: space-around;
padding:5% 2%;
position:relative;
align-items: center;
&>span{
    transition:0.5s;
}
`
export const SearchContainer = styled.div`
    display:flex;
    align-items: center;
     over-flow:hidden;
     width: 80%;
     justify-content: space-around;
     width: 80%;
     background: #fff;
     border-radius: 5px;
     border:1px solid #d3d3d39e;

` 
export const Search = styled.input `
    border: none;
    padding: 10px;
    outline: none;
    background:transparent;


`
export const GroupContainer = styled.div `
display: flex;
justify-content:space-around;
padding: 5%;
align-items: center;

`
export const Name = styled.div `
flex:4;
margin :0% 5%;
text-overflow: ellipsis;
white-space: nowrap;

`
export const Groups = styled.div `
background:#fff;
@media only screen and (min-width: 700px) {
    margin:3% 2%;
    border-radius:20px;
    padding:2%;
    box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);

}
`
export const Messages = styled.div `
background:#fff;
@media only screen and (min-width: 700px) {
    margin:3% 2%;
    border-radius:20px;
    padding:2%;
    box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);

}`
export const Ancor = styled(Link) `
color:#050420;
text-decoration:none;
text-transform:capitalize;

`
export const Status = styled.div `
flex:1;
display:flex;
 &>img {
     width:100%;
     margin:0% 1%;
 }

`
export const Img = styled.div `

border-radius: 50%;
flex:1;
&>img{
    width:40px;
    height:40px;
    border-radius: 50%;

}
`
export const Title = styled.div `
text-align:center;
padding: 2% 0%;
text-transform: capitalize;
position: sticky;
top: 0px;
border-bottom:2px solid #fff3b0;
background:#fff;
text-transform:capitalize;
`
export const Icon = styled.img`
width: 20px;
`
export const More = styled.img`
width: 50px;
`
// menu more 

export const MoreMenu  = styled.div`
width: 90%;
position: absolute;
bottom: 0%;
transform: translateY(100%);
z-index: 12;
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: column;
text-align: right;
background: #FFF;
padding:2%;

border: 2px solid #edffec;
transition: 0.5s;
clip-path:circle(0% at 0% 0%);
box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
border:1px solid #b7bbb640;
border-raduis:4px;
&>div{
display: flex;
justify-content: space-around;
width: 90%;
padding: 2% 0%;
align-items: center;
    &>a{
       
        text-decoration:none;

    }
}
`
export const MoreIcon = styled.img`
width: 24px;

`