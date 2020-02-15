import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [name, setName] = useState("");
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Type your name below
                </p>
                <input type="text" onChange={(event)=>setName(event.target.value)} name="name"/>
                <p>
                    Your name is {name}
                </p>
            </header>
        </div>
    );
}

export default App;
