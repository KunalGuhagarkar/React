import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: 'red';
    width: ${({ progressvalue }) => `${progressvalue}%`};
`;

export default function ProgressBar({ progressValue }) {
    console.log(progressValue);
    return (
        <StyledProgressBar progressvalue={progressValue}></StyledProgressBar>
    );
}
