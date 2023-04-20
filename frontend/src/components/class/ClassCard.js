import React, { useEffect, useState } from "react";
import "./Class.css";
import { useNavigate } from "react-router-dom";

const ClassCard = (props) => {
    const navigate = useNavigate();
    const [finish, setFinish] = useState(false);
    const recruite = props.recruiting;
    const showDetail = (id) => {
        if (recruite !== "end") {
            navigate(`/class/${id}`);
        }
    };
    useEffect(() => {
        if (recruite === "open") {
            setFinish(false);
        } else if (recruite === "end") {
            setFinish(true);
        }
    }, []);

    const detailInfo = props.listDetail;
    const category = props.click;

    console.log("detailInfo", detailInfo);

    if (
        category === "All" ||
        (category === "Edu" && detailInfo.type === "edu") ||
        (category === "Exp" && detailInfo.type === "exp")
    ) {
        return (
            <div
                className={finish ? "ClassCardBoxEnd" : "ClassCardBox"}
                onClick={() => showDetail(detailInfo.id)}
            >
                <div className="CardImageBack">
                    <img
                        src={`http://woodus.net/api/images/${detailInfo.thumbnail_id}`}
                        width="100%"
                    />
                </div>

                {detailInfo.type == "edu" ? (
                    <div>
                        <div className="ClassType edu">교육</div>
                    </div>
                ) : (
                    <div>
                        <div className="ClassType exp">체험</div>
                    </div>
                )}

                <div className="ClassName">{detailInfo.name}</div>
                <div className="ClassDetail">
                    <div>교육기간</div>
                    <div>
                        {detailInfo.start_date} ~ {detailInfo.end_date}
                    </div>
                </div>
                <div className="ClassDetail">
                    <div>교육시간</div>
                    <div>
                        {detailInfo.start_time} ~ {detailInfo.end_time}
                    </div>
                </div>
                <div className="ClassDetail">
                    <div>모집정원</div>
                    <div>{detailInfo.num_people}</div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ClassCard;
