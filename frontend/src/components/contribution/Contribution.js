import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConCard from "./ConCard";
import "./Contribution.css";
import { useDispatch, useSelector } from "react-redux";
import { contributionAction } from "../../redux/Actions/contributionAction";
import Pagination from "../board/Pagination";

const Contribution = () => {
    const dispatch = useDispatch();
    const conList = useSelector((state) => state.con.contribution);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    let currentPosts = [];
    if (Array.isArray(conList)) {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        currentPosts = conList.slice(indexOfFirstPost, indexOfLastPost);
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        dispatch(contributionAction.getContribution());
    }, []);
    return (
        <div className="contributionBox">
            <Container>
                <div className="contributionTitle">기업사회공헌</div>
                <Row xs={1} sm={2} lg={3}>
                    {Array.isArray(conList)
                        ? currentPosts.map((cardItem) => (
                              <Col
                                  key={cardItem.id}
                                  className="contributionCard"
                              >
                                  <ConCard data={cardItem} />
                              </Col>
                          ))
                        : []}
                </Row>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={conList?.length}
                    paginate={paginate}
                />
            </Container>
        </div>
    );
};

export default Contribution;
