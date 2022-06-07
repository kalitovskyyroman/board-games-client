import { Route, Routes, Navigate } from "react-router-dom";
import PathsEnum from "../enums/PathsEnum";
import Games from "../pages/Games/Games";

const AllRoutes = () => (
    <Routes>
        <Route element={<Games />} path={PathsEnum.Games} />
        <Route element={<Navigate to={PathsEnum.Games} />} path={PathsEnum.Default} />
    </Routes>
);

export default AllRoutes;
