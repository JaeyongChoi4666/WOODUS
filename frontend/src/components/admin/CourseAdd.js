import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Admin.css";
import post from "axios";
import axios from "axios";

const CourseAdd = () => {
    const preventKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const weekBinary = [
            Number(event.target.elements.week[0].checked),
            Number(event.target.elements.week[1].checked),
            Number(event.target.elements.week[2].checked),
            Number(event.target.elements.week[3].checked),
            Number(event.target.elements.week[4].checked),
            Number(event.target.elements.week[5].checked),
            Number(event.target.elements.week[6].checked),
        ];
        const weekcode = weekBinary.join("");
        console.log("week", weekcode);
        const name = document.getElementById("name").value;
        const type = document.querySelector('input[name="type"]:checked').value;
        const fee = document.getElementById("fee").value;
        const num_people = document.getElementById("num_people").value;
        const start_date = document.getElementById("startdate").value;
        const end_date = document.getElementById("enddate").value;
        const start_time = document.getElementById("starttime").value;
        const end_time = document.getElementById("endtime").value;
        const week = document.querySelectorAll('input[id="week"]:checked');
        const place = document.getElementById("place").value;
        const deadline = document.getElementById("deadline").value;
        const summary = document.getElementById("summary").value;
        const notice = document.getElementById("notice").value;

        const submitServer = () => {
            const url = "http://woodus.net/api/course";
            const data = {
                name: name,
                fee: fee,
                num_people: num_people,
                deadline: deadline,
                start_date: start_date,
                end_date: end_date,
                start_time: start_time,
                end_time: end_time,
                summary: summary,
                place: place,
                week: weekcode,
                type: type,
                notice: notice,
            };

            const config = { "Content-Type": "application/json" };
            axios
                .post(url, data, config)
                .then((res) => {
                    // 성공 처리
                    console.log("잘 보내짐", res);
                    alert("저장되었습니다.");
                })
                .catch((err) => {
                    // 에러 처리
                    console.log(err.response.data.message); // --> 서버단 에러메세지 출력~
                });
        };

        if (
            !name ||
            type.length === 0 ||
            !fee ||
            !num_people ||
            !start_date ||
            !end_date ||
            !start_time ||
            !end_time ||
            !place ||
            !deadline ||
            !summary ||
            !notice
        ) {
            alert("빈 칸을 채워주세요.");
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
                className="CourseAddForm"
            >
                <div>
                    <div>프로그램명</div>
                    <input type="text" id="name" placeholder="프로그램 이름" />
                </div>
                <div>
                    <div>프로그램 종류</div>
                    <div className="checkBoxType">
                        <input type="radio" name="type" value="edu" />
                        <label>교육</label>
                        <input type="radio" name="type" value="exp" />
                        <label>체험</label>
                    </div>
                </div>
                <div>
                    <div>수강료</div>
                    <input type="number" id="fee" placeholder="수강료" />
                </div>
                <div>
                    <div>수강인원</div>
                    <input
                        type="number"
                        id="num_people"
                        placeholder="수강 인원"
                    />
                </div>
                <div className="startTime">
                    <div>프로그램 시작일</div>
                    <input
                        type="date"
                        id="startdate"
                        min={new Date().toISOString().split("T")[0]}
                    />
                </div>
                <div className="endTime">
                    <div>프로그램 종료일</div>
                    <input
                        type="date"
                        id="enddate"
                        min={new Date().toISOString().split("T")[0]}
                    />
                </div>
                <div className="startTime">
                    <div>프로그램 시작시간</div>
                    <input
                        type="time"
                        id="starttime"
                        step="1800"
                        time24="true"
                    />
                </div>
                <div className="endTime">
                    <div>프로그램 종료시간</div>
                    <input type="time" id="endtime" step="1800" time24="true" />
                </div>
                <div>
                    <div>프로그램 요일</div>
                    <div className="checkBoxDay">
                        <input type="checkbox" id="week" value="mon" />
                        <label>월</label>
                        <input type="checkbox" id="week" value="tue" />
                        <label>화</label>
                        <input type="checkbox" id="week" value="wed" />
                        <label>수</label>
                        <input type="checkbox" id="week" value="thu" />
                        <label>목</label>
                        <input type="checkbox" id="week" value="fri" />
                        <label>금</label>
                        <input type="checkbox" id="week" value="sat" />
                        <label>토</label>
                        <input type="checkbox" id="week" value="sun" />
                        <label>일</label>
                    </div>
                </div>
                <div>
                    <div>프로그램 장소</div>
                    <input type="text" id="place" placeholder="교육 장소" />
                </div>
                <div>
                    <div>신청 마감일</div>
                    <input
                        type="date"
                        id="deadline"
                        min={new Date().toISOString().split("T")[0]}
                    />
                </div>

                <div>
                    <div>교육내용</div>
                    <input
                        type="text"
                        id="summary"
                        placeholder="교육내용 한줄요약"
                    />
                </div>
                <div>
                    <div>전달사항</div>
                    <input
                        type="textarea"
                        cols="20"
                        rows="3"
                        id="notice"
                        className="CourseAddNotice"
                        placeholder="안내사항"
                    />
                </div>
                <button type="submit" className="submitbutton">
                    저장
                </button>
            </Form>
        </Container>
    );
};

export default CourseAdd;
