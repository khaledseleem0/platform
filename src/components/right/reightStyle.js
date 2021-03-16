import styled from 'styled-components';
export const RightContaier = styled.div `
width: 25%;
display: block;
height: 100vh;
float:right;
position:fixed;
top:0px;
right: 0px;

`
export const Header = styled.div `
background: #f2f7fb;
display: flex;
justify-content: space-around;
align-items: center;
padding: 4%;
&>div{
    display: flex;
justify-content: space-around;
align-items: center;
}
`
export const Img = styled.img `
width:40px;
height:40px;
border-radius:50%;
margin: 0px 13px;

`

export const ImgContainer = styled.div `
    position:relative;
    &>img{
        width:100%;
    }
    &>div{
        border-radius: 0px 0px 10px 10px;
        color: #FFF;
    padding: 3%;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 100%;
    z-index: 12;
    background:#f44336;
    }
    &::after{
content:"";
position: absolute;
top:0px;
left:0px;
right:0px;
bottom:0px;
background: linear-gradient(352deg,rgb(160 79 193 / 60%),rgba(0,0,0,0))

`

export const Requset = styled.div `
background:#f2f7fb;
display: flex;
align-items: center;
justify-content: center;
& >span{
    padding: 10px;
& > i{
    padding: 10px;

}
}
`
export const Adds = styled.div `
padding:10% 0%;
`