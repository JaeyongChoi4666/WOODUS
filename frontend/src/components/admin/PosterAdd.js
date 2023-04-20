import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const PosterAdd = () => {
    const [imageFile_thumbnail, setImageFile_thumbnail] = useState(null);
    const [imageFile_poster, setImageFile_poster] = useState(null);
    const dispatch = useDispatch();
    const presentCourses = useSelector((state) => state.course.presentCourses);

    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, [dispatch]);

    const handleThumbnailChange = (event) => {
        setImageFile_thumbnail(event.target.files[0]);
    };

    const handlePosterChange = (event) => {
        setImageFile_poster(event.target.files[0]);
    };

    console.log("썸네일", imageFile_thumbnail);
    console.log("포스터", imageFile_poster);

    const handleSubmit = (event) => {
        event.preventDefault();
        const course_id = document.querySelector(
            'select[name="course_id"] option:checked'
        ).value;
        const url = "http://woodus.net/api/images/register";
        const data = {
            course_id: course_id,
            imageFile_thumbnail: imageFile_thumbnail,
            imageFile_poster: imageFile_poster,
        };
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        axios
            .post(url, data, config)
            .then((response) => {
                console.log(response);
                alert("저장되었습니다.");
            })
            .catch((err) => {
                console.log(err.response.data.message); // --> 서버단 에러메세지 출력~;
            });
        console.log("data", data);
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit} className="posteraddForm">
                <div className="posteraddCourseName">
                    <div>프로그램 이름</div>
                    <select name="course_id">
                        {Array.isArray(presentCourses)
                            ? presentCourses.map((course) => (
                                  <option key={course.id} value={course.id}>
                                      {course.name}
                                  </option>
                              ))
                            : []}
                    </select>
                </div>
                <div className="posteraddImage">
                    <div>카드 사진</div>
                    <input
                        type="file"
                        onChange={handleThumbnailChange}
                        id="imageFile_Thumbnail"
                    />
                </div>
                <div className="posteraddImage">
                    <div>포스터 사진</div>
                    <input
                        type="file"
                        onChange={handlePosterChange}
                        id="imageFile_poster"
                    />
                </div>
                <button type="submit" className="postersubmit">
                    저장
                </button>
            </Form>
        </Container>
    );
};

export default PosterAdd;
