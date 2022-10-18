import styled from "styled-components";

export const StyledTitle = styled.h1`
    position: relative;

    font-size: 2.5rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;

    margin-bottom: 10px;

    @media (min-width: 640px) {
        font-size: 3rem;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        font-size: 4rem;
    }
`;

export const StyledSubtitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;

    margin-bottom: 50px;

    @media (min-width: 1024px) {
        font-size: 2rem;
        margin-bottom: 75px;
    }
`;

export const StyledParagraph = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Jura", sans-serif;
    line-height: 25px;

    margin-bottom: 50px;

    text-align: center;
`;

export const StyledLink = styled.a`
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Jura", sans-serif;

    padding: 15px 100px;

    background: linear-gradient(92.61deg, #006775 20.37%, #007549 93.96%);
    border-radius: 15px;
`;

export const StyledButton = styled.button`
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Jura", sans-serif;

    padding: 15px 100px;

    background: ${(props) =>
        props.question
            ? "none"
            : "linear-gradient(92.61deg, #006775 20.37%, #007549 93.96%);"};

    border-radius: 15px;

    outline: none;
    border: ${(props) => (props.question ? "2px solid white" : "")};
    color: white;
`;

export const StyledBlob = styled.div`
    background: plum;

    width: 300px;
    height: 190px;

    margin-bottom: 25px;

    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;

    overflow: hidden;

    animation: morph 3s linear infinite;

    @keyframes morph {
        0%,
        100% {
            border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
        }
        34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
        }
        67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
        }
    }
`;

export const StyledImage = styled.img`
    width: 300px;
`;
