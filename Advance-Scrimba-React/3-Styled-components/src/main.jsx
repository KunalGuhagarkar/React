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

import './App.css';

class Main extends React.Component {
    render() {
        return (
            <>
                <h1>Progress Tracker</h1>
                <div>
                    <div className="section">
                        <div className="weekday-title">M</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">T</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">W</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">T</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">F</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">S</div>
                    </div>
                    <div className="section">
                        <div className="weekday-title">S</div>
                    </div>
                </div>
            </>
        );
    }
}

createRoot(document.getElementById("root")).render(<Main />);
