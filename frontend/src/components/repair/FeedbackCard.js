import React from "react";

const FeedbackCard = (props) => {
    const feedbackData = props.props;

    const item = feedbackData?.[0];

    console.log(item);

    return (
        <div className="feedbackcardBox">
            <div className="feedbackdate">
                <div>{item?.regdate}</div>
            </div>
            <div className="feedbackName">
                <div>{item?.title}</div>
            </div>
            <div className="feedbackImageBox">
                <div className="beforeAfterBox">
                    <div className="feedbackBoxTitle">Before</div>
                    <div className="feedbackBoxImage">
                        <img
                            src={`http://woodus.net/api/images/${item?.before_id}`}
                            width="100%"
                        />
                    </div>
                </div>
                <div className="beforeAfterBox">
                    <div className="feedbackBoxTitle">After</div>
                    <div className="feedbackBoxImage">
                        <img
                            src={`http://woodus.net/api/images/${item?.after_id}`}
                            width="100%"
                        />
                    </div>
                </div>
            </div>
            <div className="feedbackcontent">{item?.content}</div>
        </div>
    );
};

export default FeedbackCard;
