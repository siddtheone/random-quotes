import React from 'react';
import StyledQuote from './StyledQuote';

export default function Quote({q: {quote, author}, next, text}) {
  const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`;

  const tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';

  return (
    <StyledQuote text={text}>
      <p id="text">{quote}</p>
      <strong id="author"> - {author}</strong>
      <div className="buttons-row">
        <div className="social__icons">
          <a
            className="links"
            id="tweet-quote"
            href={tweet}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            className="links"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-tumblr" />
          </a>
        </div>
        <button className="buttons" id="new-quote" onClick={next}>More</button>
      </div>
    </StyledQuote>
  );
}
