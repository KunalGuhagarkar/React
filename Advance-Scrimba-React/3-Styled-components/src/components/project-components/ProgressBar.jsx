import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressValue }) => {
        if (progressValue < 20) {
            return "red";
        } else if (progressValue > 20 && progressValue < 50) {
            return "orange";
        } else if (progressValue > 50 && progressValue < 70) {
            return "yellow";
        } else {
            return "green";
        }
    }}
    width: ${({ progressValue }) => `${progressValue}%`};
`;

export default function ProgressBar({ progressValue }) {
    return (
        <StyledProgressBar progressValue={progressValue}></StyledProgressBar>
    );
}
