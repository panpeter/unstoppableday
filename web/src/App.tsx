import React from 'react';
import {Home} from "./features/home/Home";
import {Roadmap} from "./features/roadmap/Roadmap";
import {Navigation} from "./features/navigation/Navigation";
import {Footer} from "./features/footer/Footer";
import {Day} from "./features/day/Day";
import {NotFound} from "./features/notfound/NotFound";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <header>
                <Navigation/>
                <h1>Unstoppable Day</h1>
                <p>Decentralized calendar run on the blockchain.</p>
            </header>
            <main>
                <Routes>
                    <Route path="/roadmap" element={<Roadmap/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="/:date" element={<Day/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
