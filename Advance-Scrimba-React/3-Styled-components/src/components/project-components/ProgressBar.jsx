import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressValue }) => progressValue > 20 ? "red" : "green" }
    width: ${({ progressValue }) => `${progressValue}%`};
`;

export default function ProgressBar({ progressValue }) {
    return (
        <StyledProgressBar progressValue={progressValue}></StyledProgressBar>
    );
}
