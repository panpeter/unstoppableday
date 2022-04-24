import React from 'react';
import {Home} from "./features/home/Home";
import {Roadmap} from "./features/roadmap/Roadmap";
import {Navigation} from "./features/navigation/Navigation";
import {Footer} from "./features/footer/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {CreatePostForm} from "./features/posts/CreatePostForm";
import {HomeHeader} from "./features/home/HomeHeader";
import {CreatePostHeader} from "./features/posts/CreatePostHeader";
import {RoadmapHeader} from "./features/roadmap/RoadmapHeader";
import {DayHeader} from "./features/day/DayHeader";
import {Day} from "./features/day/Day";

function App() {
    return (
        <Router>
            <header>
                <Navigation/>
                <Routes>
                    <Route path="/roadmap" element={<RoadmapHeader/>}/>
                    <Route path="/new" element={<CreatePostHeader/>}/>
                    <Route path="/:date" element={<DayHeader/>}/>
                    <Route index element={<HomeHeader/>}/>
                </Routes>
            </header>
            <main>
                <Routes>
                    <Route path="/roadmap" element={<Roadmap/>}/>
                    <Route path="/new" element={<CreatePostForm/>}/>
                    <Route path="/:date" element={<Day/>}/>
                    <Route index element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
