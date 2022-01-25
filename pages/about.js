import Info from "../components/info";
import styled from "styled-components";
import Chart from "../components/Chart";
import Chart2 from "../components/Chart2";
import { useRouter } from "next/router";
import CopyP from "../components/Copy";

const AllChartDiv = styled.div`
    height: 100%;
`

const AboutDiv = styled.div`
position: relative;
height: 280px;
display: flex;
justify-content: center;
align-items: center;
padding : 20px 100px;

p{
    word-break: break-word;
    font-family: 'Droid Serif', 'Nanum Gothic';
    text-align: center;
    margin-bottom: 0;
    color: #666666;
    font-size: 13px;
    padding: 0 20vw;
    line-height: 180%;
}
`
const SecSection = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
margin: 20px 20vw 50px 20vw;
height: 100%;


p{
    word-break: break-word;
    height: 25vh;
    font-family: 'Droid Serif', 'Nanum Gothic';
    margin-bottom: 0;
    color: #666666;
    font-size: 13px;
    line-height: 180%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
`
const MEDiv =styled.div`
    font-family: 'Droid Serif', 'Nanum Gothic';
    font-size: 20px;
        line-height: 180%;
        text-align: center;
        color: #666666;
`

export default function About() {
        const {pathname} = useRouter()
        return (
        <>
            <Info title="Growing developer." content="자라나는 성장형 개발자, 손현규" pathname={pathname}/>
            <AboutDiv>
                <p>
                    항상 색다르고 더 좋은 방법을 추구하다보니 새로운 것을 습득하고 공부하는 것을 좋아하고 이해가 될때까지 파고드는 집념도 있습니다. <br/>
                    이러한 태도는 코딩이라는 분야에서 큰 도움이 되었습니다. <br/>빠르게 발전하는 코딩덕분에 항상 어떻게 하면 더 재미 있을지 즐거운 아이디어로 가득합니다.<br/>
                    다른 개발자들이 만들어 놓은 코드를 쉽게 가져다가 사용할 수 있는 장점 또한 코딩의 큰 매력이라고 생각합니다.<br/>

                    국비 지원학원을 다니며 Java , python , spring , RPA 를 공부했지만 노력 대비 큰 성과가 나오진 않았습니다. 그러다 react 를 접하게 되었습니다.<br/> 
                    쉽고 빠르게 업데이트되며 계속해서 발전하는 react 에 관심이 생겨 관련된 회사로 취업했습니다. 그 후에 redux , next , gatsby , Typescript 등 react 와 관련된
                    것들을 공부중에 있습니다.
                </p>
            </AboutDiv>


            <AllChartDiv>
                <MEDiv>
                <p>직업선호도. 성격 검사</p>
                </MEDiv>

                <SecSection>
                    <p>
                        검사를 통해 성격과 생활사 중 가장 높은 것과 낮은 것을 그래프로 나타냈습니다.<br/>
                        저는 강점은 상상력과 새로운 경험을 하는데 두려움이 없습니다. <br/>
                        하지만 독립심과 지금까지의 학업 성취는 낮은 편입니다.<br />
                        그리고 단순 반복 작업은 잘 하지 못하는 편입니다.<br />
                        하지만 도전하는 것과 새로운 것을 굉장히 좋아해 프론트 분야와 잘 어울린다고 생각합니다.<br />
                        +<br />
                        좋아하는 것은 게임, 등산, 맛집 찾기, 새로운 곳, 숲, 바다, 시골, 캠핑, 만화 <br />
                        싫어하는 것은 다리많은 벌레, 비린내, 거짓말입니다. <br />
                        
                    </p>
                <Chart2 />
                </SecSection>
                <SecSection >
                    <Chart />
                    <p>
                        저는 RA형으로 변화와 다양성을 선호하고 틀에 박힌 것보다는 자유롭고 상징적인 활동에 흥미가 있으며,<br/>
                        분명한 것과 무언가를 조작하는 활동 내지는 기술에 흥미가 있습니다.<br/>
                        이러한 유형은 유별나고 혼란스러워보이지만 솔직하다는 타인의 평가를 받고 있으며<br/>
                        자기 자신의 대한 평가로는 사교적 재능보단 손재능과 혁신적이고 지적인 평가가 많은 유형입니다.

                    </p>
                </SecSection>
            </AllChartDiv>
        </>
        )
    }
    