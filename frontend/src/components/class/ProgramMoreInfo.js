import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProgramMoreInfo = (props) => {
    const [day, setDay] = useState([]);
    const navigate = useNavigate();
    const detail = props.programInfo;
    const beforeWeek = detail.week;

    const enrollClass = () => {
        alert("신청하겠습니까?");
        navigate(`/class/enroll`);
    };

    const programFee = (money) => {
        return money.toLocaleString();
    };
    const fee = programFee(detail.fee);

    useEffect(() => {
        const sliceweek = [...beforeWeek];

        const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
        const result = [];

        for (let i = 0; i < sliceweek.length; i++) {
            if (sliceweek[i] === "1") {
                result.push(daysOfWeek[i]);
                result.push(" ");
            }
        }
        setDay(result);
    }, []);
    return (
        <div>
            <div className="ProgramDetail">
                <div className="DetailLeft">
                    <img
                        src={`http://woodus.net/api/images/${detail.poster_id}`}
                        width="100%"
                    />
                </div>
                <div>
                    <div className="ProgramDetailTitle">{detail.name}</div>
                    <div className="ProgramDetailInfoBox">
                        <div className="ProgramDetailInfo">
                            <div>교육 기간</div>
                            <div>
                                {detail.start_date} ~ {detail.end_date}
                            </div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>교육 요일</div>
                            <div>{day}</div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>교육 시간</div>
                            <div>
                                {detail.start_time} ~ {detail.end_time}
                            </div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>교육 장소</div>
                            <div>{detail.place}</div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>수강료 (재료비 포함)</div>
                            <div>{fee} 원</div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>교육 내용</div>
                            <div>{detail.summary}</div>
                        </div>
                        <div className="ProgramDetailInfo">
                            <div>신청 기간</div>
                            <div>~ {detail.deadline}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProgramDetailSummary">{detail.notice}</div>
            <div className="ProgramDetailButton">
                <button onClick={() => window.history.back()}>목록으로</button>
                <button onClick={() => enrollClass()}>신청하기</button>
            </div>
        </div>
    );
};

export default ProgramMoreInfo;
