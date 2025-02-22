import { React, useEffect, useState } from 'react';
import './game.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

function game() {
    const [comSel, setComSel] = useState(null);
    const [sel, setSel] = useState(null);
    const [Usc, setUsc] = useState(0);
    const [comUsc, setcomUsc] = useState(0);
    const { width, height } = useWindowSize();

    const handleClick = (e) => {
        console.log(e.target.value, 'selected');
        setSel(e.target.value);
        compChoice();
    };

    /* Computer's choice */
    const compChoice = () => {
        const choices = ['Rock', 'Paper', 'Scissor'];
        const randomIndex = Math.floor(Math.random() * 3);
        setComSel(choices[randomIndex]);
    };

    useEffect(() => {
        if (sel && comSel) {
            checkWin(sel, comSel);
        }
    }, [sel, comSel]);

    /* Winning */
    const [won, setWon] = useState(null);

    const checkWin = (sel, comSel) => {
        if (
            (sel === 'Rock' && comSel === 'Scissor') ||
            (sel === 'Paper' && comSel === 'Rock') ||
            (sel === 'Scissor' && comSel === 'Paper')
        ) {
            setWon('You Won');
            setUsc(Usc + 1);
            console.log('You won');
        } else if (sel === comSel) {
            setWon('Match Tied');
        } else {
            setWon('Computer Won');
            setcomUsc(comUsc + 1);
            console.log('Computer won');
        }
    };

    return (
        <>
            <div className="full">
                <div className="head">Rock-Paper-scissors</div>
                <div className="buttons">
                    <button className="button" onClick={handleClick} value="Rock">
                        <i className="fa-solid fa-hand-fist"></i> Rock
                    </button>
                    <button className="button" onClick={handleClick} value="Paper">
                        <i className="fa-solid fa-hand"></i> Paper
                    </button>
                    <button className="button" onClick={handleClick} value="Scissor">
                        <i className="fa-solid fa-hand-scissors"></i> Scissor
                    </button>
                </div>

                {sel === null ? (
                    <div className="notsel">Please Select from the above</div>
                ) : (
                    <div className="sel">
                        your choice : {sel}{' '}
                        <div className="wait">
                            computer's choice : {comSel === null ? 'Waiting...' : comSel}
                        </div>
                    </div>
                )}
                <div className="computer">
                    <p>Your Score = {Usc}</p>
                    <p>Computer's Score = {comUsc}</p>
                </div>

                <div className="res">
                    {won}
                    {won === 'You Won' && (
                        <Confetti width={width} height={height} />
                    )}
                </div>
            </div>
            <div className="footer">
                Made with ❤️ by <a href='github.com/nishantrana07'>Nishant</a>
            </div>
        </>
    );
}

export default game;
