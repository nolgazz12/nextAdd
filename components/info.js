import styled , { keyframes }from 'styled-components'

const GrowAnimation = keyframes`
    0%{
    font-size: 20px;
    }
    50% {
        font-size: 30px;
    }
    75%{
        font-size: 60px;
    }
    100%{
        font-size: 40px;
    }
`
const InfoDiv = styled.div`
position: relative;
top: 5vh;
height: 20vh;
background-color: #0d51ff;
display: flex;
align-items: center;
flex-direction: column;
color: white;
h1 {
    padding-top: 5vh;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Raleway';
    animation: ${(props) => props?.aniProps} 4s;
}
p {
    padding-top: 20px;
    font-size: 14px;
    font-family: 'Noto Sans KR';
}
`




export default function Info({ title , content="" , content2 = "" , pathname}) {
    return (
        <>
        {pathname === "/about" ? (
            <InfoDiv aniProps={GrowAnimation}>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{content2}</p>
            </InfoDiv>
            )
        
        :  (
                <InfoDiv>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>{content2}</p>
                </InfoDiv>
                )}
        </>
        )
}