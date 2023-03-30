import React from "react";
import useFetch from "react-fetch-hook";


export default function App({searching}) {
  const { isLoading, error, data } = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searching}`);

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      {data.map((result, index) => (
        <div key={index}>
          <h3>{result.word}</h3>
          <p>{result.meanings[0].definitions[0].definition}</p>
        </div>
      ))}
    </div>
  );
}


