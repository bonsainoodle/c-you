import Link from "next/link";
import {
    StyledLink,
    StyledParagraph,
    StyledSubtitle,
    StyledTitle,
} from "../styles/components/Components.styled";
import { HomeContainer } from "../styles/components/Home.styled";

export default function Home() {
    return (
        <HomeContainer>
            <StyledTitle>c-you,</StyledTitle>
            <StyledSubtitle>
                parce que le numérique détruit notre planète
            </StyledSubtitle>
            <StyledParagraph>
                De nos jours le numérique est au centre de nos vies, grâce à ce
                site, vous aurez l’occasion de découvrir entièrement l’empreinte
                environnementale du numérique mondiale. À travers un
                questionnaire complet et équilibré, votre point de vue sur le
                numérique ressortira transformé de cette expérience.
            </StyledParagraph>
            <Link href="/categories">
                <StyledLink>Commencer</StyledLink>
            </Link>
        </HomeContainer>
    );
}
