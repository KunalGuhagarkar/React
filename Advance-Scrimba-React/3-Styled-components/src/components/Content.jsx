import styled from "styled-components";

const Title = styled.h1`
    color: #aac9f0;
`;

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px;
`;

export default function Content() {
    return (
        <Section>
            <Title>Section</Title>
            <button>Click Me</button>
            <button>Click Me</button>
        </Section>
    );
}
