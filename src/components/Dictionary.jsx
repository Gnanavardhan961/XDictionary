import React, { useState } from "react";

export default function Dictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResult("");
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary-container">
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="result">
        <h3>Definition:</h3>
        {/* Paragraph always present, even if empty */}
        <p>{result}</p>
      </div>
    </div>
  );
}
