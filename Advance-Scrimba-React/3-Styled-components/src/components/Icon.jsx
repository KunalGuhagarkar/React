import styled from "styled-components";

const Circle = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
`;

export default function Icon() {
    return <Circle></Circle>;
}
