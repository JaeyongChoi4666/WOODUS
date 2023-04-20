import React from "react";
import { Container } from "react-bootstrap";
import BoardWrite from "../board/BoardWrite";

const AddNotice = () => {
    return (
        <Container>
            <div className="addNoticeeBox">
                <div className="addNoticeTitle">공지사항 등록하기</div>
                <BoardWrite />
            </div>
        </Container>
    );
};

export default AddNotice;
