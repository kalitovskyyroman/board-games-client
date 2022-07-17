import { Button, Card, Divider } from "@mui/material";
import styled from "styled-components";

export const GamesContainer = styled(Card)`
    && {
        width: 500px;
        text-align: center;
    }
`;

export const Title = styled.h2`
    font-family: "Caveat", cursive;
    font-weight: bold;
    text-transform: uppercase;
`;

export const GamesSection = styled.div``;

export const GamesDivider = styled(Divider)`
    && {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const GameButton = styled(Button)`
    && {
        padding: 10px 0 10px 0;
        width: 100%;
        font-family: "Caveat", cursive;
        font-size: 1.25rem;
    }
`;
