import styled from "styled-components";

const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ primary }) => primary ? "green" : "yellow"};
`;

export default function Icon({ primary }) {
    return <Circle primary={primary}></Circle>;
}
