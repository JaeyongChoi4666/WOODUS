import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Classnav from "./Classnav";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const EndClass = () => {
    const dispatch = useDispatch();
    const calldata = useSelector((state) => state.course.overCourses);
    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, []);

    return (
        <div className="ClassBox">
            <Container className="ClassContainer">
                <div className="HiringProgram">모집종료 프로그램</div>
                <Classnav props={calldata} class={"end"} />
            </Container>
        </div>
    );
};

export default EndClass;
