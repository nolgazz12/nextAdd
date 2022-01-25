import dynamic from 'next/dynamic'
import styled from 'styled-components';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartDiv = styled.div`
    width: 25vw;
    height: 20vh;
`

export default function Chart2(){

    return (
        <ChartDiv>
            <ApexChart    type = "line"
                series={[
                    {
                        name : "성격과 생활사",
                        data: [69,57,46,72,45,54],
                    },
                ]}
                options={{
                    theme : {
                        mode : "dark",
                        palette: 'palette1', 
                    },
                    chart: {
                        toolbar : {
                            show : false,
                        },
                        height : 250,
                        width : 250,
                    },
                    xaxis: {
                        categories: ['상상력', '예술성', '학업성취', '대인관계지향', '독립심', '경험추구']
                    },
                    title : {
                        text : "성격과 현재까지의 생활사입니다.",
                        align: 'left'
                    },
                    stroke: {
                    curve: 'stepline',
                },  
                }}/>
        </ChartDiv>
    )
}

