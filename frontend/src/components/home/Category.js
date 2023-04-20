import React from "react";
import { Container } from "react-bootstrap";
import "./Category.css";

const Category = () => {
    return (
        <div>
            <img src="/pictures/banner-1.png" width="100%" />
            <div className="categoryBox">
                <Container className="categoryInBox">
                    <div className="categoryCard">
                        <img
                            src="/pictures/first.png"
                            className="categoryImage"
                        />
                        <div className="categoryContents">
                            <div>자투리 목재를 활용하여</div>
                            <div>생활소품 만들기</div>
                        </div>
                    </div>
                    <div className="categoryCard">
                        <img
                            src="/pictures/second.png"
                            width="330px"
                            className="categoryImage"
                        />
                        <div className="categoryContents">
                            <div>가구제작기능사 & 도장기능사</div>
                            <div>자격증 교육</div>
                        </div>
                    </div>
                    <div className="categoryCard">
                        <img
                            src="/pictures/third.png"
                            width="330px"
                            className="categoryImage"
                        />
                        <div className="categoryContents">
                            <div>폐가구 리폼 & 가구 수리소</div>
                            <div>가구 맞춤제작</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Category;
