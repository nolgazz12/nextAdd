import Image from "next/image"
import styled from "styled-components"

import Css from "/public/logos/css3.png"
import Html from "/public/logos/html5.png"
import Js from "/public/logos/js.png"
import Next from "/public/logos/next.png"
import React from "/public/logos/react.jpg"
import Reacthook from "/public/logos/reacthook.jpg"
import Recoil from "/public/logos/recoil.png"
import StyledComponent from "/public/logos/styledComponent.svg"
import styledC from "/public/logos/styledC.png"
import Ts from "/public/logos/ts.png"

const BtnDiv = styled.div`
    display: flex;
    flex-direction: row;
`
export default function Logos({btnName ="btn" , color ="red", link="http://www.naver.com" }) {


    return (
        <>
        <BtnDiv as="a" href={link} target="_blank" >
<button>
<span className="wave">
</span>
{btnName}
</button>
</BtnDiv>
<style jsx>{`

    button {
        display: inline-block;
            width: min-width;
            height: min-height;
            position: relative;
            font-size: 20px;
            cursor: pointer;
            padding: .8em 1em;
            border-radius: 10px;
            overflow: hidden;
            border: 3px solid #F2F2F2;
            background-color: white;
            transform: translate3d(0, 0, 0);
            color : ${color}

    }
    .wave {
        opacity: .4;
        position: absolute;
        bottom: 3%;
        left: 50%;
        background: ${color};
        width: 310px;
        height: 300px;
        margin-left: -150px;
        margin-bottom: -305px;
        transform-origin: 50% 48%;
        border-radius: 43%;
        
        transition-duration: 0.75s;
        transition-property: margin-bottom;
        transition-timing-function: ease;
    }
    
    button:hover .wave {
        margin-bottom: -250px;
        animation: rotate 2000ms infinite linear;
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        from { transform: rotate(360deg); }
    }
`}</style>

        </>
)
}

{/* <div>
<ImgDiv>
<ImgInnerDiv>
    <div>
<Image src={Css} width="200px" height="100px" alt="css"/>
    <p>여기 퍼센트 적음?</p>
    </div>
</ImgInnerDiv>
</ImgDiv>
</div>   */}


{/* <Image src={Html} width="200px" height="100px" alt="html"/>
<Image src={Js} width="200px" height="100px" alt="Js"/>
<Image src={React} width="200px" height="100px" alt="react"/>
<Image src={Reacthook} width="200px" height="100px" alt=""/>
<Image src={Recoil} width="200px" height="100px" alt="next"/>
<Image src={Ts} width="200px" height="100px" alt="next"/> */}

// <A href="https://open.kakao.com/o/sRwHvGVd" target="_blank" rel="noreferrer">
// <Image src="/emoji/line.svg" width="40px" height="40px" alt="kakao" />
// </A>


//  box-shadow: 0 1px 3px rgba(black, .2);