import React from "react";

function App (){
  return(
    <div>
        <h1 id="title">UW Marketplace</h1>
        <h2 id="opening_tag">A Safe and Easy way to buy and sell at the University of Washington !</h2>

        <div className="search-container">
            <input type="text" id="search-input" placeholder="Search..."/>
            <button id="search-button">Search</button>
        </div>
    </div>
  );
}

export default App;