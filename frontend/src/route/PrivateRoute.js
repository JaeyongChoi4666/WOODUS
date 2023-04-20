import React from "react";
import CourseAdd from "../components/admin/CourseAdd";
import AdminLog from "../page/admin/AdminLog";
import { Navigate } from "react-router-dom";
import Admin from "../page/admin/Admin";

const PrivateRoute = ({ authenticate }) => {
    return authenticate == true ? <Admin /> : <Navigate to="/adminLog" />;
};

export default PrivateRoute;
