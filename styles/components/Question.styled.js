import styled from "styled-components";

export const QuestionContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 25px 10%;

    background-color: ${(props) =>
        props.answered ? (props.correctAnswer ? "#2aa11d" : "#C0001a") : ""};

    @media (min-width: 640px) {
        padding: 0 25%;
    }

    .buttons {
        display: flex;
        flex-direction: column;

        button {
            margin-bottom: 10px;
        }

        @media (min-width: 640px) {
            flex-direction: row;

            button {
                margin: 0 10px;
            }
        }
    }
`;
