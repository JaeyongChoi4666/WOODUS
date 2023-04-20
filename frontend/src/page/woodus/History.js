import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import HistoryLine from "../../components/woodus/HistoryLine";
import Footer from "../../components/Footer";

const History = () => {
    const historyContents = [
        {
            id: 1,
            year: "2017",
            contentList: [
                {
                    id: 1,
                    content: "비전트레이닝센터 자활사업 새움 목공동아리 개설",
                },
                {
                    id: 2,
                    content: "서울 새활용플라자 입주",
                },
            ],
        },
        {
            id: 2,
            year: "2018",
            contentList: [
                {
                    id: 1,
                    content:
                        "2018.01 ~ 2021.04 네트워크지원사업 선정 (서울사회복지공동모금회)",
                },
            ],
        },
        {
            id: 3,
            year: "2019",
            contentList: [
                {
                    id: 1,
                    content:
                        "2019 동단위 시민참여예산 주민주도형 실행 사업 (용답동)",
                },
            ],
        },
        {
            id: 4,
            year: "2020",
            contentList: [
                {
                    id: 1,
                    content:
                        "우드어스사회적협동조합 법인 설립 (1대 이사장 김은진)",
                },
                {
                    id: 2,
                    content: "우드어스사회적협동조합 사업자 등록",
                },
                {
                    id: 3,
                    content: "제 19회 전국주민 자치박람회 최우수상 수상",
                },
                {
                    id: 4,
                    content: "성동구청장 표창 (성동구 협치사업 신장석)",
                },
            ],
        },
        {
            id: 5,
            year: "2021",
            contentList: [
                {
                    id: 1,
                    content: "제 2대 이사장 박미선 취임",
                },
                {
                    id: 2,
                    content: "2021.01 ~ 2021.12 성동구 협치사업 운영",
                },
                {
                    id: 3,
                    content: "서울새활용플라자 새활용수리소 운영",
                },
                {
                    id: 4,
                    content: "성동구청장 표창 ( 성동구 협치사업 이교상)",
                },
                {
                    id: 5,
                    content: "서울시장 표창장 수상 (평생학습 프로그램)",
                },
            ],
        },
        {
            id: 6,
            year: "2022",
            contentList: [
                {
                    id: 1,
                    content: "2022.01 ~ 2022.12 성동구 협치사업 운영",
                },
                {
                    id: 2,
                    content: "2022.04 ~ 2022.11 성동구 ESG사업 운영",
                },
                {
                    id: 3,
                    content: "서울시장 표창(서울시 일자리 창출)",
                },
                {
                    id: 4,
                    content: "성동구청장 표창 ( 성동구 협치사업 심경섭)",
                },
                {
                    id: 5,
                    content:
                        "2022.12 ~ 2023.11 서울사회복지 공동보금회 CI사업 (가구수리소) 운영",
                },
            ],
        },
        {
            id: 7,
            year: "2023",
            contentList: [
                {
                    id: 1,
                    content: "성동구청 동네배움터 운영 협약",
                },
                {
                    id: 2,
                    content: "제 3대 이사장 나유숙 취임",
                },
            ],
        },
    ];

    return (
        <div>
            <Menubar />
            <Secondmenu />
            <HistoryLine content={historyContents} />
            <Footer />
        </div>
    );
};

export default History;
