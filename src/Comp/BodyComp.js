import React, { useState } from 'react';
import './bodyComp.css';
import playIcon from './play-icon.png';
import App from './useDictionaryApi';


function BodyComp() {
  const [searchTerm, setSearchTerm] = useState('');
  const charLIMIT = 20;






  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const formData = new FormData(event.target); // get form data
    setSearchTerm(formData.get('search-input'));

  };

  /**
   * @description Update search term state with input value
   */
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /**
   * @description reads out user searched term when clicked using Speech API 
   */
  const handleAudioClick = (event) => {

    event.preventDefault();

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(searchTerm);

    synth.speak(utterance);

  }



  return (
    <div className="body-container">
      <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search-input"
            placeholder="Search"
            className="search-input"
            maxLength={charLIMIT} // limit input to 20 characters
            onChange={handleInputChange} // handle input change
          />
        </form>
      </div>

      <div className='keyWordAudioDiv'>
        <p className='keywordSearched'>{searchTerm}</p>

        <div className='audioPlayerDiv'>
          <button className='bodyBtnPlay' onClick={handleAudioClick}>
            <img src={playIcon}
              alt="play Logo"
              className="header-logo"
              width="45"
              height="45" />
          </button>
        </div>

      </div>

      <div className='dataDiv'>
        <h1>Meaning</h1>
        <App searching={searchTerm} />

      </div>


    </div>
  );
}


export default BodyComp;


