import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories, questions } from "../../config/data";
import {
    StyledButton,
    StyledParagraph,
    StyledTitle,
} from "../../styles/components/Components.styled";
import { QuestionContainer } from "../../styles/components/Question.styled";

const Question = () => {
    const router = useRouter();
    const { category, id } = router.query;

    const categoryLowerCase = category.toLowerCase();

    const [question, setQuestion] = useState(null);
    const [maxQuestionId, setMaxQuestionId] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    useEffect(() => {
        if (id && categoryLowerCase) {
            if (id === "0") {
                localStorage.setItem("score", 0);
                localStorage.setItem(
                    "maxScore",
                    questions[categoryLowerCase].length
                );
            }

            setQuestion(questions[categoryLowerCase][id]);
            setMaxQuestionId(questions[categoryLowerCase].length - 1);
        }
    }, [id, categoryLowerCase]);

    function handleAnswer(answer) {
        setAnswered(true);

        const score = parseInt(localStorage.getItem("score"));

        if (question.type === "TF") {
            if (answer === question.answer) {
                setCorrectAnswer(true);

                localStorage.setItem("score", score + 1);
            } else {
                setCorrectAnswer(false);
            }
        } else if (question.type === "CHOICES") {
            if (answer === question.answer) {
                setCorrectAnswer(true);

                localStorage.setItem("score", score + 1);
            } else {
                setCorrectAnswer(false);
            }
        }
    }

    function handleNextQuestion() {
        if (id < maxQuestionId) {
            setAnswered(false);
            router.push(`/${categoryLowerCase}/${parseInt(id) + 1}`);
        } else {
            router.push(`/${categoryLowerCase}/conclusion`);
        }
    }

    return (
        <QuestionContainer answered={answered} correctAnswer={correctAnswer}>
            {question && maxQuestionId && (
                <>
                    {!answered && (
                        <>
                            <StyledTitle>
                                Question {parseInt(id, 10) + 1}
                            </StyledTitle>
                            <StyledParagraph>
                                {question.description}
                            </StyledParagraph>
                            {question.type === "TF" && (
                                <div className="buttons">
                                    <StyledButton
                                        type="button"
                                        onClick={() => handleAnswer(true)}
                                    >
                                        Vrai
                                    </StyledButton>
                                    <StyledButton
                                        type="button"
                                        onClick={() => handleAnswer(false)}
                                    >
                                        Faux
                                    </StyledButton>
                                </div>
                            )}
                            {question.type === "CHOICES" && (
                                <div
                                    className="buttons"
                                    style={{
                                        flexDirection: "column",
                                    }}
                                >
                                    {question.choices.map((choice, index) => (
                                        <StyledButton
                                            style={{ margin: "10px 0" }}
                                            type="button"
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                        >
                                            {choice}
                                        </StyledButton>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    {answered && (
                        <>
                            <StyledTitle>
                                {correctAnswer
                                    ? "Bonne réponse!"
                                    : "Mauvaise réponse!"}
                            </StyledTitle>
                            {!correctAnswer && (
                                <StyledParagraph
                                    style={{
                                        marginTop: "1px",
                                        textDecoration: "underline",
                                    }}
                                >
                                    La bonne réponse était{" "}
                                    {question.type === "TF"
                                        ? correctAnswer
                                            ? "'vrai'"
                                            : "'faux'"
                                        : `'${
                                              question.choices[question.answer]
                                          }'`}
                                </StyledParagraph>
                            )}
                            <StyledParagraph>
                                {question.detailedAnswer}
                            </StyledParagraph>
                            <StyledButton
                                question={true}
                                type="button"
                                onClick={handleNextQuestion}
                            >
                                {id < maxQuestionId ? "Suivant" : "Terminer"}
                            </StyledButton>
                        </>
                    )}
                </>
            )}
        </QuestionContainer>
    );
};

export const getServerSideProps = async (ctx) => {
    const { category, id } = ctx.query;

    const categoryLowerCase = category.toLowerCase();

    if (!Object.keys(categories).includes(categoryLowerCase)) {
        return {
            notFound: true,
        };
    } else if (!questions[categoryLowerCase][id]) {
        return {
            notFound: true,
        };
    }

    return {
        props: {},
    };
};

export default Question;
