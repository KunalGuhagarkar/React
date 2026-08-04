import styled from "styled-components";

// Importing Button Component
import Button from "./Button";

// Importing Icon Component
import Icon from "./Icon";

const Title = styled.h1`
    color: #aaecf0;
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
            <Button primary text="Me First">
                Click Me
            </Button>
            <Button text="Me Second">Click Me</Button>
            <Icon primary />
            <Icon />
            <ParagraphTitle as={ReversedParagraph}>
                This is a Paragraph Title
            </ParagraphTitle>
        </Section>
    );
}
