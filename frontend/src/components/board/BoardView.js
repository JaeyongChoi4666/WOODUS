import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BoardView = (props) => {
    const location = useLocation();
    const [goList, setGoList] = useState();
    const navigate = useNavigate();
    const item = props.data;
    const nowPath = location.pathname;
    const slicePath = nowPath.split("/").filter(Boolean);
    useEffect(() => {
        if (slicePath[1] == "notice") {
            setGoList("/community/notice");
        } else {
            setGoList("/community");
        }
    }, []);
    const clickList = () => {
        navigate(`${goList}`);
    };

    const text = item?.content;

    return (
        <div className="BoardViewBox">
            <div className="BoardViewInfo">
                <div className="BoardViewWriter">
                    <span>작성자 : </span>
                    <span>{item?.writer}</span>
                </div>
                <div className="BoardViewDate">
                    <span>작성일 : </span>
                    <span>{item?.regdate}</span>
                </div>
            </div>
            <div className="BoardViewTitle">
                <h3>{item?.title}</h3>
            </div>
            <div className="BoardViewContent">
                {slicePath[1] == "notice" ? (
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                ) : (
                    <div>{text}</div>
                )}
                <div className="BoardViewImage">
                    {item?.contents1_id ? (
                        <div>
                            <img
                                src={`http://woodus.net/api/images/${item?.contents1_id}`}
                            />
                        </div>
                    ) : null}
                    {item?.contents2_id ? (
                        <div>
                            <img
                                src={`http://woodus.net/api/images/${item?.contents2_id}`}
                            />
                        </div>
                    ) : null}
                    {item?.contents3_id ? (
                        <div>
                            <img
                                src={`http://woodus.net/api/images/${item?.contents3_id}`}
                            />
                        </div>
                    ) : null}
                    {item?.contents4_id ? (
                        <div>
                            <img
                                src={`http://woodus.net/api/images/${item?.contents4_id}`}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            <button className="clientsubmitButton" onClick={clickList}>
                목록으로
            </button>
        </div>
    );
};

export default BoardView;
