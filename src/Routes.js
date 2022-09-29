import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './components/Pages/App'
import Gato from './components/Pages/Gato'
import Futbolista from './components/Pages/Futbolista'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route exact path="/gatito" element={<Gato />} />
                <Route exact path="/futbolista" element={<Futbolista />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes