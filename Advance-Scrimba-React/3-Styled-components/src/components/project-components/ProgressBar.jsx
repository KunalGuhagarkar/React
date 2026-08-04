import styled from "styled-components";

const StyledProgressbar = styled.div`
    background-color: ${({progressValue}) => progressValue > 50 ? 'green' : 'red'};
    width: 50%;
`

export default function ProgressBar({progress}) {
    return <StyledProgressbar porgressValue={progress} />;
}
