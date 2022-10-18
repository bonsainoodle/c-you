import styled from "styled-components";

export const CategoriesContainer = styled.div`
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

    @media (min-width: 1024px) {
        padding: 0 5%;
    }

    .categories {
        width: 100%;

        max-width: 1250px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .category {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            margin-bottom: 75px;
        }

        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }
`;
