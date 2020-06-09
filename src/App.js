import React, {useState, useEffect} from 'react';
import {Global, Screen} from './components/Styled';
import Quote from './components/Quote';
import getRandomIndex from './helper';

export const bgcolors = [
  '#16a085', '#27ae60', '#2c3e50',
  '#f39c12', '#e74c3c', '#9b59b6',
  '#FB6964', '#342224', "#472E32",
  "#BDBB99", "#77B1A9", "#73A857"
];

function App() {
  const [s, setS] = useState({
    loading: false,
    error: false,
    quotes: [],
    randomQuoteIndex: -1,
    randomColorIndex: getRandomIndex(bgcolors.length)
  });

  useEffect(() => {
    setS({
      ...s,
      loading: true
    })
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
      setS({
        ...s,
        loading: false,
        quotes: data.quotes,
        randomQuoteIndex: getRandomIndex(data.quotes.length)
      })
    })
  }, []);

  const next = () => {
    setS({
      ...s,
      randomColorIndex: getRandomIndex(bgcolors.length),
      randomQuoteIndex: getRandomIndex(s.quotes.length)
    });
  }

  const {quotes, randomQuoteIndex, randomColorIndex} = s;

  return (
    <div className="App">
      <Global/>
      <Screen bg={bgcolors[randomColorIndex]} id="quote-box">
        {quotes.length > 0 ? <Quote text={bgcolors[randomColorIndex]} q={quotes[randomQuoteIndex]} next={next} /> : 'Loading'}
      </Screen>
    </div>
  );
}

export default App;
