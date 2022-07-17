import { CardContent } from "@mui/material";
import Divider from "@mui/material/Divider";

import * as Pages from "../styles";
import * as S from "./styles";

const games = [{ name: "Настолка 1" }];

const Games = () => (
    <Pages.Page>
        <S.GamesContainer elevation={5}>
            <CardContent>
                <S.Title>вибери настолку</S.Title>
                <S.GamesDivider />
                <S.GamesSection>
                    {games.map(game => (
                        <S.GameButton key={game.name}>{game.name}</S.GameButton>
                    ))}
                </S.GamesSection>
            </CardContent>
        </S.GamesContainer>
    </Pages.Page>
);

export default Games;
