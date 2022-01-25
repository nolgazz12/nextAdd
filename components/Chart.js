import dynamic from 'next/dynamic'
import styled from 'styled-components';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartDiv = styled.div`
    width: 25vw;
    height: 20vh;

`

export default function Chart(){

    return (
        <ChartDiv>
            <ApexChart    type = "radar"
                series={[
                    {
                        name : "나의 흥미 유형",
                        data: [28,17,21,22,24,20],
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
                        categories: ['현실형 R', '관습형 C', '진취형 E', '사회형 S', '예술형 A', '탐구형 I']
                    },
                    title : {
                        text : "저의 직업 흥미 유형은 RA입니다."
                    }
                }}/>
        </ChartDiv>
    )
}
