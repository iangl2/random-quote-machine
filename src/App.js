
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [quote, setQuote] = useState(0);
const [author, setAuthor] = useState(0);
const [link, setLink] = useState(0);
const changeColor = () =>{

  var symbols, color;
  symbols="0123456789ABCDEF";


 color="#";
  for(var i = 0; i<6;i++){
   color=color + symbols[Math.floor(Math.random()*16)];
  
  }
  document.getElementById("container").style.background=color;
  document.getElementById("quote-box").style.color=color;
  document.getElementById("twitter-logo").style.background=color;
  document.getElementById("tweet-quote-container").style.background=color;
  document.getElementById("new-quote").style.background=color;
}

  
useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
     changeColor();
  },[]);
  
  const whenClick = () =>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);  
        setAuthor(quote.author);
      }
    )
    changeColor();
  }
  const createLink = () =>{
    setLink('https://twitter.com/intent/tweet?text='+'"'+quote+ '"' + ' - ' +author)
  }
  return (
    <div className="App"
 id="container"
    >
    <div id="quote-box">
      <div id="text">
"{quote}"
      </div>
      <div id="author"
     
      >
      - {author}
      </div>
    

      <a id="tweet-quote" onClick={createLink} href={link} target="_blank">
     <div id="tweet-quote-container"> 
     
      <img id="twitter-logo"src="https://www.pinclipart.com/picdir/big/578-5789236_logo-twitter-png-blanc-white-twitter-logo-transparent.png"/>
      
      </div>
      </a>
      <button
      id="new-quote"
      onClick={whenClick}
     >
      New quote
      </button>
      
    </div>
   
    </div>
  );
}

export default App;
