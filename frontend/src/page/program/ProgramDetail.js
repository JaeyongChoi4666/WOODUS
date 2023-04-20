import React, { useEffect } from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./ProgramDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";
import ProgramMoreInfo from "../../components/class/ProgramMoreInfo";

const ProgramDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const courseInfo = useSelector((state) => state.course.courseDetail);
    const getCourseInfo = async () => {
        dispatch(courseAction.getCourseDetail(id));
    };
    useEffect(() => {
        getCourseInfo();
    }, []);

    return (
        <div>
            <Menubar />
            <div className="ProgramDetailBox">
                <Container>
                    {Array.isArray(courseInfo)
                        ? courseInfo.map((cardItem) => (
                              <ProgramMoreInfo
                                  key={cardItem.id}
                                  programInfo={cardItem}
                              />
                          ))
                        : []}
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default ProgramDetail;
