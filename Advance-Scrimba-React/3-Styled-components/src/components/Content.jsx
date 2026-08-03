import styled from "styled-components";

const Title = styled.h1`
    color: #aac9f0;
`;

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f0aeaa;
    border-radius: 15px;
`;

const Button = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`;

export default function Content() {
    return (
        <Section>
            <Title>Section</Title>
            <Button>Click Me</Button>
            <Button>Click Me</Button>
        </Section>
    );
}
