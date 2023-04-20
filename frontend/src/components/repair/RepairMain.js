import React from "react";
import { Container } from "react-bootstrap";
import "./RepairMain.css";

const RepairMain = () => {
    return (
        <div className="RepairMainBox">
            <Container>
                <div>
                    <img
                        src="/pictures/repairtitle.png
                    "
                        width="100%"
                    ></img>
                    <div className="RepairWord">버리지말고 고쳐서 사용해요</div>
                    <div className="RepairInfo">
                        <div>- 모집기간 : 상시</div>
                        <div>- 운영시간 : 09:00 ~ 16:00</div>
                        <div>
                            - 가구수리소 : 서울시 성동구 용답중앙11길 13
                            어울림빌딩 지하1층
                        </div>
                        <div>
                            - 신청 & 문의 : 김남숙 &#40; 010-9559-4025 &#41;
                        </div>
                    </div>
                    <div className="RepairEx">
                        <div className="RepairCardBox">
                            <div className="RepairCard">
                                <div>Before</div>
                                <img
                                    src="/pictures/repairBefore1.png"
                                    width="80%"
                                />
                            </div>
                            <div className="RepairCard">
                                <div>After</div>
                                <img
                                    src="/pictures/repairAfter1.png"
                                    width="80%"
                                />
                            </div>
                        </div>
                        <div className="RepairContents">
                            <div>수리내용</div>
                            <div className="RepairList">
                                <div>
                                    - 의자시트 교환 &#40; 패브릭 &rarr;가죽
                                    &#41;
                                </div>
                                <div>- 의자 다리 페인팅 보수</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RepairMain;
