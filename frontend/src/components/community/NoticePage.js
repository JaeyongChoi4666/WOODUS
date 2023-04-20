import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./community.css";
import BoardList from "../board/BoardList";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/Actions/boardAction";

const NoticePage = () => {
    const dispatch = useDispatch();
    const noticeData = useSelector((state) => state.board.noticeList);
    useEffect(() => {
        dispatch(boardAction.getBoardList());
    }, []);
    console.log(noticeData);
    return (
        <div className="noticeBox">
            <Container>
                <div className="noticeTitle">공지사항</div>
            </Container>
            <BoardList props={noticeData} />
        </div>
    );
};

export default NoticePage;
