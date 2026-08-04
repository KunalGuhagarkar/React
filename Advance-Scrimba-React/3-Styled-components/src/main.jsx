// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Project
import React from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

import Sections from "./components/project-components/Sections";

import styled from "styled-components";

const Title = styled.h1`
    color: #b19cd9;
`;

class Main extends React.Component {
    render() {
        return (
            <>
                <Title>Progress Tracker</Title>
                <div>
                    <Sections text="M" progressValue="10" />
                    <Sections text="T" progressValue="20" />
                    <Sections text="W" progressValue="30" />
                    <Sections text="T" progressValue="40" />
                    <Sections text="F" progressValue="50" />
                    <Sections text="S" progressValue="60" />
                    <Sections text="S" progressValue="70" />
                </div>
            </>
        );
    }
}

createRoot(document.getElementById("root")).render(<Main />);
