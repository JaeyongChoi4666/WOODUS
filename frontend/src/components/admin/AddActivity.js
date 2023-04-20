import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const AddActivity = () => {
    const [contents, setContents] = useState("");
    const [imageFile_contents1, setImageFile_contents1] = useState(null);
    const [imageFile_contents2, setImageFile_contents2] = useState(null);
    const [imageFile_contents3, setImageFile_contents3] = useState(null);
    const [imageFile_contents4, setImageFile_contents4] = useState(null);

    const handleImageChange1 = (event) => {
        setImageFile_contents1(event.target.files[0]);
    };
    const handleImageChange2 = (event) => {
        setImageFile_contents2(event.target.files[0]);
    };
    const handleImageChange3 = (event) => {
        setImageFile_contents3(event.target.files[0]);
    };
    const handleImageChange4 = (event) => {
        setImageFile_contents4(event.target.files[0]);
    };

    const handleReset = (inputId) => {
        document.getElementById(inputId).value = null;
    };

    const content = contents.replace("\n", "<br/>");
    const writer = "관리자";

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const url = "http://woodus.net/api/activity";
        const data = {
            title: title,
            content: content,
            writer: writer,
            imageFile_contents1: imageFile_contents1,
            imageFile_contents2: imageFile_contents2,
            imageFile_contents3: imageFile_contents3,
            imageFile_contents4: imageFile_contents4,
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
            <Form onSubmit={handleSubmit} className="addactivity">
                <div className="addactivityName">우리의 활동 등록</div>
                <div className="addactivityTitle">
                    <div>제목</div>
                    <input
                        type="text"
                        id="title"
                        placeholder="제목을 입력해주세요."
                    />
                </div>
                <div className="addactivityContents">
                    <div>내용</div>
                    <textarea
                        name="contents"
                        rows=""
                        cols=""
                        wrap="physical"
                        onChange={(event) => setContents(event.target.value)}
                    />
                </div>
                <div className="conaddImage">
                    <div className="addActivityImageT">사진 등록</div>
                    <div className="addActivityImage">
                        <div className="conaddImageLine addactivitypic">
                            <input
                                type="file"
                                onChange={handleImageChange1}
                                id="imageFile_contents1"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_contents1")
                                }
                            >
                                X
                            </button>
                        </div>
                        <div className="conaddImageLine addactivitypic">
                            <input
                                type="file"
                                onChange={handleImageChange2}
                                id="imageFile_contents2"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_contents2")
                                }
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div className="addActivityImage ">
                        <div className="conaddImageLine addactivitypic">
                            <input
                                type="file"
                                onChange={handleImageChange3}
                                id="imageFile_contents3"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_contents3")
                                }
                            >
                                X
                            </button>
                        </div>
                        <div className="conaddImageLine addactivitypic">
                            <input
                                type="file"
                                onChange={handleImageChange4}
                                id="imageFile_contents4"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_contents4")
                                }
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="postersubmit">
                    저장
                </button>
            </Form>
        </Container>
    );
};

export default AddActivity;
