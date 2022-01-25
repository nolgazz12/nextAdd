import styled from "styled-components"
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.position};
    background-color: #0d51ff;
    height: 5vh;
    width: 100%;
    position: absolute;

    a{
        color : white !important;
    }
    `

const NavP = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #ffffff;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.4em;
    line-height: 160%;
    position: relative;
    color: white;
    padding-left: 40px;
`
const A = styled.a`
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 0 !important;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transition: all 0.3s ease-in-out;  
    
    &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    }
    image {
    width:325px; height:280px; overflow:hidden;
    }

`

const NavADiv = styled.div`
    margin-right: 100px;
`

export default function NavBar() {
    const router = useRouter()
    console.log(router)

    return (
        <Nav>
            <NavDiv position="space-between">
                <NavP as="a" href='/'> Portfolio by hyeongyu</NavP>
                <NavADiv>
                    <Link href='/about'>
                    <a className ="navA">about</a>
                    </Link>
                    <Link href='/canUse'>
                    <a className ="navA">iCanUse</a>
                    </Link>
                    <Link href='/contact'>
                    <a className ="navA">contact</a>
                    </Link>
                </NavADiv>
            </NavDiv>
                    <A href="https://open.kakao.com/o/sRwHvGVd" target="_blank" rel="noreferrer">
                        <Image src="/emoji/line.svg" width="40px" height="40px" alt="kakao" />
                    </A>
        </Nav>
    )
} 
<style jsx>{`
.navA{
}
`}</style>