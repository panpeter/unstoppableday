import React from 'react';
import {Footer} from "./features/footer/Footer";
import {Navigation} from "./features/navigation/Navigation";

function App() {
    return (
        <div className="App">
            <header>
                <Navigation />
                <h1>Unstoppable Day</h1>
                <p>Decentralized calendar run on the blockchain.</p>
            </header>
            <main>
                <p>
                    Unstoppable Day is the first decentralized calendar dApp run on the Polygon blockchain. Owned and
                    curated by the crypto community, where everyone can find legit NFT drops, ICOs, and other
                    crypto-related events.
                </p>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
