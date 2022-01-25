import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Card from "../components/Card";
import CopyP from "../components/Copy";
import Info from "../components/info";
import Logos from "../components/Logos";

const UseDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const LogoDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    padding: 0 20px 20px 20px;
    top : 8vh;
`
const PP = styled.p`
    position: relative;
    top: 6vh;
    display: flex;
    justify-content: center;
    font-size: ${props => props.size ? props.size : "13px"};
    line-height: 1.2;
    color : #46505d;
    font-weight: ${props => props.highlight ? props.highlight : "13px"};;
`
const SectionDiv = styled.div`
    margin: 10px 0px;
`

const CardDiv = styled.div`
    margin: 8vh 20vh;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 2px;

`
export default function CanUse() {
    const {pathname} = useRouter()
        console.log(pathname)
    return (
        <>
        <Info pathname={pathname} title="i can do it" content2="하지만 하마만큼 뚱뚱하진 않습니다." content="활용할 수 있는 모든 것들을 활용하고 끊임없이 흡수하는 하마입니다.🦛" />
        
        <SectionDiv>
        <PP>01</PP>
        <PP> react와 관련된 것들을 공부하다. </PP>
        <PP  size="15px" highlight="bold">할 수 있는 것들</PP>
            
        <LogoDiv>
        <Logos btnName="HTML" color="#F16529" link="https://ko.wikipedia.org/wiki/HTML" />
        <Logos btnName="Css" color="#29A9DF" link="https://developer.mozilla.org/ko/docs/Web/CSS"/>
        <Logos btnName="Js" color="yellow" link="https://developer.mozilla.org/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript" />
        <Logos btnName="React" color="#60DBFA" link="https://ko.reactjs.org/" />
        <Logos btnName="Next" color="black" link="https://nextjs.org/" />
        <Logos btnName="Gatsby" color="#663399" link="https://www.gatsbyjs.com/" />
        <Logos btnName="Styled-Components" color="#FF3FE5" link="https://styled-components.com/" />
        <Logos btnName="Recoil" color="#3768ED" link="https://recoiljs.org/ko/" />
        <Logos btnName="redux" color="#A039F7" link="https://ko.redux.js.org/introduction/getting-started/" />
        

        </LogoDiv>
        </SectionDiv>
        <SectionDiv>
            
        
        <UseDiv>
        <PP>02</PP>
        <PP>여러가지를 만들어보다.</PP>
        <PP  size="15px" highlight="bold">했던 것들 (업데이트 준비중)</PP>
        
        <CardDiv>
            <Card title="코인API-coinpaprica"/>
            <Card title="toDoList"/>
            <Card title="Movie App"/>
            <Card title="clone trello"/>
            <Card title="clone net"/>
        </CardDiv>
        </UseDiv>

        </SectionDiv>
        
        </>
        )
}