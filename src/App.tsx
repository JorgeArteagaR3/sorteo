import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [winner, setWinner] = useState<number | null>(null);
    const [concursantes, setConcursantes] = useState<number | null>(null);
    return (
        <div className="myapp">
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h1>Sorteo</h1>
            <div className="card">
                <div className="form">
                    <label htmlFor="numero">Concursantes: </label>
                    <input
                        id="numero"
                        type="text"
                        value={concursantes || null || undefined}
                        onChange={({ target }) =>
                            setConcursantes(Number(target.value))
                        }
                    />
                </div>
                <button
                    onClick={() => {
                        if (concursantes === 0 || !concursantes) return;
                        let magicNumber =
                            Math.floor(Math.random() * concursantes) + 1;
                        setWinner(magicNumber);
                    }}
                >
                    {!winner ? "Sortear" : `El ganador es ${winner}`}
                </button>
                <p>Mucha Suerte!</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
