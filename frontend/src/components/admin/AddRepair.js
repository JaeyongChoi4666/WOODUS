import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const AddRepair = () => {
    const [contents, setContents] = useState("");
    const [imageFile_before, setImageFile_before] = useState(null);
    const [imageFile_after, setImageFile_after] = useState(null);

    const handleImageChange1 = (event) => {
        setImageFile_before(event.target.files[0]);
    };
    const handleImageChange2 = (event) => {
        setImageFile_after(event.target.files[0]);
    };
    const handleReset = (inputId) => {
        document.getElementById(inputId).value = null;
    };

    const content = contents.replace("\n", "<br/>");
    const writer = "관리자";

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const url = "http://woodus.net/api/repair";
        const data = {
            title: title,
            content: content,
            writer: writer,
            imageFile_before: imageFile_before,
            imageFile_after: imageFile_after,
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
                <div className="addactivityName">가구수리소 후기 등록</div>
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
                        <div>
                            <div className="ImageType">Before</div>
                            <div className="conaddImageLine addactivitypic">
                                <input
                                    type="file"
                                    onChange={handleImageChange1}
                                    id="imageFile_before"
                                />
                                <button
                                    type="button"
                                    className="resetButton"
                                    onClick={() =>
                                        handleReset("imageFile_before")
                                    }
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="ImageType">After</div>
                            <div className="conaddImageLine addactivitypic">
                                <input
                                    type="file"
                                    onChange={handleImageChange2}
                                    id="imageFile_after"
                                />
                                <button
                                    type="button"
                                    className="resetButton"
                                    onClick={() =>
                                        handleReset("imageFile_after")
                                    }
                                >
                                    X
                                </button>
                            </div>
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

export default AddRepair;
