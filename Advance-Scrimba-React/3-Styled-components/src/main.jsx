// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

import styled from "styled-components";

const Title = styled.h1`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
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
    color: #ff6961;
`;

class Main extends React.Component {
    render() {
        return (
            <>
                <Title>Progress Tracker</Title>
                <div>
                    <Section>
                        <div className="weekday-title">M</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">T</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">W</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">T</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">F</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">S</div>
                    </Section>
                    <Section>
                        <div className="weekday-title">S</div>
                    </Section>
                </div>
            </>
        );
    }
}

createRoot(document.getElementById("root")).render(<Main />);
