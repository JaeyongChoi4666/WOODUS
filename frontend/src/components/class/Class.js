import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Classnav from "./Classnav";
import "./Class.css";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const Class = () => {
    const dispatch = useDispatch();
    const calldata = useSelector((state) => state.course.presentCourses);
    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, []);
    return (
        <div className="ClassBox">
            <Container className="ClassContainer">
                <div className="HiringProgram">모집중 프로그램</div>
                <Classnav props={calldata} class={"open"} />
            </Container>
        </div>
    );
};

export default Class;
