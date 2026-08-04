import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: ${({ progressValue }) => {
        switch (progressValue) {
            case progressValue < 20:
                "red";
                break;

            default:
                break;
        }
    }}
    width: ${({ progressValue }) => `${progressValue}%`};
`;

export default function ProgressBar({ progressValue }) {
    return (
        <StyledProgressBar progressValue={progressValue}></StyledProgressBar>
    );
}
