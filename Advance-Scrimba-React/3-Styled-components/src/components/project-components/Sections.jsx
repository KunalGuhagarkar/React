import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const WeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`;

const WeekendTitle = styled(WeekdayTitle)`
    color: blue;
`;

const Section = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #f90c00;
`;

export default function Sections({ text, progress }) {
    return (
        <>
            <Section>
                {text === "S" ? (
                    <WeekendTitle>{text}</WeekendTitle>
                ) : (
                    <WeekdayTitle>{text}</WeekdayTitle>
                )}
                <ProgressBar progress={progress} />
            </Section>
        </>
    );
}
