import React from "react";
import useFetch from "react-fetch-hook";


export default function App({ searching }) {
  const { isLoading, error, data } = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searching}`);

  if (isLoading) return "Loading...";
  if (error) return "Enter a Word";

  return (
    <div className="dicContainer">
      {data.map((result, index) => (
        <div key={index}>
          <h3>{result.word}</h3>
          <div className="meaningDiv">

            <p>{result.meanings[0].partOfSpeech}</p> {/**Noun*/}

            <p>Definition 1: {result.meanings[0].definitions[0].definition}</p>
          </div>
        </div>
      ))}


      {data.map((result, index) => (
        <div>
          <div className="meaningDiv">
            <p>Example: {result.meanings[0].definitions[0].example}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}


