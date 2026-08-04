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
`

const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f0aeaa;
    border-radius: 15px;
`;

export default function Content() {
    return (
        <Section>
            <Title>Section</Title>
            <SubTitle>Sub Title</SubTitle>
            <Button primary text="Me First">
                Click Me
            </Button>
            <Button text="Me Second">Click Me</Button>
            <Icon primary />
            <Icon />
        </Section>
    );
}
