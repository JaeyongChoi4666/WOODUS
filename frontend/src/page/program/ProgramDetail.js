import React, { useEffect } from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./ProgramDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";
import { peopleAction } from "../../redux/Actions/peopleAction";
import ProgramMoreInfo from "../../components/class/ProgramMoreInfo";

const ProgramDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const courseInfo = useSelector((state) => state.course.courseDetail);
    const student = useSelector((state) => state.people.peopleList);
    const getCourseInfo = async () => {
        dispatch(courseAction.getCourseDetail(id));
        dispatch(peopleAction.getPeople(id));
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
                                  student={student}
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
