import styled from "styled-components";

const StyledProgressbar = styled.div`
    background-color: ${({ progress }) =>
        progress <= 20
            ? "red"
            : progress > 20 && progress <= 50
              ? "orange"
              : progress > 50 && progress < 80
                ? "yellow"
                : "green"};
    width: ${({ progress }) => `${progress}%`};
`;

export default function ProgressBar({ progress }) {
    return <StyledProgressbar progress={progress} />;
}
