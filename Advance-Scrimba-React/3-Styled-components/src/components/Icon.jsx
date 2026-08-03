import styled from "styled-components";

const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
`;

export default function Icon() {
    return <Circle></Circle>;
}
