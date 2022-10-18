import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories } from "../../config/data";
import {
    StyledButton,
    StyledParagraph,
    StyledSubtitle,
    StyledTitle,
} from "../../styles/components/Components.styled";
import { ConclusionContainer } from "../../styles/components/ConclusionContainer.styled";

const conclusion = () => {
    const router = useRouter();
    const { category } = router.query;

    const categoryLowerCase = category.toLowerCase();

    const [categoryData, setCategoryData] = useState(null);

    const [score, setScore] = useState(null);
    const [maxScore, setMaxScore] = useState(null);

    useEffect(() => {
        setScore(parseInt(localStorage.getItem("score")));

        setMaxScore(parseInt(localStorage.getItem("maxScore")));

        if (categoryLowerCase) {
            setCategoryData(categories[categoryLowerCase]);
        }
    }, [categoryLowerCase]);

    function handleClick() {
        localStorage.removeItem("score");
        localStorage.removeItem("maxScore");

        router.push("/");
    }

    return (
        <ConclusionContainer>
            {categoryData && (
                <>
                    <StyledTitle>Merci d'avoir participé!</StyledTitle>
                    <StyledSubtitle>
                        Votre score est de{" "}
                        <span style={{ textDecoration: "underline" }}>
                            {score} / {maxScore}
                        </span>
                    </StyledSubtitle>
                    <StyledParagraph>{categoryData.conclusion}</StyledParagraph>
                    <StyledButton type="button" onClick={handleClick}>
                        Retour à l'accueil
                    </StyledButton>
                </>
            )}
        </ConclusionContainer>
    );
};

export const getServerSideProps = async (ctx) => {
    const { category } = ctx.query;

    const categoryLowerCase = category.toLowerCase();

    if (!Object.keys(categories).includes(categoryLowerCase)) {
        return {
            notFound: true,
        };
    }

    return {
        props: {},
    };
};

export default conclusion;
