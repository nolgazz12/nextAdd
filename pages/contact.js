import { useRouter } from "next/router";
import styled from "styled-components";
import CopyP from "../components/Copy.js";
import Email from "../components/Email.js";
import Info from "../components/info";
import KaKaoModal from "../components/modal.js";

const ContactDiv = styled.div`
    display : inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10vh;
    flex-direction: column;
    width: 100%;
    height: 100%;
    `

const ConInfoDiv = styled.div`
    display : flex;
    flex-direction: column;
`
const ConP = styled.p`
    font-size: 13px;
    color: #46505d;
    line-height : 1.4;
    text-align: center;
    font-family: 'Raleway',sans-serif;
    letter-spacing: 0.4em;
    padding-bottom: ${(props) => props.size? props.size : "30px"};
`

export default function Contact() {
    const {pathname} = useRouter()
    console.log(pathname)
    return (
        <>
            <Info title="CONTACT" pathname={pathname}/>
            <ContactDiv>
                <ConInfoDiv>
                    <ConP size="10px">hyeongyu Son</ConP>
                    <ConP>손현규</ConP>
                    <KaKaoModal>asdasdasd</KaKaoModal>
                    <ConP size="10px">010 - 5844 - 9808 </ConP>
                    <ConP >nolgazz12@gmail.com</ConP>
                </ConInfoDiv>
            <Email />
            </ContactDiv>
            <div>
            <CopyP />
            </div>
        </>
        )
}