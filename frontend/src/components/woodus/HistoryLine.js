import React from "react";
import { Container } from "react-bootstrap";
import "./HistoryLine.css";

const HistoryLine = (props) => {
    const historyContents = props.content;

    return (
        <div className="historyBox">
            <Container>
                <div className="historyTitle">
                    우드어스 사회적 협동조합이 걸어온 길
                </div>
                <div className="historyContent">
                    {historyContents.map((item) => (
                        <div key={item.id} className="historyContentBox">
                            <div className="historyIcon">
                                <img src="/pictures/icon2.png" />
                                <div>{item.year}</div>
                            </div>
                            <div className="historyContents">
                                {item.contentList.map((list) => (
                                    <div key={list.id}>- {list.content}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default HistoryLine;
