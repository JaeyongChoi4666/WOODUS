import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Introduction.css";

const Introduction = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpacity(1);
        }, 100); // 0.1초 후 opacity를 1로 변경

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="IntroductionBox">
            <Container style={{ opacity, transition: "opacity 0.5s ease-in" }}>
                <div className="IntoductionTitle">
                    <div>우드어스 사회적 협동조합 소개</div>
                    <div>Introduction of WOODUS social coop.</div>
                </div>
                <div className="IntroductionContents">
                    <div>
                        우드어스, 사회적 협동조합은 환경부 인가형 주민들의
                        공동체입니다.
                    </div>
                    <div>
                        폐목재, 폐가구, 자투리 목자재의 재사용, 새활용으로 새집,
                        미니책꽃이, 화분, 시계 등의 키트를 제작, 체험 프로그램을
                        운영하고 있습니다. 가정에 필요한 의자, 책장, 수납장 등의
                        생활소품, 가구를 내 손으로 만들 수 있는 맞춤형 목공
                        교육을 운영하고 있으며, 가구제작기능사 자격증반을
                        진행하고 있습니다.
                    </div>
                    <div>
                        민 - 관의 협업을 통하여 공동체 활동공간, 저소득 가정에
                        가구를 제작, 지원하고 있으며, 개별 맞춤형 원목 가구를
                        제작, 판매하고 있습니다. 나무와 목공기술을 활용한 체험과
                        교육, 공동체 프로그램을 통하여 자원순환에 대한 인식
                        확산과 주민과 공동체의 회복에 힘쓰겠습니다.
                    </div>
                </div>
                <div className="IntroductionTitle">
                    <div className="IntroductionTitleSecond">
                        <div>
                            <img src="/pictures/icon1.png" />
                        </div>
                        <div>우드어스 주요사업</div>
                    </div>
                    <div className="IntoductionType">
                        <div>재사용, 새활용 가구 제작 및 판매</div>
                        <div>재사용, 새활용을 활용한 체험프로그램 운영</div>
                        <div>목공을 활용한 직업훈련 등 교육 컨설팅 사업</div>
                        <div>주민과 노숙인공동체로 노숙인 일자리 창출사업</div>
                        <div>
                            가구제작 및 리폼, 가구업사이클, 목공자격교육,
                            목공체험(모든연령가능), 기업사회공헌 프로그램,
                            인테리어 및 공간작업
                        </div>
                    </div>
                </div>
                <div className="IntroductionTitle">
                    <div className="IntroductionTitleSecond">
                        <div>
                            <img src="/pictures/icon1.png" />
                        </div>
                        <div>우드어스 주요활동</div>
                    </div>
                    <div className="IntoductionType">
                        <div>
                            기업사회공헌 : 햇반업사이클 수직정원, 폐빠래트를
                            이용한 햇반 수거함, 기업자원봉사단과 봉사활동지원
                        </div>
                        <div>
                            가구수리소 : 지역 가구 수리소 운영, 성동구청과
                            생활밀착의 날 행사
                        </div>
                        <div>
                            체험프로그램 : 온마을학교 DIY 목공 체험 활동, 동네
                            배움터, 자활센터 목공 체험활동, 서울교육청 지역연계
                            생태 전환 교육, 북한산 생태탐방원 체험교육 등{" "}
                        </div>
                    </div>
                    <div className="IntroductionTitle">
                        <div className="IntroductionTitleSecond">
                            <div>
                                <img src="/pictures/icon1.png" />
                            </div>
                            <div>우드어스 제작품</div>
                        </div>
                        <div className="IntoductionType">
                            <div>
                                원목가구 (수납장, 책상, 테이블, 의자, 책꽃이,
                                서랍장, 옷장 등)
                            </div>
                            <div>
                                키트제품 (새집, 테블릿 거치대, 목쟁반, 미니 서랍
                                책꽂이 등)
                            </div>
                            <div>기타 목재제품</div>
                            <div className="IntoductionImage">
                                <div className="IntoductionImageCard">
                                    <img
                                        src="/pictures/about1.png"
                                        width="220px"
                                    />
                                </div>
                                <div className="IntoductionImageCard">
                                    <img
                                        src="/pictures/about2.png"
                                        width="220px"
                                    />
                                </div>
                                <div className="IntoductionImageCard">
                                    <img
                                        src="/pictures/about3.png"
                                        width="220px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Introduction;
