import styled, { keyframes } from "styled-components";

// Importing Button Component
import Button from "./Button";

// Importing Icon Component
import Icon from "./Icon";

// Adding Fade In Animation
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

// Adding Rotating Animation
const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Title = styled.h1`
    color: #aaecf0;
    animation: 3s ${rotate} ease-in;
`;

// Extending Styles
const SubTitle = styled(Title)`
    font-size: 14px;
`;

const ParagraphTitle = styled(SubTitle)`
    color: grey;
`;

const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f0aeaa;
    border-radius: 15px;
`;

function ReversedParagraph(props) {
    return (
        <ParagraphTitle
            {...props}
            children={props.children.split("").reverse()}
        />
    );
}

export default function Content() {
    return (
        <Section>
            <Title>Section</Title>
            <SubTitle>I'm a Sub Title</SubTitle>
            <Button primary text="Me First" />
            <Button text="Me Second" />
            <Icon primary border="solid 3px red" />
            <Icon />
            <ParagraphTitle as={ReversedParagraph}>
                This is a Paragraph Title
            </ParagraphTitle>
        </Section>
    );
}
