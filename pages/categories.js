import Link from "next/link";
import { CategoriesContainer } from "../styles/components/Categories.styled";
import {
    StyledBlob,
    StyledImage,
    StyledLink,
    StyledParagraph,
    StyledSubtitle,
    StyledTitle,
} from "../styles/components/Components.styled";

const categories = () => {
    return (
        <CategoriesContainer>
            <StyledTitle>Tester vous,</StyledTitle>
            <StyledSubtitle>pour en apprendre plus sur l'impact du numérique</StyledSubtitle>
            <div className="categories">
                <div className="category">
                    <StyledBlob>
                        <StyledImage
                            src="/static/medias/images/a.png"
                            alt="category a"
                        />
                    </StyledBlob>
                    <StyledParagraph style={{ maxWidth: "325px" }}>
                        Impact de l’utilisation du numérique à l'échelle
                        individuelle
                    </StyledParagraph>
                    <Link href="/a/0">
                        <StyledLink>Me tester</StyledLink>
                    </Link>
                </div>
                <div className="category">
                    <StyledBlob>
                        <StyledImage
                            src="/static/medias/images/b.png"
                            alt="category b"
                        />
                    </StyledBlob>
                    <StyledParagraph style={{ maxWidth: "325px" }}>
                        Impact de l'utilisation du numérique à l'échelle
                        mondiale
                    </StyledParagraph>
                    <Link href="/b/0">
                        <StyledLink>Me tester</StyledLink>
                    </Link>
                </div>
                <div className="category">
                    <StyledBlob>
                        <StyledImage
                            src="/static/medias/images/c.jpg"
                            alt="category c"
                        />
                    </StyledBlob>
                    <StyledParagraph style={{ maxWidth: "325px" }}>
                        Comment limiter les impacts du numérique ?
                    </StyledParagraph>
                    <Link href="/c/0">
                        <StyledLink>Me tester</StyledLink>
                    </Link>
                </div>
            </div>
        </CategoriesContainer>
    );
};

export default categories;
