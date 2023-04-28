import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerBox">
            <Container className="footerInBox">
                <div className="footerRightBox">
                    <div className="rightFirst">
                        <div className="linktag">개인정보 처리 방침</div>
                        <Link to="/adminLog" className="linktag">
                            <div>관리자코드</div>
                        </Link>
                    </div>
                    <div className="rightSecond">
                        <div>우드어스 사회적협동조합</div>
                        <div>이사장 : 나유숙</div>
                        <div>
                            사업자 등록번호 : 776-82-00307 (제조업,
                            교육서비스업)
                        </div>
                        <div>
                            주소 : 서울특별시 성동구 용답중앙11길 13 어울림빌딩
                            지하1층
                        </div>
                        <div>Tel : 02 - 3394 - 5525</div>
                        <div>e-mail : master@woodus.net</div>
                        <div>Copyright ©WOODUS ALL RIGHTS RESERVED. </div>
                    </div>
                </div>
                <div className="Second">
                    <img src="/pictures/woodus-logo.png" width="100px" />
                    <div className="contactLogo">
                        <div>
                            <a
                                href="http://pf.kakao.com/_taxbxkxj"
                                target="_blank"
                            >
                                <img
                                    src="/pictures/kakaochannel.png"
                                    width="100%"
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://band.us/@wdus" target="_blank">
                                <img src="/pictures/naverband.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
