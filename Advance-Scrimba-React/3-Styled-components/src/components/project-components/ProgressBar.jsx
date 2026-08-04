import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressValue }) => console.log(progressValue) }
    width: ${({ progressValue }) => `${progressValue}%`};
`;

export default function ProgressBar({ progressValue }) {
    console.log(progressValue);
    return (
        <StyledProgressBar progressValue={progressValue}></StyledProgressBar>
    );
}
