import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: 'red';
    width: 20%;
`;

export default function ProgressBar({ progressValue }) {
    console.log(progressValue);
    return (
        <StyledProgressBar ></StyledProgressBar>
    );
}
