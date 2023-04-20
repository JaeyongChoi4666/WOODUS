import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const AddContribution = () => {
    const [subtitle, setSubtitle] = useState("");
    const [imageFile_thumbnail, setImageFile_thumbnail] = useState(null);
    const [imageFile_contents1, setImageFile_contents1] = useState(null);
    const [imageFile_contents2, setImageFile_contents2] = useState(null);
    const [imageFile_contents3, setImageFile_contents3] = useState(null);
    const [imageFile_contents4, setImageFile_contents4] = useState(null);
    const [imageFile_contents5, setImageFile_contents5] = useState(null);

    const handleThumbnailChange = (event) => {
        setImageFile_thumbnail(event.target.files[0]);
    };
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
    const handleImageChange5 = (event) => {
        setImageFile_contents5(event.target.files[0]);
    };

    const handleReset = (inputId) => {
        document.getElementById(inputId).value = null;
        if (inputId == "imageFile_contents1") {
            setImageFile_contents1(null);
        } else if (inputId == "imageFile_contents2") {
            setImageFile_contents2(null);
        } else if (inputId == "imageFile_contents3") {
            setImageFile_contents3(null);
        } else if (inputId == "imageFile_contents4") {
            setImageFile_contents4(null);
        } else if (inputId == "imageFile_contents5") {
            setImageFile_contents5(null);
        } else if (inputId == "imageFile_thumbnail") {
            setImageFile_thumbnail(null);
        }
    };

    const preventKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;

        const submitServer = () => {
            const url = "http://woodus.net/api/contribution";
            const data = {
                title: title,
                subtitle: subtitle,
                imageFile_thumbnail: imageFile_thumbnail,
                imageFile_contents1: imageFile_contents1,
                imageFile_contents2: imageFile_contents2,
                imageFile_contents3: imageFile_contents3,
                imageFile_contents4: imageFile_contents4,
                imageFile_contents5: imageFile_contents5,
            };
            const config = {
                headers: { "Content-Type": "multipart/form-data" },
            };
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

        if (!title || !subtitle || !imageFile_thumbnail) {
            alert("빈칸을 채워주세요!");
            return;
        } else {
            submitServer();
            console.log(submitServer.data);
        }
    };

    return (
        <Container>
            <Form
                onSubmit={handleSubmit}
                onKeyPress={preventKey}
                className="conForm"
            >
                <div className="conName">기업사회공헌 등록</div>
                <div className="conTitle">
                    <div>제목</div>
                    <input
                        type="text"
                        id="title"
                        placeholder="제목을 입력해주세요."
                    />
                </div>
                <div className="consubTitle">
                    <div>부제목 및 간단요약</div>
                    <textarea
                        name="contents"
                        rows=""
                        cols="2"
                        wrap="physical"
                        placeholder="30자 이내로 작성해주세요."
                        onChange={(event) => setSubtitle(event.target.value)}
                    />
                </div>
                <div className="conaddImage">
                    <div className="conaddImageLine">
                        <div className="addActivityImageT">메인 사진</div>
                        <div className="addActivityImage">
                            <input
                                type="file"
                                onChange={handleThumbnailChange}
                                id="imageFile_Thumbnail"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_Thumbnail")
                                }
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="conaddImage">
                    <div className="addActivityImageT">사진 등록</div>
                    <div className="addActivityImage">
                        <div className="conaddImageLine addactivitypic">
                            <div className="conaddImagenum">1</div>
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
                            <div className="conaddImagenum">2</div>
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
                            <div className="conaddImagenum">3</div>
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
                            <div className="conaddImagenum">4</div>
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
                    <div className="addActivityImage addActivityImageLast">
                        <div className="conaddImageLine addactivitypic">
                            <div className="conaddImagenum">5</div>
                            <input
                                type="file"
                                onChange={handleImageChange5}
                                id="imageFile_contents5"
                            />
                            <button
                                type="button"
                                className="resetButton"
                                onClick={() =>
                                    handleReset("imageFile_contents5")
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

export default AddContribution;
