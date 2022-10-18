import styled from "styled-components";

export const ConclusionContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    @media (min-width: 640px) {
        justify-content: center;
    }

    padding: 25px 10%;

    @media (min-width: 640px) {
        padding: 0 25%;
    }
`;
