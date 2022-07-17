import { Route, Routes } from "react-router-dom";
import PathsEnum from "../enums/PathsEnum";
import Games from "../pages/Games/Games";
import Main from "../pages/Main/Main.page";

const AllRoutes = () => (
    <Routes>
        <Route element={<Games />} path={PathsEnum.Games} />
        <Route element={<Main />} path={PathsEnum.Default} />
    </Routes>
);

export default AllRoutes;
