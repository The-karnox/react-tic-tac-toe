import React, { useState } from 'react';
import TicTacToe from './TicTacToe';
import TicTacToeCPU from './TicTacToeCPU';

function GameOptions() {
    const [gameMode, setGameMode] = useState(null);

    if (gameMode === 'friend') {
        return <TicTacToe />;
    } else if (gameMode === 'cpu') {
        return <TicTacToeCPU />;
    }

    return (
        <div className="game-options-container">
        <h1 className="game-options-title">Choose your game options</h1>
        <button className="game-options-button" onClick={() => setGameMode('friend')}>Play with a friend</button>
        <button className="game-options-button" onClick={() => setGameMode('cpu')}>Play with CPU</button>
    </div>
    );
}

export default GameOptions;