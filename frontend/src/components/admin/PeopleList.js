import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";
import ListForm from "./ListForm";

const PeopleList = () => {
    const [courseId, setCourseId] = useState(null);
    const [courseName, setCourseName] = useState(null);
    const dispatch = useDispatch();
    const presentCourses = useSelector((state) => state.course.presentCourses);
    const overCourses = useSelector((state) => state.course.overCourses);

    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, [dispatch]);

    const handleClick = () => {
        const selectedCourseId = document.querySelector(
            'select[name="course_id"] option:checked'
        ).value;
        const selectedCourseName = document.querySelector(
            'select[name="course_id"] option:checked'
        ).text;
        setCourseId(selectedCourseId);
        setCourseName(selectedCourseName);
    };

    return (
        <>
            <Form className="peopleListform">
                <div>프로그램 이름</div>
                <select name="course_id">
                    {Array.isArray(presentCourses)
                        ? presentCourses.map((course) => (
                              <option key={course.id} value={course.id}>
                                  {course.name}
                              </option>
                          ))
                        : []}
                    {Array.isArray(overCourses)
                        ? overCourses.map((course) => (
                              <option key={course.id} value={course.id}>
                                  {course.name}
                              </option>
                          ))
                        : []}
                </select>
                <Button onClick={handleClick}>검색</Button>
            </Form>
            {courseId && <ListForm id={courseId} name={courseName} />}
        </>
    );
};

export default PeopleList;
