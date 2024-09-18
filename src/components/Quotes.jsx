import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

function Quotes() {
    const [quote, setQuote] = useState({ quote: '', author: '' });

    useEffect(() => {fetchQuote();}, []);

    const fetchQuote = async () => {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        setQuote(response.data);
    };

    const handleNewQuote = () => {
        fetchQuote();
    };

    return (
        <div className="quote-generator ">

            <div className="quote-container">
                <h2 className="quote-text">{quote.quote}</h2>
                <p className="quote-author">- {quote.author}</p>
            </div>
            <button className="new-quote-btn" onClick={handleNewQuote}>
                <FontAwesomeIcon icon={faForward} beat />
            </button>
        </div>
    )
}

export default Quotes
