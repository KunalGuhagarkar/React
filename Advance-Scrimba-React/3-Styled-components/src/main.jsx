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
                    <Sections text="M" progress="10" />
                    <Sections text="T" progress="20"/>
                    <Sections text="W" progress="40"/>
                    <Sections text="T" progress="60"/>
                    <Sections text="F" progress="80"/>
                    <Sections text="S" progress="90"/>
                    <Sections text="S" progress="30"/>
                </div>
            </>
        );
    }
}

createRoot(document.getElementById("root")).render(<Main />);
