import Image from "next/image"
import styled from "styled-components"

const CardDiv = styled.div`
    background-color: #fff;
    border: 1px solid;
    height: 250px;
    width: 175px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #DEDEDE;
`

export default function Card({title ="카두", uses =["1","2","3"]}) {
    return (
        <CardDiv>
            {/* <Image /> */}
            <a></a>
            <p>{title}</p>
            <p>uses</p>{uses.map(v => {<li>{v}</li>})}
        </CardDiv>
        )
}