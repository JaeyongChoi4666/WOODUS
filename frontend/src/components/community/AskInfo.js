import React from "react";
import "./community.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const AskInfo = () => {
    return (
        <div className="askBox">
            <Container>
                <div className="askLogo">
                    <img src="/pictures/woodus-logo.png" width="100%" />
                </div>
                <div className="askWord">
                    QnA 게시판에서 답을 얻지 못하신 분들은 아래 방법으로 문의
                    바랍니다.
                </div>
                <div className="askWay">
                    <div className="askPhone">
                        <FontAwesomeIcon icon={faPhone} />
                        <div>02 &#41; 1234 - 5678</div>
                    </div>
                    <div>
                        <a href="http://pf.kakao.com/_WIJDxj" target="_blank">
                            <img src="/pictures/kakaochannel.png" />
                        </a>
                        <a
                            href="http://pf.kakao.com/_WIJDxj/chat"
                            target="_blank"
                        >
                            <img src="/pictures/kakaochannelchat.png" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AskInfo;
