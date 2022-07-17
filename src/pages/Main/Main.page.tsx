import { Link } from "react-router-dom";
import PathsEnum from "../../enums/PathsEnum";

const Main = () => (
    <div>
        main
        <Link to={PathsEnum.Games}>
            <button>Select game</button>
        </Link>
    </div>
);

export default Main;
