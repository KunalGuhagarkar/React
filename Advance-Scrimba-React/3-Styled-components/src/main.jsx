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

import Sections from "./components/project-components/Section";

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
                    <Sections />
                </div>
            </>
        );
    }
}

createRoot(document.getElementById("root")).render(<Main />);
