import React, { useEffect } from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import Footer from "../Footer";
import BoardView from "../board/BoardView";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardAction } from "../../redux/Actions/boardAction";
import { Container } from "react-bootstrap";

const NoticeContent = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const boardDetail = useSelector((state) => state.board.noticeDetail);
    const getBoardDetail = async () => {
        dispatch(boardAction.getBoardDetail(id));
    };
    useEffect(() => {
        getBoardDetail();
    }, []);

    const item = boardDetail?.[0];
    console.log("boardDetail", item);
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <div className="ViewPosition">
                <Container>
                    <BoardView data={item} />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default NoticeContent;
