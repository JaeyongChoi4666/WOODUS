import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";
import "./Enroll.css";
import { useNavigate } from "react-router-dom";

const Response = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resdata = props.data;
    console.log("props", resdata);
    const courseInfo = useSelector((state) => state.course.courseDetail);
    const getCourseInfo = async () => {
        dispatch(courseAction.getCourseDetail(resdata.course_id));
    };
    useEffect(() => {
        getCourseInfo();
    }, []);

    const name = courseInfo ? courseInfo[0]?.name : null;
    const phoneNum = (number) => {
        const trimmed = number.trim();
        const first = trimmed.slice(0, 3);
        const second = trimmed.slice(3, 7);
        const third = trimmed.slice(7);
        return `${first}-${second}-${third}`;
    };

    const goList = () => {
        navigate("/class");
    };

    return (
        <div className="responseBox">
            <div className="responseInBox">
                <div>
                    <div>과정명</div>
                    <div>{name}</div>
                </div>
                <div>
                    <div>이름</div>
                    <div>{resdata.stu_name}</div>
                </div>
                <div>
                    <div>전화번호</div>
                    <div>{phoneNum(resdata.stu_phone)}</div>
                </div>
                <div>
                    <div>주소</div>
                    <div>{resdata.stu_address}</div>
                </div>
                <button onClick={goList}>목록으로</button>
            </div>
        </div>
    );
};

export default Response;
