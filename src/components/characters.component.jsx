import React from "react";

const Character = () => {
  return (
    <div className="controls">
      <div className="input-container">
        <span>Character Name:</span>
        <input type="text" className="text-input" />
        <button className="fetch-button">Fetch</button>
      </div>
    </div>
    // Display list of all characters here when page loads
    // Once a character name is entered and fetch button is clicked, fetch it's details (name, gender, height)  and display character details in a card
  );
};

export default Character;
