import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaBars, FaFileExcel} from 'react-icons/fa'
export const Nav = styled.nav`
background: #000;
height:70px;
display:flex;
justify-content:space-between;
padding:0.5rem;
z-index:10;
`

export const Link = styled(link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
    color:#15cdfc;

}`

export const Bars= styled(FaBars)`

display:none;
color:#fff;

@media screen and (max-width:768px){

    display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100% , 75%);
        font-size: 1.8rem;
        cursor: pointer;
}`


export const NavMenu = styled.div`
display:flex;
align-align-items:center;
margin-right:--24px;


@media screen and (max-width:768px){
    display:none;
}


`


`












`


