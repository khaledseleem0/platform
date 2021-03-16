import styled from 'styled-components';
export const FeedContainer = styled.div`
width: 70%;
background: #edffec;
position: -webkit-sticky;
position: sticky;
bottom: 0px;
padding: 0% 0% 5% 0%;
min-height: 100vh;
left: 100%;
float: right;
@media only screen and (max-width: 800px) {
    width:100%;
  }
`
export const PostICon = styled.img`
        width:4%;
`
export const Img = styled.img`
width:40px;
height:40px;
border-radius:50%;
border: 2px solid royalblue;
`
export const Stories = styled.div`
margin: 0% 5%;
`

export const Stores = styled.div` 
    &>div{
        display: flex;
        margin: 1% 5%;
        background: #fff;
        overflow: scroll;
        padding: 2%;
        justify-content: space-around;
        border: 1px solid #ddd8d8;


    }
    `
    export const ArrowRight  = styled.div`
    position: absolute;
    right: 2%;
    z-index:12;
    transform:translateY(150%) rotate(0deg);
    outline:none;
    border:none;
    overflow: hidden;
    height: 30px;
    width: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:0 10px 40px -10px rgba(0,64,128,.2);
    background:#fff;
    border-radius: 10px;
    `
    export const ArrowLeft  = styled(ArrowRight)`
    transform:translateY(150%) rotate(180deg);
    left: 2%;
    `
export const Imgpost = styled.img` 
    margin-top: 3%;
    width: 100%;
    border-radius: 10px;
    `


export const PostNow = styled.div`
padding: 5%;
background: #fff;
margin: 5%;
border-radius: 7px;

    `

export const Input = styled.input` 
padding: 2%;
width: 90%;
margin: 0px 2% 0% 0%;
border-radius: 5px;
border: none;
background: #edffec;
outline:none;

&+span{
    background:transparent;
    padding: 2%;
}
    `
export const PostFeed = styled.div`
    background:#fff;
    margin:5%;
    padding:2%;
    border-radius: 10px;
    border:1px solid #fff;
    box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
      &>p{
        padding: 2% 0%;
        border-bottom: 1px solid #80808075;
      }
    `
export const Header = styled.div`
        display: flex;
        align-items: center;
        `
export const Bottom = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2%;
        &> span{
            padding: 1%;
            border-radius: 6px;
            transform: scale(1.5);
            color: #0f81f7;
            width: 5%;
            width:30px;
            height:30px;
        }
        `

export const Panel = styled.div`

align-items: center;
padding: 5% 0% 0% 0%;
position:relative;
display: flex;
justify-content: space-around;
&  input {
    width: 30%;
    position: absolute;
    left: 0px;
    opacity:0;

}
`
export const Time = styled.div`
display: flex;
flex-flow: column;
color: gray;
font-size:13px;
text-align: right;
opacity: 0.9;
 & >div:first-child{
   font-size:10px !important;  
 }
`