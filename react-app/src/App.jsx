import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function EmojiVote({ emoji, onClick }) {
    return (
        <div className="emoji-vote">
            <span role="img" aria-label="emoji" onClick={onClick}>{emoji}</span>
        </div>
    );
}
function App() {
    const [emojis, setEmojis] = useState([
        { id: 1, symbol: '😀', count: 0 },
        { id: 2, symbol: '😍', count: 0 },
        { id: 3, symbol: '😂', count: 0 },
        { id: 4, symbol: '😎', count: 0 }
    ]);
    const [showResults, setShowResults] = useState(false);

    const handleVote = (id) => {
        setEmojis(emojis.map(emoji =>
            emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
        ));
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    const winnerEmoji = emojis.reduce((prev, current) => prev.count > current.count ? prev : current, emojis[0]);

    return (
        <div className="app">
            <h1>Голосування за найкращий смайлик</h1>
            <div className="emoji-list">
                {emojis.map(emoji => (
                    <EmojiVote key={emoji.id} emoji={emoji.symbol} onClick={() => handleVote(emoji.id)} />
                ))}
            </div>
            <button onClick={handleShowResults}>Показати результати</button>
            {showResults && (
                <div className="winner">
                    <h2>Переможець:</h2>
                    <span role="img" aria-label="winner">{winnerEmoji.symbol}</span>
                    <p>Кількість голосів: {winnerEmoji.count}</p>
                </div>
            )}
        </div>
    );
}


export default App
