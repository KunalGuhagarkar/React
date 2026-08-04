import styled from "styled-components";

const StyledProgressbar = styled.div`
    background-color: ${({progress}) => progress > 50 ? 'green' : 'red'};
    width: 50%;
`

export default function ProgressBar({progress}) {
    return <StyledProgressbar progress={progress} />;
}
