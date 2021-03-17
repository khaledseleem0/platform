import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components';
const maxWidth = 500;
export const Header = styled.div `
        padding:2% 5% ;
        display: flex;
        background: #fff;
        position: fixed;
        right: 0px;
        left: 0px;
        bottom: 0px;
        z-index:12;
        width: 70%;
    border-radius: 10px 10px 0px 0px ;
    transition:0.5s;
    @media screen and (max-width:${maxWidth}px){

        width:100vw;

    }
`
export const NavIcon = styled(Link) `
width: 20px;
height:20px;
display:inline-block;
`
export const Up = styled.div `
transition: 0.5s;
background: #fff;
padding: 10px;
position: absolute;
right: 50%;
border-radius: 50%;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
transform: translateY(-70%);
&>img{
    width:100%;
    height:100%;
}
`
export const Navbar = styled.div `
        flex:1;
        display: flex;
        align-items: center;
        z-index: 2;

`

export const Ul = styled.ul `
        display:flex;
        justify-content: space-around;
        list-style:none;
        flex:1;

 `

export const Li = styled.li`
 position:relative;
 z-index:0;
 & > a{
            text-decoration:none;
            color:#333;
            font-family:Cairo ;
            text-transform: capitalize;
        }
 `
export const IconNav = styled.i `
margin:5px;
`
export const Ancor = styled(NavLink)
`
padding: 10px;
background: transparent;
display: inline-block;
border-radius: 10px;
color:#bbbfc2;
`