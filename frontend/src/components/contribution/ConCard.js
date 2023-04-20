import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConCard = (data) => {
    const item = data.data;
    return (
        <Card className="concardbox">
            <Card.Img
                variant="top"
                src={`http://woodus.net/api/images/${item.thumbnail_id}`}
                className="cardThumbnail"
            />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="cardSummary text-truncate">
                    {item.subtitle}
                </Card.Text>
                <Card.Text className="cardDate">{item.regdate}</Card.Text>
                <Link to={`/contribution/${item.id}`}>
                    <Button variant="light" className="concardbutton">
                        더보기
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ConCard;
