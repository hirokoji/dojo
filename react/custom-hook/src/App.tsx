import React from 'react';
import './App.css';
import {CountButtons, useCountButtons} from "./Components/CountButtons";

function App() {

    const sample1 = useCountButtons('sample1');
    const sample2 = useCountButtons('sample2');
    return (
        <div className="App">
            <CountButtons {...sample1} />
            <CountButtons {...sample2} />
        </div>
    );
}

export default App;
