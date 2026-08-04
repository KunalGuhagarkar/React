import styled from "styled-components";

const Circle = styled.div`
    margin: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ primary }) => (primary ? "green" : "yellow")};
    border: ${({ border }) => border || "solid 3px blue"};

    &:hover {
        background-color: "pink";
    }
`;

export default function Icon({ primary, border }) {
    return <Circle primary={primary} border={border} />;
}
