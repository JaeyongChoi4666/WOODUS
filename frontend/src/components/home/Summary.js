import React from "react";
import { Container } from "react-bootstrap";
import "./Summary.css";

const summary = () => {
    return (
        <div className="summaryBox">
            <Container className="summaryInBox">
                <img src="/pictures/allaround.png" width="60%" />
                <div className="summaryAboutBox">
                    <div className="summaryAbout">About</div>
                    <div className="summaryContents">
                        <div>
                            우리의 손길을 거쳐 버려진 가치들이 되살아납니다.
                            목재들은 화분이 되고, 의자가 되고, 선반이 되어
                            세상으로 나옵니다.
                        </div>
                        <div>변화할 수 있는 것은 물건만이 아닙니다.</div>
                        <div>
                            우드어스 사회적 협동조합은 새로운 생각과 새로운
                            가치부여로 세상을 바꿉니다.
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default summary;
