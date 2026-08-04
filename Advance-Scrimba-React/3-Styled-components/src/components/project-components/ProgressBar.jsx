import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressvalue }) => progressvalue > 50 ? "red" : "green" }
    width: ${({ progressvalue }) => `${progressvalue}%`};
`;

export default function ProgressBar({ progressValue }) {
    console.log(progressValue);
    return (
        <StyledProgressBar progressvalue={progressValue}></StyledProgressBar>
    );
}
