import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./Board.css";
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const BoardList = (props) => {
    const boardList = props.props;

    const location = useLocation();
    const navigate = useNavigate();
    const [movePage, setMovePage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    let currentPosts = [];
    if (Array.isArray(boardList)) {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        const nowPath = location.pathname;
        const slicePath = nowPath.split("/").filter(Boolean);

        if (slicePath[0] == "repair") {
            setMovePage("/repair/feedback/");
        } else if (slicePath[0] == "community") {
            if (slicePath[1] == "notice") {
                setMovePage("/community/notice/");
            } else {
                setMovePage("/community/");
            }
        }
    }, []);
    const goDetail = (id) => {
        if (movePage) {
            return `${movePage}${id}`;
        } else {
            return `${movePage}`; // Replace with your actual detail page URL path
        }
    };
    return (
        <div className="boardListBox">
            <Container className="boardListTableBox">
                <div className="boarListTablePostion">
                    <Table className="boardListTable">
                        <thead>
                            <tr>
                                <th className="boardno">No.</th>
                                <th className="boardtitle">제목</th>
                                <th className="boarddate">등록일</th>
                                <th className="boardwriter">작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.map((board, index) => (
                                <tr
                                    key={board.id}
                                    onClick={() => navigate(goDetail(board.id))}
                                >
                                    <th scope="row" className="boardno">
                                        {index + 1}
                                    </th>
                                    <td className="boardtitle">
                                        {board.title}
                                    </td>
                                    <td className="boarddate">
                                        {board.regdate}
                                    </td>
                                    <td className="boardwriter">
                                        {board.writer}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={boardList?.length}
                    paginate={paginate}
                />
            </Container>
        </div>
    );
};

export default BoardList;
