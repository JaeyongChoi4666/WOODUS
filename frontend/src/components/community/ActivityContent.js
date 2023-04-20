import React, { useEffect } from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import BoardView from "../board/BoardView";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardAction } from "../../redux/Actions/boardAction";

const ActivityContent = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const activityDetail = useSelector((state) => state.board.activityDetail);
    const getActivityDetail = () => {
        dispatch(boardAction.getBoardDetail(id));
    };
    useEffect(() => {
        getActivityDetail();
    }, []);
    const item = activityDetail?.[0];
    console.log(item);
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

export default ActivityContent;
