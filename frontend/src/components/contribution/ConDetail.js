import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ConDetail = (props) => {
    const navigate = useNavigate();
    const goList = () => {
        navigate("/scontribution");
    };

    const item = props.detail;

    return (
        <div className="contributionBox">
            <Container>
                <div className="conDetailBox">
                    <div className="conDetailTitle">
                        <div>{item?.title}</div>
                        <div>{item?.subtitle}</div>
                    </div>
                    <div className="conDetailDate">
                        <span>작성일</span>
                        <span>{item?.regdate}</span>
                    </div>
                    <div className="conDetailImage">
                        {item?.contents1_id ? (
                            <div>
                                <img
                                    src={`http://woodus.net/api/images/${item?.contents1_id}`}
                                />
                            </div>
                        ) : null}
                        {item?.contents2_id ? (
                            <div>
                                <img
                                    src={`http://woodus.net/api/images/${item?.contents2_id}`}
                                />
                            </div>
                        ) : null}
                        {item?.contents3_id ? (
                            <div>
                                <img
                                    src={`http://woodus.net/api/images/${item?.contents3_id}`}
                                />
                            </div>
                        ) : null}
                        {item?.contents4_id ? (
                            <div>
                                <img
                                    src={`http://woodus.net/api/images/${item?.contents4_id}`}
                                />
                            </div>
                        ) : null}
                        {item?.contents5_id ? (
                            <div>
                                <img
                                    src={`http://woodus.net/api/images/${item?.contents5_id}`}
                                />
                            </div>
                        ) : null}
                    </div>
                    <button
                        className="concardbutton conDetailButton"
                        onClick={goList}
                    >
                        목록으로
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default ConDetail;
