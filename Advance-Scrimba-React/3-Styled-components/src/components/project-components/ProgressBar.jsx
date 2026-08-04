import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressvalue }) => progressvalue < '20' ? "red" : "green" }
    width: ${({ progressvalue }) => `${progressvalue}%`};
`;

export default function ProgressBar({ progressValue }) {
    return (
        <StyledProgressBar progressvalue={progressValue}></StyledProgressBar>
    );
}
